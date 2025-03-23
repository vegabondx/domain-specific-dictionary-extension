import { getDefinition, addDefinition } from "/common/lf-operations.js";


async function openPopup(url) {
    const popupWidth = 400;
    const popupHeight = 400;

    // Open extension as popu
     chrome.windows.create({
      url, 
      type: 'popup', 
      width: popupWidth, 
      height: popupHeight,
    });

}

function showPopupMessage(message,tabId) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['contentScript.js']
    }, () => {
        chrome.tabs.sendMessage(tabId, { action: 'showPopup', message: message });
    });
}

function searchDs(info, tabId) {
    const st = info.selectionText;
    console.log("Searching for " + st);
    getDefinition(st).then(definition => showPopupMessage(st + " => " + definition, tabId));
}

/* 
function setDs(info) {
    const st = info.selectionText;
    console.log("Trying to set definition for " + st);
    getDefinition(st).then(defaultval => {
        const definition = prompt("Please enter/edit definition for '" + st + "':", defaultval);
        addDefinition(st, definition);
    });
}

function setAbbr(info) {
    const st = info.selectionText;
    console.log("Setting abbreviation for " + st);
    const abbr = prompt("Please enter abbreviation for '" + st + "':");
    addDefinition(abbr, st);
}
    */

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "dict",
        title: "Domain Dictionary",
        contexts: ["selection"]
    });

    chrome.contextMenus.create({
        id: "search",
        parentId: "dict",
        title: "Search for abbr '%s'",
        contexts: ["selection"]
    });

    chrome.contextMenus.create({
        id: "setDefinition",
        parentId: "dict",
        title: "Edit definition for '%s'",
        contexts: ["selection"]
    });

    chrome.contextMenus.create({
        id: "setAbbr",
        parentId: "dict",
        title: "Add abbr for definition '%s'",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((data, tab) => {
    if (data.menuItemId === "search") {
        searchDs(data,tab.id);
        console.log("Search clicked:", data.selectionText);
    } else if (data.menuItemId === "setDefinition") {
        openPopup("../popup/popup.html");
        console.log("Set Definition clicked:", data.selectionText);
    } else if (data.menuItemId === "setAbbr") {
        openPopup("../popup/popup.html");
        console.log("Set Abbr clicked:", data.selectionText);
    }
});
