console.log('hello from app.js')

const form = document.querySelector('form')
const btn = document.querySelector('button')
const resultsDiv = document.querySelector('.resultsDiv')
const cells = document.querySelectorAll('.cell')

form.addEventListener('submit', (e) => {
    const data = new FormData(form)
    let output = []
    for(let entry of data){
        output.push(entry[1])
    }
    // console.log(output)
    fetchData(output[0], output[1])
    form.classList.toggle('hidden')
    e.preventDefault()
})

async function fetchData(txt, safety) {
    console.log('fetching data...', txt, safety)
    let filter = '+nsfw:no'
    if(safety === 'yes'){filter = ''}
    try {
        const req = await fetch(`http://www.reddit.com/search.json?q=r/${txt}${filter}&limit=100&sort=top`)
        const res = await req.json()
        const dataArr = res.data.children
        // console.log(dataArr)
        resultsDiv.classList.toggle('hidden')
        const filteredArr = dataArr.filter(i => i.data.thumbnail.includes('jpg'))
        // console.log(filteredArr)
        buildImg(filteredArr)
    } catch (error) {
        console.log(error)
    }
}

function buildImg(arr) {
    clearCellImg()
    for(let i = 0; i <= 23; i++){
        const img = arr[i].data.thumbnail
        const imgEl = document.createElement('img')
        imgEl.classList.add('fadein')
        imgEl.setAttribute('src', img)
        cells[i].appendChild(imgEl)
    }
    // not sure why this crashes the page
    // let i = 0
    // for(let cell of cells) {
    //     console.log(cell, i)
    //     while(i <= 23) {
    //         const img = arr[i].data.thumbnail
    //         const imgEl = document.createElement('img')
    //         imgEl.classList.add('fadein')
    //         imgEl.setAttribute('src', img)
    //         cell.appendChild(imgEl)
    //     }
    //     i++
    // }
    delayImgLoad()
}

function delayImgLoad() {
    timeout = 0
    for(let j = 0; j <= 23; j++) {
        setTimeout(() => {
            cells[j].classList.remove('hidden')
        }, timeout)
        timeout += 180
    }
    
}

function clearCellImg() {
    for(let cell of cells) {
        while(cell.firstChild){
            cell.removeChild(cell.firstChild)
        }
        cell.classList.add('hidden')
    }
}

resultsDiv.addEventListener('click', (e) => {
    // console.log('you clicked me!', e.target)
    if(e.target === resultsDiv) {
        form.classList.toggle('hidden')
        resultsDiv.classList.toggle('hidden')
        e.preventDefault()
    }
})



