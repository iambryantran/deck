import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

const JobCard = ({ title, company, location, salary, tags, link, applied }) => {
    return (
        <Card sx={{ maxWidth: 345, bgcolor: "#408C93", color: "#fff" }}>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
                {title}
            </Typography>
            <Typography variant='body2'>
                <p>Company: {company}</p>
                <p>Location: {location}</p>
                <p>Salary: {salary}</p>
                <a href={link}>Apply</a>
                <p>
                <label>
                <input type="checkbox" checked={applied} />
                Applied
                </label>
                </p>
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );
};

export default JobCard;
