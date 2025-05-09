import { Button } from '@mui/material';

const BotonImprimir = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button variant="outlined" color="secondary" onClick={handlePrint}>
      Imprimir listado
    </Button>
  );
};

export default BotonImprimir;
