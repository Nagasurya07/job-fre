'use client'

import { Check, Filter, Sparkles, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { DetailPanel } from '../components/detail-panel'
import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { JobCard } from '../components/job-card'
import { jobs, filters } from '../lib/jobs'

export default function Page() {
  const [category, setCategory] = useState('All opportunities')
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('Any location')
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[number] | null>(null)
  const [mobileFilters, setMobileFilters] = useState(false)
  const filteredJobs = useMemo(() => jobs.filter((job) => (category === 'All opportunities' || job.category === category) && (!query || `${job.title} ${job.company} ${job.skills.join(' ')}`.toLowerCase().includes(query.toLowerCase())) && (location === 'Any location' || job.location === location)), [category, query, location])

  function clearFilters() {
    setCategory('All opportunities')
    setLocation('Any location')
    setQuery('')
  }

  return <><Header onCategory={setCategory} /><main><Hero query={query} location={location} onQueryChange={setQuery} onLocationChange={setLocation} /><section className="opportunities" id="opportunities"><div className="section-top"><div><div className="eyebrow">THE LATEST AND GREATEST</div><h2>Opportunities for a brighter you.</h2><p>{filteredJobs.length} handpicked roles worth your attention.</p></div><button className="filter-mobile" onClick={() => setMobileFilters(true)}><Filter size={16} /> Filters</button></div><div className="content-layout"><aside className={mobileFilters ? 'filters mobile-open' : 'filters'}><div className="filter-mobile-header"><strong>Filter opportunities</strong><button onClick={() => setMobileFilters(false)}><X size={18} /></button></div><div className="filter-group"><label>Category</label>{filters.map((item) => <button key={item} className={category === item ? 'filter-option selected' : 'filter-option'} onClick={() => { setCategory(item); setMobileFilters(false) }}>{category === item && <Check size={15} />}{item}</button>)}</div><div className="filter-group"><label>Work mode</label>{['Any mode', 'Remote', 'Hybrid', 'On-site'].map((item) => <button key={item} className="filter-option">{item}</button>)}</div><button className="clear-filter" onClick={clearFilters}>Clear all filters</button></aside><div className="job-list">{filteredJobs.length ? filteredJobs.map((job) => <JobCard key={job.id} job={job} onSelect={setSelectedJob} />) : <div className="empty-state"><Sparkles size={22} /><h3>No opportunities found.</h3><p>Try changing your search or filters.</p><button className="outline-button" onClick={clearFilters}>Clear filters</button></div>}</div></div></section></main><footer><div className="brand"><span className="brand-mark" aria-hidden="true" /><span>ALL HAIL</span></div><span>Opportunities for a Brighter You</span></footer>{selectedJob && <DetailPanel job={selectedJob} onClose={() => setSelectedJob(null)} />}</>
}
