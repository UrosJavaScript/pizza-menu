// images
import Pizza1 from "../assets/pizzas/focaccia.jpg";
import Pizza2 from "../assets/pizzas/funghi.jpg";
import Pizza3 from "../assets/pizzas/margherita.jpg";
import Pizza4 from "../assets/pizzas/prosciutto.jpg";
import Pizza5 from "../assets/pizzas/salamino.jpg";
import Pizza6 from "../assets/pizzas/spinaci.jpg";

export const PIZZA_DATA = [
  {
    id: 1,
    name: "Focaccia",
    ingredients: "bread with italian olive and mozzarella",
    price: "10€",
    photoName: Pizza1,
    soldOut: true,
  },
  {
    id: 2,
    name: "Funghi",
    ingredients: "mushrooms brown butter",
    price: "11€",
    photoName: Pizza2,
    soldOut: false,
  },
  {
    id: 3,
    name: "Margherita",
    ingredients: "tomato, fresh mozzarella, basil and olive oil",
    price: "12€",
    photoName: Pizza3,
    soldOut: false,
  },
  {
    id: 4,
    name: "Prosciutto",
    ingredients: "prosciutto, mozzarella, arugula and olive oil",
    price: "13€",
    photoName: Pizza4,
    soldOut: false,
  },
  {
    id: 5,
    name: "Salamino",
    ingredients:
      "Milano salami on crispy and puffy dough with tomato sauce, mozzarella and oregano",
    price: "14€",
    photoName: Pizza5,
    soldOut: true,
  },
  {
    id: 6,
    name: "Spinaci",
    ingredients: "spinach, pine nuts, black olives, mozzarella",
    price: "15€",
    photoName: Pizza6,
    soldOut: false,
  },
];
