import React from 'react'

type TechSkillProps = {
  skill: string,
  description: string
}

const TechSkill: React.FC<TechSkillProps> = ({ skill, description }) => (
<div className='md:w-1/2 lg:w-1/3'>
  <h1 className='text-4xl font-bold'>{skill}</h1>
  <p className='text-base'>{description}</p>
</div>)

const Experience = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center text-center p-4 space-y-8 mt-4 w-full
       md:flex-row md:flex-wrap md:justify-start md:items-baseline md:text-left text-white'>

        <TechSkill skill='HTML' description='4 Years Experience' />
        <TechSkill skill='CSS' description='4 Years Experience' />
        <TechSkill skill='Javascript' description='4 Years Experience' />
        <TechSkill skill='Accessibility' description='4 Years Experience' />
        <TechSkill skill='React' description='3 Years Experience' />
        <TechSkill skill='Sass' description='3 Years Experience' />


      </div>
      <div className="h-0.25 bg-white w-full mt-16 "></div>
    </>
  )
}

export default Experience;