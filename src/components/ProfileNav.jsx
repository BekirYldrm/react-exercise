import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

const ProfileNav = () => {
  return (
    <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar >
      <Box sx={{ flexGrow: 1 }} />
          <Tooltip  title={localStorage.getItem("username")}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/src/assets/react.svg" />
            </IconButton>
          </Tooltip>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default ProfileNav