import { getDefinition, addDefinition } from "/common/lf-operations.js";

function showPopupMessage(message, tabId) {
  chrome.scripting.executeScript(
    {
      target: { tabId: tabId },
      files: ["contentScript.js"],
    },
    () => {
      chrome.tabs.sendMessage(tabId, { action: "showPopup", message: message });
    }
  );
}

function searchDs(info, tabId) {
  const st = info.selectionText;
  console.log("Searching for " + st);
  getDefinition(st).then((definition) => {
    if (definition && definition != "") showPopupMessage(definition, tabId);
    else {
      showPopupMessage("No definition found for '" + st + "'", tabId);
    }
  });
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "search",
    title: "Search for definition of %s",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((data, tab) => {
  if (data.menuItemId === "search") {
    searchDs(data, tab.id);
    console.log("Search clicked:", data.selectionText);
  }
});
