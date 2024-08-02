import { gameColors } from "./data";

interface MpColor {
  red: number;
  green: number;
  blue: number;
}

export const convertColor = (color: string): MpColor => {
  return {
    red: parseInt(color.substring(0, 2), 16),
    green: parseInt(color.substring(2, 4), 16),
    blue: parseInt(color.substring(4, 6), 16),
  };
};

export const getDye = (color: string): number => {
  const mpColor = convertColor(color);
  let candidate = { id: 0, distance: 99999 };

  for (const dye of gameColors) {
    const distance = Math.sqrt(
      (dye.red - mpColor.red) ** 2 +
        (dye.green - mpColor.green) ** 2 +
        (dye.blue - mpColor.blue) ** 2,
    );
    if (distance === 0) {
      return dye.itemId;
    }
    if (distance < candidate.distance) {
      candidate = { id: dye.itemId, distance };
    }
  }
  return candidate.id;
};
