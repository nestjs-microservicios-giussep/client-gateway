import 'dotenv/config';
import * as joi from 'joi';

interface EnvValues {
  port: number;
  producstMicroserviceHost: string;
  productsMicroservicePort: number;
}

const schema = joi
  .object({
    PORT: joi.number().required(),
    PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
    PRODUCTS_MICROSERVICE_PORT: joi.number().required(),
  })
  .unknown(true);
const { error, value } = schema.validate(process.env);
if (error) {
  throw new Error(`Configuration validation error ${error.message}`);
}

export const env: EnvValues = {
  port: value.PORT,
  producstMicroserviceHost: value.PRODUCTS_MICROSERVICE_HOST,
  productsMicroservicePort: value.PRODUCTS_MICROSERVICE_PORT,
};
