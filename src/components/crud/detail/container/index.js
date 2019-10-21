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
} from '../selector'

class DetailForm extends React.PureComponent {

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
        const { detail } = this.props
        debugger
        const {userId, title} = detail
        return (<h1>
            ok{
                `${userId} - ${title}`
            }
        </h1>)
    }
}

const mapStateToProps = state =>({
    detail: fetchDetail(state)
})

const actionCreators = {
    fetchPost,
    fetchSubmitPost,
    fetchUsersList,
    changeFilterUsers,
    changeModelValue
}

export { DetailForm as DetailPureComponent }

export default connect(
    mapStateToProps,
    actionCreators
)(DetailForm)