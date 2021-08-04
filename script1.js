let taskbar = document.getElementsByClassName("taskbar")[0]
let searchbar = document.getElementsByClassName("searchbar")[0]

taskbar.addEventListener("click", () => {
    console.log("clicked")
    if (searchbar.style.bottom == "50px") {
        searchbar.style.bottom = "-655px"

    } else {
        searchbar.style.bottom = "50px"
    }
})