import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme= createMuiTheme({
  palette:{
    primary:{
      main:'#732002'
      // light:'#d9501e'
    
  },
  secondary:{
    main:'#323e40'
    // light:'#d98014'
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);


