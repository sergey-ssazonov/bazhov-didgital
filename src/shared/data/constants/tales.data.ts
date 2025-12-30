import BlueSnake from "@/public/images/tales/BlueSnake.webp";
import CuprumHostess from "@/public/images/tales/CuprumHostess.webp";
import ErmakSwans from "@/public/images/tales/ErmakSwans.webp";
import MalachiteBox from "@/public/images/tales/MalachiteBox.webp";
import SilverHoof from "@/public/images/tales/SilverHoof.webp";
import StoneFlower from "@/public/images/tales/StoneFlower.webp";
import { ITale } from "../../types/Tale";

export const TALES_Data: ITale[] = [
  { id: 1, previewSrc: MalachiteBox.src, title: "Малахитовая шкатулка" },
  { id: 2, previewSrc: CuprumHostess.src, title: "Медной горы хозяйка" },
  { id: 3, previewSrc: StoneFlower.src, title: "Каменный цветок" },
  { id: 4, previewSrc: SilverHoof.src, title: "Серебряное копытце" },
  { id: 5, previewSrc: BlueSnake.src, title: "Голубая змейка " },
  { id: 6, previewSrc: ErmakSwans.src, title: "Ермаковы лебеди" },
];
