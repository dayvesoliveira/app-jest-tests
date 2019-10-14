import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './styles.scss'

const ButtonLink = ({ id }) => (
    id != null && (<Link className="btn-edit" to={`/posts/${id}`}>
        Editar
    </Link>)
)

ButtonLink.propTypes = {
    id: PropTypes.number
}

export default ButtonLink