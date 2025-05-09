// src/BotonImprimir.jsx
import { Button } from '@mui/material';

const BotonImprimir = () => {
  const handleImprimir = () => {
    const printContent = document.getElementById('area-imprimir');
    const printWindow = window.open('', '', 'height=800,width=800');
    printWindow.document.write('<html><head><title>Imprimir Factura</title></head><body>');
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <Button variant="contained" color="primary" onClick={handleImprimir}>
      Imprimir Factura
    </Button>
  );
};

export default BotonImprimir;
