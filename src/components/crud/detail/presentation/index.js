import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const DetailFormComponent = ({
    title,
    body,
    listUsers,
    handleChangeInput,
    handleChangeSelect,
    handleSubmit,
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
            <select onChange={ handleChangeSelect }>
                <option>Selecione...</option>
             {
                 listUsers.map((item)=>{
                   return  <option key={'user'+ item.id } value={ item.id }>{ item.name }</option>
                 })
             }
            </select>
            <button>Enviar</button>
            <Link to="/">Voltar</Link>
        </form>
    </>
)

DetailFormComponent.defaultProps = {
    id:     null,
    title:  '',
    body:   '',
    userId: null
}

DetailFormComponent.propTypes = {
    id:     PropTypes.number,
    title:  PropTypes.string,
    body:   PropTypes.string,
    userId: PropTypes.number,
    handleChange: PropTypes.func,
    listUsers: PropTypes.array
}

export default DetailFormComponent