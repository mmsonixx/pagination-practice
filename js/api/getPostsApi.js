export const getPostsApi = async (page) => {
    try {
        return await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=2&page=${page}`).then((response) => {
            return response.json()
        })
    } catch (error) {
        console.log(error)
    }
};