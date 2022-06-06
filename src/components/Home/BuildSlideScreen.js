import React from 'react';
import styled from 'styled-components';

const BuildSlideScreen = () => {
    return (
        <Container>
            <Wrapper>
                <Holder>
                    <Image />
                    <Hold>
                        <Name>Name</Name>
                        <Profile>profile</Profile>
                    </Hold>
                </Holder>
            </Wrapper>
        </Container>
    );
};

export default BuildSlideScreen;


const Profile = styled.div``;
const Name = styled.div`
    font-weight: 700;
`;
const Hold = styled.div``;
const Image = styled.div`
    width: 70px;
    height: 70px;
    object-fit: cover;
    background-color: gray;
    border-radius: 50%;
    margin-right: 15px;
`;
const Holder = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
`;
const Wrapper = styled.div`
    margin-left: 50px;
`;
const Container = styled.div`
    width: 100%;
    position: fixed;
`;