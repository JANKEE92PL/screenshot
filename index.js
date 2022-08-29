const sreenshotBTN = document.getElementById("take-screenshot");
const element = document.getElementById("take-screenshot-element");
sreenshotBTN.addEventListener("click", () => {
  sreenshotBTN.classList.add("buttonload");
  html2canvas(element, {
    scale: 5,
  }).then((image) => {
    const a = document.createElement("a");
    a.download = `${element.dataset.name}-screenshot.png`;
    a.href = image.toDataURL("image/png");
    a.click();
    setTimeout(() => {
      sreenshotBTN.classList.remove("buttonload");
    }, 2000);
  });
});
