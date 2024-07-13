import 'dotenv/config';
import * as joi from 'joi';

interface EnvValues {
  port: number;
  // producstMicroserviceHost: string;
  // productsMicroservicePort: number;
  // ordersMicroserviceHost: string;
  // ordersMicroservicePort: number;
  natsServers: string[];
}

const schema = joi
  .object({
    PORT: joi.number().required(),
    // PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
    // PRODUCTS_MICROSERVICE_PORT: joi.number().required(),
    // ORDERS_MICROSERVICE_HOST: joi.string().required(),
    // ORDERS_MICROSERVICE_PORT: joi.number().required(),
    NATS_SERVERS: joi.array().items(joi.string()).required(),
  })
  .unknown(true);
const { error, value } = schema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS.split(','),
});
if (error) {
  throw new Error(`Configuration validation error ${error.message}`);
}

export const env: EnvValues = {
  port: value.PORT,
  // producstMicroserviceHost: value.PRODUCTS_MICROSERVICE_HOST,
  // productsMicroservicePort: value.PRODUCTS_MICROSERVICE_PORT,
  // ordersMicroserviceHost: value.ORDERS_MICROSERVICE_HOST,
  // ordersMicroservicePort: value.ORDERS_MICROSERVICE_PORT,
  natsServers: value.NATS_SERVERS,
};
