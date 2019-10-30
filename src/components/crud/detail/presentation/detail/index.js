import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Label = styled.label`
    font: normal 10px/24px arial, helvetica;
    display: block;
    margin: 15px 10px;
    padding: 15px;
    font-size: 1.2em;
    min-width: 50%;
    background-color: #e0e0e0;
    border-radius: 10px;
`
const Span = styled.span`
    display: flex;
    margin: 5px 0;
    padding: 10px 5px;
    font-size: .7em;
    background-color: coral;
    width: 34px;
    border-radius: 100%;
    justify-content: center;
    color: #fff;
`

const userByid = (users, userId) => {
    if (users && users.length > 0) {
        const [user] = users.filter(item=> item.id === userId)
        if (user) return user.name 
    }
    return null
}

const DetailComponent = ({
    title,
    body,
    userId,
    listUsers
}) =>(
    <>
        <Label><Span>Title</Span> { title }</Label>
        <Label><Span>Body</Span>  { body }</Label>
        <Label><Span>User</Span>  { userByid(listUsers, userId) }</Label>
    </>
)

DetailComponent.defaultProps = {
    title: '',
    body: '',
    userId: '',
    listUsers: ''
}

DetailComponent.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    userId: PropTypes.number,
    listUsers: PropTypes.array
}

export default DetailComponent
