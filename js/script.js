const loadNewsData = categoryId => {
    toggleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayLoadedNewsData(data.data))
        .catch(error => console.log(error))
}

const displayLoadedNewsData = loadedNews => {
    const totalNewsNumber = document.getElementById('total-news-number');
    totalNewsNumber.innerText = `${loadedNews.length} news available.`;
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
                    <div class="row gap-2 justify-content-center align-items-center">
                        <div class="col-lg-4 col-5">
                            <div class="row">
                                <div class="col-lg-3 p-3">
                                    <img class="author-image" src="${news.author.img}">
                                </div>
                                <div class="col-lg-5 px-0 pt-1 align-item-center">
                                    <p class="mb-0">${news.author.name}</p>
                                    <small class="text-secondary">${news.author.published_date}</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-3 d-flex justify-content-center align-items-center gap-1">
                            <i class="fa-solid fa-eye" style="font-size:15px;"></i>
                            <h6 class="mb-0">${news.total_view} M</h6>
                        </div>
                        <div class="col-lg-3 col-3 d-flex justify-content-center align-items-center gap-1">
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                    </div>
                  </div>
                </div>
    `;
        displayLoadedNews.appendChild(displayNewsDiv);
    })
    toggleSpinner(false);
}


const toggleSpinner = isLoading => {
    const loader = document.getElementById('spinner');
    if(isLoading) {
        loader.classList.remove('d-none');
    }else{
        loader.classList.add('d-none');
    }
}