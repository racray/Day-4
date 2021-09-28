var countries = () => {
    var xhr = new XMLHttpRequest;
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
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
