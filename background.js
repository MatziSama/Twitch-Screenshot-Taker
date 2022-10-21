const regex = /.*twitch\.tv\/(videos|create)?(\/.*)?/g;
chrome.action.onClicked.addListener((tab) => {
  const url = tab.url;

  if (!regex.test(url)) {
    console.log("You cant use this extension outside twitch");
    return;
  }

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['script.js']
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender) {
    if (!regex.test(sender.url)) return;
    
    chrome.scripting.executeScript({
      target: {tabId: sender.tab.id},
      files: ['script.js']
    });
  }
);