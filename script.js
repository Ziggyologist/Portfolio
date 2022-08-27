const projects = [
  {
    id: "cat_finder",
    project_name: "Cat Finder",
    project_description:
      "LoCAT is a web application designed to help users find and report missing cats. The app makes use of the Geolocation API, as the users can pin on the map the precise location and time where they spotted a cat. Additionally, the color, race, and other details can be provided about the cat via a form. The missing cat profile is then updated to the database, and users can search the database for a specific cat (by color, race etc). \n This app was developped using HTML, CSS, JavaScript, and the Leaflet library. The icons displayed on the map are created by me in Adobe Illustrator.",
    project_photo: "",
    project_url: "https://ziggyologist.github.io/Cat-Finder/",
  },
  {
    id: "bullet_jorunal",
    project_name: "Bullet Journal",
    project_description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam nisi ad aspernatur molestiae unde voluptates a velit, neque at, sunt ipsam esse nam aliquam quae magnam aut iste. Illum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam nisi ad aspernatur molestiae unde voluptates a velit, neque at, sunt ipsam esse nam aliquam quae magnam aut iste. Illum?",
    project_photo: "",
    project_url: "https://ziggyologist.github.io/MoodTrackerApp/main_page.html",
  },
  {
    id: "restaurant_menu",
    project_name: "Restaurant Menu",
    project_description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam nisi ad aspernatur molestiae unde voluptates a velit, neque at, sunt ipsam esse nam aliquam quae magnam aut iste. Illum?",
    project_photo: "",
    project_url: "https://codepen.io/ziggyologist/full/JjKGaOb",
  },
  {
    id: "baking_app",
    project_name: "Banking App",
    project_description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam nisi ad aspernatur molestiae unde voluptates a velit, neque at, sunt ipsam esse nam aliquam quae magnam aut iste. Illum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam nisi ad aspernatur molestiae unde voluptates a velit, neque at, sunt ipsam esse nam aliquam quae magnam aut iste. Illum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam nisi ad aspernatur molestiae unde voluptates a velit, neque at, sunt ipsam esse nam aliquam quae magnam aut iste. Illum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam nisi ad aspernatur molestiae unde voluptates a velit, neque at, sunt ipsam esse nam aliquam quae magnam aut iste. Illum?",
    project_photo: "",
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
  <p><a href="${project.project_url}" target="_blank">Click here to check the project</a> </p>
  `;
  projectDetails.innerHTML = html;
};

// ////////Events
projectLinks.forEach((link, index) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(link);
    insertProject(projects[index]);
  })
);
