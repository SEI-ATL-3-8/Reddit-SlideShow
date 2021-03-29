document.querySelector('#start-show').addEventListener('click', async() =>{
const userInput = document.querySelector('#user-input').value
    
const fetchUrl = `http://www.reddit.com/search.json?q=${userInput}+nsfw:no`

const response = await fetch(fetchUrl);
const data = await response.json();
const children = data.data.children;


// for (child of children){
//     console.log(child.data.thumbnail)
// }

// const childrenWithImgs = children.filter((child) =>{

//     return child.data.thumbnail !== 'self'


// }) 

const childrenWithImgs = []

children.forEach((child) => {
    if(child.data.thumbnail ==! 'self')
    {
        childrenWithImgs.push()
    }
    
});

// const justThumbnails = childrenWithImgs.map ((child) => {
// return child.data.thumbnail


// })

const justThumbnails = []

childrenWithImgs.forEach((child) =>{
    justThumbnails.push(child.data.thumbnail)
})


let imgCounter = 0

setInterval(() => {
    document.querySelector('#slideshow-img').src = justThumbnails[imgCounter]

    imgCounter++
}, 2000)


console.log(justThumbnails)

})