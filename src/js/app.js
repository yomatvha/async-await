import GameSavingLoader from './GameSavingLoader';
import json from './parser';
import read from './reader';

async function main() {
  try {
    const data = await read();
    const value = await json(data);
    const saving = await GameSavingLoader.load(value);
    return saving;
  } catch (err) {
    throw new Error(err);
  }
}

main();
