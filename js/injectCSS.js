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