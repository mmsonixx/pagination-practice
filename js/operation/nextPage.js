import { getPostsApi } from "../api/getPostsApi";
import { renderPosts } from "../markup/renderPosts";

const button = document.querySelector(".button");

const numberPage = 1;

export const loadPosts = async () => {

    numberPage += 1;

 const newPosts =    await getPostsApi(numberPage);
    await renderPosts(newPosts);

}
button.addEventListener("click", loadPosts);

