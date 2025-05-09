import { useState } from 'react';
import { TextField, Button, Stack, Typography, Grid } from '@mui/material';

const FormularioCarga = ({ onAgregar }) => {
  const [clienteActual, setClienteActual] = useState('');
  const [form, setForm] = useState({
    cliente: '',
    factura: '',
    monto: '',
    facturacion: '',
    vencimiento: '',
    comentario: ''
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
        facturacion: form.facturacion,
        vencimiento: form.vencimiento,
        comentario: form.comentario
      });
      setClienteActual(cliente); // se fija definitivamente
      setForm({ cliente: '', factura: '', monto: '', facturacion: '', vencimiento: '', comentario: '' });
    }
  };

  const cambiarCliente = () => {
    setClienteActual('');
    setForm({ cliente: '', factura: '', monto: '', vencimiento: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} mb={2} alignItems="center" flexWrap="wrap">
        <Grid container spacing={1}>
          <Grid item md={4}>
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
          </Grid>
          <Grid item md={12}>
            <Typography variant="subtitle1" fontWeight='bold'>
              Datos del comprobante
            </Typography>
            <TextField name="factura" label="Comprobante" value={form.factura} onChange={handleChange} />
            <TextField name="monto" label="Monto" type="number" value={form.monto} onChange={handleChange} />
            <TextField name="comentario" label="Comentario" value={form.comentario} onChange={handleChange} />
            <TextField name="facturacion" label="Facturacion" type="date" InputLabelProps={{ shrink: true }} value={form.facturacion} onChange={handleChange} />
            <TextField name="vencimiento" label="Vencimiento" type="date" InputLabelProps={{ shrink: true }} value={form.vencimiento} onChange={handleChange} />
          </Grid>
        </Grid>
        <Button variant="contained" type="submit">Agregar</Button>
      </Stack>
    </form>
  );
};

export default FormularioCarga;
