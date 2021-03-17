const inputSearch = document.querySelector('input[type=text]');
const grid = document.querySelector('.grid');
const searchArea = document.querySelector('.search-area');
const nextSearch = document.querySelector('.next');


const fetchData = async (query) => {
    const response = await fetch(`https://www.reddit.com/search.json?q=${query}+nsfw:no`);
    const data = await response.json();
    const cats = data.data.children;

    const filteredThumbnails = cats.filter(cat => {
        return checkImageUrl(cat.data.thumbnail)
    }).map(cat => {
        return cat.data.thumbnail;
    });

    displayGrid(filteredThumbnails);
}


const displayGrid = thumbnails => {
    hideElement(searchArea);
    clearGrid();
    for (let thumbnail of thumbnails) {
        const image = document.createElement('img');
        image.src = thumbnail;
        const gridIdem = document.createElement('div');
        gridIdem.classList.add('grid-item');
        gridIdem.append(image);
        grid.append(gridIdem);
    }
    showElement(nextSearch);
}

const hideElement = (element) => {
    element.classList.add('hide');
}

const showElement = (element) => {
    element.classList.remove('hide');
}

const clearGrid = () => {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}
const checkImageUrl = url => {
    return url.match(/[\/.](jpg|jpeg|png)$/i) !== null;
}


document.querySelector('#search').addEventListener('click', event => {
    event.preventDefault();
    fetchData(inputSearch.value);
});

nextSearch.addEventListener('click', () => {
    showElement(searchArea);
    clearGrid();
    hideElement(nextSearch);
})