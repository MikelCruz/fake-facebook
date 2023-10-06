import React from 'react'
import styled from 'styled-components/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AvatarState from './AvatarState'


const Container = styled.View`
    width:              100%;
    height:             92px;
`

const Row = styled.View`
    flex-direction:     row;
    background:         #FFFFFF;
    width:              100%;
    padding:            0 20px;
    align-items:        center;
`

const Divider = styled.View`
    width:              100%;
    height:             0.5px;
    background:         #DDDDDD;
`

const Text = styled.Text`
    font-Size:              20px;
    color:                  #424040;
`

const Text2 = styled.Text`
    font-Size:              20px;
    color:                  #c2c2c2;
`

//menu para poner Rows
const Menu = styled.View`
    flex:               1;
    flex-direction:     row;
    justify-content:    center;
    height:             30px;
    margin-top: 50px;
    margin-left: -30px;
`
//Menu para poner Columns
const Menu2 = styled.View`
    flex:               1;
    flex-direction:     column;
    justify-content:    center;
    height:             30px;
    margin-top:         0px;
    margin-left:        50px;
`
//Para los iconos - PASAR A LIMPIO
// const Menu3 = styled.View`
//     flex:               1;
//     flex-direction:     column;
//     justify-content:    right;
//     height:             70px;
//     margin-top:         0px;
//     margin-left:        140px;
// `



const Estado = () => {
    return (
        <Container>
                <Row>
                    <Menu>
                        <AvatarState source={require('../assets/feels_song.png')} />
                    </Menu>
                    <Menu2>
                        <Text > Feels </Text>
                        <Text2 > Lies of P </Text2> 
                    </Menu2>
                    <Menu2>
                        <MaterialCommunityIcons name='dots-horizontal' size={30} color='#c2c2c2' />
                    </Menu2>
                </Row>
            <Divider />
            
        </Container>
    )
}


export default Estado