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
        if(definition){
        await DefinitionTable.setItem(clean(abbr), definition);
        console.log('Abbreviation added sucessfully to Domain dictionary');}
        else {alert('No definition provided')}
    } catch (err) {
        console.log(err.message);
    }
}

async function getDefinition(key) {
    try {
        const value = await DefinitionTable.getItem(clean(key));
        return value || ""
    } catch (err) {
        console.log(err.message);
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

