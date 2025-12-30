import React, { FC } from "react";
import PreviewSection from "./components/preview-section";
import GoalSection from "./components/goal-section.component";
import WriteSection from "./components/write-section.component";
import BykovSection from "./components/bykov-section.component";
import TeamSection from "./components/team-section.component";

const AboutPage: FC = () => {
  return (
    <div>
      <PreviewSection />
      <GoalSection />
      <WriteSection />
      <BykovSection />
      <TeamSection />
    </div>
  );
};

export default AboutPage;
