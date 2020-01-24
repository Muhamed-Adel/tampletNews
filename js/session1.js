

var links = document.getElementsByClassName("nav-link");
var category = 'general';
var news;
var myLogo = document.getElementById("logo");



for(var i=0; i<links.length; i++)
{
    links[i].addEventListener("click" , function(e){
        category = e.target.innerHTML;
        getNews();
    })
}

getNews();
function getNews(){
var url = `https://newsapi.org/v2/top-headlines?country=eg&category=${category}&apiKey=7acaa045f9854c83b2faa068ea5d13db`;
var req = new XMLHttpRequest;
if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
} else {
    // code for old IE browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

req.open("GET" , url);
req.onreadystatechange = function(){
    if(req.readyState==4 && req.status==200)
    {
        news = JSON.parse(req.response);
        news = news.articles;
        displayRows();
    }
}
req.send();
}

function displayRows(){
    var terms = "";
    for(var i=0 ; i<news.length; i++)
    {
        terms+= `<div class="col-md-4 newsrow">
        <div class="mb-5 text-center ">
            <a  target="_blank" href="${news[i].url}"
            <div class="news drow">
            <img class="img-fluid " src="${news[i].urlToImage}">
            <h6 class="text-white m-auto pt-2">${news[i].title}</h6>
            </div>
            </a>
        </div>
    </div>`
    }
    document.getElementById("newsRow").innerHTML = terms;
}






myLogo.addEventListener("click" , function(){
    category = 'general';
    getNews();
})