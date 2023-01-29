const loadNewsData = categoryId => {
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayLoadedNewsData(data.data))
        .catch(error => console.log(error))
}


const displayLoadedNewsData = loadedNews => {
    const displayLoadedNews = document.getElementById('display-loaded-news');
    displayLoadedNews.textContent = ``;
    loadedNews.forEach(news => {
        const displayNewsDiv = document.createElement('div');
        displayNewsDiv.classList.add('card');
        displayNewsDiv.innerHTML = `
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${news.title}</h5>
                      <p class="card-text">${news.details}</p>
                    </div>
                  </div>
                </div>
    `;
        displayLoadedNews.appendChild(displayNewsDiv);
    })

}



