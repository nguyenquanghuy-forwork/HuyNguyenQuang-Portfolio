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
    id: "vnvc-app",
    title: "VNVC Ecosystem",
    subtitle: "Enterprise Healthcare & Vaccination Platform",
    overview: "A mission-critical healthcare platform serving millions of users across VNVC vaccination centers, Tam Anh Hospital, and Eco Green. Built to handle massive concurrent traffic and complex medical data synchronization.",
    responsibilities: [
      "Designed and implemented high-performance RESTful APIs using ASP.NET Core.",
      "Applied Clean Architecture principles to ensure long-term maintainability and testability.",
      "Built a complex salary calculation module handling thousands of employee records with diverse contract types.",
      "Integrated RabbitMQ for asynchronous processing of vaccination records and notification services.",
      "Optimized SQL Server stored procedures and indexing, reducing report generation time by 60%."
    ],
    architecture: {
      api: ".NET 8 Web API / Clean Architecture",
      messageQueue: "RabbitMQ (MassTransit)",
      database: "SQL Server (Enterprise Edition)",
      caching: "Redis (Distributed Cache)",
      realtime: "SignalR for live queue updates"
    },
    techStack: {
      backend: ["C#", "ASP.NET Core", "Entity Framework Core", "MediatR", "FluentValidation"],
      database: ["SQL Server", "Redis"],
      infrastructure: ["Docker", "Jenkins", "GitLab CI/CD", "RabbitMQ"]
    },
    impact: [
      "Successfully supported multi-branch synchronization for 100+ vaccination centers.",
      "Reduced API latency by 40% through strategic caching and query optimization.",
      "Automated complex payroll processes, reducing HR manual workload by 80%.",
      "Ensured 99.9% uptime for critical vaccination booking flows."
    ],
    screenshots: [
      "https://picsum.photos/seed/vnvc1/1200/800",
      "https://picsum.photos/seed/vnvc2/1200/800"
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
