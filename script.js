document.querySelector('.form').addEventListener('submit', (e) => {
    let searchParam = document.getElementById("search_param").value
    getRedditImages(searchParam)
    document.querySelector('.form').reset()
    e.preventDefault()
    while(document.querySelector('.results').firstChild !== null) {
        document.querySelector('.results').lastChild.remove()
    }
})

const getRedditImages = async searchParam => {
    let response = await fetch(`http://www.reddit.com/search.json?q=${searchParam}+nsfw:no`)
    let data = await response.json()
    console.log(data)
    assignImages(data)
}

const assignImages = data => {
    const childrenArrays = data.data.children
    let postingSRC;
    let arr = []
    for(let item of childrenArrays) {
        if(item.data.thumbnail === "default" || item.data.thumbnail === "self") {
            continue
        } else {
            postingSRC = item.data.thumbnail
            arr.push(postingSRC)
        }
    }
    for(let item in arr) {
        const newDiv = document.createElement("div")
        const newImage = document.createElement("img")
        newDiv.append(newImage)
        newImage.src = arr[item]
        newDiv.classList.add("result_images")
        document.querySelector(".results").append(newDiv)
    }
}