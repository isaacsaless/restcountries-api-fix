import { VercelRequest, VercelResponse } from '@vercel/node';
import { request } from 'undici';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      message: 'Método não permitido'
    });
  }

  const { pais } = req.query;

  if (!pais || typeof pais !== 'string') {
    return res.status(400).json({
      success: false,
      message: "Parâmetro 'pais' é obrigatório",
    });
  }

  try {
    const resTranslation = await request("https://libretranslate.com/translate", {
      method: "POST",
      body: JSON.stringify({
        q: pais,
        source: "auto",
        target: "en",
        format: "text",
        alternatives: 3,
        api_key: ""
      }),
      headers: { "Content-Type": "application/json" }
    });

    const translationData = await resTranslation.body.json() as { translatedText?: string };
    const translatedCountry = translationData.translatedText || pais;

    const response = await request(`https://restcountries.com/v3.1/name/${translatedCountry}`);
    const data = await response.body.json();

    if (!data || !Array.isArray(data) || data.length === 0) {
      return res.status(404).json({
        success: false,
        message: "País não encontrado",
      });
    }

    return res.status(200).json({
      success: true,
      data: data,
    });

  } catch (err) {
    console.error("Erro ao obter dados:", err);
    return res.status(500).json({
      success: false,
      message: "Erro ao obter dados",
    });
  }
}
