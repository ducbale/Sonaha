const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    url: String, // Đường dẫn ảnh hoặc video (đã upload lên server hoặc cloud như AWS S3)
    type: { type: String, enum: ['image', 'video'], required: true }, // Loại: ảnh hoặc video
    relatedModel: { type: String, enum: ['Building', 'Project'], required: true }, // Loại bảng liên kết
    relatedId: { type: mongoose.Schema.Types.ObjectId, required: true } // ID của Building hoặc Project
});

const Media = mongoose.model('Media', mediaSchema);
module.exports = Media;