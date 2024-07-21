import { useEffect, useState } from "react";
import { ActivitiesApi } from './ActivitiesApi.js'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function ActivitiesByCategory({ categoryFromParent, keywordFromParent }) {
    const [activities, setActivities] = useState([]);    

    useEffect(() => {
        const debounce = setTimeout(() => {
          populateActivities(categoryFromParent, keywordFromParent);
    
        }, 2000)
        return () => clearTimeout(debounce);
      }, [activities]);
    
    const populateActivities = (category, keyword) => {
    
        ActivitiesApi.getActivitiesByCategory(category, keyword)
            .then((json) => {
                json ? setActivities(json) : []            
            })
            .catch((x) => {             
                setActivities([]);            
            });    
    }

    return activities.length > 0 ? (
        <CardActions >            
            <ButtonGroup orientation="vertical" aria-label="Vertical button group">
            {                
                activities.map((activity) => {
                    return (<Button size="small" variant="text" style={{textTransform: 'none', justifyContent: "flex-start"}}  key={activity.id} >{ activity.name }</Button>);
                })
            }
            </ButtonGroup>
        </CardActions>
    ) : (
        
        <Box sx={{ flexGrow: 1 }}>
            <CircularProgress />
        </Box>        
    );
}