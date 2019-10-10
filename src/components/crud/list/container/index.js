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
import { 
    selectPosts, 
    selectCrud
} from '../selector'

class Crud extends PureComponent {

    static propTypes = {
        fetchSearchPosts:   PropTypes.func.isRequired,
        deletePost:         PropTypes.func.isRequired,
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
        const { search, searchPosts } = this.props
        console.log('props', this.props)
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
    select:      selectCrud(state),
    searchPosts: selectPosts(state)
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