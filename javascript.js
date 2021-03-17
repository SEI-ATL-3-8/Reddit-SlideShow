
let searchButton = document.querySelector('#searchButton')
let infoContainer = document.querySelector('#infoContainer')
console.log(searchButton)

searchButton.addEventListener("click", (e) => {
    e.preventDefault()
    console.log('hello from button')
    let input = document.querySelector('#infoContainer')
    console.log(input.value)
    getData(infoSearch.value)
})

let getData = async (keyword) => {
    let response = await fetch(`http://www.reddit.com/search.json?q=${keyword}+nsfw:no`)
    let result = await response.json()
    
    let searchArray = result.data.children
    // console.log(searchArray)
    
    for (let i=0; i<searchArray.length; i++) {
        const dataURL = searchArray[i].data.url
        console.log(dataURL)
        const fileURL = dataURL.split('.').pop()

        if(fileURL == "jpg" || fileURL == "png" || fileURL == "gif") {
            clearContainer()
            showImg(searchArray[i].data.url)
        }
    }
      let showImg = document.createElement('img')
    showImg.src = `${image}`
    infoContainer.append(showImg)
    
    console.log(img)

    }
    let clearContainer = () => {
        while(infoContainer.firstChild) {
            infoContainer.removeChild(infoContainer.lastChild)
        }
    } 

  

