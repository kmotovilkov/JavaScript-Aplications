const createArticle = (data) => `
 <article >
            <header>
                <h3>${data.title}</h3>
                <section>
                    <p>${data.body}</p>
                </section>
                <footer>
                    <p>Author: ${data.author}</p>
                </footer>
            </header>
            </article>
`;

export default createArticle;