import GameSavingLoader from "./js/GameSavingLoader.js";

try {
  const saving = await GameSavingLoader.load();
  console.log(saving);
} catch (error) {
  console.log(error);
}