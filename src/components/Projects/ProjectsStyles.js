import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 5rem;
  row-gap: 5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.2);
  width: 300px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: left;
  z-index: 20;
  width: 100%;
  padding: 5px 20px;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 1.5rem 0 1rem;
  font-size: ${(props) => (props.title ? "2.5rem" : "1.7rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 0px 20px 10px;
  border-radius: 50px;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0 20px;
  display: flex;
  margin: 2rem 0;
`;

export const TagList = styled.ul`
  display: flex;
  padding: 1rem 2rem;
`;
export const Tag = styled.li`
  color: #ddd;
  font-style: italic;
  font-size: 1.4rem;
  padding: 0 1rem 0 0;
`;
