// ============= STORAGE KEYS ============= 
const STORAGE_KEYS = {
    USERS: 'campus_sutra_users',
    TEACHERS: 'campus_sutra_teachers',
    CODES: 'campus_sutra_codes',
    CURRENT_USER: 'campus_sutra_current_user',
    LECTURES: 'campus_sutra_lectures'
};

// ============= INITIALIZE DATA ============= 
function initializeAuthData() {
    // Create demo user
    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
        const demoUsers = [
            {
                id: 'STU001',
                name: 'Varad Aniruddha Lodhi',
                email: 'varad@campussutra.com',
                phone: '9876543210',
                password: 'password123',
                rollNumber: 'CS/TE/A1-045',
                role: 'student',
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(demoUsers));
    }

    // Create demo teacher
    if (!localStorage.getItem(STORAGE_KEYS.TEACHERS)) {
        const demoTeachers = [
            {
                id: 'TCH001',
                name: 'Prof. Shinde Vishal Rajaram',
                email: 'svr@sjjcet.edu.in',
                phone: '9876543211',
                password: 'teacher123',
                subject: 'SPCC',
                role: 'teacher',
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem(STORAGE_KEYS.TEACHERS, JSON.stringify(demoTeachers));
    }

    // Create demo codes
    if (!localStorage.getItem(STORAGE_KEYS.CODES)) {
        const demoCodes = [
            {
                code: 'SJJCET2024',
                teacherName: 'Prof. Shinde Vishal Rajaram',
                subject: 'SPCC',
                createdAt: new Date().toISOString(),
                expiresAt: new Date(Date.now() + 24*60*60*1000).toISOString(),
                used: false
            }
        ];
        localStorage.setItem(STORAGE_KEYS.CODES, JSON.stringify(demoCodes));
    }
}

// ============= ROLE SELECTION ============= 
function switchRole(role) {
    console.log('Switching to:', role);
    
    // Remove active from all
    const allSections = document.querySelectorAll('.form-section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });

    // Add active to specific one
    let targetId = '';
    switch(role) {
        case 'role':
            targetId = 'roleSelection';
            break;
        case 'student':
            targetId = 'studentLogin';
            break;
        case 'studentRegister':
            targetId = 'studentRegister';
            break;
        case 'teacher':
            targetId = 'teacherLogin';
            break;
        case 'teacherCode':
            targetId = 'teacherCode';
            break;
        case 'admin':
            targetId = 'adminPanel';
            break;
    }

    if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
            element.classList.add('active');
            console.log('Activated:', targetId);
        }
    }
}

// ============= STUDENT LOGIN ============= 
function studentLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('studentEmail').value.trim();
    const password = document.getElementById('studentPassword').value;

    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
    const user = users.find(u => 
        (u.email === email || u.phone === email) && u.password === password
    );

    if (user) {
        const userData = { ...user, loginTime: new Date().toISOString() };
        localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(userData));
        showSuccess('✅ Login successful! Redirecting...');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        showError('❌ Invalid email/phone or password!');
    }
}

// ============= STUDENT REGISTER ============= 
function studentRegister(event) {
    event.preventDefault();

    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const rollNumber = document.getElementById('regRoll').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    if (password !== confirmPassword) {
        showError('❌ Passwords do not match!');
        return;
    }

    if (password.length < 6) {
        showError('❌ Password must be at least 6 characters long!');
        return;
    }

    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
    
    if (users.find(u => u.email === email || u.phone === phone)) {
        showError('❌ Email or phone already registered!');
        return;
    }

    const newUser = {
        id: 'STU' + Date.now(),
        name,
        email,
        phone,
        password,
        rollNumber,
        role: 'student',
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    
    showSuccess('✅ Registration successful! Please login.');
    setTimeout(() => {
        switchRole('student');
        document.getElementById('studentEmail').value = email;
        document.getElementById('studentPassword').value = '';
    }, 1500);
}

// ============= TEACHER LOGIN ============= 
function teacherLogin(event) {
    event.preventDefault();

    const email = document.getElementById('teacherEmail').value.trim();
    const password = document.getElementById('teacherPassword').value;

    console.log('Teacher login attempt:', email);

    const teachers = JSON.parse(localStorage.getItem(STORAGE_KEYS.TEACHERS)) || [];
    console.log('Available teachers:', teachers);

    const teacher = teachers.find(t => t.email === email && t.password === password);

    if (teacher) {
        const userData = { ...teacher, loginTime: new Date().toISOString() };
        localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(userData));
        showSuccess('✅ Teacher login successful! Redirecting...');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        showError('❌ Invalid email or password! Demo: svr@sjjcet.edu.in / teacher123');
    }
}

