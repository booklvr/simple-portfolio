const { createGlobalStyle } = require('styled-components')

export const GlobalStyle = createGlobalStyle`

${'' /* Variables */}

:root{
   /* Colors */
  --background: #f7f7f7;
  --black: #000000FF;
  --purple: #6449E7;
  --grey: #C7D3D4FF;
  --white: #fff;
  --nav: #35353f;
  --nav2: #3f3d56;
  --primary: #303f9f;
  --primaryLight: #7986cd;
//   --primary: #1a237e;
  --darkShadow: rgba(136, 143, 140);
  --lightShadow: rgba(255, 255, 255);
  --fontWhite: #231f20;
  --fontLight: #767676;
  --fontMedium: #35353f;

    --brShadow: 6px 6px 15px rgba(0,0,0,0.5);
  --tlShadow: -6px -6px 15px rgba(255,255,255,0.8);
}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}
html{
//   scroll-behavior:smooth;
}
    body,
    html,
    a {
        font-family: 'Poppins', sans-serif;
            }
    body {

        // margin:0;
        // padding:0;
        border: 0;
        outline: 0;
        

        overflow-x: hidden;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin:0;
        padding:0;
    }
    a {

        text-decoration: none;
        outline: none;
    }
    button{
        border:none;
        outline:none;
        &:focus{
            outline:none;
        }
    }

    *:focus {
        outline: none;
    }

    img {
        // width: 100%;
        height: auto;
    }

    .slick-prev, .slick-next {
        font-size: 15px !important;
      }
      
       .slick-prev:before, .slick-next:before  {
        content: '' !important;
      }
`
