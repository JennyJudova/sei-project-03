_Software Engineering Immersive: Project 3_
This is the third project during the General Assembly Software Engineering Immersive course (Week 9). The project was a collaboration between Jenny Judova, Claire Smith, Paul Cooke and Lloyd Noon.

<img src="./assets/pic1.png" alt="home screen" height="500" width="780">

---

## Alloted

The project Allotted is a platform that allows people with allotments and vegetable patches list and give away surplus produce. The platform allows you to create, read, update and delete listed vegetables as well as schedule vegetable pick up, and DM users you are picking vegetables from.

### Brief

In 9 days and in groups of 4 we had to:

- *Build a full-stack application*by making your own backend and your own front-end
- *Use an Express API*to serve your data from a Mongo database
- *Consume your API with a separate front-end*built with React
- *Be a complete product*which most likely means multiple relationships and CRUD functionality for at least a couple of models
- Consume at least*one public API*to enhance your app
- *Implement thoughtful user stories/wireframes*that are significant enough to help you know which features are core MVP and which you can cut
- *Be deployed online*so it’s publicly accessible.

### Choosing the project.

Sustainability is important to every one on the team, and food waste is a concern. A few of us group are also avid gardeners so the project was chosen based on our personal interest in gardening and concerns about food waste.

### Technologies Used:

- JavaScript
- React
- HTML
- CSS
- Sass
- Node.js
- Mongoose
- Express
- Axios
- Yarn
- Supertest
- Firebase

_External APIs_

- Map Box Api
- Recipe Puppy

---

### Deployment

The app is deployed on Heroku and can be found here: [Allotted](https://allotted.herokuapp.com/)

### Getting started

Use the clone button to download the source code. In the terminal enter the following commands:

`<!— To install all the packages listed in the package.json: —>`
`$ yarn`
`<!— Run the app in your localhost: —>`
`$ yarn start`
`<!— Check the console for any issues and if there are check the package.json for any dependancies missing —>`

---

### User Experience

The app is a two sided sharing platform. Users can be vegetable growers who want to share, and people who want to collect vegetable from others or both.

<img src="./assets/pic2.png" alt="registration screen" height="500" width="780">

Vegetable that is being offered by other users can be browsed from the ‘veg on offer’ page, either in tile view or toggled to map view and there is a search bar with live filters. The tiles show a short summary of the vegetables available and will indicate if it has already been claimed by someone else.

<img src="./assets/pic3.png" alt="veg on offer screen" height="500" width="780">

Individual vegetables can be viewed from here, and if you click the claim button it will take you to the sign in page. On signing in, it will push you back to the vegetable page so you can claim it.

<img src="./assets/pic4.png" alt="veg listing screen" height="500" width="780">

Once logged in, you can create a vegetable listing or edit the ones you created earlier. When looking at other users listings you can claim them. When a user creates a vegetable listing they select their preferences for collection, which days and times they are available. When you claim a vegetable you pick a day of the week (it defaults in the invitation to the next available Monday or Tuesday, etc) and the time you would like to collect and this triggers a claim notification to the user that posted the veg. You won’t see the claim options if someone has already claimed the vegetable.

Your vegetable listings can be managed in your dashboard.

---

### Future features or changes

- Changing the messaging feature to use WebSockets
