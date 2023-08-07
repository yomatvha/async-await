import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load(value) {
    return new Promise((resolve, reject) => {
      try {
        const objValue = new GameSaving(JSON.parse(value));
        resolve(objValue);
      } catch (err) {
        reject(err);
      }
    });
  }
}
