import React from 'react';
import styled from 'styled-components';
import { BsThreeDots, BsBookmark } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { FaRegComment, FaRegSmileWink } from 'react-icons/fa';

const BuildMainScreen = () => {
    return (
        <Container>
            <TopBuild>
                <Holder>
                    <Image src='/esta bueno pero le ase falta algo de divertidad.jpg' />
                    <Name>Name</Name>
                </Holder>
            </TopBuild>
            <PostBuild>
                <Top>
                    <Hold>
                        <ImageProfile src='/esta bueno pero le ase falta algo de divertidad.jpg' />
                        <ProfileHolder>
                            <ProfileName>Name</ProfileName>
                            <Profile>Original</Profile>
                        </ProfileHolder>
                    </Hold>

                    <DotIcon />
                </Top>
                <PostImage src='/esta bueno pero le ase falta algo de divertidad.jpg' />

                <Icons>
                    <Hold>
                        <LoveIcon />
                        <CommentIcon />
                        <SendIcon />
                    </Hold>

                    <SavedIcon />
                </Icons>
                <LikePost>
                    <span>{ 0 }</span>likes
                </LikePost>

                <Post>
                    <span>name</span>
                    <Content>To address all issues (including breaking changes), run:
                        npm audit fix --force</Content>

                </Post>
                <Time>Posted 3Hours Ago</Time>
                <PostInput>
                    <PostIcon />
                    <Input placeholder='Add a comment' />
                    <Text>Post</Text>
                </PostInput>
            </PostBuild>
        </Container>
    );
};

export default BuildMainScreen;

const Text = styled.div`
    font-weight: bold;
    color: lightblue;
    font-size: 18px;
    text-transform: uppercase;
    margin-right: 12px;

    :hover{
        cursor: pointer;
    }
`;
const Input = styled.input`
    outline: none;
    border: 0;
    background-color: transparent;
    flex: 1;

    ::placeholder{
        /* font-family: Poppins; */
        font-size: 18px;
    }
`;
const PostIcon = styled(FaRegSmileWink)`
    margin:  0 10px;
    font-size: 30px;
`;
const PostInput = styled.div`
    display: flex;
`;
const Time = styled.div`
    color: silver;
    text-transform: uppercase;
    font-size: 12px;
`;
const Content = styled.div`
    font-size: 15px;
`;
const Post = styled.div`
    margin-left: 20px;
    margin-top: 15px;
    font-size: 20px;
    /* font-family: popins; */

    span{
        margin-left: 10px;
        font-weight: 500;
    }
`;
const LikePost = styled.div`
    margin-left: 20px;
    margin-top: 15px;
    font-size: 20px;
    /* font-family: popins; */

    span{
        margin-left: 10px;
        font-weight: 500;
    }
`;
const SavedIcon = styled(BsBookmark)`
    font-size: 30px;
    color: gray;
    transition: all 350ms;
    margin-right: 20px;

    :hover{
        cursor: pointer;
        color: silver;
    }
`;
const SendIcon = styled(FiSend)`
    font-size: 30px;
    color: gray;
    transition: all 350ms;
    margin-left: 20px;

    :hover{
        cursor: pointer;
        color: silver;
    }
`;
const CommentIcon = styled(FaRegComment)`
    font-size: 30px;
    color: gray;
    transition: all 350ms;
    margin-left: 20px;

    :hover{
        cursor: pointer;
        color: silver;
    }
`;
const LoveIcon = styled(AiOutlineHeart)`
    font-size: 30px;
    color: gray;
    transition: all 350ms;
    margin-left: 20px;

    :hover{
        cursor: pointer;
        color: silver;
    }
`;
const Icons = styled.div`
    display: flex;
    justify-content: space-between;
`;
const DotIcon = styled(BsThreeDots)`
    color: silver;
    font-size: 30px;
`;
const PostImage = styled.img`
    width: 100%;
    height: 500px;
    object-fit: cover;
`;
const Hold = styled.div`
    display: flex;
`;
const Profile = styled.div``;
const ProfileHolder = styled.div`

`;
const ProfileName = styled.div`
    font-weight: 700;
    font-size: 20px;
`;
const ImageProfile = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    background-color: gray;
    outline: 4px solid purple;
    border: 2px solid transparent;
    background-clip: content-box;
    border-radius: 50%;
    margin-right: 15px;
`;
const Top = styled.div`
    display: flex;
    margin: 20px;
    padding: 10px 0;
    justify-content: space-between;
    align-items: center;
`;
const PostBuild = styled.div`
    margin: 7px;
    background-color: white;
    border-radius: 7px;
`;
const Name = styled.div``;
const Holder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Image = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    background-color: gray;
    outline: 4px solid purple;
    border: 2px solid transparent;
    background-clip: content-box;
`;
const TopBuild = styled.div`
    padding: 20px 0;
    /* padding-left: 20px; */
    background-color: white;
    border-radius: 7px;

    display: flex;
    flex-direction: column;
    /* align-items: center; */
`;
const Container = styled.div`
    width: 100%;
`;