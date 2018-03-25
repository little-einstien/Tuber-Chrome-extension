// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  //changeColor.style.backgroundColor = data.color;
  //changeColor.setAttribute('value', data.color);
});

document.getElementById('video').onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {"e": "vd"}, function(response) {
      console.log(response);
    });
  });
};
document.getElementById('audio').onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {"e": "ad"}, function(response) {
      console.log(response);
    });
  });
};
