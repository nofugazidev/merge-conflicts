const writeIcon = document.getElementById("write");
const postModal = document.getElementById("new-post-modal");
const profileIcon = document.getElementById("profile");
const profileModal = document.getElementById("profile-modal");
const logoutIcon = document.getElementById("logout");
const logoutModal = document.getElementById("logout-modal");

const newPost = document.getElementById("post-content");
const postTitle = document.getElementById("title");
const postText = document.getElementById("post-text");
const blogContainer = document.getElementById("blogs");

// opening and closing the modals
writeIcon.addEventListener("click", () => {
  postModal.classList.add("show");
});

postModal.addEventListener("click", (event) => {
  if (event.target === postModal) {
    postModal.classList.remove("show");
  }
});

profileIcon.addEventListener("click", () => {
  profileModal.classList.add("show");
});

profileModal.addEventListener("click", (event) => {
  if (event.target === profileModal) {
    profileModal.classList.remove("show");
  }
});

logoutIcon.addEventListener("click", () => {
  logoutModal.classList.add("show");
});

logoutModal.addEventListener("click", (event) => {
  if (event.target === logoutModal) {
    logoutModal.classList.remove("show");
  }
});

//creating a new post
newPost.addEventListener("submit", (e) => {
  e.preventDefault();

  const postTitleValue = postTitle.value.trim()
  const postTextValue = postText.value.trim()

  if(postTextValue !== "" && postTitleValue !== ""){
    const newPostTitle = document.createElement("h2");
    const newPostText = document.createElement("p");

    newPostTitle.textContent = postTitleValue;
    newPostText.textContent = postTextValue;

    blogContainer.appendChild(newPostTitle);
    blogContainer.appendChild(newPostText);

    newPost.reset()
  }


});
