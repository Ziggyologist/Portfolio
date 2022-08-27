const projects = [
  {
    id: "cat_finder",
    project_name: "Cat Finder",
    project_description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam nisi ad aspernatur molestiae unde voluptates a velit, neque at, sunt ipsam esse nam aliquam quae magnam aut iste. Illum?",
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
