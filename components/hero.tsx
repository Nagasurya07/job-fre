'use client'

import { ArrowRight, ChevronDown, MapPin, Search } from 'lucide-react'
import { locations } from '../lib/jobs'

export function Hero({ query, location, onQueryChange, onLocationChange }: { query: string; location: string; onQueryChange: (query: string) => void; onLocationChange: (location: string) => void }) {
  return <section className="hero">
    <div className="hero-inner">
      <div className="hero-copy">
        <div className="kicker">
          <span className="kicker-dot" />CURATED FOR YOUR NEXT CHAPTER</div>
          <h1>Find work that<br />
          <span>moves you forward.</span>
          </h1><p>Explore the latest jobs, internships and career opportunities from companies building the future across India.</p>
          <div className="search-panel">
            <div className="search-field">
              <Search size={20} />
              <input value={query} onChange={(e) => onQueryChange(e.target.value)} placeholder="Job title, skill or company" aria-label="Search jobs" />
              </div>
              <div className="search-divider" />
              <div className="search-field location-field">
                <MapPin size={20} /><select value={location} onChange={(e) => onLocationChange(e.target.value)} aria-label="Filter by location">{locations.map((item) => <option key={item}>{item}</option>)}</select>
                <ChevronDown size={16} /></div>
                <button className="primary-button hero-search" onClick={() => document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' })}>Search jobs <ArrowRight size={17} />
                </button>
                </div>
                <div className="popular">
                  <span>Popular:</span>{['Software Engineer', 'Frontend', 'AI', 'Python', 'Remote'].map((item) => <button key={item} onClick={() => onQueryChange(item)}>{item}</button>)}</div></div><div className="hero-art" aria-hidden="true">
                    <div className="orbit orbit-one" /><div className="orbit orbit-two" />
                    <div className="art-card card-one">
                      <div className="mini-logo">R</div><div><strong>Frontend Engineer</strong>
                      <small>Razorpay · Bangalore</small></div>
                  <span className="match">98%</span></div><div className="art-card card-two">
                    <div className="mini-logo purple">P</div>
                    <div><strong>Product Design Intern</strong>
                    <small>PhonePe · Pune</small>
                    </div></div>
                  <div className="art-note">
                    <span className="note-mark" aria-hidden="true">
    ↗</span> Your next opportunity is closer than you think.</div></div></div></section>
}
