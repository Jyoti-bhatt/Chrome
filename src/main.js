/*global chrome*/
import { getActiveTabURL } from "./utils.js";

export const btnHandler = () => {
  var quality = document.getElementById("quality");
  var filename = document.getElementById("filename");
  var format = document.getElementById("format");

  console.log("button  clicked");
  (async() => {
      var tab = await getActiveTabURL();
      var url = tab.url;

      var message = {
        url: url,
        quality: quality.value,
        filename: filename.value,
        format: format.value,
      };

      chrome.runtime.sendMessage(message);
  })();
};

