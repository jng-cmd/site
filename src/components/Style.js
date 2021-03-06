import {createGlobalStyle} from 'styled-components';
const opacityDelay=0.2;
export const Style = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: Roboto, sans-serif;
        transition: all 0.25s linear;
    }
    a{
        text-decoration: none;
        color: ${({ theme }) => theme.text};
        opacity: 0.5;
        transition: opacity ${opacityDelay}s ease-out;
        -moz-transition: opacity ${opacityDelay}s ease-out;
        -webkit-transition: opacity ${opacityDelay}s ease-out;
        -o-transition: opacity ${opacityDelay}s ease-out;
    }
    a:hover{
        opacity: 1.0;
        transition: opacity ${opacityDelay}s ease-out;
        -moz-transition: opacity ${opacityDelay}s ease-out;
        -webkit-transition: opacity ${opacityDelay}s ease-out;
        -o-transition: opacity ${opacityDelay}s ease-out;
    }
    html{
        scroll-behavior: smooth;

    }
    li{
        list-style: none;
    }
    .navbar{
        position: fixed;
        padding-left: 1vw;
        height: 100vh;
        left: 0;
        width: 25%;
    }
    #lightswitch{
        
    }
    
      #landing, #about{
        height: 100vh;
        min-height:500px;
      }
      #contact ul, ul.tagbox{
        padding-left:0;
      }
      #contact ul li{
        display: inline;
        padding-right: 50px;
      }
      .Component-root-1, .jss1{
        margin: 0 !important;
      }
      
      .project:hover{
        opacity:1;
        transition: opacity ${opacityDelay}s ease-out;
        -moz-transition: opacity ${opacityDelay}s ease-out;
        -webkit-transition: opacity ${opacityDelay}s ease-out;
        -o-transition: opacity ${opacityDelay}s ease-out;
      }
      .project{
          opacity:0.5;
          transition: opacity ${opacityDelay}s ease-out;
          -moz-transition: opacity ${opacityDelay}s ease-out;
          -webkit-transition: opacity ${opacityDelay}s ease-out;
          -o-transition: opacity ${opacityDelay}s ease-out;
          height: 250px;
          margin-bottom:30px;
          
      }

    Row Col{
      opacity:0.5;
    }
    .container{
      width: 50%;
      min-width:400px;
    }

    .credits{
      font-style:italic;
      opacity:50%;
    }
    ul.tagbox li.tag{
      display: inline-block;
      padding: 10px;
      text-align: center;
      
      margin-right: 10px;
      border-radius: 250px;
      background: ${({ theme }) => theme.tags};
    }
      `;
