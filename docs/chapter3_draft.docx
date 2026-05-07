# Chapter 3

# Database Implementation and Testing

---

# 3.1 Introduction

After completing the analysis and database design phases, the next step of the project involves implementing the Hospital Management System (HMS) database using both relational and NoSQL database technologies. This chapter focuses on the practical implementation of the database structures, creation of tables and collections, insertion of sample data, execution of queries, testing procedures, and evaluation of system performance.

The implementation phase transforms the conceptual and logical designs developed in Chapter 2 into operational database systems capable of storing, managing, and retrieving hospital information efficiently.

To satisfy the project requirements, two different database technologies were used:

* MySQL for relational database implementation
* MongoDB for NoSQL document-based implementation

The implementation process also included testing database constraints, validating relationships, executing queries, and evaluating system functionality using realistic hospital data scenarios.

---

# 3.2 MySQL Database Implementation

## 3.2.1 Introduction to MySQL Implementation

MySQL was selected as the relational database management system for this project because of its reliability, structured data handling capabilities, support for relational constraints, and wide adoption in modern information systems.

The MySQL implementation focuses on:

* Table creation
* Primary and foreign key enforcement
* Data integrity constraints
* Structured querying
* Relational consistency

The SQL implementation files are stored in the project repository under:

```text id="7xq4kc"
/mysql/schema.sql
```

and

```text id="c3b42p"
/mysql/queries.sql
```

---

# 3.2.2 Database Creation

The Hospital Management System database was created using SQL commands within MySQL Workbench.

Example:

```sql id="s2l0e9"
CREATE DATABASE hospital_management_system;
USE hospital_management_system;
```

The database serves as the centralized storage environment for all relational hospital data.

---

# 3.2.3 Table Implementation

The relational schema designed in Chapter 2 was implemented through SQL CREATE TABLE statements.

The following tables were created:

* Patient
* Doctor
* Department
* Appointment
* Medical_Record
* Prescription
* Billing
* Payment
* Queue
* Emergency_Case

Each table was implemented with:

* Primary Keys
* Foreign Keys
* Constraints
* Appropriate data types

---

## 3.2.4 Patient Table Implementation

The Patient table stores patient registration and personal information.

Example implementation:

```sql id="nd9z1v"
CREATE TABLE Patient (
    patient_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100),
    gender VARCHAR(10),
    date_of_birth DATE,
    phone VARCHAR(20),
    address VARCHAR(200),
    blood_group VARCHAR(5)
);
```

---

## 3.2.5 Doctor Table Implementation

The Doctor table stores doctor information and departmental assignments.

Example implementation:

```sql id="0vl3ut"
CREATE TABLE Doctor (
    doctor_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100),
    specialization VARCHAR(100),
    phone VARCHAR(20),
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES Department(department_id)
);
```

---

## 3.2.6 Appointment Table Implementation

The Appointment table manages patient scheduling activities.

Example implementation:

```sql id="t8s0bo"
CREATE TABLE Appointment (
    appointment_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT,
    doctor_id INT,
    appointment_date DATE,
    appointment_time TIME,
    status VARCHAR(20),
    FOREIGN KEY (patient_id)
    REFERENCES Patient(patient_id),
    FOREIGN KEY (doctor_id)
    REFERENCES Doctor(doctor_id)
);
```

---

# 3.2.7 Data Insertion

After table creation, sample records were inserted into the database to test relationships and query functionality.

Sample insertion example:

```sql id="5b9p6i"
INSERT INTO Patient
(full_name, gender, date_of_birth, phone, address, blood_group)
VALUES
('Abel Tesfaye', 'Male', '2001-05-14', '0911223344', 'Addis Ababa', 'O+');
```

Sample data was inserted into all major tables to simulate realistic hospital operations.

---

# 3.2.8 SQL Query Implementation

Different SQL queries were developed to test and demonstrate database functionality.

The implemented queries include:

* SELECT queries
* JOIN operations
* Aggregate functions
* GROUP BY operations
* ORDER BY operations
* Filtering queries

---

## Example Query 1 — Retrieve All Patients

```sql id="bdqg8w"
SELECT * FROM Patient;
```

---

## Example Query 2 — Appointment Information with Doctor and Patient

```sql id="e9j8kq"
SELECT 
    Patient.full_name AS patient_name,
    Doctor.full_name AS doctor_name,
    Appointment.appointment_date
FROM Appointment
JOIN Patient
ON Appointment.patient_id = Patient.patient_id
JOIN Doctor
ON Appointment.doctor_id = Doctor.doctor_id;
```

---

## Example Query 3 — Billing Summary

```sql id="wejlwm"
SELECT 
    patient_id,
    SUM(total_amount) AS total_bill
FROM Billing
GROUP BY patient_id;
```

---

# 3.2.9 Constraint Enforcement

Database constraints were implemented to maintain data consistency and integrity.

The following constraints were enforced:

* Primary Key Constraints
* Foreign Key Constraints
* NOT NULL Constraints
* Data Type Constraints

