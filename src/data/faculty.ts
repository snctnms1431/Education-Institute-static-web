export interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  qualifications: string;
  experience: number;
  specialization: string;
  photo: string;
}

export const faculty: FacultyMember[] = [
  { id: 1, name: "Dr. Ananya Sharma", designation: "Professor & HOD", qualifications: "Ph.D. Computer Science, IIT Delhi", experience: 22, specialization: "Artificial Intelligence & Machine Learning", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face" },
  { id: 2, name: "Dr. Rajesh Kumar", designation: "Associate Professor", qualifications: "Ph.D. Mathematics, University of Cambridge", experience: 18, specialization: "Applied Mathematics & Statistics", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
  { id: 3, name: "Prof. Meera Patel", designation: "Professor", qualifications: "Ph.D. Economics, LSE", experience: 20, specialization: "Development Economics & Policy", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face" },
  { id: 4, name: "Dr. Vikram Singh", designation: "Associate Professor", qualifications: "Ph.D. Biotechnology, AIIMS", experience: 15, specialization: "Molecular Biology & Genetics", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
  { id: 5, name: "Dr. Priya Nair", designation: "Assistant Professor", qualifications: "Ph.D. English Literature, JNU", experience: 10, specialization: "Postcolonial Literature & Cultural Studies", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
  { id: 6, name: "Prof. Suresh Reddy", designation: "Professor", qualifications: "Ph.D. Finance, IIM Ahmedabad", experience: 25, specialization: "Corporate Finance & Investment Banking", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face" },
  { id: 7, name: "Dr. Kavita Joshi", designation: "Associate Professor", qualifications: "Ph.D. Data Science, Stanford University", experience: 12, specialization: "Big Data Analytics & Deep Learning", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face" },
  { id: 8, name: "Dr. Amit Verma", designation: "Assistant Professor", qualifications: "Ph.D. Cybersecurity, NIT Trichy", experience: 8, specialization: "Network Security & Ethical Hacking", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face" },
  { id: 9, name: "Prof. Sunita Desai", designation: "Professor & Dean", qualifications: "Ph.D. Management, ISB Hyderabad", experience: 28, specialization: "Strategic Management & Leadership", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face" },
  { id: 10, name: "Dr. Arjun Menon", designation: "Associate Professor", qualifications: "Ph.D. Design, NID Ahmedabad", experience: 14, specialization: "UI/UX Design & Human-Computer Interaction", photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face" },
  { id: 11, name: "Dr. Lakshmi Iyer", designation: "Assistant Professor", qualifications: "Ph.D. Cloud Computing, IISc Bangalore", experience: 9, specialization: "Distributed Systems & Cloud Architecture", photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face" },
  { id: 12, name: "Prof. Ramesh Gupta", designation: "Professor", qualifications: "Ph.D. Accounting, ICAI Fellow", experience: 30, specialization: "Taxation, Auditing & Financial Reporting", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face" },
];
