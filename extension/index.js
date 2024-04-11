async function main() {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
            document.body
            alert("Hello from TLDR Chrome Extension!")
        }
    });
}

document.getElementById("generateTLDR").addEventListener("click", main); 