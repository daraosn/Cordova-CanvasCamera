//
//  CanvasCamera.js
//  PhoneGap iOS Cordova Plugin to capture Camera streaming into a HTML5 Canvas or an IMG tag.
//
//  Created by Diego Araos <d@wehack.it> on 12/29/12.
//
//  MIT License

CanvasCamera = {
  start: function(options) {
    // TODO: add support for options (fps, capture quality, capture format, etc.)
    cordova.exec(false, false, "CanvasCamera", "startCapture", [""]);
  },
  capture: function(data) {
    // LAZYME: Override this function with something like...
    // CanvasCamera.capture = function(data) {
    //   document.getElementById('camera').src = data;
    // }
  }
};
