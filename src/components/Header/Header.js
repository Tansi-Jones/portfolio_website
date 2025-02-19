import Link from "next/link";
import React from "react";
import { RiDribbbleFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Tansi-Jones" target="_blank">
        <RiGithubFill size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/tansi-jones/"
        target="_blank"
      >
        <RiLinkedinFill size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://dribbble.com/Tansi-Jones" target="_blank">
        <RiDribbbleFill size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
