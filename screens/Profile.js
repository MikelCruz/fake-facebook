import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'
import UserBar from '../components/UserBar'

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
            </ScrollView>
        </View>
    )
}

export default Profile