import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

const Container = styled.View`
    width:              100%;
    heihgt:             58px;
    padding:            0 11px;
    align-items:        center;
    flex-direction:     row;
    justify-content:    space-between;
`

const Text = styled.Text`
    color:              #3a86e9;
    font-size:          25px;
    font-weight:        bold;
    letter-spacing:     -0.3px;
`

const Row = styled.View`
    flex-direction:     row;
`

const Button = styled.TouchableOpacity`
    width:              42px;
    heihgt:             42px;
    border-radius:      21px;
    margin-left:        16px;
    background:         #EEEEEE;
    align-items:        center;
    justify-content:    center;
`