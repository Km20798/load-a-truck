const request = require('supertest');
const truckRouter = require('../routes/TruckRouter');
const app = require('../app');


describe('addTruck' , ()=> {
    it('should response with 200 status code' , async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    })
})

describe('addTruck' , ()=> {
    it('should response with 301 status code' , async () => {
        const response = await request(app).post('/trucks').send({
            name:'Truck 1',
            image:'sssss',
            weight:22
        });
        expect(response.statusCode).toBe(302);
    })
})