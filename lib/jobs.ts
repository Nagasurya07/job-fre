export type Job = {
  id: number
  title: string
  company: string
  logo: string
  location: string
  type: string
  experience: string
  mode: string
  category: string
  posted: string
  description: string
  skills: string[]
  accent: string
  verified?: boolean
  salary?: string
}

export const jobs: Job[] = [
  { id: 1, title: 'Frontend Engineer', company: 'Razorpay', logo: 'R', location: 'Bangalore', type: 'Full time', experience: '1–3 years', mode: 'Hybrid', category: 'Experienced', posted: '2d ago', description: 'Build elegant, high-performance experiences used by millions of businesses across India.', skills: ['React', 'TypeScript', 'Next.js'], accent: '#143d59', verified: true, salary: '₹14–24 LPA' },
  { id: 2, title: 'Software Engineer — New Grad', company: 'Microsoft', logo: 'M', location: 'Hyderabad', type: 'Full time', experience: 'Fresher', mode: 'On-site', category: 'Freshers', posted: '3d ago', description: 'Start your journey building products that empower every person and organization on the planet.', skills: ['C++', 'Azure', 'Algorithms'], accent: '#137c8b', verified: true, salary: '₹18–28 LPA' },
  { id: 3, title: 'Product Design Intern', company: 'PhonePe', logo: 'P', location: 'Pune', type: 'Internship', experience: 'Fresher', mode: 'Hybrid', category: 'Internships', posted: '4d ago', description: 'Shape thoughtful, simple experiences for the next billion users in digital payments.', skills: ['Figma', 'UX Research', 'Prototyping'], accent: '#5e3b96', verified: true, salary: '₹35k–50k / month' },
  { id: 4, title: 'Backend Developer', company: 'Zepto', logo: 'Z', location: 'Mumbai', type: 'Full time', experience: '2–5 years', mode: 'Remote', category: 'Remote', posted: '5d ago', description: 'Design reliable systems that make everyday essentials arrive at lightning speed.', skills: ['Node.js', 'PostgreSQL', 'AWS'], accent: '#dd5f21', salary: '₹20–32 LPA' },
  { id: 5, title: 'AI / ML Trainee', company: 'Wipro', logo: 'W', location: 'Chennai', type: 'Full time', experience: '0–2 years', mode: 'On-site', category: 'Trainee', posted: '6d ago', description: 'Learn, experiment, and ship intelligent solutions with a supportive team of builders.', skills: ['Python', 'ML', 'SQL'], accent: '#1261a0', verified: true, salary: '₹6–10 LPA' },
  { id: 6, title: 'Open Source Hackathon 2026', company: 'GitHub India', logo: 'GH', location: 'Remote', type: 'Hackathon', experience: 'All levels', mode: 'Remote', category: 'Hackathons', posted: '1w ago', description: 'Bring your boldest idea to life, collaborate with the community, and win exciting prizes.', skills: ['Open Source', 'AI', 'Git'], accent: '#24292f', verified: true },
   { id:7, title: 'Frontend Engineer', company: 'Razorpay', logo: 'R', location: 'Bangalore', type: 'Full time', experience: '1–3 years', mode: 'Hybrid', category: 'Experienced', posted: '2d ago', description: 'Build elegant, high-performance experiences used by millions of businesses across India.', skills: ['React', 'TypeScript', 'Next.js'], accent: '#143d59', verified: true, salary: '₹14–24 LPA' },
  { id: 8, title: 'Software Engineer — New Grad', company: 'Microsoft', logo: 'M', location: 'Hyderabad', type: 'Full time', experience: 'Fresher', mode: 'On-site', category: 'Freshers', posted: '3d ago', description: 'Start your journey building products that empower every person and organization on the planet.', skills: ['C++', 'Azure', 'Algorithms'], accent: '#137c8b', verified: true, salary: '₹18–28 LPA' },
  { id: 9, title: 'Product Design Intern', company: 'PhonePe', logo: 'P', location: 'Pune', type: 'Internship', experience: 'Fresher', mode: 'Hybrid', category: 'Internships', posted: '4d ago', description: 'Shape thoughtful, simple experiences for the next billion users in digital payments.', skills: ['Figma', 'UX Research', 'Prototyping'], accent: '#5e3b96', verified: true, salary: '₹35k–50k / month' },
  { id: 10, title: 'Backend Developer', company: 'Zepto', logo: 'Z', location: 'Mumbai', type: 'Full time', experience: '2–5 years', mode: 'Remote', category: 'Remote', posted: '5d ago', description: 'Design reliable systems that make everyday essentials arrive at lightning speed.', skills: ['Node.js', 'PostgreSQL', 'AWS'], accent: '#dd5f21', salary: '₹20–32 LPA' },
  { id: 11, title: 'AI / ML Trainee', company: 'Wipro', logo: 'W', location: 'Chennai', type: 'Full time', experience: '0–2 years', mode: 'On-site', category: 'Trainee', posted: '6d ago', description: 'Learn, experiment, and ship intelligent solutions with a supportive team of builders.', skills: ['Python', 'ML', 'SQL'], accent: '#1261a0', verified: true, salary: '₹6–10 LPA' },
  { id: 12, title: 'Open Source Hackathon 2026', company: 'GitHub India', logo: 'GH', location: 'Remote', type: 'Hackathon', experience: 'All levels', mode: 'Remote', category: 'Hackathons', posted: '1w ago', description: 'Bring your boldest idea to life, collaborate with the community, and win exciting prizes.', skills: ['Open Source', 'AI', 'Git'], accent: '#24292f', verified: true },

]

export const filters = ['All opportunities', 'Freshers', 'Internships', 'Remote', 'Experienced', 'Trainee', 'Hackathons']
export const locations = ['Any location', 'Bangalore', 'Hyderabad', 'Pune', 'Mumbai', 'Chennai', 'Remote']
