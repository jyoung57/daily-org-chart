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
        updatedScheduleList[editIndex].task = editValue;
        setScheduleList(updatedScheduleList);
        setEditIndex(null);
        setEditValue('');
      } else {
        setScheduleList([
          ...scheduleList,
          { task: schedule, completed: false, timestamp: null },
        ]);
      }
      setSchedule('');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(scheduleList[index].task);
  };

  const handleDelete = (index) => {
    const updatedScheduleList = [...scheduleList];
    updatedScheduleList.splice(index, 1);
    setScheduleList(updatedScheduleList);
  };

  const handleComplete = (index) => {
    const updatedScheduleList = [...scheduleList];
    updatedScheduleList[index].completed = true;
    updatedScheduleList[index].timestamp = new Date().toLocaleString();
    setScheduleList(updatedScheduleList);
  };

  return (
    <div>
      <h1>Schedule Organizer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editIndex !== null ? editValue : schedule}
          onChange={editIndex !== null ? handleEditChange : handleChange}
          placeholder="Enter Schedule"
        />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {scheduleList.map((schedule, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={schedule.completed}
              onChange={() => handleComplete(index)}
            />
            {editIndex === index ? (
              <input
                type="text"
                value={editValue}
                onChange={handleEditChange}
              />
            ) : (
              <span
                style={{
                  textDecoration: schedule.completed ? 'line-through' : 'none',
                }}
              >
                {schedule.task}
              </span>
            )}
            {schedule.completed && (
              <span> Completed at: {schedule.timestamp}</span>
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
