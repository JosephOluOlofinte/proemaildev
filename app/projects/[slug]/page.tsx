
import { emailProjectData } from "@/lib/emailProjectsData";
import ProjectInfoCard from '@/components/block/ProjectInfoCard';
import { Metadata } from "next";


interface projectProps {
  params: Promise<{
    slug: string
  }>;
}


export async function generateMetadata({ params }: projectProps): Promise<Metadata> {
  const { slug } = await params;

  const data = emailProjectData.find((p) => p.slug === slug);

  if (!data) {
    return {
      title: "Project Not Found",
      description: "This project does not exist.",
    };
  }

  return {
    title: `${data.title} | Proemaildeveloper`,
    description: data.desc,
    openGraph: {
      title: data.title,
      description: data.desc,
      images: [{ url: typeof data.desktopView === "string" ? data.desktopView : data.desktopView.src }],
    },
  };
}

const ProjectInfo = async ({ params }: projectProps) => {

  const { slug } = await params;

  const data = emailProjectData.find((item) => item.slug === slug)

  return data ? 
  <>
    <ProjectInfoCard {...data} /> 
  </> : 
  <>
    <main className="max-w-5xl h-screen my-auto mx-auto px-6 py-12">
      <h2>Aw, snap. The project you requested does not exist on this platform.</h2> <br />
      <p>Perhaps, there&apos;s and error in the URL. To get back on track, start viewing my full project list. </p>
    </main>
  </>
}


export default ProjectInfo;