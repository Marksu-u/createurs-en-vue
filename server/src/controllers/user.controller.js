import User from '../models/user.model.js';

export const getUserDetails = async (req, res) => {
    const userId = req.params.id;

    try {
        const userDetails = await User.findById(userId);

        if (!userDetails) {
            return res.status(404).send({message: 'User Not Found'});
          }
      
          res.json(userDetails);
        } catch (err) {
          res.status(500).send({message: err.message});
        }
};