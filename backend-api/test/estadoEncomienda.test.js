describe('Estado Encomienda - CRUD', () => {
    it('Debe crear un estado de encomienda', async () => {
      const nuevoEstado = { NombreEstado: 'En tránsito' };
      const response = await request(app).post('/api/estado-encomiendas').send(nuevoEstado);
      expect(response.statusCode).toBe(201);
      expect(response.body.mensaje).toBe('Estado de encomienda creado exitosamente');
    });
  
    it('Debe obtener todos los estados de encomienda', async () => {
      const response = await request(app).get('/api/estado-encomiendas');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });
  