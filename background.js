const regex = /https:\/\/(www|clips).twitch.tv/;
chrome.action.onClicked.addListener((tab) => {
  const url = tab.url;
  if (!regex.test(url)) {
    console.log("You cant use this extension outside twitch");
    return;
  }

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ["script.js"]
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender) {
    if (!regex.test(sender.url)) return;
    if (request.act === "takeSs") {
      chrome.scripting.executeScript({
        target: {tabId: sender.tab.id},
        files: ["script.js"]
      });
    }
    if (request.act === "sendError") {
      sendError(request.message, sender.tab.id);
    }
  }
);

function sendError(message, id) {
  
  chrome.scripting.executeScript({
    target: {tabId: id},
    func: functionality,
    args: [message]
  })

  function functionality(msg) {
    if (document.querySelector(".tst-errorMessage") !== null) return;

    const container = document.createElement("div");
    const parent = document.querySelector(".Layout-sc-nxg1ff-0.hVqkZv")

    container.classList.add("tst-errorMessage");
    container.innerText = msg;

    parent.appendChild(container);

    const timer = setTimeout(() => {
      container.classList.add("hide");
      setTimeout(() => {
        container.remove();
      }, 250);
    }, 3 * 1000);
  }
}