const request = require('supertest');
const app = require('../index');

describe('Almacen - CRUD', () => {
  it('Debe crear un nuevo almacén', async () => {
    const nuevoAlmacen = { NombreAlmacen: 'Almacén Lima', Direccion: 'Av. Lima', Ciudad: 'Lima', Telefono: '123456', Capacidad: 500 };
    const response = await request(app).post('/api/oficinas').send(nuevoAlmacen);
    expect(response.statusCode).toBe(201);
    expect(response.body.mensaje).toBe('Almacén creado exitosamente');
  });

  it('Debe obtener todos los almacenes', async () => {
    const response = await request(app).get('/api/oficinas');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
