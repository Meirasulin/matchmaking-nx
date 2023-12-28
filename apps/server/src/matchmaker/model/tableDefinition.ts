import { DataTypes } from 'sequelize';
import { sequelize } from '../../db/postgresConnection';
// export const sequelize = new Sequelize('sqlite::memory:', {
//   logging: console.log,
//   dialectOptions: {
//     keepConnectionAcrossTransactions: true,
//   },
// });

const Matchmakers = sequelize.define(
  'Matchmakers',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    credential: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    gender: {
      type: DataTypes.ENUM('male', 'female'),
      allowNull: false,
      // validate: {
      //   isIn: [['male', 'female']],
      // },
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Matchmakers',
  }
);
export default Matchmakers;

export const createMatchmakersTable = async () => {
  try {
    const tableExists = await sequelize.getQueryInterface().showAllTables();
    const isExsits = tableExists.includes('Matchmakers');
    console.log(isExsits);
    if (isExsits === true) return;
    Matchmakers.sync().then((res) => {
      console.log('Table Matchmakers created successfully', res);
    });
    return;
  } catch (error) {
    console.log('Unable to create Table: Matchmakers');
    return Promise.reject(error);
  }
};
