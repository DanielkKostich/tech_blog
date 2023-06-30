const sequelize = require('./models');

const Sequelize = require('sequelize');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const db = require('./models');
const routes = require('./routes/index.js');
const exphbs = require('express-handlebars');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Configure middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Configure sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Configure routes
app.use(routes);


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
  });