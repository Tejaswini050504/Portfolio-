// ***********************TYPING*************************
let text = "Frontend Developer";
let index = 0;
let typing = true;

function typeText() {
    let element = document.getElementById("typing");

    if (typing) {
        element.textContent = text.substring(0, index + 1);
        index++;

        if (index === text.length) {
            typing = false;
            setTimeout(typeText, 1000);
            return;
        }
    } else {
        element.textContent = text.substring(0, index - 1);
        index--;

        if (index === 0) {
            typing = true;
        }
    }

    setTimeout(typeText, typing ? 150 : 100);
}

typeText();

// *****************ICON******************
function openLinkedIn(event) {
    event.preventDefault();
    window.open("https://www.linkedin.com/in/tejaswini-chintawar/", "_blank");
}

function openGitHub(event) {
    event.preventDefault();
    window.open("https://github.com/Tejaswini050504", "_blank");
}

function openEmail(event) {
    event.preventDefault();
    window.location.href = "mailto:tschintawar@gmail.com";
}

function openInstagram(event) {
    event.preventDefault();
    window.open("https://www.instagram.com/tejaswini_chintawar/", "_blank");
}

// ************** PROJECT *****************

let projectTrack = document.getElementById("projectTrack");

const leftProjectArrow = document.getElementById("leftProjectArrow");
const rightProjectArrow = document.getElementById("rightProjectArrow");

let projects = document.querySelectorAll(".project-box");

let projectIndex = 0;


function getVisibleProjects() {

    if (window.innerWidth >= 1024) {
        return 3;
    }
    if (window.innerWidth >= 768) {
        return 2;
    }
    return 1;
}


function moveProjectSlider() {

    const visibleProjects = getVisibleProjects();

    let moveAmount;

    if (visibleProjects === 3) {
        moveAmount = 34;
    }
    else if (visibleProjects === 2) {
        moveAmount = 52;
    }
    else {
        moveAmount = 100;
    }

    projectTrack.style.transform =
        "translateX(-" + (projectIndex * moveAmount) + "%)";

    updateProjectArrows();
}


rightProjectArrow.addEventListener("click", function () {

    const visibleProjects = getVisibleProjects();
    const maxIndex = projects.length - visibleProjects;

    if (projectIndex < maxIndex) {
        projectIndex++;
        moveProjectSlider();
    }

});


leftProjectArrow.addEventListener("click", function () {

    if (projectIndex > 0) {
        projectIndex--;
        moveProjectSlider();
    }

});


function updateProjectArrows() {

    const visibleProjects = getVisibleProjects();
    const maxIndex = projects.length - visibleProjects;


    if (projectIndex === 0) {
        leftProjectArrow.style.display = "none";
    }
    else {
        leftProjectArrow.style.display = "flex";
    }


    if (projectIndex >= maxIndex) {
        rightProjectArrow.style.display = "none";
    }
    else {
        rightProjectArrow.style.display = "flex";
    }

}


updateProjectArrows();


window.addEventListener("resize", function () {

    projectIndex = 0;
    projectTrack.style.transform = "translateX(0%)";
    updateProjectArrows();

});


function openProject(project) {

    if (project === "autowash") {
        window.location.href = "Projects/AUTO%20WASH/index.html";
    }

    if (project === "cuda") {
        window.location.href = "Projects/CUDA/index.html";
    }

    if (project === "dmart") {
        window.location.href = "Projects/D-MART/index.html";
    }

    if (project === "ecommerce") {
        window.location.href = "Projects/ecommerce-shopping/index.html";
    }

    if (project === "gym") {
        window.location.href = "Projects/Gymtso-Fitnesss/index.html";
    }

    if (project === "kids") {
        window.location.href = "Projects/kids%20website/index.html";
    }

    if (project === "sevenmentor") {
        window.location.href = "Projects/Seven%20Mentor/index.html";
    }

    if (project === "the7") {
        window.location.href = "Projects/The%207/index.html";
    }
}


// **********************SKILL DROP DOWN******************

function toggleSkill(arrow) {

    let skillBox = arrow.parentElement.parentElement;
    let skillInfo = skillBox.querySelector(".skill-box-info");

    if (skillInfo.style.display === "block") {
        skillInfo.style.display = "none";
    } else {
        skillInfo.style.display = "block";
    }
}


// *********************** NAVBAR **************************

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

let links = document.querySelectorAll(".nav-link");

links.forEach(function (link) {
    link.addEventListener("click", function () {

        document.getElementById("navLinks").classList.remove("show");

        links.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});