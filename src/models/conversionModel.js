import mongoose from 'mongoose';

const ConversionSchema = mongoose.Schema(
  {
    sourceLang: {
      type: String,
      required: true,
    },
    sourceCode: {
      type: String,
      required: true,
    },
    targetLang: {
      type: String,
      required: true,
    },
    targetCode: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const conversionModel = mongoose.model('Conversion', ConversionSchema);

export default conversionModel;
