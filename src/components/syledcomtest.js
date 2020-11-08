import React, { Component } from 'react'
import styled from 'styled-components'


const inline = {
    width : '100px',
    height: '100px',
    backgroundColor: 'teal'
}

const StyledDiv = styled.div`
    width: 100px;
    height: 100px;    
    background-color: greenyellow;
`
const StyledStyledDiv = styled(StyledDiv)`
    border : 10px solid whitesmoke;
`

export default class SyledComTest extends Component {
    render() {
        return (
            <div>
                <StyledStyledDiv>
                </StyledStyledDiv>
            </div>
        )
    }
}
