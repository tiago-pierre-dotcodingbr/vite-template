import styled from 'styled-components';

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TextContainer = styled.div`
    margin-left: 30px;
`;

export const Title = styled.h1``;

export const Text = styled.p``;

export const Logo = styled.img`
    width: 70px;
    border-right: 1px solid ${({ theme }) => theme.colors.purple};
    padding-inline-end: 5px;
`;
