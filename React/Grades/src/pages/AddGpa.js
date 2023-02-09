import React, { useState, useEffect } from 'react'
import  {curriculum}  from './vms2019.json';
import {grades} from './gradeList'


const years = ['2023','2022', '2021', '2020', '2019', '2018', '2017'];
const semester = ['1','2','3']

function AddGpa(props) {
  const { onAddResult, allResults, calculateTotalGpa } = props;
  const [selectedSemester, setSelectedSemester] = useState('1');
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [courseGroupName, setCourseGroupName] = useState('');
  const [courseSubjects, setCourseSubject] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState(grades[0]?.value);
  const [selectedSubject, setSelectedSubject] = useState(null);

  useEffect(() => {
    if (curriculum?.subjects) {
      setCourseGroupName(curriculum.subjects[0]?.groupName);
      setCourseSubject(curriculum.subjects[0]?.subjects);
      setSelectedSubject(curriculum.subjects[0]?.subjects?.[0]);
    }
  }, []);

  const addGpaHandler = () => {

    const result = {
        year: selectedYear,
        semester: selectedSemester,
        score: selectedGrade,
        subject: selectedSubject,
        courseGroupName
    }
    onAddResult(result)
  };
  
  return (
    <div className='login'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-lg-12 '>
            <h1 className='display-9'>**** Courses Lists ****</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 m-auto'>
            <div>
              <select
                className='dropdown dropdown_70'
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years?.map((y, i) => (
                  <option key={i} value={y}>
                    {y}
                  </option>
                ))}
              </select>
              <select
                className='dropdown dropdown_30'
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
              >
                {semester.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                className='dropdown dropdown_100'
                onChange={(e) => {
                  const d = JSON.parse(e.target.value);
                  setCourseGroupName(d.groupName);
                  setCourseSubject(d.subjects);
                  setSelectedSubject(d.subjects?.[0]);
                }}
              >
                {curriculum?.subjects?.map((sub, i) => (
                  <option key={i} value={JSON.stringify(sub)}>
                    {sub?.groupName}
                  </option>
                ))}
              </select>
              <select
                className='dropdown dropdown_70'
                onChange={(e) => setSelectedSubject(JSON.parse(e.target.value))}
              >
                {courseSubjects?.map((s, i) => (
                  <option key={i} value={JSON.stringify(s)}>
                    {s?.name}
                  </option>
                ))}
              </select>
              <select
                className='dropdown dropdown_30'
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
              >
                {grades?.map((g, i) => (
                  <option key={i} value={g?.value}>
                    {g?.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              style={{ width: '100%' }}
              type='submit'
              className='btn btn-danger btn-block mt-4'
              onClick={addGpaHandler}
            >
              Add
            </button>
            <button
              style={{ width: '100%' }}
              type='submit'
              className='btn btn-primary mt-2 block'
              disabled={allResults.length === 0}
              onClick={calculateTotalGpa}
            >
              Calculate cumulative GPA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddGpa;