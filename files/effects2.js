var modal02 = document.getElementById("modal2");

var img = document.getElementById("img2");
var modalImg = document.getElementById("img02");
var capt = document.getElementById("caption2");
img.onclick = function()
{
    modal02.style.display = "block";
    modalImg.src = this.src;
    var like = document.getElementById("like2");
    capt.src = like.src;
}

var span = document.getElementsByClassName("close2")[0];
span.onclick = function()
{
    modal02.style.display = "none";
}