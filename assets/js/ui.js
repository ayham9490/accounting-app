// UI update functions

/**
 * Function to show a loading spinner
 */
function showLoading() {
    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    document.body.appendChild(spinner);
}

/**
 * Function to hide the loading spinner
 */
function hideLoading() {
    const spinner = document.querySelector('.spinner');
    if (spinner) {
        document.body.removeChild(spinner);
    }
}

/**
 * Function to update a message on the UI
 * @param {string} message - The message to display
 */
function updateMessage(message) {
    const messageBox = document.getElementById('message-box');
    if (messageBox) {
        messageBox.innerText = message;
    }
}
