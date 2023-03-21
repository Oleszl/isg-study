const staticPage = document.querySelector(".static-page");
const dynamicPage = document.querySelector(".dynamic-page");
const movieWrapper = document.querySelector(".movie-wrapper");

window.addEventListener("popstate", (event) => {
  let path = window.location.hash;
  const params = new URLSearchParams(window.location.search);
  const idParam = params.get("id");
  path = path.split("?")[0];
  console.log(event);
  switch (path) {
    case "#/preview":
      showMovieInfo(idParam);
      break;
    case "#/edit":
      editMovieInfo(idParam);
      break;
    case "#/add":
      addMovieInfo();
      break;
  }
});

renderButton();
const filmsList = localStorage.getItem("content")
  ? JSON.parse(localStorage.getItem("content"))
  : [...films];

function showMovies() {
  for (let movie of filmsList) {
    movieWrapper.append(addMovie(movie));
  }
}
showMovies();

function renderButton() {
  staticPage.insertAdjacentHTML(
    "beforeend",
    `<Button class="movie__btn-add">Add new Film</Button>
     `
  );
}

const addButton = document.querySelector(".movie__btn-add");
addButton.addEventListener("click", (e) => {
  e.preventDefault();
  dynamicPage.innerHTML = "";
  const id = Date.now().toString();
  addMovieInfo(id);
  history.pushState({ id }, "movie", "#add");
});

function addMovie(movie) {
  const movieItem = document.createElement("div");
  movieItem.classList.add("movie__item");

  const movieTitle = document.createElement("h1");
  movieTitle.innerText = movie.title;
  movieTitle.classList.add("movie__title");
  movieTitle.setAttribute("id", movie.id);
  movieTitle.addEventListener("click", (e) => {
    e.preventDefault();
    dynamicPage.innerHTML = "";
    const id = e.target.getAttribute("id");
    showMovieInfo(id);
    history.pushState({ id }, `?id=${id}#preview`);
  });

  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  editBtn.classList.add("movie__btn");
  editBtn.setAttribute("id", movie.id);
  editBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("id");
    editMovieInfo(id);
    history.pushState({ id }, `?id=${id}#edit`);
  });

  movieItem.append(movieTitle, editBtn);
  return movieItem;
}

function editMovieInfo(id) {
  dynamicPage.innerHTML = "";

  const selectedMovie = filmsList.filter((el) => el.id === id)[0];

  const wrapper = document.createElement("div");
  wrapper.classList.add("edit-form");
  wrapper.insertAdjacentHTML(
    "beforeend",
    `
    <div >Movie title: <input type="text" class="movie-title"/></div>
    <div>Movie genge: <input type="text" class="movie-genre"/></div>
     <div>Movie image: <input type="text" class="movie-image"/></div>
    <div>Movie plot: <textarea class="movie-plot" rows="12"></textarea></div>
     `
  );
  dynamicPage.append(wrapper);
  const movieTitle = document.querySelector(".movie-title");
  movieTitle.value = selectedMovie.title;

  const movieGenre = document.querySelector(".movie-genre");
  movieGenre.value = selectedMovie.genre;
  const movieImage = document.querySelector(".movie-image");
  movieImage.value = selectedMovie.imageUrl;
  const moviePlot = document.querySelector(".movie-plot");
  moviePlot.value = selectedMovie.plot;

  wrapper.insertAdjacentHTML(
    "beforeend",
    `<button class='edit-form__btn-save'>
      Save Movie
      </button>`
  );
  const saveButton = document.querySelector(".edit-form__btn-save");

  saveButton.addEventListener("click", (e) => {
    e.preventDefault();
    selectedMovie.title = movieTitle.value;
    selectedMovie.genre = movieGenre.value;
    selectedMovie.imageUrl = movieImage.value;
    selectedMovie.plot = moviePlot.value;

    clearContent();
    localStorage.setItem("content", JSON.stringify(filmsList));
    showMovies();
    showMovieInfo(id);
  });

  wrapper.insertAdjacentHTML(
    "beforeend",
    `<button class='edit-form__btn-cancel'>
    Cancel
      </button>`
  );
  const cancelButton = document.querySelector(".edit-form__btn-cancel");
  cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
  });

  dynamicPage.innerHTML = "";
  dynamicPage.append(wrapper);
}

function showMovieInfo(id) {
  dynamicPage.innerHTML = "";
  const selectedMovie = filmsList.filter((el) => el.id === id)[0];

  const wrapper = document.createElement("div");
  wrapper.classList.add("movie");
  wrapper.insertAdjacentHTML(
    "beforeend",
    `
    Movie title: <h2 class="movie-info__title">${selectedMovie.title}</h2>
    Movie genge: <p class="movie-info__genre">${selectedMovie.genre}</p>
     Movie image: <img class="movie-info__img" src="${selectedMovie.imageUrl}"/>
    Movie plot: <p class="movie-info__plot">${selectedMovie.plot}</p>
     `
  );
  dynamicPage.innerHTML = "";
  dynamicPage.append(wrapper);
}

function addMovieInfo(id) {
  staticPage.innerHTML = "";
  const wrapper = document.createElement("div");
  wrapper.classList.add("add-form");
  wrapper.insertAdjacentHTML(
    "beforeend",
    `
    <div >Movie title: <input type="text" class="movie-title"/></div>
    <div>Movie genge: <input type="text" class="movie-genre"/></div>
     <div>Movie image: <input type="text" class="movie-image"/></div>
    <div>Movie plot: <textarea class="movie-plot" rows="12"></textarea></div>
     `
  );
  dynamicPage.append(wrapper);
  const movieTitle = document.querySelector(".movie-title");
  const movieGenre = document.querySelector(".movie-genre");
  const movieImage = document.querySelector(".movie-image");
  const moviePlot = document.querySelector(".movie-plot");
  wrapper.insertAdjacentHTML(
    "beforeend",
    `<button class='add-form__btn-save'>
      Save Movie
      </button>`
  );
  const saveButton = document.querySelector(".add-form__btn-save");

  saveButton.addEventListener("click", (e) => {
    e.preventDefault();
    const newMovie = {
      id,
      title: movieTitle.value ? movieTitle.value : "unknown",
      genre: movieGenre.value ? movieGenre.value : "unknown",
      imageUrl: movieImage.value ? movieImage.value : "unknown",
      plot: moviePlot.value ? moviePlot.value : "unknown",
    };
    filmsList.push(newMovie);
    clearContent();
    localStorage.setItem("content", JSON.stringify(filmsList));
    showMovies();
    showMovieInfo(id);
  });

  wrapper.insertAdjacentHTML(
    "beforeend",
    `<button class='add-form__btn-cancel'>
    Cancel
      </button>`
  );
  const cancelButton = document.querySelector(".add-form__btn-cancel");

  cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
  });

  dynamicPage.innerHTML = "";
  dynamicPage.append(wrapper);
}

function clearContent() {
  movieWrapper.innerHTML = "";
  staticPage.innerHTML = "";
  dynamicPage.innerHTML = "";
  staticPage.append(movieWrapper, addButton);
}
