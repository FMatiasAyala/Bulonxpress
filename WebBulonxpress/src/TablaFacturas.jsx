import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Divider } from '@mui/material';

const TablaFacturas = ({ datos }) => {
    const agrupados = datos.reduce((acc, item) => {
        acc[item.cliente] = acc[item.cliente] || [];
        acc[item.cliente].push(item);
        return acc;
    }, {});
    const dia = new Date();
    let diaActual = dia.toLocaleDateString('es-AR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
    
    return (
        <div id="area-imprimir">
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                    component="img"
                    src='/FD-Logo.png'
                    sx={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "8px",
                        mr: 2
                    }}
                />
                <Box>
                    <Divider />
                    <Typography variant="h6">FABIO DISTRIBUCIONES - PLANILLA DE COBRANZAS</Typography>
                    <Divider />
                    <Typography variant="subtitle2">{diaActual}</Typography>
                    <Typography variant="subtitle2">362 486-3331</Typography>
                </Box>
            </Box>

            {Object.entries(agrupados).map(([cliente, facturas]) => {
                const total = facturas.reduce((acc, f) => acc + parseFloat(f.monto || 0), 0);

                return (
                    <div key={cliente} className="cliente-section" style={{ marginBottom: 24 }}>
                        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'Bold' }}>{cliente}</Typography>
                        <TableContainer component={Paper}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Factura</TableCell>
                                        <TableCell>Facturacion</TableCell>
                                        <TableCell>Vencimiento</TableCell>
                                        <TableCell>Monto</TableCell>
                                        <TableCell>Comentario</TableCell>
                                        <TableCell>Observación</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {facturas.map((f, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{f.factura}</TableCell>
                                            <TableCell>{f.facturacion}</TableCell>
                                            <TableCell>{f.vencimiento}</TableCell>
                                            <TableCell>${parseFloat(f.monto).toFixed(2)}</TableCell>
                                            <TableCell>{f.comentario}</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell colSpan={2} />
                                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                                            Total: ${total.toFixed(2)}
                                        </TableCell>
                                        <TableCell />
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                );
            })}
        </div>
    );
};

export default TablaFacturas;
