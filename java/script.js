function verander1 (){
    document.getElementById("ikzelf2").style.display="none";
    document.getElementById("paard1").style.display="block";

}
function verander2(){
    document.getElementById("paard1").style.display="none";
    document.getElementById("paard2").style.display="block";

}

function verander3(){
    document.getElementById("paard2").style.display="none";
    document.getElementById("ikzelf2").style.display="block";
}

function displayLike() {
    document.getElementById("like").style.backgroundColor = "green";
    document.getElementById("dislike").style.backgroundColor = "grey";
    
}

function displayDislike() {
    document.getElementById("like").style.backgroundColor = "grey";
    document.getElementById("dislike").style.backgroundColor = "red";
    
}

datum = new Date()
document.getElementById("vandaag").innerHTML = datum.getDate() + "-" + (datum.getMonth()+1)
+ "-" + datum.getFullYear();