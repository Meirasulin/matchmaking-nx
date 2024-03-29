import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../db/postgresConnection';
import { MatchmakerType } from '../types/matchmakerType';

const Matchmakers = sequelize.define<
  Model<MatchmakerType  & { id?: Number; createdAt?: Date; updatedAt?: Date }, MatchmakerType>
>(
  'matchmaker',
  {
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastname: {
      type:  DataTypes.TEXT,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    phonenumber: {
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
    tableName: 'matchmaker',
    schema: 'matching',
    timestamps: false

  }
);
export default Matchmakers;


// export const createMatchmakersTable = async () => {
//   try {
//     Matchmakers.sync({force: true}).then((res) => {
//       console.log('Table Matchmakers created successfully', res);
//     });
//     Female.sync({force: true}).then((res) => {
//       console.log('Table Matchmakers created successfully', res);
//     });
    
//     Male.sync({force: true}).then((res) => {
//       console.log('Table Matchmakers created successfully', res);
//     });
//     return;
//   } catch (error) {
//     console.log('Unable to create Table: Matchmakers');
//     return Promise.reject(error);
//   }
// };
