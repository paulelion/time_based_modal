// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 


// When the user clicks on <span> (x), close the modal
window.addEventListener("load", function(){
    setTimeout(function(){

    modal.classList.remove("hidden")
}, 2000)
    
})

span.onclick = function() {
    modal.classList.add("hidden")
}

