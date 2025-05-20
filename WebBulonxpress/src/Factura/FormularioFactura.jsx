import { useState } from "react";
import { Button, TextField, Box, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router";
import FacturaView from "./FacturaView";

const FormularioFactura = ({ onAgregar }) => {
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
  const navigate = useNavigate();

  const agregarItem = () => {
    if (!concepto || !cantidad || !precioUnitario) {
      alert("Por favor, ingrese todos los campos para el ítem.");
      return;
    }

    const nuevoItem = {
      concepto,
      cantidad,
      precioUnitario: parseFloat(precioUnitario),
    };

    setItems([...items, nuevoItem]);

    // Limpiar campos después de agregar
    setConcepto("");
    setCantidad("");
    setPrecioUnitario("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const facturaData = {
      cliente,
      items,
    };

    // Enviar los datos completos con cliente y los ítems
    onAgregar(facturaData);
    console.log(facturaData);

    // Limpiar todo después de enviar
    setCliente({
      nombre: "",
      apellido: "",
      domicilio: "",
      cuit: "",
      fecha: "",
    });
    setItems([]);
    navigate("/facturas");
  };

  return (
      <Box component="form" onSubmit={handleSubmit} sx={{ flexGrow: 1 }}>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h4" textAlign={"center"}>
            {" "}
            Cargar Factura{" "}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" textAlign={"center"}>
              {" "}
              Datos cliente{" "}
            </Typography>
            <TextField
              label="Nombre"
              value={cliente.nombre}
              onChange={(e) =>
                setCliente({ ...cliente, nombre: e.target.value })
              }
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Apellido"
              value={cliente.apellido}
              onChange={(e) =>
                setCliente({ ...cliente, apellido: e.target.value })
              }
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Domicilio"
              value={cliente.domicilio}
              onChange={(e) =>
                setCliente({ ...cliente, domicilio: e.target.value })
              }
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
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" textAlign={"center"}>
              {" "}
              Datos factura{" "}
            </Typography>
            <TextField
              label="Fecha"
              type="date"
              value={cliente.fecha}
              onChange={(e) =>
                setCliente({ ...cliente, fecha: e.target.value })
              }
              fullWidth
              sx={{ mb: 2 }}
              InputLabelProps={{
                shrink: true, // Esto permite que el label no se superponga
              }}
            />
            <TextField
              label="Concepto"
              value={concepto}
              onChange={(e) => setConcepto(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Cantidad"
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
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
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
          <Button onClick={agregarItem} variant="contained">
            Agregar Ítem
          </Button>
          <Button type="submit" variant="contained">
            Generar Factura
          </Button>
        </Box>
      </Box>
  );
};

export default FormularioFactura;
