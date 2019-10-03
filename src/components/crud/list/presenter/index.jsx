import React from 'react'
import PropTypes from 'prop-types'

const GridPost = ({
    listPosts,
    editPost,
    excludePost,
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
                            botoes
                        </td>
                    </tr>)
                })
                }
            </tbody>
        </table>
)

GridPost.defaultProps = {
    listPosts:   [],
    editPost:    ()=>{},
    excludePost: ()=>{}
}

GridPost.propTypes = {
    listPosts:   PropTypes.array,
    editPost:    PropTypes.func,
    excludePost: PropTypes.func,
}

export default GridPost