import * as React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import ProjectCards from './ProjectCards';
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/material';
import Stack from '@mui/material/Stack';





function Projects() {
    return (
        <>
            <ResponsiveAppBar />
            <Typography variant="h2" align="center" sx={{ mt: 5 }}>Projects (Page WIP)</Typography>
            <Container maxWidth="lg">
                <Box marginTop={5}>
                    <Stack direction="row" spacing={2}>
                        <ProjectCards />
                    </Stack>
                </Box>
            </Container>
        </>
    )
}
export default Projects;