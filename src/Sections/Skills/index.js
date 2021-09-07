// This is the services section.  It details the possible services offered
import styled from 'styled-components/macro'
import node from '../../assets/node.svg'
import html5 from '../../assets/html5.svg'
import sass from '../../assets/sass.svg'
import mongodb from '../../assets/mongodb.svg'
import redux from '../../assets/redux.svg'
import react from '../../assets/react.svg'

const SkillsSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;

  @media only Screen and (max-width: 64em) {
    margin: 0;
    margin-top: 3rem;
    align-items: center;
  }
`

const SkillsInnerContainer = styled.div`
  width: 30rem;
  position: relative;
  display: flex;
  flex-direction: column;

  @media only Screen and (max-width: 42em) {
    width: 100%;
    /* padding: 1rem; */
  }

  /* @media only Screen and (max-width: 21em) {
    max-width: 19rem;
    min-width: 19rem;
  } */
`

const SkillsHeader = styled.h2`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: var(--fontMain);

  @media only Screen and (max-width: 42em) {
    font-size: 2.5rem;
    padding: 2rem 0;
  }
`

const SkillRowCentered = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 3rem;

  @media only Screen and (max-width: 42em) {
    .center-row {
      height: 5rem;
    }
  }

  &:first-of-type {
    margin-bottom: 1rem;

    @media only Screen and (max-width: 42em) {
      margin-bottom: 1.5rem;
    }
  }
  &:last-of-type {
    margin-top: 1rem;

    @media only Screen and (max-width: 45em) {
      margin-top: 1.5rem;
    }
  }
`

const SkillRowCenterSpacer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 3rem;

  @media only Screen and (max-width: 42em) {
    min-height: 5rem;
  }
`

const SkillRowSpaceBetween = styled.div`
  max-height: 4rem;
  overflow: visible;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Skill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1.3rem);
  color: var(--fontMain);
  /* width: 10rem; */
  padding: 0.5rem 1rem;
  background: var(--background);
  border-radius: 10px;
  box-shadow: 8px 8px 15px #adadad, -8px -8px 15px #ffffff;

  @media only Screen and (max-width: 42em) {
    font-size: 1rem;
  }
`

const SkillLogo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 0.5rem;
  /* padding: 1rem; */
  padding: 0.5rem;
  border-radius: 50%;
  box-shadow: 8px 8px 15px #adadad inset, -8px -8px 15px #ffffff inset;

  @media only Screen and (max-width: 42em) {
    width: 30px;
    height: 30px;
  }
`

const SkillsSection = () => {
  return (
    <SkillsSectionContainer id='skills'>
      <SkillsInnerContainer>
        <SkillsHeader>Skills</SkillsHeader>
        <SkillRowCentered>
          <Skill>
            <SkillLogo src={node} />
            Node
          </Skill>
        </SkillRowCentered>
        <SkillRowSpaceBetween>
          <Skill>
            <SkillLogo src={react} />
            React
          </Skill>
          <Skill>
            <SkillLogo src={html5} />
            HTML5
          </Skill>
        </SkillRowSpaceBetween>
        <SkillRowCenterSpacer />
        <SkillRowSpaceBetween>
          <Skill>
            <SkillLogo src={redux} />
            Redux
          </Skill>
          <Skill>
            <SkillLogo src={sass} />
            Sass
          </Skill>
        </SkillRowSpaceBetween>
        <SkillRowCentered>
          <Skill>
            <SkillLogo src={mongodb} />
            MongoDB
          </Skill>
        </SkillRowCentered>
      </SkillsInnerContainer>
    </SkillsSectionContainer>
  )
}

export default SkillsSection

// <SitFrontFace>
//           <img src={sitFrontFace} alt='sitting man' />
//         </SitFrontFace>

// <StandWithLaptop>
//           <img src={standWithLaptop} alt='standWithLaptop' />
//         </StandWithLaptop>

// <LayingDown>
//           <img src={layingDown} alt='sitting man' />
//         </LayingDown>
