db.appointments.aggregate([
  { $group: { _id: "$doctorId", count: { $sum: 1 } } },
  {
    $lookup: {
      from: "doctors",
      localField: "_id",
      foreignField: "_id",
      as: "doctorInfo"
    }
  },
  { $unwind: "$doctorInfo" },
  { $project: { doctorName: "$doctorInfo.name", specialty: "$doctorInfo.specialty", appointmentCount: "$count" } }
]);
