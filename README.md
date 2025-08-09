# Snowflake + Azure Data Factory + React Dashboard

A full-stack **data engineering project** that integrates **Snowflake**, **Azure Data Factory (ADF)**, and a **React.js frontend** to visualize sales data in real-time.  
This project demonstrates **end-to-end data flow** from ingestion to visualization, highlighting key data engineering concepts.

---

## 🚀 Overview
This project simulates a **real-world analytics pipeline**:
1. **Data Ingestion** → Data is loaded into Snowflake from Azure Data Factory.
2. **Data Storage** → Snowflake stores and processes the data using SQL.
3. **API Layer** → A Node.js/Express backend connects to Snowflake.
4. **Frontend** → A React.js dashboard fetches data from the API and displays it visually.

---

## 🛠️ Tech Stack
- **Snowflake** – Cloud data warehouse for storing and querying data.
- **Azure Data Factory (ADF)** – ETL pipeline to move data into Snowflake.
- **Azure SQL Database** – Sample source database for ingestion.
- **Node.js + Express** – Backend API to securely connect React to Snowflake.
- **React.js** – Frontend dashboard to display analytics.
- **Chart.js** – For beautiful visualizations.

---

## 📂 Project Structure
project-root/
│
├── backend/ # Node.js API
│ ├── server.js
│ ├── package.json
│ ├── .env # Snowflake credentials (excluded from Git)
│
├── frontend/ # React dashboard
│ ├── src/
│ ├── package.json
│
├── README.md
└── .gitignore


## 🖼️ Architecture Diagram

flowchart LR
    A[Azure SQL Database] -->|ADF Pipeline| B[Snowflake Warehouse]
    B -->|SQL Queries| C[Node.js Backend API]
    C -->|JSON Data| D[React Frontend]
    D -->|Charts| User[End User]

⚙️ Setup Instructions:

1️⃣ Clone Repository
bash
git clone https://github.com/<your-username>/snowflake-adf-react-dashboard.git
cd snowflake-adf-react-dashboard

2️⃣ Backend Setup
bash
cd backend
npm install
Create a .env file:

env
SNOWFLAKE_USER=YOUR_USERNAME
SNOWFLAKE_PASSWORD=YOUR_PASSWORD
SNOWFLAKE_ACCOUNT=YOUR_ACCOUNT
SNOWFLAKE_WAREHOUSE=YOUR_WAREHOUSE
SNOWFLAKE_DATABASE=YOUR_DATABASE
SNOWFLAKE_SCHEMA=YOUR_SCHEMA
Run backend:

bash
node server.js
3️⃣ Frontend Setup

bash
cd ../frontend
npm install
npm start
📊 Features
Pulls data from Snowflake via secure backend.

Displays sales trends using Chart.js.

Showcases complex SQL joins and window functions in Snowflake.

Fully cloud-based using Azure & Snowflake


🎯 Learning Objectives
How to integrate Snowflake with Azure Data Factory.

How to design ETL pipelines.

How to connect a frontend to a data warehouse securely.

How to visualize large datasets in React.

📝 License
This project is open source under the MIT License.


