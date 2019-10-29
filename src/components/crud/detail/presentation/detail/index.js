import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    display: block;
    margin: 15px auto;
    padding: 15px;
    font-size: 1.2em;
    min-width: 50%;
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
        <Label>Title: { title }</Label>
        <Label>Body:  { body }</Label>
        <Label>User:  { userByid(listUsers, userId) }</Label>
    </>
)

export default DetailComponent
