chrome.storage.local.get("position", function (res) {
    let position = res.position || 'right';
    if (position == 'left') {
        document.documentElement.style.setProperty('--alignment', '0');
    } else if (position == 'center') {
        document.documentElement.style.setProperty('--alignment', '0 auto');
    } else if (position == 'right') {
        document.documentElement.style.setProperty('--alignment', '0 0 0 auto');
    }
});

chrome.storage.local.get("size", function (res) {
    let size = parseInt(res.size) || 1;
    document.documentElement.style.setProperty('--size', size + 'px ' + size*2 + 'px');
});