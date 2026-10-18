
async function shortenUrl() {
    const response = await fetch("http://localhost:8000/shorten?url=https://google.com", {
        method: "POST"
    });
    const data = await response.json();
    return data;
}
