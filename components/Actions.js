import React from 'react'
import styled from 'styled-components/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AvatarIcons from './AvatarIcons'


const Container = styled.View`
    width:              100%;
    height:             92px;
`

const Row = styled.View`
    flex-direction:     row;
    background:         #FFFFFF;
    width:              100%;
    padding:            0 10px;
    align-items:        center;
`

const Divider = styled.View`
    width:              100%;
    height:             0.5px;
    background:         #DDDDDD;
`

const Text = styled.Text`
    margin-top:             30px;
    margin-left:            -20px;
    font-Size:              20px;
    color:                  #424040;
`


const Menu = styled.View`
    flex:               1;
    flex-direction:     row;
    justify-content:    center;
    height:             70px;
    margin-top:         50px;
`



const Actions = () => {
    return (
        <Container>
                <Row>
                    <Menu>
                        <AvatarIcons source={require('../assets/plus.png')} />
                        <Text>Add Story</Text>
                    </Menu>

                    <Menu>
                        <AvatarIcons source={require('../assets/format-list-bulleted.png')} />
                        <Text>Activity Log</Text>
                    </Menu>
                    <Menu>
                        <AvatarIcons source={require('../assets/square-edit-outline-icon.png')} />
                        <Text>Edit Profile</Text>
                    </Menu>
                    <Menu>
                        <AvatarIcons source={require('../assets/dots-horizontal-circle-outline.png')} />
                        <Text>Much More</Text>
                    </Menu>
                </Row>
            <Divider />
            
        </Container>
    )
}


export default Actions