const track = document.getElementById("image-track");

if (track) {
  console.log(track.dataset.mouseDownAt);
} else {
  console.log("The element with the ID `wrapper` does not exist.");
}

window.onmousedown = e => {
   track.dataset.mouseDownAt = e.clientX;
   console.log(e.clientX)
}

window.onmousemove = e => {
if(track.dataset.mouseDownAt === "0") return;
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta =  window.innerWidth / 2;  
    
    const percentage = (mouseDelta / maxDelta) * 100;
    track.style.transform = `translate(${percentage}%, -50%)`
}