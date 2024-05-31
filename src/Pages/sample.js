import React from "react";
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { DataGrid } from '@mui/x-data-grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
// import { createTheme } from '@mui/material/styles';

// const themes = createTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });

function TransitionLeft(props) { 
  return <Slide {...props} direction="down" />;
}

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
function MyApp() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    );
  }

  
  const icon = (
    <Paper sx={{ m: 1 }} elevation={4} >
      <Box component=""  sx={{ width: 100, height: 80 }}>
        <Box
          component="polygon"
          sx={{
            fill: (theme) => theme.palette.common.white,
            stroke: (theme) => theme.palette.divider,
            strokeWidth: 1,
          }}
          points="0,100 50,00, 100,100"
        />
        <img
                        src="assets/img/person_4.jpg"
                        alt="Pranesh"
                        className="about-img wow fadeIn"
                      />
      </Box>
    </Paper>
  );


  export default function ToggleColorModes() {
   const onclick = () => {
      alert("Hai");
    }
    const [values, setValues] = React.useState(dayjs('2022-04-07'));

    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);
  
    const handleClick = (Transition) => () => {
      setTransition(() => Transition);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  ];
  const [value, setValue] = React.useState(2);
const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };


  return (
   
    // <React.StrictMode >
      <div id="blog" >
        <div className="blog-content">
       <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>      
        <MyApp />
        <Box sx={{bgcolor: 'background.default',color: 'text.primary' }}>
          <div className="blog-grid" style = {{bgcolor: 'background.default', color: 'text.primary'}}>    
      
    <div style={{ height: 200, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={2}
        rowsPerPageOptions={[3]}
        checkboxSelection
        sx={{
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      />
    </div>
    <Box
      sx={{
        '& > legend': { mt: 2 },
        bgcolor: 'background.default',
          color: 'text.primary',
      }}
    >
      <Typography component="legend" sx={{display: 'flex', justifyContent: 'center', color: 'text.primary'}}>Controlled</Typography>
      <Rating
      sx={{display: 'flex', justifyContent: 'center' }}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
    <Box sx={{ height: 180, justifyContent: 'center',display: 'grid', bgcolor: 'background.default',color: 'text.primary' }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box sx={{ display: 'flex' }}>
        <Fade in={checked}>{icon}</Fade>
      </Box>
      
    </Box>
    <Box sx={{bgcolor: 'background.default',color: 'text.primary' }}>
     <div style = {{textAlign: 'center', bgcolor: 'background.default', color: 'text.primary'}} >
      <Button  variant="contained" color="success"  onClick={handleClick(TransitionLeft)}>Click Hear..!!</Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="❤️❤️❤️❤️❤️❤️Slider❤️❤️❤️❤️❤️❤️"
        key={transition ? transition.name : ''}
        // sx={{ bottom: 'auto', left: 'auto', right: 'auto', top: '0px'}}
      />
    </div>
    </Box>
    <Box  sx={{ marginTop: '30px'}}   >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticTimePicker
        ampm
        orientation="landscape"
        openTo="minutes"
        values={value}
        onChange={(newValue) => {
          console.log(newValue.$d,"llllllllllllllllll");
          setValues(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      
      
    </LocalizationProvider>
    </Box>
          </div>
          <div style = {{textAlign: 'center', bgcolor: 'background.default', color: 'text.primary'}}>
          <Button  variant="contained" color="error" onClick={onclick} >Do Something!!</Button>
          </div>
          </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
        </div>
      </div>
      
    // </React.StrictMode>   
  );
};

// export default ToggleColorMode;
