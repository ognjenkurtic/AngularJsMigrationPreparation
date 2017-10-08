import * as angular from "angular";

const modules = [];

export class OptionsController {}

const component = {
  bindings: {},
  controller: OptionsController,
  template: require("./options.html")
};

export const OptionsModule = angular
  .module("component_options", modules.map(m => m.name))
  .component("options", component);
