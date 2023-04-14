import React, { useState } from 'react';
import Title from './Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './TechnicalSkills';

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="10+ YEARS OF EXPERIENCE" des="Christopher Zavala Resume" />
      </div>
      <div>
        <ul className="w-full flex justify-center">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-[#58C0A9] rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-[#58C0A9] rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-[#58C0A9] rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Technical Skills
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
    </section>
  );
};

export default Resume;
