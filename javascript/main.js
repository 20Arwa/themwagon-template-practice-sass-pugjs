

// Start nav
let listIcon = document.querySelector("header nav .container .list-icon");
listIcon.addEventListener("click", function(){
    document.querySelector("header nav").classList.toggle("nav-list-display");
    // document.querySelector("header nav").style.height = "400px";
    document.querySelector("header nav .container .pages-links").classList.toggle("ul-list-display");
})
// End nav

// Start Landing Rent Car (Slider)
let AllrentContents = document.querySelectorAll(".landing .rent .box");
let nextRent = document.querySelector(".landing .container .move-rents .arrow-right");
let prevRent = document.querySelector(".landing .container .move-rents .arrow-left");
// Change Slider Every 2 Seconds
let intervalRent = setInterval(() => {sliderToNext(AllrentContents)}, 3000)
// Change To Next Rent On Click
nextRent.addEventListener("click", () => {clearInterval(intervalRent);sliderToNext(AllrentContents);})
// Change To Previous Rent On Click
prevRent.addEventListener("click", () => {clearInterval(intervalRent); sliderToPrev(AllrentContents)})
// End Landing Rent Car (Slider)

// Start Searsh Car Section
let searshSelectBox = document.querySelectorAll(".search-car form .select .layer");
let searshAllOptions = document.querySelectorAll(".search-car form .select ul li:not(.option-name)");
// When Click On Select Box
searshSelectBox.forEach(function(box) {
    box.addEventListener("click", () => {box.parentElement.classList.toggle("select-active")})
})
// Disappear Seelct Box On Click Any Where Exept The Box
window.onclick = (element) => {
    searshSelectBox.forEach((box) => {
            if (element.target != box) {box.parentElement.classList.remove("select-active")}
        })
}
// When Select A Choise
searshAllOptions.forEach(function(option){
    // Remove First Option Background
    option.onmouseover = () => {option.parentElement.getElementsByClassName("option-name")[0].style.backgroundColor = "white"}
    option.addEventListener("click", () => {
        // Remove Focue From Option Name
        option.parentElement.getElementsByClassName("option-name")[0].classList.add("disabled")
        // Remove Focus From All
        searshAllOptions.forEach((option) => option.classList.remove("option-focus"))
        // Add To Clicked One
        option.classList.add("option-focus");
        // Change P Content To Choosen Option
        option.parentElement.parentElement.getElementsByTagName("p")[0].innerHTML = option.innerHTML;
    })
})

// End Searsh Car Section
// Start Clietns Section (Slider)
let AllClientsContents = document.querySelectorAll(".clients .contents-container .content");
let nextClient = document.querySelector(".clients .arrows .arrow-right");
let prevClient = document.querySelector(".clients .arrows .arrow-left");
// Change Slider Every 2 Seconds
let intervalCleint = setInterval(() => {sliderToNext(AllClientsContents)}, 3000)
// Change To Next Rent On Click
nextClient.addEventListener("click", () => {clearInterval(intervalCleint);sliderToNext(AllClientsContents)})
// Change To Previous Rent On Click
prevClient.addEventListener("click", () => {clearInterval(intervalCleint); sliderToPrev(AllClientsContents)})
// End Clietns Section (Slider)





// Sleder Functions
function sliderToPrev(AllContents) {
    for (var i = 0; i < AllContents.length; i++) {
        if (AllContents[i].classList.contains("current-to-next") || AllContents[i].classList.contains("current-to-prev")) {
            // Remove Previuse States (If Next Button Was Pressed)
            AllContents[i].classList.remove("current-to-next");
            AllContents[i].classList.remove("dissapear-to-next");
            // Current Content
            AllContents[i].classList.add("dissapear-to-prev");
            AllContents[i].classList.remove("current-to-prev");
            if (i != 0) {
                AllContents[i-1].classList.add("current-to-prev");
                break;
            }
            else {
                AllContents[AllContents.length - 1].classList.add("current-to-prev");
                break;
            }
        }
    }
}
// Slider To Next 
function sliderToNext(AllContents) {
    for (var i = 0; i < AllContents.length; i++) {
        if (AllContents[i].classList.contains("current-to-next") || AllContents[i].classList.contains("current-to-prev")) {
            // Remove Previuse States (If Previous Button Was Pressed)
            AllContents[i].classList.remove("current-to-prev");
            AllContents[i].classList.remove("dissapear-to-prev");
            // Current Content
            AllContents[i].classList.add("dissapear-to-next")
            AllContents[i].classList.remove("current-to-next");
            if (i != AllContents.length -1) {
                AllContents[i + 1].classList.add("current-to-next");
                break;
            }
            else {
                AllContents[0].classList.add("current-to-next");
                break;
            }
        }
    }
}
// End Slider Functions



