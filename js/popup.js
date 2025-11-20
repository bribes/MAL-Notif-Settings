chrome.storage.local.get(["position", "size"], function (res) {
    let size = res.size || 1;
    document.querySelector("#size").value = size;
});

document.querySelector("#left").onclick = () => {
    chrome.storage.local.set({"position": "left"});
}
document.querySelector("#center").onclick = () => {
    chrome.storage.local.set({"position": "center"});
}
document.querySelector("#right").onclick = () => {
    chrome.storage.local.set({"position": "right"});
}
document.querySelector("#size").oninput = (e) => {
    chrome.storage.local.set({"size": e.target.value});
}