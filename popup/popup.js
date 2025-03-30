
/* https://blog.logrocket.com/localforage-managing-offline-browser-storage/  
*/

import { getDefinition, addDefinition, deleteDefinition } from "/common/lf-operations.js"

async function showDefinitions(key) {

    const definition = await getDefinition(key)
    document.getElementById('definition').value = definition;
    if(definition && definition!="")
        document.getElementById('definition').value = definition;
    else {
        document.getElementById('error-container').classList.remove('hidden'); 
        document.getElementById('error-container').textContent = "no definition found for"+key }}


document.getElementById('save').addEventListener('click', async (e) => {
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

document.getElementById('openFileLoader').addEventListener('click', () => {
    // Open fileLoader.html in a new popup window
    window.open(
        'fileLoader.html', // Path to the file loader HTML
        'FileLoader', // Name of the popup window
        'width=400,height=200,top=100,left=100' // Window size and position
    );
});