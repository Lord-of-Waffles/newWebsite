import * as React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Backgrounds() {
    return (
        <>
            <ResponsiveAppBar />
            <Container maxWidth="xl">
                <Box marginTop={5} display="flex" justifyContent="center" alignItems="center">
                    <Typography variant='h2'>
                        Background
                    </Typography>
                </Box>
            </Container>
            <Paper
                elevation={3}
                sx={{
                    margin: 'auto',
                    marginTop: '5%',
                    padding: '2%',
                    width: '70%',
                    textAlign: 'center'
                }}
            >

                <Typography variant='h4'>
                    Hey, thanks for checking out my site. I'm currently in my 2nd year of studies
                    at the Haaga-Helia University of Applied Sciences in Helsinki, Finland.
                </Typography>
                <Typography variant='h4' marginTop={3}>
                    I'm majoring in software development, and am familiar with languages such as:
                </Typography>
                <Box>
                    <Typography variant='h4' marginTop={3}>- Java</Typography>
                    <Typography variant='h4'>- JavaScript (Node.js & React)</Typography>
                    <Typography variant='h4'>- Python</Typography>
                </Box>
                <Typography variant='h4' marginTop={3}>
                    I'm familiar with technologies such as:
                </Typography>
                <Box>
                    <Typography variant='h4' marginTop={3}>- Git</Typography>
                    <Typography variant='h4'>- Docker</Typography>
                    <Typography variant='h4'>- SQL</Typography>
                </Box>
                <Typography variant='h4' marginTop={3}>
                    I'm also interested in cyber security and cloud computing.
                </Typography>
                <Typography variant='h4' marginTop={3}>
                    I'm currently looking for an internship or junior role in the software development field.
                    If you want to get in touch, feel free to check out my contact info!
                </Typography>
            </Paper>

        </>
    )
}

export default Backgrounds;