const experss = require('express');
const router = experss.Router();
router.get('/info',(req,res)=>{
    return res.json({msg:'comming from v2 api'})
});
module.exports = router;