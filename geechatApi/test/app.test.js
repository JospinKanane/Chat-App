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
            .send()
            .end((err, res)=> {
                res.should.have.status(200);
            })
    })

    it('should return status 200 on user router /getallusers', ()=>{
        chai.request(server)
            .get('/getallusers/:userId')
            .send({_id: { $ne: "6388b73577b362c510a2b4a3" } })
            .end((err, res)=> {
                res.should.have.status(200);
            })
    })

    it('should return status 200 on user router /sendmsg', ()=>{
        chai.request(server)
            .post('/sendmsg')
            .send({
                message : "salut ça va ?",
                users : ["6388b70777b362c510a2b49b", "6388b73577b362c510a2b4a3"],
                sender : "6388b70777b362c510a2b49b",
            })
            .end((err, res)=> {
                    res.should.have.status(200);
            })
    })

    it('should return status 200 on user router /users/:userId', ()=>{
        chai.request(server)
            .get('/users/:userId')
            .send({_id: { $ne: "6388b73577b362c510a2b4a3" } })
            .end((err, res)=> {
                    res.should.have.status(200);
            })
    })
})