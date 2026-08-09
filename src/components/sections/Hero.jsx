import React from "react";
import styled from "styled-components";
import { Bio, stats } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/kasasa.jpeg";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px 60px;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 96%, 0 100%);

  @media (max-width: 960px) {
    padding: 60px 16px 40px;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1180px;
  gap: 40px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const Eyebrow = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary + "15"};
  border: 1px solid ${({ theme }) => theme.primary + "40"};
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 20px;
  width: fit-content;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    background: #22c55e;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.2);
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 54px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.15;
  margin: 0 0 12px 0;

  @media (max-width: 960px) {
    font-size: 38px;
  }

  span {
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, #d16bff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 26px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 22px;

  @media (max-width: 960px) {
    font-size: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Span = styled.div`
  color: ${({ theme }) => theme.primary};
`;

const Tagline = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  max-width: 580px;

  @media (max-width: 960px) {
    font-size: 16px;
    text-align: center;
  }
`;

const SubTitle = styled.p`
  font-size: 15.5px;
  line-height: 1.75;
  margin: 0 0 30px 0;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 580px;

  @media (max-width: 960px) {
    font-size: 14.5px;
    text-align: center;
  }
`;

const RoleBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const RoleBadge = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.card_light};
  padding: 5px 12px;
  border-radius: 999px;
`;

const CtaRow = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const PrimaryCta = styled.a`
  text-decoration: none;
  padding: 14px 28px;
  background: linear-gradient(135deg, #854ce6 0%, #b552ff 100%);
  color: white;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  box-shadow: 0 8px 24px rgba(133, 76, 230, 0.35);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(133, 76, 230, 0.5);
  }
`;

const SecondaryCta = styled.a`
  text-decoration: none;
  padding: 14px 26px;
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.card_light};
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

const ImgFrame = styled.div`
  position: relative;
  padding: 5px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(133, 76, 230, 0.7), rgba(213, 107, 255, 0.25));
  box-shadow: 0 20px 60px rgba(133, 76, 230, 0.25);

  &::after {
    content: "";
    position: absolute;
    inset: -14px;
    border-radius: 50%;
    border: 1px dashed rgba(133, 76, 230, 0.35);
    pointer-events: none;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 400px;
  height: 400px;
  object-fit: cover;
  display: block;
  border: 3px solid ${({ theme }) => theme.bg};

  @media (max-width: 640px) {
    width: 280px;
    height: 280px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

const StatsStrip = styled(motion.div)`
  max-width: 1180px;
  margin: 0 auto;
  padding: 24px 30px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 16px 16px 0;
  }
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.card_light};
  border-radius: 14px;
  padding: 18px 20px;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary + "60"};
    transform: translateY(-3px);
  }
`;

const StatValue = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  line-height: 1;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const StatLabel = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.35;
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAnimation />
        </HeroBg>

        <motion.div {...headContainerAnimation} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Eyebrow>Available for new projects — remote & Kampala</Eyebrow>
                <Title>
                  Hi, I'm <span>{Bio.name}</span>
                </Title>
                <TextLoop>
                  I build
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <Tagline>{Bio.tagline}</Tagline>
                <SubTitle>{Bio.description}</SubTitle>
                <RoleBadges>
                  <RoleBadge>🇺🇬 Kampala, Uganda</RoleBadge>
                  <RoleBadge>🏢 Currently at HoneyComb Technologies</RoleBadge>
                  <RoleBadge>🎓 BSc Software Engineering — Makerere University</RoleBadge>
                  <RoleBadge>💼 Open to freelance & full-time roles</RoleBadge>
                </RoleBadges>
              </motion.div>

              <CtaRow>
                <PrimaryCta href="#Contact">Hire Me</PrimaryCta>
                <SecondaryCta href={Bio.resume} target="_blank" rel="noopener noreferrer">
                  View Résumé
                </SecondaryCta>
                <SecondaryCta href="#Projects">See Work</SecondaryCta>
              </CtaRow>
            </HeroLeftContainer>

            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt options={{ max: 12, scale: 1.02, speed: 400 }}>
                  <ImgFrame>
                    <Img src={HeroImg} alt="Kasasa Livingstone Trevor — Full Stack Software Engineer in Uganda" />
                  </ImgFrame>
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>

      <StatsStrip
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {stats.map((s, i) => (
          <StatCard key={i}>
            <StatValue>{s.value}</StatValue>
            <StatLabel>{s.label}</StatLabel>
          </StatCard>
        ))}
      </StatsStrip>
    </div>
  );
};

export default Hero;
