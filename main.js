let myImages = []
let submitButton = document.querySelector("#submitButton")
let input = document.querySelector('#searchInput')
let resetButton = document.querySelector('#resetButton')
let form = document.querySelector('form')
let photoGallery = document.querySelector('#photoGallery')
let directions = document.querySelector('#directions')

const getData =  async (query) => {
    try {
        let req = await fetch(`http://www.reddit.com/search.json?q=${query}+nsfw:no`)
        let res = await req.json()
        // console.log(res.data.children)
        let dataArray = res.data.children
        let allImages = dataArray.filter(i => i.data.thumbnail.includes('jpg'))
        allImages.map((image) => myImages.push(image.data.thumbnail))
        // console.log(myImages)
        createGallery(myImages)
    } catch (error) {
        console.log(error.message)
    }
   
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    getData(input.value)  
})

let createGallery = (imagesArray) => {
    imagesArray.map(imageLink => {
        let imgContainer = document.createElement('div')
        imgContainer.classList.add('imgContainer')
        let imgTag = document.createElement('img')
        imgTag.src = imageLink
        imgContainer.append(imgTag)
        photoGallery.append(imgContainer)
        // console.log(image)
    })
    form.classList.add('hide')
    resetButton.classList.remove('hide')
    directions.classList.add('hide')
}

resetButton.addEventListener("click", () => {
    clearGallery()
    form.classList.remove('hide')
    resetButton.classList.add('hide')
    directions.classList.remove('hide')

})

let clearGallery = () => {
    myImages = []
    while(photoGallery.firstChild) {
        photoGallery.removeChild(photoGallery.lastChild)
    }
}