
exports.isLoggedIn = function(req, res, next) {
    if (!req.session.uid) {
        res.redirect('/');
    } else{
        next();
    }
};
