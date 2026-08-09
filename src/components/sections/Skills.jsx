import styled from "styled-components";
import { motion } from "framer-motion";
import { skills } from "../../data/constants";

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

const SkillsGrid = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Skill = styled(motion.div)`
  --accent: ${({ $accent }) => $accent};
  position: relative;
  background: linear-gradient(
    150deg,
    ${({ theme }) => theme.card} 0%,
    ${({ theme }) => theme.card} 65%,
    ${({ $accent }) => $accent}12 100%
  );
  border: 1px solid ${({ theme }) => theme.card_light};
  border-radius: 18px;
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${({ $accent }) => $accent}, transparent);
    border-radius: 18px 18px 0 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -50px;
    right: -50px;
    width: 140px;
    height: 140px;
    background: radial-gradient(circle, ${({ $accent }) => $accent}30 0%, transparent 70%);
    opacity: 0.3;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ $accent }) => $accent}70;
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.35),
      0 0 30px ${({ $accent }) => $accent}20;
  }

  &:hover::after {
    opacity: 0.6;
  }
`;

const CategoryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;
  border-bottom: 1px solid ${({ theme }) => theme.card_light};
`;

const CategoryLabel = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  letter-spacing: -0.2px;
`;

const CategoryCount = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: ${({ $accent }) => $accent};
  background: ${({ $accent }) => $accent}18;
  border: 1px solid ${({ $accent }) => $accent}35;
  padding: 4px 10px;
  border-radius: 999px;
  letter-spacing: 0.5px;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

const SkillItem = styled(motion.div)`
  --accent: ${({ $accent }) => $accent};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary + "dd"};
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.card_light};
  border-radius: 9px;
  padding: 8px 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: default;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ $accent }) => $accent}80;
    color: ${({ $accent }) => $accent};
    transform: translateY(-2px);
    background: ${({ $accent }) => $accent}10;
  }
`;

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  flex-shrink: 0;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.08));
`;

const SkillIconWrap = styled.span`
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  flex-shrink: 0;
`;

const CATEGORY_ACCENTS = {
  Languages: "#854CE6",
  Frontend: "#0ea5e9",
  "Backend & APIs": "#22c55e",
  "Databases & Data": "#f59e0b",
  "AI / LLM": "#ec4899",
  "Cloud & DevOps": "#38bdf8",
};

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Eyebrow
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          — Toolkit
        </Eyebrow>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & <span>Technologies</span>
        </Title>
        <Desc
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A production-tested stack across web, mobile, backend, data and AI — the
          tools I reach for when shipping real systems for real users.
        </Desc>

        <SkillsGrid
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {skills.map((skill, index) => {
            const accent = CATEGORY_ACCENTS[skill.title] || "#854CE6";
            return (
              <Skill
                key={`skill-${index}`}
                $accent={accent}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <CategoryRow>
                  <CategoryLabel>{skill.title}</CategoryLabel>
                  <CategoryCount $accent={accent}>
                    {skill.skills.length}
                  </CategoryCount>
                </CategoryRow>
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem key={`skill-x-${index_x}`} $accent={accent}>
                      <SkillIconWrap>
                        <SkillImage
                          src={item.image}
                          alt=""
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </SkillIconWrap>
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            );
          })}
        </SkillsGrid>
      </Wrapper>
    </Container>
  );
};

export default Skills;
