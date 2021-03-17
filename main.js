console.log('we gucci')

let submitButton = document.querySelector('#submitButton')
let imgContainer = document.querySelector('#imgContainer')
let imgSrcArray = []

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    getData()
})

let getData = async () => {
    try {
        let req = await fetch(`http://www.reddit.com/search.json?q=astrophotography+nsfw:no`)
        let res = await req.json()

        // console.log(res)
        let urlArr = []

        for (i=0; i < 25; i++) {
            urlArr[i] = res.data.children[i].data.url
            console.log(i)
            console.log(res.data.children[i].data.url)

            let skyGrid = document.createElement("div")
            skyGrid.classList.add('grid-square')
            gridId = ('grid' + i)
            skyGrid.setAttribute('id', gridId)
            imgContainer.append(skyGrid)

            let skyImg = document.createElement("img")
            skyImg.classList.add('sky-img')
            skyImg.src = urlArr[i]
            document.querySelector('#' + gridId).append(skyImg)



            // console.log(imgSrcArray)
        }

        // console.log(urlArr)
        // console.log(imgSrcArray)

        

    } catch (error) {
        // clearContainer()
        let errorP = document.createElement('p')
        errorP.innerText = 'No Results!'
        imgContainer.append(errorP)
    }
}

getData()