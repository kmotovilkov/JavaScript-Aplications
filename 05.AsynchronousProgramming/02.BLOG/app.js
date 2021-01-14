function attachEvents(values) {
    const baseUrl = `https://blog-apps-c12bf.firebaseio.com`;
    let loadPostsEl = document.getElementById('btnLoadPosts');
    let posts = document.getElementById('posts');
    let viewPostBtn = document.getElementById('btnViewPost');
    let postComentsUl = document.getElementById('post-comments');
    let postTitleEl = document.getElementById('post-title');
    let postBodyEl = document.getElementById('post-body');

    loadPostsEl.addEventListener('click', () => {
        // posts.innerHTML = `<option value=""  disabled selected> Select post ...</option>`;

        fetch(`${baseUrl}/posts.json`)
            .then(res => res.json())
            .then(data => {
                    let options = Object.keys(data)
                        .map(key => `<option value="${key}">${data[key].title}</option>`)
                        .join();
                    posts.innerHTML = options;
                }
            );
    });

    viewPostBtn.addEventListener('click', values => {
        let postId = posts.value;
        const commentsReq = fetch(`${baseUrl}/comments.json`).then(res => res.json());
        const postsReq = fetch(`${baseUrl}/posts/${postId}.json`).then(rec => rec.json());

        Promise.all([commentsReq, postsReq]).then(([comments, currentPost]) => {
            postTitleEl.innerText = currentPost.title;
            postBodyEl.innerText = currentPost.body;

            postComentsUl.innerHTML = "";
            Object.entries(currentPost.comments || {}).forEach(([key, value]) => {
                let li = document.createElement('li');

                li.innerText = value.text;
                postComentsUl.appendChild(li);
            });

        });

    });

}

attachEvents();