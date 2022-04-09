import { DataTypes, Model } from 'sequelize';
import { IPlatform } from '../../interfaces/IPlatform';
import db from '../connection';

class Platform extends Model implements IPlatform {
  declare id: string;
  declare name: string;
}

Platform.init({
  id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'Platform',
  tableName: 'platforms'
})

export default Platform;