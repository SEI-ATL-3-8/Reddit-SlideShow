let submitButton = document.getElementById('load')

let getFrenchie = document.getElementsByClassName('frenchie')

let getReddit = async(keyword) => {
    try {
        let response = await fetch(`https://www.reddit.com/search.json?q=${keyword}+nsfw:no`)
        let result = await response.json()

        let childrenArray = result.data.children
        console.log(childrenArray)



        for (let i = 0; i < childrenArray.length; i++) {
            const dataURL = childrenArray[i].data.url
            console.log(dataURL)
            const filetypeURL = dataURL.split(" ").pop()

            if (filetypeURL == "jpg" || filetypeURL == "gif" || filetypeURL == "png") {
                clearContainer()
                showPic(childrenArray[i].data.url)
            }

        }

    } catch (error) {

    }
}

let showPic = (image) => {
    let poppedImg = document.createElement('img')
    poppedImg.src = `${image}`
    getfrenchie.append(poppedImg)
    console.log(gridImage)

}

let clearContainer = () => {
    while (getFrenchie.firstChild) {
        getFrenchie.removeChild(getFrenchie.lastChild)
    }
}