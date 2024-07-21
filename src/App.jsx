import { useState } from 'react'
import { useEffect } from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
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
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import './App.css'
import { ActivitiesApi } from './ActivitiesApi.js'
import ActivitiesByCategory from './ActivitiesByCategory.jsx';

function App() {
  const [keyword, setKeyword] = useState('');
  const [checkedCategories, setCheckedCategories] = useState([]);  
  const [categories, setCategories] = useState([]);
  const [allChildrenChecked, setAllChildrenChecked] = useState([true, false]);  

  const handleKeywordChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setKeyword(value);
    setCategories([]);
    setCheckedCategories([]);
    setAllChildrenCheckedFlag();
  }

  const handleResetFilter = () => {    
    setKeyword('');
    setCategories([]);
    setCheckedCategories([]);
    setAllChildrenCheckedFlag();
  }

  const handleCategoryCheckboxChange = (event) => {
    const category = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;

    let newCheckedCategories = [];
    if (category == 'parent') {
      newCheckedCategories = checkedCategories.map(c => {
        c.checked = checked;
        return c;
      });
    } else {
      newCheckedCategories = checkedCategories.map(c => {
        if (c.category === category) {
          c.checked = checked;
        }
        return c;
      });      
    }    
    setCheckedCategories(newCheckedCategories);
    setAllChildrenCheckedFlag();
  }

  const setAllChildrenCheckedFlag = () => {
    let isAllChecked = true;
    let isNotAllSame = false;

    let first = false;
    checkedCategories.every((category, i) => {
      if (isAllChecked && !category.checked) {
        isAllChecked = false;        
      }
      
      if (i === 0) {
        first = category.checked;
      } else if (!isNotAllSame) {
        isNotAllSame = (first !== category.checked);
      }

      return true;
    });

    setAllChildrenChecked([isAllChecked, isNotAllSame]);
  }

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      {
        checkedCategories.map((category, index) => {
          return  (
            <FormControlLabel key={ 'FormControlLabel' + index } label={category.category} control={<Checkbox name={ category.category } key={ 'Checkbox' + index } checked={category.checked}  onChange={handleCategoryCheckboxChange} />} />
            );
        })
      }      
    </Box>
  );

  useEffect(() => {
    const debounce = setTimeout(() => {
      populateCategories();

    }, 1000)
    return () => clearTimeout(debounce);
  }, [categories]);

  const populateCategories = () => {    
    ActivitiesApi.getCategories(keyword, checkedCategories)
        .then((json) => {
          json ? setCategories(json) : [];          
          
          if (checkedCategories.length == 0) {
            let list = json.map((category) => (
              { category: category, checked: true}
            ));
            setCheckedCategories(list);
            
          }          
        })
        .catch(() => { 
          setCategories([]);
          setCheckedCategories([]);  
        });    
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
            Activity Demo
          </Typography>          
        </Toolbar>
      </AppBar>
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
                  <Grid xs={3}><Button size="small" onClick={handleResetFilter} >Reset</Button></Grid>
                </Grid>
              </Typography>
              <Divider />
              <Typography gutterBottom variant="h5" component="div" align="left">
                <TextField id="outlined-search" label="Search Keyword" type="search" margin="normal" name='keyword' value={keyword} onChange={handleKeywordChange} fullWidth />
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
                        name='parent'
                        checked={allChildrenChecked[0]}
                        indeterminate={allChildrenChecked[1]}
                        onChange={handleCategoryCheckboxChange}
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
                          <ActivitiesByCategory key={'ActivitiesByCategory' + index} categoryFromParent={category} keywordFromParent={keyword} />
                        </Card>                
                    </Grid>
                    );
                })
              }      
            </Grid>
          </Box>
        </Grid>    
      </Grid>
    </Box>
  )
}

export default App
