import { Typography } from "@mui/material";

const AboutDescription = () => {
    return (
    <>
        <Typography mt={10} sx={{fontFamily: "'Arial', sans-serif", }}>
            I’m a developer passionate about crafting accessible, pixel-perfect user interfaces 
            that blend thoughtful design with robust engineering. My favorite work lies at the 
            intersection of design and development, creating experiences that not only look great 
            but are meticulously built for performance and usability.
        </Typography>
        <Typography mt={3}>
            I am a fresh graduate with high enthusiasm for building interactive and responsive web applications.
            With a background in Computer Science, I focus on creating and developing user interfaces (UI) 
            that are attractive and easy to use. I have experience using HTML, CSS, JavaScript, Typescript, JAVA, PHP, 
            and various frameworks like Laravel and React, and I am committed to continuously learning the 
            latest technologies to create an optimal and standardized user experience.
            </Typography>
        <Typography mt={3}>
            I am also interested in <span style={{ fontStyle: 'italic' }}>data analysis, UI/UX, back-end development, and web development.</span> 
        </Typography>
    </>
    );
};

export default AboutDescription;
