let allImg = ["./images/McPro.png", "./images/mummyaadharayu.jpg"];

function changeImage() {
    let images = document.querySelectorAll('img');

    for (let i = 0; i < images.length; i++) {
        let idx = Math.floor(Math.random() * allImg.length);
        console.log(idx)
        images[i].src = chrome.extension.getURL(allImg[idx]);
    }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    changeImage();
    sendResponse("Hello from content");
});