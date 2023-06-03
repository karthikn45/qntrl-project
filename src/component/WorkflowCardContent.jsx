import { Button, Card, CardMedia, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import React, { forwardRef, useEffect, useState } from 'react'
import cetralizationIimg from '../asset/cetralizationIimg.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion, useAnimation } from 'framer-motion';
import { Image } from '@mui/icons-material';

const WorkflowCardContent = forwardRef(({ selectedItem, workflowItem }, ref) => {
    const [selectedContent, setSelectedContent] = useState(null);
    const isVisible = selectedItem === workflowItem;
    const controls = useAnimation();
    const contentMap = {
        'Centralization & Visibility': {
            image: cetralizationIimg,
            title: 'Centralization & Visibility',
            subtitle: 'Centralized requests, Unparalleled visibility',
            description:
                'Centralize the requests coming to your team. You can even use our API to create requests from other systems automatically. Everything that needs to be done, by whom and when it\'s due, is captured in Qntrl. Provide your team members with a quick view of the status of all items.',
        },
        'Process Compliance': {
            image: cetralizationIimg,
            title: 'Process Compliance',
            subtitle: 'Ensure execution standards',
            description: "Qntrl puts an unprecedented level of granular control in your hands. You decide who's responsible for executing what parts of the process, and you control how tasks are assigned. You also control what rules to put in, and how to execute process checks through your workflow.",
        },
        'Workflow-Centric Collaboration': {
            image: cetralizationIimg,
            title: 'Workflow-Centric Collaboration',
            subtitle: 'Collaboration: when you need it, where you need it',
            description: "You'll have everything you need related to a particular request, right on your screen, where you need it. And when you're done, you can let your teammates know through any chat app. Conversation logs provide insights into the conversations that take place around a particular task.",
        },
        'Process Automation': {
            image: cetralizationIimg,
            title: 'Process Automation',
            subtitle: 'Make repetitive manual work a thing of the past',
            description: 'Send the email. Update the CRM. Decide the small things. Qntrl provides numerous ways to automate your processes, including automated workflow steps, auto-assignment of tasks, sending notifications through email, and automatic document and PDF generation, just to name a few.',
        },
        'Reports and Dashboards': {
            image: cetralizationIimg,
            title: 'Reports and Dashboards',
            subtitle: 'Improve your operational KPIs',
            description: "Qntrl helps you keep an eye on the most important metrics for your business, using built-in reports like blueprint duration chart, stage utilization chart, and blueprint usage report. You can also generate and schedule your own reports. Plus, SLA reminders help you stay compliant.",
        },
        'Process Mapping': {
            image: cetralizationIimg,
            title: 'Process Mapping',
            subtitle: 'Orchestrate, Visually',
            description: 'Visual and intuitive process mapping gets you started designing your process in no time. Decide what forms should kick-start your process, and what fields to include. Our workflow designer also includes advanced features like parallel transitions and common states.',
        },
        'Process Extensibility': {
            image: cetralizationIimg,
            title: 'Process Extensibility',
            subtitle: 'Make Qntrl even more powerful',
            description: "Extend Qntrl's functionality or connect it to other systems in your organization. APIs, custom functions, client and server script are some of the options that will help you finish tailoring Qntrl to your exact needs. We also have a gallery of ready-made third-party integrations.",
        },
        'Designed for Enterprise': {
            image: cetralizationIimg,
            title: 'Designed for Enterprise',
            subtitle: 'Enterprise Security',
            description: "Field access privileges, encryption and field masks, role-based access controls, and encrypted file storage keep your sensitive information safe. Audit capabilities help you figure out who did what and when, while built-in Active Directory integration help you manage users effortlessly.",
        }

    };

    useEffect(() => {
        let isAnimating = true;

        if (selectedItem !== null) {
            controls.start('visible');
            setTimeout(() => {
                if (isAnimating) {
                    setSelectedContent(contentMap[selectedItem]);
                }
            }, 500);
        } else {
            controls.start('hidden');
            setTimeout(() => {
                if (isAnimating) {
                    setSelectedContent(null);
                }
            }, 1000);
        }

        return () => {
            isAnimating = false;
        };
    }, [selectedItem, controls, contentMap]);

    const cardVariants = {
        hidden: { opacity: 0, transition: { duration: 1, ease: 'easeIn' } },
        visible: { opacity: 1, transition: { duration: 1, ease: 'easeIn' } },
    };

    const transition = {
        hidden: { x: '100%' },
        visible: { x: 0 },
    };

    if (!selectedContent || !isVisible) {
        return null; // Return null if the card is not visible
    }

    const { image, title, subtitle, subtitle2, description } = selectedContent;

    return (
        <Grid xs={7}>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={transition}
                style={{ height: '100%', overflow: 'hidden' }}
            > <motion.div variants={cardVariants}>
                    <Card ref={ref}
                        sx={{
                            visibility: isVisible ? 'visible' : 'hidden',
                            opacity: isVisible ? 1 : 0,
                            transition: 'visibility 0s linear 0.3s, opacity 0.3s linear',
                            mt: 1,
                            height: 550
                        }}>
                        <Grid container sx={{ height: '100%' }}>
                            <Grid xs={6} sx={{ borderRight: '1px solid black', height: '100%' }}>
                                <Grid xs={10} xsOffset={2} sx={{ height: '100%' }}>
                                    <img src={cetralizationIimg} width='100%' height='100%' style={{ objectFit: 'contain' }} />
                                </Grid>
                            </Grid>
                            <Grid xs={4} xsOffset={1}>
                                <Stack sx={{ display: 'flex', mt: 2 }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 4 }}>
                                        {title}
                                    </Typography>
                                    <Typography variant="h5" sx={{ fontWeight: 600, lineHeight: 1.5 }}>
                                        {subtitle}
                                    </Typography>
                                    <Typography variant="body1" sx={{ lineHeight: 2 }}>
                                        {description}
                                    </Typography>
                                </Stack>
                                <Button size="small" sx={{ color: 'orangered', textTransform: 'none' }} endIcon={<ArrowForwardIosIcon sx={{ fontSize: '16px' }} />}>
                                    Explore all
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                </motion.div>
            </motion.div>
        </Grid>
    );
});
export default WorkflowCardContent