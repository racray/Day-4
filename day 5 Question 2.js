//////////////////// WEBSITE NOT OPENING /////////////////
var countries = () => {
    var xhr = new XMLHttpRequest;
    xhr.open("GET","https://restcountries.eu/rest/v2/all");
    xhr.responseType = "json";
    xhr.onload = () =>{
        const obj = xhr.response;
        for(let blog of obj){
            console.log(blog.flag);
        }
    }
    xhr.send();
 
}
 
countries();