// ============= DATA VARIABLES ============= 
let tasks = {};
let currentChat = null;

// ============= LOGOUT FUNCTION ============= 
function logoutUser() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('campus_sutra_current_user');
        window.location.href = 'auth.html';
    }
}

// ============= CHECK AUTHENTICATION ============= 
function checkAuthentication() {
    const user = localStorage.getItem('campus_sutra_current_user');
    if (!user) {
        window.location.href = 'auth.html';
        return null;
    }
    return JSON.parse(user);
}

// ============= UPDATE USER PROFILE INFO ============= 
function updateUserProfile() {
    const user = checkAuthentication();
    if (!user) return;

    // Update avatar
    const avatarElement = document.getElementById('userAvatar');
    const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase();
    avatarElement.textContent = initials;

    // Update user name
    document.getElementById('userName').textContent = user.name.split(' ')[0];
    
    // Update user role
    document.getElementById('userRole').textContent = user.role === 'teacher' ? '👨‍🏫 Teacher' : '👨‍🎓 Student';

    // Show/Hide teacher section if user is teacher
    const teacherSection = document.getElementById('teacherSection');
    if (user.role === 'teacher') {
        teacherSection.style.display = 'block';
    } else {
        teacherSection.style.display = 'none';
    }
}

// ============= LIVE CLOCK ============= 
function updateLiveClock() {
    const displayTime = new Date(APP_DATE);
    displayTime.setHours(9, 0, 0);
    
    const hours = String(displayTime.getHours()).padStart(2, '0');
    const minutes = String(displayTime.getMinutes()).padStart(2, '0');
    const seconds = String(displayTime.getSeconds()).padStart(2, '0');
    document.getElementById('liveClock').innerHTML = `
        <div class="clock-display">${hours}:${minutes}:${seconds}</div>
        <div class="clock-label">Current Time</div>
    `;
}

// ============= UPDATE DATE DISPLAY ============= 
function updateDateDisplay() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = APP_DATE.toLocaleDateString('en-US', options).toUpperCase();
    document.getElementById('dateTime').textContent = dateString;
}