// ============= SHOW TEACHER CODE ENTRY ============= 
function showTeacherCode() {
    switchRole('teacherCode');
}

// ============= REGISTER TEACHER WITH CODE ============= 
function registerTeacher(event) {
    event.preventDefault();

    const name = document.getElementById('teacherName').value.trim();
    const email = document.getElementById('teacherRegEmail').value.trim();
    const phone = document.getElementById('teacherPhone').value.trim();
    const code = document.getElementById('regCode').value.trim();
    const password = document.getElementById('teacherRegPassword').value;
    const confirmPassword = document.getElementById('teacherConfirmPassword').value;

    if (password !== confirmPassword) {
        showError('❌ Passwords do not match!');
        return;
    }

    if (password.length < 6) {
        showError('❌ Password must be at least 6 characters long!');
        return;
    }

    const codes = JSON.parse(localStorage.getItem(STORAGE_KEYS.CODES)) || [];
    const validCode = codes.find(c => 
        c.code === code && 
        !c.used && 
        new Date(c.expiresAt) > new Date()
    );

    if (!validCode) {
        showError('❌ Invalid or expired code! Use: SJJCET2024');
        return;
    }

    const teachers = JSON.parse(localStorage.getItem(STORAGE_KEYS.TEACHERS)) || [];
    
    if (teachers.find(t => t.email === email)) {
        showError('❌ Email already registered!');
        return;
    }

    const newTeacher = {
        id: 'TCH' + Date.now(),
        name,
        email,
        phone,
        password,
        subject: validCode.subject,
        role: 'teacher',
        createdAt: new Date().toISOString()
    };

    teachers.push(newTeacher);
    localStorage.setItem(STORAGE_KEYS.TEACHERS, JSON.stringify(teachers));

    validCode.used = true;
    localStorage.setItem(STORAGE_KEYS.CODES, JSON.stringify(codes));

    showSuccess('✅ Registration successful! Please login.');
    setTimeout(() => {
        switchRole('teacher');
        document.getElementById('teacherEmail').value = email;
        document.getElementById('teacherPassword').value = '';
    }, 1500);
}

// ============= GENERATE TEACHER CODE ============= 
function generateTeacherCode() {
    const teacherName = document.getElementById('adminTeacherName').value.trim();
    const subject = document.getElementById('adminSubject').value.trim();

    if (!teacherName || !subject) {
        showError('❌ Please fill in all fields!');
        return;
    }

    const code = 'SJJCET' + Math.random().toString(36).substring(2, 8).toUpperCase();

    const codes = JSON.parse(localStorage.getItem(STORAGE_KEYS.CODES)) || [];
    const newCode = {
        code,
        teacherName,
        subject,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 24*60*60*1000).toISOString(),
        used: false
    };

    codes.push(newCode);
    localStorage.setItem(STORAGE_KEYS.CODES, JSON.stringify(codes));

    document.getElementById('codeValue').textContent = code;
    document.getElementById('generatedCode').style.display = 'block';
    
    showSuccess('✅ Code generated successfully!');
}

// ============= COPY CODE ============= 
function copyCode() {
    const code = document.getElementById('codeValue').textContent;
    navigator.clipboard.writeText(code).then(() => {
        showSuccess('📋 Code copied to clipboard!');
    });
}

// ============= GET CURRENT USER ============= 
function getCurrentUser() {
    const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return user ? JSON.parse(user) : null;
}

// ============= CHECK AUTHENTICATION ============= 
function checkAuth() {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = 'auth.html';
        return null;
    }
    return user;
}

// ============= MODALS ============= 
function showSuccess(message) {
    document.getElementById('successMessage').textContent = message;
    document.getElementById('successModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}

function showError(message) {
    document.getElementById('errorMessage').textContent = message;
    document.getElementById('errorModal').style.display = 'block';
}

function closeErrorModal() {
    document.getElementById('errorModal').style.display = 'none';
}

// Close modal on outside click
window.onclick = function(event) {
    const successModal = document.getElementById('successModal');
    const errorModal = document.getElementById('errorModal');
    
    if (event.target === successModal) {
        successModal.style.display = 'none';
    }
    if (event.target === errorModal) {
        errorModal.style.display = 'none';
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', function() {
    console.log('Auth page loaded');
    initializeAuthData();
});