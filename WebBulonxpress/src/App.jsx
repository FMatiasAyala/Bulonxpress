// src/App.jsx
import { useState } from "react";
import {
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
} from "react-router-dom";
import FacturaView from "./Factura/FacturaView";
import FormularioFactura from "./Factura/FormularioFactura";
import Cobranza from "./Cobranza/Cobranza";
import Home from "./Home";
import "./App.css";




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
      <AppBar position="static" color="info">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/cobranza">
            Planilla de Cobranzas
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
            element={<Home/>}
          />
          <Route
            path="/cobranza"
            element={<Cobranza datos={datos} agregarDato={agregarDato} />}
          />
          <Route path="/facturas" element={<FacturaView factura={facturas[0]} />} />
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
