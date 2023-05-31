import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import './SkillsForm.scss'
import { postSkills } from '../../services/skills';
import * as Yup from 'yup';

const SkillForm = () => {

  const dispatch = useDispatch()

  const validationSchema = Yup.object().shape({
    skillName: Yup.string().required('Skill name is a required field'),
    skillRange: Yup.number()
      .required('Skill range is a required field')
      .typeError('Skill range must be a number')
      .min(10, 'Skill range must be greater than or equal to 10')
      .max(100, 'Skill range must be less than or equal to 100'),
  });

  const handleSubmit = (values, {resetForm}) => {
    dispatch(postSkills(values, {resetForm}))
  };

  return (
    <div className="skills-form">
      <Formik
        initialValues={{ skillName: '', skillRange: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isValid, errors, touched, dirty, handleChange, handleBlur }) => (
          <Form>
            <div className="skills-form__container">
              <div className={`skills-form__field ${errors.skillName && touched.skillName ? 'invalid' : ''}`}>
                <label htmlFor="skillName" className='skills-form__label'>Skill Name:</label>
                <Field
                  type="text"
                  id="skillName"
                  name="skillName"
                  className="skills-form__skill-inp"
                  placeholder="Enter skill name"
                  onBlur={handleBlur}
                />
                
              </div>
              <ErrorMessage name="skillName" component="div" className="skills-form__error" />

              <div className={`skills-form__field ${errors.skillRange && touched.skillRange ? 'invalid' : ''}`}>
                <label htmlFor="skillRange" className='skills-form__label'>Skill Range:</label>
                <Field
                  type="text"
                  id="skillRange"
                  name="skillRange"
                  className="skills-form__skill-inp"
                  placeholder="Enter skill range"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                
              </div>
              <ErrorMessage name="skillRange" component="div" className="skills-form__error" />

              <button
                type="submit"
                className={`skills-form__submit-btn ${(!dirty || !isValid) && touched ? 'disabled' : ''}`}
                disabled={!dirty || !isValid}
              >
                Add skill
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SkillForm;
