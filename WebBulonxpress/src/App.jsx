// src/App.jsx
import { useState } from "react";
import {
  Typography,
  Divider,
  Container,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import FormularioCarga from "./Cobranza/FormularioCarga";
import TablaFacturas from "./Cobranza/TablaFacturas";
import BotonImprimir from "./Cobranza/BotonImprimir";
import FacturaView from "./Factura/FacturaView";
import FormularioFactura from "./Factura/FormularioFactura";
import "./Cobranza/Cobranza.css";
import "./App.css";

function Home({ datos, agregarDato }) {
  const navigate = useNavigate();

  const handleVerFactura = () => {
    navigate("/facturas", { state: { datos } });
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Cobranzas
      </Typography>
      <FormularioCarga onAgregar={agregarDato} />
      <Divider />
      <TablaFacturas datos={datos} />
      <BotonImprimir />
      <Button
        variant="outlined"
        color="primary"
        onClick={handleVerFactura}
        sx={{ mt: 2 }}
      >
        Ver/Imprimir Factura
      </Button>
    </>
  );
}

function App() {
  const [datos, setDatos] = useState([]);
  const [facturas, setFacturas] = useState([]);
  
  const agregarFactura = (nuevaFactura) => {
    setFacturas((prev) => [...prev, nuevaFactura]);
  };

  const agregarDato = (nuevo) => {
    setDatos((prev) => [...prev, nuevo]);
  };


  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/facturas">
            Facturas
          </Button>
          <Button color="inherit" component={Link} to="/crear-factura">
            Nueva Factura
          </Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Routes>
          <Route
            path="/"
            element={<Home datos={datos} agregarDato={agregarDato} />}
          />
          <Route path="/facturas" element={<FacturaView factura={facturas}/>} />
          <Route
            path="/crear-factura"
            element={
              <FormularioFactura
                onAgregar={agregarFactura}
              />
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
