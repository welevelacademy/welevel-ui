import React from "react";
import { useTranslation } from "react-i18next";

import { CardComponent } from "..";
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
}
// Component
export const CardUser: React.FC<CardUserProperties> = ({
  name,
  description,
  imageUrl,
  type,
  isInteractive = true,
}) => {
  const { t } = useTranslation();

  // Data
  const isAvatarSquared = type === "partnerAgency";

  const role = new Map<CardUserType, string>([
    ["partnerAgency", t("partnerAgency")],
    ["teacher", t("teacher")],
  ]);

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
              <CardComponent.HeaderReview>4,5</CardComponent.HeaderReview>
            }
          >
            {role.get(type) ?? ""}
          </CardComponent.Header>
          <CardComponent.Body
            title={name}
            description={description}
          ></CardComponent.Body>
          <CardComponent.Footer>8 corsi</CardComponent.Footer>
        </CardComponent.Content>
      </CardComponent.Paper>
    </CardComponent.Wrapper>
  );
};
