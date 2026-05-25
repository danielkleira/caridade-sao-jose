import type { FoodItem } from "../types/food";

const SHEET_URL =
  "https://opensheet.elk.sh/1Vj21VwJ4M4qDwkLWp7Xv589P_g07E59e6b-flh3AgSA/página1";

export async function fetchFoods(): Promise<FoodItem[]> {
  const response = await fetch(SHEET_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar planilha");
  }

  return response.json();
}
