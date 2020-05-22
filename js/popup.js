//
//  popup.js
//  Expand-Video-Edge-Extension
//
//  Created by Dillon Sheffield on 05/21/2020.
//
//

//------------------ Variables -------------------//

// The button element in popup.html.
let pipButton = document.getElementById('pipButton');

// The message to send.
let message = {
    type: "enterPiP"
}

// The parameters for the query.
const params = {
    active: true,
    currentWindow: true
}

//------------------- Methods -------------------//

/*
 * Sends a message containing the active tab's ID
 * and the message type.
 */
function receivedTabs(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message);
}

/*
 * When the pipButton button element is clicked,
 * fires the query command with the set parameters
 * to pass the active tab in the current window to
 * the receivedTabs function.
 */
pipButton.onclick = () => {
    chrome.tabs.query(params, receivedTabs);
};

//-------------------- END ---------------------//