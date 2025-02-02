//async allows operations that take time
//to run without blocking the execution of other code
async function loadFooter() {
    // Fetch the footer template
    const response = await fetch('footer.html');

    //await pauses the function until the async operation is resovled
    const text = await response.text();

    // Create a container + insert the template into the page
    const container = document.createElement('div');
    container.innerHTML = text;

    // Get the template content
    const template = container.querySelector('#footer-template');

    // Clone and insert the template
    const clone = template.content.cloneNode(true);
    document.body.appendChild(clone);

    // Initialize live clock
    const span = document.getElementById('clock');
    function time() {
        var options = {
            timeZone: 'America/New_York',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        span.textContent = new Intl.DateTimeFormat('en-US', options)
            .format(new Date());
    }
    time();
    setInterval(time, 1000);

    // Weather data
    async function fetchWeather() {
        const response = await fetch('https://wttr.in/new+york?m&format=%t');
        const temperature = await response.text();

        //updates the element with ID weather
        document.getElementById('weather').textContent = `${temperature}`;
    }
    fetchWeather();
}