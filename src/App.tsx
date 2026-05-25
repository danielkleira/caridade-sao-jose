import { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/Header";
import FoodCard from "./components/FoodCard";

import { fetchFoods } from "./services/sheets";

import type { FoodItem } from "./types/food";

export default function App() {
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFoods()
      .then(setFoods)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <Header />

      {loading ? (
        <p className="loading">Carregando...</p>
      ) : (
        <>
          <div className="grid">
            {foods.map((food) => (
              <FoodCard
                key={food.alimento}
                alimento={food.alimento}
                meta={Number(food.meta)}
                arrecadado={Number(food.arrecadado)}
              />
            ))}
          </div>

          {/* PIX */}
          <div className="pix-box">
            <h2>💚 Deseja ajudar?</h2>

            <p>
              Você também pode contribuir via PIX para ajudar nossa campanha de
              arrecadação.
            </p>

            <button
              className="pix-key"
              onClick={() => {
                navigator.clipboard.writeText("fatimadurante@hotmail.com");
                alert("Chave PIX copiada!");
              }}
            >
              📋 fatimadurante@hotmail.com
            </button>

            <span className="pix-name">Pastoral da Caridade</span>
          </div>
        </>
      )}
    </div>
  );
}
