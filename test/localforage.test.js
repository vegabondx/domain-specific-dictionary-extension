import { getDefinition, addDefinition, deleteDefinition } from "./lf-operations.js";

jest.mock("../lib/localforage.js", () => {
    const mockLocalForage = {
        createInstance: jest.fn(() => ({
            setItem: jest.fn(),
            getItem: jest.fn(),
            removeItem: jest.fn(),
        })),
    };
    return mockLocalForage;
});

const mockLocalForage = require("../lib/localforage.js");

describe("lf-operations.js", () => {
    const mockInstance = mockLocalForage.createInstance();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("addDefinition should add a definition", async () => {
        mockInstance.setItem.mockResolvedValueOnce();
        await addDefinition("HTML", "HyperText Markup Language");
        expect(mockInstance.setItem).toHaveBeenCalledWith(
            "HTML",
            "HyperText Markup Language"
        );
    });

    test("getDefinition should retrieve a definition", async () => {
        mockInstance.getItem.mockResolvedValueOnce("HyperText Markup Language");
        const result = await getDefinition("HTML");
        expect(mockInstance.getItem).toHaveBeenCalledWith("HTML");
        expect(result).toBe("HyperText Markup Language");
    });

    test("deleteDefinition should delete a definition", async () => {
        mockInstance.removeItem.mockResolvedValueOnce();
        await deleteDefinition("HTML");
        expect(mockInstance.removeItem).toHaveBeenCalledWith("HTML");
    });
});