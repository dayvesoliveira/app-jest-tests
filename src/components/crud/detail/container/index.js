import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    fetchPost,
    fetchSubmitPost,
    fetchUsersList,
    changeFilterUsers,
    changeModelValue
} from '../action-creators'

import {
    fetchDetail,
    fetchUsers,
    loading,
    error
} from '../selector'

import DetailFormComponent from '../presentation'

class DetailContainer extends React.PureComponent {

    static propTypes = {
        fetchUsersList: PropTypes.func,
        detail: PropTypes.shape({
            userId: PropTypes.number,
            id:     PropTypes.number,
            title:  PropTypes.string,
            body:   PropTypes.string
        }),
        users:      PropTypes.array,
        loading:        PropTypes.bool,
		error:          PropTypes.object
    }

    componentDidMount() {
        const id = this.props.match.params.id
        if (id) this.props.fetchPost(id)
        this.props.fetchUsersList()
    }

    handleChangeInput = event => {
        this.props.changeModelValue({[event.target.id]: event.target.value })
        console.log(this.props)
    }

    handleChangeSelect = event => {
        this.props.changeModelValue({[event.target.id]: event.target.value })
        console.log(this.props)
    }

    handleSubmit = event => {
        event.preventDefault();
		console.warn( this.props );
    }

    render(){
        const { detail, loading, users } = this.props
        const { id, title} = detail
        return (
            <>{ loading ? 
                    <span>aguarde...</span> :
                    (<>
                            <span>{ id} - {title}</span>
                            <br />
                            <DetailFormComponent
                                handleChangeInput={ this.handleChangeInput }
                                handleChangeSelect={ this.handleChangeSelect }
                                handleSubmit={ this.handleSubmit }
                                listUsers={ users }
                                { ...this.props }
                                />
                    </>)
            }</>)
    }
}


const mapStateToProps = state =>({
    detail:    fetchDetail(state),
    users:     fetchUsers(state),
    loading:   loading(state),
    error:     error(state)
})

const actionCreators = {
    fetchPost,
    fetchSubmitPost,
    fetchUsersList,
    changeFilterUsers,
    changeModelValue
}

export { DetailContainer as DetailPureComponent }

export default connect(
    mapStateToProps,
    actionCreators
)(DetailContainer)