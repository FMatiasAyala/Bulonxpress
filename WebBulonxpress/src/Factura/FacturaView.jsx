import React from 'react';
import FacturaImprimible from './FacturaImprimible';
import { Button } from '@mui/material';

const FacturaView = ({ factura }) => {
  if (!factura || !factura.cliente || !factura.items) {
    return <div>No se encontró la factura.</div>;
  }

  const cliente = {
    nombre: factura.cliente.nombre || 'Cliente Desconocido',
    domicilio: factura.cliente.domicilio || 'Domicilio Desconocido',
    cuit: factura.cliente.cuit || 'CUIT Desconocido',
    fecha: factura.cliente.fecha || '',
  };

  const items = factura.items.map(item => ({
    descripcion: item.concepto,
    cantidad: item.cantidad,
    precioUnitario: item.precioUnitario,
    comentario: item.comentario,
  }));

  const handleImprimir = () => {
    window.print();
  };

  return (
    <>
      <FacturaImprimible cliente={cliente} items={items} />
      <Button onClick={handleImprimir} variant="contained" sx={{ mt: 2 }}>
        Imprimir
      </Button>
    </>
  );
};

export default FacturaView;
