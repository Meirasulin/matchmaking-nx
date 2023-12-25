import { Sequelize } from "sequelize";
import "dotenv/config";

const connectToPG = async () => {
  const sequelize = new Sequelize(process.env.POSTGRES_URL as string);
  try {
    await sequelize.authenticate();
    return true;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectToPG;
