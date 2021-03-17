
console.log("Script connected")
document.getElementById("form1").addEventListener('submit', functSubmit);
let lastTotal = 0


function functSubmit(event) {
    var msg = document.getElementById("input1").value;
    document.getElementById('box').classList.add("hidden");
    document.getElementById('gallery').classList.remove("hidden");
    getData(msg)

  }

const displayImg = (array ) => {
    console.log("Display")
    for(let i = lastTotal;  i<lastTotal + 25; i++){
        const redditImage = document.createElement('img')
        redditImage.src = array[i]
                
        document.querySelector('section').append(redditImage)
    } 
        
  }


getData = async (keyword) =>{

    try {  
        let res = await fetch('https://www.reddit.com/search.json?limit=10000&q=' + keyword);
        let myData = await res.json()
        let postArray = myData.data.children
        let pictureArray = []
        i = 0;


        let imgData = postArray.filter((post) => {
            
            console.log(i);
            if(post.data.thumbnail != "self" && post.data.thumbnail != "default" && post.data.thumbnail != 'image' && post.data.thumbnail != "spoiler" && post.data.thumbnail != "nsfw"){
                pictureArray.push(post.data.thumbnail)
                return true
            } else {
                return false
            }
            
        })
        console.log(imgData)
        console.log(pictureArray)
        let funct = displayImg(pictureArray)
        setInterval(funct, 6000)


        
    } catch (error) {
        console.log(error.message);
    }
}
