import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  responsibilities: string[];
  architecture: {
    api: string;
    messageQueue: string;
    database: string;
    caching: string;
    realtime?: string;
  };
  techStack: {
    backend: string[];
    database: string[];
    infrastructure: string[];
    frontend?: string[];
  };
  impact: string[];
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: "vnvc-platform",
    title: "VNVC Ecosystem Platform",
    subtitle: "Enterprise Healthcare Platform – High Concurrency, Booking & Campaign System",
    overview: "I played a key backend engineering role in building and scaling multiple core systems within the VNVC healthcare ecosystem, including booking, campaign engines, notification systems, and third-party APIs. The platform serves large user volumes and requires high reliability, performance optimization, and strict business rule enforcement.",
    responsibilities: [
      "Designed and implemented LuckyShake campaign system with atomic voucher claim logic using Redis Lua.",
      "Processed 2000+ concurrent users during campaigns with complex eligibility rules (age, region, PID, booking history).",
      "Built async processing with Redis Streams and synced MongoDB with Elasticsearch for search consistency.",
      "Diagnosed severe performance bottlenecks, reducing booking API latency from 40–50 seconds down to 4–5 seconds.",
      "Optimized database queries, indexing strategy, and caching layers to improve throughput and stability.",
      "Rebuilt sequential notification jobs into batch-processing architecture with retry & idempotency safeguards.",
      "Built public APIs for external partners with secure contracts, rate-limiting, and dynamic T&C configuration."
    ],
    architecture: {
      api: "ASP.NET Core / Distributed Microservices",
      messageQueue: "Redis Streams / RabbitMQ",
      database: "MongoDB / PostgreSQL",
      caching: "Redis (Lua Atomic Scripts)",
      realtime: "SignalR / Redis Streams"
    },
    techStack: {
      backend: ["C#", "ASP.NET Core", "Redis (Lua)", "Redis Streams", "MediatR"],
      database: ["MongoDB", "PostgreSQL", "Redis"],
      infrastructure: ["Docker", "Elasticsearch", "Background Jobs", "Distributed Processing"]
    },
    impact: [
      "Reduced booking API latency by 90% (from 50s to 5s) through query and cache optimization.",
      "Successfully handled 2000+ concurrent users during high-traffic LuckyShake campaigns.",
      "Stabilized production job failures by refactoring to a batch-processing architecture.",
      "Enabled secure third-party integrations via a robust public API platform."
    ],
    screenshots: [
      "https://picsum.photos/seed/vnvc-platform1/1200/800",
      "https://picsum.photos/seed/vnvc-platform2/1200/800"
    ]
  },
  {
    id: "healthcare-partner-api",
    title: "Tam Anh Partner API",
    subtitle: "Partner Integration & Maintenance System",
    overview: "Maintained and stabilized a dedicated API service used by the Tam Anh healthcare application. Focused primarily on production stability, bug fixing, and partner integration consistency.",
    responsibilities: [
      "Fixed critical production issues affecting partner app workflows and business rule logic.",
      "Ensured stable integration between partner systems and core VNVC services.",
      "Handled performance issues and bug resolution for push and voucher-related workflows.",
      "Maintained data contracts and integration consistency for the Tam Anh healthcare app.",
      "Improved reliability of background synchronization and partner-specific integration workflows."
    ],
    architecture: {
      api: "ASP.NET Core / Partner API Layer",
      messageQueue: "RabbitMQ / Redis",
      database: "PostgreSQL",
      caching: "Redis",
      realtime: "Webhooks / Push Notifications"
    },
    techStack: {
      backend: ["C#", "ASP.NET Core", "Integration Workflows", "Bug Resolution"],
      database: ["PostgreSQL", "Redis"],
      infrastructure: ["Docker", "API Maintenance", "Production Stability"]
    },
    impact: [
      "Significantly improved the stability of the Tam Anh partner application integration.",
      "Resolved long-standing production bugs in voucher and push notification workflows.",
      "Maintained high availability for partner-facing healthcare services.",
      "Ensured consistent business rule enforcement across integrated platforms."
    ],
    screenshots: [
      "https://picsum.photos/seed/partner-api1/1200/800",
      "https://picsum.photos/seed/partner-api2/1200/800"
    ]
  },
  {
    id: "payroll-hrm-engine",
    title: "Enterprise Payroll & HRM Engine",
    subtitle: "High-Performance Payroll Calculation System for Thousands of Employees",
    overview: "Designed and built the core payroll calculation engine for an enterprise HRM system handling thousands of employees monthly. This system required high accuracy, performance optimization, and strict data security.",
    responsibilities: [
      "Designed a dynamic payroll formula engine supporting flexible calculation rules per company or department.",
      "Handled complex monthly salary, allowances, tax, and insurance logic with high accuracy.",
      "Built acceleration logic to process payroll at scale and optimized bulk calculation workflows.",
      "Implemented encryption for salary data and designed secure export mechanisms for sensitive information.",
      "Built dynamic Excel import/export pipelines to handle large batch operations reliably.",
      "Ensured strict data protection in storage and reporting for enterprise-level financial data."
    ],
    architecture: {
      api: "ASP.NET Core / Clean Architecture",
      messageQueue: "RabbitMQ",
      database: "PostgreSQL / SQL Server",
      caching: "Redis",
      realtime: "SignalR for processing updates"
    },
    techStack: {
      backend: ["C#", ".NET Core", "Encryption Handling", "Bulk Processing"],
      database: ["PostgreSQL", "SQL Server"],
      infrastructure: ["Docker", "Financial Logic Engine", "Performance Optimization"]
    },
    impact: [
      "Enabled accurate monthly payroll processing for thousands of employees.",
      "Reduced processing time for large datasets through optimized calculation logic.",
      "Ensured 100% data security for sensitive financial information via encryption.",
      "Streamlined HR operations with flexible, formula-based calculation rules."
    ],
    screenshots: [
      "https://picsum.photos/seed/payroll1/1200/800",
      "https://picsum.photos/seed/payroll2/1200/800"
    ]
  },
  {
    id: "analytics-bi-platform",
    title: "Enterprise Analytics & Power BI Integration Platform",
    subtitle: "SSO-Integrated Embedded Reporting Platform",
    overview: "Built backend integration to embed Power BI reports directly into internal web applications, enabling seamless access without requiring separate Power BI accounts.",
    responsibilities: [
      "Implemented Power BI embedding in the internal web platform using SSO authentication.",
      "Enabled users to view reports directly after login, removing the need for individual Power BI accounts.",
      "Controlled report access based on internal role permissions and centralized authentication.",
      "Integrated backend SSO with Power BI service for a seamless analytics experience.",
      "Optimized report loading and access control for enterprise-wide business intelligence."
    ],
    architecture: {
      api: "ASP.NET Core / Analytics API",
      messageQueue: "RabbitMQ / Redis Streams",
      database: "PostgreSQL / Elasticsearch",
      caching: "Redis",
    },
    techStack: {
      backend: ["C#", "ASP.NET Core", "SSO Integration", "Power BI Embedded"],
      database: ["PostgreSQL", "Elasticsearch"],
      infrastructure: ["Docker", "Centralized Authentication", "Analytics Experience"]
    },
    impact: [
      "Provided a seamless analytics experience by embedding reports directly into internal apps.",
      "Eliminated the cost and complexity of managing individual Power BI accounts for all users.",
      "Enhanced security through centralized, role-based access control for BI reports.",
      "Improved data accessibility for decision-makers across the organization."
    ],
    screenshots: [
      "https://picsum.photos/seed/analytics1/1200/800",
      "https://picsum.photos/seed/analytics2/1200/800"
    ]
  },
  {
    id: "next-erp-core",
    title: "Next ERP Core System",
    subtitle: "Enterprise ERP Backend & Workflow Automation",
    overview: "Maintained and extended core ERP functionalities while modernizing workflow processes using external automation tools.",
    responsibilities: [
      "Fixed critical production bugs across various ERP modules to ensure operational continuity.",
      "Developed Open APIs for seamless integration with external systems and automation tools.",
      "Built Power Apps + Power Automate workflows to automate purchase request approvals.",
      "Replaced manual ERP approval processes with automated flows, improving internal efficiency.",
      "Modernized legacy ERP workflows through integration with modern automation platforms."
    ],
    architecture: {
      api: "ASP.NET Core / ERP Transactional Layer",
      messageQueue: "RabbitMQ",
      database: "PostgreSQL / MongoDB",
      caching: "Redis",
    },
    techStack: {
      backend: ["C#", "ASP.NET Core", "Power Apps", "Power Automate"],
      database: ["PostgreSQL", "MongoDB"],
      infrastructure: ["Workflow Automation", "Docker", "Integration APIs"]
    },
    impact: [
      "Significantly improved internal operational efficiency through workflow automation.",
      "Reduced manual errors in the purchase request approval process.",
      "Enhanced ERP extensibility via new Open API endpoints.",
      "Maintained system stability by resolving complex production issues."
    ],
    screenshots: [
      "https://picsum.photos/seed/erp1/1200/800",
      "https://picsum.photos/seed/erp2/1200/800"
    ]
  },
  {
    id: "go-fnb",
    title: "Go Food & Beverage (GoFNB)",
    subtitle: "Enterprise F&B Management SaaS",
    overview: "GoFNB is a management platform tailored for the Food & Beverage industry, focusing on streamlining distribution, inventory, and operations for restaurants. My role centered on building scalable backend systems and real-time features.",
    responsibilities: [
      "Developed RESTful APIs with .NET Core and C# to manage order distribution and inventory updates.",
      "Built a notification microservice with .NET Core to manage devices and send order/reservation alerts to POS devices.",
      "Implemented SignalR for real-time notifications to POS systems and Firebase for push notifications to mobile devices.",
      "Designed logic for order creation, handling dynamic pricing and F&B-specific workflows.",
      "Implemented discount logic for promotions, enabling flexible offers tailored to F&B needs.",
      "Integrated payment processing with third-party services like MoMo and PayPal for seamless transactions.",
      "Optimized SQL Server queries with Entity Framework Core, reducing API response time.",
      "Integrated RabbitMQ and Redis for efficient message queuing and caching, supporting multi-branch distribution."
    ],
    architecture: {
      api: ".NET Core / Clean Architecture / Microservices",
      messageQueue: "RabbitMQ",
      database: "SQL Server",
      caching: "Redis",
      realtime: "SignalR & Firebase"
    },
    techStack: {
      backend: ["C#", ".NET Core", "CQRS", "MediatR", "Dependency Injection"],
      database: ["SQL Server", "EF Core", "Redis"],
      infrastructure: ["Azure CI/CD", "Docker", "RabbitMQ"],
      frontend: ["ReactJS", "TypeScript"]
    },
    impact: [
      "Enabled real-time POS alerts with SignalR, significantly speeding up update times.",
      "Delivered mobile notifications via Firebase, noticeably improving staff response time.",
      "Streamlined promotion order creation, enhancing customer engagement with timely offers.",
      "Integrated third-party payment systems like MoMo and PayPal, simplifying transactions for users.",
      "Enhanced microservice coordination with RabbitMQ, reducing missed orders."
    ],
    screenshots: [
      "https://picsum.photos/seed/fnb-admin/1200/800",
      "https://picsum.photos/seed/fnb-pos/1200/800"
    ]
  },
  {
    id: "mrp-website",
    title: "MRP Website",
    subtitle: "Legacy Migration & Supply Chain Optimization",
    overview: "The MRP Website project was a major upgrade from a legacy WinForms application to a modern web-based solution. This transition improved accessibility, streamlined workflows, and enhanced operational efficiency for manufacturing businesses.",
    responsibilities: [
      "Full-stack development based on Business Analyst (BA) specifications & UI/UX requirements.",
      "Built robust RESTful APIs using C# .NET Core 6 for high performance & security.",
      "Developed an interactive frontend using React & TypeScript.",
      "Optimized database operations with PostgreSQL.",
      "Implemented real-time updates and improved system scalability."
    ],
    architecture: {
      api: ".NET Core 6 / RESTful APIs",
      messageQueue: "RabbitMQ",
      database: "PostgreSQL",
      caching: "MemoryCache",
    },
    techStack: {
      backend: ["C#", ".NET Core 6"],
      database: ["PostgreSQL"],
      infrastructure: ["GitLab", "Docker"],
      frontend: ["React", "TypeScript", "Redux"]
    },
    impact: [
      "Improved user experience with a responsive web-based system.",
      "Reduced maintenance costs & increased scalability.",
      "Streamlined manufacturing processes with real-time data visualization."
    ],
    screenshots: [
      "https://picsum.photos/seed/mrp-web1/1200/800",
      "https://picsum.photos/seed/mrp-web2/1200/800"
    ]
  },
  {
    id: "warehouse-booking",
    title: "Warehouse Booking",
    subtitle: "Logistics & Inventory Management",
    overview: "The Warehouse Booking system was designed to streamline order processing and logistics for warehouse employees and suppliers. It processes order information from RabbitMQ and saves it to PostgreSQL, ensuring efficient inventory management.",
    responsibilities: [
      "Defined performance metrics screens for supplier orders.",
      "Processed orders and suggested optimized delivery schedules.",
      "Developed reporting features to track warehouse efficiency.",
      "Implemented features to assist warehouse employees in organizing inventory.",
      "Developed system to process and save order information from RabbitMQ into PostgreSQL."
    ],
    architecture: {
      api: "NestJS",
      messageQueue: "RabbitMQ",
      database: "PostgreSQL",
      caching: "Redis",
    },
    techStack: {
      backend: ["NestJS", "Node.js"],
      database: ["PostgreSQL"],
      infrastructure: ["RabbitMQ", "Docker"],
      frontend: ["React.js", "Ant Design"]
    },
    impact: [
      "Improved warehouse operational efficiency and order tracking.",
      "Reduced processing times with automated scheduling and reporting.",
      "Enhanced supplier coordination with real-time data insights."
    ],
    screenshots: [
      "https://picsum.photos/seed/warehouse1/1200/800",
      "https://picsum.photos/seed/warehouse2/1200/800"
    ]
  },
  {
    id: "microservice-api",
    title: "Microservice Support APIs",
    subtitle: "Data Integration & Messaging Layer",
    overview: "A specialized API layer designed to facilitate data exchange and integration between SQL Server and various systems within a microservice architecture.",
    responsibilities: [
      "Developed APIs to transmit/receive data between SQL Server and other systems.",
      "Implemented data storage and access layers for SQL Server databases.",
      "Used RabbitMQ to publish order information to RabbitMQ Server.",
      "Retrieved data from SQL databases and handled file transfers to client servers via SMTP.",
      "Queried and processed data from Elasticsearch for high-speed search capabilities."
    ],
    architecture: {
      api: ".NET Core / Restful API",
      messageQueue: "RabbitMQ",
      database: "SQL Server",
      caching: "Elasticsearch",
    },
    techStack: {
      backend: ["C#", ".NET Core", "Restful API"],
      database: ["SQL Server", "Elasticsearch"],
      infrastructure: ["RabbitMQ", "SMTP", "Jenkins"]
    },
    impact: [
      "Seamlessly integrated disparate systems through a unified messaging layer.",
      "Enabled high-speed search and data retrieval via Elasticsearch.",
      "Automated order data publishing, reducing manual data entry errors."
    ],
    screenshots: [
      "https://picsum.photos/seed/api-support/1200/800"
    ]
  },
  {
    id: "mrp-winform",
    title: "Material Requirements Planning (Winform)",
    subtitle: "Legacy Enterprise Resource Planning",
    overview: "The MRP system was designed to assist company employees in accurately calculating product requirements and creating sourcing plans, optimizing the ordering process.",
    responsibilities: [
      "Developed a WinForms application to streamline ordering and business operations.",
      "Debugged and fixed critical issues to ensure smooth functionality.",
      "Enhanced user interface with DevExpress Framework for a better enterprise experience.",
      "Optimized database performance through complex SQL Stored Procedures."
    ],
    architecture: {
      api: "WinForms (Desktop)",
      messageQueue: "N/A",
      database: "SQL Server",
      caching: "N/A",
    },
    techStack: {
      backend: ["VB.NET", "C#"],
      database: ["SQL Server", "Stored Procedures"],
      infrastructure: ["DevExpress Framework"]
    },
    impact: [
      "Optimized the ordering process and improved overall business efficiency.",
      "Provided a stable, high-performance desktop environment for internal operations.",
      "Successfully handled complex product calculation logic."
    ],
    screenshots: [
      "https://picsum.photos/seed/winform-mrp/1200/800"
    ]
  }
];
