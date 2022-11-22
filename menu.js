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

const projectDetails = document.querySelectorAll(
  ".see-project",
  "#desktop-see-projecr"
);

const projectData = [
  {
    id: 0,
    mobilePopImage: "./images/Snapshoot Portfolio.png",
    desktopPopImage: "./images/Snapshoot Portfolio.png",
    popCancelBtn: "X",
    popHeaderDescription: "Keeping track of hundreds ofcomponents",
    mobileTechnologies: {
      data1: "Ruby on rails",
      data2: "css",
      data3: "JavaScript",
      data4: "html",
    },
    desktopTechnologies: {
      data1: "Codekit",
      data2: "GitHub",
      data3: "JavaScript",
      data4: "Bootstrap",
      data5: "Terminal",
      data6: "Codepen",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    seeLive: "#",
    seeSource: "#",
  },

  {
    id: 1,
    mobilePopImage: "images/Snapshoot Portfolio.png",
    desktopPopImage: "images/Snapshoot Portfolio.png",
    popCancelBtn: "X",
    popHeaderDescription: "Keeping track of hundreds ofcomponents",
    mobileTechnologies: {
      data1: "Ruby on rails",
      data2: "css",
      data3: "JavaScript",
      data4: "html",
    },
    desktopTechnologies: {
      data1: "Codekit",
      data2: "GitHub",
      data3: "JavaScript",
      data4: "Bootstrap",
      data5: "Terminal",
      data6: "Codepen",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    seeLive: "#",
    seeSource: "#",
  },
  {
    id: 2,
    mobilePopImage: "images/Snapshoot Portfolio.png",
    desktopPopImage: "images/Snapshoot Portfolio.png",
    popCancelBtn: "X",
    popHeaderDescription: "Keeping track of hundreds ofcomponents",
    mobileTechnologies: {
      data1: "Ruby on rails",
      data2: "css",
      data3: "JavaScript",
      data4: "html",
    },
    desktopTechnologies: {
      data1: "Codekit",
      data2: "GitHub",
      data3: "JavaScript",
      data4: "Bootstrap",
      data5: "Terminal",
      data6: "Codepen",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    seeLive: "#",
    seeSource: "#",
  },
  {
    id: 3,
    mobilePopImage: "images/Snapshoot Portfolio.png",
    desktopPopImage: "images/Snapshoot Portfolio.png",
    popCancelBtn: "X",
    popHeaderDescription: "Keeping track of hundreds ofcomponents",
    mobileTechnologies: {
      data1: "Ruby on rails",
      data2: "css",
      data3: "JavaScript",
      data4: "html",
    },
    desktopTechnologies: {
      data1: "Codekit",
      data2: "GitHub",
      data3: "JavaScript",
      data4: "Bootstrap",
      data5: "Terminal",
      data6: "Codepen",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    seeLive: "#",
    seeSource: "#",
  },
  {
    id: 4,
    mobilePopImage: "images/Snapshoot Portfolio.png",
    desktopPopImage: "images/Snapshoot Portfolio.png",
    popHeaderDescription: "Keeping track of hundreds ofcomponents",
    mobileTechnologies: {
      data1: "Ruby on rails",
      data2: "css",
      data3: "JavaScript",
      data4: "html",
    },
    desktopTechnologies: {
      data1: "Codekit",
      data2: "GitHub",
      data3: "JavaScript",
      data4: "Bootstrap",
      data5: "Terminal",
      data6: "Codepen",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    seeLive: "#",
    seeSource: "#",
  },
  {
    id: 5,
    mobilePopImage: "images/Snapshoot Portfolio.png",
    desktopPopImage: "images/Snapshoot Portfolio.png",
    popHeaderDescription: "Keeping track of hundreds ofcomponents",
    mobileTechnologies: {
      data1: "Ruby on rails",
      data2: "css",
      data3: "JavaScript",
      data4: "html",
    },
    desktopTechnologies: {
      data1: "Codekit",
      data2: "GitHub",
      data3: "JavaScript",
      data4: "Bootstrap",
      data5: "Terminal",
      data6: "Codepen",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    seeLive: "#",
    seeSource: "#",
  },
];

const workCard = document.querySelector(
  ".recent-works-container",
  "#desktop-recent-works"
);

function displayDesktopCard() {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("cardContainer");
  workCard.appendChild(projectDiv);

  const projectSpan = document.createElement("span");
  projectSpan.classList.add("clseBtn");
  projectSpan.textContent = "&times";
  projectDiv.appendChild(projectSpan);

  const projectImg = document.createElement("img");
  projectImg.classList.add("deskProjectImg");
  projectImg.textContent = projectData.mobilePopImage;
  projectDiv.appendChild(projectImg);

  const projectHeader = document.createElement("h3");
  projectHeader.classList.add("popPrimaryText");
  projectHeader.textContent.add = projectData.popHeaderDescription;
  projectDiv.appendChild(projectHeader);

  const projectTags = document.createElement("ul");
  projectTags.classList.add("desktopTags");
  projectTags.textContent.add = projectData.desktopTechnologies;
  projectDiv.appendChild(projectTags);

  const projectTagsList = document.createElement("li");
  projectTagsList.classList.add("desktopTagsList");
  projectTagsList.textContent.add = projectData.desktopTechnologies;
  projectTags.innerHTML.projectTagsList;

  // ......
}

projectDetails.forEach((n) => n.addEventListener("click", displayDesktopCard));

// const projectDetaildDesktop = (content) => `
//    <span class="popCancelBtn"> &times;</span>
//    <img class="popImage" src=${projectData.desktopPopImage[content]} alt="Desktop Image">
//    <h2 class="projectName">${projectData[content].popHeaderDescription}</h2>
//    <ul class="tags">
//      <li><a href="">${projectData[content].desktopTechnologies.data1}</a></li>
//    <li><a href="">${projectData[content].desktopTechnologies.data2}</a></li>
//      <li><a href="">${projectData[content].desktopTechnologies.data3}</a></li>
//      <li><a href="">${projectData[content].desktopTechnologies.data4}</a></li>
//      <li><a href="">${projectData[content].desktopTechnologies.data5}</a></li>
//      <li><a href="">${projectData[content].desktopTechnologies.data6}</a></li>
//    </ul>
//    <p class="detailDescription">${projectData[content].description}</p>
//    <div class="btn">
//      <a href="${projectData[content].seeLive}">See Live <i class="fa fa-external-link"></i></a>
//      <a href="${projectData[content].seeSource}">See Source <i class="fa fa-external-link"></i></a>
//    </div>
//    `;

// // function displayPopup() {
// //   const creatDiv = document.createElement('div');
// //   creatDiv.className = '.popupDetail';
// //   creatDiv.innerHTML = projectDetaildDesktop;
// //   workCard.appendChild(creatDiv);
// // }

// // function closePopup() {
// //   workCard.removeChild(displayPopup.applycreatDiv);
// // }

// // projectDetails.forEach((n) => n.addEventListener('click', displayPopup));

// // const closeBtn = document.querySelectorAll('.popCancelBtn');
// // closeBtn.addEventListener('click', closePopup);

// for (let i = 0; i < projectDetails.length; i = +1) {
//   projectDetails[i].addEventListener('click', () => {
//     const creatDiv = document.createElement('div');
//     creatDiv.className = 'work-details-card';
//     creatDiv.innerHTML = projectDetaildDesktop(i);
//     workCard.appendChild(creatDiv);
//     // document.body.appendChild(create_div);
//     // const closedetails = document.querySelector('.close-details');
//     // closedetails.addEventListener('click', async => {
//     //   workCard.removeChild(create_div);
//     // });
//   });
// }
