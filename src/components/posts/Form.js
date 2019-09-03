import React from 'react'
import axios from '../../config/axios'
import { connect } from 'react-redux'
import { addPost } from '../../actions/posts'


class FormPost extends React.Component{
    constructor(){
        super()
        this.state = {
            title : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = {
            title: this.state.title
        }

        axios.post('/posts', formData, {
            headers : {
                'x-auth' : localStorage.getItem('userAuth')
            }
        })
        .then(response => {
            this.props.dispatch(addPost(response.data))
        })
        this.setState({
            title : ''
        })
    }

    render(){
        return (
            <div>
                <h3>New Post</h3>
                <form onSubmit = {this.handleSubmit}>
                    <input type = "text" 
                        name = "title"
                        placeholder = "Enter title"  
                        value = {this.state.title} 
                        onChange = {this.handleChange} 
                    />
                    <input type = "submit" />
                </form>
            </div>
        )
    }
}


export default connect()(FormPost)