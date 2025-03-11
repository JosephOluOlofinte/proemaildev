
import { projectData } from "@/lib/data";
import ProjectInfoCard from '@/components/block/ProjectInfoCard';

interface projectProps {
  params: {
    slug: string
  };
}

const projectInfo = ({ params }: projectProps) => {

  const { slug } = params;

  console.log(params.slug)

  const data = projectData.find((item) => item.slug === slug)
  
  return data ? <ProjectInfoCard {...data} /> : <p>Project not found</p>
}

export default projectInfo