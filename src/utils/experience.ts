export interface Experience {
  role: string;
  company: string;
  description: string;
  period: string;
}

export const EXPERIENCES: Experience[] = [
  {
    role: "Supervisor",
    company: "Wow Burger",
    period: "Oct 2025 — Present",
    description:
      "Manage daily store operations including shift planning, team coordination and service performance. Track sales and expenses while supervising staff and maintaining operational efficiency.",
  },
  {
    role: "Research Assistant",
    company: "Dublin Business School",
    period: "Jun 2024 — Oct 2025",
    description:
      "Analysed financial datasets to identify trends and anomalies related to fraud detection. Built Python workflows for data preparation and documented insights for academic research.",
  },
  {
    role: "Data Analyst Intern",
    company: "Conduria Services",
    period: "Jun 2023 — Sep 2023",
    description:
      "Developed ETL pipelines using Python to transform raw datasets into structured reporting tables. Created SQL queries and validation checks to support reliable KPI dashboards.",
  },
  {
    role: "Machine Learning Intern",
    company: "Samsung Innovation Campus",
    period: "Dec 2022 — Mar 2023",
    description:
      "Prepared datasets using SQL and Python while optimising joins and aggregations. Automated preprocessing scripts to improve consistency and reduce manual data preparation work.",
  },
];