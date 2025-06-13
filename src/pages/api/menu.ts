// src/pages/api/menu.ts
import { NextApiRequest, NextApiResponse } from 'next';

const menuItems = [
  {
    id: 1,
    name: "Classic Latte",
    description: "Smooth blend of espresso and steamed milk.",
    category: "Coffee",
    price: "$4.50",
    badge: "Best Seller",
    calories: 150,
    dietary: ["Vegetarian"],
    available: true,
  },
  {
    id: 2,
    name: "Vegan Brownie",
    description: "Rich, chocolatey brownie made without animal products.",
    category: "Snacks",
    price: "$3.00",
    badge: "New",
    calories: 250,
    dietary: ["Vegan"],
    available: true,
  },
  {
    id: 3,
    name: "Pumpkin Spice Latte",
    description: "Seasonal favourite with a spicy kick.",
    category: "Seasonal",
    price: "$5.00",
    badge: "Seasonal",
    calories: 200,
    dietary: ["Vegetarian"],
    available: false,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(menuItems);
}
