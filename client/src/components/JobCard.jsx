import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const JobCard = ({ jobData }) => {
    const { title, company, location, salary, tags, link, applied } = jobData;

    return (
        <Card sx={{ maxWidth: 345, bgcolor: "#408C93", color: '#fff' }}>
        <CardActionArea>
            <CardContent>
            <Typography>
            <h2>{title}</h2>
            </Typography>
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
            </CardContent>
        </CardActionArea>
        </Card>
    );
};

export default JobCard;
