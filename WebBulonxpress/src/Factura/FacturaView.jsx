import React from 'react';
import FacturaImprimible from './FacturaImprimible';
import { Button } from '@mui/material';

const FacturaView = ({ facturas }) => {
  // Asegúrate de que facturas tiene datos
  if (!facturas || facturas.length === 0) {
    return <div>No se encontraron facturas.</div>;
  }


  const cliente = {
    nombre: facturas.cliente?.nombre || 'Cliente Desconocido',
    domicilio: facturas.cliente?.domicilio || 'Domicilio Desconocido',
    cuit: facturas.cliente?.cuit || 'CUIT Desconocido',
  };

  const items = facturas.items?.map(item => ({
    descripcion: item.concepto,
    cantidad: 1, // Ajusta según lo necesario
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
