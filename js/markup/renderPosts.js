import {makePostsList} from "./makePostsList.js";
import {getPostsApi} from "../api/getPostsApi.js";

const postsList = document.querySelector(".posts__list");
console.log(postsList)

export const  renderPosts = async () => {
    await getPostsApi().then( (data) => {
        postsList.innerHTML = makePostsList(data);
    })
}


