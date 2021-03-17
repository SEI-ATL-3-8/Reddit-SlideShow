console.log("one does not simply walk into mordor")

let submitBtn = document.querySelector('#submitBtn')
let outputGrid = document.querySelector('.outputBox')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let searchReddit = document.querySelector('#wordSearch')
    getReddit(searchReddit.value)
})


let getReddit = async (keyword) => {
    try {
        let response = await fetch(`https://www.reddit.com/search.json?q=${keyword}+nsfw:no`)
        let result = await response.json()
        
        let childrenArray = result.data.children
        console.log(childrenArray)
        //console.log(childrenArray[0].data)
        //console.log(childrenArray[0].data.url)

        for ( let i = 0; i < childrenArray.length; i++) {
            const dataURL = childrenArray[i].data.url
            console.log(dataURL)
            const filetypeURL = dataURL.split('.').pop()
            
            if( filetypeURL == "jpg" || filetypeURL == "gif" || filetypeURL == "png") {
                clearContainer()
                populateImg(childrenArray[i].data.url)
            }
        
        }    

        } catch (error) {
        
    }
}

let populateImg = (image) => {
    let poppedImg = document.createElement('img')
    poppedImg.src = `${image}`
    outputGrid.append(poppedImg)
    console.log(gridImage)

}

let clearContainer = () => {
    while(outputGrid.firstChild) {
        outputGrid.removeChild(outputGrid.lastChild)
    }
}