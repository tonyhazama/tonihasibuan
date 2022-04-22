import React from 'react';
import Container from '../container';
import Project from './project';

export default function Portfolio({projects = []}) {
  return (
    <div className="py-24" id="works">
      <Container>
        <h2 className="text-center text-xl font-bold">
          This is what i've worked on
        </h2>
        <h5 className="text-center">
          A curated list of professional work i did over the years.
        </h5>
        <div></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {projects.map(project => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </div>
  )
}
