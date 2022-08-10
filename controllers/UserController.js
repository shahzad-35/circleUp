exports.getSignupForm = (req, res, next) => {
    res.render('user/signup-form', {
        pageTitle: 'Signup Form',
        login: false
    });
};


exports.getLoginForm = (req, res, next) => {
    res.render('user/login-form', {
        pageTitle: 'Login Form',
        login: false
    });
};