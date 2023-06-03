import { Person } from "@mui/icons-material"
import { AppBar, Stack, Toolbar, Typography, Avatar, Tooltip, Menu, MenuItem, Grid } from "@mui/material"
import { makeStyles } from '@mui/styles'
import logo from './qntrl_logo.svg'
import { Link } from "react-router-dom"
import { useState } from "react"
import NavContentHolder from "./NavContentHolder"

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },

    title: {
        position: 'relative',
        '&:hover::after': {
            content: "''",
            position: 'absolute',
            top: 36,
            left: 0,
            width: '100%',
            borderBottom: `3px solid orangered`,
        },
    },
}));

const Navbar = () => {
    const [tabmenu, setTabmenu] = useState(null);
    const open = Boolean(tabmenu);
    const handleMenuOpen = (e) => {
        setTabmenu(e.currentTarget);
    };
    const handleMouseLeave = () => {
        if (open) {
            setTabmenu(null);
        }
    };

    const classes = useStyles();
    return (
        <AppBar sx={{ bgcolor: "#000" }} className={classes.appBar} id="navbar" position="sticky">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#"><img src={logo} className="logo" /></a>
                <Stack direction='row' spacing={6}>
                    <Tooltip title="Feature Tour" placement="bottom-start" >
                        <Link to='/Feature_Tour' className={`${classes.title} navContent`}
                            id="feature_tour"
                            aria-controls={open ? "Feature_Tour_menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onMouseEnter={handleMenuOpen}>Feature Tour</Link></Tooltip>
                    <NavContentHolder open={open} tabmenu={tabmenu} setTabmenu={setTabmenu} handleMouseLeave={handleMouseLeave} />

                    <Tooltip title="Solutions" placement="bottom-start" >
                        <Link to='/Solutions' className={`${classes.title} navContent`}
                            id="Solutions"
                            aria-controls={open ? "Solutions-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onMouseEnter={handleMenuOpen}>Solutions</Link></Tooltip>
                    <NavContentHolder open={open} tabmenu={tabmenu} setTabmenu={setTabmenu} handleMouseLeave={handleMouseLeave} />
                    <Tooltip title="Orchestration Gallery"><Link to='/Orchestration_Gallery' className={`${classes.title} navContent`}>Orchestration Gallery</Link></Tooltip>
                    <Tooltip title="Pricing"><Link to='/Pricing' className={`${classes.title} navContent`}>Pricing</Link></Tooltip>
                    <Tooltip title="Resources"><Link to='/Resources' className={`${classes.title} navContent`}>Resources</Link></Tooltip>
                    <Tooltip title="Our Story"><Link to='/Our_Story' className={`${classes.title} navContent`}>Our Story</Link></Tooltip>
                </Stack>
                <Avatar>
                    <Person />
                </Avatar>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;