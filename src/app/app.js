require("@angular/router/angular1/angular_1_router");
import angular from "angular";

import { DriversModule } from "./drivers/drivers";
import { CarsModule } from "./cars/cars";

import "../style/app.css";

const modules = [DriversModule, CarsModule];
const thirdParty = ["ngComponentRouter"];

export class AppController {}

const component = {
  controller: AppController,
  template: require(`./app.html`),
  $routeConfig: [
    {
      path: "/drivers/...",
      name: "Drivers",
      component: "drivers",
      useAsDefault: true
    },
    {
      path: "/cars/...",
      name: "Cars",
      component: "cars"
    }
  ]
};

export const AppModule = angular
  .module("app", [...thirdParty, ...modules.map(m => m.name)])
  .value("$routerRootComponent", "app")
  .component("app", component);
