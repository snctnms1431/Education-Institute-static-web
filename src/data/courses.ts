export type CourseCategory = "UG" | "PG" | "Diploma" | "Certification";

export interface Course {
  id: number;
  name: string;
  category: CourseCategory;
  duration: string;
  eligibility: string;
  description: string;
}

export const courses: Course[] = [
  { id: 1, name: "B.Sc. Computer Science", category: "UG", duration: "3 Years", eligibility: "10+2 with Science", description: "Comprehensive program covering programming, algorithms, data structures and software engineering fundamentals." },
  { id: 2, name: "B.A. English Literature", category: "UG", duration: "3 Years", eligibility: "10+2 Any Stream", description: "In-depth study of English literature, critical thinking, and creative writing skills." },
  { id: 3, name: "B.Com. (Hons)", category: "UG", duration: "3 Years", eligibility: "10+2 with Commerce", description: "Advanced commerce program covering accounting, finance, taxation and business law." },
  { id: 4, name: "B.Tech Information Technology", category: "UG", duration: "4 Years", eligibility: "10+2 with PCM", description: "Engineering degree focused on IT systems, networks, databases and modern web technologies." },
  { id: 5, name: "BBA Business Administration", category: "UG", duration: "3 Years", eligibility: "10+2 Any Stream", description: "Management fundamentals including marketing, HR, operations and entrepreneurship." },
  { id: 6, name: "B.Sc. Mathematics", category: "UG", duration: "3 Years", eligibility: "10+2 with Mathematics", description: "Pure and applied mathematics with focus on analysis, algebra, and computational methods." },
  { id: 7, name: "M.Sc. Data Science", category: "PG", duration: "2 Years", eligibility: "B.Sc. in CS/IT/Math", description: "Advanced analytics, machine learning, statistical modeling, and big data technologies." },
  { id: 8, name: "MBA General Management", category: "PG", duration: "2 Years", eligibility: "Any Graduate", description: "Comprehensive management program with specializations in finance, marketing, and strategy." },
  { id: 9, name: "M.A. Economics", category: "PG", duration: "2 Years", eligibility: "B.A. in Economics", description: "Advanced economic theory, econometrics, development economics and policy analysis." },
  { id: 10, name: "M.Tech AI & Machine Learning", category: "PG", duration: "2 Years", eligibility: "B.Tech in CS/IT", description: "Cutting-edge program in artificial intelligence, deep learning, NLP and computer vision." },
  { id: 11, name: "M.Sc. Biotechnology", category: "PG", duration: "2 Years", eligibility: "B.Sc. in Life Sciences", description: "Research-oriented program covering genetic engineering, bioinformatics and molecular biology." },
  { id: 12, name: "M.Com. Finance", category: "PG", duration: "2 Years", eligibility: "B.Com Graduate", description: "Specialised finance program covering investment analysis, corporate finance and risk management." },
  { id: 13, name: "Diploma in Web Development", category: "Diploma", duration: "1 Year", eligibility: "10+2 Any Stream", description: "Practical training in HTML, CSS, JavaScript, React, and modern web frameworks." },
  { id: 14, name: "Diploma in Digital Marketing", category: "Diploma", duration: "6 Months", eligibility: "10+2 Any Stream", description: "SEO, social media, content marketing, PPC advertising and analytics tools." },
  { id: 15, name: "Diploma in Graphic Design", category: "Diploma", duration: "1 Year", eligibility: "10+2 Any Stream", description: "Visual design principles, Adobe Creative Suite, UI/UX design and branding." },
  { id: 16, name: "Diploma in Accounting", category: "Diploma", duration: "1 Year", eligibility: "10+2 with Commerce", description: "Practical accounting skills including Tally, GST, payroll and financial reporting." },
  { id: 17, name: "Diploma in Hospitality Management", category: "Diploma", duration: "1 Year", eligibility: "10+2 Any Stream", description: "Front office operations, food & beverage management, housekeeping and event planning." },
  { id: 18, name: "Certification in Python Programming", category: "Certification", duration: "3 Months", eligibility: "Any Graduate/Student", description: "Python fundamentals, data structures, file handling and basic automation scripts." },
  { id: 19, name: "Certification in Cloud Computing (AWS)", category: "Certification", duration: "4 Months", eligibility: "IT Background Preferred", description: "AWS services, cloud architecture, deployment, security and cost optimization." },
  { id: 20, name: "Certification in Cybersecurity", category: "Certification", duration: "3 Months", eligibility: "IT Background Preferred", description: "Network security, ethical hacking, penetration testing and security compliance." },
  { id: 21, name: "Certification in UI/UX Design", category: "Certification", duration: "3 Months", eligibility: "Any Graduate/Student", description: "User research, wireframing, prototyping with Figma and usability testing." },
  { id: 22, name: "Certification in Financial Analysis", category: "Certification", duration: "2 Months", eligibility: "Commerce Background", description: "Financial statement analysis, valuation methods, Excel modeling and reporting." },
];

export const categoryLabels: Record<CourseCategory, string> = {
  UG: "Undergraduate",
  PG: "Postgraduate",
  Diploma: "Diploma",
  Certification: "Certification",
};
