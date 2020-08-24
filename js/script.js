
// Global variables
const projectContainer = document.querySelector(".project-container");
const nextButton = document.querySelector(".next-button");
const previousButton = document.querySelector(".previous-button");
let activeProject = 0;


// Object containing all projects information

const projects = [
  {
    "number": "01",
    "title": "Personal Profile Page",
    "imageurl": "images/project1.jpg",
    "description": "The goal of this first project was to customize a personal online profile by adding graphics, text and improving the look of a web page using CSS and to get familiar with publishing projects on GitHub.",
    "linklive": "https://raffaelab.github.io/fewd-techdegree-project-1/",
    "linkgithub": "https://github.com/raffaelab/fewd-techdegree-project-1"
  },
  {
    "number": "02",
    "title": "Mobile-first Responsive Layout",
    "imageurl": "images/project2.jpg",
    "description": "Designing web pages that look and function well on multiple screen sizes is an essential skill for a web developer. Using HTML, CSS, and responsive design, the goal was to create a mobile-first web page that adjusts to fit all screen sizes.",
    "linklive": "https://raffaelab.github.io/fewd-techdegree-project-2/",
    "linkgithub": "https://github.com/raffaelab/fewd-techdegree-project-2"
  },
  {
    "number": "03",
    "title": "Online Registration Form",
    "imageurl": "images/project3.jpg",
    "description": "The goal of this project was to build a responsive, mobile-first registration form using a variety of HTML form elements as well as CSS to match a given design as closely as possible.",
    "linklive": "https://raffaelab.github.io/fewd-techdegree-project-3/",
    "linkgithub": "https://github.com/raffaelab/fewd-techdegree-project-3"
  },
  {
    "number": "04",
    "title": "Web Style Guide",
    "imageurl": "images/project4.jpg",
    "description": "In this project I used Sass for the first time to create a web style guide that can act as a personal and custom Bootstrap that you can drop into any of your projects to speed up styling, layout and development in general.",
    "linklive": "https://raffaelab.github.io/fewd-techdegree-project-4/",
    "linkgithub": "https://github.com/raffaelab/fewd-techdegree-project-4"
  },
  {
    "number": "05",
    "title": "Interactive Photo Gallery",
    "imageurl": "images/project5.jpg",
    "description": "HTML, CSS and the popular programming language JavaScript were used in this project to create an interactive, searchable gallery of beautiful photos. This kind of gallery is a common feature of many modern websites today. ",
    "linklive": "https://raffaelab.github.io/fewd-techdegree-project-5/",
    "linkgithub": "https://github.com/raffaelab/fewd-techdegree-project-5"
  },
  {
    "number": "06",
    "title": "Game Show App",
    "imageurl": "images/project6.jpg",
    "description": "In this project, I created a browser version of “Wheel of Success”, a word guessing game. I used Javascript to come up with a random phrase that players will try to guess by entering different letters into the program.",
    "linklive": "https://raffaelab.github.io/fewd-techdegree-project-6/",
    "linkgithub": "https://github.com/raffaelab/fewd-techdegree-project-6"
  },
  {
    "number": "07",
    "title": "WebApp Dashboard",
    "imageurl": "images/project7.jpg",
    "description": "The goal of this project was to build an interactive dashboard for a web application using advanced web techniques including SVG graphics and JavaScript programming. The project involved creating interactive tables, charts, graphics and more.",
    "linklive": "https://raffaelab.github.io/fewd-techdegree-project-7/",
    "linkgithub": "https://github.com/raffaelab/fewd-techdegree-project-7"
  },
  {
    "number": "08",
    "title": "Employee Directory",
    "imageurl": "images/project8.jpg",
    "description": "In this last project I created a searchable employee directory using JavaScript by communicating with a third-party API (Application Programming Interface) to access and display the data.",
    "linklive": "https://raffaelab.github.io/fewd-techdegree-project-8/",
    "linkgithub": "https://github.com/raffaelab/fewd-techdegree-project-8"
  }
];

// Functions

function displayProject(index) {
  let { number, title, imageurl, description, linklive, linkgithub } = projects[index];

  const projectHTML = `
    <div class="col-lg-5 p-md-0 mb-4 my-md-5 mr-lg-n5 over d-flex align-items-center">
      <a href="${linklive}" target="_blank"><img src="${imageurl}" class="img-fluid shadow fade-in" alt="Project Screenshot"></a>
    </div>
    <div class="col-lg-7 bg-white py-3 p-sm-5">
      <div class="pl-lg-5  fade-in">
        <h2 class="mb-4 mr-5">${title}</h2>
        <p class="mb-5">${description}</p>
        <p class="project-nr m-5 h1">${number}</p>
        <a href="${linklive}" target="_blank" class="btn project-btn bg-darkblue rounded-0 text-white">Live version <img class="icon" src="icons/desktop.svg"alt="Desktop Icon"></a>
        <a href="${linkgithub}" target="_blank" class="btn project-btn bg-pink rounded-0 ml-md-2">See on github <img class="icon" src="icons/logo-github.svg" alt="Github Icon"></a>
      </div>
    </div>
  `;

  projectContainer.innerHTML = projectHTML;
  activeProject = parseInt(index);
}

function nextProject(e) {
  if (activeProject === projects.length - 1) {
    displayProject(activeProject = 0);
  } else {
    displayProject(activeProject + 1);
  }
}

function previousProject(e) {
  if (activeProject === 0) {
    displayProject(activeProject = projects.length - 1);
  } else {
    displayProject(activeProject - 1);
  }
}

// Event Listener

nextButton.addEventListener("click", e => nextProject(e));
previousButton.addEventListener("click", e => previousProject(e));

// Type Effect

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }

  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #303B56}";
  document.body.appendChild(css);
};