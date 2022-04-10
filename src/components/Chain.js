import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


const steps = [
    {
        label: 'Beekeeping Cooperative',
        details: {
            name:'Busy Bee',
            location:'shangi',
            type: 'Polyfloral',
            contactPerson:'Nzeyimana Jean Népomuscène',
            pictures: 'https://ipfs.infura.io:5001/api/v0',
            certification:'https://ipfs.infura.io:5001/api/v0'

        }
    }, 

    {
        label:'Beeking Union',
        details: {
            collectionCentreName:'',
            date:'',
            batchNo:'2443',
            location:''

        }

    }, 
    {
        label:'Retailer',
        details:{
            name:'The Hive Rwanda Ltd',
            website:'http://www.thehivegp.com/',
            phone:'+254 731 905 263',
            address:'House 4, KN 3 Rd'
        }
    }
]




export const ChainStepper = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  

  return (
    <Box sx={{ maxWidth: 600 }} justifyContent={'center'}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>     
              <Typography component="h1" style={{fontWeight:600}}>
                  {step.label}
              </Typography>
            </StepLabel>
            <StepContent>
                <List>
                {Object.keys(step.details).map((value, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={value} secondary={step.details[value]}></ListItemText>
                    </ListItem>
                ))}
                </List>
                <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Honey Provenance viewed completely</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}