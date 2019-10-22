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
    loading,
    error
} from '../selector'

class DetailContainer extends React.PureComponent {

    static propTypes = {
        fetchUsersList: PropTypes.func,
        detail: PropTypes.shape({
            userId: PropTypes.number,
            id:     PropTypes.number,
            title:  PropTypes.string,
            body:   PropTypes.string
        }),
        loading:        PropTypes.bool,
		error:          PropTypes.object
    }

    componentDidMount() {
        const id = this.props.match.params.id
        if (id) this.props.fetchPost(id)
        this.props.fetchUsersList()
    }

    render(){
        const { detail, loading } = this.props
        const { id, title} = detail
        return (
            <>{ loading ? 
                    <h2>aguarde</h2> :
                    <span>{ id} - {title}</span>
            }</>)
    }
}

const mapStateToProps = state =>({
    detail:  fetchDetail(state),
    loading: loading(state) 
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