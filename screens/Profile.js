import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'
import UserBar from '../components/UserBar'
import ProfileContent from '../components/ProfileContent'
import Estado from '../components/EstadoProfile'
import Actions from '../components/Actions'

const View = styled.View`
    align-items: center;
    height: 500px;
`

const Profile = () => {
    return (
        <ScrollView>
            <UserBar />
            <ProfileContent />
            <Estado />
            <Actions />
        </ScrollView>
    )
}

export default Profile