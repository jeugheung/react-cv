import React, {useState, useEffect} from "react";
import './Skills.scss'
import Title from "../Title/Title";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkills } from "../../services/skills";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import SkillForm from "../SkillsForm/SkillsForm";
import SkillsLine from "../SkillsLine/SkillsLine";

const Skills = () => {
  const dispatch = useDispatch()
  const skills = useSelector(state => state.skills.skills)

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!skills.length) {
      dispatch(fetchSkills())
    }
  }, [dispatch, skills.length])

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <section className="skills">
      <div className="skills__header">
        <Title title='Skills'></Title>
        <button className="skills__edit-btn" onClick={toggleForm}>
          <FontAwesomeIcon icon={faPencil}  color="white"/> 
          <span>Open edit</span>
        </button>
      </div>

      {showForm && (
        <SkillForm/>
      )}
     
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skills-list__item" key={index} style={{ width: `${skill.range}%` }}>
            <span className="skills-list__title">{skill.name}</span>
          </div>
        ))}
      </div>

      <SkillsLine/>
    </section>
  )
}

export default Skills;