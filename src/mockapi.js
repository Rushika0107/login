function httpGetAsync(url, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}

const url = "https://scrape.abstractapi.com/v1/?api_key=5c52ca119b6e43c5afcb30e7d188e822&url=https://news.ycombinator.com"

httpGetAsync(url)