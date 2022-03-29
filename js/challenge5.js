function updatePhoto(info){
    console.log("I need to update the backgroudn image")
    display = document.querySelector("#display")
    console.log(info.alt)
    console.log(info.src)
    display.innerHTML = info.alt;
    display.style.backgroundImage = "url('"+ info.src +"')"
}





function removePhoto(){
    console.log("I need to update the backgroudn image")
    display = document.querySelector("#display")
    display.style.backgroundImage = ""
    display.innerHTML = "Hover over an image below to display the image and the alt text."
}