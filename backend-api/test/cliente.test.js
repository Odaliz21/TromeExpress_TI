describe('Cliente - CRUD', () => {
    it('Debe crear un nuevo cliente', async () => {
      const nuevoCliente = { Nombre: 'Juan', Apellido: 'Perez', DNI: '12345678', Tipo: 'Remitente' };
      const response = await request(app).post('/api/clientes').send(nuevoCliente);
      expect(response.statusCode).toBe(201);
      expect(response.body.mensaje).toBe('Cliente creado exitosamente');
    });
  
    it('Debe obtener todos los clientes', async () => {
      const response = await request(app).get('/api/clientes');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });
  