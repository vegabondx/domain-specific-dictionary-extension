import { getDefinition, addDefinition } from "../common/lf-operations.js";

jest.mock("../common/lf-operations.js", () => ({
    getDefinition: jest.fn(),
    addDefinition: jest.fn(),
}));

describe("popup.js", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div class="form">
                <input id="abbr" type="text" value="HTML">
                <input id="definition" type="text" value="">
                <button id="save">Save</button>
                <button id="lookup">Lookup</button>
            </div>
        `;
    });

    test("Lookup button should fetch and display a definition", async () => {
        getDefinition.mockResolvedValueOnce("HyperText Markup Language");
        const lookupButton = document.getElementById("lookup");
        const definitionInput = document.getElementById("definition");

        lookupButton.click();
        await Promise.resolve(); // Wait for async operations

        expect(getDefinition).toHaveBeenCalledWith("HTML");
        expect(definitionInput.value).toBe("HyperText Markup Language");
    });

    test("Save button should save an abbreviation and definition", async () => {
        const saveButton = document.getElementById("save");
        const abbrInput = document.getElementById("abbr");
        const definitionInput = document.getElementById("definition");

        abbrInput.value = "CSS";
        definitionInput.value = "Cascading Style Sheets";

        saveButton.click();
        await Promise.resolve(); // Wait for async operations

        expect(addDefinition).toHaveBeenCalledWith("CSS", "Cascading Style Sheets");
    });
});