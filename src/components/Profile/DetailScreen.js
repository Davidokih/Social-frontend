import React from 'react';
import styled from 'styled-components';

const DetailScreen = () => {
    return (
        <Container>
            <Wrapper>
                <Top>
                    <Image />
                    <Content>
                        <NameDetails>
                            <ProfileName>David Okih</ProfileName>
                            <EditButton>Edit Profile</EditButton>
                            <Icon />
                        </NameDetails>
                        <NameDetails>
                            <Post>
                                <Count>{ 0 }</Count>
                                <Title>Posts</Title>
                            </Post>
                        </NameDetails>

                        <Detail>
                            <Name>David Okih</Name>
                            <Bio>Bio</Bio>
                            <Website>Website</Website>
                        </Detail>
                    </Content>
                </Top>
            </Wrapper>
        </Container>
    );
};

export default DetailScreen;

const Website = styled.div``;
const Bio = styled.div``;
const Name = styled.div``;
const Detail = styled.div``;
const Title = styled.div``;
const Count = styled.div``;
const Post = styled.div``;
const Icon = styled.div``;
const Image = styled.div``;
const EditButton = styled.div``;
const ProfileName = styled.div``;
const NameDetails = styled.div``;
const Content = styled.div``;
const Top = styled.div``;
const Wrapper = styled.div`
    width: 70%;
`;
const Container = styled.div`
    width: 100%;
    margin-top: 70px;
    display: flex;
    justify-content: center;
    background-color: #fafafa;
    height: 100%;
    min-height: calc(100vh - 70px);
`;