import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    width:              20px;
    height:             20px;
    position:           relative;
`

const ProfilePicture = styled.Image`
    margin-top:             -50px;
    margin-left:            0px;;
    width:                  80px; 
    height:                 80px;
    z-index:                1;
    border-radius:          10%;
`

const AvatarState = ({source}) => {
    return(
        <Container>
            <ProfilePicture source = {source} />
        </Container>
    )
}


export default AvatarState