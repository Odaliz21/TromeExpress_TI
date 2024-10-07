describe('Usuario - CRUD', () => {
    it('Debe registrar un nuevo usuario', async () => {
      const nuevoUsuario = { username: 'admin', password: 'admin123' };
      const response = await request(app).post('/api/auth/register').send(nuevoUsuario);
      expect(response.statusCode).toBe(201);
      expect(response.body.mensaje).toBe('Usuario creado exitosamente');
    });
  
    it('Debe iniciar sesión correctamente', async () => {
      const loginData = { username: 'admin', password: 'admin123' };
      const response = await request(app).post('/api/auth/login').send(loginData);
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('token');
    });
  });
  