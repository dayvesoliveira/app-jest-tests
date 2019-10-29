import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    font-size: 1.2em;
`

const DetailComponent = props =>(
    <>
        <Label>
            { props.children }
        </Label>
    </>
)

export default DetailComponent
