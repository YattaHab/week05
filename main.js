//images slider
const landing = document.querySelector(".landing");

const landingImgs = [
  "url(../images/landing.jpg)",
  "url(../images/landing2.jpg)",
  "url(../images/landing3.jpg)",
  "url(../images/landing4.jpg)",
  "url(../images/landing5.jpg)",
];
let i = 0;
function changePhoto(direction) {
  if (direction === "right") {
    i = (i + 1) % landingImgs.length;
  } else {
    i = (i - 1 + landingImgs.length) % landingImgs.length;
  }
  landing.style.backgroundImage = landingImgs[i];
}

//storing user's data to local storage
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = form.elements["name"].value;
  const mail = form.elements["mail"].value;
  const message = form.elements["message"].value;

  const contactData = {
    name: name,
    mail: mail,
    message: message,
  };
  let existingData = [];
  let stored = localStorage.getItem("contactInfo");

  let parsed = JSON.parse(stored || "[]");

  if (Array.isArray(parsed)) {
    existingData = parsed;
  }
  existingData.push(contactData);

  localStorage.setItem("contactInfo", JSON.stringify(existingData));
  alert("Thank you for submiting your messsage!");
  form.reset();
});
console.log("habiba");
