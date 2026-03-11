interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Sales & Profitability Dashboard",
    description:
      "Interactive Power BI dashboard analysing sales, profit and margin across products and regions. SQL queries were used to create the reporting layer and DAX measures for KPI analysis.",
    tags: ["Power BI", "SQL", "DAX"],
    github:
      "https://github.com/vallipriya-1432/SALES-PROFITABILITY-DASHBOARD",
  },
  {
    title: "Operations Performance Dashboard",
    description:
      "Dashboard analysing operational KPIs and process performance. SQL was used to clean and structure datasets while visualisations highlighted performance trends and bottlenecks.",
    tags: ["SQL", "Dashboard", "KPI Analysis"],
    github:
      "https://github.com/vallipriya-1432/OPERATIONS-PERFORMANCE-DASHBOARD",
  },
  {
    title: "Customer Support Operations Analysis",
    description:
      "Excel dashboard analysing support performance metrics such as SLA compliance, response time and resolution time using PivotTables and formulas.",
    tags: ["Excel", "Pivot Tables", "Data Analysis"],
    github:
      "https://github.com/vallipriya-1432/Customer-Support-Operations-Analysis",
  },
  {
    title: "Data Quality & Validation Project",
    description:
      "SQL validation framework detecting missing values, duplicates and data integrity issues to ensure clean datasets for analytics and reporting.",
    tags: ["SQL", "Data Quality", "Validation"],
    github:
      "https://github.com/vallipriya-1432/DATA-QUALITY-VALIDIATION",
  },
];