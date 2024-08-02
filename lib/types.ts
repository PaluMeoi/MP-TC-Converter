export interface MakePlace {
  lightLevel: number;
  houseSize: string;
  interiorFixture: InteriorFixture[];
  exteriorScale: number;
  exteriorFixture: ExteriorFixture[];
  exteriorFurniture: ExteriorFurniture[];
  metaData: MetaData;
  interiorScale: number;
  interiorFurniture: InteriorFurniture[];
  properties: Properties;
}

export interface InteriorFixture {
  level: string;
  type: string;
  name: string;
  itemId: number;
  color: string;
}

export interface ExteriorFixture {
  level: string;
  type: string;
  name: string;
  itemId: number;
  color: string;
}

export interface ExteriorFurniture {
  itemId: number;
  name: string;
  transform: Transform;
  properties: FurnitureProperties;
}

export interface Transform {
  location: number[];
  rotation: number[];
  scale: number[];
}

export interface MetaData {
  version: number;
}

export interface InteriorFurniture {
  itemId: number;
  name: string;
  transform: Transform;
  properties: FurnitureProperties;
}

export interface FurnitureProperties {
  color?: string;
  castShadow?: boolean;
}

export interface Properties {}

export type Tally = { [key: number]: number };

export type Category =
  | "interiorFurniture"
  | "exteriorFurniture"
  | "interiorFixture"
  | "exteriorFixture";
