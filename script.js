// Dom Elements
const searchForm = document.getElementById('search-bar');
const searchContent = document.getElementById('search-content');
const loader = document.getElementById('loader');
const messageBox = document.getElementById('message-box');
const itemsContainer = document.querySelector('.items-container');
const buttonsContainer = document.querySelector('.buttons-container');
const buttonStop = document.getElementById('button-stop');
const buttonBack = document.getElementById('button-back');



const checkImageUrl = url => {
    return url.match(/[\/.](jpg|jpeg|png)$/i) !== null;
}


const getData = async searchField => {
    try {
        const response = await fetch(`https://www.reddit.com/search.json?q=${searchField}+nsfw:no&limit=300`);
        const dataObj = await response.json();
        const dataImageArray = dataObj.data.children.filter(({data}) => checkImageUrl(data.thumbnail)).map(({data}) => data.thumbnail);
        
        // Hide and show relevant sections
        loader.classList.add('hide');
        itemsContainer.classList.remove('hide');
        buttonsContainer.classList.remove('hide');

        if (!dataImageArray.length) throw new Error(`No Images from "${searchField}"`);

        populateGrid(dataImageArray);
    }

    catch(error) {
        if (searchForm.classList.contains('hide')){ 
            searchForm.classList.remove('hide');
            buttonsContainer.classList.add('hide');
        };


        showError(error.message);
    }
}


const showError = (message) => {
    messageBox.classList.remove('hide');
    messageBox.innerText = message;

    setTimeout(() => {
        messageBox.classList.add('hide');
        messageBox.innerText = '';
    },2000);
}


const clearGrid = () => {
    searchContent.innerHTML = "";
}

const stopHandler = (timer,event) => {
    clearInterval(timer);

    buttonStop.removeEventListener('click',stopHandler);
    buttonBack.removeEventListener('click',backHandler);
}

const backHandler = (timer,event) => {

    clearInterval(timer);
    clearGrid();
    
    itemsContainer.classList.add('hide');
    buttonsContainer.classList.add('hide');
    searchForm.classList.remove('hide');

    buttonStop.removeEventListener('click',stopHandler);
    buttonBack.removeEventListener('click',backHandler);
}


const populateGrid = (array) => {
    let index = 0;
    let counter = 0;

    const timer = setInterval(() => {
        
        if (counter === 25) {
            clearGrid();
            counter = 0;
        }
        if (index >= array.length - 1) clearInterval(timer);
        const picDiv = createPicture(array[index]);
        searchContent.append(picDiv);
        index++;
        counter++;
    },500);


    buttonStop.addEventListener('click',event => stopHandler(timer,event));
    buttonBack.addEventListener('click',event => backHandler(timer,event));
}



const createPicture= imageUrl => {
    const pictureContainer = document.createElement('div');
    const img = document.createElement('img');
    img.src = imageUrl;

    pictureContainer.append(img);
    pictureContainer.classList.add('picture-grid');

    return pictureContainer;
}

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.target.elements[0].value) {
        loader.classList.remove('hide');
        searchForm.classList.add('hide');
        getData(event.target.elements[0].value);
    }

    else {
        showError('Search Field cannot be Blank!!');
    }
})
