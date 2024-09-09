// app/page.js
'use client';

import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Container, Grid, Card, CardContent } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import styles from './page.module.css';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import DescriptionIcon from '@mui/icons-material/Description';

export default function WaitlistPage() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, 'waitlistEmails'), {
                email: email,
                timestamp: new Date(),
            });
            setEmail('');
            setSubmitted(true);
        } catch (error) {
            console.error('Error adding email to Firebase: ', error);
        }
    };

    return (
        <div className={styles.container}>
            <Container maxWidth="md" className={styles.content}>
                <Typography variant="h1" className={styles.title}>
                    Welcome.
                </Typography>
                <Typography variant="h5" className={styles.subtitle}>
                    Your ultimate assistant for academic research
                </Typography>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <TextField
                        label="Enter your email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.input}
                    />
                    <Button type="submit" variant="contained" className={styles.button}>
                        Join Waitlist
                    </Button>
                </form>

                {submitted && (
                    <Typography variant="h6" className={styles.thankYou}>
                        Thank you for joining the waitlist!
                    </Typography>
                )}

                <Typography variant="caption" className={styles.comingSoon}>
                    Features still in development - Coming Soon
                </Typography>

                {/* Features Section */}
                <Box className={styles.featuresSection}>
                    <Typography variant="h4" className={styles.featuresTitle}>
                        Upcoming Features
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Card className={styles.featureCard}>
                                <CardContent>
                                    <SearchIcon className={styles.featureIcon} />
                                    <Typography variant="h6" className={styles.featureHeading}>
                                        Web Parsing
                                    </Typography>
                                    <Typography variant="body2" className={styles.featureText}>
                                        Automatically retrieve reliable and relevant data from the web, ensuring high-quality sources for your research.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card className={styles.featureCard}>
                                <CardContent>
                                    <ChatIcon className={styles.featureIcon} />
                                    <Typography variant="h6" className={styles.featureHeading}>
                                        Chatbot Assistant
                                    </Typography>
                                    <Typography variant="body2" className={styles.featureText}>
                                        Get real-time assistance from an AI-powered chatbot that helps you with research and writing tasks within a text editor.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card className={styles.featureCard}>
                                <CardContent>
                                    <DescriptionIcon className={styles.featureIcon} />
                                    <Typography variant="h6" className={styles.featureHeading}>
                                        Research Paper Generation
                                    </Typography>
                                    <Typography variant="body2" className={styles.featureText}>
                                        Use AI to help generate research papers, formatted and ready for submission, based on your inputs and data collected.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}
