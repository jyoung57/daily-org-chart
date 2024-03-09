import React, { useState } from 'react';

function ScheduleOrganizer() {
  const [schedule, setSchedule] = useState('');
  const [scheduleList, setScheduleList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleChange = (event) => {
    setSchedule(event.target.value);
  };

  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (schedule.trim() !== '') {
      if (editIndex !== null) {
        const updatedScheduleList = [...scheduleList];
        updatedScheduleList[editIndex] = schedule;
        setScheduleList(updatedScheduleList);
        setEditIndex(null);
      } else {
        setScheduleList([...scheduleList, schedule]);
      }
      setSchedule('');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(scheduleList[index]);
  };

  const handleDelete = (index) => {
    const updatedScheduleList = [...scheduleList];
    updatedScheduleList.splice(index, 1);
    setScheduleList(updatedScheduleList);
  };

  return (
    <div>
      <h1>Schedule Organizer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={schedule}
          onChange={handleChange}
          placeholder="Enter Schedule"
        />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {scheduleList.map((schedule, index) => (
          <li key={index}>
            {editIndex === index ? (
              <input
                type="text"
                value={editValue}
                onChange={handleEditChange}
              />
            ) : (
              schedule
            )}
            <button
              onClick={() =>
                editIndex === index ? handleSubmit({}) : handleEdit(index)
              }
            >
              {editIndex === index ? 'Save' : 'Edit'}
            </button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScheduleOrganizer;
