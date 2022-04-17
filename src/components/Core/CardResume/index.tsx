import React, { FC } from "react";

import {
  CardResumeCompany,
  CardResumeContainer,
  CardResumeContent,
  CardResumeContentBody,
  CardResumeContentTitle,
  CardResumeFrom,
  CardResumeTitle,
  CardResumeWrapperTitle,
} from "./styles";

interface Content {
  title?: string;
  body?: string;
}
interface CardResumeProps {
  company?: string;
  title?: string;
  from?: {
    start?: string;
    end?: string;
  };
  contents?: Array<Content>;
}

const CardResume: FC<CardResumeProps> = (props) => {
  const { company, title, from, contents } = props;

  return (
    <CardResumeContainer>
      <CardResumeWrapperTitle>
        <CardResumeCompany>{company}</CardResumeCompany>
        <CardResumeTitle>{title}</CardResumeTitle>
        <CardResumeFrom>
          {from?.start} - {from?.end}
        </CardResumeFrom>
      </CardResumeWrapperTitle>
      <CardResumeContent>
        {contents?.map((c, i) => (
          <React.Fragment key={i}>
            <CardResumeContentTitle>{c.title}</CardResumeContentTitle>
            <CardResumeContentBody>{c.body}</CardResumeContentBody>
          </React.Fragment>
        ))}
      </CardResumeContent>
    </CardResumeContainer>
  );
};

export default CardResume;
