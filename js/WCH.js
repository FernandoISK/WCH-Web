const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    topbar = body.querySelector(".top-navbar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwtch = body.querySelector(".toggle-switch"),
    modelText = body.querySelector(".mode-text");

toggle.onclick = function () {
    sidebar.classList.toggle("close");
    topbar.classList.toggle("close");

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
