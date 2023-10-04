import React from 'react'
import styled from 'styled-components/native'
import {MaterialCommunityICons} from '@expo/vector-icons'
import Avatar from './Avatar'

const Container = styled.View`
    width:              100%;
    heihgt:             92px;
`

const Row = styled.View`
    flex-direction:     row;
    background:         #FFFFFF;
    width:              100%;
    padding:            0 11px;
    align-items:        center;
`

const Input = styled.TextInput`
    heihgt:             40px;
    width:              85%;
    padding:            0 8px;
    border:             1px solid #DDD;
    margin:             10px;
    border-radius:      30px;
`

const Divider = styled.View`
    width:              100%;
    heihgt:             0.5px;
    background:         #DDDDDD;
`

const Menu = styled.View`
    flex:               1;
    flex-direction:     row;
    align-items:        center;
    justify-content:    center;
    height:             42px;
`


const MenuText = styled.Text`
    padding-left:       11px;
    font-weight:        500;
    font-size:          12px;
`

const Separator = styled.View`
    width:              1px;
    height:             26px;
    background:         #F0F0F0;
`


const ToolBar = () => {
    return (
        <Container>
            <Row>
                <Avatar source = {require('.../assets/12.jpg')} />
                <Input placeholder = "¿Qué estás pensando?" />
            </Row>
            <Divider />
            <Row>
                <Menu>
                    <MaterialCommunityICons name = "video-account" size={28} color ="#F44337" />
                    <MenuText> Directo </MenuText>
                </Menu>
                <Separator />
                <Menu>
                    <MaterialCommunityICons name = "image-multiple" size={20} color = "#CAF50" />
                    <MenuText> Foto </MenuText>
                </Menu>
                <Separator />
                <Menu>
                    <MaterialCommunityICons name="video-plus" size={20} color="#A748EE" />
                    <MenuText> Sala </MenuText>
                </Menu>
            </Row>
        </Container>
    )
}


export default ToolBar