// import { getDefinition } from "./WebPage/lf-operations.js";

chrome.contextMenus.create({
    id: "test",
    title: "Test %s menu item", 
    contexts:["selection"]
    }
);

// chrome.contextMenus.onClicked.addListener(function(clickEvent) {getDefinition(clickData.selectionText);console.log(onclickdata.menuitemid)})