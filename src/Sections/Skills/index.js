// This is the services section.  It details the possible services offered
import styled from 'styled-components'
import SectionTitle from '../../components/SectionTitle'

const SkillsSectionContainer = styled.div`
  width: 100%;
  
`

const SkillsSection = () => {
  return (
    <SkillsSectionContainer id='skills'>
      <SectionTitle title='Skills' />
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
