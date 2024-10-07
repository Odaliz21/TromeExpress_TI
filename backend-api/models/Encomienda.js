const connection = require('../config/db');

const Encomienda = {
    // Crear una nueva encomienda
    crear: async (data) => {
        const { codClienteRemitente, codClienteDestinatario, codAlmacenOrigen, codAlmacenDestino, codUsuario, Destino, Peso, Tipo, EstadoActualAlmacen, FechaRecepcion } = data;
        const [result] = await connection.query('INSERT INTO Encomienda (codClienteRemitente, codClienteDestinatario, codAlmacenOrigen, codAlmacenDestino, codUsuario, Destino, Peso, Tipo, EstadoActualAlmacen, FechaRecepcion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [codClienteRemitente, codClienteDestinatario, codAlmacenOrigen, codAlmacenDestino, codUsuario, Destino, Peso, Tipo, EstadoActualAlmacen, FechaRecepcion]);
        return result;
    },
    
    // Obtener todas las encomiendas
    obtenerTodas: async () => {
        const [results] = await connection.query('SELECT * FROM Encomienda');
        return results;
    },

    // Actualizar una encomienda
    actualizar: async (codEncomienda, data) => {
        const { Destino, Peso, Tipo, EstadoActualAlmacen, FechaRecepcion, FechaEntrega } = data;
        const [result] = await connection.query('UPDATE Encomienda SET Destino = ?, Peso = ?, Tipo = ?, EstadoActualAlmacen = ?, FechaRecepcion = ?, FechaEntrega = ? WHERE codEncomienda = ?', 
            [Destino, Peso, Tipo, EstadoActualAlmacen, FechaRecepcion, FechaEntrega, codEncomienda]);
        return result;
    },

    // Eliminar una encomienda
    eliminar: async (codEncomienda) => {
        const [result] = await connection.query('DELETE FROM Encomienda WHERE codEncomienda = ?', [codEncomienda]);
        return result;
    }
};

module.exports = Encomienda;
