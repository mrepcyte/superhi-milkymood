import React from 'react'
import {GlobalStyle, ImageContainer, Wrapper} from './styles'
import Header from './components/header'
import Footer from './components/footer'
import ImgBox from './components/imagebox'

const matrix = [0, 1, 2, 3]

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Footer />
      <Wrapper>
        <ImageContainer>
          {matrix.map((x, index) => (
            <ImgBox key={index} x={x} />
          ))}
        </ImageContainer>
      </Wrapper>
    </div>
  )
}

export default App
