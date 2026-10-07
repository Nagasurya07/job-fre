import type { Job } from '../lib/jobs'

export function Logo({ job }: { job: Job }) {
  return <div className="company-logo" style={{ background: job.accent }}>{job.logo}</div>
}
