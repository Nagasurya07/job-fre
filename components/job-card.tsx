import { ArrowRight, BriefcaseBusiness, Clock3, MapPin, ShieldCheck } from 'lucide-react'
import type { Job } from '../lib/jobs'
import { Logo } from './logo'

export function JobCard({ job, onSelect }: { job: Job; onSelect: (job: Job) => void }) {
  return <article className="job-card"><div className="job-card-top"><Logo job={job} /><div className="job-heading"><div className="eyebrow">{job.category}</div><h3>{job.title}</h3><p className="company-name">{job.company} {job.verified && <ShieldCheck size={15} className="verified" />}</p></div><button className="save-button" aria-label={`Save ${job.title}`}>☆</button></div><div className="job-meta"><span><MapPin size={15} />{job.location}</span><span><BriefcaseBusiness size={15} />{job.type}</span><span><Clock3 size={15} />{job.experience}</span><span className="mode-pill">{job.mode}</span></div><p className="job-description">{job.description}</p><div className="tag-row">{job.skills.map((skill) => <span key={skill} className="tag">{skill}</span>)}</div><div className="job-card-bottom"><span className="posted">Posted {job.posted}</span><button className="text-button" onClick={() => onSelect(job)}>View details <ArrowRight size={15} /></button></div></article>
}
