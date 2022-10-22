( () => {
    let video = document.querySelector("video");
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    let img = new Image();
    let name = document.title.split(" ")[0];
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    img.crossOrigin = "use-credentials";

    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    
    try {
        img.src = canvas.toDataURL();
        img.addEventListener("load", () => {
            const a = document.createElement("a");
            a.href = canvas.toDataURL("image/jpeg");
            a.download = `${name}_SS.jpeg`;
            a.click();
        })
    } catch (error) {
        const regex = /(clip|clips)/;
        if (regex.test(document.location.href)) {
            chrome.runtime.sendMessage({act: "sendError", message: "No puedes tomar captura de este clip, lo siento! :("});
        } else {
            chrome.runtime.sendMessage({act: "sendError", message: "Error desconocido."});
        }
    }
})();