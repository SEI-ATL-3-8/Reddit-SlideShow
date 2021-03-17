// console.log('hi')
let catButton = document.querySelector('#catButton')
let searchBar = document.querySelector('#searchBar')
let catBox = document.querySelector('#catContainer')
// console.log(searchBar)
// function hideFunction () {
//     let x = document.querySelector("#catContainer")
//     if (x.style.display === "none") {
//         x.style.display ="block"
//     } else {
//         x.style.display ="none"
//     }
// }
// hideFunction()
catButton.addEventListener('click', (e)=>{
    e.preventDefault()
    // console.log("hello from submit")
    let input =document.querySelector("#searchBar")
    // console.log(input.value)
    getData(input.value)
})


let getData = async (key)=> {
    let req = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
    let res = await req.json()
    let result = res.data.children
    // console.log(result)
    let catArray =[]
    for(let resul of result){
        catArray.push(resul.data.thumbnail)
        // console.log(catArray)
    }
    catImg = catArray.filter(image => image.includes('jpg' || "png" || 'gif'))
         
    for(let i = 0; i < catArray.length; i++){
        let catImgAll = document.createElement('img')
        catImgAll.src= catImg[i]
        catContainer.append(catImgAll)
    
    
}

}
let clearContainer =() => {
    while(catContainer.firstChild) {
        catContainer.removeChild(catContainer.lastChild)

    }
}