module.exports = {
    health : async (req,res) => {
        try {
            res.status(200).json({message:"Health is okey !! Cool 🤟"})
        } catch (err) {
            res.status(404).json({message:"Server error 🙏"})
        }
    },
    protectedHealth : async (req, res) => {
        try {
            res.status(200).json({message:"Protected Health is okey !! Cool 🤟"})
        } catch (err) {
            res.status(404).json({message:"Server error 🙏"})
        }
    }
}