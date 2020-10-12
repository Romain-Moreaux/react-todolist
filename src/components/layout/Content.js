import React from 'react'
import { Sidebar } from '.'
import { Tasks } from '../Tasks'
export default function Content() {
  return (
    <div>
      <Sidebar />
      <Tasks />
    </div>
  )
}
