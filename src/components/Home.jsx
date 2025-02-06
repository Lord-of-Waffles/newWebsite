import * as React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import Cards from './Cards';

import { createTheme } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Tilt from 'react-parallax-tilt';


import forestPic from '../assets/forestPic.jpg';



function Home() {
    return (
        <>
            <ResponsiveAppBar />
            <Container maxWidth="lg">
                <Box marginTop={5} display="flex" justifyContent="space-between" alignItems="center">
                    <Box>
                        <Typography variant='h2'>
                            Hi, welcome to my website.
                        </Typography>
                        <Typography variant='h3' marginTop={6}>
                            I'm Benjamin Worton, a British-Finnish University Student
                            studying software development.
                        </Typography>
                        <Typography variant='h3' marginTop={4}>
                            On this page you can find my:
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            position: 'relative',
                            display: 'inline-block',
                            textAlign: 'center',
                            color: '#a18cd1'
                        }}
                    >
                        <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.02}>
                            <img src={forestPic} alt="Deer drinking water by a river" style={{ width: '80%', height: 'auto', borderRadius: '15px', marginLeft: '10%' }} />
                        </Tilt>
                    </Box>
                </Box>
            </Container>
            <Container maxWidth="lg">
                <Box marginTop={5}>
                    <Stack direction="row" spacing={2}>
                        <Cards />
                    </Stack>
                </Box>
            </Container>
        </>
    );
}

export default Home;
