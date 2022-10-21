document.addEventListener("keydown", (e) => {
    if (e.code === "KeyS" && e.altKey) {
        chrome.runtime.sendMessage({act: "TakeSs"});
    }
})

( () => {
    const player = document.querySelector(".video-player__container");
})();