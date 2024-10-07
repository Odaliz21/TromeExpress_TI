describe('Ruta - CRUD', () => {
    it('Debe crear una nueva ruta', async () => {
      const nuevaRuta = { codEncomienda: 1, DetalleRuta: 'De Lima a Cusco', TiempoEstimado: '2 días', EstadoRuta: 'En tránsito' };
      const response = await request(app).post('/api/rutas').send(nuevaRuta);
      expect(response.statusCode).toBe(201);
      expect(response.body.mensaje).toBe('Ruta creada exitosamente');
    });
  
    it('Debe obtener todas las rutas', async () => {
      const response = await request(app).get('/api/rutas');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });
  