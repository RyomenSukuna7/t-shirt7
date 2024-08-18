"use client"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid} from '@mui/material';
import { Suspense, useEffect, useRef, useState } from 'react';
import Loading from './loading';
export default function Cards(){
    const [images,setImage]=useState([]);

    useEffect(()=>{
      async function datas(){
        const data=await fetch("/DB");
        const res=await data.json();
        setImage(res.data);
      }

      datas();
    },[]);
    return(

    <>
    <h1>hello world</h1>
      <Grid container> 
      <Suspense fallback={<Loading/>}>
      {images.map((imagess, index) => {

       if(imagess.ImageName.startsWith("design")){
        return (
          <Grid item xs={5} sm={3} key={index}>
            <Card sx={{ marginLeft:"8vw", marginTop:"6vh"}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={imagess.ImageName}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <del style={{ position: "absolute", right: "6px" }}></del>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" style={{ paddingTop: "4vh", marginLeft: "-0.7vw" }}>
                   {/* <Link href={`/about/${nid}`} style={{color:"black"}} onClick={()=>send(checkUser({images,nid,index}))}>check</Link>  */}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
        
       }
       else{
        return null;
       }
       
      }
    
    )
      }
      </Suspense>
    </Grid>
    

    </>

    
      
    )
}
