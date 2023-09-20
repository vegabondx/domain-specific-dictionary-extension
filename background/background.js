import { getDefinition } from "/common/lf-operations.js";

chrome.contextMenus.create({
    id: "dict",
    title: "Search %s in DSDict", 
    contexts:["selection"]
    }
);

chrome.contextMenus.onClicked.addListener(function(info){
    if (info.menuItemId == "dict"){
        console.log(info.selectionText)
        getDefinition(info.selectionText)
        .then(
            value => alert(value.definition))
    }
    });
