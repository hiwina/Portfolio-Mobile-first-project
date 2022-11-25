const humberger = document.querySelector(".icon");
const navMenu = document.querySelector(".hidden-menu");
const navLink = document.querySelectorAll(".nav-link");
const worksection = document.querySelector(".projects", "#desktop-projects");

function openMenu() {
  humberger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  humberger.classList.remove("active");
  navMenu.classList.remove("active");
}

humberger.addEventListener("click", openMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

/* for the popup */

worksection.innerHTML += `<div class="project1" id="desktop-project1">
        <div class="project-detail" id="desktop-project-detail">
            <h4>Multi-Post Stories Gain+Glory</h4>
             <ul class="button-detail" id="desktop-button-detail"> 
                <li>Ruby on rails</li>
                <li>css</li>
                <li>JavScript</li>
                <li>html</li>
            </ul>
            <button class="see-project" id="desktop-see-project">See project </button>
        </div> 
    </div>
    <div class="project2" id="desktop-project2">  
        <div class="project-detail" id="desktop-project-detail">
            <h4>Multi-Post Stories Gain+Glory</h4>
            <ul class="button-detail" id="desktop-button-detail"> 
                <li>Ruby on rails</li>
                <li>css</li>
                <li>JavScript</li>
                <li>html</li>
            </ul>
            <button class="see-project" id="desktop-see-project">See project </button>
        </div> 
    </div>
    <div class="project3" id="desktop-project3">  
        <div class="project-detail" id="desktop-project-detail">
            <h4>Multi-Post Stories Gain+Glory</h4>
            <ul class="button-detail" id="desktop-button-detail"> 
                <li>Ruby on rails</li>
                <li>css</li>
                <li>JavScript</li>
                <li>html</li>
            </ul>
            <button class="see-project" id="desktop-see-project">See project </button>
        </div>  
    </div>
    <div class="project4" id="desktop-project4">  
        <div class="project-detail" id="desktop-project-detail">
            <h4>Multi-Post Stories Gain+Glory</h4>
            <ul class="button-detail" id="desktop-button-detail"> 
                <li>Ruby on rails</li>
                <li>css</li>
                <li>JavScript</li>
                <li>html</li>
            </ul>
            <button class="see-project" id="desktop-see-project">See project </button>
        </div> 
    </div>
    <div class="project5" id="desktop-project5">  
        <div class="project-detail" id="desktop-project-detail">
            <h4>Multi-Post Stories Gain+Glory</h4>
            <ul class="button-detail" id="desktop-button-detail"> 
                <li>Ruby on rails</li>
                <li>css</li>
                <li>JavScript</li>
                <li>html</li>
            </ul>
            <button class="see-project" id="desktop-see-project">See project </button>
        </div> 
    </div>
    <div class="project6" id="desktop-project6">   
        <div class="project-detail" id="desktop-project-detail">
            <h4>Multi-Post Stories Gain+Glory</h4>
            <ul class="button-detail" id="desktop-button-detail"> 
                <li>Ruby on rails</li>
                <li>css</li>
                <li>JavScript</li>
                <li>html</li>
            </ul>
            <button class="see-project" id="desktop-see-project">See project </button>
        </div> 
    </div>`;

const closeButton = document.getElementsByClassName(".closeBtn");
// const mcloseButton = document.getElementsByClassName(".mcloseBtn");
const projectDetails = document.querySelectorAll(
  ".see-project",
  "#desktop-see-projecr"
);

const projectData = [
  {
    id: 0,
    mobilePopImage: "./image/Snapshoot Portfolio.png",
    desktopPopImage: "./image/Snapshoot Portfolio.png",
    // <img src=\"http://placehold.it/350x350\" width=\"400px\" height=\"150px\">";
    popCancelBtn: "&times",
    popHeaderDescription: "Keeping track of hundreds ofcomponents",
    mobileTechnologies: ["Ruby on rails", "css", "JavaScript", "html"],
    desktopTechnologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    seeLive: "See Live",
    seeSource: "See Source",
  },

  {
    id: 1,
    mobilePopImage: "./image/Snapshoot Portfolio.png",
    desktopPopImage: "./image/Snapshoot Portfolio.png",
    popCancelBtn: "&times",
    popHeaderDescription: "Keeping track of hundreds ofcomponents",
    mobileTechnologies: ["Ruby on rails", "css", "JavaScript", "html"],
    desktopTechnologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    seeLive: "See Live",
    seeSource: "See Source",
  },
  {
    id: 2,
    mobilePopImage: "./image/Snapshoot Portfolio.png",
    desktopPopImage: "./image/Snapshoot Portfolio.png",
    popCancelBtn: "&times",
    popHeaderDescription: "Keeping track of hundreds ofcomponents",
    mobileTechnologies: ["Ruby on rails", "css", "JavaScript", "html"],
    desktopTechnologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    seeLive: "See Live",
    seeSource: "See Source",
  },
  {
    id: 3,
    mobilePopImage: "./image/Snapshoot Portfolio.png",
    desktopPopImage: "./image/Snapshoot Portfolio.png",
    popCancelBtn: "&times",
    popHeaderDescription: "Keeping track of hundreds ofcomponents",
    mobileTechnologies: ["Ruby on rails", "css", "JavaScript", "html"],
    desktopTechnologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    seeLive: "See Live",
    seeSource: "See Source",
  },
  {
    id: 4,
    mobilePopImage: "./image/Snapshoot Portfolio.png",
    desktopPopImage: "./image/Snapshoot Portfolio.png",
    popCancelBtn: "&times",
    popHeaderDescription: "Keeping track of hundreds ofcomponents",
    mobileTechnologies: ["Ruby on rails", "css", "JavaScript", "html"],
    desktopTechnologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    seeLive: "See Live",
    seeSource: "See Source",
  },
  {
    id: 5,
    mobilePopImage: "./image/Snapshoot Portfolio.png",
    desktopPopImage: "./image/Snapshoot Portfolio.png",
    popCancelBtn: "&times",
    popHeaderDescription: "Keeping track of hundreds ofcomponents",
    mobileTechnologies: ["Ruby on rails", "css", "JavaScript", "html"],
    desktopTechnologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    seeLive: "See Live",
    seeSource: "See Source",
  },
];

const workCard = document.querySelector(
  ".recent-works-container",
  "#desktop-recent-works"
);
var currentOpented;
function displayDesktopCard() {
  for (let i = 0; i < projectData.length; i++) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("cardContainer");
    workCard.appendChild(projectDiv);

    const projectSpan = document.createElement("span");
    projectSpan.classList.add("closeBtn");
    projectSpan.innerHTML = projectData[i].popCancelBtn;
    projectDiv.appendChild(projectSpan);

    const projectImg = document.createElement("img");
    projectImg.classList.add("deskProjectImg");
    projectImg.src = projectData[i].desktopPopImage;
    projectDiv.appendChild(projectImg);

    const headBtnDiv = document.createElement("div");
    headBtnDiv.classList.add("headBtn");
    projectDiv.appendChild(headBtnDiv);

    const projectHeader = document.createElement("h3");
    projectHeader.classList.add("popPrimaryText");
    projectHeader.innerHTML = projectData[i].popHeaderDescription;
    headBtnDiv.appendChild(projectHeader);

    const buttonSeeLive = document.createElement("button");
    buttonSeeLive.classList.add("seelive");
    buttonSeeLive.innerHTML = projectData[i].seeLive;
    headBtnDiv.appendChild(buttonSeeLive);

    const buttonSeeSource = document.createElement("button");
    buttonSeeSource.classList.add("seesource");
    buttonSeeSource.innerHTML = projectData[i].seeSource;
    headBtnDiv.appendChild(buttonSeeSource);

    const projectTags = document.createElement("ul");
    projectTags.classList.add("desktopTags");
    projectDiv.appendChild(projectTags);

    const projectTagsList5 = document.createElement("li");
    projectTagsList5.classList.add("desktopTagsList");
    projectTagsList5.innerHTML = projectData[i].desktopTechnologies[i - 5];
    projectTags.appendChild(projectTagsList5);

    const projectTagsList4 = document.createElement("li");
    projectTagsList4.classList.add("desktopTagsList");
    projectTagsList4.innerHTML = projectData[i].desktopTechnologies[i - 4];
    projectTags.appendChild(projectTagsList4);

    const projectTagsList = document.createElement("li");
    projectTagsList.classList.add("desktopTagsList");
    projectTagsList.innerHTML = projectData[i].desktopTechnologies[i - 3];
    projectTags.appendChild(projectTagsList);

    const projectTagsList1 = document.createElement("li");
    projectTagsList1.classList.add("desktopTagsList");
    projectTagsList1.innerHTML = projectData[i].desktopTechnologies[i - 2];
    projectTags.appendChild(projectTagsList1);

    const projectTagsList2 = document.createElement("li");
    projectTagsList2.classList.add("desktopTagsList");
    projectTagsList2.innerHTML = projectData[i].desktopTechnologies[i - 1];
    projectTags.appendChild(projectTagsList2);

    const projectTagsList3 = document.createElement("li");
    projectTagsList3.classList.add("desktopTagsList");
    projectTagsList3.innerHTML = projectData[i].desktopTechnologies[i];
    projectTags.appendChild(projectTagsList3);

    const projectDesc = document.createElement("p");
    projectDesc.classList.add("descriptionParagraph");
    projectDesc.innerHTML = projectData[i].description;
    projectDiv.appendChild(projectDesc);
    // console.log(projectData[i].desktopTechnologies[i]);
  }
}

