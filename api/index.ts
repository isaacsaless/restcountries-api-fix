import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const baseUrl = `https://${req.headers.host}`;
  
  res.status(200).json({
    message: "RestCountries API Fix - Wrapper que aceita nomes de países em português",
    version: "1.0.0",
    endpoints: {
      "fix-restcountries": {
        url: `${baseUrl}/api/fix-restcountries`,
        method: "GET",
        parameters: {
          pais: "Nome do país em português ou inglês (obrigatório)"
        },
        examples: [
          `${baseUrl}/api/fix-restcountries?pais=Brasil`,
          `${baseUrl}/api/fix-restcountries?pais=Japão`,
          `${baseUrl}/api/fix-restcountries?pais=Germany`
        ]
      }
    },
    documentation: "https://github.com/isaacsaless/restcountries-api-fix",
    originalAPI: "https://restcountries.com"
  });
}
