"use client";
import React, { Suspense, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { clickUser } from '../reduxcode/slice';
import Link from 'next/link';
import { nanoid } from '@reduxjs/toolkit';
import Message from '@/importMessage';
// import './page.css';
import Loading from './loading';

export default function T_shirt(props) {
  const [images, setImage] = useState([]);
  const dispatch = useDispatch();
  const nid = nanoid();

  useEffect(() => {
    if (props.res) {
      setImage(props.res);
    }
  }, []); 

  return (
    <>
      <Message />
      <Grid container>
        {images.map((imagess, index) => {
          if (imagess.ImageName.startsWith("design")) {
            return (
              <Grid item xs={6} sm={3} key={index}>
                <Link href={`/showimage/${nid}`} onClick={async () => await dispatch(clickUser({ image: imagess.ImageName, nid }))}>
                  <Card sx={{ marginLeft: "8vw", marginTop: "6vh", backgroundColor: "white" }}>
                    <CardActionArea>
                      <Suspense fallback={<Loading />}>
                        <CardMedia
                          component="img"
                          height="200"
                          image={imagess.ImageName}
                          alt="image"
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
                        {/* Button content here */}
                      </Button>
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
            );
          } else {
            return null;
          }
        })}
      </Grid>
    </>
  );
}
