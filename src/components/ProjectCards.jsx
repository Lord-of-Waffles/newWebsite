import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tilt from 'react-parallax-tilt';

function Cards() {
    return (
        <>
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.02}>
                <a href="https://lord-of-waffles.github.io/satelliteComparison/" style={{ textDecoration: 'none' }}>
                    <Card style={{ position: 'relative' }}>
                        <CardMedia
                            component="div"
                            style={{
                                height: 200,
                                width: 400,
                                backgroundColor: '#4158D0',
                                backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
                            }}
                        />
                        <CardContent style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant="h5" component="div" style={{ color: 'white' }}>
                                Satellite Comparison
                            </Typography>
                        </CardContent>
                    </Card>
                </a>
            </Tilt>

            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.02}>
                <a href="https://lord-of-waffles.github.io/FinalTaskFrontEnd/#/" style={{ textDecoration: 'none' }}>
                    <Card style={{ position: 'relative' }}>
                        <CardMedia
                            component="div"
                            style={{
                                height: 200,
                                width: 400,
                                backgroundColor: '#0093E9',
                                backgroundImage: 'linear-gradient(160deg, #ed66ed 0%, #4a54d9 100%)',
                            }}
                        />
                        <CardContent style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant="h5" component="div" style={{ color: 'white' }}>
                                Personal Trainer
                            </Typography>
                        </CardContent>
                    </Card>
                </a>
            </Tilt>
        </>
    );
}

export default Cards;