import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
const theme = { };

import fontReactor7 from '../fonts/Reactor7.woff';
const GlobalStyle = createGlobalStyle`

 @font-face {
    font-family:'Reactor7';
    src: url(${fontReactor7}) format('woff');       
    font-weight:normal;
    font-style:normal;
  }
  
  body {    
    font-family:'Reactor7';
    font-weight:normal;
	font-style:normal;
	color : white;
	font-weight : 400 ; 
  }`;


const ThemeWrapper = storyFn => (
  <ThemeProvider theme={theme}>
      <>
      <GlobalStyle />
      <div style={{ padding: '40px' }}>
          {storyFn()}
      </div>
    </>
  </ThemeProvider>
);



// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(ThemeWrapper);

configure(loadStories, module);
