var moviecontainer = document.getElementById("movies")
var search = document.getElementById("search")
var movielist = moviecontainer.querySelectorAll("div")

search.addEventListener("keyup",function() {
    var enteredvalue = event.target.value.toUpperCase()

    for(count=0;count<movielist.length;count=count+1) {
        var moviename = movielist[count].querySelector("p").textContent

        if(moviename.toUpperCase().indexOf(enteredvalue)<0) {
            movielist[count].style.display = "none"
        } else {
            movielist[count].style.display = "block"
        }
    }
})