const mworkCard = document.querySelector(
  ".recent-works-container",
  "#desktop-recent-works"
);
// function displayMobileCard() {
// for (let i = 0; i < projectData.length; i++) {
const projectDiv = document.createElement("div");
projectDiv.classList.add("mcardContainer");
// mworkCard.appendChild(projectDiv);
const projectSpan = document.createElement("span");
projectSpan.classList.add("mcloseBtn");
projectSpan.innerHTML = projectData[0].popCancelBtn;
projectDiv.appendChild(projectSpan);

const projectImg = document.createElement("img");
projectImg.classList.add("mProjectImg");
projectImg.src = projectData[0].desktopPopImage;
projectDiv.appendChild(projectImg);

const projectHeader = document.createElement("h3");
projectHeader.classList.add("mpopPrimaryText");
projectHeader.innerHTML = projectData[0].popHeaderDescription;
projectDiv.appendChild(projectHeader);

const projectTags = document.createElement("ul");
projectTags.classList.add("mTags");
projectDiv.appendChild(projectTags);

const projectTagsList1 = document.createElement("li");
projectTagsList1.classList.add("mTagsList");
projectTagsList1.innerHTML = projectData[0].mobileTechnologies[0];
projectTags.appendChild(projectTagsList1);

const projectTagsList2 = document.createElement("li");
projectTagsList2.classList.add("mTagsList");
projectTagsList2.innerHTML = projectData[0].mobileTechnologies[1];
projectTags.appendChild(projectTagsList2);

