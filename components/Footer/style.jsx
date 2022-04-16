import styled from 'styled-components';

export const FooterSite = styled.footer`
    background: #101010;
    display: flex;
    border-top: 3px solid darkcyan;
    border-spacing: 100px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    a {
        color: wheat;
        margin: 0.1rem;

        &:hover {
            color: blue;
        }
    }
    p {
        color: wheat;
    }
`;