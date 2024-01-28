import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../db/postgresConnection';
import { TypeMatching } from '../types/matchingType';

const Matching = sequelize.define<
  Model<TypeMatching & { id?: Number }, TypeMatching>
>(
  'matching',
  {
    idmatchmaker: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    idfemale: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    idmale: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    asks: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: 'matching',
    schema: 'matching',
    timestamps: false,
  }
);
export default Matching;
