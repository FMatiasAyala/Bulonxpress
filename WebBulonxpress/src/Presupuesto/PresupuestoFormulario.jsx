import { useState } from "react";
import { Box, TextField, Typography, Button, Grid } from "@mui/material";
import PresupuestoView from "./PresupuestoView";

const PresupuestoFormulario = () => {
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    domicilio: "",
    cuit: "",
    fecha: "",
  });

  const [items, setItems] = useState([]);
  const [concepto, setConcepto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precioUnitario, setPrecioUnitario] = useState("");
  const [mostrarPresupuesto, setMostrarPresupuesto] = useState(false);

  const agregarItem = () => {
    if (!concepto || !cantidad || !precioUnitario) {
      alert("Por favor, complete todos los campos del ítem.");
      return;
    }

    const nuevoItem = {
      concepto,
      cantidad,
      precioUnitario: parseFloat(precioUnitario),
    };

    setItems([...items, nuevoItem]);
    setConcepto("");
    setCantidad("");
    setPrecioUnitario("");
  };

  const handleVistaPrevia = () => {
    setMostrarPresupuesto(true);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" textAlign="center">Cargar Presupuesto</Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Datos del Cliente</Typography>
          <TextField label="Nombre" fullWidth sx={{ mb: 2 }}
            value={cliente.nombre}
            onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })}
          />
          <TextField label="Apellido" fullWidth sx={{ mb: 2 }}
            value={cliente.apellido}
            onChange={(e) => setCliente({ ...cliente, apellido: e.target.value })}
          />
          <TextField label="Domicilio" fullWidth sx={{ mb: 2 }}
            value={cliente.domicilio}
            onChange={(e) => setCliente({ ...cliente, domicilio: e.target.value })}
          />
          <TextField label="CUIT" fullWidth sx={{ mb: 2 }}
            value={cliente.cuit}
            onChange={(e) => setCliente({ ...cliente, cuit: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Ítems del Presupuesto</Typography>
          <TextField
            label="Fecha"
            type="date"
            fullWidth sx={{ mb: 2 }}
            value={cliente.fecha}
            onChange={(e) => setCliente({ ...cliente, fecha: e.target.value })}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Concepto"
            fullWidth sx={{ mb: 2 }}
            value={concepto}
            onChange={(e) => setConcepto(e.target.value)}
          />
          <TextField
            label="Cantidad"
            type="number"
            fullWidth sx={{ mb: 2 }}
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
          <TextField
            label="Precio Unitario"
            type="number"
            fullWidth sx={{ mb: 2 }}
            value={precioUnitario}
            onChange={(e) => setPrecioUnitario(e.target.value)}
          />
          <Button variant="contained" onClick={agregarItem}>Agregar Ítem</Button>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button variant="outlined" onClick={handleVistaPrevia}>
          Vista previa del Presupuesto
        </Button>
      </Box>

      {mostrarPresupuesto && (
        <Box sx={{ mt: 4 }}>
          <PresupuestoView presupuesto={{ cliente, items }} />
        </Box>
      )}
    </Box>
  );
};

export default PresupuestoFormulario;
