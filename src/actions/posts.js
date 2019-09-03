export const setPosts = (posts) => {
    return {
        type: 'SET_POSTS',
        payload: posts
    }
}

export const addPost = (post) => {
    return {
        type: 'ADD_POST',
        payload: post
    }
}

export const removePost = (id) => {
    return {
        type: 'REMOVE_POST',
        payload: id
    }
}