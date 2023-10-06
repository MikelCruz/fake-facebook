import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'
import UserBar from '../components/UserBar'
import ProfileContent from '../components/ProfileContent'

const View = styled.View`
    align-items: center;
    height: 500px;
`

const Profile = () => {
    return (
        <View>
            <ScrollView>
                {/* <Text> En Proceso </Text> */}
                <UserBar />
                <ProfileContent />
            </ScrollView>
        </View>
    )
}

export default Profile