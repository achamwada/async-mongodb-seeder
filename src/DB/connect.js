import mongoose from 'mongoose'
export default async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    console.log('Connected to mongoose!')
  } catch ({ message }) {
    console.log('Error is connection to Mongoose: ', message)
  }
}
