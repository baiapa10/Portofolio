import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import StepConnector from '@mui/material/StepConnector';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
// import { Link as MuiLink } from '@mui/material';
import CustomCursor from "./components/CustomCursor";
import AboutDescription from "./components/AboutDescription";
import ExperienceDescription from "./components/ExperienceDescription";
import ProjectDescription from "./components/ProjectDescription";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0E162A", // Warna biru
    },
    secondary: {
      main: "#a0b1c1", // Warna mint
    },
  },
});


const steps = [
  {
    label: "About",
    description: <AboutDescription />,
  },
  {
    label: "Experience",
    description: <ExperienceDescription />,
  },
  {
    label: "Project",
    description: <ProjectDescription />,
  },
];


const CustomStepIcon = ({ active, completed }) => {
  const defaultWidth = 20;
  const activeWidth = defaultWidth * 3.5;

  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
        width: active ? activeWidth : defaultWidth,
        height: 2,
        backgroundColor: active ? 'white' : 'grey.500', // Putih saat aktif, abu-abu saat tidak aktif
        transition: 'width 0.3s ease',
      }}
    />
  );
};
// Custom StepConnector for styling
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${StepConnector.line}`]: {
    borderColor: theme.palette.grey[500], // Warna konektor
  },
}));

export default function Portofolio() {
  const [activeStep, setActiveStep] = React.useState(0);
  const containerRef = React.useRef(null);
  const stepRefs = React.useRef([]);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, clientHeight } = containerRef.current;
      let currentStep = activeStep;

      for (let i = 0; i < steps.length; i++) {
        const stepElement = stepRefs.current[i];
        if (stepElement) {
          const rect = stepElement.getBoundingClientRect();
          const stepInView = rect.top + rect.height / 2 < clientHeight;
          if (stepInView) {
            currentStep = i;
          }
        }
      }
      setActiveStep(currentStep);
    }
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
    if (containerRef.current) {
      const stepElement = stepRefs.current[step];
      if (stepElement) {
        stepElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CustomCursor/>
    <Grid container spacing={2}
      sx={{
          backgroundColor: theme.palette.primary.main, // Apply primary background color
          color: theme.palette.secondary.main, // Apply secondar
      }}
    >
      {/* Left Column for Steps */}
      <Grid
        item
        xs={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', // Centers the steps vertically
          height: '100vh',
          
        }}
      >
        <Box>

        <Typography variant="h5" sx={{ fontFamily: "'Roboto', sans-serif", mt: 12, mb: -4, color: 'rgba(255, 255, 255, 0.8)', fontSize:'42px', fontWeight: 'bold' }}>
          Raden Farhan 
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "'Roboto', sans-serif", ml: 4, mt: 3, mb: -4, color: 'rgba(255, 255, 255, 0.8)', fontSize:'42px', fontWeight: 'bold' }}>
          Izzuadi Ramadhan
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "'Roboto', sans-serif", mt: 4, mb: -3, color: 'rgba(255, 255, 255, 0.8)',  }}>
          Front End Developer
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "'Roboto', sans-serif", mt: 5, mb: -4, fontSize:'18px'  }}>
        I build things for the web.
        </Typography>
        </Box>

        {/* Stepper */}
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box justifyItems={'start'}>
              <Stepper activeStep={activeStep} orientation="vertical" connector={<CustomConnector />}>
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      StepIconComponent={(props) => <CustomStepIcon active={props.active} />}
                      onClick={() => handleStepChange(index)}
                      sx={{
                        // fontWeight: activeStep === index ? 'rgba(255, 255, 255, 0.8)' : 'normal',
                        // color: activeStep === index ? 'rgba(255, 255, 255, 0.8)' : 'grey.500', // Set text color based on active state
                        cursor: 'pointer',
                        // Ensure that color change is not overridden by default styles
                        '& .MuiStepLabel-label': {
                          color: activeStep === index ? 'rgba(255, 255, 255, 0.8)' : 'grey.500',
                        },
                      }}
                    >
                      {step.label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
        </Box>
        {/* Row of Images at the Bottom */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2, // Adjust spacing between images
            mt: 2,
            mb: 3,
          }}
        >
          {[
            { src: '/image/lnknlogo.jpg', link: 'https://www.linkedin.com/in/farhan-izzuadi-377947206/', alt: 'Image 1' },
            { src: '/image/githublog.png', link: 'https://github.com/baiapa10/', alt: 'Image 3' },
            { src: '/image/iglogo.png', link: 'https://www.instagram.com/farhanrfir/', alt: 'Image 2' },
            // { src: 'https://via.placeholder.com/50x50?text=4', link: 'https://example.com/4', alt: 'Image 4' },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width: 50,
                  height: 50,
                  objectFit: 'cover',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transition
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(236, 58, 58, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </a>
          ))}
        </Box>
      </Grid>
      {/* Right Column for Step Content */}
      <Grid
        item
        xs={6}
        sx={{
          overflowY: 'auto',
          height: '100vh',
        }}
        ref={containerRef}
        onScroll={handleScroll}
      >
        <Box sx={{ maxWidth: 600, width: '100%' }}>
          {steps.map((step, index) => (
            <Box
              key={step.label}
              ref={(el) => (stepRefs.current[index] = el)} // Assign ref to each step
              sx={{
                padding: 2,
                marginBottom: 2,
                // backgroundColor: activeStep === index ? 'lightgray' : 'transparent',
              }}
            >
              {step.description}
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}
