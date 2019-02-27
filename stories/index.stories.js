import React from "react";
import {document, console} from 'global';
import {storiesOf} from '@storybook/html';
import styled from 'styled-components'

import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    src:url('./fonts/Reactor7.eot');
    src:url('./fonts/Reactor7.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Reactor7.woff') format('woff'),
    url('./fonts/Reactor7.ttf') format('truetype'),
    url('./fonts/Reactor7.svg#Reactor7') format('svg');
    font-family:'Reactor7';
    font-weight:normal;
	font-style:normal;
  }`;



const mainMenu = styled.div`
            box-shadow: 0px 0px 0px 6px rgba(199,204,200,1);
            border-radius: 3px;
            padding: 10px;
            background: linear-gradient(135deg, #1051af 0%,#040017 86%);
            width: 80%;
            display: flex;
            flex-direction: column;`;

const Menu = () => {
    return mainMenu;
};


storiesOf('Fonts', module)
    .add('reactor7', () => ' <Menu>ESTO TENDRIA QUE SER UN MENUSACO TOP</Menu>');


storiesOf('Menus', module)
    .add('Main', () => ' <Menu>ESTO TENDRIA QUE SER UN MENUSACO TOP</Menu>');


