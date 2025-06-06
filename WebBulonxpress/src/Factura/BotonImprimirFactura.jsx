// src/BotonImprimir.jsx
import { Button } from '@mui/material';

const BotonImprimir = ({ targetId = 'area-imprimir', label = 'Imprimir' }) => {
  const handleImprimir = () => {
    const printContent = document.getElementById(targetId);
    if (!printContent) {
      alert(`No se encontró el área a imprimir con el id: ${targetId}`);
      return;
    }

    const printWindow = window.open('', '', 'height=800,width=800');
    printWindow.document.write('<html><head><title>Imprimir</title></head><body>');
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <Button variant="contained" color="primary" onClick={handleImprimir}>
      {label}
    </Button>
  );
};

export default BotonImprimir;
