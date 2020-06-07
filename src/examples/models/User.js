import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    title: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, 'First name is missing'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is missing'],
    },
    avatar: {
      type: String,
      default:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRE95qPiotkOo4A7GdJm_bDsIZtT0BQxqmwTg&usqp=CAU',
    },
    age: {
      type: Number,
      required: [true, 'Age missing'],
    },
    countryCode: {
      type: String,
      maxlength: 4,
      required: [true, 'Country code missing'],
    },
    address: String,
    phoneNumber: {
      type: String,
      required: [true, 'Phone number missing'],
    },
    email: {
      type: String,
      required: [true, 'Email address missing'],
    },
    password: {
      type: String,
      required: [true, 'Password is missing'],
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: 'role',
    },
  },
  {
    timestamps: true,
  },
);

export default models.User ?? model('User', UserSchema);
