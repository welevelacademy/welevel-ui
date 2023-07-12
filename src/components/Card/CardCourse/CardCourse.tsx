import React from "react";
import { useTranslation } from "react-i18next";

import { CardComponent } from "..";

// Type
// TODO:
// addToAPlaylist (action)
// ContentTypeDescription -> (course)
// author = {id, firstName, lastName, image?}
// difficultyType = BASE | AVANZATO | MASTERCLASS (perché masterclass) qua?
// completionPercentage - (progression bar)
// rating (da formattare o formattato)
// duration (4h 5min)

export interface CardCourseProperties {
  name: string;
  description: string;
  imageUrl: string;
  isInteractive?: boolean;
}

// Component
export const CardCourse: React.FC<CardCourseProperties> = ({
  name,
  description,
  imageUrl,
  isInteractive = true,
}) => {
  const { t } = useTranslation();

  return (
    <CardComponent.Wrapper isInteractive={isInteractive}>
      <CardComponent.Paper>
        <CardComponent.Cover $imageUrl={imageUrl} />
        <CardComponent.Content>
          <CardComponent.Header
            endDecorator={
              <CardComponent.HeaderReview>4,5</CardComponent.HeaderReview>
            }
          >
            {t("general.course_one")}
          </CardComponent.Header>
          <CardComponent.Body
            title={name}
            description={description}
          ></CardComponent.Body>
          <CardComponent.Footer>FIXME: price?</CardComponent.Footer>
        </CardComponent.Content>
      </CardComponent.Paper>
    </CardComponent.Wrapper>
  );
};
