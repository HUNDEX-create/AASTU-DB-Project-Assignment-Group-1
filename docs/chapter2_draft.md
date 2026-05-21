# Chapter 2

# Database Design

---

# 2.1 Introduction

Database design is one of the most critical phases in the development of any information system because it determines how data is organized, stored, managed, and retrieved. A well-designed database improves efficiency, minimizes redundancy, maintains data integrity, and supports scalability for future system expansion.

This chapter presents the database design process of the proposed Hospital Management System (HMS). The design process includes entity identification, attribute specification, relationship modeling, Entity Relationship (ER) Diagram development, logical schema construction, and normalization up to Boyce-Codd Normal Form (BCNF).

The database is designed to support core hospital activities such as patient management, doctor management, appointment scheduling, medical record handling, billing operations, payment processing, queue management, and emergency case prioritization.

Both relational and NoSQL perspectives are considered during the design process to ensure compatibility with MySQL and MongoDB implementations in the next chapter.

---

# 2.2 Entity Identification

Entity identification is the process of determining the major real-world objects that must be represented within the database system. An entity typically has independent existence, unique attributes, and multiple records within the organization.

For the proposed Hospital Management System, the following entities were identified after analyzing hospital workflows and operational requirements.

---

## 2.2.1 Patient Entity

The Patient entity stores information related to individuals receiving medical services from the hospital.

### Attributes

* patient_id (Primary Key)
* full_name
* gender
* date_of_birth
* phone
* address
* blood_group

### Purpose

This entity is used to maintain patient registration and identification information required throughout the hospital system.

---

## 2.2.2 Doctor Entity

The Doctor entity stores information related to medical professionals working in the hospital.

### Attributes

* doctor_id (Primary Key)
* full_name
* specialization
* phone
* department_id (Foreign Key)

### Purpose

This entity helps manage doctor assignments, medical specialties, and departmental relationships.

---

## 2.2.3 Department Entity

The Department entity represents different divisions or units within the hospital.

### Attributes

* department_id (Primary Key)
* department_name
* location

### Purpose

This entity is used to organize doctors and healthcare services based on departmental structure.

---

## 2.2.4 Appointment Entity

The Appointment entity stores scheduling information between patients and doctors.

### Attributes

* appointment_id (Primary Key)
* patient_id (Foreign Key)
* doctor_id (Foreign Key)
* appointment_date
* appointment_time
* status

### Purpose

This entity manages appointment booking, scheduling, and tracking activities.

---

## 2.2.5 Medical_Record Entity

The Medical_Record entity stores clinical and treatment-related information about patients.

### Attributes

* record_id (Primary Key)
* patient_id (Foreign Key)
* diagnosis
* treatment
* record_date

### Purpose

This entity helps maintain historical medical information for healthcare decision-making and patient monitoring.

---

## 2.2.6 Prescription Entity

The Prescription entity stores medication instructions issued during treatment.

### Attributes

* prescription_id (Primary Key)
* record_id (Foreign Key)
* medicine_name
* dosage
* duration

### Purpose

This entity records prescribed medicines and treatment instructions linked to medical records.

---

## 2.2.7 Billing Entity

The Billing entity stores financial information related to patient services.

### Attributes

* bill_id (Primary Key)
* patient_id (Foreign Key)
* total_amount
* bill_date

### Purpose

This entity manages hospital billing operations and financial tracking.

---

## 2.2.8 Payment Entity

The Payment entity stores payment transaction information.

### Attributes

* payment_id (Primary Key)
* bill_id (Foreign Key)
* payment_method
* payment_date
* amount_paid

### Purpose

This entity is used to track payments associated with hospital bills.

---

## 2.2.9 Queue Entity

The Queue entity manages patient waiting order and service prioritization.

### Attributes

* queue_id (Primary Key)
* appointment_id (Foreign Key)
* queue_number
* priority_level
* estimated_time

### Purpose

This entity supports organized patient flow and waiting-time management.

---

## 2.2.10 Emergency_Case Entity

The Emergency_Case entity stores information related to urgent and critical medical situations.

### Attributes

* emergency_id (Primary Key)
* patient_id (Foreign Key)
* severity_level
* arrival_time

