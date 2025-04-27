const poemJSON= "https://catfact.ninja/fact";

fetch (catsJSON)
    .then (response => response.json())
    .then(handleData)
    .catch(error => console.long(error));

function handleData(data){
    console.log(data)
    catsData = data;

    let myResponseElement = document.getElementById ("fact");
    myResponseElement.textContent = catsData.fact;
}

let submitButton = document.getElementById ("5 facts");


