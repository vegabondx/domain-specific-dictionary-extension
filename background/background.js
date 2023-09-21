import { getDefinition, addDefinition } from "/common/lf-operations.js";

function searchDs(info) {
        console.log(info.selectionText)
        getDefinition(info.selectionText)
        .then(
            definition => alert(definition))
    }

function setDs(info) {
        console.log(info.selectionText)
        let definition= prompt("Please enter definition:")
        addDefinition(info.selectionText,definition)
    }

function setAbbr(info) {
        console.log(info.selectionText)
        let abbr= prompt("Please enter abbreviation:")
        addDefinition(abbr,info.selectionText)
    }

chrome.contextMenus.create({
    id: "dict",
    title: "Domain Dictionary", 
    contexts:["selection"]
    }
);

chrome.contextMenus.create({
    id: "search",
    parentId: "dict",
    title: "Search", 
    contexts:["selection"],
    onclick: searchDs
    }
);

chrome.contextMenus.create({
    id: "setDefinition",
    parentId: "dict",
    title: "Edit entry for %s", 
    contexts:["selection"],
    onclick: setDs
}
);

chrome.contextMenus.create({
    id: "setAbbr",
    parentId: "dict",
    title: "Add entry for Definition %s", 
    contexts:["selection"],
    onclick: setAbbr
}
);