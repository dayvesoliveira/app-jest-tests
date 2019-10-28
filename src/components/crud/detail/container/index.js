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
        this.props.changeModelValue(event.target.id, event.target.value)
    }

    handleChangeSelect = event => {
        event.preventDefault()
        const value = event.target.value ? parseInt(event.target.value,10):null
        this.props.changeModelValue(event.target.id, value)
    }

    handleSubmit = event => {
        event.preventDefault()
        const { detail } = this.props
        console.log(detail)
        this.props.fetchSubmitPost(detail)
    }

    render(){
        const { detail, loading, users } = this.props
        const { id, title} = detail
        return (
            <>{ loading ? 
                    (<h2>aguarde...</h2>) :
                    (<>
                            <span>{ id} - {title}</span>
                            <br />
                            <DetailFormComponent
                                handleChangeInput={ this.handleChangeInput }
                                handleChangeSelect={ this.handleChangeSelect }
                                handleSubmit={ this.handleSubmit }
                                listUsers={ users }
                                { ...detail }
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