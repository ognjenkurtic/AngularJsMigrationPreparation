import * as angular from "angular";

const modules = [];

export class UserOptionsController {}

const component = {
  bindings: {},
  controller: UserOptionsController,
  template: require("./userOptions.html")
};

export const UserOptionsModule = angular
  .module("component_userOptions", modules.map(m => m.name))
  .component("userOptions", component);
