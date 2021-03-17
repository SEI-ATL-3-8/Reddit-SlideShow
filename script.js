let submitButton = document.querySelector('#submitButton')
let imageContainer = document.querySelector('.imageContainer')
let resetButton = document.querySelector('.reset')
let page1 = document.querySelector('.searchPage')

function clearSearchPage() {
    page1.classList.add('hidden')
    resetButton.classList.remove('hidden')
}
function addSearchPage() {
    page1.classList.remove('hidden')
    resetButton.classList.add('hidden')
    clearImages()
}
function clearImages() {
    while(imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.lastChild)
    }
}
resetButton.addEventListener('click', () => {
    addSearchPage()
})
submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clcik')
    let input = document.querySelector('#imageSearch')
    // console.log(input.value)
    getImage(input.value)
    clearSearchPage()
    // showImagePage()
})
let getImage = async (word) => {
    try { 
        let res = await fetch(`https://www.reddit.com/search.json?q=${word}&limit=100`)
        let response = await res.json()
        const results = response.data.children 
        // console.log(results)
        imageArr = []
        for (let i of results){
            // console.log(i.data.thumbnail)
            imageArr.push(i.data.thumbnail) 
            //creates an array of the images
        }
        // console.log(imageArr)
        filteredImage = imageArr.filter(image => image.includes('https'))
        images = filteredImage.slice(0,25)
        console.log(images)
        // console.log(filteredImage)
        // console.log(images[0])
        // let pic0 = document.createElement('img')
        // pic1.src = images[0]
        // imageContainer.append(pic0)
        for(let j = 0; j < 25; j++){
            let picAll = document.createElement('img')
            picAll.src = images[j]
            imageContainer.append(picAll)
        }
    } catch (error) {   
        
    }
}
// function imageloader()
    
