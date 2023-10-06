import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    width:              40px;
    height:             40px;
    position:           relative;
`

const ProfilePicture = styled.Image`
    position:               absolute;
    margin-top:             9px;
    margin-left:            100px;;
    width:                  200px; 
    height:                 200px;
    z-index:                1;
    border-radius:          100%;
    border:                 2px solid #FFFFFF;
`

const UserActive = styled.View`
    bottom:             -2px;
    right:              -2px;
    width:              30px;
    height:             30px;
    border-radius:      16px;
    background:         #10D24B;
    border:             2px solid #FFFFFF;
    margin-top:         180px;
    margin-left:        230px;
    z-index:            2;

`

const Avatar2 = ({source, online,}) => {
    return(
        <Container>
            <ProfilePicture source = {source} />
            {online && <UserActive />}
        </Container>
    )
}


export default Avatar2