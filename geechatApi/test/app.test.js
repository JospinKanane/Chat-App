const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp)
chai.should()

describe('Testing server API', ()=>{
    it('should return status 201 on user router register', ()=>{
        chai.request(server)
            .post('/register')
            .end((err, res)=> {
                res.should.have.status(201);
            })
    })

    it('should return status 200 on user router login', ()=>{
        chai.request(server)
            .post('/login')
            .end((err, res)=> {
                res.should.have.status(200);
            })
    })

    it('should return status 200 on user router /getAllMessages', ()=>{
        chai.request(server)
            .post('/getAllMessages')
            .end((err, res)=> {
                res.should.have.status(200);
            })
    })

    it('should return status 200 on user router /getallusers', ()=>{
        chai.request(server)
            .get('/getallusers/:userId')
            .end((err, res)=> {
                res.should.have.status(200);
            })
    })

    it('should return status 200 on user router /sendmsg', ()=>{
        chai.request(server)
            .post('/sendmsg')
            .end((err, res)=> {
                if(res)
                    res.should.have.status(200);
                if(err)
                    err.should.have.status(500)
            })
    })
})