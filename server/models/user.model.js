/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = (mongoose) => {
  const User = mongoose.model(
    "User",
    mongoose.Schema(
      {
        name: { type: String, required: true, unique: false },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, unique: false },
        state: { type: String, required: false, unique: false },
        city: { type: String, required: false, unique: false },
        address: { type: String, required: false, unique: false },
        zip_code: { type: String, required: false, unique: false },
        operating_name: { type: String, required: false, unique: false },
        service: { type: String, required: false, unique: false },
        cuisines: { type: [String], required: false, unique: false },
        specialties: { type: [String], required: false, unique: false },
      },
      { timestamps: true }
    )
  );
  return User;
};
