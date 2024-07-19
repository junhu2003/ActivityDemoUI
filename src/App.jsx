import { useState } from 'react'
import { useEffect } from 'react'

import ActivitiesByCategory from './ActivitiesByCategory.jsx';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NoteApi } from './NoteApi.js'

function App() {
  const [categories, setCategories] = useState([])  
  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  useEffect(() => {
    const debounce = setTimeout(() => {
      populateCategories();

    }, 1000)
    return () => clearTimeout(debounce);
  }, [categories]);

  const populateCategories = () => {    
    NoteApi.getCategories()
        .then((json) => {
            json ? setCategories(json) : []            
        })
        .catch(() => { 
          setCategories([]);          
        });    
  }

  return (categories.length > 0 &&
    <Grid container spacing={2}>
      <Grid xs={4}>
      </Grid>
      <Grid xs={8}>
        <h1>Activities</h1>        
      </Grid>
      <Grid xs={4}>
        <Card variant="outlined" sx={{ maxWidth: 345 }}>              
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="left">
              <Grid container spacing={2}>
                <Grid xs={9}><FormLabel component="legend">Filters</FormLabel></Grid>                
                <Grid xs={3}><Button size="small">Reset</Button></Grid>
              </Grid>
            </Typography>
            <Divider />
            <Typography gutterBottom variant="h5" component="div" align="left">
              <TextField id="outlined-search" label="Search Keyword" type="search" margin="normal" fullWidth />
            </Typography>
            <Divider sx={{marginTop: 1}} />
            <Typography gutterBottom variant="h5" component="div" align="left">
            <FormControl sx={{ marginTop: 1 }} component="fieldset" variant="standard">
              <FormLabel component="legend">Categories</FormLabel>
              <div>
                <FormControlLabel
                  label="All Categories"
                  control={
                    <Checkbox
                      checked={checked[0] && checked[1]}
                      indeterminate={checked[0] !== checked[1]}
                      onChange={handleChange1}
                    />
                  }
                />
                {children}
              </div>
            </FormControl>
            </Typography>
          </CardContent>
        </Card> 

      </Grid>      
      <Grid xs={8}>            
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {
              categories.map((category, index) => {
                return  (
                  <Grid key={'Grid' + index} xs={4}>
                      <Card variant="outlined" key={'Card' + index} sx={{ maxWidth: 345 }}>              
                        <CardContent key={'CardContent' + index}>
                          <Typography key={'Typography' + index} gutterBottom variant="h5" component="div">
                            { category }
                          </Typography>                
                        </CardContent>
                        <ActivitiesByCategory key={'ActivitiesByCategory' + index} categoryFromParent={category} />
                      </Card>                
                  </Grid>
                  );
              })
            }      
          </Grid>
        </Box>
      </Grid>    
    </Grid>
  )
}

export default App
