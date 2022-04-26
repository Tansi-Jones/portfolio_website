import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />
          I'm Tansi Jones
        </SectionTitle>
        <SectionText>A Web Developer and Cloud Architech</SectionText>
        <Button onClick={props.handleClick}>
          <a style={{ color: "#fff" }} href="mailto:tsijones0@gmail.com">
            Let's Connect
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
