import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: 'must provide a valid email',
      },
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      select: false,
    },
    history: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: 'Conversion',
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(this.password, salt);
  this.password = hashedPass;
});

userSchema.methods.createJwt = async function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

userSchema.methods.comparePass = async function (condidatePass) {
  const isMatch = await bcrypt.compare(condidatePass, this.password);

  return isMatch;
};
export default mongoose.model('User', userSchema);
