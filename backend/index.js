const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require("body-parser");

app.use(express.json());
app.engine("express", express)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(bodyParser.json());


app.use(session({
    secret: 'ecosphere1_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false 
    }
}));

const authRoutes = require('./routes/auth');
// const actionsRoutes = require('./routes/actions');
// const userActionsRoutes = require('./routes/userActions');
// const profileRoutes = require('./routes/profile');
// const adminRoutes = require('./routes/admin');
// const requireAuth = require('./middleware/requireAuth');

app.use('/api/auth', authRoutes);
// app.use('/api/actions', actionsRoutes);
// app.use('/api/user-actions', userActionsRoutes, requireAuth);
// app.use('/api/profile', profileRoutes, requireAuth);
// app.use('/api/admin', adminRoutes, requireAuth);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});