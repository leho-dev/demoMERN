import UserModel from "../models/user.js";

const UserController = {
    signup: async (req, res) => {
        const { username, password } = req.body;

        const user = await UserModel.create({
            username,
            password,
        });

        const { password: demo, ...rest } = user._doc;

        return res.status(201).json(rest);
    },
};

export default UserController;
