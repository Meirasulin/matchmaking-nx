import { Sequelize } from 'sequelize';
import 'dotenv/config';

export const sequelize = new Sequelize(process.env.POSTGRES_URL as string);

const connectToPG = async () => {
  try {
    await sequelize.authenticate();
    return true;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectToPG;
