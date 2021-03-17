const submitButton = document.querySelector('#submitButton')
submitButton.addEventListener('click', (e) =>{
    e.preventDefault()
    let input = document.querySelector('#userInput')
    getData(input.value)
    
})

let getData = async (value) =>{
    try {
       let response = await fetch(`http://www.reddit.com/search.json?q=${value}+nsfw:no`)
       let data = await response.json()
       let newArr = []

       newArr = data.data.children

       
       for (let i =0; i< 10; i++){
       const filteredArr = newArr.filter(i => i.data.thumbnail.includes('jpg'))
       console.log(filteredArr[i].data.thumbnail)

    //    let imgAut = document.createElement('h3')
    //    imgAut.innerText = "Author: " + filteredArr[i].data.author
    //    imageContainer.append(imgAut)

    //    let imgtil = document.createElement('p')
    //    imgtil.innerText = "title: " + filteredArr[i].data.title
    //    imageContainer.append(imgtil)
       //console.log(imgAut)
      
       let redditImg = document.createElement('img')
       redditImg.src = filteredArr[i].data.thumbnail
       imageContainer.append(redditImg)
     

    }

    } catch (error) {
        
    }
    clearPage()

}

let clearPage = () =>{
    while(bookContainer.firstChild){
        bookContainer.removeChild(bookContainer.lastChild)
    }

}