'use client'

import { ArrowRight, Menu, Search, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { filters } from '../lib/jobs'

export function Header({ onCategory }: { onCategory: (category: string) => void }) {
  const [open, setOpen] = useState(false)

  return <header className="site-header"><div className="header-inner">
    <button className="brand" onClick={() => onCategory('All opportunities')} aria-label="ALL HAIL home"><span className="brand-mark" aria-hidden="true" /><span>ALL HAIL</span></button>
    <nav className={open ? 'main-nav open' : 'main-nav'}>{filters.slice(1).map((item) => <button key={item} onClick={() => { onCategory(item); setOpen(false) }}>{item}</button>)}<button>Guides</button></nav>
    <div className="header-actions"><button className="icon-button" aria-label="Search"><Search size={19} /></button><button className="primary-button find-button" onClick={() => document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' })}>Find jobs <ArrowRight size={16} /></button><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></div>
  </div></header>
}
