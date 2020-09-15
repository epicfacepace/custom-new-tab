window.onload = function() { 
    document.getElementById("searchBar").focus(); 
}

var input = document.getElementById("searchBar");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        search();
    }
});

function search() {
    window.open("https://www.google.com/search?q="+input.value.replace(new RegExp(' ',"g"),"\+"), "_self");
}
