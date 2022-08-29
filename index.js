const sreenshotBTN = document.getElementById("take-screenshot");
const element = document.getElementById("take-screenshot-element");

sreenshotBTN.addEventListener("click", () => {
  sreenshotBTN.classList.add("buttonload");
  element.style.color = "black";
  element.style.border = "none";
  document.body.style.animationName = "flash";
  html2canvas(element, {
    scale: 5,
  }).then((image) => {
    const a = document.createElement("a");
    a.download = `${element.dataset.name}-screenshot.png`;
    a.href = image.toDataURL("image/png");
    a.click();
    setTimeout(() => {
      sreenshotBTN.classList.remove("buttonload");
      element.style.color = "#fff";
      element.style.border = "wheat 2px dashed";
      document.body.style.animationName = "none";
    }, 2000);
  });
});

sreenshotBTN.addEventListener("mouseenter", () => {
  element.classList.add("capture");
});

sreenshotBTN.addEventListener("mouseleave", () => {
  element.classList.remove("capture");
});

const homeBTN = document.getElementById("home");
homeBTN.addEventListener("click", () => {
  featuresBTN.classList.remove("active");
  homeBTN.classList.add("active");
});
const featuresBTN = document.getElementById("features");
featuresBTN.addEventListener("click", () => {
  homeBTN.classList.remove("active");

  featuresBTN.classList.add("active");
});
