import { Person } from "@mui/icons-material"
import { AppBar, Stack, Toolbar, Typography,Avatar, Tooltip  } from "@mui/material"
import {makeStyles} from '@mui/styles'
import logo from './qntrl_logo.svg' 
import { Link } from "react-router-dom"

const Navbar = () => {

    const useStyles = makeStyles((theme) => ({
        appBar: {
          position: 'relative',
        },
        title: {
          position: 'relative',
          '&:hover::after': {
            content: "''",
            position: 'absolute',
            top : 40,
            left: 0,
            width: '100%',
            borderBottom: `3px solid orangered`,
          },
        },
      }));

      const classes = useStyles();
    return (
        <AppBar sx={{bgcolor : "#000"}} className={classes.appBar}>
            <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <a href="#"><img src={logo} /></a>
                    <Stack direction='row' spacing={4}>
                        <Tooltip title="Feature Tour" placement="bottom-start" ><Link to='/Feature_Tour' className={`${classes.title} navContent`} >Feature Tour</Link></Tooltip>
                        <Tooltip title="Solutions"><Link to='/Solutions' className={`${classes.title} navContent`}>Solutions</Link></Tooltip>
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

        /*
        <AppBar position="sticky" sx={{bgcolor : "#000"}}>
            <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <a href="#"> <img src={logoSvg} alt="Logo" className="logo"/></a>
                    <Stack direction='row' spacing={4}>
                    <Tabs value={value} aria-label="icon tabs example">
                        <Tooltip title="Feature Tour"><Link to='/Feature_Tour' className="navContent"><Tab className='tabContent' label="Feature Tour"/></Link></Tooltip>

                        <Tooltip title="Solutions"><Link to='/Solutions' className="navContent"><Tab className='tabContent' label="Solutions" /></Link></Tooltip>
                        <Tooltip title="Orchestration Gallery"><Link to='/Orchestration_Gallery' className="navContent"><Tab className='tabContent' label="Orchestration Gallery"/></Link></Tooltip>

                        <Tooltip title="Pricing"><Link to='/Pricing' className="navContent"><Tab className='tabContent' label="Pricing" /></Link></Tooltip>

                        <Tooltip title="Resources"><Link to='/Resources' className="navContent"><Tab className='tabContent' label="Resources" /></Link></Tooltip>

                        <Tooltip title="Our Story"><Link to='/Our_Story' className="navContent"><Tab className='tabContent' label="Our Story" /></Link></Tooltip>
                        </Tabs>
                    </Stack>
                    <Avatar>
                        <Person />
                    </Avatar>
            </Toolbar>
        </AppBar>
        */
    )
}

export default Navbar