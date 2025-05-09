import { useState } from "react";
import { Button, TextField, Box } from "@mui/material";

const FormularioFactura = ({ onAgregar }) => {
  const [cliente, setCliente] = useState({
    nombre: '',
    domicilio: '',
    cuit: '',
  });
  const [factura, setFactura] = useState('');
  const [items, setItems] = useState([]);
  const [concepto, setConcepto] = useState('');
  const [monto, setMonto] = useState('');
  const [comentario, setComentario] = useState('');
  const [precioUnitario, setPrecioUnitario] = useState('');

  const agregarItem = () => {
    if (!concepto || !monto || !precioUnitario) {
      alert("Por favor, ingrese todos los campos para el ítem.");
      return;
    }

    const nuevoItem = {
      concepto,
      monto: parseFloat(monto),
      comentario,
      precioUnitario: parseFloat(precioUnitario),
    };
    
    setItems([...items, nuevoItem]);
    
    // Limpiar campos después de agregar
    setConcepto('');
    setMonto('');
    setComentario('');
    setPrecioUnitario('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const facturaData = {
      cliente,
      factura,
      items,
    };

    // Enviar los datos completos con cliente y los ítems
    onAgregar(facturaData);
    console.log(facturaData)

    // Limpiar todo después de enviar
    setCliente({ nombre: '', domicilio: '', cuit: '' });
    setFactura('');
    setItems([]);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        label="Cliente Nombre"
        value={cliente.nombre}
        onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Domicilio"
        value={cliente.domicilio}
        onChange={(e) => setCliente({ ...cliente, domicilio: e.target.value })}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="CUIT"
        value={cliente.cuit}
        onChange={(e) => setCliente({ ...cliente, cuit: e.target.value })}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Factura"
        value={factura}
        onChange={(e) => setFactura(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      
      {/* Formulario para agregar ítems */}
      <TextField
        label="Concepto"
        value={concepto}
        onChange={(e) => setConcepto(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Monto"
        type="number"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Comentario"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Precio Unitario"
        type="number"
        value={precioUnitario}
        onChange={(e) => setPrecioUnitario(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      
      <Button onClick={agregarItem} variant="contained" sx={{ mb: 2 }}>
        Agregar Ítem
      </Button>

      <Button type="submit" variant="contained">
        Generar Factura
      </Button>
    </Box>
  );
};

export default FormularioFactura;
