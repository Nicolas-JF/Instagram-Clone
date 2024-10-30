document.addEventListener('DOMContentLoaded', () => {
    const feedContainer = document.querySelector('.feed-container');

    for (let i = 0; i < 10; i++) {
        const post = document.createElement('div');
        post.classList.add('post');
        post.innerHTML = `
            <img src="https://picsum.photos/400/500" alt="Post Image">
            <p><strong>Username</strong>: Caption for the post</p>
        `;
        feedContainer.appendChild(post);
    }
});

const accountContainer = document.querySelector('.account-container');

for (let i = 0; i < 10; i++) {
    const image = document.createElement('img');
    image.src = "https://picsum.photos/200";
    image.classList.add('account-image');
    accountContainer.appendChild(image);
}
