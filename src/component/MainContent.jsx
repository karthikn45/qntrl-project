import { Box, Button, Card, CardMedia, Fab, IconButton, ListItemIcon, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import React, { useRef, useState } from 'react'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import WorkflowCardContent from './WorkflowCardContent';
import TextsmsIcon from '@mui/icons-material/Textsms';



const MainContent = () => {
    const [selectedItem, setSelectedItem] = useState("Centralization & Visibility");


    const workflowList = ['Centralization & Visibility', 'Process Compliance', 'Workflow-Centric Collaboration', 'Process Automation', 'Reports and Dashboards', 'Process Mapping', 'Process Extensibility', 'Designed for Enterprise'];
    const cvRef = useRef()
    const pcRef = useRef()
    const wcRef = useRef()
    const paRef = useRef()
    const rdRef = useRef()
    const pmRef = useRef()
    const peRef = useRef()
    const deRef = useRef()
    const handleWorkFlowClick = (item) => {
        if (selectedItem === item) return
        setSelectedItem((prevSelectedItem) => (item === prevSelectedItem ? null : item));

    };

    return (
        <Box sx={{ width: '100%', height: '92vh', bgcolor: '#3B3B3B' }}>
            <Stack direction='column' sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h3' sx={{ color: '#fff', mt: 3 }}>Take a look at Qntrl</Typography>
                <Typography variant='subtitle2' sx={{ color: '#fff' }}>Qntrl is the world's #1 Workflow Orchestration Software. See why.</Typography>
            </Stack>
            {/* Workflow content*/}
            <Grid container sx={{ mt: 2 }}>
                <Grid xs={3} xsOffset={1}>
                    <Stack direction='column' spacing={3}>
                        {workflowList.map((item, index) => (
                            <Typography
                                key={index}
                                variant='subtitle1'
                                className='workflowContent'
                                onClick={() => handleWorkFlowClick(item)}
                                sx={{cursor : 'pointer'}}
                            >
                                {item === selectedItem ? (
                                    <NearMeIcon sx={{ color: 'orangered', mr: 4, fontSize: 28 }} />
                                ) : (
                                    <NearMeOutlinedIcon className='workflowIcon' sx={{ mr: 4, fontSize: 28 }} />
                                )}
                                {item}
                            </Typography>
                        ))}
                    </Stack>
                </Grid>
                {/* Workflow card*/}
                <WorkflowCardContent selectedItem={selectedItem} workflowItem="Centralization & Visibility" ref={cvRef} />
                <WorkflowCardContent selectedItem={selectedItem} workflowItem="Process Compliance" ref={pcRef} />
                <WorkflowCardContent selectedItem={selectedItem} workflowItem="Workflow-Centric Collaboration" ref={wcRef} />
                <WorkflowCardContent selectedItem={selectedItem} workflowItem="Process Automation" ref={paRef} />
                <WorkflowCardContent selectedItem={selectedItem} workflowItem="Reports and Dashboards" ref={rdRef} />
                <WorkflowCardContent selectedItem={selectedItem} workflowItem="Process Mapping" ref={pmRef} />
                <WorkflowCardContent selectedItem={selectedItem} workflowItem="Process Extensibility" ref={peRef} />
                <WorkflowCardContent selectedItem={selectedItem} workflowItem="Designed for Enterprise" ref={deRef} />
                {/* <CarouselComponent /> */}
            </Grid>
            <Fab sx={{ color: 'white', bgcolor: 'orangered', ":hover": { color: 'orangered', bgcolor: 'white' } }} className='messageIcon' aria-label="msg">
                <TextsmsIcon />
            </Fab>
            {/* <IconButton className=''><TextsmsIcon /></IconButton> */}
        </Box>
    )
}

export default MainContent