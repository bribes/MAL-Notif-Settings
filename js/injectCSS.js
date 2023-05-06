/* copyright 2022 | Faav#6320 | github.com/bribes */

chrome.storage.local.get("position", function (res) {
    inject = document.createElement('link');
    inject.rel = 'stylesheet';
    inject.href = '//gadgets.faav.top/malnotif.css?position=' + (res["position"] || "right");
    document.head.appendChild(inject);
});