import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="900" fontSize="1.7rem" style={{ padding: '10px', display: 'flex', alignItems: 'center', alignContent: "center"}}>
      <img width="51" height="51" src="https://img.icons8.com/arcade/64/000000/movie-projector.png" alt="movie-projector" style={{ marginRight: '10px' }} />
      Cine<span style={{ color: theme.palette.primary.main  }}>Pulse</span>
    </Typography>
  );
};

export default Logo;