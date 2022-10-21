document.addEventListener("keydown", (e) => {
    if (e.code === "KeyS" && e.altKey) {
        chrome.runtime.sendMessage({act: "TakeSs"});
    }
});

const player = document.querySelector(".video-player__container");
const container = document.createElement("div");

const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><g><path d="M424.92,390.67H75.08c-17.35,0-31.46-15.07-31.46-33.58V205.26c0-18.51,14.11-33.57,31.46-33.57h70.19l12.1-38.91c4.36-14,16.6-23.45,30.45-23.45H312.17c13.85,0,26.09,9.43,30.45,23.45l12.1,38.91h70.2c17.35,0,31.46,15.06,31.46,33.57V357.09C456.38,375.6,442.27,390.67,424.92,390.67Zm-349.84-199c-6.32,0-11.46,6.09-11.46,13.57V357.09c0,7.49,5.14,13.58,11.46,13.58H424.92c6.32,0,11.46-6.09,11.46-13.58V205.26c0-7.48-5.14-13.57-11.46-13.57H340l-16.47-53c-1.75-5.61-6.3-9.39-11.35-9.39H187.82c-5,0-9.61,3.78-11.35,9.39l-16.47,53Z"/><path d="M250,342.38a76.32,76.32,0,1,1,76.32-76.32A76.41,76.41,0,0,1,250,342.38Zm0-132.64a56.32,56.32,0,1,0,56.32,56.32A56.38,56.38,0,0,0,250,209.74Z"/></g></svg>'

container.classList.add("tst-container");
svg.id = "tst-svg";
container.innerHTML = svg;
player.append(container);

container.addEventListener("click", () => {
    chrome.runtime.sendMessage({info: "takeSs"});
})