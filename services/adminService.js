const getRoomByAdminId = async (adminId) => {
    const rooms = await Room.find({adminId});
    return rooms;
}