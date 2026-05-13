db.appointments.find({ "doctorId": "D001" });
db.appointments.find({ "patientId": "P001" }).sort({ "appointmentDate": -1 });
db.appointments.updateOne(
  { "_id": "A001" },
  { $set: { "status": "Completed" } }
);
db.patients.updateOne(
  { "_id": "P001" },
  { $push: { "allergies": "Dust" } }
);
