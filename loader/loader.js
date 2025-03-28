async function loadCSVToDictionary(csvText) {
    const lines = csvText.split('\n');
    const dictionary = {};

    lines.forEach(line => {
        const [key, value] = line.split(',');
        if (key && value) {
            dictionary[key.trim()] = value.trim();
        }
    });

    return dictionary;
}

function handleFile() {
    const fileInput = document.getElementById('csvFileInput');
    const file = fileInput.files[0];
    console.log("handle file called")
    if (file) {
        const reader = new FileReader();
        reader.onload = async function(event) {
            const csvText = event.target.result;
            const dictionary = await loadCSVToDictionary(csvText);
            document.getElementById('output').textContent = JSON.stringify(dictionary, null, 2);
        };
        console.log("handle file complete")
        
        reader.readAsText(file);
    } else {
        alert('Please select a CSV file.');
    }
}

document.getElementById('load').addEventListener('click', async (e) => { 
    const fileInput = document.getElementById('csvFileInput');
    const file = fileInput.files[0];
    console.log("handle file called")
    if (file) {
    const reader = new FileReader();
    reader.onload = async function(event) {
        const csvText = event.target.result;
        const dictionary = await loadCSVToDictionary(csvText);
        document.getElementById('output').textContent = JSON.stringify(dictionary, null, 2);
    };
    console.log("handle file complete")
    reader.readAsText(file);
} else {
    alert('Please select a CSV file.');
}
}
);


