import { AppBar, Toolbar, IconButton, InputBase, Fade } from '@material-ui/core';
import logo from './images/logo-zapa.png';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <img src={logo} alt="Logo" style={{ width: '120px', height: '120px' }} />
        {/* <Typography variant="h6" style={{ marginLeft: '10px' }}>My Site</Typography> */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          
        </IconButton>
        <div style={{ margin: 'auto' }}>
          <Fade in={true}>
            <div>
              <IconButton  style={{ width: '4em' }}edge="start" color="inherit" aria-label="search">
                <SearchOutlinedIcon />
              </IconButton>
              <IconButton style={{ width: '4em' }} edge="start" color="inherit" aria-label="cuenta">
                <AccountCircleOutlinedIcon />
              </IconButton>
              <IconButton style={{ width: '4em' }}edge="start" color="inherit" aria-label="carrito" >
                <ShoppingCartOutlinedIcon/>
              </IconButton>
              <InputBase style={{ margin: '10px' }} />
            </div>
          </Fade>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar
