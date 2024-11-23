const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    media: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }] // Liên kết với bảng Media
})
const Project = mongoose.model("project", ProjectSchema);

module.exports = Project;