db.patients.aggregate([
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [0, 18, 30, 45, 60, 100],
      default: "60+",
      output: { patientCount: { $sum: 1 } }
    }
  }
]);
