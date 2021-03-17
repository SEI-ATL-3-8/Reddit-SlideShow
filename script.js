const display = document.querySelector('.description');
const searchInput = document.querySelector('input');
const goButton = document.querySelector('.button');
const pictureGrid = document.querySelector('.picgrid')
const StartOver = document.querySelector('.again')

// console.log(display);
// console.log(searchInput);
// console.log(goButton);



goButton.addEventListener('click', (e) => {
    e.preventDefault();
    clearContainer();
    hideDisplay();
    fetch('http://www.reddit.com/search.json?q=' + searchInput.value + "'").then((response) =>{
    response.json().then((data) =>{
        
        let pictureArray = []
        let theDamnUrl = null;
        for(key in data){
           let eachPost = data[key].children
            for(post in eachPost){
                let eachUrl = eachPost[post].data.url
                if(eachUrl.includes('jpg') || eachUrl.includes('jpeg')){
                   // console.log(eachUrl);
                    pictureArray.push(eachUrl)
                }  
            }
              
        }
        for(let x = 0; x<4;x++){
         const randNum = Math.floor(Math.random() * pictureArray.length)
           const newDiv = document.createElement('img')
            newDiv.src = pictureArray[randNum];
            newDiv.classList.add("pic")
            pictureGrid.append(newDiv)
       }
    })
    
})
})

let clearContainer = () =>{
    while (pictureGrid.firstChild){
        pictureGrid.removeChild(pictureGrid.lastChild)
        searchInput.value = null;
    }

}

let hideDisplay = () =>{
    display.classList.add('hide')
    StartOver.classList.remove('hide')
}

let resetIsh = () =>{
    display.classList.remove('hide');
    clearContainer()
}


StartOver.addEventListener('click', ()=>{ 
    resetIsh()
    StartOver.classList.add('hide')
})
