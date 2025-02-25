import { Typography, List, ListItem, Divider, ListItemText, Box } from "@mui/material";
import * as React from 'react';

const ExperienceDescription = () => {
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 640 }}>
                <ListItem
                    alignItems="flex-start"
                    sx={{
                        transition: 'transform 0.3s, box-shadow 0.3s', // Menambahkan transisi halus
                        '&:hover': {
                            transform: 'scale(1.05)', // Zoom saat hover
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Tambahkan efek bayangan
                        },
                        "&:hover .primary-text": {
                            color: "rgba(30, 228, 228, 0.86)", // Warna saat hover
                        },
                    }}
                >
                    {/* Wrap the date and job details in Box with Flex */}
                    <Box sx={{ display: 'flex', width: '100%' }}>
                        {/* Menambahkan teks 30% untuk tanggal */}
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: 10,
                                marginTop: 2,
                                width: '30%',  // Set date width to 30%
                                whiteSpace: 'normal', // Allow wrapping of the text
                                wordWrap: 'break-word', // Ensure the text wraps if it's too long
                                overflow: 'hidden', // Prevent overflow
                            }}
                        >
                            01 Maret 2023 - 31 July 2023
                        </Typography>

                        <ListItemText
                            primary={
                                <Typography
                                    className="primary-text"
                                    ml={4}
                                    sx={{
                                        transition: "color 0.3s ease-in-out", // Opsional: transisi halus
                                        width: '70%',  // Set job title width to 70%
                                    }}
                                >
                                    Data Analytics, Certified Specific Independent Study
                                </Typography>
                            }
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: 'rgba(25, 148, 219, 0.86)', // Gunakan warna dari tema
                                        }}
                                    >
                                        {/* Additional info */}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </Box>
                </ListItem>
                <Divider variant="inset" component="li" />

                <ListItem
                    alignItems="flex-start"
                    sx={{
                        transition: 'transform 0.3s, box-shadow 0.3s', // Menambahkan transisi halus
                        '&:hover': {
                            transform: 'scale(1.05)', // Zoom saat hover
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Tambahkan efek bayangan
                        },
                        "&:hover .primary-text": {
                            color: "rgba(30, 228, 228, 0.86)", // Warna saat hover
                        },
                    }}
                >
                    {/* Wrap the date and job details in Box with Flex */}
                    <Box sx={{ display: 'flex', width: '100%' }}>
                        {/* Menambahkan teks 30% untuk tanggal */}
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: 10,
                                marginTop: 2,
                                width: '30%',  // Set date width to 30%
                                whiteSpace: 'normal', // Allow wrapping of the text
                                wordWrap: 'break-word', // Ensure the text wraps if it's too long
                                overflow: 'hidden', // Prevent overflow
                            }}
                        >
                            01 September 2023 - 16 February 2024
                        </Typography>

                        <ListItemText
                            primary={
                                <Typography
                                    ml={3}
                                    className="primary-text"
                                    sx={{
                                        transition: "color 0.3s ease-in-out", // Opsional: transisi halus
                                        width: '70%',  // Set job title width to 70%
                                    }}
                                >
                                    Web Developer, PT.Zegen Solusi Mandiri
                                </Typography>
                            }
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: 'rgba(57, 88, 182, 0.8)', // Gunakan warna dari tema
                                        }}
                                    >
                                        {/* Additional info */}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{
                                            marginRight: 2,
                                            fontWeight: 'bold',
                                            color: 'rgba(25, 148, 219, 0.86)', // Gunakan warna dari tema
                                        }}
                                    >
                                        {/* Additional info */}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </Box>
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </>
    );
};

export default ExperienceDescription;
