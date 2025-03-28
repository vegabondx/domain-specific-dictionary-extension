import { getDefinition } from "../common/lf-operations.js";

jest.mock("../common/lf-operations.js", () => ({
    getDefinition: jest.fn(),
}));

describe("background.js", () => {
    beforeEach(() => {
        global.chrome = {
            contextMenus: {
                create: jest.fn(),
                onClicked: {
                    addListener: jest.fn(),
                },
            },
            scripting: {
                executeScript: jest.fn(),
            },
            tabs: {
                sendMessage: jest.fn(),
            },
        };
    });

    test("searchDs should fetch a definition and send a message", async () => {
        getDefinition.mockResolvedValueOnce("HyperText Markup Language");

        const mockTabId = 1;
        const mockSelectionText = "HTML";
        const mockSendMessage = jest.fn();

        global.chrome.tabs.sendMessage = mockSendMessage;

        const searchDs = require("../background/background.js").searchDs;
        await searchDs({ selectionText: mockSelectionText }, mockTabId);

        expect(getDefinition).toHaveBeenCalledWith("HTML");
        expect(mockSendMessage).toHaveBeenCalledWith(mockTabId, {
            action: "showPopup",
            message: "HyperText Markup Language",
        });
    });
});