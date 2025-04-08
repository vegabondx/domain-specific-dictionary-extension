import { addDefinition } from "/common/lf-operations.js";

document.getElementById("uploadCsv").addEventListener("click", async () => {
  const fileInput = document.getElementById("csvFile");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a CSV file to upload.");
    return;
  }

  const reader = new FileReader();

  reader.onload = async (event) => {
    const csvContent = event.target.result;
    const rows = csvContent.split("\n");

    for (const row of rows) {
      const [abbr, definition] = row.split(",").map((cell) => cell.trim());
      if (abbr && definition) {
        await addDefinition(abbr, definition);
      }
    }

    alert("CSV file uploaded successfully!");
  };

  reader.onerror = () => {
    alert("Failed to read the file. Please try again.");
  };

  reader.readAsText(file);
});
