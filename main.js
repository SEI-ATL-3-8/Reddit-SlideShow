

console.log('test')
document.getElementById('submitButton').addEventListener('click', (e) => {
    e.preventDefault()
    console.log(document.getElementById('pictureSearch').value)
    let searchTerm = document.getElementById('pictureSearch').value
    fetch('http://www.reddit.com/search.json?q=' + searchTerm + '+nsfw:no&limit=100')
    .then(response => response.json())
    .then(data => 

    makePictureGrid(getUrls(data)))
    

})
    
function getUrls(data){
    let pictureUrls = [];
    //console.log("getUrls called.")

    for(object of data.data.children){//iterate through all the objects
        let urlString = String(object.data.url); //get the url and make it a string
        //console.log(urlString);
        let endOfUrl = urlString.slice(urlString.length-4,  urlString.length);//the last four characters of the string could be .jpg or .png or neither
        //console.log("endOfUrl");
        //console.log(endOfUrl)
        if (pictureUrls.length == 25){//we only want to fill up our arrray with 25 picture links
            break;
        }else if (urlString != undefined){//if there is a url
            if(endOfUrl == '.png' | endOfUrl == '.jpg'){//if the end of the url indicates it is a picture
                pictureUrls.push(urlString);//add that picture link to our array
            }
        }
    }

return pictureUrls;

}

function makePictureGrid(urlArray){
    for (i=0; i<25; i++){
        document.getElementById(String(i+1)).src = urlArray[i];
        document.getElementById(String(i+1)).style.display = "block";
    }
}