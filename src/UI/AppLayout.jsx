import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import navigateToSection from "../helpers/navigateToSection";
import Footer from "./Footer";

const MainContainer = styled.main`

  max-width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  position: relative; // for the Hamburger nad the language button.

`;

export default function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    if(location.hash){ 
      const sectionId = location.hash.slice(1);
      const section = document.getElementById(sectionId);

      if (section) navigateToSection(sectionId);
      }
  } ,[location]);

  return (
    <>
      <Header/>
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer/>
    </>
  );
}