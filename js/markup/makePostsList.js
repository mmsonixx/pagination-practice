export const makePostsList = (posts) => {
  const markup = posts
    .map(
      (post) => `<li class="posts__item">
    <h2 class="posts__title">${post.title}</h2>
    <p class="posts__info">${post.body}</p>
</li>
 `,
    )
    .join("");
  return markup;
};
