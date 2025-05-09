import React from "react";
import { Typography, Divider } from "@mui/material";
import FormularioCarga from "./FormularioCarga"
import TablaCobranza from "./TablaCobranza";
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
            <TablaCobranza datos={datos} />
            <BotonImprimir />
        </>
    );
}


export default Cobranza;