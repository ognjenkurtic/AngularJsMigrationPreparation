import * as angular from "angular";
import { DriverModule } from "./driver/driver";

const modules = [DriverModule];

export class DriversController {}

const component = {
  bindings: {},
  controller: DriversController,
  template: require("./drivers.html"),
  $routeConfig: [
    {
      path: "/driver",
      name: "Driver",
      component: "driver",
      useAsDefault: true
    }
  ]
};

export const DriversModule = angular
  .module("component_drivers", modules.map(m => m.name))
  .component("drivers", component);
