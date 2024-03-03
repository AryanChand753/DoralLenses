import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import "./Cards.css"
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';



/*eslint-disable */
export default function Cards(props) {

    const [shadow, setShadow] = useState(" 0 2px 8px rgba(0, 0, 0, 0.10)");

    return (
        <div>
            <Card sx={{
                minWidth: { xs: '330px', sm: '500px' },
                maxWidth: "100%",
                display: "flex",
                flex: "1",
                boxShadow: shadow,
                height: "fit-content",
                color: props.color
                
            }}
                onMouseEnter={() => setShadow(" 0 10px 22px rgba(0, 0, 0, 0.20)")}
                onMouseLeave={() => setShadow(" 0 2px 8px rgba(0, 0, 0, 0.10)")}
            >
                <CardActionArea component={RouterLink} to={props.location}>
                    <CardMedia
                        component="img"
                        height="450px"
                        image={props.img}
                        alt={props.alt}
                    />
                    <CardContent>
                        <p className="CardSubtitle">{props.subtitle}</p>
                        <p className="CardTitle">{props.title}</p>
                        <p className="CardText">{props.text}</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
/*eslint-enable */