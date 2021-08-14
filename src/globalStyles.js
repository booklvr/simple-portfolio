const { createGlobalStyle } = require('styled-components')

export const GlobalStyle = createGlobalStyle`

${'' /* Variables */}

:root{
   /* Colors */
  --background: #eff7f9;
  --black:#000000FF;
  --purple: #6449E7;
  --grey:#C7D3D4FF;
  --white:#fff;
  --nav:#35353f;
  --nav2:#3f3d56;
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
`
