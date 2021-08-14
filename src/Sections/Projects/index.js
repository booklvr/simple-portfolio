import React from 'react'
import styled from 'styled-components/macro'
// import sitOnLedgeLong from '../../assets/sittingOnLedgeLongest.svg'
// import Slider from 'react-slick'
import Card from '../../components/Card'
import CardVertical from '../../components/CardVertical'
import SectionTitle from '../../components/SectionTitle'

// import '../../../node_modules/slick-carousel/slick/slick.css'
// import '../../../node_modules/slick-carousel/slick/slick-theme.css'

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  color: white;
`

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  /* margin: 1rem; */
  /* margin-top: 3rem; */

  @media only Screen and (max-width: 100em) {
    flex-direction: column;
  }
`

const ProjectSection = () => {
  return (
    <ProjectsContainer id='projects'>
      <SectionTitle reverse={true} title="Things I've Developed"></SectionTitle>
      <ProjectCardContainer>
        <Card
          reverse={true}
          title='SpeedQuiz'
          text='This site facilitates a charades type game, intended for English students.  Students are given a list of words and they must help their teammates guess as many words as possible within a time limit, without saying the word.'
          image='speedquiz_thumbnail'
          link='https://speedquiz.classpoint.ca'
          git='https://github.com/booklvr/speedQuiz'
          tags={[
            'Html5',
            'Sass',
            'Bootstrap',
            'React',
            'Redux',
            'Axios',
            'JSON Webtokens',
            'NodeJs',
            'Express',
            'MongoDB',
            'Parcel',
            'NGinx',
          ]}
        />
        <Card
          title='Classpoint'
          text='Classpoint helps teachers to keep track of their students points for classroom games.  Classlists are saved, and games can be set up as individual games, team games, or boys vs girls.'
          image='classpoint_thumbnail'
          link='https://classpoint.ca'
          git='https://github.com/booklvr/class_point2'
          tags={[
            'Pug',
            'Sass',
            'ES6',
            'NodeJs',
            'Express',
            'MongoDB',
            'Babel',
            'Parcel',
            'Axios',
            'Passport',
            'Google OAuth2',
            'NGinx',
          ]}
        />
        <Card
          reverse={true}
          title='Scategories'
          text='Scattergories is a creative-thinking category-based game.  The objective is to score points by uniquely naming objects within a set of categories, given an initial letter, within a time limit.'
          image='scategories_thumbnail'
          link='https://scategories.classpoint.ca'
          git='https://github.com/booklvr/scategories-esl'
          tags={[
            'HTML5',
            'Sass',
            'Bootstrap',
            'React',
            'Redux',
            'Babel',
            'Parcel',
          ]}
        />

        <Card
          title='ConnectFour'
          text='This site uses connect four, a tic-tac-toe-like game in which players alternately place pieces on a vertical board where the first player to achieve a line of four connected pieces wins the game.  It is adapted as a tool to teach English as students must call out some target language to choose their column.'
          image='connectfour_thumbnail'
          link='https://connectfour.classpoint.ca'
          git='https://github.com/booklvr/connectFour'
          tags={[
            'Pug',
            'Sass',
            'Bootstrap',
            'ES6',
            'Express',
            'MongoDB',
            'Cloudinary',
            'Multer',
            'Passport',
            'Google OAuth2',
            'Parcel',
            'Babel',
            'NGinx',
          ]}
        />
        <CardVertical
          title='SpeedQuiz'
          text='This site facilitates a charades type game, intended for English students.  Students are given a list of words and they must help their teammates guess as many words as possible within a time limit, without saying the word.'
          image='speedquiz_thumbnail'
          link='https://speedquiz.classpoint.ca'
          git='https://github.com/booklvr/speedQuiz'
          tags={[
            'Html5',
            'Sass',
            'Bootstrap',
            'React',
            'Redux',
            'Axios',
            'JSON Webtokens',
            'NodeJs',
            'Express',
            'MongoDB',
            'Parcel',
            'NGinx',
          ]}
        />
        <CardVertical
          title='Classpoint'
          text='Classpoint helps teachers to keep track of their students points for classroom games.  Classlists are saved, and games can be set up as individual games, team games, or boys vs girls.'
          image='classpoint_thumbnail'
          link='https://classpoint.ca'
          git='https://github.com/booklvr/class_point2'
          tags={[
            'Pug',
            'Sass',
            'ES6',
            'NodeJs',
            'Express',
            'MongoDB',
            'Babel',
            'Parcel',
            'Axios',
            'Passport',
            'Google OAuth2',
            'NGinx',
          ]}
        />
        <CardVertical
          title='Scategories'
          text='Scattergories is a creative-thinking category-based game.  The objective is to score points by uniquely naming objects within a set of categories, given an initial letter, within a time limit.'
          image='scategories_thumbnail'
          link='https://scategories.classpoint.ca'
          git='https://github.com/booklvr/scategories-esl'
          tags={[
            'HTML5',
            'Sass',
            'Bootstrap',
            'React',
            'Redux',
            'Babel',
            'Parcel',
          ]}
        />

        <CardVertical
          title='ConnectFour'
          text='This site uses connect four, a tic-tac-toe-like game in which players alternately place pieces on a vertical board where the first player to achieve a line of four connected pieces wins the game.  It is adapted as a tool to teach English as students must call out some target language to choose their column.'
          image='connectfour_thumbnail'
          link='https://connectfour.classpoint.ca'
          git='https://github.com/booklvr/connectFour'
          tags={[
            'Pug',
            'Sass',
            'Bootstrap',
            'ES6',
            'Express',
            'MongoDB',
            'Cloudinary',
            'Multer',
            'Passport',
            'Google OAuth2',
            'Parcel',
            'Babel',
            'NGinx',
          ]}
        />
      </ProjectCardContainer>
    </ProjectsContainer>
  )
}

export default ProjectSection

// <SitOnLedge>
//   <img src={sitOnLedgeLong} alt='man on ledge' />
// </SitOnLedge>

// <CurvedLine />
