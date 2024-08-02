import { Category, MakePlace, Tally } from "./types";
import { convertColor, getDye } from "./color";

export function tallyItems(mpData: MakePlace) {
  const tally: Tally = Object();

  const categories: Category[] = [
    "interiorFurniture",
    "exteriorFurniture",
    "interiorFixture",
    "exteriorFixture",
  ];
  categories.forEach((category) => {
    mpData[category].forEach((item) => {
      if (item.itemId !== 0) {
        tally[item.itemId] = tally[item.itemId] + 1 || 1;
        if (
          "properties" in item &&
          item.properties.color !== "" &&
          item.properties.color !== undefined
        ) {
          const dye = getDye(item.properties.color);
          tally[dye] = tally[dye] + 1 || 1;
        }
        if (
          "properties" in item &&
          "material" in item.properties &&
          item.properties.material !== undefined
        ) {
          tally[item.properties.material.itemId] =
            tally[item.properties.material.itemId] + 1 || 1;
        }
        // if ("color" in item && item.color !== "" && item.color !== undefined) {
        //   const dye = getDye(item.color);
        //   tally[dye] = tally[dye] + 1 || 1;
        // }
      }
    });
  });

  return tally;
}
