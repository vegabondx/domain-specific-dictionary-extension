export {getDefinition,addDefinition,deleteDefinition}
import "../lib/localforage.js"


const DefinitionTable = localforage.createInstance({
    name: "DictionaryApp",
    storeName: "DefinitionTable"
});

async function addDefinition(abbr, definition) {
    try {
        await DefinitionTable.setItem(abbr, definition);
        alert('abbreviation added sucessfully');
    } catch (err) {
        console.log(err.message);
    }
}


async function getDefinition(key) {
    try {
        const value = await DefinitionTable.getItem(key);
        return {
            key: key,
            definition: value
        };
    } catch (err) {
        console.log(err);
    }
}

async function deleteDefinition(e) {
    try {
        await DefinitionTable.removeItem(e);
        alert('Contact deleted succesfully');
    } catch (err) {
        console.log(err.message);
    }
}
