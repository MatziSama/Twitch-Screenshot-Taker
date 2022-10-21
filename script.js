( () => {
    let video = document.querySelector("video");
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    let img = new Image();
    let name = document.title.split(" ")[0];
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    
    img.crossOrigin = "Anonymous";
    img.src = canvas.toDataURL();
    img.addEventListener("load", () => {
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/jpeg");
    a.download = `${name}_SS.jpeg`;
    a.click();
})
})();