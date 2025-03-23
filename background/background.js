import { getDefinition, addDefinition } from "/common/lf-operations.js";

function searchDs(info) {
    const st = info.selectionText;
    console.log("Searching for " + st);
    getDefinition(st).then(definition => prompt(st + " => " + definition));
}

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
        searchDs(data);
        console.log("Search clicked:", data.selectionText);
    } else if (data.menuItemId === "setDefinition") {
        setDs(data);
        console.log("Set Definition clicked:", data.selectionText);
    } else if (data.menuItemId === "setAbbr") {
        setAbbr(data);
        console.log("Set Abbr clicked:", data.selectionText);
    }
});
