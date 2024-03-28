
// For Customer Profile
const isCustomer = (req, res, next) => {
    auth(req, res, () => {
        if (req.user.role == "customer") {
            next();
        } else {
            res.status(403).send("Access denied. Not authorized...");
        }
    });
};


// For Employee Profile
const isEmployee = (req, res, next) => {
    auth(req, res, () => {
        if (req.user.role == "employee") {
            next();
        } else {
            res.status(403).send("Access denied. Not authorized...");
        }
    });
};


// For Manager
const isManager = (req, res, next) => {
    auth(req, res, () => {
        if (req.user.role == "manager") {
            next();
        } else {
            res.status(403).send("Access denied. Not authorized...");
        }
    });
};