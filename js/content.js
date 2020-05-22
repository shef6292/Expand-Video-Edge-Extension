//
//  content.js
//  Expand-Video-Edge-Extension
//
//  Created by Dillon Sheffield on 05/21/2020.
//
//

//------------------ Variables -------------------//

// The iframe found in the document.
const iframe = document.getElementsByTagName('iframe');

//------------------- Methods -------------------//

/*
 **Receives a message and performs an action from the
 * message type.
 **For case 'enterPiP': creates a new window and fills
 * it with the content of the video player. If the
 * window is out of focus (i.e., blurred), the onblur
 * method of the window is called, refocusing it.
 **For case 'default': Throws an error.
 */
function receivedMessage(message, sender, sendResponse) {
    switch (message.type) {
        case 'enterPiP':
            var myWindow = window.open("", "", "width=200,height=100,titlebar=no,toolbar=no,statusbar=no,menubar=no");
            myWindow.document.write(iframe[0].outerHTML);
            myWindow.document.body.onblur = () => {
                myWindow.focus();
                
                // Needed because the focus method does not work all of the time.
                setTimeout(function(){console.log("hey");myWindow.focus();}, 800);
            }
            break;
    
        default:
            console.error("ERROR: Unrecognized message type.");
            break;
    }   
}

chrome.runtime.onMessage.addListener(receivedMessage);

//-------------------- END ---------------------//