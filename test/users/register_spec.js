//25/20/2019 - JJ - It worked Tal was a witness. It was randomly breaking and then randomly working. 
/* global describe, afterEach, it, expect, api */
const User = require('../../models/User')

const testDataIncorrect = {
  username: 'test',
  email: 'incorectemailcom',
  password: 'test',
  passwordConfirmation: 'incorrect'
}

// const testDataCorrect = {
//   username: 
//   email: 
//   password: 
//   userImage: 
//   availablePickUpDays:
//   availablePickUpTimes: 
//   userLocation: 
//   vegGrown: 
//   vegLookingFor: 
//   rating: 
// }

describe('POST /register', () => {
  
  afterEach(done => {
    User.deleteMany().then(() => done())
  })

  it('should return a 422 response if password and password confirmation do not match', done => {
    api.post('/api/register')
      .send(testDataIncorrect)
      .end((err, res) => {
        expect(res.status).to.eq(422)
        done()
      })
  })

  it('should return a 201 if user is created', done => {
    api.post('/api/register')
      .send(testDataIncorrect)
      .end((err, res) => {
        expect(res.status).to.eq(201)
        done()
      })
  })

  it('should return a 422 response if email does not contain @', done => { //issue here all answers are the same
    api.post('/api/register')
      .send(testDataIncorrect)
      .end(( err, res ) => {
        expect(res.status).to.eq(422)
        done()
      })
  })

  it('should return a 422 response if email does not contain .', done => { //issue here all answers are the same
    api.post('/api/register')
      .send(testDataIncorrect)
      .end(( err, res ) => {
        expect(res.status).to.eq(422)
        done()
      })
  })

  //test for user profile when its built
  // it('should return the correct feilds', done => { 
  //   api.get('/api/')
  //     .end((err, res) => {
  //       console.log(res)
  //       res.body.forEach(user => {
  //         expect(user).to.contain.keys([
  //           '_id',
  //           'username',
  //           'email',
  //           'password', 
  //           'userImage',
  //           'availablePickUpDays',
  //           'availablePickUpTimes',
  //           'userLocation',
  //           'vegGrown',
  //           'vegLookingFor',
  //           'rating',
  //           'user'
  //         ])
  //       })
  //       done()
  //     })
  // })
})