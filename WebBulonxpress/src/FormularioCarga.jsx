import { useState } from 'react';
import { TextField, Button, Stack, Typography } from '@mui/material';

const FormularioCarga = ({ onAgregar }) => {
  const [clienteActual, setClienteActual] = useState('');
  const [form, setForm] = useState({
    cliente: '',
    factura: '',
    monto: '',
    vencimiento: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cliente = clienteActual || form.cliente;

    if (cliente && form.factura) {
      onAgregar({
        cliente,
        factura: form.factura,
        monto: form.monto,
        vencimiento: form.vencimiento
      });
      setClienteActual(cliente); // se fija definitivamente
      setForm({ cliente: '', factura: '', monto: '', vencimiento: '' });
    }
  };

  const cambiarCliente = () => {
    setClienteActual('');
    setForm({ cliente: '', factura: '', monto: '', vencimiento: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2} mb={2} alignItems="center" flexWrap="wrap">
        {!clienteActual ? (
          <TextField
            name="cliente"
            label="Cliente"
            value={form.cliente}
            onChange={handleChange}
          />
        ) : (
          <>
            <Typography variant="subtitle1">
              Cliente actual: <strong>{clienteActual}</strong>
            </Typography>
            <Button onClick={cambiarCliente} color="secondary" variant="outlined">
              Cambiar cliente
            </Button>
          </>
        )}
        <TextField name="factura" label="Factura" value={form.factura} onChange={handleChange} />
        <TextField name="monto" label="Monto" type="number" value={form.monto} onChange={handleChange} />
        <TextField name="vencimiento" label="Vencimiento" type="date" InputLabelProps={{ shrink: true }} value={form.vencimiento} onChange={handleChange} />
        <Button variant="contained" type="submit">Agregar</Button>
      </Stack>
    </form>
  );
};

export default FormularioCarga;
