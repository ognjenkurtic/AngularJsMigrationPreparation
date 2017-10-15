import * as angular from "angular";
import { CarModule } from "./car/car";

const modules = [CarModule];

export class CarsController {}

const component = {
  bindings: {},
  controller: CarsController,
  template: require("./cars.html"),
  $routeConfig: [
    {
      path: "/car",
      name: "Car",
      component: "car",
      useAsDefault: true
    }
  ]
};

export const CarsModule = angular
  .module("component_cars", modules.map(m => m.name))
  .component("cars", component);
