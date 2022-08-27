const projects = [
  {
    id: "cat_finder",
    project_name: "Cat Finder",
    project_description:
      "LoCAT is a web application designed to help users find and report missing cats. The app makes use of the Geolocation API, as users can pin on the map the precise location and time where they spotted a cat. Additionally, the color, breed, and other details can be provided about the cat via a form. The missing cat profile is then updated to the database, and users can search the database for a specific cat (by color, race etc). \n This app was developped using HTML, CSS, JavaScript, and the Leaflet library. The icons displayed on the map are created by me in Adobe Illustrator. This app was made using the Object Oriented Programming paradigm, with ES6 classes.",
    project_photo: "./catAP.PNG",
    photo_description: "screenshot of cat finder application",
    project_url: "https://ziggyologist.github.io/Cat-Finder/",
  },
  {
    id: "bullet_jorunal",
    project_name: "Bullet Journal",
    project_description:
      "The bullet journal app is very similar to the classical paper journal. The users can rate their daily mood by coloring a mountain, insert habits to track, and add diary entries. This app was created using HTML, CSS, and JavaScript, and all the illustrations and SVGs were done in Adobe Illustrator and are originals. ",
    project_photo: "./bulletAp.PNG",
    photo_description: "screenshot of bullet journal application",
    project_url: "https://ziggyologist.github.io/MoodTrackerApp/main_page.html",
  },
  {
    id: "restaurant_menu",
    project_name: "Restaurant Menu",
    project_description:
      "This page is an example of how a restaurant or menu can be designed in a more interactive way. The user makes an order (a burger in this case) through the interactive SVG.",
    project_photo: "./HamburgerAp.PNG",
    photo_description: "screenshot of restaurant application",
    project_url: "https://ziggyologist.github.io/Hamburger/",
  },
  {
    id: "baking_app",
    project_name: "Banking App",
    project_description:
      "This is a banking app simulation. For this project there were created 4 users, each with their own account and history. The 4 accounts can transfer money between each other. In addition, other functions available in this app are sorting the transactions, converting currencies, or making payments. The application also has a timer and the user is logged out after 5 minutes of inactivity. ",
    project_photo: "./bank.PNG",
    photo_description: "screenshot of banking application",
    project_url: "https://ziggyologist.github.io/BankApp/",
  },
];

const navLinks = document.querySelectorAll(".nav_link");
const cornerBorder = document.querySelectorAll(".corners");

const projectLinks = document.querySelectorAll(".projects_list a");
const projectDetails = document.querySelector(".project_details");

navLinks.forEach((link, index) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: "smooth"});
  })
);

const insertProject = function (project) {
  const html = `
  <h2>${project.project_name}</h2> <br/>
  <p>${project.project_description}</p> <br/>
  <img src="${project.project_photo}" alt="${project.photo_description}"> <br />
  <p><a href="${project.project_url}" target="_blank">Click here to check out the project</a> </p>
  `;
  projectDetails.innerHTML = html;
};
// insertProject(projects[0]);
// ////////Events
projectLinks.forEach((link, index) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(link);
    insertProject(projects[index]);
  })
);
