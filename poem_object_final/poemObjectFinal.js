const baseURL = "https://poetrydb.org";

document.addEventListener("DOMContentLoaded", () => {

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const placedImages = []; // store placed positions

    const assets = document.querySelectorAll(".poem-asset");

    assets.forEach((img) => {
        let attempts = 0;
        let placed = false;
        let imgWidth = 150; // known width
        let imgHeight = 150; // assume roughly square for simplicity

        while (!placed && attempts < 100) { // max attempts to prevent infinite loop
            const randomX = Math.random() * (viewportWidth - imgWidth);
            const randomY = Math.random() * (viewportHeight - imgHeight);

            const newRect = {
                left: randomX,
                top: randomY,
                right: randomX + imgWidth,
                bottom: randomY + imgHeight
            };

            // Check overlap with all placed images
            let overlap = placedImages.some(rect => {
                return !(newRect.right < rect.left ||
                         newRect.left > rect.right ||
                         newRect.bottom < rect.top ||
                         newRect.top > rect.bottom);
            });

            if (!overlap) {
                img.style.left = `${randomX}px`;
                img.style.top = `${randomY}px`;
                placedImages.push(newRect);
                placed = true;
            }
            attempts++;
        }

        // add click event after placing
        img.addEventListener("click", function () {
            const title = this.getAttribute("data-title");
            const titleEncoded = encodeURIComponent(title);
            const url = `${baseURL}/title/${titleEncoded}`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    if (data && data[0] && data[0].lines) {
                        const poemText = data[0].lines.join("\n");
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


// // the api i am using!
// const baseURL = "https://poetrydb.org";

// document.addEventListener("DOMContentLoaded", () => {

//     // Get viewport width and height
//     const viewportWidth = window.innerWidth;
//     const viewportHeight = window.innerHeight
//     const placedImages = []; // store placed positions

//     const assets = document.querySelectorAll(".poem-asset");
    
//     //selects all the elements-- the clickable assets
//     document.querySelectorAll(".poem-asset").forEach((img) => {
    
//       // Generate random positions
//     const randomX = Math.random() * (viewportWidth - 150); // minus image width
//     const randomY = Math.random() * (viewportHeight - 150); // minus image height

//     // Apply position
//     img.style.left = `${randomX}px`;
//     img.style.top = `${randomY}px`;
    
//       // click event listener to each object
//         img.addEventListener("click", function () {
//         // gets the poem's title from the data-title attribute on the image 
//       const title = this.getAttribute("data-title");

//       //poem titles have spaces, punctuation + special characters--> safely encodes them for use in a URL
//       // i did ask chatgpt this const... but i am citing it!
//       const titleEncoded = encodeURIComponent(title);
//       const url = `${baseURL}/title/${titleEncoded}`;

//       fetch(url)
        
//       //converts the response into a usable json
//         .then((response) => response.json())
//         .then((data) => {
//           if (data && data[0] && data[0].lines) {
//             const poemText = data[0].lines.join("\n");

//             //poem in a popup alert box with the title, author + full poem body-- scrollable!
//             alert(`"${data[0].title}" by ${data[0].author}\n\n${poemText}`);
//           } else {
//             alert("Poem not found.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching poem:", error);
//           alert("An error occurred while fetching the poem.");
//         });
//     });
//   });
// });
