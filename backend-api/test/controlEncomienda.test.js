describe('Control Encomienda - CRUD', () => {
    it('Debe crear un control de encomienda', async () => {
      const nuevoControl = { codEncomienda: 1, idEstado: 2, codAlmacen: 1 };
      const response = await request(app).post('/api/control-encomiendas').send(nuevoControl);
      expect(response.statusCode).toBe(201);
      expect(response.body.mensaje).toBe('Control de encomienda creado exitosamente');
    });
  
    it('Debe obtener todos los controles de encomienda', async () => {
      const response = await request(app).get('/api/control-encomiendas');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });
  