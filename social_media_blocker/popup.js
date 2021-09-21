// console.log("hello popup!!")

let add = document.querySelector('#add');
let input = document.querySelector('.form-control');
let addedText = document.querySelector('.added-text');
// let closeButton = document.querySelector("#closeButton");

// closeButton.addEventListener('click',function(){

// })


add.addEventListener('click', function () {
    if (input.value) {
        console.log('add');
        let website = document.createElement('div');
        website.setAttribute('class', 'website list-group-item');

        let name = document.createElement('div');
        name.setAttribute('class', input.value);

        let close = document.createElement('div');
        close.setAttribute('id', 'closeButton');

        website.appendChild(name);
        website.appendChild(close);
        addedText.appendChild(website);

        name.innerHTML = input.value;
        close.innerHTML = '<i class="fas fa-trash-alt"></i>';
        input.value="";
        
        close.addEventListener('click',function(){
            console.log('close');
            website.remove();
        })
    }
})




// let changeImage = document.querySelector("#change-image");


// changeImage.addEventListener("click" , function(){
//     // message should be passed to content.js file

//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         let tabId = tabs[0].id;

//         // event send message dispatch
//         // console.log(tabId);
//         chrome.tabs.sendMessage(tabId, "Hello from popup !!!" , function(response){
//             console.log(response);
//         });


//       });


// })