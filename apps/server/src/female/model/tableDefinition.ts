import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../db/postgresConnection';
import { FemaleType } from '../types/femaleType';
// import { MatchmakerType } from '../types/matchmakerType';

const Female = sequelize.define<
  Model<
    FemaleType & { matchfemaleId?: Number; createdat?: Date; updatedat?: Date },
    FemaleType
  >
>(
  'matchmaker',
  {
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    maritalstatus: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fathername: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    mothername: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    origin: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    height: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },

    headwear: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    pelkoshers: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    currentaddress: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imglink: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    seminar: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    highereducation: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    educationname: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    highereducationacademy: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    jobstatus: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    jobcompany: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phonenumber: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.TEXT,
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
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: 'matchmaker',
    schema: 'matching',
  }
);
export default Female;
