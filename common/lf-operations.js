export {getDefinition,addDefinition,deleteDefinition}
import "../lib/localforage.js"


const DefinitionTable = localforage.createInstance({
    name: "DictionaryApp",
    storeName: "DefinitionTable"
});

async function addDefinition(abbr, definition) {
    try {
        await DefinitionTable.setItem(abbr.toUpperCase().trim(), definition);
        alert('abbreviation added sucessfully');
    } catch (err) {
        console.log(err.message);
    }
}


async function getDefinition(key) {
    try {
        const value = await DefinitionTable.getItem(key.toUpperCase().trim());
        return value
    } catch (err) {
        console.log(err);
    }
}

async function deleteDefinition(e) {
    try {
        await DefinitionTable.removeItem(e.toUpperCase().trim());
        alert('Contact deleted succesfully');
    } catch (err) {
        console.log(err.message);
    }
}

