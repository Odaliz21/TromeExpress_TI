describe('Stock Almacén - CRUD', () => {
    it('Debe crear un nuevo registro de stock', async () => {
      const nuevoStock = { codAlmacen: 1, codEncomienda: 1 };
      const response = await request(app).post('/api/stock-almacen').send(nuevoStock);
      expect(response.statusCode).toBe(201);
      expect(response.body.mensaje).toBe('Stock en almacén creado exitosamente');
    });
  
    it('Debe obtener todo el stock de almacenes', async () => {
      const response = await request(app).get('/api/stock-almacen');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });
  