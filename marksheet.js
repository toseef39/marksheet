document.getElementById('marksForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let subject1 = parseInt(document.getElementById('subject1').value);
    let subject2 = parseInt(document.getElementById('subject2').value);
    let subject3 = parseInt(document.getElementById('subject3').value);
    let subject4 = parseInt(document.getElementById('subject4').value);
    let subject5 = parseInt(document.getElementById('subject5').value);
    let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    let percentage = (totalMarks / 500) * 100;

    let grade = '';
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else {
        grade = 'F';
    }
    document.getElementById('studentName').textContent = name;
    let marksTable = document.getElementById('marksTable');
    marksTable.innerHTML = `
        <tr>
            <th>Subject</th>
            <th>Marks Obtained</th>
        </tr>
        <tr><td>English</td><td>${subject1}</td></tr>
        <tr><td>Chemistry</td><td>${subject2}</td></tr>
        <tr><td>Math</td><td>${subject3}</td></tr>
        <tr><td>Physics</td><td>${subject4}</td></tr>
        <tr><td>Urdu</td><td>${subject5}</td></tr> `;

    document.getElementById('totalMarks').textContent = `Total Marks: ${totalMarks}/500`;
    document.getElementById('percentage').textContent = `Percentage: ${percentage.toFixed(2)}%`;
    document.getElementById('grade').textContent = `Grade: ${grade}`;

    document.getElementById('marksheet').style.display = 'block';
});
