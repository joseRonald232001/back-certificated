const router =require("express").Router();

const userServices =require('./user.services');

router.route("/allusers")
.get(userServices.getAllUsers);

router.route('/newuser')
.post(userServices.postNewUser);

router.route("/users/:id")
.delete(userServices.deleteUser);


module.exports= router;