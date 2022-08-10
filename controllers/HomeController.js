exports.getHomePage = (req, res, next) => {
    res.render('home', {
        pageTitle: 'Home',
        login: true
    });
};