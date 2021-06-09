var modal01 = document.getElementById("modal1");

var image = document.getElementById("img1");
var modalImage = document.getElementById("img01");
var cap = document.getElementById("caption1");
image.onclick = function()
{
    modal01.style.display = "block";
    modalImage.src = this.src;
    var like = document.getElementById("like1");
    cap.src = like.src;
}

var span = document.getElementsByClassName("close1")[0];
span.onclick = function() 
{ 
    modal01.style.display = "none";
}