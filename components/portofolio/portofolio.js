import React from 'react';
import Container from '../container';
import Project from './project';

export default function Portofolio({title, subtitle, projects = []}) {
  return (
    <div className="py-24">
      <Container>
        <h2 className="text-center text-xl font-bold">{title}</h2>
        <h5 className="text-center ">{subtitle}</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {projects.map(project => (
            <Project project={project} />
          ))}
        </div>
      </Container>
    </div>
  )
}
