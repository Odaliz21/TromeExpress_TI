describe('Encomienda - CRUD', () => {
    it('Debe crear una nueva encomienda', async () => {
      const nuevaEncomienda = { codClienteRemitente: 1, codClienteDestinatario: 2, codAlmacenOrigen: 1, codAlmacenDestino: 2, codUsuario: 1, Destino: 'Cusco', Peso: 10, Tipo: 'Paquete', EstadoActualAlmacen: 'Recibido', FechaRecepcion: '2024-10-06' };
      const response = await request(app).post('/api/encomiendas').send(nuevaEncomienda);
      expect(response.statusCode).toBe(201);
      expect(response.body.mensaje).toBe('Encomienda creada exitosamente');
    });
  
    it('Debe obtener todas las encomiendas', async () => {
      const response = await request(app).get('/api/encomiendas');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });
  