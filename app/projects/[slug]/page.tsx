
import { Fragment } from 'react'
import { projectData } from "@/lib/data";
import ProjectInfoCard from '@/components/block/ProjectInfoCard';

const slug = "e-commerce-seasonal-campaign"

const projectInfo = () => {

  const data = projectData.find((item) => item.slug === slug)
  
  return data ? <ProjectInfoCard {...data} /> : <p>Project not found</p>
}

export default projectInfo