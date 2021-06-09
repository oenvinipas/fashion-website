import React from 'react'
import styled from 'styled-components'

function Section( { title, subtitle, bgImage, leftBtn, rightBtn } ) {
    return (
        <Container backgroundImage= { bgImage }>
            <ItemText>
                <div>
                    <h1> { title } </h1>
                    <p> { subtitle } </p>
                </div>
            </ItemText>
            <Buttons>
                <LeftButton>
                    {/* eslint-disable-next-line  */}
                    <a href="#"> { leftBtn } </a>
                </LeftButton>

                <RightButton>
                    {/* eslint-disable-next-line  */}
                    <a href="#"> { rightBtn } </a>
                </RightButton>
            </Buttons>
        </Container>
    )
}

export default Section

const Container = styled.div `
    height: 100vh;
    background-image: ${props => `url("/Images/${props.backgroundImage}")` } ;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ItemText = styled.div `
    margin-top: 30vh;
    div h1, p {
        padding-bottom: 20px;
        color: #282c45;
    }
    div > h1 {
        font-size: 6vh;
    }
    div > p {
        font-size: 2.5vh;
    }
    text-align: center;
    margin-bottom: 20px;
`
const Buttons = styled.div `
    display: flex;
`
const LeftButton = styled.div `
    background-color: white;
    padding: 20px 50px;
    border-radius: 100px;
    font-size: 2vh;
    margin: 0px 10px;
`
const RightButton = styled(LeftButton) `
    background-color: #282c45;
    a {
        color: white;
    }
`