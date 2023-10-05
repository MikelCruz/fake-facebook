import React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'
import Animated from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import fakeStories from '../data/fakeStories'
import Avatar from './Avatar'
// import * as Animations from '../animations/storyAnimations'

const Container = styled.View`
    width:                          100%;
    height:                         230px;
    flex-direction:                 row;
    align-items:                    center;
    background:                     #FFFFFF;
`

const FakeCard = styled.View`
    width:                          110px;
    height:                         200px;
    margin-left:                    10px;
    background:                     #FFFFFF;
`

const PersonaldCard = styled.Image`
    width:                          110px;
    height:                         200px;
    margin-right:                   0px;
    position:                       absolute;
    background:                     #FFFFFF;
    border-radius:                  10px;
    z-index:                        10;
    border:                         1px solid #DDDDDD;
`

const PersonaldCardIcon = styled.View`
    width:                          34px;
    height:                         34px;
    border-radius:                  17px;
    background:                     #3a86e9;
    border-width:                   3px;
    border-color:                   #FFFFFF
    align-items:                    center;
    position:                       absolute;
    top:                            115px;
    left:                           40px;
`

const UserCard = styled.View`
    width:                          110px;
    height:                         200px;
    margin-right:                   10px;
    position:                       relative;
`

const UserCardStory = styled.Image`
    width:                          100%;
    height:                         200px;
    border-radius:                  10px;
`

const UserCardPlus = styled.View`
    width:                          30px;
    height:                         30px;
    border-radius:                  15px;
    background:                     #3a86e9;
    align-items:                    center;
    position:                       absolute;
    top:                            115px;
    left:                           40px;
`

const UserCardFooter = styled.View`
    position:                       absolute;
    width:                          100%;
    height:                         35%;
    top:                            130px;
    left:                           0px;
    background:                     ${(props =>  props.profile ? '#FFFFFF' : 'rgba(255, 255, 255, 0)')};
`

const UserOnCard = styled.View`
    position:                       absolute;
    top:                            8px;
    left:                           8px;
    background:                     #FFFFFF;
    border-radius:                  20px;
    width:                          40px;
    height:                         40px;
    align-items:                    center;
    justify-content:                center;
`

const Text = styled.Text`
    font-size:                      12px;
    font-weight:                    bold;
    margin:                         0 10px;
    padding-top:                    ${(props => props.profile ? '155px' : '45px')};
    text-align:                     center;
    color:                          ${(props => props.profile ? '#000000' : '#FFFFFF')}
`

const Story = () => {
    return (
        <>
            <Container>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{paddingLeft:10}}
                >
                <UserCard>
                    <UserCardStory source={require('../assets/story.jpg')} />
                    <UserCardFooter profile={true}>
                        <Text profile={true}>Crear una historia</Text>
                    </UserCardFooter>
                    <UserCardPlus>
                        <MaterialCommunityIcons name="plus" size={28} color="#FFFFFF" />
                    </UserCardPlus> 
                </UserCard>
                {fakeStories.map((story, i) => {
                    return (
                        <UserCard key={i.toString()}>
                            <UserCardStory source={story.source} />
                            <UserCardFooter profile={false}>
                                <Text profile={false}>{story.name}</Text>
                            </UserCardFooter>
                            <UserOnCard>
                                <Avatar
                                    source={story.user}
                                    story={true}
                                    checked={story.checked}
                                    />
                            </UserOnCard>
                        </UserCard>
                    )
                })}
                </ScrollView>
            </Container>
        </>
    )
}

export default Story