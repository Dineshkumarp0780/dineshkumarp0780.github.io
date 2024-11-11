const form = document.getElementById('attendanceForm');
const attendanceList = document.getElementById('attendanceList');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const course = document.getElementById('course').value;
    const candidates = document.getElementById('candidates').value.split('\n');

    const attendanceData = {
        date,
        course,
        candidates
    };

    // Store the data in a JSON file
    const jsonData = JSON.stringify(attendanceData);
    localStorage.setItem('attendanceData', jsonData);

    // Display the attendance data on the page
    const attendanceEntry = document.createElement('div');
    attendanceEntry.textContent = `Date: ${date}, Course: ${course}, Candidates: ${candidates.join(', ')}`;
    attendanceList.appendChild(attendanceEntry);

    // Clear the form fields
    form.reset();
});

// Retrieve the stored attendance data from localStorage
const storedData = localStorage.getItem('attendanceData');
if (storedData) {
    const parsedData = JSON.parse(storedData);
    const attendanceEntry = document.createElement('div');
    attendanceEntry.textContent = `Date: ${parsedData.date}, Course: ${parsedData.course}, Candidates: ${parsedData.candidates.join(', ')}`;
    attendanceList.appendChild(attendanceEntry);
}