### Purpose

This entity helps prioritize emergency patients based on severity and urgency.

---

# 2.3 Relationship Modeling

Relationships define how entities interact and depend on each other within the Hospital Management System. Proper relationship modeling ensures data consistency, reduces redundancy, and accurately represents real-world hospital operations.

The following relationships were identified during system analysis.

---

## 2.3.1 Core Relationships

### Patient – Appointment Relationship

A patient can book multiple appointments, but each appointment belongs to only one patient.

### Cardinality

1 : M

---

### Doctor – Appointment Relationship

A doctor can handle multiple appointments, while each appointment is assigned to one doctor.

### Cardinality

1 : M

---

### Doctor – Department Relationship

Each doctor belongs to one department, while a department can contain multiple doctors.

### Cardinality

M : 1

---

## 2.3.2 Medical Relationships

### Patient – Medical_Record Relationship

A patient can have multiple medical records, while each medical record belongs to one patient.

### Cardinality

1 : M

---

### Medical_Record – Prescription Relationship

A medical record may contain multiple prescriptions, while each prescription belongs to one medical record.

### Cardinality

1 : M

---

## 2.3.3 Financial Relationships

### Patient – Billing Relationship

A patient can generate multiple billing records, while each billing record belongs to one patient.

### Cardinality

1 : M

---

### Billing – Payment Relationship

A billing record can have multiple payment transactions, while each payment belongs to one billing record.

### Cardinality

1 : M

---

## 2.3.4 Advanced Functional Relationships

### Appointment – Queue Relationship

Each appointment is associated with one queue record, and each queue record corresponds to one appointment.

### Cardinality

1 : 1

---

### Patient – Emergency_Case Relationship

A patient may have multiple emergency cases over time, while each emergency case belongs to one patient.

### Cardinality

1 : M

---

# 2.4 Entity Relationship Diagram (ER Diagram)

The Entity Relationship Diagram (ERD) visually represents the entities, attributes, primary keys, foreign keys, and relationships within the Hospital Management System database.

The ER Diagram was designed using Draw.io to clearly illustrate the structure and interactions of the system components.

The diagram includes:

* Core entities
* Relationship cardinalities
* Primary and foreign keys
* Data dependencies

The ER Diagram helps simplify database understanding and serves as the foundation for logical schema design and implementation.

The completed ER Diagram is provided in the project repository under:

```text id="j92h8x"
/diagrams/erd.png
```

---

# 2.5 Logical Schema Design

The logical schema converts the conceptual ER design into relational database tables suitable for implementation in MySQL.

Each table includes:

* Primary Keys (PK)
* Foreign Keys (FK)
* Attributes
* Relationship constraints

---

## 2.5.1 Patient Table

| Attribute       | Description               |
| --------------- | ------------------------- |
| patient_id (PK) | Unique patient identifier |
| full_name       | Patient full name         |
| gender          | Patient gender            |
| date_of_birth   | Date of birth             |
| phone           | Contact number            |
| address         | Residential address       |
| blood_group     | Blood type                |

---

## 2.5.2 Doctor Table

| Attribute          | Description              |
| ------------------ | ------------------------ |
| doctor_id (PK)     | Unique doctor identifier |
| full_name          | Doctor name              |
| specialization     | Medical specialization   |
| phone              | Contact number           |
| department_id (FK) | Related department       |

---

## 2.5.3 Department Table

| Attribute          | Description                  |
| ------------------ | ---------------------------- |
| department_id (PK) | Unique department identifier |
| department_name    | Department name              |
| location           | Department location          |

---

## 2.5.4 Appointment Table

| Attribute           | Description                   |
| ------------------- | ----------------------------- |
| appointment_id (PK) | Unique appointment identifier |
| patient_id (FK)     | Related patient               |
| doctor_id (FK)      | Assigned doctor               |
| appointment_date    | Scheduled date                |
| appointment_time    | Scheduled time                |
| status              | Appointment status            |

---

## 2.5.5 Medical_Record Table

