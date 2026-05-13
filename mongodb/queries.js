db.patients.insertMany([
  {
    "_id": "P001", "name": "Abebe Kebede", "age": 34, "gender": "Male",
    "phone": "+251911234567", "address": "Addis Ababa, Bole", "bloodGroup": "A+",
    "createdAt": new Date("2025-04-01T10:00:00Z")
  },
  {
    "_id": "P002", "name": "Fatuma Ahmed", "age": 28, "gender": "Female",
    "phone": "+251922345678", "address": "Addis Ababa, Piassa", "bloodGroup": "O-",
    "createdAt": new Date("2025-04-05T14:30:00Z")
  }
]);
