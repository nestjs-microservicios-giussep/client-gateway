import 'dotenv/config';
import * as joi from 'joi';

interface EnvValues {
  port: number;
}

const schema = joi
  .object({
    PORT: joi.number().required(),
  })
  .unknown(true);
const { error, value } = schema.validate(process.env);
if (error) {
  throw new Error(`Configuration validation error ${error.message}`);
}

export const env: EnvValues = {
  port: value.PORT,
};
