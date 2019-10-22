import React from 'react'
import PropTypes from 'prop-types'

const DetailFormComponent = ({
    id,
    title,
    body,
    userId,
    handleChange,
    handleSubmit,
    listUsers
}) => (
    <>
        <form noValidate>
            <label>
                Title
                <input id="title" onChange={ this.handleChange() } />
            </label>
            <label>
                Body
                <textarea id="body" onChange={ this.handleChange() }></textarea> 
            </label>
            <select>
                <option>Selecione...</option>
             {
                 listUsers && listUsers.map((item)=>{
                    <option key={'user'+ item.id } value={ item.id }>{ item.name }</option>
                 })
             }
            </select>
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