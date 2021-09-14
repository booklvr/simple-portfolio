import styled from 'styled-components/macro'
import React, { useState } from 'react'

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { pdfjs } from 'react-pdf'

import resume from '../../assets/resume.pdf'
import {
  FaAngleLeft,
  FaAngleRight,
  FaDownload,
  FaArrowLeft,
} from 'react-icons/fa'
import useWindowWidth from '../../hooks/getWindowWidth'
// import resume from '../../assets/resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.1.266/pdf.worker.js`

const ResumePageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: white;
  padding-top: 10px;
`

const DocumentContainer = styled(Document)`
  overflow-x: hidden;
`

const PDFPage = styled(Page)`
  border: 1px solid black;
  overflow-x: hidden;
  margin-bottom: 5px;
`

const ResumeHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 20px;
  width: 100%;

  @media only Screen and (max-width: 42em) {
    padding: 0 10px 20px;
  }

  a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
    width: 100px;
  }
`

const PageNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0 20px;

    @media only Screen and (max-width: 42em) {
      margin: 0 5px;
    }
  }
  svg {
    height: 20px;
    cursor: pointer;
  }
`

const BackButton = styled.div`
  height: 20px;
  width: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }
`

const Resume = ({ location, history }) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const width = useWindowWidth()

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1)
    }
  }

  const previousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const goBack = () => {
    history.goBack()
  }

  return (
    <ResumePageContainer>
      <ResumeHeaderContainer>
        <BackButton onClick={goBack}>
          <FaArrowLeft /> Back
        </BackButton>
        <PageNumberContainer>
          <FaAngleLeft onClick={previousPage} />
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <FaAngleRight onClick={nextPage} />
        </PageNumberContainer>

        <a style={{ textDecoration: 'none' }} href={resume}>
          download <FaDownload />
        </a>
      </ResumeHeaderContainer>
      <DocumentContainer file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <PDFPage pageNumber={pageNumber} width={width} />
      </DocumentContainer>
    </ResumePageContainer>
  )
}

export default Resume
