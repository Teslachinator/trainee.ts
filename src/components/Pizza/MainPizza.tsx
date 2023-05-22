import { FC, useState } from "react";
import "../../App.css";
import "./stylesGlobal.css";
import AddPizzaForm from "./AddPizzaForm";
import Pizza from "../../models/Pizza";
import DisplayPizzas from "./DisplayPizzas";

const MainPizza: FC = () => {
  const demoPizzas = [
    { title: "Pepperoni", price: 320, img: "pizza-1.jpg", id: 1 },
    { title: "Margarita", price: 400, img: "pizza-2.jpg", id: 2 },
    { title: "Saussage", price: 531, img: "pizza-3.jpg", id: 3 },
    { title: "3 Cheese", price: 770, img: "pizza-4.jpg", id: 4 },
    { title: "Veggie", price: 900, img: "pizza-5.jpg", id: 5 },
    { title: "Mixed", price: 620, img: "pizza-6.jpg", id: 6 },
  ];
  const [pizzasList, setPizzasList] = useState<Pizza[]>(demoPizzas);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };
  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(
      pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
    );
  };

  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter((pizza) => pizza.id !== id);
    setPizzasList(newPizzasList);
  };

  console.log(pizzasList);
  return (
    <div>
      <div className="wrap">
        <span className="heading">Наша пиццерия</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas
          pizzasList={pizzasList}
          deletePizza={deletePizza}
          updatePizza={updatePizza}
        />
      </div>
    </div>
  );
};

export default MainPizza;
