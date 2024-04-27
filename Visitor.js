import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HailSharpIcon from '@mui/icons-material/HailSharp';

function AddVisitor() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      phoneNumber: data.get('phoneNumber'),
      age: data.get('age'),
      place: data.get('place'),
    });

    // Assume form submission is successful
    setIsSubmitted(true);
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div
          style={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* You can replace this avatar with an icon representing a visitor */}
            <HailSharpIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            View Task
          </Typography>
          {isSubmitted ? (
            <Typography variant="body1" color="primary" style={{ marginTop: 20 }}>
              
            </Typography>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ marginTop: 20 }}>
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoFocus
              /> */}
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
              /> */}
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
              /> */}
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                type="tel"
              /> */}
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                type="number"
              /> */}
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="place"
                label="Place"
                name="place"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ marginTop: 20 }}
              > Update 
              </Button>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ marginTop: 20 }}
                
              >Delete </Button>
               
            </form>
          )}
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default AddVisitor;