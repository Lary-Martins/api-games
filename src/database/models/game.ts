import { DataTypes, Model } from 'sequelize';
import { IGame } from '../../interfaces/IGame';
import db from '../connection';
import Platform from './platform';

class Game extends Model implements IGame {
  declare id: string;
  declare name: string;
  declare description: string;
  declare price: number;
  declare platformId: string;
}

Game.init({
  id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  platformId: {
    type: DataTypes.UUIDV4,
    allowNull: false,
  }
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'Game',
  tableName: 'games'
});

Platform.hasMany(Game, { foreignKey: 'platformId', as: 'platformId' });

Game.belongsTo(Platform, { foreignKey: 'id', as: 'id' });

export default Game;