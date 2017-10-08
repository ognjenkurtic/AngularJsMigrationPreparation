import * as angular from "angular";
import { UserOptionsModule } from "./userOptions/userOptions";

const modules = [UserOptionsModule];

export class OptionsController {}

const component = {
  bindings: {},
  controller: OptionsController,
  template: require("./options.html"),
  $routeConfig: [
    {
      path: "/userOptions",
      name: "UserOptions",
      component: "userOptions",
      useAsDefault: true
    }
  ]
};

export const OptionsModule = angular
  .module("component_options", modules.map(m => m.name))
  .component("options", component);
