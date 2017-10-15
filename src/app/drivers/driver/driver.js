import * as angular from "angular";

const modules = [];

export class DriverController {}

const component = {
  bindings: {},
  controller: DriverController,
  template: require("./driver.html")
};

export const DriverModule = angular
  .module("component_driver", modules.map(m => m.name))
  .component("driver", component);
