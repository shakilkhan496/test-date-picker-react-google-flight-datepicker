import logo from './logo.svg';
import './App.css';
import { RangeDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';
import { useState } from 'react';

function App() {
  const [selectedDate, setSelectedDate] = useState({
    startDate: null,
    endDate: null,
  });

  const onDateChange = ({ startDate, endDate }) => {
    setSelectedDate({
      startDate: startDate,
      endDate: endDate,
    });
  };

  return (
    <div className="App">
      <h1>
        Selected date: from{' '}
        {selectedDate.startDate
          ? selectedDate.startDate.toDateString()
          : 'N/A'}{' '}
        to{' '}
        {selectedDate.endDate ? selectedDate.endDate.toDateString() : 'N/A'}
      </h1>
      <RangeDatePicker
        startDate={selectedDate.startDate}
        endDate={selectedDate.endDate}
        onChange={(startDate, endDate) => onDateChange({ startDate, endDate })}
        minDate={new Date(1900, 0, 1)}
        maxDate={new Date(2100, 0, 1)}
        dateFormat="D"
        monthFormat="MMM YYYY"
        startDatePlaceholder="Start Date"
        endDatePlaceholder="End Date"
        disabled={false}
        className="my-own-class-name"
        startWeekDay="monday"
      />
    </div>
  );
}

export default App;
