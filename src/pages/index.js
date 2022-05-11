import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import { RiInformationFill } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#4169e1",
          padding: "1rem",
        }}
      >
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.8rem",
          }}
        >
          <RiInformationFill
            style={{ fontSize: "2rem", marginRight: "1rem" }}
          />
          <span>
            A complete redesign of my portfolio will be available in a few
            months with new projects.
          </span>
        </p>
      </div>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
        <Acomplishments />
      </Layout>
    </>
  );
};

export default Home;
