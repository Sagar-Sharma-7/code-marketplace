import { items } from "./items.js";

const gallery = document.querySelector(".homepage-gallery");

const itemPositions = [
  { top: "-5%", left: "5%" },
  { top: "40%", left: "-5%" },
  { top: "25%", left: "20%" },
  { top: "60%", left: "40%" },
  { top: "70%", left: "10%" },
  { top: "-10%", left: "65%" },
  { top: "10%", left: "85%" },
  { top: "40%", left: "60%" },
  { top: "80%", left: "70%" },
  { top: "50%", left: "95%" },
];

items.forEach((itemData, index) => {
  const item = document.createElement("div");
  item.classList.add("item");

  const position = itemPositions[index];
  item.style.top = position.top;
  item.style.left = position.left;

  const img = document.createElement("img");
  img.src = itemData.img;
  item.appendChild(img);
  gallery.appendChild(item);
});

document.addEventListener("mousemove", (e) => {
  gallery.querySelectorAll(".item").forEach((item, index) => {
    const animationFactor = items[index].parallaxSpeed;
    const newX = (e.clientX - window.innerWidth) * animationFactor;
    const newY = (e.clientY - window.innerHeight) * animationFactor;
    gsap.to(item, { x: newX, y: newY, duration: 0.75 });
  });
});
