document.querySelector("#left").onclick = () => {
    chrome.storage.local.set({"position": "left"});
}
document.querySelector("#center").onclick = () => {
    chrome.storage.local.set({"position": "center"});
}
document.querySelector("#right").onclick = () => {
    chrome.storage.local.set({"position": "right"});
}