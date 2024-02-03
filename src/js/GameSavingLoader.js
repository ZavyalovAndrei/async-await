import json from "./parser.js";
import read from "./reader.js";
import GameSaving from "./GameSaving.js";

export default class GameSavingLoader {
  static async load() {
    const readData = await read();
    const jsonData = await json(readData);
    const obj = JSON.parse(jsonData);
    const gameSaving = new GameSaving(
      obj.id,
      obj.created,
      obj.userInfo.id,
      obj.userInfo.name,
      obj.userInfo.level,
      obj.userInfo.points
    );
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(gameSaving);
      }, 1600);
    });
  }
}
