
onPageLoad();

function onPageLoad(){
    console.log("testing");

    document.body.style.backgroundColor = "red" ;

    let myParagraph = document.getElementById("my-p");
    let exisitngString = myParagraph.textContent;

    myParagraph.textConent = existingString + "meow";

    let myInput = document.getElementById("my-input");
   myInput.value = localStorage.getItem("lastSavedInput");


}

function onMyButtonClicked(){
    let myInput = document.getElementById("my-input");
	let myInputText = myInput.value;

    localStorage.setItem("lastSavedInput", myInputText);

	//console.log(myInputText);

}

