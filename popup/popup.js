
/* https://blog.logrocket.com/localforage-managing-offline-browser-storage/  
*/

import { getDefinition, addDefinition, deleteDefinition } from "/common/lf-operations.js"

async function showDefinitions(key) {
    try {
        const definition = await getDefinition(key)
        document.getElementById('output').innerHTML = `<center>${definition}</center>`;
    } catch (err) {
        console.log(err);
    }
}


document.getElementById('submit').addEventListener('click', async (e) => {
    e.preventDefault();
    const word = document.getElementById("abbr").value
    const definition = document.getElementById("definition").value
    await addDefinition(word, definition);
})

document.getElementById('lookup').addEventListener('click', async (e) => {
    const word = document.getElementById("abbr").value
    showDefinitions(word)
})

// Add event listener for Enter key
document.getElementById('abbr').addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const word = document.getElementById("abbr").value;
        showDefinitions(word);
        }
    }
);

document.getElementById('definition').addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const word = document.getElementById("abbr").value;
        const definition = document.getElementById("definition").value;
        if ( word && definition){
        await addDefinition(word, definition);
        showDefinitions(word);      
        }
    }
}
);

/* Implementation for V2 like functionality
// Listen for messages from the webpage or other parts of the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'showPopup') {
        const outputElement = document.getElementById('output');
        outputElement.innerHTML = `<center>${message.content}</center>`;
        console.log("Message received:", message.content);
        sendResponse({ status: "Message displayed in popup" });
    }
});
*/