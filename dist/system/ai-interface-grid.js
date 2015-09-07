System.register(['./aurelia-interface-grid.css!'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(framework) {
    framework.globalResources('./flexible');
  }

  return {
    setters: [function (_aureliaInterfaceGridCss) {}],
    execute: function () {}
  };
});