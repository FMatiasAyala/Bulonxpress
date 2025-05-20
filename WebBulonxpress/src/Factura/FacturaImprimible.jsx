import React from 'react';
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Divider } from '@mui/material';
import './FacturaImprimible.css';

const FacturaImprimible = ({ cliente, items }) => {
  if (!cliente || !items || items.length === 0) {
    return <div>No hay datos disponibles para la factura.</div>;
  }

  const dia = new Date();
  let diaActual = dia.toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  // ✅ Cálculo correcto del total sumando subtotales por cada ítem
  const total = items.reduce((acc, item) => {
    const cantidad = parseFloat(item.cantidad) || 0;
    const precio = parseFloat(item.precioUnitario) || 0;
    return acc + cantidad * precio;
  }, 0);

  return (
    <div id="area-imprimir">
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <img src="/FD-Logo.png" alt="Logo" className="factura-logo" />
        <Box sx={{ ml: 2 }}>
          <Typography variant="subtitle2">FABIO DISTRIBUCIONES</Typography>
          <Typography variant="subtitle2">362 486-3331</Typography>
          <Typography variant="subtitle2">{diaActual}</Typography>
        </Box>
      </Box>

      <Divider />

      {/* Subencabezado - Cliente */}
      <Box sx={{ my: 2 }}>
        <Typography><strong>Cliente:</strong> {cliente.nombre}</Typography>
        <Typography><strong>Domicilio:</strong> {cliente.domicilio}</Typography>
        <Typography><strong>Fecha:</strong> {cliente.fecha}</Typography>
      </Box>

      <Divider />

      {/* Detalle */}
      <Table size="small" sx={{ mt: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell>Descripción</TableCell>
            <TableCell>Cantidad</TableCell>
            <TableCell>P.Unitario</TableCell>
            <TableCell>Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => {
            const cantidad = parseFloat(item.cantidad) || 0;
            const precio = parseFloat(item.precioUnitario) || 0;
            const subtotal = cantidad * precio;

            return (
              <TableRow key={index}>
                <TableCell>{item.descripcion}</TableCell>
                <TableCell>{cantidad}</TableCell>
                <TableCell>${precio.toFixed(2)}</TableCell>
                <TableCell>${subtotal.toFixed(2)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {/* Totales */}
      <Box sx={{ mt: 3, textAlign: 'right' }}>
        <Typography variant="h6"><strong>Total:</strong> ${total.toFixed(2)}</Typography>
      </Box>
    </div>
  );
};

export default FacturaImprimible;
