const reviewsContainer = document.querySelector('.reviews-container');

const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'magyk.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc: 'magnus_chase.jpg',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
        id: 3,
        title: 'The Last Kids on Earth: Zombie Parade',
        date: 'October 1, 2020',
        description: 'A thrilling new adventure for fans of the series where a group of kids battle zombies in a post-apocalyptic world.',
        imgSrc: 'zombie_parade.jpg',
        imgAlt: 'Book cover for The Last Kids on Earth: Zombie Parade',
        ages: '8-12',
        genre: 'Adventure',
        stars: '⭐⭐⭐⭐⭐'
    }
]

function generateArticles() {
    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.classList.add('book-review');

        articleElement.innerHTML = `
            <div class="book-details">
                <p><strong>Published:</strong> ${article.date}</p>
                <p><strong>Age Range:</strong> ${article.ages}</p>
                <p><strong>Genre:</strong> ${article.genre}</p>
                <p><strong>Rating:</strong> ${article.stars}</p>
            </div>
            <div class="book-content">
                <h2>${article.title}</h2>
                <img src="${article.imgSrc}" alt="${article.imgAlt}">
                <p class="book-description">${article.description} <a href="#">Read More...</a></p>
            </div>
        `;

        reviewsContainer.appendChild(articleElement);
    });
}

generateArticles();