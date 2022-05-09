import React, { useState } from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';




function App() {
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [userdetails, setUserDetails] = useState([]);













  
  const deleteevent = (id) => {
    let userdetailsupdate = userdetails.filter(item => item.id !=id)
    setUserDetails(userdetailsupdate)
  }


  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px' }}
    >
    </Box>
  );


  const handlesubmit = (e) => {


    // console.log(document.getElementById('name').value);
    // console.log(document.getElementById('fname').value);
    // console.log(document.getElementById('email').value);
    // console.log(document.getElementById('phoneno').value);
    // console.log(document.getElementById('place').value);
    if (name, fname, email, phoneno, place) {


      let details = {
        id: Math.random(), name, fname, email, phoneno, place

      }
      setUserDetails([...userdetails, details]);
      setName("")
      setFname("")
      setEmail("")
      setPhone("")
      setPlace("")
    }
    else {
      alert("enter all the values");
    }

  }

  console.log(userdetails);
  return (

    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <h1>
              CRUD
            </h1>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}

      >
        <TextField id="name" value={name} label="NAME" variant="outlined" onChange={(e) => setName(e.target.value)} /><br />
        <TextField id="fname" value={fname} label="FATHER NAME" variant="outlined" onChange={(e) => setFname(e.target.value)} /><br />
        <TextField id="email" value={email} label="E-MAIL" variant="outlined" onChange={(e) => setEmail(e.target.value)} /><br />
        <TextField id="phoneno" value={phoneno} label="Mobile number" variant="outlined" onChange={(e) => setPhone(e.target.value)} /><br />
        <TextField id="place" value={place} label="PLACE" variant="outlined" onChange={(e) => setPlace(e.target.value)} /><br />
        <Button variant="contained" onClick={handlesubmit}>Submit</Button>

      </Box><br />



      {userdetails && userdetails.map(eachDetail => {
        return (
          <Card sx={{ maxWidth: 345, margin: '20px 0 0 180px', padding: '50px' }}>
            <Button onClick={ () => deleteevent(eachDetail.id)} variant="contained" color="success">
              Delete
            </Button>
            <Button variant="contained" color="success">
              Edit
            </Button>
            <CardMedia
              component="img"
              height="194"
              image="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20190624122644_charge-cars-ev-mustang-1.jpg&w=700&q=90&c=1"
              alt="Paella dish"
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">{eachDetail.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">{eachDetail.fname}
              </Typography>
              <Typography variant="body2" color="text.secondary">{eachDetail.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">{eachDetail.phoneno}
              </Typography>
              <Typography variant="body2" color="text.secondary">{eachDetail.place}
              </Typography>

            </CardContent>

          </Card>
        )

      })}





    </div>
  );
}

export default App;
