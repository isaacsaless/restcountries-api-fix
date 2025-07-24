import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import getFixRestCountries from './routes/fix-restcountries';

const app = Fastify();

app.register(fastifyCors, {origin: "*"});
app.register(getFixRestCountries);

app.listen({ port: 4321, host:'0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});