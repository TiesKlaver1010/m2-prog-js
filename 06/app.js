


class App {
    runApplication() {
        const broski = document.getElementById("p")
        broski.addEventListener("click", (evt) => {
            broski.style.backgroundColor = "purple";
        })
        const uiFact = document.getElementById("Fact")
        uiFact.addEventListener("click", (evt) => {
            const textF = document.createElement("p")
            const FACTS = document.createTextNode("you are maidenless")
            textF.appendChild(FACTS)
            document.body.appendChild(textF)
            
        })
        const uiHeader = document.getElementById("Header")
        uiHeader.addEventListener("click", (evt) => {
            const textH = document.createElement("h1")
            const HEADER = document.createTextNode("No maidens???")
            textH.appendChild(HEADER)
            document.body.appendChild(textH)
            
        })
        const uiImage = document.getElementById("Image")
        uiImage.addEventListener("click", (evt) => {
            const img = new Image();
            img.src = "img/maidenless.jpg"
            document.body.appendChild(img)
        })
       
    }
}
let app = new App();
app.runApplication();