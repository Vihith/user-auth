import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'
import { setPosts, removePost } from '../../actions/posts'
import { connect } from 'react-redux'
import FormPost from './Form'
import _ from 'lodash'

class ListPost extends React.Component{
    componentDidMount(){
        if(_.isEmpty(this.props.posts)){
            axios.get('/posts', {
                headers:{
                    'x-auth': localStorage.getItem('userAuth')
                }
            })
            .then(response => {
                this.props.dispatch(setPosts(response.data))
            })
        }
    }

    handleRemove = (id) => {
        axios.delete(`/posts/${id}`, {
            headers: {
                'x-auth' : localStorage.getItem('userAuth')
            }
        })
        .then(() => {
            this.props.dispatch(removePost(id))
        })
    }


    render(){
        return (
            <div>
                <h2>Listing Posts - {this.props.posts.length} by {this.props.user.username}</h2>
                <ul>
                    { this.props.posts.map(post => {
                        return <li key = {post._id}> <Link to={`/posts/${post._id}`}>{post.title} </Link><button onClick = {() => {
                            const confirmRemove = window.confirm("Are You Sure?")
                            if(confirmRemove){
                                this.handleRemove(post._id)
                            }
                        }}>Remove</button></li>
                    })}
                </ul>
                <FormPost/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user : state.user,
        posts: state.posts
    }
}
export default connect(mapStateToProps)(ListPost)