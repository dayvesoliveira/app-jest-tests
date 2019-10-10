import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const GridPost = ({
    searchPosts,
    handleDelete
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
                { searchPosts && searchPosts.map(post=>{
                    return (
                    <tr key={ 'pst_' + post.id }>
                        <td>{ post.id }</td>
                        <td>{ post.title }</td>
                        <td>{ post.body }</td>
                        <td>{ post.user }</td>
                        <td>
                            <a 
                                className="btn-edit" 
                                href={'/posts/'+ post.id }>
                                Editar
                            </a>
                            <button 
                                className="btn-exclude" 
                                onClick={()=>handleDelete(post.id)}>
                                Excluir
                            </button>
                        </td>
                    </tr>)
                })
                }
            </tbody>
        </table>
)

GridPost.propTypes = {
    searchPosts:  PropTypes.array,
    handleDelete: PropTypes.func.isRequired,
}

export default GridPost