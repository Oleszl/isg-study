const loader = document.querySelector(".loader");
const input = document.querySelector(".header__input");
const main = document.querySelector(".main");
const wrapper = document.querySelector(".repo-wrapper");
const BASE_URL = "https://api.github.com/users";

const getGitHubRepositoriesInfo = async (username) => {
  try {
    loader.style.display = "inline-block";
    const response = await fetch(`${BASE_URL}/${username}/repos`);
    return response.json();
  } catch (error) {
    console.log(error.message);
  } finally {
    loader.style.display = "none";
  }
};
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    clearData();
    document.querySelector(".header__btn-search").click();
    username = input.value;
    getGitHubRepositoriesInfo(username)
      .then((data) => {
        getGeneralInfo(data);
      })
      .catch((err) => console.log(err));
  }
});

function getGeneralInfo(userInfo) {
  const avatarUrl = userInfo[0].owner.avatar_url;
  const username = userInfo[0].owner.login;

  const data = userInfo.map((element) => ({
    repoName: element.name,
    languale: element.language,
    description: element.description,
    avatarUrl,
    username,
  }));
  addUserInfo(data);
  addRepositoriesInfo(data);
}

function addUserInfo(data) {
  const wrapper = document.createElement("div");
  wrapper.classList = "header__wrapper";
  wrapper.insertAdjacentHTML(
    "beforeend",
    `<div class="header__item">
    <img class='user-photo' src=${data[0].avatarUrl}> </img>
    </div>`
  );
  wrapper.insertAdjacentHTML(
    "beforeend",
    `<div class="header__item">
    <p class='repository-owner'>Repository Owner: ${data[0].username}</p>
    </div>`
  );

  document.querySelector(".header").appendChild(wrapper);
}

function addRepositoriesInfo(data) {
  const heading = document.createElement("h1");
  heading.innerText = `List of ${data[0].username} repositories`;
  main.appendChild(heading);
  renderRepositoriesItems(data);
}

function renderRepositoriesItems(data) {
  data.forEach((element) => {
    const repo = document.createElement("div");
    repo.classList = "repo";

    repo.insertAdjacentHTML(
      "beforeend",
      `<h2 class="repo__item">${element.repoName}</h2>`
    );

    repo.insertAdjacentHTML(
      "beforeend",
      `<p class='repo__item'>
      Language: <span>${element.languale || "Empty"}</span>
        </p>`
    );

    repo.insertAdjacentHTML(
      "beforeend",
      `<p class='repo__item'>
      Description: <span>${element.description || "Empty"}</span>
        </p>`
    );

    
    wrapper.appendChild(repo);
    main.appendChild(wrapper);
  });
  wrapper.insertAdjacentHTML(
    "beforeend",
    `<div class="repo repo-empty"></div>`
  );
}
function clearData() {
  main.innerHTML = "";
  wrapper.innerHTML = ""
  wrapper.classList = "repo-wrapper";
  main.appendChild(wrapper);
  const imgDiv = document.querySelector(".header__wrapper");
  if (imgDiv) {
    imgDiv.remove();
  }
}
