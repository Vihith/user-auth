import React from 'react'
import _ from 'lodash'
import { removeUser } from '../../actions/user'
import { connect } from 'react-redux'

function Logout(props) {

    if (!_.isEmpty(props.user)) {
        localStorage.removeItem('userAuth')
        props.dispatch(removeUser())
    }
    return (
        <p>you have been logged out</p>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Logout)