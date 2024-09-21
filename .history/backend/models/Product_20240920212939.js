const productSchema = new mongoose.Schema({
    model: { type: String, required: true },
    serialNumber: { type: String, required: true, unique: true },
    orderDate: { type: Date, required: true },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true }
});

const Product = mongoose.model('Product', productSchema);
