import { SectionSubHeading } from "../UI/Headings";
import { CentredSection } from "../UI/Section";
import CSS from "../UI/SVGs/CSS";
import Express from "../UI/SVGs/Express";
import Git from "../UI/SVGs/Git";
import HTML from "../UI/SVGs/HTML";
import JavaScript from "../UI/SVGs/JavaScript";
import Next from "../UI/SVGs/Next";
import Node from "../UI/SVGs/Node";
import React from "../UI/SVGs/React";
import Router from "../UI/SVGs/Router";
import StyledComponents from "../UI/SVGs/StyledComponents";
import Tailwind from "../UI/SVGs/Tailwind";
import Supsbase from "../UI/SVGs/supsbase";
import Mongoose from "../UI/SVGs/mongoose";

export default function Tools() {
  return (
    <CentredSection>
      <SectionSubHeading>Technologies and Tools I use:</SectionSubHeading>

      <div className="w-[95%] flex flex-wrap items-center justify-around gap-12">
       <React/>
       <Router/>
       <Next/>
       <Express/>
       <Node/>
       <Mongoose/>
       <Tailwind/>
       <JavaScript/>
       <Supsbase/>
       <StyledComponents/>
       <HTML/>
       <CSS/>
       <Git/>  
      </div>

    </CentredSection>
  );
}
