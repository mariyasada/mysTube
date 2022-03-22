import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Alcoholic Ink Art",
    image:"./assets/alcoholink.jpg",
    subDescription:"Top beginner friendly videos to learn the different techniques of Alcohol Ink Art.",
    description:
      "Alcohol inks are brightly colored dye-based paints that are most often used in creating free flowing textures.",
  },
  {
    _id: uuid(),
    categoryName: "Resin Art",
    image:"./assets/costers1.jpg",
    subDescription:"Top videos to learn how to make coasters,key-chains,wall piece with Resin art.",
    description:
      "Resin art is a unique painting style where you do not use typical brushes or acrylic or oil paints. It is considered advanced painting for the new age creative crowd.",
  },
  {
    _id: uuid(),
    categoryName: "Acrylic Fluid Art",
    image:"./assets/acrylic.jpg",
    subDescription:"Top videos to learn the Acrylic Fluid Art",
    description:
      "Besides canvas, paper, and card, you can use acrylics to paint on glass and plastic, metal and stone, fabric, and leather.",
  },
  {
    _id: uuid(),
    categoryName: "Mehendi Art",
    image:"./assets/mehendi2.jpg",
    subDescription:"Top easy videos to learn the basic Mehendi Art and styles like arabic mehndi,indo-arabic etc.",
    description:
      "Mehndi (also called Mehandi) is the traditional art of painting the hands, feet or body with a paste made from the powdered, dried leaves of the henna plant.",
  },
];
