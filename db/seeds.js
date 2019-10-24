const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Veg = require('../models/Veg')
const User = require('../models/User')

mongoose.connect(
  dbURI, 
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err) // if connect fails, will send an error to the console and exit
    db.dropDatabase() // on a good connect, first drop all data in the database
      .then(() => {
        return User.create([
          {
            username: 'Lloyd',
            email: 'lloyd@email.com',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Claire',
            email: 'claire@email.com',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Jenny',
            email: 'jenny@email.com',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Paul',
            email: 'paul@email.com',
            password: 'pass',
            passwordConfirmation: 'pass'
          }
        ])
      })
      .then(users => {
        return Veg.create([
          {
            title: 'tomato',
            typeOfVeg: 'fruit',
            varietyOfVeg: 'cherry',
            pickedDate: 5,
            description: 'very sweet',
            image: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg?w=1155&h=1528',
            isClaimed: false,
            vegLocation: 'SW18 4TQ',
            user: users[0]
          },
          {
            title: 'cucumber',
            typeOfVeg: 'gourd',
            varietyOfVeg: 'armenian',
            pickedDate: 8,
            description: 'mmmmm so juicy',
            image: 'https://www.edenbrothers.com/store/media/Seeds-Vegetables/resized/SVCUC124-1_medium.jpg',
            isClaimed: false,
            vegLocation: 'SW11 1XT',
            user: users[1]
          },
          {
            title: 'aubergine',
            typeOfVeg: 'gourd',
            varietyOfVeg: 'English',
            pickedDate: 5,
            description: 'Full of flavour and quite large. ',
            image: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg?w=1155&h=1528',
            isClaimed: false,
            vegLocation: 'SW13 9PF',
            user: users[2]
          },
          {
            title: 'Asparagus',
            typeOfVeg: 'Asparagus',
            varietyOfVeg: 'English',
            pickedDate: 5,
            description: 'beautiful colour...',
            image: 'https://www.thespruce.com/thmb/AslNxNSnIywOCJuM4fcUAU7VWBA=/1983x1416/filters:fill(auto,1)/Asparagus-GettyImages-135630192-5be349fcc9e77c0051aac6ea.jpg',
            isClaimed: false,
            vegLocation: 'SW12 8RJ',
            user: users[3]
          }
        ])
      })
      .then(vegetables => console.log(`${vegetables.length} Vegetables created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)