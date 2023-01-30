import React from 'react';
import './IMCCalculator.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { useState } from 'react';
import Alert from '@mui/material/Alert';

export default function IMCCalculator() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('');

  function calculate() {
    const calculoAltura = altura / 100;
    const imc = peso / (calculoAltura * calculoAltura);

    if (imc < 18.5) {
      setMessage('Abaixo do peso');
      setSeverity('error');
    } else if (imc >= 18.5 && imc < 25) {
      setMessage('Peso normal');
      setSeverity('success');
    } else if (imc >= 25 && imc < 30) {
      setMessage('Sobrepeso');
      setSeverity('warning');
    } else if (imc >= 30 && imc < 35) {
      setMessage('Obesidade Grau 1');
      setSeverity('warning');
    } else if (imc >= 35 && imc < 40) {
      setMessage('Obesidade Grau 2');
      setSeverity('error');
    } else if (imc >= 40) {
      setMessage('Obesidade Grau 3');
      setSeverity('error');
    }
  }

  return (
    <Box m={5}>
    <Container maxWidth="xs" >
      <div className="wrapper">
        <h1>Calculadora de IMC</h1>
        <Box my={4}>
          <TextField
            className="text-field"
            label="Altura (cm)"
            type="number"
            variant="outlined"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </Box>

        <Box my={4}>
          <TextField
            className="text-field"
            label="Peso (kg)"
            type="number"
            variant="outlined"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </Box>
        <Box my={4}>
          <Button className="btn-calculate" variant="contained" onClick={calculate}>
            Calcular
          </Button>
        </Box>
        {message ? (
          <Alert className='alert' variant="filled" severity={severity}>
            {message}
          </Alert>
        ) : null}
      </div>
    </Container>
    </Box>
  );
}
