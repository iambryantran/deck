import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ContactCard = ({ contactData }) => {
    const { name, company, location, website, resume, contactInfo } = contactData;

    return (
        <Card sx={{ 
            minWidth: "460px",
            bgcolor: "#408C93",
            color: '#fff',
            m: 2,
            boxShadow: "2px 2px 10px rgba(200, 200, 200, 200)",
            display: "flex",
            }}>
        <CardActionArea sx={{backgroundColor: "#fff"}}>
            <CardContent sx={{
                border: "1px solid black",
                backgroundColor: "#408C93",
                m:2 ,
            }}>
            <Typography variant="h5" component="div" sx={{textAlign: "center"}}>
                {name}
            </Typography>
            <Typography sx={{ mt: 1.5 }}>
                <strong>Company:</strong> {company}
            </Typography>
            <Typography>
                <strong>Location:</strong> {location}
            </Typography>
            <Typography sx={{ mt: 1, display: "flex", flexDirection: "column" }}>
                <a href={website} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>Website</a>
                <a href={resume} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginTop: '8px' }}>Resume</a>
            </Typography>
            <Typography sx={{ mt: 1 }}>
                <strong>Contact Info:</strong> {contactInfo}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );
};

export default ContactCard;
