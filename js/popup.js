document.querySelector("#submitBtn").onclick = () => {
    let positionValue = position.value;
    chrome.storage.local.set({"position": positionValue});
}