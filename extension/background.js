// background.ts

chrome.action.onClicked.addListener(tab => {
    // if (tab.id !== undefined) {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
            alert("TLDR: This is a test")
        }
    });
}
// }
);