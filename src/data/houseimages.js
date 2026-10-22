import house1 from "../assets/house/1.jpg";
import house2 from "../assets/house/2.jpg";
import house3 from "../assets/house/3.jpg";
import house4 from "../assets/house/4.jpg";
import house5 from "../assets/house/5.jpg";
// Fallbacks for 6 and 7 as only 1.jpg - 5.jpg exist in assets/house
const house6 = house2;
const house7 = house3;

export const HOUSE_MAP = {
  "1.jpg": house1,
  "2.jpg": house2,
  "3.jpg": house3,
  "4.jpg": house4,
  "5.jpg": house5,
  "6.jpg": house6,
  "7.jpg": house7,
  "house/1.jpg": house1,
  "house/2.jpg": house2,
  "house/3.jpg": house3,
  "house/4.jpg": house4,
  "house/5.jpg": house5,
  "house/6.jpg": house6,
  "house/7.jpg": house7,
  "1": house1,
  "2": house2,
  "3": house3,
  "4": house4,
  "5": house5,
  "6": house6,
  "7": house7
};

export const HOUSE_IMAGES = [
  house1,
  house2,
  house3,
  house4,
  house5,
  house6,
  house7
];

export function getHouseImage(key, fallback = house1) {
  if (!key) return fallback;
  if (typeof key === "string" && (key.startsWith("http://") || key.startsWith("https://") || key.startsWith("data:"))) {
    return key;
  }
  return HOUSE_MAP[key] || fallback;
}

export default HOUSE_MAP;
