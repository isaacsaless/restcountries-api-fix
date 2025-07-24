import Fastify from 'fastify';
import getFixRestCountries from './routes/fix-restcountries';

const app = Fastify();

app.register(getFixRestCountries);

app.listen({ port: 3000, host:'0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});