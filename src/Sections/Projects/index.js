import React from 'react'
import styled from 'styled-components/macro'

import Card from '../../components/Card'
import CardVertical from '../../components/CardVertical'

//

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 5rem;
  margin-top: 5rem;

  @media only Screen and (max-width: 64em) {
    margin-top: 0rem;
  }

  @media only Screen and (max-width: 42em) {
    margin-bottom: 4.5rem;
    /* padding-top: 1.5rem; */
  }
`

const ProjectsHeader = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: var(--tlShadow), var(--brShadow);
  color: var(--background);

  @media only Screen and (max-width: 42em) {
    font-size: 4rem;
  }
  @media only Screen and (max-width: 40em) {
    font-size: 3.5rem;
  }
`

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  /* margin: 1rem; */
  /* margin-top: 3rem; */

  @media only Screen and (max-width: 62em) {
    flex-direction: column;
  }
`

const ProjectSection = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsHeader>Projects</ProjectsHeader>
      <ProjectCardContainer>
        <Card
          reverse={true}
          title='SpeedQuiz'
          text='This site facilitates a charades type game, intended for English students.  Students are given a list of words and they must help their teammates guess as many words as possible within a time limit, without saying the word.'
          image="speedquiz_thumbnail"
          video='speedquiz'
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
            'NGinx',
          ]}
        />
        <Card
          title='Classpoint'
          text='Classpoint helps teachers to keep track of their students points for classroom games.  Classlists are saved, and games can be set up as individual games, team games, or boys vs girls.'
          image="classpoint_thumbnail"
          video='classpoint'
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
          image="scategories_thumbnail"
          video='scategories'
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
          text='This site uses connect four, a game where opponents must connect 4 of their tiles in a row by dropping them down columns.  It is adapted as a tool to teach English as students must call out some target language to choose their column.'
          image="connectfour_thumbnail"
          video='connectfour'
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
          video='speedquiz'
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
          image="classpoint_thumbnail"
          video='classpoint'
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
          image="scategories_thumbnail"
          video='scategories'
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
          image="connectfour_thumbnail"
          video='connectfour'
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

