'use client'

import { ArrowRight, BriefcaseBusiness, Clock3, MapPin, ShieldCheck, X } from 'lucide-react'
import type { Job } from '../lib/jobs'
import { Logo } from './logo'

export function DetailPanel({ job, onClose }: { job: Job; onClose: () => void }) {
  return <div className="detail-overlay" role="dialog" aria-modal="true">
    <div className="detail-panel">
      <button className="close-detail" onClick={onClose} aria-label="Close details"><X /></button><div className="detail-hero"><Logo job={job} /><div><div className="eyebrow">{job.category} · Posted {job.posted}</div><h2>{job.title}</h2><p className="company-name">{job.company} {job.verified && <ShieldCheck size={15} className="verified" />}</p></div></div><div className="detail-grid"><div><div className="job-meta detail-meta"><span><MapPin size={15} />{job.location}</span><span><BriefcaseBusiness size={15} />{job.type}</span><span><Clock3 size={15} />{job.experience}</span><span>{job.mode}</span></div><h4>About the role</h4><p>{job.description} This is an opportunity to make meaningful work with a team that cares deeply about craft, ownership, and impact.</p><h4>What you&apos;ll bring</h4><ul><li>Strong problem-solving and communication skills</li><li>Curiosity and an eye for thoughtful, accessible experiences</li><li>Ability to collaborate with a cross-functional team</li></ul><h4>Skills</h4>
      <div className="tag-row">{job.skills.map((skill) => <span key={skill} className="tag">{skill}</span>)}</div></div><aside className="apply-card">
        <p className="eyebrow">READY TO MAKE A MOVE?</p><h3>Make your next chapter count.</h3>{job.salary && <p className="salary">{job.salary}</p>}<button className="primary-button apply-button" onClick={() => alert('Apply click recorded. Redirecting to the original application...')}>Apply now <ArrowRight size={17} />
  </button>
  <p className="apply-note">You&apos;ll continue to the original application on {job.company}&apos;s website.</p>
  </aside>
  </div>
  </div></div>
}
