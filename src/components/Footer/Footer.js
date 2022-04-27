import React from "react";
import { RiDribbbleFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">+90-533-862-6146</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:tsijones0@gmail.com">
            tsijones0@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Made with ❤ by Tansi Jones</Slogan>
        </CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