These constraints help prevent:

* Duplicate records
* Invalid references
* Incomplete data insertion
* Relationship inconsistencies

---

# 3.3 MongoDB Implementation

## 3.3.1 Introduction to MongoDB Implementation

MongoDB was selected as the NoSQL database technology because of its flexibility, document-oriented architecture, and scalability for handling semi-structured healthcare data.

Unlike relational databases, MongoDB stores data in JSON-like documents, making it suitable for flexible medical information management.

The MongoDB implementation files are stored in:

```text id="3vaflb"
/mongodb/collections.json
```

and

```text id="l3u6z8"
/mongodb/queries.js
```

---

# 3.3.2 Collection Design

The following MongoDB collections were implemented:

* patients
* doctors
* appointments
* medical_records
* billing
* emergency_cases

Each collection stores related documents using BSON format.

---

# 3.3.3 Sample MongoDB Document

Example patient document:

```json id="7g7hr7"
{
  "patient_id": 1,
  "full_name": "Abel Tesfaye",
  "gender": "Male",
  "blood_group": "O+",
  "phone": "0911223344",
  "address": "Addis Ababa"
}
```

MongoDB allows flexible document structures without requiring rigid relational schemas.

---

# 3.3.4 MongoDB Query Implementation

Several MongoDB queries were developed for testing and retrieval operations.

---

## Example Query 1 — Retrieve All Patients

```javascript id="rjfxn9"
db.patients.find()
```

---

## Example Query 2 — Find Emergency Cases

```javascript id="wpasv8"
db.emergency_cases.find({
  severity_level: "High"
})
```

---

## Example Query 3 — Update Patient Information

```javascript id="7q7s68"
db.patients.updateOne(
  { patient_id: 1 },
  { $set: { phone: "0911000000" } }
)
```

---

## Example Query 4 — Delete a Record

```javascript id="9d8s0d"
db.billing.deleteOne({
  bill_id: 5
})
```

---

# 3.3.5 Advantages of MongoDB in the System

MongoDB provides several advantages for the Hospital Management System:

* Flexible document structure
* Faster handling of semi-structured data
* Scalability for growing hospital records
* Easier management of varying medical data
* Simplified storage of nested information

The NoSQL implementation complements the relational MySQL database by supporting flexible healthcare data modeling.

---

# 3.4 System Testing

## 3.4.1 Testing Objectives

Testing was performed to ensure:

* Correct table and collection creation
* Accurate relationship implementation
* Successful query execution
* Constraint enforcement
* Data consistency and reliability

---

# 3.4.2 Functional Testing

Functional testing was conducted on:

* Patient registration
* Appointment scheduling
* Billing operations
* Queue management
* Emergency case handling
* Data retrieval operations

All functionalities were tested using sample hospital data.

---

# 3.4.3 Query Testing

SQL and MongoDB queries were executed to verify:

* Correct retrieval of records
* Proper filtering
* Accurate joins and aggregations
* Data update functionality
* Record deletion functionality

The testing process confirmed that the implemented database systems functioned correctly.

---

# 3.4.4 Constraint Testing

Foreign key constraints and integrity rules were tested to verify:

* Invalid references are rejected
* Duplicate primary keys are prevented
* Required data fields are enforced

Constraint testing improved database reliability and consistency.

---

# 3.5 Results and Discussion

The implementation and testing phases demonstrated that the proposed Hospital Management System database successfully supports hospital data management operations.

The database achieved:

* Structured patient management
* Efficient appointment scheduling
* Organized medical record handling
* Reliable billing and payment tracking
* Improved emergency prioritization
* Effective queue management

The combination of MySQL and MongoDB provided both:

* Strong relational consistency
* Flexible document-oriented storage

The implemented system successfully addressed many of the problems identified in Chapter 1, including data redundancy, inefficient record handling, and poor information organization.

---

# 3.6 Challenges Encountered

During implementation, several challenges were encountered, including:

* Designing proper relationships between entities
* Maintaining normalization up to BCNF
* Managing foreign key dependencies
* Understanding MongoDB document structures
* Query optimization
* Ensuring consistency between relational and NoSQL models

These challenges were addressed through continuous testing, schema refinement, and collaborative problem-solving among group members.

---

# 3.7 Future Improvements

Although the system achieved its major objectives, several improvements can be implemented in the future:

* Integration with web and mobile applications
* Real-time appointment notifications
* Online payment integration
* Cloud database deployment
* Advanced security and encryption
* AI-assisted patient prioritization
* Multi-hospital integration
* Real-time analytics dashboards

These improvements could enhance scalability, usability, and system intelligence in real-world healthcare environments.

---

# Chapter 3 Summary

This chapter presented the implementation and testing of the Hospital Management System database using MySQL and MongoDB. The chapter covered table and collection creation, sample data insertion, query execution, testing procedures, encountered challenges, and system evaluation. The implementation demonstrated the practical application of database concepts in solving real-world healthcare data management problems.
