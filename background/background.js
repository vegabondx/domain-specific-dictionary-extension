import { getDefinition, addDefinition } from "/common/lf-operations.js";


function searchDs(info) {
        const st = info.selectionText
        console.log("Searching for "+st)
        getDefinition(st)
        .then(
            definition => alert(st+" => "+definition))
    }

function setDs(info) {
        const st = info.selectionText
        console.log("Trying to setting definition for "+st)
        getDefinition(st).then( defaultval =>{
        var definition= prompt("Please enter/edit definition for '"+st+"':",defaultval);
        addDefinition(st,definition)
        }
        )
    }

function setAbbr(info) {
        const st = info.selectionText
        console.log("setting abbreviation for "+st)
        let abbr= prompt("Please enter abbreviation for'"+st+"':")
        addDefinition(abbr,st)
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