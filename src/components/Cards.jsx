import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link, Outlet } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';


function Cards() {
    return (
        <>
            <Link to="/projects" style={{ textDecoration: 'none' }}>
                <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.02}>
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
                                Projects
                            </Typography>
                        </CardContent>
                    </Card>
                </Tilt>
            </Link>
            <Link to="/background" style={{ textDecoration: 'none' }}>
                <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.02}>
                    <Card style={{ position: 'relative' }}>
                        <CardMedia
                            component="div"
                            style={{
                                height: 200,
                                width: 400,
                                backgroundColor: '#0093E9',
                                backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
                            }}
                        />
                        <CardContent style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant="h5" component="div" style={{ color: 'white' }}>
                                Background
                            </Typography>
                        </CardContent>
                    </Card>
                </Tilt>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.02}>
                    <Card style={{ position: 'relative' }}>
                        <CardMedia
                            component="div"
                            style={{
                                height: 200,
                                width: 400,
                                backgroundColor: '#00DBDE',
                                backgroundImage: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
                            }}
                        />
                        <CardContent style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant="h5" component="div" style={{ color: 'white' }}>
                                Contact Info
                            </Typography>
                        </CardContent>
                    </Card>
                </Tilt>
            </Link>
        </>
    );
}

export default Cards;