// ============= TEACHER EDIT LECTURES ============= 
function loadEditLectures() {
    const user = checkAuthentication();
    if (!user || user.role !== 'teacher') {
        alert('You do not have permission to access this feature!');
        return;
    }

    const container = document.getElementById('editLecturesContainer');
    const teacherSubject = user.subject;
    const lectureTopics = lectureTopicsMapping[teacherSubject] || {};

    let html = `
        <div class="teacher-header">
            <h2>📖 ${teacherSubject} - Edit Your Lectures</h2>
            <p>Manage topics, syllabus, and lecture details for your subject</p>
        </div>

        <div class="edit-lectures-grid">
    `;

    Object.keys(lectureTopics).forEach(lectureTime => {
        const lecture = lectureTopics[lectureTime];
        const topicsString = lecture.topics.join('\n');
        
        html += `
            <div class="lecture-edit-card">
                <div class="lecture-header">
                    <h3>🕐 ${lectureTime}</h3>
                    <span class="module-badge">Module ${lecture.module}</span>
                </div>

                <div class="lecture-edit-form">
                    <div class="form-group">
                        <label>📚 Module Number</label>
                        <input type="number" class="module-input" value="${lecture.module}" min="1" max="10">
                    </div>

                    <div class="form-group">
                        <label>📝 Topics (one per line)</label>
                        <textarea class="topics-input" rows="6" placeholder="Enter each topic on a new line">${topicsString}</textarea>
                    </div>

                    <div class="form-group">
                        <label>📋 Lecture Notes URL (Optional)</label>
                        <input type="url" class="notes-url" placeholder="https://example.com/notes">
                    </div>

                    <div class="form-group">
                        <label>🎥 Video Link (Optional)</label>
                        <input type="url" class="video-url" placeholder="https://youtube.com/watch?v=...">
                    </div>

                    <div class="form-group">
                        <label>📚 Recommended Books (comma separated)</label>
                        <input type="text" class="books-input" placeholder="Book 1, Book 2, Book 3">
                    </div>

                    <button class="btn-save-lecture" onclick="saveLectureChanges('${lectureTime}', this)">💾 Save Changes</button>
                </div>
            </div>
        `;
    });

    html += `
        </div>

        <div class="syllabus-section">
            <h2>📚 Syllabus Management</h2>
            <div class="syllabus-editor">
                <div class="form-group">
                    <label>Subject Name</label>
                    <input type="text" id="syllabusSubjectName" value="${curriculumData[teacherSubject]?.name || teacherSubject}" placeholder="Enter subject name">
                </div>

                <div class="form-group">
                    <label>Course Objectives (one per line)</label>
                    <textarea id="syllabusObjectives" rows="5" placeholder="Enter course objectives, one per line">
${curriculumData[teacherSubject]?.modules[0]?.objectives.join('\n') || ''}
                    </textarea>
                </div>

                <div class="form-group">
                    <label>Total Duration (in weeks)</label>
                    <input type="number" id="syllabusDuration" value="${curriculumData[teacherSubject]?.totalModules * 2 || 16}" min="1">
                </div>

                <div class="form-group">
                    <label>Recommended Books (one per line)</label>
                    <textarea id="syllabusBooks" rows="5" placeholder="Enter recommended books, one per line">
${curriculumData[teacherSubject]?.books.join('\n') || ''}
                    </textarea>
                </div>

                <div class="form-group">
                    <label>Assessment Criteria</label>
                    <textarea id="assessmentCriteria" rows="5" placeholder="Describe assessment methods">UT1: 20%
UT2: 20%
Assignments: 20%
End Sem: 40%</textarea>
                </div>

                <button class="btn-save-syllabus" onclick="saveSyllabusChanges()">💾 Save Syllabus</button>
            </div>
        </div>

        <div class="lecture-statistics">
            <h2>📊 Lecture Statistics</h2>
            <div class="stats-grid">
                <div class="stat-box">
                    <div class="stat-icon">📚</div>
                    <div class="stat-info">
                        <p class="stat-label">Total Lectures</p>
                        <p class="stat-value">${Object.keys(lectureTopics).length}</p>
                    </div>
                </div>
                <div class="stat-box">
                    <div class="stat-icon">📖</div>
                    <div class="stat-info">
                        <p class="stat-label">Total Topics</p>
                        <p class="stat-value">${Object.values(lectureTopics).reduce((sum, l) => sum + l.topics.length, 0)}</p>
                    </div>
                </div>
                <div class="stat-box">
                    <div class="stat-icon">⏱️</div>
                    <div class="stat-info">
                        <p class="stat-label">Modules</p>
                        <p class="stat-value">${curriculumData[teacherSubject]?.totalModules || '6'}</p>
                    </div>
                </div>
                <div class="stat-box">
                    <div class="stat-icon">👥</div>
                    <div class="stat-info">
                        <p class="stat-label">Last Updated</p>
                        <p class="stat-value">Today</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

// ============= SAVE LECTURE CHANGES ============= 
function saveLectureChanges(lectureTime, button) {
    const user = checkAuthentication();
    if (!user || user.role !== 'teacher') return;

    const card = button.closest('.lecture-edit-card');
    const moduleNum = parseInt(card.querySelector('.module-input').value);
    const topicsText = card.querySelector('.topics-input').value;
    const notesUrl = card.querySelector('.notes-url').value;
    const videoUrl = card.querySelector('.video-url').value;
    const booksText = card.querySelector('.books-input').value;

    const topics = topicsText.split('\n').map(t => t.trim()).filter(t => t);
    const books = booksText.split(',').map(b => b.trim()).filter(b => b);

    // Update in localStorage
    const allLectures = JSON.parse(localStorage.getItem('campus_sutra_lectures') || '{}');
    
    if (!allLectures[user.subject]) {
        allLectures[user.subject] = {};
    }

    allLectures[user.subject][lectureTime] = {
        module: moduleNum,
        topics: topics,
        notesUrl: notesUrl || null,
        videoUrl: videoUrl || null,
        books: books,
        updatedAt: new Date().toISOString()
    };

    localStorage.setItem('campus_sutra_lectures', JSON.stringify(allLectures));

    // Show success message
    const originalText = button.textContent;
    button.textContent = '✅ Saved!';
    button.style.background = 'linear-gradient(135deg, #51cf66 0%, #40ac76 100%)';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 2000);

    alert('✅ Lecture updated successfully!');
}

// ============= SAVE SYLLABUS CHANGES ============= 
function saveSyllabusChanges() {
    const user = checkAuthentication();
    if (!user || user.role !== 'teacher') return;

    const subjectName = document.getElementById('syllabusSubjectName').value;
    const objectives = document.getElementById('syllabusObjectives').value.split('\n').map(o => o.trim()).filter(o => o);
    const duration = parseInt(document.getElementById('syllabusduration').value) || 16;
    const books = document.getElementById('syllabusBooks').value.split('\n').map(b => b.trim()).filter(b => b);
    const assessment = document.getElementById('assessmentCriteria').value;

    // Save to localStorage
    const syllabusData = JSON.parse(localStorage.getItem('campus_sutra_syllabus') || '{}');
    
    syllabusData[user.subject] = {
        subjectName: subjectName,
        objectives: objectives,
        duration: duration,
        books: books,
        assessment: assessment,
        updatedBy: user.name,
        updatedAt: new Date().toISOString()
    };

    localStorage.setItem('campus_sutra_syllabus', JSON.stringify(syllabusData));

    alert('✅ Syllabus saved successfully!');
}

// ============= MANAGE CODES ============= 
function loadManageCodes() {
    const user = checkAuthentication();
    if (!user || user.role !== 'teacher') {
        alert('You do not have permission to access this feature!');
        return;
    }

    const container = document.getElementById('manageCodesContainer');
    const codes = JSON.parse(localStorage.getItem('campus_sutra_codes')) || [];

    let html = `
        <div class="teacher-header">
            <h2>🔑 Registration Codes</h2>
            <p>View and manage teacher registration codes</p>
        </div>

        <div class="codes-list">
    `;

    if (codes.length === 0) {
        html += '<p style="color: #888; text-align: center; padding: 40px;">No codes generated yet</p>';
    } else {
        codes.forEach(code => {
            const isExpired = new Date(code.expiresAt) < new Date();
            const daysLeft = Math.ceil((new Date(code.expiresAt) - new Date()) / (1000 * 60 * 60 * 24));
            
            html += `
                <div class="code-card ${code.used ? 'used' : ''} ${isExpired ? 'expired' : ''}">
                    <div class="code-info">
                        <div class="code-main">
                            <h4>Code: <span class="code-value">${code.code}</span></h4>
                            <p class="code-details">
                                <span>👨‍🏫 ${code.teacherName}</span>
                                <span>📚 ${code.subject}</span>
                            </p>
                        </div>
                        <div class="code-status">
                            <span class="status-badge ${code.used ? 'used' : isExpired ? 'expired' : 'active'}">
                                ${code.used ? '✅ Used' : isExpired ? '❌ Expired' : '⏳ Active'}
                            </span>
                            ${!code.used && !isExpired ? `<p class="expires-in">Expires in ${daysLeft} days</p>` : ''}
                        </div>
                    </div>
                    <div class="code-dates">
                        <small>Created: ${new Date(code.createdAt).toLocaleDateString()}</small>
                        <small>Expires: ${new Date(code.expiresAt).toLocaleDateString()}</small>
                    </div>
                    ${!code.used && !isExpired ? `<button class="btn-copy-code" onclick="copyCodeToClipboard('${code.code}')">📋 Copy Code</button>` : ''}
                </div>
            `;
        });
    }

    html += `
        </div>

        <div class="generate-code-section">
            <h2>➕ Generate New Code</h2>
            <p>Contact your institution admin to generate new teacher registration codes</p>
            <button class="btn-submit" onclick="alert('This feature is only available to administrators. Contact your college admin.')">Request Code</button>
        </div>
    `;

    container.innerHTML = html;
}

// ============= COPY CODE TO CLIPBOARD ============= 
function copyCodeToClipboard(code) {
    navigator.clipboard.writeText(code).then(() => {
        alert('✅ Code copied to clipboard: ' + code);
    });
}

// ============= CURRICULUM FUNCTIONS ============= 
function loadCurriculum() {
    const subjectCode = document.getElementById('subjectSelect').value;
    const container = document.getElementById('curriculumContainer');
    
    if (!subjectCode) {
        container.innerHTML = '<p style="color: #888; text-align: center; padding: 40px;">Please select a subject</p>';
        return;
    }

    const curriculum = curriculumData[subjectCode];
    if (!curriculum) {
        container.innerHTML = '<p style="color: #888;">Subject not found</p>';
        return;
    }

    let html = `
        <div class="curriculum-header">
            <h2>${curriculum.name} (${curriculum.code})</h2>
            <p class="curriculum-info">
                <span>📊 Total Modules: ${curriculum.totalModules}</span>
                <span>✅ UT1 Modules: ${curriculum.ut1Modules}</span>
                <span>⏱️ Total Duration: ${curriculum.totalModules * 2} weeks</span>
            </p>
        </div>

        <div class="ut1-banner">
            <h3>📝 Unit Test 1 (UT1) Coverage</h3>
            <div class="ut1-info">
                <div class="ut1-stat">
                    <strong>Modules Covered:</strong>
                    <p>${curriculum.ut1Coverage.modules.join(', ')}</p>
                </div>
                <div class="ut1-stat">
                    <strong>Coverage:</strong>
                    <p>${curriculum.ut1Coverage.coverage}</p>
                </div>
                <div class="ut1-stat">
                    <strong>Topics:</strong>
                    <p>${curriculum.ut1Coverage.topics} topics</p>
                </div>
                <div class="ut1-stat">
                    <strong>Hours:</strong>
                    <p>${curriculum.ut1Coverage.hours} hours</p>
                </div>
            </div>
        </div>

        <div class="modules-container">
    `;

    curriculum.modules.forEach((module, index) => {
        const isUT1 = curriculum.ut1Coverage.modules.includes(module.moduleNo);
        
        html += `
            <div class="module-card ${isUT1 ? 'ut1-module' : ''}">
                <div class="module-header ${isUT1 ? 'ut1-header' : ''}">
                    <h3>Module ${module.moduleNo}: ${module.name}</h3>
                    ${isUT1 ? '<span class="ut1-badge">UT1</span>' : ''}
                </div>

                <div class="module-details">
                    <p class="module-duration">⏱️ Duration: ${module.duration}</p>
                    
                    <div class="module-section">
                        <h4>📋 Learning Objectives:</h4>
                        <ul class="objectives-list">
                            ${module.objectives.map(obj => `<li>✓ ${obj}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="module-section">
                        <h4>📚 Topics to be Covered (${module.topics.length}):</h4>
                        <div class="topics-list">
                            ${module.topics.map(topic => `
                                <div class="topic-item">
                                    <h5>
                                        <span class="topic-number">Topic ${topic.topicNo}:</span> 
                                        ${topic.name}
                                        <span class="hours-badge">${topic.hours}h</span>
                                    </h5>
                                    <div class="subtopics">
                                        <strong>Subtopics:</strong>
                                        <ul>
                                            ${topic.subtopics.map(sub => `<li>• ${sub}</li>`).join('')}
                                        </ul>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="module-section">
                        <h4>🎯 Learning Outcomes:</h4>
                        <ul class="outcomes-list">
                            ${module.objectives.map(out => `<li>✓ ${out}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    });

    html += `
        </div>

        <div class="recommended-books">
            <h3>📖 Recommended Books:</h3>
            <div class="books-list">
                ${curriculum.books.map(book => `
                    <div class="book-item">
                        <span class="book-icon">📕</span>
                        <p>${book}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    container.innerHTML = html;
}

// ============= NEXT CLASS CARD ============= 
function loadNextClassCard() {
    const nextClass = getNextClass();
    const container = document.getElementById('nextClassCard');

    if (nextClass) {
        const timeRemaining = calculateTimeRemaining(nextClass.time);
        container.innerHTML = `
            <div class="next-class-content">
                <h2>⏰ Next Class</h2>
                <div class="next-class-details">
                    <h3>${nextClass.subject} - ${nextClass.subjectName}</h3>
                    <div class="next-class-info">
                        <p><strong>Time:</strong> ${nextClass.time}</p>
                        <p><strong>Professor:</strong> ${nextClass.professorName} (${nextClass.professor})</p>
                        <p><strong>Room:</strong> ${nextClass.room} • <strong>Building:</strong> ${nextClass.building}</p>
                        <p><strong>Type:</strong> ${nextClass.type}</p>
                    </div>
                    <div class="time-remaining">
                        <p class="remaining-text">⏳ Starts in: <strong>${timeRemaining}</strong></p>
                    </div>
                    <button class="btn-prepare" onclick="alert('Opened class materials for ' + '${nextClass.subject}')">📚 Prepare for Class</button>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <h2>📚 First Day! All Classes Ahead</h2>
            <p style="color: #888; text-align: center; padding: 20px;">Great! You're on your first day of Semester 6. Check your schedule below for today's classes! 🎉</p>
        `;
    }
}

function calculateTimeRemaining(timeSlot) {
    const [startTime] = timeSlot.split('-');
    const [hour, minute] = startTime.split(':').map(Number);
    const now = new Date(APP_DATE);
    const classTime = new Date(APP_DATE.getFullYear(), APP_DATE.getMonth(), APP_DATE.getDate(), hour, minute);
    
    let diff = classTime - now;
    if (diff < 0) diff = 0;
    
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    
    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    } else {
        return `${minutes}m`;
    }
}

// ============= STUDY STREAK ============= 
function loadStudyStreak() {
    const container = document.getElementById('streakInfo');
    const data = studyStreakData;
    
    container.innerHTML = `
        <div class="streak-display">
            <div class="streak-number">${data.currentStreak}</div>
            <div class="streak-text">Current Streak</div>
        </div>
        <div class="streak-details">
            <div class="detail-item">
                <span>🔥 Best Streak:</span>
                <strong>${data.bestStreak} day</strong>
            </div>
            <div class="detail-item">
                <span>📚 Total Days Studied:</span>
                <strong>${data.totalDaysStudied}</strong>
            </div>
            <div class="detail-item">
                <span>⭐ Level:</span>
                <strong>${data.level}</strong>
            </div>
        </div>
        <div class="streak-progress">
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${(data.currentStreak / data.bestStreak) * 100}%"></div>
            </div>
            <small>${data.currentStreak} / ${data.bestStreak} days</small>
        </div>
    `;
}

// ============= QUICK TODOS ============= 
function loadQuickTodos() {
    const container = document.getElementById('quickTodos');
    container.innerHTML = '';

    quickTodos.forEach((todo, index) => {
        const todoHTML = `
            <div class="quick-todo-item ${todo.completed ? 'completed' : ''} priority-${todo.priority}">
                <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleQuickTodo(${index})">
                <div class="todo-content">
                    <p>${todo.task}</p>
                    <small>📚 ${todo.subject} • 📅 ${new Date(todo.dueDate).toLocaleDateString()}</small>
                </div>
                <button class="todo-delete" onclick="deleteQuickTodo(${index})">✕</button>
            </div>
        `;
        container.innerHTML += todoHTML;
    });
}

function toggleQuickTodo(index) {
    quickTodos[index].completed = !quickTodos[index].completed;
    loadQuickTodos();
}

function deleteQuickTodo(index) {
    quickTodos.splice(index, 1);
    loadQuickTodos();
}

function addQuickTodo() {
    const input = document.getElementById('quickTodoInput');
    const task = input.value.trim();
    if (!task) return;

    quickTodos.push({
        id: quickTodos.length + 1,
        task: task,
        subject: 'General',
        priority: 'medium',
        dueDate: APP_DATE.toISOString().split('T')[0],
        completed: false
    });

    input.value = '';
    loadQuickTodos();
}

// ============= MINI CALENDAR ============= 
function loadMiniCalendar() {
    const container = document.getElementById('miniCalendar');
    const events = getMiniCalendar();
    
    let html = '<div class="mini-calendar-events">';
    events.forEach(event => {
        html += `
            <div class="mini-event ${event.type}">
                <span class="event-date">Jan ${event.date}</span>
                <span class="event-name">${event.event}</span>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

// ============= PERFORMANCE CHART ============= 
function loadPerformanceChart() {
    const container = document.getElementById('performanceChart');
    const data = performanceData.semester5;
    
    let html = '<div class="chart-container">';
    data.forEach(item => {
        const percentage = (item.marks / item.maxMarks) * 100;
        const color = percentage >= 90 ? '#51cf66' : percentage >= 80 ? '#667eea' : '#ffa502';
        
        html += `
            <div class="chart-item">
                <div class="chart-label">${item.subject}</div>
                <div class="chart-bar-container">
                    <div class="chart-bar" style="width: ${percentage}%; background: ${color};"></div>
                </div>
                <div class="chart-value">${item.marks}/${item.maxMarks}</div>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

// ============= PROFESSOR HIGHLIGHT ============= 
function loadProfessorHighlight() {
    const container = document.getElementById('professorHighlight');
    const prof = professorHighlights.today;
    
    container.innerHTML = `
        <h2>👨‍🏫 Professor Highlight</h2>
        <div class="prof-highlight-content">
            <div class="prof-avatar">${prof.image}</div>
            <div class="prof-info">
                <h3>${prof.name}</h3>
                <p class="prof-subject">📚 ${prof.subject}</p>
                <p class="prof-specialization">🎯 Specialization: ${prof.specialization}</p>
                <p class="prof-experience">📖 Experience: ${prof.experience}</p>
                <div class="prof-achievements">
                    <strong>Achievements:</strong>
                    <ul>
                        ${prof.achievements.map(a => `<li>✨ ${a}</li>`).join('')}
                    </ul>
                </div>
                <div class="prof-contact">
                    <p>📧 ${prof.email}</p>
                    <p>📍 Office: ${prof.office}</p>
                    <p>⏰ Office Hours: ${prof.officeHours}</p>
                </div>
                <div class="prof-quote">
                    <em>"${prof.quote}"</em>
                </div>
                <button class="btn-contact" onclick="alert('Email sent to ' + '${prof.email}')">📧 Send Email</button>
            </div>
        </div>
    `;
}

// ============= ATTENDANCE OVERVIEW ============= 
function loadAttendanceOverview() {
    const container = document.getElementById('attendanceOverview');
    const data = attendanceData;
    
    const presentPercent = (data.present / data.total) * 100;
    const absentPercent = (data.absent / data.total) * 100;
    const leavePercent = (data.leave / data.total) * 100;
    
    container.innerHTML = `
        <div class="attendance-stats">
            <div class="attendance-item present">
                <div class="attendance-label">Present</div>
                <div class="attendance-number">${data.present}</div>
                <div class="attendance-percent">${presentPercent.toFixed(1)}%</div>
            </div>
            <div class="attendance-item absent">
                <div class="attendance-label">Absent</div>
                <div class="attendance-number">${data.absent}</div>
                <div class="attendance-percent">${absentPercent.toFixed(1)}%</div>
            </div>
            <div class="attendance-item leave">
                <div class="attendance-label">Leave</div>
                <div class="attendance-number">${data.leave}</div>
                <div class="attendance-percent">${leavePercent.toFixed(1)}%</div>
            </div>
        </div>
        <div class="attendance-progress">
            <div class="progress-row">
                <div class="progress-bar-segment present" style="width: ${presentPercent}%"></div>
                <div class="progress-bar-segment absent" style="width: ${absentPercent}%"></div>
                <div class="progress-bar-segment leave" style="width: ${leavePercent}%"></div>
            </div>
            <p class="total-text">Overall Attendance: <strong style="color: #667eea;">${data.percentage()}%</strong></p>
        </div>
    `;
}

// ============= TODAY'S TIMETABLE WITH TOPICS ============= 
function loadTodaySchedule() {
    const container = document.getElementById('todayScheduleDetailed');
    container.innerHTML = '';

    const todaySchedule = getTodaySchedule();
    const dayIndex = APP_DATE.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[dayIndex];
    
    if (todaySchedule.length === 0) {
        container.innerHTML = '<p style="color: #888; text-align: center; padding: 40px;">No classes scheduled for today</p>';
        return;
    }
    
    todaySchedule.forEach((item) => {
        if (item.subject === 'Break' || item.subject === 'Lunch') {
            container.innerHTML += `
                <div class="today-schedule-break">
                    <div class="break-time">${item.time}</div>
                    <p class="break-label">${item.subject}</p>
                </div>
            `;
        } else if (item.subject === 'Project') {
            container.innerHTML += `
                <div class="today-schedule-card project-card">
                    <div class="card-time">${item.time}</div>
                    <div class="card-content">
                        <h3>🎓 ${item.subjectName}</h3>
                        <div class="card-meta">
                            <div class="meta-item">
                                <span class="meta-icon">👥</span>
                                <span>${item.professorName}</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-icon">📍</span>
                                <span>${item.room}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            const lectureTopics = getLectureTopics(item.subject, dayName, item.time);
            
            let topicsHTML = '';
            if (lectureTopics) {
                topicsHTML = `
                    <div class="lecture-topics">
                        <h5>📚 Topics to be Covered:</h5>
                        <div class="topics-covered">
                            ${lectureTopics.topics.map(topic => `
                                <div class="topic-tag">
                                    <span class="topic-dot">•</span>
                                    <span class="topic-text">${topic}</span>
                                </div>
                            `).join('')}
                        </div>
                        <div class="module-indicator">
                            <span class="module-badge">Module ${lectureTopics.module}</span>
                        </div>
                    </div>
                `;
            }
            
            container.innerHTML += `
                <div class="today-schedule-card">
                    <div class="card-time">${item.time}</div>
                    <div class="card-content">
                        <h3>${item.subject} - ${item.subjectName}</h3>
                        <div class="card-meta">
                            <div class="meta-item">
                                <span class="meta-icon">👨‍🏫</span>
                                <span>${item.professorName} (${item.professor})</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-icon">📍</span>
                                <span>Room ${item.room}</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-icon">🏢</span>
                                <span>${item.building}</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-icon">🎓</span>
                                <span>${item.type}</span>
                            </div>
                        </div>
                        ${topicsHTML}
                        <div class="attendance-decision">
                            <button class="btn-attend" onclick="markAttendance('${item.subject}', '${item.time}', true)">✅ Planning to Attend</button>
                            <button class="btn-skip" onclick="markAttendance('${item.subject}', '${item.time}', false)">❌ Skip This</button>
                        </div>
                    </div>
                </div>
            `;
        }
    });
}

// ============= HELPER FUNCTION TO MARK ATTENDANCE ============= 
function markAttendance(subject, time, attending) {
    if (attending) {
        alert(`✅ You've marked that you'll attend ${subject} at ${time}`);
    } else {
        alert(`❌ You've marked that you'll skip ${subject} at ${time}`);
    }
}

// ============= DASHBOARD TODAY'S SCHEDULE WITH TOPICS ============= 
function loadDashboard() {
    loadNextClassCard();
    loadStudyStreak();
    loadQuickTodos();
    loadMiniCalendar();
    loadPerformanceChart();
    loadProfessorHighlight();
    loadAttendanceOverview();

    const todayClasses = getTodaySchedule().filter(item => 
        item.subject !== 'Break' && item.subject !== 'Lunch' && item.subject !== 'Project'
    ).slice(0, 3);

    const dayIndex = APP_DATE.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[dayIndex];

    const scheduleHTML = todayClasses.map(item => {
        const lectureTopics = getLectureTopics(item.subject, dayName, item.time);
        
        let topicsPreview = '';
        if (lectureTopics) {
            const topicsText = lectureTopics.topics.slice(0, 2).join(', ');
            topicsPreview = `<p style="font-size: 12px; color: #667eea; margin-top: 8px;">📚 Topics: ${topicsText}${lectureTopics.topics.length > 2 ? '...' : ''}</p>`;
        }
        
        return `
            <div class="today-class-card">
                <div class="time">${item.time}</div>
                <div class="details">
                    <h4>${item.subject} - ${item.subjectName}</h4>
                    <p>👨‍🏫 ${item.professorName} (${item.professor})</p>
                    <p>📍 Room ${item.room} • 🏢 ${item.building}</p>
                    ${topicsPreview}
                    <p class="class-type">${item.type}</p>
                </div>
            </div>
        `;
    }).join('');
    
    document.getElementById('todaySchedule').innerHTML = scheduleHTML || '<p style="color: #888;">No classes today</p>';

    const noticesHTML = noticesData.slice(0, 3).map(notice => `
        <div class="notice-item">
            <span class="notice-icon">${notice.icon}</span>
            <div>
                <h4>${notice.title}</h4>
                <p>${notice.description}</p>
                <small>${new Date(notice.date).toLocaleDateString()}</small>
            </div>
        </div>
    `).join('');
    document.getElementById('recentNotices').innerHTML = noticesHTML;

    const assignmentsHTML = assignmentsData.slice(0, 2).map(assign => `
        <div class="assignment-item">
            <h4>${assign.title}</h4>
            <p>📅 Due: ${new Date(assign.dueDate).toLocaleDateString()}</p>
            <p class="professor">Prof: ${assign.professor}</p>
        </div>
    `).join('');
    document.getElementById('upcomingAssignments').innerHTML = assignmentsHTML;

    document.getElementById('classesToday').textContent = todayClasses.length;
    document.getElementById('pendingAssignments').textContent = assignmentsData.filter(a => a.status === 'pending').length;
    document.getElementById('notifications').textContent = alertsData.length;
    document.getElementById('attendancePercent').textContent = attendanceData.percentage() + '%';
    document.getElementById('studyStreak').textContent = studyStreakData.currentStreak + ' day';
}

// ============= FULL TIMETABLE ============= 
function loadTimetable() {
    const tbody = document.getElementById('timetable-body');
    tbody.innerHTML = '';
    
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const timeSlots = yourTimetable.Monday.map(item => item.time);

    timeSlots.forEach(time => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td><strong>${time}</strong></td>`;
        
        days.forEach(day => {
            const classItem = yourTimetable[day].find(item => item.time === time);
            if (classItem && classItem.subject !== 'Break' && classItem.subject !== 'Lunch') {
                tr.innerHTML += `
                    <td>
                        <div class="class-cell ${classItem.type.toLowerCase()}">
                            <strong>${classItem.subject}</strong><br>
                            <small>${classItem.professorName}</small><br>
                            <tiny>Room ${classItem.room}</tiny>
                        </div>
                    </td>
                `;
            } else {
                tr.innerHTML += `<td><div class="class-cell empty">-</div></td>`;
            }
        });
        tbody.appendChild(tr);
    });
}

// ============= SUBJECTS ============= 
function loadSubjects() {
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';

    const uniqueSubjects = [...new Set(yourTimetable.Monday.map(item => item.subject).filter(s => s !== 'Break' && s !== 'Lunch' && s !== 'Project'))];
    
    uniqueSubjects.forEach(subjectCode => {
        const subject = yourTimetable.Monday.find(item => item.subject === subjectCode);
        if (!subject) return;

        const card = document.createElement('div');
        card.className = 'subject-card';
        card.innerHTML = `
            <h3>📚 ${subjectCode}</h3>
            <p><strong>Name:</strong> ${subject.subjectName}</p>
            <p><strong>👨‍🏫 Instructor:</strong> ${subject.professorName}</p>
            <p><strong>📍 Room:</strong> ${subject.room}</p>
            <div class="subject-files">
                <h4>📁 Course Materials:</h4>
                <p style="color: #888; font-size: 12px;">Check Study Materials section for course documents</p>
            </div>
            <button onclick="alert('Submit Assignment for ' + '${subject.subjectName}')">📤 Submit Assignment</button>
        `;
        container.appendChild(card);
    });
}

// ============= STUDY MATERIALS ============= 
function loadStudyMaterials() {
    const container = document.getElementById('study-materials-container');
    container.innerHTML = '';

    studyMaterialsData.forEach(semester => {
        const sectionHTML = `
            <div class="study-materials-section">
                <h3 class="section-title">${semester.subject} - ${semester.subjectName}</h3>
                <p class="semester-label">${semester.semester}</p>
                <div class="materials-list">
                    ${semester.materials.map(material => `
                        <div class="material-card">
                            <div class="material-icon">
                                ${material.type === 'PDF' ? '📄' : '🎥'}
                            </div>
                            <div class="material-info">
                                <h4>${material.title}</h4>
                                <div class="material-meta">
                                    <span class="badge">${material.type}</span>
                                    <span class="size">${material.size}</span>
                                </div>
                                <p class="uploaded-by">📤 ${material.uploadedBy} • ${new Date(material.date).toLocaleDateString()}</p>
                            </div>
                            <button class="download-btn">⬇️ Download</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.innerHTML += sectionHTML;
    });
}

// ============= SE/TE TIMETABLES ============= 
function loadSETETimetable() {
    const year = document.getElementById('yearSelect')?.value || 'te';
    const section = document.getElementById('sectionSelect')?.value || 'A';
    
    let timetableData, sectionInfo;
    
    if (year === 'te') {
        timetableData = teTimetables[`TE-${section}`];
        sectionInfo = teTimetables[`TE-${section}`];
    } else {
        const division = section === 'A' ? (seTimetables['SE-A1'] ? 'A1' : section) : section;
        timetableData = seTimetables[`SE-${division}`];
        sectionInfo = seTimetables[`SE-${division}`];
    }
    
    if (!timetableData) return;

    const classInfoCard = document.getElementById('classInfoCard');
    classInfoCard.innerHTML = `
        <div class="info-item">
            <div class="info-icon">📚</div>
            <div class="info-content">
                <h4>Class</h4>
                <p>${sectionInfo.class} - Section ${sectionInfo.section}</p>
            </div>
        </div>
        <div class="info-item">
            <div class="info-icon">📖</div>
            <div class="info-content">
                <h4>Semester</h4>
                <p>Semester ${sectionInfo.semester}</p>
            </div>
        </div>
        <div class="info-item">
            <div class="info-icon">👥</div>
            <div class="info-content">
                <h4>Students</h4>
                <p>${sectionInfo.totalStudents} students</p>
            </div>
        </div>
        <div class="info-item">
            <div class="info-icon">👨‍🏫</div>
            <div class="info-content">
                <h4>Class Advisor</h4>
                <p>${sectionInfo.classAdvisor}</p>
            </div>
        </div>
        <div class="info-item">
            <div class="info-icon">📍</div>
            <div class="info-content">
                <h4>Room</h4>
                <p>${sectionInfo.room}</p>
            </div>
        </div>
        <div class="info-item">
            <div class="info-icon">📅</div>
            <div class="info-content">
                <h4>Effective From</h4>
                <p>${sectionInfo.effectiveFrom}</p>
            </div>
        </div>
    `;
    
    const tbody = document.getElementById('se-te-timetable-body');
    tbody.innerHTML = '';
    
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const timeSlots = timetableData.Monday.map(item => item.time);

    timeSlots.forEach(time => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td><strong>${time}</strong></td>`;
        
        days.forEach(day => {
            const classItem = timetableData[day].find(item => item.time === time);
            if (classItem && classItem.subject !== 'Break' && classItem.subject !== 'Lunch') {
                tr.innerHTML += `
                    <td>
                        <div class="class-cell ${classItem.type.toLowerCase()}">
                            <strong>${classItem.subject}</strong><br>
                            <small>${classItem.professor}</small><br>
                            <tiny>${classItem.room}</tiny>
                        </div>
                    </td>
                `;
            } else {
                tr.innerHTML += `<td><div class="class-cell empty">-</div></td>`;
            }
        });
        tbody.appendChild(tr);
    });
}

// ============= CALENDAR ============= 
function loadCalendar() {
    const cal = document.getElementById('calendar');
    const month = APP_DATE.getMonth();
    const year = APP_DATE.getFullYear();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    let html = `<h3>📅 ${APP_DATE.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
    <div class="calendar-grid">`;

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayNames.forEach(day => {
        html += `<div style="font-weight: bold; text-align: center; color: #667eea; font-size: 12px; padding: 5px;">${day}</div>`;
    });

    for (let i = 0; i < startingDayOfWeek; i++) {
        html += '<div class="calendar-day" style="background: transparent; border: none; cursor: default;"></div>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = day === APP_DATE.getDate();
        html += `<div class="calendar-day ${isToday ? 'today' : ''}" onclick="selectDay(${day})">${day}</div>`;
    }

    html += '</div>';
    cal.innerHTML = html;
    updateTaskList();
}

function selectDay(day) {
    updateTaskList(day);
}

function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    if (!text) return;

    const day = APP_DATE.getDate();
    if (!tasks[day]) tasks[day] = [];
    tasks[day].push({ text, done: false });
    input.value = '';
    updateTaskList();
    loadCalendar();
}

function updateTaskList(day = APP_DATE.getDate()) {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    const dayTasks = tasks[day] || [];
    
    if (dayTasks.length === 0) {
        list.innerHTML = '<li style="color: #666; text-align: center; padding: 20px;">No tasks</li>';
        return;
    }

    dayTasks.forEach((task, i) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.done ? 'completed' : ''}`;
        li.innerHTML = `
            <span onclick="toggleTask(${day}, ${i})" style="flex: 1; cursor: pointer;">
                <input type="checkbox" ${task.done ? 'checked' : ''} style="margin-right: 8px;">
                ${task.text}
            </span>
            <button class="delete-task" onclick="deleteTask(${day}, ${i})">Delete</button>
        `;
        list.appendChild(li);
    });
}

function toggleTask(day, i) {
    if (tasks[day]) tasks[day][i].done = !tasks[day][i].done;
    updateTaskList(day);
}

function deleteTask(day, i) {
    if (tasks[day]) {
        tasks[day].splice(i, 1);
        updateTaskList(day);
        loadCalendar();
    }
}

// ============= ALERTS ============= 
function loadAlerts() {
    const container = document.getElementById('alerts-container');
    container.innerHTML = '';

    alertsData.forEach(alert => {
        const card = document.createElement('div');
        card.className = `alert-card ${alert.urgent ? 'urgent' : ''}`;
        card.innerHTML = `
            <h4>${alert.urgent ? '🔴' : '🔵'} ${alert.title}</h4>
            <p>${alert.description}</p>
            <p class="alert-meta">📚 ${alert.subject} | 👨‍🏫 ${alert.professor}</p>
        `;
        container.appendChild(card);
    });
}

// ============= NOTICES ============= 
function loadNotices() {
    const container = document.getElementById('notice-container');
    container.innerHTML = '';

    noticesData.forEach(notice => {
        const card = document.createElement('div');
        card.className = 'notice-card';
        card.innerHTML = `
            <h3>${notice.icon} ${notice.title}</h3>
            <p>${notice.description}</p>
            <small>📅 ${new Date(notice.date).toLocaleDateString()}</small>
        `;
        container.appendChild(card);
    });
}

// ============= ASSIGNMENTS ============= 
function loadAssignments() {
    const container = document.getElementById('assignments-container');
    container.innerHTML = '';

    assignmentsData.forEach(assign => {
        const card = document.createElement('div');
        card.className = 'assignment-card';
        card.innerHTML = `
            <h3>${assign.title}</h3>
            <p><strong>Subject:</strong> ${assign.subject} (${assign.subjectCode})</p>
            <p><strong>Professor:</strong> ${assign.professor}</p>
            <p><strong>Due:</strong> ${new Date(assign.dueDate).toLocaleDateString()}</p>
            <p class="description">${assign.description}</p>
            <span class="assignment-status ${assign.status}">${assign.status.toUpperCase()}</span>
        `;
        container.appendChild(card);
    });
}

// ============= CHAT ============= 
function loadChats() {
    const list = document.getElementById('chat-list');
    list.innerHTML = '';

    students.forEach((s, i) => {
        const user = document.createElement('div');
        user.className = 'chat-user' + (i === 0 ? ' active' : '');
        user.textContent = s.name;
        user.onclick = () => selectChat(s, user);
        list.appendChild(user);
    });

    selectChat(students[0]);
}

function selectChat(student, userDiv) {
    currentChat = student;
    document.querySelectorAll('.chat-user').forEach(u => u.classList.remove('active'));
    if (userDiv) userDiv.classList.add('active');
    document.getElementById('messages-container').innerHTML = '';
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const text = input.value.trim();
    if (!text || !currentChat) return;

    const container = document.getElementById('messages-container');
    const sent = document.createElement('div');
    sent.className = 'message sent';
    sent.innerHTML = `<div class="message-content">${text}</div>`;
    container.appendChild(sent);

    setTimeout(() => {
        const rec = document.createElement('div');
        rec.className = 'message received';
        rec.innerHTML = `<div class="message-content">Got it! 😊</div>`;
        container.appendChild(rec);
        container.scrollTop = container.scrollHeight;
    }, 500);

    input.value = '';
    container.scrollTop = container.scrollHeight;
}

// ============= NAVIGATION ============= 
function switchView(viewName) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    const viewElement = document.getElementById(`${viewName}-view`);
    if (viewElement) {
        viewElement.classList.add('active');

        // Load content based on view
        if (viewName === 'edit-lectures') {
            loadEditLectures();
        } else if (viewName === 'manage-codes') {
            loadManageCodes();
        }
    }
}

function setupEventListeners() {
    document.querySelectorAll('[data-view]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const viewName = link.dataset.view;
            switchView(viewName);
            
            document.querySelectorAll('[data-view]').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    document.getElementById('addTaskBtn')?.addEventListener('click', addTask);
    document.getElementById('taskInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    document.getElementById('sendBtn')?.addEventListener('click', sendMessage);
    document.getElementById('messageInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

// ============= INITIALIZATION ============= 
document.addEventListener('DOMContentLoaded', () => {
    checkAuthentication();
    updateUserProfile();
    updateDateDisplay();
    
    loadDashboard();
    loadTodaySchedule();
    loadTimetable();
    loadSubjects();
    loadStudyMaterials();
    loadCalendar();
    loadAlerts();
    loadNotices();
    loadAssignments();
    loadChats();
    setupEventListeners();

    updateLiveClock();
    setInterval(updateLiveClock, 1000);
});