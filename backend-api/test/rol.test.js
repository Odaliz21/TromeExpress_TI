describe('Rol - CRUD', () => {
    it('Debe crear un nuevo rol', async () => {
      const nuevoRol = { NombreRol: 'Administrador' };
      const response = await request(app).post('/api/roles').send(nuevoRol);
      expect(response.statusCode).toBe(201);
      expect(response.body.mensaje).toBe('Rol creado exitosamente');
    });
  
    it('Debe obtener todos los roles', async () => {
      const response = await request(app).get('/api/roles');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });
  