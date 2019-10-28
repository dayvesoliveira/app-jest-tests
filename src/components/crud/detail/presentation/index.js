import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './style.scss'

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
        <form onSubmit={ handleSubmit } noValidate>
            <label>
                Title
                <input id="title" onChange={ handleChangeInput } value={ title } />
            </label>
            
            <label>
                Body
                <textarea id="body" onChange={ handleChangeInput } value={ body }></textarea> 
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
        </form>
    </>
)

DetailFormComponent.defaultProps = {
    id:     null,
    title:  '',
    body:   '',
    userId: undefined
}

DetailFormComponent.propTypes = {
    id:     PropTypes.number,
    title:  PropTypes.string,
    body:   PropTypes.string,
    userId: PropTypes.number,
    handleChange: PropTypes.func,
    listUsers: PropTypes.array,
    loading: PropTypes.bool
}

export default DetailFormComponent