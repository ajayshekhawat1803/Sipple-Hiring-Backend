import mongoose from 'mongoose'

const password = encodeURIComponent("database");
const uri = `mongodb+srv://ajayshekhawat1803:${password}@cluster0.l305iue.mongodb.net/SimpleHiring?retryWrites=true&w=majority`;
const connection = mongoose.connect(uri);

export default connection