| Attribute       | Description              |
| --------------- | ------------------------ |
| record_id (PK)  | Unique medical record ID |
| patient_id (FK) | Related patient          |
| diagnosis       | Medical diagnosis        |
| treatment       | Treatment details        |
| record_date     | Record creation date     |

---

## 2.5.6 Prescription Table

| Attribute            | Description            |
| -------------------- | ---------------------- |
| prescription_id (PK) | Unique prescription ID |
| record_id (FK)       | Related medical record |
| medicine_name        | Medicine prescribed    |
| dosage               | Medication dosage      |
| duration             | Treatment duration     |

---

## 2.5.7 Billing Table

| Attribute       | Description       |
| --------------- | ----------------- |
| bill_id (PK)    | Unique billing ID |
| patient_id (FK) | Related patient   |
| total_amount    | Total bill amount |
| bill_date       | Billing date      |

---

## 2.5.8 Payment Table

| Attribute       | Description       |
| --------------- | ----------------- |
| payment_id (PK) | Unique payment ID |
| bill_id (FK)    | Related bill      |
| payment_method  | Payment method    |
| payment_date    | Payment date      |
| amount_paid     | Amount paid       |

---

## 2.5.9 Queue Table

| Attribute           | Description            |
| ------------------- | ---------------------- |
| queue_id (PK)       | Unique queue ID        |
| appointment_id (FK) | Related appointment    |
| queue_number        | Queue order number     |
| priority_level      | Priority status        |
| estimated_time      | Estimated waiting time |

---

## 2.5.10 Emergency_Case Table

| Attribute         | Description         |
| ----------------- | ------------------- |
| emergency_id (PK) | Unique emergency ID |
| patient_id (FK)   | Related patient     |
| severity_level    | Emergency severity  |
| arrival_time      | Arrival timestamp   |

---

# 2.6 Normalization

Normalization is the process of organizing database tables to minimize redundancy, improve consistency, and eliminate undesirable dependencies.

The Hospital Management System database was normalized systematically up to Boyce-Codd Normal Form (BCNF).

---

## 2.6.1 First Normal Form (1NF)

The database satisfies First Normal Form because:

* All attributes contain atomic values.
* No repeating groups exist.
* Each field contains only one value.

Example:

* Multiple medicines are separated into the Prescription table instead of storing them in a single field.

---

## 2.6.2 Second Normal Form (2NF)

The database satisfies Second Normal Form because:

* It is already in 1NF.
* All non-key attributes fully depend on the entire primary key.
* Partial dependencies were eliminated.

Example:

* Doctor specialization depends entirely on doctor_id.

---

## 2.6.3 Third Normal Form (3NF)

The database satisfies Third Normal Form because:

* It is already in 2NF.
* No transitive dependencies exist.
* Non-key attributes depend only on primary keys.

Example:

* Department information is separated from Doctor to avoid transitive dependency.

---

## 2.6.4 Boyce-Codd Normal Form (BCNF)

The database satisfies BCNF because:

* Every determinant is a candidate key.
* Functional dependencies are fully resolved.
* Redundant data storage is minimized.

BCNF normalization improves:

* Data integrity
* Query efficiency
* Database maintainability
* Consistency across hospital operations

The complete normalization process and dependency analysis are documented in:

```text id="6guzw4"
/diagrams/normalization.pdf
```

---

# 2.7 Input and Output Design

Input and output design ensures efficient interaction between users and the database system.

---

## 2.7.1 Input Design

The following forms are proposed for data entry:

* Patient Registration Form
* Doctor Registration Form
* Appointment Scheduling Form
* Billing Form
* Emergency Case Form

Input forms are designed to:

* Reduce data entry errors
* Improve usability
* Ensure data consistency

---

## 2.7.2 Output Design

The system generates outputs such as:

* Patient information reports
* Appointment schedules
* Billing summaries
* Emergency case reports
* Queue management reports

These outputs assist hospital staff in operational monitoring and decision-making.

---

# Chapter 2 Summary

This chapter presented the database design process of the Hospital Management System, including entity identification, relationship modeling, ER Diagram development, logical schema construction, normalization up to BCNF, and input/output design. The completed database structure provides the foundation for the implementation phase discussed in the next chapter.
