import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { services } from "../../data/constants";
import {
  DesignServices,
  PhoneIphone,
  Terminal,
  AutoAwesome,
  ArrowForward,
} from "@mui/icons-material";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 16px 60px;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Eyebrow = styled(motion.span)`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 14px;
`;

const Title = styled(motion.h2)`
  font-size: 46px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 0 12px 0;
  text-align: center;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  span {
    background: linear-gradient(90deg, #854ce6, #d16bff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Desc = styled(motion.p)`
  font-size: 17px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 640px;
  text-align: center;
  line-height: 1.65;
  margin: 0 0 56px 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const Card = styled(motion.div)`
  --accent: ${({ $accent }) => $accent};
  position: relative;
  background: linear-gradient(
    140deg,
    ${({ theme }) => theme.card} 0%,
    ${({ theme }) => theme.card} 60%,
    ${({ $accent }) => $accent}18 100%
  );
  border: 1px solid ${({ theme }) => theme.card_light};
  border-radius: 20px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
  overflow: hidden;
  cursor: default;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: 20px;
    background: linear-gradient(
      120deg,
      transparent 20%,
      ${({ $accent }) => $accent}66 50%,
      transparent 80%
    );
    background-size: 200% 100%;
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: ${shimmer} 6s linear infinite;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: -60px;
    right: -60px;
    width: 180px;
    height: 180px;
    background: radial-gradient(
      circle,
      ${({ $accent }) => $accent}40 0%,
      transparent 70%
    );
    opacity: 0.35;
    transition: opacity 0.4s ease, transform 0.4s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ $accent }) => $accent}80;
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.35),
      0 0 40px ${({ $accent }) => $accent}25;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover::after {
    opacity: 0.7;
    transform: scale(1.15);
  }
`;

const IconRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const IconBadge = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ $accent }) => $accent}30 0%,
    ${({ $accent }) => $accent}10 100%
  );
  border: 1px solid ${({ $accent }) => $accent}50;
  color: ${({ $accent }) => $accent};
  box-shadow: 0 8px 20px ${({ $accent }) => $accent}20;

  svg {
    font-size: 30px;
  }
`;

const CardNumber = styled.span`
  font-size: 44px;
  font-weight: 800;
  line-height: 1;
  color: ${({ theme }) => theme.text_primary};
  opacity: 0.08;
  letter-spacing: -2px;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 0 0 0;
  letter-spacing: -0.3px;
`;

const CardDesc = styled.p`
  font-size: 14.5px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.card_light};
  margin: 4px 0;
`;

const TechLabel = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 2px;
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

const TechChip = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ $accent }) => $accent};
  background: ${({ $accent }) => $accent}12;
  padding: 5px 12px;
  border-radius: 999px;
  border: 1px solid ${({ $accent }) => $accent}30;
`;

const CtaBar = styled(motion.div)`
  margin-top: 56px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CtaPrimary = styled.a`
  padding: 14px 32px;
  background: linear-gradient(135deg, #854ce6 0%, #b552ff 100%);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  box-shadow: 0 8px 24px rgba(133, 76, 230, 0.4);
  transition: all 0.25s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(133, 76, 230, 0.55);
  }
`;

const CtaGhost = styled.a`
  padding: 14px 28px;
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.card_light};
  font-weight: 600;
  font-size: 15px;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

const ICON_MAP = [DesignServices, PhoneIphone, Terminal, AutoAwesome];
const ACCENTS = ["#854CE6", "#22c55e", "#0ea5e9", "#f59e0b"];

const Services = () => {
  return (
    <Container id="Services">
      <Wrapper>
        <Eyebrow
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          — Services
        </Eyebrow>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What I <span>Build For You</span>
        </Title>
        <Desc
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Need a website, a custom system, a mobile app or an AI-powered platform?
          These are the things I ship to production for clients — designed, coded,
          deployed and maintained end-to-end.
        </Desc>

        <Grid
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {services.map((s, i) => {
            const Icon = ICON_MAP[i] || DesignServices;
            const accent = ACCENTS[i] || "#854CE6";
            return (
              <Card
                key={s.id}
                $accent={accent}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                }}
              >
                <IconRow>
                  <IconBadge $accent={accent}>
                    <Icon />
                  </IconBadge>
                  <CardNumber>0{i + 1}</CardNumber>
                </IconRow>
                <CardTitle>{s.title}</CardTitle>
                <CardDesc>{s.description}</CardDesc>
                <Divider />
                <TechLabel>Stack</TechLabel>
                <TechRow>
                  {s.tech.map((t, j) => (
                    <TechChip key={j} $accent={accent}>
                      {t}
                    </TechChip>
                  ))}
                </TechRow>
              </Card>
            );
          })}
        </Grid>

        <CtaBar
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <CtaPrimary href="#Contact">
            Start a Project <ArrowForward fontSize="small" />
          </CtaPrimary>
          <CtaGhost href="#Projects">See Live Work</CtaGhost>
        </CtaBar>
      </Wrapper>
    </Container>
  );
};

export default Services;
