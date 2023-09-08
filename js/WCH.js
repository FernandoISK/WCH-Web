const body = document.querySelector("body"),
    userContent = document.querySelector(".user-content"),
    userDropdown = document.querySelector(".dropdown-user"),
    userToggle = document.querySelector(".toggle-user"),
    sidebar = body.querySelector(".sidebar"),
    topbar = body.querySelector(".top-navbar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwtch = body.querySelector(".toggle-switch"),
    modelText = body.querySelector(".mode-text");

toggle.onclick = function () {
    sidebar.classList.toggle("close");


}

modeSwtch.onclick = function () {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modelText.innerHTML = "Light Mode";
    }
    else {
        modelText.innerHTML = "Dark Mode";
    }
}

userContent.onclick = () => {
    userDropdown.classList.toggle("collapse-all");
    userToggle.classList.toggle("active-collapse");
};