import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SITE_URL } from "@/constants";
import { getApps } from "@/graphql/api/getApp";
import { getProjectBySlug } from "@/graphql/api/getProjectBySlug";
import { ProjectDetail } from "@/views/ProjectDetails/ProjectDetail";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// export const revalidate = 3600;

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data } = await getApps();
  const app = data?.apps[0];

  const {
    data: { project },
  } = await getProjectBySlug("/project/" + slug);

  if (!project) {
    return notFound();
  }

  const previousImages = (await parent).openGraph?.images || [];

  const images = project?.media?.map((m) => m.small);

  return {
    title: `${project.title} | ${app?.fullname}`,
    description: project.description.text,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: `${project.title} | ${app?.fullname}`,
      description: project.description.text,
      images: [...images, ...previousImages],
      url: `${SITE_URL}/project/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProjectPage({ params: { slug } }: Props) {
  const {
    data: { project },
  } = await getProjectBySlug("/project/" + slug);

  if (!project?.projectDetailPage?.show) {
    return notFound();
  }

  return (
    <Container>
      <Section gap="2rem">
        <ProjectDetail {...project} />
      </Section>
    </Container>
  );
}
