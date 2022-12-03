addEventListener("DOMContentLoaded", function () {
    start();
})

function interact (id) {
    if(document.getElementById(id).innerHTML.length > 5) {
        if(localStorage.getItem("box") != undefined) {
            if(document.getElementById(localStorage.getItem("box")).classList.contains("selected")) {
                document.getElementById(localStorage.getItem("box")).classList.remove("selected")
            }
            
        }
        localStorage.setItem("box", id)
        
        document.getElementById(id).classList.add("selected")
    }
    

}