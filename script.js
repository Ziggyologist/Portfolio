const projects = [
  {
    id: "cat_finder",
    project_name: "Cat Finder",
    project_description:
      "LoCAT is a web application designed to help users find and report missing cats. The app makes use of the Geolocation API, as users can pin on the map the precise location and time where they spotted a cat. Additionally, the color, breed, and other details can be provided about the cat via a form. The missing cat profile is then updated to the database, and users can search the database for a specific cat (by color, race etc). \n This app was developped using HTML, CSS, JavaScript, and the Leaflet library. The icons displayed on the map are created by me in Adobe Illustrator. This app was made using the Object Oriented Programming paradigm, with ES6 classes.",
    project_photo: "./CatAp.gif",
    photo_description: "screenshot of cat finder application",
    project_url: "https://ziggyologist.github.io/Cat-Finder/",
  },
  {
    id: "bullet_jorunal",
    project_name: "Bullet Journal",
    project_description:
      "The bullet journal app is very similar to the classical paper journal. The users can rate their daily mood by coloring a mountain, insert habits to track, and add diary entries. This app was created using HTML, CSS, and JavaScript, and all the illustrations and SVGs were done in Adobe Illustrator and are originals. ",
    project_photo: "./BulletAp.gif",
    photo_description: "screenshot of bullet journal application",
    project_url: "https://ziggyologist.github.io/MoodTrackerApp/main_page.html",
  },
  {
    id: "restaurant_menu",
    project_name: "Restaurant Menu",
    project_description:
      "This page is an example of how a restaurant or menu can be designed in a more interactive way. The user makes an order (a burger in this case) through the interactive SVG.",
    project_photo: "./BurgerAp.gif",
    photo_description: "screenshot of restaurant application",
    project_url: "https://ziggyologist.github.io/Hamburger/",
  },
  {
    id: "baking_app",
    project_name: "Banking App",
    project_description:
      "This is a banking app simulation. For this project there were created 4 users, each with their own account and history. The 4 accounts can transfer money between each other. In addition, other functions available in this app are sorting the transactions, converting currencies, or making payments. The application also has a timer and the user is logged out after 5 minutes of inactivity. ",
    project_photo: "./BankAp.gif",
    photo_description: "screenshot of banking application",
    project_url: "https://ziggyologist.github.io/BankApp/",
  },
  {
    id: "joke_teller",
    project_name: "Joke Teller",
    project_description:
      "This app makes use of the JokeAPI to generate programming jokes, which are then read out loud by a text-to-voice API (VoiceRSS API). The app also has a dark mode and a light mode, and the user preference is saved in the local storage. The robot animation is taken from giphy.",
    project_photo: "./robots.gif",
    photo_description: "screenshot of joke telling application",
    project_url: "https://ziggyologist.github.io/JokeTeller/",
  },
  {
    id: "music_player",
    project_name: "Music Player",
    project_description:
      "This is a custom music player made using HTML Audio DOM methods, CSS, and JavaScript. The background was made in Adobe Illustrator.",
    project_photo: "./music_player.PNG",
    photo_description: "screenshot of music player application",
    project_url: "https://ziggyologist.github.io/Music_Player/",
  },
  {
    id: "paint_clone",
    project_name: "Paint Clone",
    project_description:
      "This web application was made using HTML Canvas, CSS, and JavaScript. The icons were added from Font Awesome and for the custom color picker I have used the JSColor.js library. The app replicates some of the basic tools from the classic Windows Paint, such as the bucket tool, the brush, and the eraser. The user can also save the painting in Local Storage or clear it, as well as download the painting as a .jpeg file.",
    project_photo: "./paint_clone.PNG",
    photo_description: "screenshot of paint clone application",
    project_url: "https://ziggyologist.github.io/PaintClone/",
  },
  {
    id: "budget_app",
    project_name: "Budget App",
    project_description:
      "This is a single-page application done using React.JS. The app allows the user to add expenses and put them into categories. The user can then filter through the years, and for each year a chart is generated with the monthly expenses. The chart is filled more or less, according to how much money the user spent in the respective month.",
    project_photo: "./react_budget.PNG",
    photo_description: "screenshot of react budget SPA",
    project_url: "https://ziggyologist.github.io/react-app/",
  },
];

const navLinks = document.querySelectorAll(".nav_link");
const cornerBorder = document.querySelectorAll(".corners");

const projectLinks = document.querySelectorAll(".projects_list a");
const projectDetails = document.querySelector(".project_details");

const circles = document.querySelectorAll("circle");
const background = document.querySelectorAll(".background");

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
<div class="image_container">  
<img class="app_image" src="${project.project_photo}" alt="${project.photo_description}"> </div>
 <br />
  <p><a href="${project.project_url}" target="_blank">Click here to check out the project</a> </p>
  `;

  projectDetails.innerHTML = html;
};

// insertProject(projects[0]);
// ////////Events
let clicked = false;
projectLinks.forEach((link, index) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(link);
    insertProject(projects[index]);
  })
);

circles.forEach((circle, index) => {
  console.log(circle);

  circle.addEventListener("click", function () {
    console.log("clicked");
    circle.style.fill = "#f2294c";
    console.log(circle.attributes.cx);
    // console.log(circle.attributes[1].value);
    console.log(
      circle.attributes.cx.value,
      circle.attributes.cy.value,
      circle.attributes.r.value
    );
    circle.attributes.cx.value++;
    // circle.attributes.cy.value++;
    // circle.attributes.r.value = Number(circle.attributes.r.value * 1.2);
  });
});

// console.log(circles);

background.forEach(div => {
  // console.log(div);
  let random = Math.trunc(Math.random() * 100 + 1);
  let random2 = Math.trunc(Math.random() * 100 + 1);

  div.style.top = `${random}%`;
  div.style.left = `${random2}%`;
  console.log(random);
});

// CURSOR

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");
const headings = document.querySelectorAll("h1");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px`;
});
console.log(cursor);
const aboutMe = document.querySelectorAll("p");

// setInterval(function () {
//   console.log("interval");
//   cursor.classList.toggle("blueCol");
// }, 5000);

document.addEventListener("dblclick", function () {
  console.log("click magic");
  cursor.classList.toggle("clicked");
});

aboutMe.forEach(p => {
  p.addEventListener("mouseover", function () {
    cursor.classList.add("blackCol");
  });
  p.addEventListener("mouseout", function () {
    cursor.classList.remove("blackCol");
  });
});
