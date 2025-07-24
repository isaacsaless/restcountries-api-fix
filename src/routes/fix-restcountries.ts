import { request } from 'undici';
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import googleTranslate from 'open-google-translator';

interface QueryParams {
  pais: string;
}

export default async function routes(fastify: FastifyInstance) {
  fastify.get(
    "/fix-restcountries",
    async (
      requestFastify: FastifyRequest<{ Querystring: QueryParams }>,
      reply: FastifyReply
    ) => {
      const { pais } = requestFastify.query;

      if (!pais) {
        return reply.status(400).send({
          success: false,
          message: "Parâmetro 'pais' é obrigatório",
        });
      }

      try {
        const translationData = await googleTranslate
          .TranslateLanguageData({
            listOfWordsToTranslate: [pais],
            fromLanguage: "pt",
            toLanguage: "en",
          })

        const translation = translationData[0]?.translation
        const response = await request(`https://restcountries.com/v3.1/name/${translation}`);
        const data = await response.body.json();

        if (!data || !Array.isArray(data) || data.length === 0) {
          return reply.status(404).send({
            success: false,
            message: "País não encontrado",
          });
        }

        return reply.send({
          success: true,
          data: data,
        });

      } catch (err) {
        console.error("Erro ao obter dados:", err);
        return reply.status(500).send({
          success: false,
          message: "Erro ao obter dados",
        });
      }
    }
  );
}