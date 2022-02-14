// toggle.js is a navigation button bar - display/hide content toggle script. For element tags, class and id naming, check out devtools_intro.html

function toggle () {

    let section = this.id;
    if (document.querySelector(`#${this.id}`).classList.value === "on") {
        document.querySelector(`#${this.id}`).classList.value = "off";
        document.querySelector(`.${this.id}`).style.display = "none";
    } else if (document.querySelector(`#${this.id}`).classList.value === "off") {
        document.querySelector(`#${this.id}`).classList.value = "on";
        document.querySelector(`.${this.id}`).style.display = "block";
    } else {
        // not possible
    }
}

document.querySelectorAll("input").forEach((elem) => {
elem.addEventListener("click", toggle);
});     
