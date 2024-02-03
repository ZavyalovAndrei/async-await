import GameSavingLoader from "./GameSavingLoader.js";

try {
  const saving = await GameSavingLoader.load();
  console.log(saving);
} catch (error) {
  console.log(error);
}
