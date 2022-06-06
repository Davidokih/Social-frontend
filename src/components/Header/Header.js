import React from 'react';
import styled from 'styled-components';

import { AiFillHome, AiOutlineHeart } from 'react-icons/ai';
import { BiAddToQueue } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Hold>
                    <Logo>Social Build</Logo>
                    <SearchBar>
                        <Icon />
                        <SearchInput placeholder='Search' />
                    </SearchBar>
                </Hold>
                <Hold>
                    <HomeIcon />
                    <PostIcon />
                    <LoveIcon />
                    <Image />
                </Hold>
            </Wrapper>
        </Container>
    );
};

export default Header;

const Image = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    background-color: red;
`;
const LoveIcon = styled(AiOutlineHeart)`
    color: #000000;
    font-size: 30px;
    margin: 0 10px;
    cursor: pointer;
`;
const PostIcon = styled(BiAddToQueue)`
    color: #000000;
    font-size: 30px;
    margin: 0 10px;
    cursor: pointer;
`;
const HomeIcon = styled(AiFillHome)`
    color: #000000;
    font-size: 30px;
    margin: 0 10px;
    cursor: pointer;
`;
const SearchInput = styled.input`
    outline: none;
    border: 0;
    background-color: transparent;
    font-size: 20px;
    width: 340px;
`;
const SearchBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 350px;
    border: 1px solid silver;
    height: 40px;
    background-color: lightgray;
    border-radius: 5px;
    padding: 0 10px;
    margin-left: 20px;
`;
const Icon = styled(BsSearch)`
    margin: 0 8px;
`;
const Logo = styled.div`
    margin-left: 40px;
    font-weight: 500;
    font-size: 20px;
    font-style: italic;
`;
const Hold = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
`;
const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid silver;
    position: fixed;
    background-color: #fff;
`;