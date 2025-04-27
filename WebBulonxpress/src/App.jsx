import { useState } from 'react';
import { Container, Typography, Divider } from '@mui/material';
import FormularioCarga from './FormularioCarga';
import TablaFacturas from './TablaFacturas';
import BotonImprimir from './BotonImprimir';
import './Cobranza.css';
import './App.css';

function Cobranza() {
  const [datos, setDatos] = useState([]);

  const agregarDato = (nuevo) => {
    setDatos((prev) => [...prev, nuevo]);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Cobranzas</Typography>
      <FormularioCarga onAgregar={agregarDato} />
      <Divider sx={{ my: 2 }} />
      <TablaFacturas datos={datos} />
      <BotonImprimir />
    </Container>
  );
}

export default Cobranza;
