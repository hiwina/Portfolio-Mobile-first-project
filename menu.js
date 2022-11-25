const humberger = document.querySelector(".icon");
const navMenu = document.querySelector(".hidden-menu");
const navLink = document.querySelectorAll(".nav-link");
const worksection = document.querySelector(".projects", "#desktop-projects");
const overlay = document.getElementById("overlay");

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
const mworkCard = document.querySelector(
  ".recent-works-container",
  "#desktop-recent-works"
);

const workCard = document.querySelector(
  ".recent-works-container",
  "#desktop-recent-works"
);
const projectDeskDiv = document.createElement("div");
projectDeskDiv.classList.add("cardContainer");

const projectDeskSpan = document.createElement("span");
projectDeskSpan.classList.add("closeBtn");
projectDeskSpan.innerHTML = projectData[0].popCancelBtn;
projectDeskDiv.appendChild(projectDeskSpan);

const projectDeskImg = document.createElement("img");
projectDeskImg.classList.add("deskProjectImg");
projectDeskImg.src = projectData[0].desktopPopImage;
projectDeskDiv.appendChild(projectDeskImg);

const headBtnDiv = document.createElement("div");
headBtnDiv.classList.add("headBtn");
projectDeskDiv.appendChild(headBtnDiv);

const projectDeskHeader = document.createElement("h3");
projectDeskHeader.classList.add("popPrimaryText");
projectDeskHeader.innerHTML = projectData[0].popHeaderDescription;
headBtnDiv.appendChild(projectDeskHeader);

const buttonDeskSeeLive = document.createElement("button");
buttonDeskSeeLive.classList.add("seelive");
buttonDeskSeeLive.innerHTML = projectData[0].seeLive;
headBtnDiv.appendChild(buttonDeskSeeLive);

const buttonDeskSeeSource = document.createElement("button");
buttonDeskSeeSource.classList.add("seesource");
buttonDeskSeeSource.innerHTML = projectData[0].seeSource;
headBtnDiv.appendChild(buttonDeskSeeSource);

const projectDeskTags = document.createElement("ul");
projectDeskTags.classList.add("desktopTags");
projectDeskDiv.appendChild(projectDeskTags);

const projectDeskTagsList5 = document.createElement("li");
projectDeskTagsList5.classList.add("desktopTagsList");
projectDeskTagsList5.innerHTML = projectData[0].desktopTechnologies[0];
projectDeskTags.appendChild(projectDeskTagsList5);

const projectDeskTagsList4 = document.createElement("li");
projectDeskTagsList4.classList.add("desktopTagsList");
projectDeskTagsList4.innerHTML = projectData[0].desktopTechnologies[1];
projectDeskTags.appendChild(projectDeskTagsList4);

const projectDeskTagsList = document.createElement("li");
projectDeskTagsList.classList.add("desktopTagsList");
projectDeskTagsList.innerHTML = projectData[0].desktopTechnologies[2];
projectDeskTags.appendChild(projectDeskTagsList);

const projectDeskTagsList1 = document.createElement("li");
projectDeskTagsList1.classList.add("desktopTagsList");
projectDeskTagsList1.innerHTML = projectData[0].desktopTechnologies[3];
projectDeskTags.appendChild(projectDeskTagsList1);

const projectDeskTagsList2 = document.createElement("li");
projectDeskTagsList2.classList.add("desktopTagsList");
projectDeskTagsList2.innerHTML = projectData[0].desktopTechnologies[4];
projectDeskTags.appendChild(projectDeskTagsList2);

const projectDeskTagsList3 = document.createElement("li");
projectDeskTagsList3.classList.add("desktopTagsList");
projectDeskTagsList3.innerHTML = projectData[0].desktopTechnologies[5];
projectDeskTags.appendChild(projectDeskTagsList3);

const projectDeskDesc = document.createElement("p");
projectDeskDesc.classList.add("descriptionParagraph");
projectDeskDesc.innerHTML = projectData[0].description;
projectDeskDiv.appendChild(projectDeskDesc);
// console.log(projectData[i].desktopTechnologies[i]);

function displayDesktopCard() {
  workCard.appendChild(projectDeskDiv);
  const closeButton = document.getElementsByClassName("closeBtn");
  closeButton[0].addEventListener("click", closeDeskpop);
  overlay.classList.add("active");
}

function closeDeskpop() {
  if (typeof displayDesktopCard === undefined) {
    return;
  } else {
    workCard.removeChild(projectDeskDiv);
    overlay.classList.remove("active");
  }
  console.log;
}

projectDetails.forEach((n) => n.addEventListener("click", displayDesktopCard));

//..........................................

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
  const mcloseButton = document.getElementsByClassName("mcloseBtn");
  mcloseButton[0].addEventListener("click", closeMobilepop);
  overlay.classList.add("active");
}

function closeMobilepop() {
  if (typeof displayMobileCard === undefined) {
    return;
  } else {
    mworkCard.removeChild(projectDiv);
    overlay.classList.remove("active");
  }
  console.log;
}

projectDetails.forEach((n) => n.addEventListener("click", displayMobileCard));
