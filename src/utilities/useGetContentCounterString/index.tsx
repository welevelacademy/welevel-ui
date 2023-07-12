import { useTranslation } from "react-i18next";

// TODO: add sessions
interface useGetContentCounterStringProperties {
  numberOfCourses: number | undefined;
  numberOfEvents: number | undefined;
}

export const useGetContentCounterString = ({
  numberOfCourses,
  numberOfEvents,
}: useGetContentCounterStringProperties): string => {
  const { t } = useTranslation(["welevelUICommon"]);

  const contentCounter: string[] = [];

  if (numberOfCourses) {
    contentCounter.push(
      `${numberOfCourses} ${t("welevelUICommon:course", {
        count: numberOfCourses,
      })}`,
    );
  }

  if (numberOfEvents) {
    contentCounter.push(
      `${numberOfEvents} ${t("welevelUICommon:event", {
        count: numberOfEvents,
      })}`,
    );
  }

  const formatted = contentCounter.reduce(
    (accumulatedString, currenContent) =>
      `${accumulatedString}${
        accumulatedString !== "" ? " · " : ""
      }${currenContent}`,
    "",
  );

  return formatted;
};
