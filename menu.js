/* eslint-disable no-unused-vars */

const humberger = document.querySelector('.icon');
const navMenu = document.querySelector('.hidden-menu');
const navLink = document.querySelectorAll('.nav-link');
const worksection = document.querySelector('.projects', '#desktop-projects');
const overlay = document.getElementById('overlay');

function openMenu() {
  humberger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

function closeMenu() {
  humberger.classList.remove('active');
  navMenu.classList.remove('active');
}

humberger.addEventListener('click', openMenu);
navLink.forEach((n) => n.addEventListener('click', closeMenu));

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
  '.see-project',
  '#desktop-see-projecr',
);

const projectData = [
  {
    id: 0,
    mobilePopImage: './image/Snapshoot Portfolio (2).png',
    desktopPopImage: './image/Snapshoot Portfolio.png',
    popCancelBtn: '&times',
    popHeaderDescription: 'Keeping track of hundreds ofcomponents',
    mobileTechnologies: [{
      data1: 'Ruby on rails',
      data2: 'css',
      data3: 'JavaScript',
      data4: 'html',
    }],
    desktopTechnologies: [{
      data1: 'Codekit',
      data2: 'GitHub',
      data3: 'JavaScript',
      data4: 'Bootstrap',
      data5: 'Terminal',
      data6: 'Codepen',
    }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    seeLive: 'See Live',
    seeSource: 'See Source',
  },

  {
    id: 1,
    mobilePopImage: './image/Snapshoot Portfolio (2).png',
    desktopPopImage: './image/Snapshoot Portfolio.png',
    popCancelBtn: '&times',
    popHeaderDescription: 'Keeping track of hundreds ofcomponents',
    mobileTechnologies: [{
      data1: 'Ruby on rails',
      data2: 'css',
      data3: 'JavaScript',
      data4: 'html',
    }],
    desktopTechnologies: [{
      data1: 'Codekit',
      data2: 'GitHub',
      data3: 'JavaScript',
      data4: 'Bootstrap',
      data5: 'Terminal',
      data6: 'Codepen',
    }],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    seeLive: 'See Live',
    seeSource: 'See Source',
  },

  {
    id: 2,
    mobilePopImage: './image/Snapshoot Portfolio (2).png',
    desktopPopImage: './image/Snapshoot Portfolio.png',
    popCancelBtn: '&times',
    popHeaderDescription: 'Keeping track of hundreds ofcomponents',
    mobileTechnologies: [{
      data1: 'Ruby on rails',
      data2: 'css',
      data3: 'JavaScript',
      data4: 'html',
    }],
    desktopTechnologies: [{
      data1: 'Codekit',
      data2: 'GitHub',
      data3: 'JavaScript',
      data4: 'Bootstrap',
      data5: 'Terminal',
      data6: 'Codepen',
    }],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    seeLive: 'See Live',
    seeSource: 'See Source',
  },

  {
    id: 3,
    mobilePopImage: './image/Snapshoot Portfolio (2).png',
    desktopPopImage: './image/Snapshoot Portfolio.png',
    popCancelBtn: '&times',
    popHeaderDescription: 'Keeping track of hundreds ofcomponents',
    mobileTechnologies: [{
      data1: 'Ruby on rails',
      data2: 'css',
      data3: 'JavaScript',
      data4: 'html',
    }],
    desktopTechnologies: [{
      data1: 'Codekit',
      data2: 'GitHub',
      data3: 'JavaScript',
      data4: 'Bootstrap',
      data5: 'Terminal',
      data6: 'Codepen',
    }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    seeLive: 'See Live',
    seeSource: 'See Source',
  },

  {
    id: 4,
    mobilePopImage: './image/Snapshoot Portfolio (2).png',
    desktopPopImage: './image/Snapshoot Portfolio.png',
    popCancelBtn: '&times',
    popHeaderDescription: 'Keeping track of hundreds ofcomponents',
    mobileTechnologies: [{
      data1: 'Ruby on rails',
      data2: 'css',
      data3: 'JavaScript',
      data4: 'html',
    }],
    desktopTechnologies: [{
      data1: 'Codekit',
      data2: 'GitHub',
      data3: 'JavaScript',
      data4: 'Bootstrap',
      data5: 'Terminal',
      data6: 'Codepen',
    }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    seeLive: 'See Live',
    seeSource: 'See Source',
  },

  {
    id: 5,
    mobilePopImage: './image/Snapshoot Portfolio (2).png',
    desktopPopImage: './image/Snapshoot Portfolio.png',
    popCancelBtn: '&times',
    popHeaderDescription: 'Keeping track of hundreds ofcomponents',
    mobileTechnologies: [{
      data1: 'Ruby on rails',
      data2: 'css',
      data3: 'JavaScript',
      data4: 'html',
    }],
    desktopTechnologies: [{
      data1: 'Codekit',
      data2: 'GitHub',
      data3: 'JavaScript',
      data4: 'Bootstrap',
      data5: 'Terminal',
      data6: 'Codepen',
    }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    seeLive: 'See Live',
    seeSource: 'See Source',
  },

];
const mworkCard = document.querySelector(
  '.recent-works-container',
  '#desktop-recent-works',
);

const workCard = document.querySelector(
  'body',
);
const projectDeskDiv = document.createElement('div');
projectDeskDiv.classList.add('cardContainer');
const projectDeskSpan = document.createElement('span');
projectDeskSpan.classList.add('closeBtn');
projectDeskSpan.innerHTML = projectData[0].popCancelBtn;
projectDeskDiv.appendChild(projectDeskSpan);
const projectDeskImg = document.createElement('img');
projectDeskImg.classList.add('deskProjectImg');
projectDeskImg.src = projectData[0].desktopPopImage;
projectDeskDiv.appendChild(projectDeskImg);
const headBtnDiv = document.createElement('div');
headBtnDiv.classList.add('headBtn');
projectDeskDiv.appendChild(headBtnDiv);
const projectDeskHeader = document.createElement('h3');
projectDeskHeader.classList.add('popPrimaryText');
projectDeskHeader.innerHTML = projectData[0].popHeaderDescription;
headBtnDiv.appendChild(projectDeskHeader);
const buttonDeskSeeLive = document.createElement('button');
buttonDeskSeeLive.classList.add('seelive');
buttonDeskSeeLive.innerHTML = projectData[0].seeLive;
headBtnDiv.appendChild(buttonDeskSeeLive);
const buttonDeskSeeSource = document.createElement('button');
buttonDeskSeeSource.classList.add('seesource');
buttonDeskSeeSource.innerHTML = projectData[0].seeSource;
headBtnDiv.appendChild(buttonDeskSeeSource);
const projectDeskTags = document.createElement('ul');
projectDeskTags.classList.add('desktopTags');
projectDeskDiv.appendChild(projectDeskTags);
const projectDeskTagsList5 = document.createElement('li');
projectDeskTagsList5.classList.add('desktopTagsList');
projectDeskTagsList5.innerHTML = projectData[0].desktopTechnologies[0].data1;
projectDeskTags.appendChild(projectDeskTagsList5);
const projectDeskTagsList4 = document.createElement('li');
projectDeskTagsList4.classList.add('desktopTagsList');
projectDeskTagsList4.innerHTML = projectData[0].desktopTechnologies[0].data2;
projectDeskTags.appendChild(projectDeskTagsList4);
const projectDeskTagsList = document.createElement('li');
projectDeskTagsList.classList.add('desktopTagsList');
projectDeskTagsList.innerHTML = projectData[0].desktopTechnologies[0].data3;
projectDeskTags.appendChild(projectDeskTagsList);
const projectDeskTagsList1 = document.createElement('li');
projectDeskTagsList1.classList.add('desktopTagsList');
projectDeskTagsList1.innerHTML = projectData[0].desktopTechnologies[0].data4;
projectDeskTags.appendChild(projectDeskTagsList1);
const projectDeskTagsList2 = document.createElement('li');
projectDeskTagsList2.classList.add('desktopTagsList');
projectDeskTagsList2.innerHTML = projectData[0].desktopTechnologies[0].data5;
projectDeskTags.appendChild(projectDeskTagsList2);
const projectDeskTagsList3 = document.createElement('li');
projectDeskTagsList3.classList.add('desktopTagsList');
projectDeskTagsList3.innerHTML = projectData[0].desktopTechnologies[0].data6;
projectDeskTags.appendChild(projectDeskTagsList3);
const projectDeskDesc = document.createElement('p');
projectDeskDesc.classList.add('descriptionParagraph');
projectDeskDesc.innerHTML = projectData[0].description;
projectDeskDiv.appendChild(projectDeskDesc);
const closeButton = document.getElementsByClassName('closeBtn');

// ..........................................

const projectDiv = document.createElement('div');
projectDiv.classList.add('mcardContainer');
const projectSpan = document.createElement('span');
projectSpan.classList.add('mcloseBtn');
projectSpan.innerHTML = projectData[0].popCancelBtn;
projectDiv.appendChild(projectSpan);
const projectImg = document.createElement('img');
projectImg.classList.add('mProjectImg');
projectImg.src = projectData[0].mobilePopImage;
projectDiv.appendChild(projectImg);
const projectHeader = document.createElement('h3');
projectHeader.classList.add('mpopPrimaryText');
projectHeader.innerHTML = projectData[0].popHeaderDescription;
projectDiv.appendChild(projectHeader);
const projectTags = document.createElement('ul');
projectTags.classList.add('mTags');
projectDiv.appendChild(projectTags);
const projectTagsList1 = document.createElement('li');
projectTagsList1.classList.add('mTagsList');
projectTagsList1.innerHTML = projectData[0].mobileTechnologies[0].data1;
projectTags.appendChild(projectTagsList1);
const projectTagsList2 = document.createElement('li');
projectTagsList2.classList.add('mTagsList');
projectTagsList2.innerHTML = projectData[0].mobileTechnologies[0].data2;
projectTags.appendChild(projectTagsList2);
const projectTagsList3 = document.createElement('li');
projectTagsList3.classList.add('mTagsList');
projectTagsList3.innerHTML = projectData[0].mobileTechnologies[0].data3;
projectTags.appendChild(projectTagsList3);
const projectDesc = document.createElement('p');
projectDesc.classList.add('mdescriptionParagraph');
projectDesc.innerHTML = projectData[0].description;
projectDiv.appendChild(projectDesc);
const buttonSeeLive = document.createElement('button');
buttonSeeLive.classList.add('mseelive');
buttonSeeLive.innerHTML = projectData[0].seeLive;
projectDiv.appendChild(buttonSeeLive);
const buttonSeeSource = document.createElement('button');
buttonSeeSource.classList.add('mseesource');
buttonSeeSource.innerHTML = projectData[0].seeSource;
projectDiv.appendChild(buttonSeeSource);

function closeMobilepop() {
  mworkCard.removeChild(projectDiv);
  workCard.removeChild(projectDeskDiv);
  overlay.classList.remove('active');
}
const mcloseButton = document.getElementsByClassName('mcloseBtn');

function displayMobileCard() {
  mworkCard.appendChild(projectDiv);
  mcloseButton[0].addEventListener('click', closeMobilepop);
  overlay.classList.add('active');
}

function closeDeskpop() {
  workCard.removeChild(projectDeskDiv);
  mworkCard.removeChild(projectDiv);
  overlay.classList.remove('active');
}

function displayDesktopCard() {
  workCard.appendChild(projectDeskDiv);
  closeButton[0].addEventListener('click', closeDeskpop);
  overlay.classList.add('active');
}

projectDetails.forEach((n) => n.addEventListener('click', displayMobileCard));
projectDetails.forEach((n) => n.addEventListener('click', displayDesktopCard));

// form Validation
const fullName = document.getElementById('footer-name');
const email = document.getElementById('email');
const userMessage = document.getElementById('message')
const contactForm = document.querySelector('#form');
const formInput = document.querySelector('.form-btn');
const error = document.querySelector('.error');

contactForm.addEventListener('submit', (e) => {
  const emailValue = email.value;
  let flag = 0;
  for (let i = 0; i < emailValue.length; i += 1) {
    if (emailValue[i] !== emailValue[i].toLowerCase()) {
      e.preventDefault();
      error.innerText = 'Please enter email in lowercase';
      flag = 1;
    }
  }
  });
