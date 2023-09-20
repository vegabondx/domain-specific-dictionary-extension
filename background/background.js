import { getDefinition } from "/common/lf-operations.js";

function searchDs(info) {
        console.log(info.selectionText)
        getDefinition(info.selectionText)
        .then(
            definition => alert(definition))
    }

chrome.contextMenus.create({
    id: "dict",
    title: "Search '%s' in", 
    contexts:["selection"]
    }
);

chrome.contextMenus.create({
    id: "local",
    parentId: "dict",
    title: "Domain Specific", 
    contexts:["selection"],
    onclick: searchDs
    }
);