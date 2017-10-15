require("@angular/router/angular1/angular_1_router");
import angular from "angular";

import { DriversModule } from "./drivers/drivers";

import "../style/app.css";

const modules = [DriversModule];
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
    }
  ]
};

export const AppModule = angular
  .module("app", [...thirdParty, ...modules.map(m => m.name)])
  .value("$routerRootComponent", "app")
  .component("app", component);
