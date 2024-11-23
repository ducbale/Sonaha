const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Tên tòa nhà
    address: { type: String, required: true }, // Địa chỉ
    area: { type: Number, required: true }, // Diện tích (m2)
    price: { type: Number, required: true }, // Giá (VNĐ)
    frontage: { type: Number, default: null }, // Mặt tiền (mét)
    alley: { type: Number, default: null }, // Đường vào (mét)
    floors: { type: Number, default: null }, // Số tầng
    bedrooms: { type: Number, default: null }, // Số phòng ngủ
    description: { type: String, default: '' }, // Mô tả chi tiết
    legality: { type: String, enum: ['Sổ đỏ', 'Sổ hồng', 'Hợp đồng mua bán', 'Khác'], default: 'Khác' }, // Pháp lý
    furniture: { type: String, default: 'Không có nội thất' }, // Nội thất
    state: { type: String, require: true },


    media: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }] // Liên kết với bảng Media

},
    { timestamps: true }
);

const Building = mongoose.model('Building', buildingSchema);


module.exports = Building;