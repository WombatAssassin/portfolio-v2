let featherButton = document.getElementById("feather-icon-button");
let codeButton = document.getElementById("code-icon-button");
let ghostButton = document.getElementById("ghost-icon-button");
let featherText = document.getElementById("about-me__content__feather");
let codeText = document.getElementById("about-me__content__code");
let ghostText = document.getElementById("about-me__content__ghost");
let aboutMeGridContent = document.getElementById("about-me-grid-content")
const toggleThemeBtn = document.getElementById("toggle-theme-btn")
const toggleThemeIcon = document.getElementById("toggle-theme-icon")
const modal = document.getElementById('myModal');
const websiteDemoLink = document.getElementById("website-demo-link")
// modal.style.display = "block"
// Darkmode Toggle
toggleThemeBtn.addEventListener("click", themeToggle)
let isDark = true

websiteDemoLink.addEventListener("click", () => alert("You silly goose! You're already here!"))

function themeToggle() {
    isDark = !isDark
    document.body.classList.toggle("light-mode");
    toggleThemeIcon.classList.toggle("fa-sun")
    toggleThemeIcon.classList.toggle("fa-moon")

}

// Modal Toggle

 navIcon = document.getElementById("nav-icon1")
	navIcon.addEventListener("click", function(){
		navIcon.classList.toggle('open');
        modal.style.display === "block" ?
        modal.style.display = "none" :
        modal.style.display = "block"
        console.log("toggle on")
        console.log("test")
	});

function closeModal() {
    navIcon.classList.toggle('open');
    modal.style.display = "none";
    console.log("test2")
}

function clearButtonsAndText() {
    ghostButton.firstChild.classList.remove("selected")
    featherButton.firstChild.classList.remove("selected")
    codeButton.firstChild.classList.remove("selected")
    ghostText.classList.remove("text-selected")
    featherText.classList.remove("text-selected")
    codeText.classList.remove("text-selected")
}

featherButton.addEventListener("click", () => {
    clearButtonsAndText()
    featherButton.firstChild.classList.add("selected")
    featherText.classList.add("text-selected")
})

codeButton.addEventListener("click", () => {
    clearButtonsAndText()
    codeButton.firstChild.classList.add("selected")
    codeText.classList.add("text-selected")
})

ghostButton.addEventListener("click", () => {
    clearButtonsAndText()
    ghostButton.firstChild.classList.add("selected")
    ghostText.classList.add("text-selected")
})