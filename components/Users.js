import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Avatar from "./Avatar"; 
import fakeUsers from '../data/fakedata.js'


const Container = styled.View`
    widht:              100%;
    height:             60px;
    flex-direction:     row;
    align-items:        center;
    background:         #FFFFFF;
`

const Room = styled.TouchableOpacity`
    width:              100px;
    height:             40px;
    flex-direction:     row;
    align-items:        center;
    border:             1px solid #82b1dd;
    border-radius:      20px;
    padding:            0 15px;
    margin-right:       12px;
`

const Text = styled.Text`
    color:              #1777ff;
    font-size:          12px;
    padding-left:       6px;
`

const User = styled.View`
    margin-right: 12px;
`

