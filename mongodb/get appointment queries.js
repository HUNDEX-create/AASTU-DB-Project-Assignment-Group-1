db.appointments.aggregate([
  {
    $lookup: {
      from: "patients",
      localField: "patientId",
      foreignField: "_id",
      as: "patient"
    }
  },
  { $unwind: "$patient" },
  {
    $lookup: {
      from: "doctors",
      localField: "doctorId",
      foreignField: "_id",
      as: "doctor"
    }
  },
  { $unwind: "$doctor" }
]);
