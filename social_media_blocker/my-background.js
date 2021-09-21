chrome.tabs.onCreated.addListener(function(tab){
    console.log(tab);
})

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
    // console.log(tabid);
    // console.log(changeInfo);
    console.log(tab);
    if(tab.url.includes('youtube')&&tab.status=="complete"){
        chrome.tabs.remove(tabId);
        console.log('deleted')
    }

})