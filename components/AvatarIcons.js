import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    width:              20px;
    height:             20px;
    position:           relative;
`

const ProfilePicture = styled.Image`
    margin-top:             -30px;
    margin-left:            14px;
    width:                  40px;
    height:                 40px;
`

const AvatarIcons = ({source}) => {
    return(
        <Container>
            <ProfilePicture source = {source} />
        </Container>
    )
}


export default AvatarIcons