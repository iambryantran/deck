import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CardComponent() {
    return (
        <Card sx={{ maxWidth: 345, bgcolor: "#408C93", color: "#fff"}}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="200"
            image=""
            alt=""
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Jobs
            </Typography>
            <Typography variant="body2" color="#fff">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, dolor saepe. Nulla culpa aliquid cumque impedit odio
            eaque dolore sint non quam deserunt eligendi dolor vel ea officia,
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
        </CardActions>
        </Card>
    );
}