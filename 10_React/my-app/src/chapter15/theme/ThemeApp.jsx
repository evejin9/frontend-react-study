import React from 'react';
import Blocks from './Blocks';
import styled, { ThemeProvider } from 'styled-components';

// 앱 전반적으로 사용할 색들을 테마로 만들어놓고 사용하면 좋음
// 디자이너에게 받은 디자인(컬러) 가이드를 참고하여 만듦
const theme = {
  white: '#fff',
  black: '#000',
  bodyBg: '#f4f5f6',
  grayBg: '#dfdfdf',
  disabled: '#f7f7f7',
  gray100: '#f1f1f1',
  gray200: '#eee',
  gray300: '#ccc',
  gray400: '#aaa',
  gray500: '#999',
  gray600: '#777',
  gray700: '#555',
  gray800: '#333',
  gray900: '#111',
  blue: '#41a1ea',
  indigo: '#727cf5',
  purple: '#6b5eae',
  pink: '#ff679b',
  red: '#f05b5b',
  orange: '#fd7e14',
  yellow: '#ffbc00',
  green: '#0acf97',
  teal: '#02a8b5',
  cyan: '#39afd1',
};

const Button = styled.button`
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.black};
  padding: 10px;
  margin: ${props => props.margin};
  margin-top: 5px;
  width: ${props => props.width};

  & + &{
    margin-left: 10px;
  }

  &:hover {
    background-color: ${props => props.theme.purple};
  }
  &:active {
    background-color: ${props => props.theme.cyan};
    width: 200px;
  }
`;

function ThemeApp(props) {
  return (
    <ThemeProvider theme={theme}>
      <Blocks />

      <Button width="100px" margin="0 0 0 5px">Button 1</Button>
      <Button width="100px">Button 2</Button>
    </ThemeProvider>
  );
}

export default ThemeApp;