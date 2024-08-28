"use client";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid} from '@mui/material';
import { Suspense, useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { clickUser } from '../reduxcode/slice';
import { nanoid } from '@reduxjs/toolkit';
import Link from 'next/link';
import Loading from './loading';
import Message from '@/importMessage';
export default function CardSublimationPhoneCase(){

  const [images,setImage]=useState([]);
  const dispatch=useDispatch();
  const nid=nanoid();

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
    <Message/>
      <Grid container> 
      
      {images.map((imagess, index) => {

       if(imagess.ImageName.startsWith("mobilephones")){
        return (
          <Grid item xs={6} sm={3} key={index}>
            <Link href={`/showimage/${nid}`} onClick={async()=>await dispatch(clickUser({image:imagess.ImageName,nid}))}>
            <Card sx={{ marginLeft:"8vw", marginTop:"6vh"}}>
              <CardActionArea>
              <Suspense fallback={<Loading/>}>
                <CardMedia
                  component="img"
                  height="200"
                  image={imagess.ImageName}
                  alt="green iguana"
                  loading='lazy'
                />
                </Suspense>
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
            </Link>
          </Grid>
        );
        
       }
       else{
        return null;
       }
       
      }
    
    )
      }
      
    </Grid>
    

    </>
  )
}