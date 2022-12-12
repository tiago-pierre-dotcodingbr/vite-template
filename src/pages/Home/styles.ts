import styled from 'styled-components';

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    margin-left: 40px;
`;

export const Logo = styled.img`
    width: 100px;
    padding-right: 30px;
    border-right: 1px solid ${({ theme }) => theme.colors.purple};
`;
