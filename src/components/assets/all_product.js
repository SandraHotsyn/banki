import red_dragon from "./red_dragon.jpg";
import photo_vugor from "./photo_vugor.jpg";
import photo_kopchenyi from "./photo_kopchenyi.jpg";
import photo_krevetka from "./photo_krevetka.jpg";
import photo_losos from "./photo_losos.jpg";
import photo_syr from "./photo_syr.jpg";

import cheezu_vugor from "./cheezu_vugor.jpg";
import cheezu_kopchenyi from "./cheezu_kopchenyi.jpg";
import cheezu_krevetka from "./cheezu_krevetka.jpg";
import cheezu_losos from "./cheezu_losos.jpg";
import cheezu_set from "./cheezu_set.jpg";
import cheezu_surmii from "./cheezu_surmii.jpg";
import cheezu from "./cheezu.jpg";

import black_dragon from "./black_dragon.jpg";
import shikai from "./shikai.jpg";
import youzu from "./youzu.jpg";

import new_year from "./NewYear.png";
import noitra from "./Noitra.jpg";
import rainbow from "./rainbow.jpg";
import shares from "./shares.jpg";
import maki_vugor from "./maki_vugor.jpg";
import maki_kopchenyi from "./maki_kopchenyi.jpg";
import maki_krab from "./maki_krab.jpg";
import maki_krevetka from "./maki_krevetka.jpg";
import maki_losos from "./maki_losos.jpg";
import tyhrovyj_drakon from "./tyhrovyj_drakon.jpg";
import tobume from "./tobume.jpg";
import fila_miks from "./fila_miks.jpg";
import fila_full from "./fila_full.jpg";
import filadelfia_z_los from "./filadelfia_z_los.png";

let all_product = [
  {
    id: 1,
    name: "Червоний Дракон",
    category: "dragons",
    image: red_dragon,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 2,
    name: "Тигровий Дракон",
    category: "maki",
    image: red_dragon,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 3,
    name: "фото вугор",
    category: "other",
    image: photo_vugor,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 4,
    name: "фото копчений",
    category: "other",
    image: photo_kopchenyi,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 5,
    name: "фото креветка",
    category: "other",
    image: photo_krevetka,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 6,
    name: "фото лосось",
    category: "other",
    image: photo_losos,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 7,
    name: "фото сир",
    category: "other",
    image: photo_syr,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 8,
    name: "чізу вугор",
    category: "cheezu",
    image: cheezu_vugor,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 9,
    name: "чізу копчений",
    category: "cheezu",
    image: cheezu_kopchenyi,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 10,
    name: "чізу креветка",
    category: "cheezu",
    image: cheezu_krevetka,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 11,
    name: "чізу лосось",
    category: "cheezu",
    image: cheezu_losos,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 12,
    name: "чізу set",
    category: "cheezu",
    image: cheezu_set,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 14,
    name: "чізу сурмії",
    category: "cheezu",
    image: cheezu_surmii,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 15,
    name: "чізу",
    category: "cheezu",
    image: cheezu,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 16,
    name: "Чорний дракон",
    category: "dragons",
    image: black_dragon,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 17,
    name: "шикай",
    category: "sets",
    image: shikai,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 18,
    name: "юзу",
    category: "sets",
    image: youzu,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 22,
    name: "NewYear",
    category: "sets",
    image: new_year,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 23,
    name: "Noitra",
    category: "sets",
    image: noitra,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 24,
    name: "rainbow",
    category: "sets",
    image: rainbow,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 25,
    name: "shares",
    category: "sets",
    image: shares,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 26,
    name: "макі вугор",
    category: "maki",
    image: maki_vugor,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 27,
    name: "макі копчений",
    category: "maki",
    image: maki_kopchenyi,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 28,
    name: "макі краб",
    category: "maki",
    image: maki_krab,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 29,
    name: "макі креветка",
    category: "maki",
    image: maki_krevetka,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 30,
    name: "макі лосось",
    category: "maki",
    image: maki_losos,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 31,
    name: "Тигровий дракон",
    category: "dragons",
    image: tyhrovyj_drakon,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 32,
    name: "тобуме",
    category: "rolls",
    image: tobume,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 33,
    name: "Філа мікс",
    category: "rolls",
    image: fila_miks,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 34,
    name: "Філа Фулл",
    category: "rolls",
    image: fila_full,
    new_price: 50.0,
    old_price: 85.5,
  },
  {
    id: 35,
    name: "Філадельфія з лососем",
    category: "rolls",
    image: filadelfia_z_los,
    new_price: 50.0,
    old_price: 85.5,
  },
];

export default all_product;
