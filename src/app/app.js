require("@angular/router/angular1/angular_1_router");
import angular from "angular";

import { OptionsModule } from "./options/options";

import "../style/app.css";

const modules = [OptionsModule];
const thirdParty = ["ngComponentRouter"];

export class AppController {}

const component = {
  controller: AppController,
  template: require(`./app.html`),
  $routeConfig: [
    {
      path: "/options",
      name: "Options",
      component: "options",
      useAsDefault: true
    }
  ]
};

export const AppModule = angular
  .module(`app`, [...thirdParty, ...modules.map(m => m.name)])
  .value("$routerRootComponent", "app")
  .component("app", component);
