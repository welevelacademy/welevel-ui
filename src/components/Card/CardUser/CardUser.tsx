import React from "react";
import { useTranslation } from "react-i18next";

import { CardComponent } from "..";
import { useGetContentCounterString } from "../../../utilities";
import { Avatar } from "../../Avatar";
import {
  AspectAvatarContainer,
  AspectSpacerBottom,
  AspectSpacerTop,
} from "./components/AspectRatioSpacer";

// Type
export type CardUserType = "teacher" | "partnerAgency";
export interface CardUserProperties {
  name: string;
  description: string;
  imageUrl: string;
  type: CardUserType;
  isInteractive?: boolean;
  reviewValue: number | undefined;
  numberOfCourses: number | undefined;
  numberOfEvents: number | undefined;
}
// Component
export const CardUser: React.FC<CardUserProperties> = ({
  name,
  description,
  imageUrl,
  type,
  isInteractive = true,
  reviewValue,
  numberOfCourses,
  numberOfEvents,
}) => {
  const { t } = useTranslation(["welevelUICommon", "welevelUIComponents"]);

  // Data
  const isAvatarSquared = type === "partnerAgency";

  // i18n string
  const role = new Map<CardUserType, string>([
    ["partnerAgency", t("welevelUICommon:partnerAgency")],
    ["teacher", t("welevelUICommon:teacher")],
  ]);

  // JSX
  return (
    <CardComponent.Wrapper isInteractive={isInteractive}>
      <AspectSpacerTop />

      <AspectAvatarContainer>
        <Avatar
          alternativeText=""
          imageUrl={imageUrl}
          isSquared={isAvatarSquared}
          size="fullHeight"
          shadow="stroke"
          borderWidth="md"
        />
      </AspectAvatarContainer>

      <CardComponent.Paper>
        <AspectSpacerBottom />
        <CardComponent.Content>
          <CardComponent.Header
            endDecorator={
              reviewValue !== undefined && (
                <CardComponent.HeaderReview>
                  {t("welevelUIComponents:card.CardHeaderReview.review", {
                    value: reviewValue,
                  })}
                </CardComponent.HeaderReview>
              )
            }>
            {role.get(type) ?? ""}
          </CardComponent.Header>
          <CardComponent.Body
            title={name}
            description={description}></CardComponent.Body>
          <CardComponent.Footer>
            {useGetContentCounterString({ numberOfCourses, numberOfEvents })}
          </CardComponent.Footer>
        </CardComponent.Content>
      </CardComponent.Paper>
    </CardComponent.Wrapper>
  );
};
