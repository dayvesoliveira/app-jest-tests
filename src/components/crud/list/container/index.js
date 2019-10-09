import React, { PureComponent, cloneElement } from 'react'
import PropTypes from 'prop-types'

import { 
    fetchSearchPosts, 
    resetPosts,
    deletePost,
    errorDeletePost
} from '../action-creators'

import GridPost from '../presentation'

import { connect } from 'react-redux'
import { selectCrud } from '../selector'

class Crud extends PureComponent {

    static propTypes = {
        fetchSearchPosts:   PropTypes.func.isRequired,
        searchPosts:        PropTypes.array
    }

    componentDidMount(){
        this.props.fetchSearchPosts()
    }

    handleDelete = async (id) =>  {
        try {
            if (!id) {
                throw Error('É obrigatório informa o id do registro.')
            } else {
                // implementar tela de confirmacao
                await this.props.deletePost(id)
            }
        } catch(e){}
    }

    render(){
        const { searchPosts } = this.props
        return (
            <GridPost 
                searchPosts={ searchPosts }
                handleDelete={ this.handleDelete }
                >
            </GridPost>
        )
    }
}

const mapStateToProps = state =>({
    ...selectCrud(state)
})

const actionCreators = {
	fetchSearchPosts,
    resetPosts,
    deletePost,
    errorDeletePost
}

export { Crud as CrudPureContainer }

export default connect(
	mapStateToProps,
	actionCreators
)(Crud)