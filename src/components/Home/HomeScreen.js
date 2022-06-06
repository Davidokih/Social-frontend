import React from 'react';
import styled from 'styled-components';
import BuildMainScreen from './BuildMainScreen';
import BuildSlideScreen from './BuildSlideScreen';

const HomeScreen = () => {
    return (
        <Container>
            <Wrapper>
                <MainScreen>
                    <BuildMainScreen />
                </MainScreen>
                <SlideScreen>
                    <BuildSlideScreen />
                </SlideScreen>
            </Wrapper>
        </Container>
    );
};

export default HomeScreen;

const SlideScreen = styled.div`
    width: 400px;
    display: flex;
    justify-content: flex-start;
    @media (max-width: 1000px){
        display: none;
    }
`;
const MainScreen = styled.div`
    width: 600px;
    display: flex;
    /* align-items: center; */
    justify-content: flex-start;
    /* background-color: #fff; */

    @media (max-width: 1000px){
        display: flex;
        justify-content: center;
        width: 80%;
    }
`;
const Wrapper = styled.div`
    width: 1000px;
    display: flex;
    justify-content: space-between;
    padding-top: 100px;
    /* background-color: #fff; */
    
    @media (max-width: 1000px){
        display: flex;
        justify-content: center;
        /* width: 80%; */
    }
`;
const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    height: 100%;
    background-color: lightgray;
    display: flex;
    /* align-items: center; */
    justify-content: center;
`;