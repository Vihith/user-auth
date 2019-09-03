import React from 'react'
import axios from 'axios'
import { setUser } from '../../actions/user'
import { connect } from 'react-redux'

class Profile extends React.Component {



    componentDidMount() {
        if (Object.keys(this.props.user).length === 0) {
            axios.get('http://dct-user-auth.herokuapp.com/users/account', {
                headers: { 'x-auth': localStorage.getItem('userAuth') }
            })
                .then(response => {
                    this.props.dispatch(setUser(response.data))
                })
                .catch(err => {
                    //console.log(err)
                    this.props.history.push('/users/login')
                })
        }

    }
    render() {
        return (
            <div>
                <h3>user profile</h3>
                <p> User name  :{this.props.user.username}</p>
                <h3>Total Posts Written - {this.props.posts.length}</h3>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        posts : state.posts
    }
}
export default connect(mapStateToProps)(Profile)