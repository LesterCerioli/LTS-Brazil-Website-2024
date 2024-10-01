import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const formData = req.body;

    // Logs de início do processamento
    const startTime = new Date();
    console.log(`Início do processamento: ${startTime.toISOString()}`);

    let retries = 3; // Número de tentativas
    let success = false;
    let responseStatus = '';

    while (retries > 0 && !success) {
      try {
        // Chamada para o serviço externo
        const response = await fetch('URL_DO_SERVIÇO_EXTERNO', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Falha ao enviar dados para o serviço externo');
        }

        // Se a chamada for bem-sucedida
        success = true;
        responseStatus = 'Dados enviados com sucesso!';
      } catch (error) {
        retries--;
        // Fazendo um type assertion para tratar o erro como um Error
        const errorMessage = (error as Error).message || 'Erro desconhecido';
        console.error(`Erro ao enviar dados: ${errorMessage}. Tentativas restantes: ${retries}`);
        responseStatus = `Erro: ${errorMessage}`;
      }
    }

    // Logs de término do processamento
    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    console.log(`Fim do processamento: ${endTime.toISOString()} | Duração: ${duration}ms`);

    return res.status(success ? 200 : 500).json({
      message: responseStatus,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      duration,
      success,
    });
  } else {
    return res.status(405).json({ message: 'Método não permitido' });
  }
}
