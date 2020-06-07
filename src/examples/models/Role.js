import { Schema, model, models } from 'mongoose';

const RoleSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Role name is missing'],
    },
    level: {
      type: String,
      required: [true, 'level is missing'],
    },
    description: {
      type: String,
      required: [true, 'Role description is missing'],
    },
  },
  {
    timestamps: true,
  },
);

export default models.Role ?? model('Role', RoleSchema);
