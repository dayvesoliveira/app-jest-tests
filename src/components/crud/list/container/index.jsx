import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { fetchSearchPosts, resetPosts } from '../action-creators'
import GridPost from '../presentation'

import { connect } from 'react-redux'
import { selectCrud } from '../selector'

class Crud extends PureComponent {

    static propTypes = {
        fetchSearchPosts: PropTypes.func.isRequired,
        searchPosts: PropTypes.array,
        excludePost: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.fetchSearchPosts()
    }

    handleDelete = id => {
        // codigo para executar o delete
        console.log(id)
    }

    render(){
        const { searchPosts } = this.props
        return (
            <GridPost 
                listPosts={ searchPosts }
                excludePost={ this.handleDelete }
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
    resetPosts
}

export { Crud as CrudPureContainer }

export default connect(
	mapStateToProps,
	actionCreators
)(Crud)