const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: [true, 'Student name is required'],
    trim: true,
    minlength: [2, 'Student name must be at least 2 characters'],
    maxlength: [100, 'Student name cannot exceed 100 characters']
  },
  studentPhone: {
    type: String,
    required: [true, 'Student phone is required'],
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
  },
  mealType: {
    type: String,
    required: [true, 'Meal type is required'],
    enum: ['breakfast', 'lunch', 'dinner'],
    default: 'lunch'
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
    default: Date.now
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  notes: {
    type: String,
    maxlength: [500, 'Notes cannot exceed 500 characters']
  },
  recordedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Index for efficient queries
attendanceSchema.index({ date: -1, mealType: 1 });
attendanceSchema.index({ studentPhone: 1, date: -1 });

module.exports = mongoose.model('Attendance', attendanceSchema);