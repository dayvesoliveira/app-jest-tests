import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DetailComponent from '../presentation/detail'

import './style.scss'

const Form = styled.form`
    font: normal 12px/16px arial;
    display: flex;
    flex-flow: column wrap;
`

const isDisable = op =>(op ? 'disable':'')

const DetailFormComponent = ({
    title,
    body,
    userId,
    listUsers,
    handleChangeInput,
    handleChangeSelect,
    handleSubmit,
    loading,
    ...props
}) => (
    <>
        <Form onSubmit={ handleSubmit } noValidate>
            <label>
                Title
                <input id="title" onChange={ handleChangeInput } value={ title } />
            </label>
            
            <label>
                Body
                <textarea id="body" rows="5" cols="100" onChange={ handleChangeInput } value={ body }></textarea> 
            </label>
            
            <label>
                User
                <select id="userId" onChange={ handleChangeSelect } value={ userId }>
                    <option>Selecione...</option>
                {
                    Array.isArray(listUsers) && (
                        listUsers.map((item)=>{
                            return  (<option key={'user'+ item.id } value={ item.id }>{ item.name }</option>)
                        })
                    )
                }
                </select>
            </label>
            
            <button disable={ isDisable(loading) }>Enviar</button>
            
            <Link to="/">Voltar</Link>
        </Form>
        <DetailComponent title={ title }
            body={ body }
            userId={ userId }
            listUsers={ listUsers }>
        </DetailComponent>
    </>
)

DetailFormComponent.defaultProps = {
    title:  '',
    body:   '',
    userId: ''
}

DetailFormComponent.propTypes = {
    title:  PropTypes.string,
    body:   PropTypes.string,
    userId: PropTypes.number,
    handleChange: PropTypes.func,
    listUsers: PropTypes.array,
    loading: PropTypes.bool
}

export default DetailFormComponent