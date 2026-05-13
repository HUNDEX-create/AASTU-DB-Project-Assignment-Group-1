db.bills.aggregate([
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m", date: "$paymentDate" } },
      totalRevenue: { $sum: "$amount" },
      totalBills: { $sum: 1 }
    }
  },
  { $sort: { "_id": -1 } }
]);
