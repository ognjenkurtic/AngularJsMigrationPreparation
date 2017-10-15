import * as angular from "angular";

const modules = [];

export class CarController {}

const component = {
  bindings: {},
  controller: CarController,
  template: require("./car.html")
};

export const CarModule = angular
  .module("component_car", modules.map(m => m.name))
  .component("car", component);
