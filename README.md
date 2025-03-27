# Domain Specific Dictionary Extension

The **Domain Specific Dictionary Extension** is a Chrome extension designed to help users save, manage, and look up abbreviations and their definitions. It provides a simple interface for storing domain-specific terms and their meanings, making it easier to reference them while browsing.

## Features

- **Save Abbreviations**: Quickly save abbreviations and their definitions using the popup interface.
- **Lookup Definitions**: Retrieve the definition of an abbreviation directly from the popup.
- **Context Menu Integration**: Right-click on selected text to search for its definition or add it to the dictionary.
- **In-Window Notifications**: Displays messages directly on the webpage for user feedback.
- **Offline Storage**: Uses `localForage` for efficient offline storage of data.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the folder containing this extension.

## Usage

### Popup Interface
1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Enter an abbreviation and its definition in the respective fields.
3. Use the **Save** button to store the abbreviation or the **Lookup** button to retrieve a saved definition.

### Context Menu
1. Highlight any text on a webpage.
2. Right-click and select one of the following options:
   - **Search for abbr**: Look up the selected text in the dictionary.
   - **Add/Edit Definition**: Add or edit the definition for the selected text (future implementation).

### In-Window Notifications
- Notifications are displayed on the current webpage when actions are performed, such as saving or searching for a definition.

## File Structure

- **`manifest.json`**: Defines the extension's metadata and permissions.
- **`popup/popup.html`**: The HTML for the popup interface.
- **`popup/popup.js`**: Handles the logic for saving and retrieving abbreviations in the popup.
- **`popup/popup.css`**: Styles for the popup interface.
- **`background/background.js`**: Manages context menu actions and communication between scripts.
- **`contentScript.js`**: Displays in-window notifications on the current webpage.
- **`common/lf-operations.js`**: Contains utility functions for managing offline storage using `localForage`.

## Permissions

The extension requires the following permissions:
- **`activeTab`**: To interact with the currently active tab.
- **`contextMenus`**: To add options to the right-click context menu.
- **`scripting`**: To inject scripts into the current tab.
- **`storage`**: To store abbreviations and definitions locally.

## Development

### Prerequisites
- Node.js and npm (for managing dependencies if needed).
- Chrome browser with Developer Mode enabled.

### Running Locally
1. Make changes to the source files as needed.
2. Reload the extension in `chrome://extensions/` to apply changes.


