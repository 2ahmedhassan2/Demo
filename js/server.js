const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Configure Passport for Google
passport.use(new GoogleStrategy({
    clientID: '91607821798-4j0atujcof3iel0805b4kamfcti33gic.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

// Serialize user
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Google Auth Routes
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login.html' }),
    (req, res) => {
        // Successful login
        res.redirect('../index.html');
    }
);












const FacebookStrategy = require('passport-facebook').Strategy;

// Configure Passport for Facebook
passport.use(new FacebookStrategy({
    clientID: 'YOUR_FACEBOOK_APP_ID',
    clientSecret: 'YOUR_FACEBOOK_APP_SECRET',
    callbackURL: '/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

// Facebook Auth Routes
app.get('/auth/facebook',
    passport.authenticate('facebook')
);

app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login.html' }),
    (req, res) => {
        // Successful login
        res.redirect('../index.html');
    }
);








