import { Container, Box, Typography, Button, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import '../../styles/Home.css';
import item1 from '../../Assets/Home/Group 3.png'
import item2 from '../../Assets/Home/image 4.png'
import item3 from '../../Assets/Home/image 5.png'
import item4 from '../../Assets/Home/image 6.png'
import item5 from '../../Assets/Home/image 7 (1).png'

import blurritem1 from '../../Assets/Home/image 4 (1).png'
import blurritem2 from '../../Assets/Home/image 5 (1).png'
import blurritem3 from '../../Assets/Home/image 6 (1).png'
import blurritem4 from '../../Assets/Home/image 7.png'
import blurritem5 from '../../Assets/Home/image 8 (1).png'

const Home = () => {
    const images = [
        { src: item1 },
        { src: item2 },
        { src: item3 },
        { src: item4 },
        { src: item5 },
    ];
    const blurredImages = [
        { src: blurritem1 },
        { src: blurritem2 },
        { src: blurritem3 },
        { src: blurritem4 },
        { src: blurritem5 },
    ]
    const papercontent = [
        'URL', 'Image', 'Mail', 'Pdf', 'Snapchat', 'Youtube',
        'Twitter', 'Instagram', 'Facebook', 'Whatsapp', 'Audio', 'Linkedin'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                        <Box className="box-container">
                            <Typography variant="h5" className="heading">
                                Design Your Perfect QR Code with Ease
                            </Typography>
                            <Typography variant="body1" className="subheading">
                                Your Go-To Tool for QR Codes and URL Management
                            </Typography>
                            <Button
                                onClick={() => alert('Sign Up')}
                                className="get-started-btn"
                            >
                                Get Started
                            </Button>
                        </Box>

                        <Box display="flex" flexDirection="row" alignItems="center">
                            <Grid container >
                                {blurredImages.map((image, index) => (
                                    <Grid item xs={6} sm={4} md={2} key={index}>
                                        <Box className="blurred-image">
                                            <img
                                                src={image.src}
                                                alt={`blurred-img-${index}`}
                                                className="blurred-img"
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box>
                            <Box className="carousel-wrapper">
                                <Box className="carousel-title">
                                    <Typography className="carousel-title-text">
                                        QR Code <br />
                                        Generator
                                    </Typography>
                                </Box>
                                <Box className="carousel-images">
                                    {images.map((image, index) => (
                                        <Box
                                            key={index}
                                            className={`carousel-image ${currentIndex === index ? 'visible' : 'hidden'}`}
                                        >
                                            <img
                                                src={image.src}
                                                alt={`carousel-img-${index}`}
                                                className="carousel-img"
                                            />
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Box className="Datatype-title">
                    <Box className="dotted-line" />
                    <Typography className="Datatype-title-text">
                        Data Types
                    </Typography>
                </Box>

                <Box className="papercontent-container">
                    <Grid container>
                        {papercontent.map((item, index) => (
                            <Grid item xs={6} sm={4} md={2} key={index}>
                                <Paper className="papercontent">{item}</Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </Container>
        </>
    );
};

export default Home;
