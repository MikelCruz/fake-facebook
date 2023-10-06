import React from 'react'
import styled from 'styled-components/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Avatar from './Avatar'

const Container = styled.View`
    width:              100%;
    height:             92px;
`

const Row = styled.View`
    flex-direction:     row;
    background:         #FFFFFF ;
    width:              100%;
    padding:            0 11px;
    align-items:        center;
`

const Input = styled.TextInput`
    height:             40px;
    width:              80%;
    padding:            0 8px;
    border:             1px solid #3a86e9;
    margin:             10px;
    border-radius:      30px;
`

const Divider = styled.View`
    width:              100%;
    height:             0.5px;
    background:         #DDDDDD;
`



const ToolBar = () => {
    return (
        <Container>
            <Row>
                <MaterialCommunityIcons name="arrow-left" size={28} color="#3a86e9" />
                    <Input  placeholder = " Busca Personas: " />
                <MaterialCommunityIcons name="drama-masks" size={28} color="#3a86e9" />
            </Row>
            <Divider />
            
        </Container>
    )
}


export default ToolBar