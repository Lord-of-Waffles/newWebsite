import * as React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Typography } from '@mui/material';

function ContactInfo() {
    return (
        <>
            <ResponsiveAppBar />
            <Typography variant="h2" align="center" sx={{ mt: 5 }}>Want to get in touch?</Typography>
            <Typography variant="h3" align="center" sx={{ mt: 5 }}>You can reach me at:</Typography>
            <Typography variant="h4" align="center" sx={{ mt: 5 }}>Email: ben.worton(at)gmail.com</Typography>
            <Typography variant="h4" align="center" sx={{ mt: 5 }}><a href="https://www.linkedin.com/in/benjamin-worton-3251372a1/">LinkedIn</a></Typography>
            <Typography variant="h4" align="center" sx={{ mt: 5 }}><a href="https://github.com/Lord-of-Waffles">GitHub</a></Typography>
        </>
    )
}

export default ContactInfo;