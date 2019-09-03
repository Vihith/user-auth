import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { setUser } from './actions/user'
import { setPosts } from './actions/posts'
import App from './App'
import axios from './config/axios'
import configureStore from './store/configureStore'

const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())

})

console.log('initial', store.getState())
//code handle page reloads


if (localStorage.getItem('userAuth')) {
    axios.get('/users/account', {
        headers: { 'x-auth': localStorage.getItem('userAuth') }
    })
        .then(response => {
            store.dispatch(setUser(response.data))
        })
        .catch(err => {
            //console.log(err)
            this.props.history.push('/users/login')
        })
        axios.get('/posts', {
            headers:{
                'x-auth': localStorage.getItem('userAuth')
            }
        })
        .then(response => {
            store.dispatch(setPosts(response.data))
        })
}


const jsx = (<Provider store={store}>
    <App />
</Provider >
)


ReactDOM.render(jsx, document.getElementById('root'))