import { ArrowRight, BriefcaseBusiness, SlidersHorizontal, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { jobs } from '../lib/jobs'
import { Logo } from './logo'

export function Admin() {
  return <main className="admin-shell">
    <aside className="admin-sidebar">
      <Link className="brand" href="/">
      <span className="brand-mark" aria-hidden="true" />
      <span>ALL HAIL</span></Link><div className="admin-label">ADMIN CONSOLE</div>
      <nav><button className="active">
        <Sparkles size={17} />Dashboard</button>
        <button><BriefcaseBusiness size={17} />Jobs <span>24</span></button>
        <button><ArrowRight size={17} />Add job</button>
        <button><SlidersHorizontal size={17} />Analytics</button>
        </nav><Link className="back-button" href="/">← View public site</Link>
        </aside><section className="admin-content"><div className="admin-topbar"><div>
          <div className="eyebrow">Monday, 23 September 2026</div>
          <h1>Good morning, admin.</h1></div><div className="admin-avatar">AH</div>
          </div><div className="stat-grid"><div className="stat-card"><span>Active visitors</span>
          <strong>1,284</strong><small className="positive">↗ 12.4% <em>vs last week</em></small>
          </div><div className="stat-card"><span>Published jobs</span><strong>152</strong>
          <small className="positive">↗ 8.2% <em>vs last week</em></small></div><div className="stat-card">
            <span>Job views</span>
            <strong>54.8k</strong><small className="positive">↗ 18.7% <em>vs last week</em>
            </small></div><div className="stat-card"><span>Apply clicks</span><strong>8,291</strong>
            <small className="positive">↗ 9.3% <em>vs last week</em></small></div>
            </div><div className="admin-section-header"><div><h2>Most applied jobs</h2>
            <p>See which opportunities are getting the most attention.</p></div>
            <button className="outline-button">View all <ArrowRight size={15} />
            </button></div><div className="table-card"><div className="table-row table-head">
              <span>Job title</span><span>Company</span><span>Apply clicks</span><span>Views</span>
              <span>Published</span></div>{jobs.slice(0, 4).map((job, i) => <div className="table-row" key={job.id}>
                <span className="table-job"><Logo job={job} /><strong>{job.title}</strong>
                </span><span>{job.company}</span>
                <span className="table-number">{['842', '621', '517', '398'][i]}</span>
                <span>{['4,321', '3,221', '2,892', '2,104'][i]}</span><span>{job.posted}</span>

  </div>)}</div>
  </section></main>
}
