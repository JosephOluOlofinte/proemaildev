
import { projectData } from "@/lib/data";
import ProjectInfoCard from '@/components/block/ProjectInfoCard';

interface projectProps {
  params: Promise<{
    slug: string
  }>;
}

const projectInfo = async (props: projectProps) => {
  const params = await props.params;

  const { slug } = params;

  const data = projectData.find((item) => item.slug === slug)

  return data ? <ProjectInfoCard {...data} /> : 
  <>
    <main className="max-w-5xl h-screen mx-auto px-6 py-12">
      <h2>Aw, snap. The project you requested does not exist on this platform.</h2>
      <p>Perhaps, there&apos;s and error in the URL. To get back on track, start viewing my full project list. </p>
    </main>
  </>
}

export default projectInfo