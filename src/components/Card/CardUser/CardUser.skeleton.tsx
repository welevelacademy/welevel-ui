import { Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";

import { CardComponent } from "..";
import { Avatar } from "../../Avatar";
import { CardUserType } from "./CardUser";
import {
  AspectAvatarContainer,
  AspectSpacerBottom,
  AspectSpacerTop,
} from "./components/AspectRatioSpacer";

export interface CardUserSkeletonProperties {
  type?: CardUserType;
}

export const CardUserSkeleton: React.FC<CardUserSkeletonProperties> = ({
  type = "teacher",
}) => (
  <CardComponent.Wrapper isInteractive={false}>
    <AspectSpacerTop />

    <AspectAvatarContainer>
      <Avatar
        alternativeText=""
        isSquared={type === "partnerAgency"}
        size="fullHeight"
        shadow="stroke"
        borderWidth="md"
        isSkeleton
      />
    </AspectAvatarContainer>

    <CardComponent.Paper>
      <AspectSpacerBottom />
      <CardComponent.Content>
        <CardComponent.Header
          endDecorator={
            <Typography variant="body2">
              <Skeleton width="32px" />
            </Typography>
          }
        >
          <Skeleton width="30%" />
        </CardComponent.Header>
        <CardComponent.Body
          title={<Skeleton width="60%" />}
          description={<Skeleton />}
        ></CardComponent.Body>
        <CardComponent.Footer>
          <Skeleton width="30%" />
        </CardComponent.Footer>
      </CardComponent.Content>
    </CardComponent.Paper>
  </CardComponent.Wrapper>
);
