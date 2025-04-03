document.addEventListener ('DOMContentLoaded', onDomloaded)

function onDomloaded(){
    let myButton = document.getElementById("cats");

    myButton.addEventListener("mouseenter", onEnter);
    myButton.addEventListener("mouseleave", onExit);
}


// myButton.addEventListener("click", logClick);
// myButton.addEventListener("click", changeBackground );


const enterExitColorMap ={
    enter: "black",
    exit: "white"
}

// // function logClick(){
// //     console.log("clicked button");
// // }

function onEnter(){
    document.body.style.backgroundColor= enterExitColorMap("enter");
}

function onExit(){
    document.body.style.backgroundColor= enterExitColorMap("exit");
}


// function makeBackgroundBlack(){
//     document.body.style.backgroundColor= 'black';
// }

// function makeBackgroundWhite(){
//     document.body.style.backgroundColor= 'white';
// }

//const myClasslessObject ={

//    x:15
//    myPropoerty2: "soup"
//}

// let myVar;

// let myDictionary = {
//     myKey1: myVar, 
//     anotherKey: "soup",
//     myThirdKey: myVar
// }

// //const value = myDictionary.anotherKey;
// // useful for the code challenge
// const value = myDictionary["anotherKey"];


// onPageLoad();

// function onPageLoad(){
//     console.log("testing");

//     document.body.style.backgroundColor = "red" ;

//     let myParagraph = document.getElementById("my-p");
//     let exisitngString = myParagraph.textContent;

//     myParagraph.textConent = existingString + "meow";

//     let myInput = document.getElementById("my-input");
//    myInput.value = localStorage.getItem("lastSavedInput");


// }

// function onMyButtonClicked(){
//     let myInput = document.getElementById("my-input");
// 	let myInputText = myInput.value;

//     localStorage.setItem("lastSavedInput", myInputText);

// 	//console.log(myInputText);

// }

