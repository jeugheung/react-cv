import React from 'react';
import './SkillsLine.scss'

const SkillsLine = () => {
  return (
    <section>
      <div className="skills-line">
        <div className="skills-line__block1"></div>
        <div className="skills-line__block2"></div>
        <div className="skills-line__block3"></div>
      </div>

      <div className="skills-grade">
        <span>Beginner</span>
        <span>Proficient</span>
        <span>Expert</span>
        <span>Master</span>
      </div>
    </section>
  );
};

export default SkillsLine;
