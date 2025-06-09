import {
    Box,
    Typography,
    Divider,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    Button
} from "@mui/material";
import "./PresupuestoView.css"

const PresupuestoView = ({ presupuesto }) => {
    const { cliente, items } = presupuesto;

    const diaActual = new Date().toLocaleDateString();
    const total = items.reduce((acc, item) => {
        const cantidad = parseFloat(item.cantidad) || 0;
        const precio = parseFloat(item.precioUnitario) || 0;
        return acc + cantidad * precio;
    }, 0);
    const handleImprimir = () => {
        window.print();
    };
    return (
        <>

            <div id="area-imprimir-presupuesto" style={{ padding: "1rem", background: "#fff" }}>
                {/* Encabezado */}
                <Typography variant="h5" align="center" gutterBottom>
                    PRESUPUESTO
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <img src="/FD-Logo.png" alt="Logo" className="factura-logo" style={{ width: 100, height: "auto" }} />
                    <Box sx={{ ml: 2 }}>
                        <Typography variant="subtitle2">FABIO DISTRIBUCIONES</Typography>
                        <Typography variant="subtitle2">Resistencia, Chaco</Typography>
                        <Typography variant="subtitle2">362 486-3331</Typography>
                        <Typography variant="subtitle2">{diaActual}</Typography>
                    </Box>
                </Box>

                <Divider />

                {/* Datos del Cliente */}
                <Box sx={{ my: 2 }}>
                    <Typography><strong>Cliente:</strong> {cliente.nombre}</Typography>
                    <Typography><strong>Domicilio:</strong> {cliente.domicilio}</Typography>
                    <Typography><strong>Fecha:</strong> {cliente.fecha}</Typography>
                </Box>

                <Divider />

                {/* Detalle del presupuesto */}
                <Table size="small" sx={{ mt: 2 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Cantidad</TableCell>
                            <TableCell>P. Unitario</TableCell>
                            <TableCell>Subtotal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item, index) => {
                            const cantidad = parseFloat(item.cantidad) || 0;
                            const precio = parseFloat(item.precioUnitario) || 0;
                            const subtotal = cantidad * precio;

                            return (
                                <TableRow key={index}>
                                    <TableCell>{item.descripcion || item.concepto}</TableCell>
                                    <TableCell>{cantidad}</TableCell>
                                    <TableCell>${precio.toFixed(2)}</TableCell>
                                    <TableCell>${subtotal.toFixed(2)}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>

                {/* Total */}
                <Box sx={{ mt: 3, textAlign: "right" }}>
                    <Typography variant="h6">
                        <strong>Total:</strong> ${total.toFixed(2)}
                    </Typography>
                </Box>
            </div>
            <Button onClick={handleImprimir} variant="contained" sx={{ mt: 2 }}>
                Imprimir
            </Button>
        </>
    );
};

export default PresupuestoView;
