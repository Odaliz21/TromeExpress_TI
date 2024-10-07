describe('Historial Encomienda - CRUD', () => {
    it('Debe crear un historial de encomienda', async () => {
      const nuevoHistorial = { codEncomienda: 1, DetalleCambio: 'Recibido en almacén Lima' };
      const response = await request(app).post('/api/historial-encomiendas').send(nuevoHistorial);
      expect(response.statusCode).toBe(201);
      expect(response.body.mensaje).toBe('Historial de encomienda creado exitosamente');
    });
  
    it('Debe obtener todo el historial de encomiendas', async () => {
      const response = await request(app).get('/api/historial-encomiendas');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });
  