const cancelBtn = document.querySelector(".cancel");
const uploadBtn = document.querySelector(".upload");
const header = document.querySelector(".header");
const floatingNav = document.querySelector(".floating-nav");
const uploadWrap = document.querySelector(".upload-wrap");
const sellBtn = document.querySelector(".sell-btn");

// floating navbar
let iniScrollPos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos - iniScrollPos > 100) {
    floatingNav.style.bottom = "2rem";
  } else {
    floatingNav.style.bottom = "-50rem";
  }
};

// uploading codes
const uploadHeading = document.querySelector(".uploadHeading");
const zipfile = document.querySelector(".zipfile"),
  zipButton = zipfile.querySelector("button"),
  zipDragText = zipfile.querySelector("header"),
  zipInput = zipfile.querySelector("input");
const zipFilePara = document.querySelector(".zipFilename");
const preview = document.querySelector(".preview"),
  imgButton = preview.querySelector("button"),
  imgDragText = preview.querySelector("header"),
  imgInput = preview.querySelector("input");
const imgFilePara = document.querySelector(".previewFilename");
let zipFilename;
let imgFilename;

zipButton.onclick = () => {
  zipInput.click();
};
imgButton.onclick = () => {
  imgInput.click();
};

zipInput.addEventListener("change", function (e) {
  let zipFilename = e.target.files[0].name;
  zipFilePara.innerHTML = zipFilename;
});

imgInput.addEventListener("change", function (e) {
  let imgFilename = e.target.files[0].name;
  console.log(imgFilename);
  imgFilePara.innerHTML = `${imgFilename}`;
});

sellBtn.addEventListener("click", () => {
  uploadWrap.style.display = "block";
});
cancelBtn.addEventListener("click", () => {
  uploadWrap.style.display = "none";
});

uploadBtn.addEventListener("click", () => {
  uploadWrap.style.display = "none";
});
