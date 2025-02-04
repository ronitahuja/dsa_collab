const adminService = require('../services/adminService');
const getRoom = async (req, res) => {
    const adminId=req.body.adminId;
    const rooms = await adminService.getRoomByAdminId(adminId);
    if(!rooms){
        return res.status(404).send('No rooms found');
    }
    res.json({rooms});
};

module.exports = {
    getRoom,
};
