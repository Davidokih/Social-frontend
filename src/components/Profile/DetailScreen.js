import React, { useState } from "react";
import styled from "styled-components";
// import pix from "./babe.jpeg";

import { BsGrid3X3, BsBookmark, BsPersonBoundingBox } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdSlowMotionVideo } from "react-icons/md";

const DetailScreen = () => {
    const [ post, setPost ] = useState(true);
    const [ video, setVideo ] = useState(false);
    const [ save, setSave ] = useState(false);
    const [ tag, setTag ] = useState(false);

    return (
        <Container>
            <Wrapper>
                <Top>
                    <Image src='/esta bueno pero le ase falta algo de divertidad.jpg' />
                    <Contents>
                        <NameDetails>
                            <ProfileName>David_Okih</ProfileName>
                            <EditButton>Edit Profile</EditButton>
                            <Icon />
                        </NameDetails>

                        <NameDetails>
                            <Post>
                                <Count>{ 0 }</Count>
                                <Title>Posts</Title>
                            </Post>
                            <Post>
                                <Count>{ 0 }</Count>
                                <Title>Followers</Title>
                            </Post>
                            <Post>
                                <Count>{ 0 }</Count>
                                <Title>Following</Title>
                            </Post>
                        </NameDetails>

                        <Detail>
                            <Name>David_Okih</Name>
                            <Bio>
                                Cinematographer, Post production, Tech entrepreneur, public
                                speaker and a serial entrepreneur.
                            </Bio>
                            <WebSite href="#">Skillhub.com</WebSite>
                        </Detail>
                    </Contents>
                </Top>

                <Nav>
                    <NavHolder
                        bg={ post ? "bg" : "" }
                        onClick={ () => {
                            setPost(true);
                            setVideo(false);
                            setSave(false);
                            setTag(false);
                        } }
                    >
                        <NavIcon />
                        <Title cap fs>
                            Posts
                        </Title>
                    </NavHolder>
                    <NavHolder
                        bg={ video ? "bg" : "" }
                        onClick={ () => {
                            setPost(false);
                            setVideo(true);
                            setSave(false);
                            setTag(false);
                        } }
                    >
                        <NavIcon1 />
                        <Title cap fs>
                            Video
                        </Title>
                    </NavHolder>
                    <NavHolder
                        bg={ save ? "bg" : "" }
                        onClick={ () => {
                            setPost(false);
                            setVideo(false);
                            setSave(true);
                            setTag(false);
                        } }
                    >
                        <NavIcon2 />
                        <Title cap fs>
                            Save
                        </Title>
                    </NavHolder>
                    <NavHolder
                        bg={ tag ? "bg" : "" }
                        onClick={ () => {
                            setPost(false);
                            setVideo(false);
                            setSave(false);
                            setTag(true);
                        } }
                    >
                        <NavIcon3 />
                        <Title cap fs>
                            Tags
                        </Title>
                    </NavHolder>
                </Nav>

                <PostImage>
                    <ImagePost src='/esta bueno pero le ase falta algo de divertidad.jpg' />
                    <ImagePost src='/esta bueno pero le ase falta algo de divertidad.jpg' />
                    <ImagePost src='/esta bueno pero le ase falta algo de divertidad.jpg' />
                </PostImage>
            </Wrapper>
        </Container>
    );
};

export default DetailScreen;

const ImagePost = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
    /* margin: 5px; */
`;
const PostImage = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const NavIcon3 = styled(BsPersonBoundingBox)`
	font-size: 10px;
	margin-right: 3px;
`;

const NavIcon2 = styled(BsBookmark)`
	font-size: 10px;
	margin-right: 3px;
`;

const NavIcon1 = styled(MdSlowMotionVideo)`
	font-size: 10px;
	margin-right: 3px;
`;

const NavIcon = styled(BsGrid3X3)`
	font-size: 10px;
	margin-right: 3px;
`;

const NavHolder = styled.div`
	display: flex;
	align-items: center;
	margin-right: 30px;
	position: relative;
	:after {
		content: "";
		height: 2px;
		background-color: ${({ bg }) => (bg ? "purple" : "transparent")};
		width: 100%;
		position: absolute;
		top: -21px;
	}
	cursor: pointer;
`;

const Nav = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	border-top: 1px solid silver;
	border-bottom: 1px solid silver;
	padding: 20px 0;
`;

const WebSite = styled.a`
	color: rgba(16, 143, 233);
	font-style: italic;
	cursor: pointer;
	text-decoration: none;
`;
const Bio = styled.div``;

const Name = styled.div`
	font-weight: 500;
`;

const Detail = styled.div`
	font-size: 13px;
`;

const Title = styled.div`
	text-transform: ${({ cap }) => (cap ? "uppercase" : "normal")};
	font-size: ${({ fs }) => (fs ? "10px" : "12px")};
	font-weight: ${({ fs }) => (fs ? "500" : "normal")};
	color: ${({ fs }) => (fs ? "lightgray" : "black")};
`;

const Count = styled.div`
	font-weight: 500;
	margin-right: 5px;
`;

const Post = styled.div`
	display: flex;
	margin-right: 20px;
	font-size: 13px;
`;

const Icon = styled(FiSettings)`
	font-size: 30px;
	:hover {
		cursor: pointer;
	}
`;

const EditButton = styled.div`
	padding: 10px 20px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	margin-right: 20px;
	font-size: 12px;
	:hover {
		cursor: pointer;
	}
`;

const ProfileName = styled.div`
	font-size: 25px;
	font-weight: lighter;
	margin-right: 20px;
`;

const NameDetails = styled.div`
	display: flex;
	margin: 10px 0;
	align-items: center;
`;

const Contents = styled.div`
	display: flex;
	flex-direction: column;
`;

const Image = styled.img`
	width: 130px;
	height: 130px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 80px;
`;

const Top = styled.div`
	margin: 20px 40px;
	display: flex;
`;

const Wrapper = styled.div`
	width: 768px;
	/* background-color: white; */
`;

const Container = styled.div`
	padding-top: 70px;
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: #fafafa;
	height: 100%;
	min-height: calc(100vh - 70px);
`;