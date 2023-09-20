
/* https://blog.logrocket.com/localforage-managing-offline-browser-storage/  
*/

import { getDefinition, addDefinition, deleteDefinition } from "/common/lf-operations.js"

async function showDefinitions(key) {
    try {
        const pair = await getDefinition(key)
        let newContact = `<tr>
                                <td>${pair.key}</td>
                                <td>${pair.definition}</td>
                                </tr>`;
        document.getElementById('table').innerHTML = 
        `
        <table>
          <thead>
            <tr>
              <th>Abbreviation</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tbody>
          `+newContact+`
          </tbody>
        </table>
        `
        // document.querySelector('tbody').insertAdjacentHTML('afterbegin', newContact);
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

document.getElementById('get').addEventListener('click', async (e) => {
    const word = document.getElementById("lookup").value
    showDefinitions(word)
})
