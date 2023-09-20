
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
