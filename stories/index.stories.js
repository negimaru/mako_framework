import React from "react";
import {storiesOf} from '@storybook/react';
import styled, {createGlobalStyle} from "styled-components";


const MainMenu = styled.div`
            box-shadow: 0px 0px 0px 6px rgba(199,204,200,1);
            border-radius: 3px;
            padding: 10px;
            background: linear-gradient(135deg, #1051af 0%,#040017 86%);
            width: 80%;
            display: flex;
            flex-direction: column;`;


storiesOf('Fonts', module)
    .add('reactor7', () => <MainMenu>ESTO TENDRIA QUE SER UN MENUSACO TOP</MainMenu>);


storiesOf('Menus', module)
    .add('Main', () => <MainMenu>ESTO TENDRIA QUE SER UN MENUSACO TOP</MainMenu>);


