import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const MainContainer = styled.main`
    max-width: 90%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

`;

export default function AppLayout() {
    return (
        <>
            <Header/>
            <MainContainer>
                <Outlet/>
            </MainContainer>
        </>
    )
}

