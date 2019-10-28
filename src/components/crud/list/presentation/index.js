import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'

import './styles.scss'
import ButtonLink from './button-link'

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
                        <td>{ post.userId }</td>
                        <td>
                            <ButtonLink id={ post.id }/>
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