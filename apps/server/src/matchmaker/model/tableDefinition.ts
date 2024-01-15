import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../db/postgresConnection';
import { MatchmakerType } from '../types/matchmakerType';

const Matchmakers = sequelize.define<
  Model<MatchmakerType & {matchmakerId?:  Number, createdAt?: Date; updatedAt?: Date }, MatchmakerType>
>(
  'matchmakers',
  {
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastName: {
      type:  DataTypes.TEXT,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phoneNumber: {
      type:  DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    email: {
      type:  DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: 'unvalidate email' },
      },
    },
    gender: {
      type: DataTypes.ENUM('male', 'female'),
      allowNull: false,
      validate: {
        isIn: [['male', 'female']],
      },
    },
    specialty: {
      type:  DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type:  DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: 'matchmakers',
    schema: 'matching'
  }
);
export default Matchmakers;

export const createMatchmakersTable = async () => {
  try {
    // const tableExists = await sequelize.getQueryInterface().showAllTables();
    // const isExsits = tableExists.includes('Matchmakers');
    // if (isExsits === true) return;
    Matchmakers.sync({alter: true}).then((res) => {
      console.log('Table Matchmakers created successfully', res);
    });
    return;
  } catch (error) {
    console.log('Unable to create Table: Matchmakers');
    return Promise.reject(error);
  }
};
