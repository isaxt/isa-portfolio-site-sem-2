// the API i am using
const baseURL = "https://poetrydb.org";

//waits until the full HTML document has been loaded before running any JavaScript
document.addEventListener("DOMContentLoaded", () => {

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const placedImages = []; // store placed positions --> avoid overlap

    //selects all elements on the page with the CSS class poem-asset
    const assets = document.querySelectorAll(".poem-asset");

    //try to place it at a random position on the screen + adds a click event listener for fetching the poem text
    assets.forEach((img) => {
        let attempts = 0;
        let placed = false;
        let imgWidth = 150; // known width
        let imgHeight = 150; // known height

        while (!placed && attempts < 100) { // max attempts of 100--> to prevent infinite loop
            const randomX = Math.random() * (viewportWidth - imgWidth);
            const randomY = Math.random() * (viewportHeight - imgHeight);

            const newRect = {
                left: randomX,
                top: randomY,
                right: randomX + imgWidth,
                bottom: randomY + imgHeight
            };

            // checks overlap with all placed images
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
        //gets the poem title from the data-title attribute on the image
        img.addEventListener("click", function () {
            const title = this.getAttribute("data-title");
            const titleEncoded = encodeURIComponent(title);
            const url = `${baseURL}/title/${titleEncoded}`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    //joins poem lines into a single text block + shows in an alert
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
