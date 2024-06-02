import { projects } from '@/data'
import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const RecentProjects = () => {
  return (
    <div className='py-20'>
        <h1 className='heading'>
            A small Selection of {' '}
            <span className='text-purple'>Recent Projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
         {projects.map(({id, title, des, img, iconLists, link, }) => (
            <div>
                {project.title}
            </div>
         ))}
        </div>
    </div>
  )
}

export default RecentProjects