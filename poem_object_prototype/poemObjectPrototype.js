// the api i am using!
const baseURL = "https://poetrydb.org";

document.addEventListener("DOMContentLoaded", () => {
    
    //selects all the elements-- the clickable assets
    document.querySelectorAll(".poem-asset").forEach((img) => {
    // click event listener to each object
        img.addEventListener("click", function () {
        // gets the poem's title from the data-title attribute on the image 
      const title = this.getAttribute("data-title");

      //poem titles have spaces, punctuation + special characters--> safely encodes them for use in a URL
      // i did ask chatgpt this const... but i am citing it!
      const titleEncoded = encodeURIComponent(title);
      const url = `${baseURL}/title/${titleEncoded}`;

      fetch(url)
        
      //converts the response into a usable json
        .then((response) => response.json())
        .then((data) => {
          if (data && data[0] && data[0].lines) {
            const poemText = data[0].lines.join("\n");

            //poem in a popup alert box with the title, author + full poem body-- scrollable!
            alert(`"${data[0].title}" by ${data[0].author}\n\n${poemText}`);
          } else {
            alert("Poem not found.");
          }
        })
        .catch((error) => {
          console.error("Error fetching poem:", error);
          alert("An error occurred while fetching the poem.");
        });
    });
  });
});



// code from luca as reference for now
// const baseURL = "https://poetrydb.org";
// const titlePath = "/title/butterfly" // insert here the poem title you'd like to search for
// const authorPath = "/author/Emily Dickinson"


// function setup() {
  
//   // search for all poems that fulfill the "title" input
//   fetch(baseURL + titlePath)
//     .then(response => response.json())
//     .then(data => handleData(data, "title search: "))
//     .catch(error => console.log(error));
  
//   // search for all poems that fulfill the "author" input
//   fetch(baseURL + authorPath)
//     .then(response => response.json())
//     .then(data => handleData(data, "author search: "))
//     .catch(error => console.log("ERROR: " + error));
  
//   // separate example:
//   // What if I wanted to use both the author and title in the search?
//   // this is their standard for combining searches
//   fetch(baseURL + "/author,title/Emily Dickinson;Butterfly")
//     .then(response => response.json())
//     .then(data => handleData(data, "combined search: "))
//     .catch(error => console.log(error));
  
// }

// function handleData(data, source) {
//   console.log(source);
//   console.log(data);
// }