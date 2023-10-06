import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'
import UserBar from '../components/UserBar'
import ProfileContent from '../components/ProfileContent'
import Estado from '../components/EstadoProfile'

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
        </ScrollView>
    )
}

export default Profile