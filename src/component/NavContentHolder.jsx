import { Menu, MenuItem, Stack } from '@mui/material';
import React from 'react'
import { useState } from 'react';

const NavContentHolder = ({ open, tabmenu, setTabmenu, handleMouseLeave }) => {
    const handleMenuClose = () => {
        setTabmenu(null);
    };

    return (
        <>
            {open && tabmenu && (
                <>
                    {tabmenu.id === "feature_tour" && (
                        <Menu
                            id="Feature_Tour_menu"
                            anchorEl={tabmenu}
                            open={open}
                            onClose={handleMenuClose}
                            onMouseOut={handleMouseLeave}
                            MenuListProps={{
                                "aria-labelledby": "feature_tour",
                            }}
                            sx={{ mt: 3, boxShadow: 'none' }}
                        >
                            <Stack direction="row" spacing={3} sx={{ width: "100%", boxShadow: 'none' }}>
                                <MenuItem onClick={handleMenuClose}>Centralization & Visibility</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Process Compliance</MenuItem>
                                <MenuItem onClick={handleMenuClose}> Process Automation</MenuItem>
                                <MenuItem onClick={handleMenuClose}> Reports and Dashboards</MenuItem>
                                <MenuItem onClick={handleMenuClose}> Process Mapping</MenuItem>
                                <MenuItem onClick={handleMenuClose}> Process Extensibility</MenuItem>
                                <MenuItem onClick={handleMenuClose}> Designed for Enterprise</MenuItem>
                            </Stack>
                        </Menu>
                    )}

                    {tabmenu.id === "Solutions" && (
                        <Menu
                            id="Solutions-menu"
                            anchorEl={tabmenu}
                            open={open}
                            onClose={handleMenuClose}
                            MenuListProps={{
                                "aria-labelledby": "Solutions",
                            }}
                            sx={{ mt: 3, boxShadow: 0 }}
                        >
                            <Stack direction="row" spacing={3}>
                                <MenuItem onClick={handleMenuClose}>IT</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Marketing</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Customer Support</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Procurement</MenuItem>
                            </Stack>
                        </Menu>
                    )}
                </>
            )}
        </>
    );
};
export default NavContentHolder;