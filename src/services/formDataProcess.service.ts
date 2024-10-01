import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { Writable } from 'stream';

const logFilePath = path.join(__dirname, 'processing_logs.json');
let logQueue: any[] = [];

// Função para validar a entrada do log
const validateLogEntry = (status: string) => {
    if (typeof status !== 'string') {
        throw new Error('Status deve ser uma string');
    }
};

// Função para adicionar um log à fila
const enqueueLog = (status: string) => {
    validateLogEntry(status);

    const currentDateTime = new Date();
    const logEntry = {
        timestamp: currentDateTime.toISOString(),
        status: status,
    };

    logQueue.push(logEntry);

    // Enviar logs para a API em lotes a cada 5 entradas
    if (logQueue.length >= 5) {
        sendLogToApi();
    }
};

// Função para enviar logs para a API
const sendLogToApi = async () => {
    if (logQueue.length === 0) return;

    const logData = [...logQueue];
    logQueue = []; // Limpa a fila após cópia

    const apiUrl = process.env.API_URL;
    if (!apiUrl) {
        console.error('API_URL não está definida');
        return;
    }

    try {
        const response = await axios.post(apiUrl, logData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Logs enviados com sucesso:', response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Erro ao enviar logs para a API:', error.message);
        } else {
            console.error('Erro desconhecido:', error);
        }
        logQueue = logData; // Restaura a fila em caso de falha
    }
};

// Função para escrever logs em arquivo de forma segura
const writeLogsToFile = () => {
    const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });

    const writable = new Writable({
        write(chunk, encoding, callback) {
            logStream.write(JSON.stringify(chunk) + '\n', encoding, callback);
        }
    });

    logQueue.forEach(logEntry => {
        writable.write(logEntry);
    });

    writable.end(() => {
        console.log('Logs escritos no arquivo com sucesso.');
        logQueue = []; // Limpa a fila após escrita
    });
};

// Exemplo de uso
enqueueLog('Processo iniciado');
// Para forçar a escrita no arquivo a qualquer momento (opcional)
setInterval(writeLogsToFile, 60000); // Escreve no arquivo a cada 60 segundos