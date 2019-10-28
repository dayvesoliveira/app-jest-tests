import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const DetailFormComponent = ({
    title,
    body,
    userId,
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
            <br/>
            <label>
                Body
                <textarea id="body" onChange={ handleChangeInput } value={ body }></textarea> 
            </label>
            <br/>
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
            <br/>
            <button>Enviar</button>
            <br/>
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