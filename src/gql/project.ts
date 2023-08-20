import { gql } from "@apollo/client";

import { getClient } from "../utils/client";
import { IAsset, IRichText } from "../utils/graphql";

export type IProject = {
  id: string;
  title: string;
  url: string;
  experience: number;
  type: string;
  description: IRichText;
  markdownFile: IAsset;
  media: Array<
    IAsset & {
      small: string;
    }
  >;
};

export type IProjects = Array<IProject>;

export type IProjectsData = {
  projects: IProjects;
};

const query = gql`
  query Projects {
    projects {
      id
      title
      url
      type
      markdownFile {
        url
      }
      media {
        small: url(
          transformation: { image: { resize: { height: 400, width: 400 } } }
        )
        url
      }
      description {
        html
        markdown
        text
        raw
      }
    }
  }
`;

export async function getProjects() {
  const data = await getClient().query<IProjectsData>({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return data;
}
