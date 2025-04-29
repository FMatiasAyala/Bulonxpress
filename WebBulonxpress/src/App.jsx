import { useState } from 'react';
import { Typography, Divider, Container } from '@mui/material';
import FormularioCarga from './FormularioCarga';
import TablaFacturas from './TablaFacturas';
import BotonImprimir from './BotonImprimir';
import './Cobranza.css';
import './App.css';

function App() {
  const [datos, setDatos] = useState([]);

  const agregarDato = (nuevo) => {
    setDatos((prev) => [...prev, nuevo]);
  };

  return (
    <>
      <Container>
        <Typography variant="h4" gutterBottom>Cobranzas</Typography>
        <FormularioCarga onAgregar={agregarDato} />
        <Divider />
        <TablaFacturas datos={datos} />
        <BotonImprimir />
      </Container>
    </>
  );
}

export default App;
