import { hash } from "bcrypt";
import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("sqlite::memory:");

const Matchmakers = sequelize.define(
  "Matchmakers",
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
      type: DataTypes.DATEONLY,
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
      type: DataTypes.ENUM("male", "female"),
      allowNull: false,
      validate: {
        isIn: [["male", "female"]],
      },
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue("password", hash(value as string, 10));
      },
    },
  },
  {
    tableName: "Matchmakers",
  }
);
export const createMatchmakersTable = async () => {
  try {
    await Matchmakers.sync().then(() => {
      console.log("Table Matchmakers created successfully");
    });
  } catch (error) {
    console.log("Unable to create Table: Matchmakers");
    return Promise.reject(error);
  }
};
export default Matchmakers;
