function showPopupMessage(message) {
    const widget = document.createElement('div');
    widget.textContent = message;
    widget.style.position = 'fixed';
    widget.style.bottom = '20px';
    widget.style.right = '20px';
    widget.style.backgroundColor = '#333';
    widget.style.color = '#fff';
    widget.style.padding = '10px 20px';
    widget.style.borderRadius = '5px';
    widget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    widget.style.zIndex = '10000';
    widget.style.fontFamily = 'Arial, sans-serif';
    widget.style.fontSize = '14px';

    // Add a close button
    const closeButton = document.createElement('span');
    closeButton.textContent = '×';
    closeButton.style.marginLeft = '10px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.color = '#fff';
    closeButton.style.fontWeight = 'bold';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(widget);
    });

    widget.appendChild(closeButton);
    document.body.appendChild(widget);

    // Automatically remove the widget after 5 seconds
    setTimeout(() => {
        if (document.body.contains(widget)) {
            document.body.removeChild(widget);
        }
    }, 5000);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'showPopup') {
        showPopupMessage(request.message);
    }
});