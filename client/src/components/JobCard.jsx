import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const JobCard = ({ jobData }) => {
    const { title, company, location, salary, tags, link, applied } = jobData;

    return (
        <Card sx={{ 
            minWidth: "460px",
            bgcolor: "#408C93",
            color: '#fff',
            m: 2,
            boxShadow: "2px 2px 10px  rgba(200, 200, 200, 200) ",
            display: "flex",
            }}>
        <CardActionArea sx={{backgroundColor: "#fff"}}>
            <CardContent sx={{
                border: "1px solid black",
                backgroundColor: "#408C93",
                m:2 ,
            }}>
            <Typography sx={{
                display: "flex",
                justifyContent: "space-between"
            }}> 
            <p>Company: {company}</p>
            <p>Location: {location}</p>
            </Typography>
            <Typography sx={{textAlign: "center"}}>
            <h2>{title}</h2>
            </Typography>
            {/* <p>Company: {company}</p>
            <p>Location: {location}</p> */}
            <p>Salary: {salary}</p>
            <Typography sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
            <a href={link}>Apply</a>
            <label>
            <input type="checkbox" checked={applied} />
            Applied
            </label>
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );
};

export default JobCard;
