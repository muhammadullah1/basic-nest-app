import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  url: process.env.DATABASE_URL,
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  password: process.env.DATABASE_PASSWORD,
  name: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  synchronize: JSON.parse(process.env.DATABASE_SYNCHRONIZE),
}));
