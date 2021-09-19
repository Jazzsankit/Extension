// console.log("hello popup!!")

let changeImage = document.querySelector("#change-image");


changeImage.addEventListener("click" , function(){
    // message should be passed to content.js file

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let tabId = tabs[0].id;
        
        // event send message dispatch
        // console.log(tabId);
        chrome.tabs.sendMessage(tabId, "Hello from popup !!!" , function(response){
            console.log(response);
        });


      });


})