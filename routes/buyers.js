const router = require('express').Router();
const User = require('../models/User');

//seller list
router.get('/list-of-sellers', async (req, res) => {
        var sellerName = [];
    try {
        const sellers = await User.find({ usertype: 'seller' });
        sellers.forEach(seller => {
            sellerName.push(seller._id, seller.username)
        });
        res.send(sellerName);
    } catch(err) {
        res.status(400).send(err);
    }

});

//catalog list
router.get('/seller-catalog/:id', async (req, res)=>{
    const {id} = req.params;
    
});



module.exports = router;