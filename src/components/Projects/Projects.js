import {
  BlogCard,
  CardInfo,
  ExternalLinkOne,
  ExternalLinkTwo,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import Image from "next/image";
import Link from "next/link";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <div
              style={{
                position: "relative",
                overflow: "auto",
                borderRadius: "10px",
                width: "100%",
                height: "20rem",
              }}
            >
              <Image
                src={p.image}
                alt={p.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <Hr />
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <div style={{ padding: "0 20px", margin: "25px 0" }}>
              <Link href={p.visit}>
                <a
                  style={{
                    background: "hsl(232.7,27.3%,23.7%)",
                    color: "#fff",
                    padding: "0.8rem 1rem",
                    borderRadius: "5px",
                    marginRight: "15px",
                  }}
                >
                  Website
                </a>
              </Link>

              <Link href={p.source}>
                <a
                  style={{
                    border: "2px solid hsl(232.7,27.3%,23.7%)",
                    color: "#fff",
                    padding: "0.8rem 1rem",
                    borderRadius: "5px",
                    marginRight: "15px",
                  }}
                  target="_blank"
                >
                  Source code
                </a>
              </Link>
            </div>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
