import React from 'react';
import project1Small from '../assets/images/thumbnail-project-1-small.webp';
import project2Small from '../assets/images/thumbnail-project-2-small.webp';
import project3Small from '../assets/images/thumbnail-project-3-small.webp';
import project4Small from '../assets/images/thumbnail-project-4-small.webp';
import project5Small from '../assets/images/thumbnail-project-5-small.webp';
import project6Small from '../assets/images/thumbnail-project-6-small.webp';

import project1Big from '../assets/images/thumbnail-project-1-large.webp';
import project2Big from '../assets/images/thumbnail-project-2-large.webp';
import project3Big from '../assets/images/thumbnail-project-3-large.webp';
import project4Big from '../assets/images/thumbnail-project-4-large.webp';
import project5Big from '../assets/images/thumbnail-project-5-large.webp';
import project6Big from '../assets/images/thumbnail-project-6-large.webp';

type ProjectNumber = '1' | '2' | '3' | '4' | '5' | '6';
type ProjectDetailsProps = {
  projectNum: ProjectNumber,
  projectName: string,
  progLang?: string

}

const imagesSmall = {
  '1': project1Small,
  '2': project2Small,
  '3': project3Small,
  '4': project4Small,
  '5': project5Small,
  '6': project6Small,
};

const imagesBig = {
  '1': project1Big,
  '2': project2Big,
  '3': project3Big,
  '4': project4Big,
  '5': project5Big,
  '6': project6Big,
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectNum, projectName, progLang }) => (
  <div className='p-2 md:w-1/2 flex'>
  <div className='space-y-4 flex-grow'>
    <picture  >
      <source media='(min-width:768px' srcSet={imagesBig[projectNum]} />
      <img src={imagesSmall[projectNum]} alt="Project1 thumbnail" />
    </picture>

    <h2 className='uppercase text-2xl font-semibold text-white'>{projectName}</h2>
    <div className="flex justify-start items-center gap-6 -mt-2 -mb-2">
      <span>HTML</span>
      <span>CSS</span>
      {progLang ? <span className='uppercase'>{progLang}</span> : ''}
    </div>
    <div className="flex justify-start items-center gap-6 md:flex-col md:items-start lg:flex-row lg:items-center">
      <span className='uppercase text-1xl font-semibold tracking-widest pb-2 border-b-2 border-greenLineColor hover:text-greenLineColor hover:cursor-pointer'>view project</span>
      <span className='uppercase text-1xl font-semibold tracking-widest pb-2 border-b-2 border-greenLineColor hover:text-greenLineColor hover:cursor-pointer'>view code</span>
    </div>
  </div>
  </div>
);

const Projects = () => {
  return (
    <>
      <div className='flex flex-col justify-center p-4 space-y-16'>
        <div className="flex items-center justify-between"><span className='text-4xl font-bold text-white md:text-6xl lg:text-7xl'>Projects</span><span className='uppercase text-1xl font-semibold tracking-widest pb-2 border-b-2 border-greenLineColor'>contact me</span></div>

        <div className="flex flex-wrap -mx-2">
          <ProjectDetails projectNum='1' projectName='design portfolio' />

          <ProjectDetails projectNum='2' projectName='E-LEARNING LANDING PAGE' />

          <ProjectDetails projectNum='3' projectName='TODO WEB APP' progLang='javascript' />

          <ProjectDetails projectNum='4' projectName='ENTERTAINMENT WEB APP' progLang='javascript' />

          <ProjectDetails projectNum='5' projectName='MEMORY GAME' progLang='javascript' />

          <ProjectDetails projectNum='6' projectName='ART GALLERY SHOWCASE' progLang='javascript' />
        </div>
      </div>
      <div className="h-0.25 bg-white w-full mt-16 "></div>
    </>
  )
}

export default Projects;