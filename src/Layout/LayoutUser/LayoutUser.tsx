import { Container, Link, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { LayoutComponents } from "..";
import {
  ContentGridShowMore,
  ContentGridShowMoreProperties,
  ExternalLink,
} from "../../components";
import {
  ReviewSummary,
  ReviewSummaryProperties,
} from "../../components/ReviewSummary";
import { SegmentedControl } from "../../components/SegmentedControl";
import { LayoutUserHeader } from "./components/LayoutUserHeader";
import { LayoutUserInfo } from "./components/LayoutUserInfo";

type LayoutUserType = "teacher" | "partnerAgency";

interface BaseLayoutUserProperties {
  segmentedControlLayoutID: string;
  coverImageUrl: string;
  userImageUrl: string;
  userName: string;
  userDescription: string;
  coursesSection: ContentGridShowMoreProperties;
  eventsSection: ContentGridShowMoreProperties;
  topicsList: JSX.Element[];
  reviewSummary: ReviewSummaryProperties;
  links: {
    label: string;
    href: string;
  }[];
}

export type LayoutUserProperties = BaseLayoutUserProperties &
  (
    | {
        type: "teacher";
        partnerAgenciesSection: ContentGridShowMoreProperties;
        teachersSection: undefined;
      }
    | {
        type: "partnerAgency";
        partnerAgenciesSection: undefined;
        teachersSection: ContentGridShowMoreProperties;
      }
  );

// Styled
const SegmentedControlWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: ${({ theme }) => theme.spacing(1)}px;
  padding-top: ${({ theme }) => theme.spacing(1)}px;
`;

// FIXME: remove and move to welevel
// Component
export const LayoutUser: React.FC<LayoutUserProperties> = ({
  segmentedControlLayoutID,
  coverImageUrl,
  userImageUrl,
  userName,
  userDescription,
  type,
  coursesSection,
  eventsSection,
  partnerAgenciesSection,
  teachersSection,
  topicsList,
  reviewSummary,
  links,
}) => {
  const { t } = useTranslation(["welevelUICommon", "welevelUILayout"]);

  const sections: {
    id: string;
    tabName: string;
    sectionProperties: ContentGridShowMoreProperties;
  }[] = [
    {
      id: "courses",
      tabName: t("welevelUICommon:course_other"),
      sectionProperties: {
        ...coursesSection,
        sectionTitle:
          coursesSection.sectionTitle ??
          t("welevelUILayout:LayoutUser.courseSectionTitle", {
            userName,
          }),
      },
    },
    {
      id: "events",
      tabName: t("welevelUICommon:event_other"),
      sectionProperties: {
        ...eventsSection,
        sectionTitle:
          eventsSection.sectionTitle ??
          t("welevelUILayout:LayoutUser.eventSectionTitle", {
            userName,
          }),
      },
    },
  ];

  if (type === "teacher") {
    sections.push({
      id: "partnerAgency",
      tabName: t("welevelUICommon:partnerAgency_other"),
      sectionProperties: {
        ...partnerAgenciesSection,
        sectionTitle:
          partnerAgenciesSection.sectionTitle ??
          t("welevelUILayout:LayoutUser.partnerAgencySectionTitle", {
            userName,
          }),
      },
    });
  }

  if (type === "partnerAgency") {
    sections.push({
      id: "teachers",
      tabName: t("welevelUICommon:teacher_other"),
      sectionProperties: {
        ...teachersSection,
        sectionTitle:
          teachersSection.sectionTitle ??
          t("welevelUILayout:LayoutUser.teacherSectionTitle", {
            userName,
          }),
      },
    });
  }

  // States
  const [selectedTabId, setSelectedTabId] = useState(sections[0].id);

  // Data
  const isAvatarSquared = type === "partnerAgency";

  const role = new Map<LayoutUserType, string>([
    ["partnerAgency", t("welevelUICommon:partnerAgency_one")],
    ["teacher", t("welevelUICommon:teacher_one")],
  ]);

  const shareQuote = new Map<LayoutUserType, string>([
    ["partnerAgency", t("welevelUICommon:partnerAgency_one")],
    ["teacher", t("welevelUICommon:teacher_one")],
  ]);

  // Callbacks
  function getSectionId(id: string) {
    return `section-${id}`;
  }

  // const scrollWithOffset = (el) => {
  // 	const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  // 	window.scrollTo({ top: yCoordinate - offset + 8, behavior: "smooth" });
  // };

  return (
    <>
      <LayoutComponents.HeroWrapper>
        <LayoutComponents.NavigationHeader
          ShareMenuQuote={shareQuote.get(type) ?? ""}
          breadcrumbs={[
            <Link key="home" href="/">
              TODO: home
            </Link>,
            <Link key="users" href="/">
              TODO: users
            </Link>,
            <Typography key="user">{userName}</Typography>,
          ]}
        ></LayoutComponents.NavigationHeader>
        <LayoutComponents.HeroImage imageUrl={coverImageUrl} />
        <LayoutComponents.HeroContent>
          <LayoutUserHeader
            overline={role.get(type) ?? ""}
            isAvatarSquared={isAvatarSquared}
            avatarUrl={userImageUrl}
            title={userName}
            description={userDescription}
          />
          <LayoutUserInfo
            userName={userName}
            descriptionContent={<div>description</div>}
            linksContent={links.map((link) => (
              <ExternalLink key={link.label} href={link.href}>
                {link.label}
              </ExternalLink>
            ))}
            reviewContent={
              <ReviewSummary
                numberOfReviews={reviewSummary.numberOfReviews}
                value={reviewSummary.value}
              />
            }
            topicsContent={topicsList}
          />
        </LayoutComponents.HeroContent>
      </LayoutComponents.HeroWrapper>

      <LayoutComponents.StickyBar>
        <SegmentedControlWrapper>
          <SegmentedControl
            segmentedControlLayoutID={segmentedControlLayoutID}
            items={sections.map((section) => ({
              label: section.tabName,
              id: section.id,
            }))}
            activeItemID={selectedTabId}
            onClick={setSelectedTabId}
          />
        </SegmentedControlWrapper>
      </LayoutComponents.StickyBar>
      <Container>
        {sections.map((section) => {
          const sectionId = getSectionId(section.id);
          return (
            <ContentGridShowMore
              key={sectionId}
              id={sectionId}
              {...section.sectionProperties}
            />
          );
        })}
      </Container>
    </>
  );
};
