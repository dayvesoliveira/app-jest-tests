import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const GridPost = ({
    listPosts,
    excludePost
}) => (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>User</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { listPosts && listPosts.map(post=>{
                    return (
                    <tr key={ 'pst_' + post.id }>
                        <td>{ post.id }</td>
                        <td>{ post.title }</td>
                        <td>{ post.body }</td>
                        <td>{ post.user }</td>
                        <td>
                            <button 
                                className="btn-edit" 
                                href={'../'+ post.id }>
                                Editar
                            </button>
                            <button 
                                className="btn-exclude" 
                                onClick={excludePost(post.id)}>
                                Excluir
                            </button>
                        </td>
                    </tr>)
                })
                }
            </tbody>
        </table>
)

GridPost.defaultProps = {
    listPosts:   [],
    excludePost: ()=>{}
}

GridPost.propTypes = {
    listPosts:   PropTypes.array,
    excludePost: PropTypes.func.isRequired,
}

export default GridPost