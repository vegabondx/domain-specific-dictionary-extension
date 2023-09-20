export {getDefinition,addDefinition,deleteDefinition}
import "../lib/localforage.js"


const DefinitionTable = localforage.createInstance({
    name: "DictionaryApp",
    storeName: "DefinitionTable"
});
function clean(abbr) {
    return abbr.toUpperCase().trim().split('.').join("").replace(/\s/g, '')
}

async function addDefinition(abbr, definition) {
    try {
        await DefinitionTable.setItem(clean(abbr), definition);
        alert('abbreviation added sucessfully');
    } catch (err) {
        console.log(err.message);
    }
}


async function getDefinition(key) {
    try {
        const value = await DefinitionTable.getItem(clean(key));
        return value
    } catch (err) {
        console.log(err);
    }
}

async function deleteDefinition(e) {
    try {
        await DefinitionTable.removeItem(clean(e));
        alert('Contact deleted succesfully');
    } catch (err) {
        console.log(err.message);
    }
}