const projectTagsList3 = document.createElement("li");
projectTagsList3.classList.add("mTagsList");
projectTagsList3.innerHTML = projectData[0].mobileTechnologies[2];
projectTags.appendChild(projectTagsList3);

const projectDesc = document.createElement("p");
projectDesc.classList.add("mdescriptionParagraph");
projectDesc.innerHTML = projectData[0].description;
projectDiv.appendChild(projectDesc);

const buttonSeeLive = document.createElement("button");
buttonSeeLive.classList.add("mseelive");
buttonSeeLive.innerHTML = projectData[0].seeLive;
projectDiv.appendChild(buttonSeeLive);

const buttonSeeSource = document.createElement("button");
buttonSeeSource.classList.add("mseesource");
buttonSeeSource.innerHTML = projectData[0].seeSource;
projectDiv.appendChild(buttonSeeSource);
console.log(projectDiv);

function displayMobileCard() {
  mworkCard.appendChild(projectDiv);
}

function closeMobilepop() {
  if (typeof displayMobileCard === undefined) {
    return;
  } else {
    mworkCard.removeChild(projectDiv);
  }
  const mcloseButton = document.getElementsByClassName(".mcloseBtn");
  console.log;
}

projectDetails.forEach((n) => n.addEventListener("click", displayDesktopCard));
projectDetails.forEach((n) => n.addEventListener("click", displayMobileCard));
mcloseButton.addEventListener("click", closeMobilepop);

// form Validation
const fullName = document.getElementById("footer-name");
const email = document.getElementById("email");
const contactForm = document.querySelector("#form");
const formInput = document.querySelector(".form-btn");

function validator(event) {
  if (event.data !== null) {
    if (event.data.toLowerCase() !== event.data) {
      formInput.textContent = "Please use lowercase!";
      formInput.style.display = "block";
    } else if (email.validity.typeMismatch) {
      formInput.textContent = "please enter a valid Email!";
      formInput.style.display = "block";
    } else {
      formInput.textContent = "";
    }
  } else if (event.data === null) {
    formInput.style.display = "none";
  }
}

email.addEventListener("input", (event) => {
  formInput.style.display = "none";
  validator(event);
});

contactForm.addEventListener("submit", (event) => {
  emailValue = email.value;
  if (emailValue.toLowerCase() !== emailValue) {
    formInput.textContent = "Please use LOWERCASE letters on email!";
    formInput.style.display = "block";
    event.preventDefault();
  }
});
