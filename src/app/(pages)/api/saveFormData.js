// pages/api/saveFormData.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // Defina o caminho do arquivo onde os dados serão salvos
    const filePath = path.join(process.cwd(), 'data', 'formData.json');

    // Crie a pasta 'data' se não existir
    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    // Escreva os dados no arquivo JSON
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.status(200).json({ message: 'Dados salvos com sucesso!' });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}