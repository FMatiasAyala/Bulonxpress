import React from "react";
import { Typography, Divider } from "@mui/material";
import FormularioCarga from "./FormularioCarga"
import TablaFacturas from "./TablaFacturas";
import BotonImprimir from "./BotonImprimir";
import "./Cobranza.css";


const Cobranza = ({ datos, agregarDato }) => {
    return (
        <>
            <Typography variant="h4" gutterBottom>
                Cobranzas
            </Typography>
            <FormularioCarga onAgregar={agregarDato} />
            <Divider />
            <TablaFacturas datos={datos} />
            <BotonImprimir />
        </>
    );
}


export default Cobranza;