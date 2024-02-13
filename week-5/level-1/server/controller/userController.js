const User = require('../modals/UserModal.js');
const generateToken = require('../utils/generateToken.js');

const registerUser = async (req, res) => {
    try {
        const { email, password, name, description, linkedin, twitter, interests } = req.body;

        const userExists = await User.findOne({ email });
        if(userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({ email, password, name, description, linkedin, twitter, interests });
        if(user) {
            generateToken(res, user._id);
            res.status(201).json({ message: 'User created successfully' });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

const loginUser = async(req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({ email });

        if (user && (await user.comparePassword(password))) {
          generateToken(res, user._id);
          res.status(200).json({ message: "User logged in successfully" });
        } else {
          res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

const logoutUser = async(req, res) => {
    res.cookie('jwt', '', { expires: new Date(0) });
    res.status(200).json({ message: 'User logged out successfully' });
}

const getUserProfile = async(req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

const updateUserProfile = async(req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if(user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.description = req.body.description || user.description;
            user.linkedin = req.body.linkedin || user.linkedin;
            user.twitter = req.body.twitter || user.twitter;
            user.interests = req.body.interests || user.interests;
            if(req.body.password) {
                user.password = req.body.password;
            }

            const updatedUser = await user.save();
            
            res.status(200).json({ message: 'User updated successfully', updatedUser });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

module.exports = { registerUser, loginUser, logoutUser, updateUserProfile, getUserProfile };