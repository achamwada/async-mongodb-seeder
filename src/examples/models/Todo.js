import { Schema, model } from 'mongoose'

const TodoSchema = new Schema(
  {
    title: String,
    img: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

export default model('todo', TodoSchema)
