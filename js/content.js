const iframe = document.getElementsByTagName('iframe');
const iframeDoc = iframe[0].contentWindow.document //|| iframe.contentWindow.document;
const test = document.getElementById('pipBtn');


window.onload = function() {

    if('pictureInPictureEnabled' in this.document){
        console.log("pip is supported...");
    }

    this.document.write(iframe[0].outerHTML);
    
}