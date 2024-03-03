import React from 'react'
import "./Footer.css"
import { Typography } from '@mui/material';
import { TbBrandInstagram } from 'react-icons/tb';
import { TbBrandTwitter } from 'react-icons/tb';
import { TbBrandYoutube } from 'react-icons/tb';
import Button from '@mui/material/Button';
import { TbMail } from 'react-icons/tb';

export default function Footer() {
    return (
        <div className="FooterContainer">
            <div className="FooterWrapper">
                <div className="HelpOut">
                    Want to help out?
                </div>

                <Typography sx={{
                    color: 'white',
                    fontFamily: "Josefin Sans",
                    fontSize: "18px",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    marginLeft: "5px",
                    marginRight: "5px"

                }}>

                    We&apos;re always looking for new sponsors who can help our team accelerate to the next level in rocketry technology.
                </Typography>
                <div className="ButtonContainer">
                    <Button variant="contained" sx={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "3px solid white",
                        borderRadius: 8,
                        align: "center",
                        width: "160px",
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                        '&:hover': {
                            backgroundColor: '#4484b4',
                            color: 'white',
                        }
                    }}
                        // onClick = {() => {
                        //     window.location.href("https://www.ufl.edu/")
                        // }}
                        href="https://www.uff.ufl.edu/giving-opportunities/027281-mae-liquid-propulsion/" target="_blank" rel="noreferrer"

                    >Sponsor Us</Button>
                </div>
                <div className="FooterIconBar">
                    <a className="Instagram" href="https://www.instagram.com/ufliquidpropulsion/" target="_blank" rel="noreferrer">
                        <TbBrandInstagram className="IconText" size={36}></TbBrandInstagram>
                    </a>

                    <a className="Twitter" href="https://twitter.com/ufliquidprop" target="_blank" rel="noreferrer">
                        <TbBrandTwitter className="IconText" size={36}></TbBrandTwitter>
                    </a>

                    <a className="Youtube" href="https://www.youtube.com/channel/UCfs7hZ2OR_-tfFbAlrDQN9A" target="_blank" rel="noreferrer">
                        <TbBrandYoutube className="IconText" size={36}></TbBrandYoutube>

                    </a>

                    <a className="Twitch" href="mailto:ufliquidpropulsion@gmail.com" target="_blank" rel="noreferrer">
                        <TbMail className="IconText" size={36}></TbMail>
                    </a>
                </div>
            </div>
        </div>
    );
}