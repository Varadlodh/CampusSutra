// ============= GLOBAL DATE VARIABLE ============= 
const APP_DATE = new Date(2026, 0, 7); // January 7, 2026 (Wednesday)

// ============= COLLEGE INFORMATION ============= 
const collegeInfo = {
    name: 'Shivajirao S. Jondhle College of Engineering & Technology',
    location: 'Asangaon',
    trust: 'VIGHNHARATA TRUST',
    accreditation: 'NAAC Accredited B++',
    department: 'Department of Computer Engineering',
    website: 'www.sjjcet.edu.in'
};

// ============= STUDENT PROFILE ============= 
const studentProfile = {
    name: 'Varad Aniruddha Lodh',
    email: 'varad@campussutra.com',
    rollNumber: 'CS/TE/A1-038',
    semester: 6,
    year: 'Third Year (TE)',
    branch: 'Computer Science & Engineering',
    section: 'A',
    division: 'A1',
    batch: '2023-2027',
    currentGPA: 8.5,
    totalCredits: 120,
    academicStatus: 'Active',
    room: 'A-111',
    building: 'Engineering Block A',
    semesterStartDate: '07 January 2026',
    semesterEndDate: '30 April 2026'
};

// ============= FACULTY DIRECTORY ============= 
const facultyDirectory = [
    { id: 1, name: 'Prof. Shinde Vishal Rajaram', abbreviation: 'SVR', department: 'CSE', specialization: 'System Programming', email: 'svr@sjjcet.edu.in', phone: '+91-9876543210', room: 'CS-301' },
    { id: 2, name: 'Prof. Manje satish J.', abbreviation: 'MSJ', department: 'CSE', specialization: 'Cryptography', email: 'msj@sjjcet.edu.in', phone: '+91-9876543211', room: 'CS-302' },
    { id: 3, name: 'Prof. Mankar Ashwini N.', abbreviation: 'MAN', department: 'CSE', specialization: 'Mobile Computing', email: 'man@sjjcet.edu.in', phone: '+91-9876543212', room: 'CS-303' },
    { id: 4, name: 'Prof. Umeywane Kanchan P.', abbreviation: 'UKP', department: 'CSE', specialization: 'Artificial Intelligence', email: 'ukp@sjjcet.edu.in', phone: '+91-9876543213', room: 'CS-304' },
    { id: 5, name: 'Prof. Daware Namrata G.', abbreviation: 'DNG', department: 'CSE', specialization: 'DLOC-IOT', email: 'dng@sjjcet.edu.in', phone: '+91-9876543214', room: 'CS-305' },
    { id: 6, name: 'Prof. Dhane Priya M.', abbreviation: 'DDM', department: 'CSE', specialization: 'System Design', email: 'ddm@sjjcet.edu.in', phone: '+91-9876543215', room: 'CS-306' },
    { id: 7, name: 'Prof. Gite Swati B.', abbreviation: 'GSB', department: 'CSE', specialization: 'Cloud Computing', email: 'gsb@sjjcet.edu.in', phone: '+91-9876543216', room: 'CS-307' },
    { id: 8, name: 'Prof. Nadhwani Usha U.', abbreviation: 'NUU', department: 'CSE', specialization: 'Database Systems', email: 'nuu@sjjcet.edu.in', phone: '+91-9876543217', room: 'CS-308' },
    { id: 9, name: 'Prof. Varma Arun A.', abbreviation: 'VAA', department: 'CSE', specialization: 'Web Technologies', email: 'vaa@sjjcet.edu.in', phone: '+91-9876543218', room: 'CS-309' },
    { id: 10, name: 'Prof. Shreya Sonawane', abbreviation: 'SS', department: 'CSE', specialization: 'Software Engineering', email: 'ss@sjjcet.edu.in', phone: '+91-9876543219', room: 'CS-310' },
];

// ============= SUBJECT CODES & INFORMATION ============= 
const subjectDatabase = {
    'SPCC': { code: 'CS601', name: 'System Programming & Compiler Construction', credits: 4, lab: 'SPCC/CSL601' },
    'CSS': { code: 'CS602', name: 'Cryptography & System Security', credits: 4, lab: 'CSS/CSL602' },
    'MC': { code: 'CS603', name: 'Mobile Computing', credits: 3, lab: 'MC/CSL603' },
    'AI': { code: 'CS604', name: 'Artificial Intelligence', credits: 3, lab: 'AIL/CSL604' },
    'DLOC': { code: 'ICS0601', name: 'Department Level Optional Course - IOT', credits: 2 },
    'SBLC': { code: 'CSL605', name: 'Skill Base Lab Course: Cloud Computing', credits: 2 },
};

// ============= CURRICULUM & MODULES DATA ============= 
const curriculumData = {
    'SPCC': {
        code: 'CS601',
        name: 'System Programming & Compiler Construction',
        credits: 4,
        totalModules: 6,
        ut1Modules: 3,
        modules: [
            {
                moduleNo: 1,
                name: 'Introduction to Compilers & Lexical Analysis',
                duration: '2 weeks',
                topics: [
                    { topicNo: 1, name: 'Compilers Overview', hours: 2, subtopics: ['Definition and role', 'Compilation phases', 'Compiler vs Interpreter'] },
                    { topicNo: 2, name: 'Lexical Analysis', hours: 3, subtopics: ['Tokens and lexemes', 'Token patterns', 'Lexical errors'] },
                    { topicNo: 3, name: 'Finite Automata', hours: 2, subtopics: ['DFA', 'NFA', 'Conversion DFA to NFA'] },
                    { topicNo: 4, name: 'Regular Expressions', hours: 2, subtopics: ['Regex basics', 'Pattern matching', 'Regex to NFA conversion'] },
                ],
                objectives: ['Understand compiler architecture', 'Learn lexical analysis concepts', 'Implement lexer'],
                outcomes: ['Able to design lexical analyzers', 'Create token patterns', 'Build simple lexer']
            },
            {
                moduleNo: 2,
                name: 'Syntax Analysis & Parsing',
                duration: '2 weeks',
                topics: [
                    { topicNo: 1, name: 'Grammar Basics', hours: 2, subtopics: ['Context-free grammar', 'Parse trees', 'Derivations'] },
                    { topicNo: 2, name: 'Top-Down Parsing', hours: 3, subtopics: ['Recursive descent', 'Predictive parsing', 'LL parsing'] },
                    { topicNo: 3, name: 'Bottom-Up Parsing', hours: 3, subtopics: ['Shift-reduce parsing', 'LR parsing', 'SLR parser'] },
                    { topicNo: 4, name: 'Parsing Conflicts', hours: 2, subtopics: ['Shift-reduce conflicts', 'Reduce-reduce conflicts', 'Ambiguity'] },
                ],
                objectives: ['Understand parsing techniques', 'Learn grammar design', 'Implement parsers'],
                outcomes: ['Design context-free grammars', 'Build parser tables', 'Create syntax analyzers']
            },
            {
                moduleNo: 3,
                name: 'Semantic Analysis & Intermediate Code',
                duration: '2 weeks',
                topics: [
                    { topicNo: 1, name: 'Type System & Checking', hours: 2, subtopics: ['Type systems', 'Type inference', 'Type conversions'] },
                    { topicNo: 2, name: 'Symbol Tables', hours: 2, subtopics: ['Symbol table management', 'Scope handling', 'Hash implementation'] },
                    { topicNo: 3, name: 'Intermediate Code Generation', hours: 3, subtopics: ['Three-address code', 'Quadruples', 'Triples and indirect triples'] },
                    { topicNo: 4, name: 'Semantic Actions', hours: 2, subtopics: ['Attribute grammars', 'Semantic rules', 'L-attributed grammars'] },
                ],
                objectives: ['Understand semantic analysis', 'Learn intermediate code forms', 'Implement symbol table'],
                outcomes: ['Build symbol tables', 'Generate intermediate code', 'Perform type checking']
            },
            {
                moduleNo: 4,
                name: 'Code Optimization',
                duration: '2 weeks',
                topics: [
                    { topicNo: 1, name: 'Optimization Techniques', hours: 2, subtopics: ['Local optimization', 'Global optimization', 'Loop optimization'] },
                    { topicNo: 2, name: 'Data Flow Analysis', hours: 3, subtopics: ['Reaching definitions', 'Live variables', 'Available expressions'] },
                    { topicNo: 3, name: 'Loop Optimization', hours: 2, subtopics: ['Loop unrolling', 'Loop fusion', 'Strength reduction'] },
                ],
                objectives: ['Learn optimization methods', 'Understand data flow analysis'],
                outcomes: ['Optimize code', 'Perform data flow analysis']
            },
            {
                moduleNo: 5,
                name: 'Code Generation & Register Allocation',
                duration: '2 weeks',
                topics: [
                    { topicNo: 1, name: 'Code Generation Basics', hours: 2, subtopics: ['Target machine model', 'Instruction selection', 'Peephole optimization'] },
                    { topicNo: 2, name: 'Register Allocation', hours: 3, subtopics: ['Register assignment', 'Graph coloring', 'Spilling'] },
                ],
                objectives: ['Learn code generation', 'Understand register allocation'],
                outcomes: ['Generate assembly code', 'Allocate registers efficiently']
            },
            {
                moduleNo: 6,
                name: 'Error Handling & Case Studies',
                duration: '2 weeks',
                topics: [
                    { topicNo: 1, name: 'Error Recovery', hours: 2, subtopics: ['Error detection', 'Error recovery techniques', 'Panic mode'] },
                    { topicNo: 2, name: 'Case Studies', hours: 2, subtopics: ['Compiler architecture overview', 'Real compiler examples'] },
                ],
                objectives: ['Learn error handling', 'Study real compilers'],
                outcomes: ['Handle compiler errors', 'Understand production compilers']
            }
        ],
        ut1Coverage: {
            modules: [1, 2, 3],
            coverage: '50%',
            topics: 14,
            hours: 20
        },
        books: [
            'Compilers: Principles, Techniques, and Tools (Dragon Book) - Aho, Sethi, Ullman',
            'Modern Compiler Implementation in Java - Appel',
            'Engineering a Compiler - Cooper, Torczon'
        ]
    },
    'CSS': {
        code: 'CS602',
        name: 'Cryptography & System Security',
        credits: 4,
        totalModules: 6,
        ut1Modules: 3,
        modules: [
            {
                moduleNo: 1,
                name: 'Cryptography Basics & Classical Ciphers',
                duration: '2 weeks',
                topics: [
                    { topicNo: 1, name: 'Introduction to Cryptography', hours: 2, subtopics: ['CIA triad', 'Cryptographic goals', 'Cryptanalysis'] },
                    { topicNo: 2, name: 'Classical Encryption Techniques', hours: 3, subtopics: ['Caesar cipher', 'Substitution cipher', 'Playfair cipher', 'Vigenere cipher'] },
                    { topicNo: 3, name: 'Cryptanalysis of Classical Ciphers', hours: 2, subtopics: ['Frequency analysis', 'Brute force attacks', 'Known plaintext attacks'] },
                    { topicNo: 4, name: 'One-Time Pad & Transposition', hours: 2, subtopics: ['One-time pad', 'Transposition cipher', 'Rail fence cipher'] },
                ],
                objectives: ['Understand cryptography basics', 'Learn classical encryption', 'Understand cryptanalysis'],
                outcomes: ['Implement classical ciphers', 'Break classical ciphers', 'Understand cipher limitations']
            },
            {
                moduleNo: 2,
                name: 'Modern Symmetric Key Encryption',
                duration: '2 weeks',
                topics: [
                    { topicNo: 1, name: 'Block Ciphers Basics', hours: 2, subtopics: ['Block cipher concepts', 'Confusion and diffusion', 'Feistel networks'] },
                    { topicNo: 2, name: 'DES (Data Encryption Standard)', hours: 3, subtopics: ['DES algorithm', 'DES key schedule', 'Rounds and boxes', 'DES analysis'] },
                    { topicNo: 3, name: 'AES (Advanced Encryption Standard)', hours: 3, subtopics: ['AES algorithm', 'Byte substitution', 'Shift rows', 'Mix columns', 'Key expansion'] },
                    { topicNo: 4, name: 'Block Cipher Modes', hours: 2, subtopics: ['ECB mode', 'CBC mode', 'CTR mode', 'GCM mode'] },
                ],
                objectives: ['Understand modern encryption', 'Learn DES & AES', 'Understand modes of operation'],
                outcomes: ['Implement DES', 'Implement AES', 'Choose appropriate encryption modes']
            },
            {
                moduleNo: 3,
                name: 'Public Key Cryptography & RSA',
                duration: '2 weeks',
                topics: [
                    { topicNo: 1, name: 'Public Key Cryptography Basics', hours: 2, subtopics: ['Public key concept', 'One-way functions', 'Trapdoor functions', 'Key management'] },
                    { topicNo: 2, name: 'RSA Algorithm', hours: 3, subtopics: ['RSA key generation', 'RSA encryption', 'RSA decryption', 'RSA security'] },
                    { topicNo: 3, name: 'Number Theory for RSA', hours: 2, subtopics: ['Prime numbers', 'Modular arithmetic', 'Euler\'s theorem', 'Extended GCD'] },
                    { topicNo: 4, name: 'Other Public Key Algorithms', hours: 2, subtopics: ['Diffie-Hellman', 'ElGamal', 'Elliptic Curve basics'] },
                ],
                objectives: ['Understand public key cryptography', 'Learn RSA algorithm', 'Understand mathematical foundations'],
                outcomes: ['Implement RSA', 'Perform key generation', 'Encrypt and decrypt with RSA']
            },
            {
                moduleNo: 4,
                name: 'Hash Functions & Digital Signatures',
                duration: '2 weeks',
                topics: [
                    { topicNo: 1, name: 'Cryptographic Hash Functions', hours: 2, subtopics: ['Hash function properties', 'MD5', 'SHA family', 'Hash collision'] },
                    { topicNo: 2, name: 'Message Authentication Codes', hours: 2, subtopics: ['MAC concept', 'HMAC', 'CMAC'] },
                    { topicNo: 3, name: 'Digital Signatures', hours: 2, subtopics: ['Signature creation', 'Signature verification', 'RSA signatures', 'DSA'] },
                ],
                objectives: ['Learn hash functions', 'Understand message authentication', 'Learn digital signatures'],
                outcomes: ['Implement hash functions', 'Create MACs', 'Create and verify signatures']
            },
            {
                moduleNo: 5,
                name: 'System Security & Protocols',
                duration: '2 weeks',
                topics: [
                    { topicNo: 1, name: 'Authentication Protocols', hours: 2, subtopics: ['Password authentication', 'Kerberos', 'OAuth'] },
                    { topicNo: 2, name: 'SSL/TLS Protocol', hours: 2, subtopics: ['SSL/TLS handshake', 'Cipher suites', 'Certificate authority'] },
                    { topicNo: 3, name: 'Key Management & Distribution', hours: 2, subtopics: ['Key generation', 'Key storage', 'Key distribution', 'Key escrow'] },
                ],
                objectives: ['Understand security protocols', 'Learn SSL/TLS', 'Understand key management'],
                outcomes: ['Design secure protocols', 'Understand HTTPS', 'Manage cryptographic keys']
            },
            {
                moduleNo: 6,
                name: 'System Security Implementation',
                duration: '2 weeks',
                topics: [
                    { topicNo: 1, name: 'Access Control', hours: 2, subtopics: ['DAC', 'MAC', 'RBAC'] },
                    { topicNo: 2, name: 'Firewall & Intrusion Detection', hours: 2, subtopics: ['Firewall types', 'IDS/IPS', 'Anomaly detection'] },
                    { topicNo: 3, name: 'Security Best Practices', hours: 2, subtopics: ['Secure coding', 'Patch management', 'Security auditing'] },
                ],
                objectives: ['Understand access control', 'Learn network security', 'Understand best practices'],
                outcomes: ['Implement access control', 'Configure firewalls', 'Follow security best practices']
            }
        ],
        ut1Coverage: {
            modules: [1, 2, 3],
            coverage: '50%',
            topics: 13,
            hours: 20
        },
        books: [
            'Cryptography and Network Security - William Stallings',
            'Introduction to Cryptography with Coding Theory - Trappe & Washington',
            'Handbook of Applied Cryptography - Menezes, van Oorschot, Vanstone'
        ]
    },
    'MC': {
        code: 'CS603',
        name: 'Mobile Computing',
        credits: 3,
        totalModules: 6,
        ut1Modules: 3,
        modules: [
            {
                moduleNo: 1,
                name: 'Mobile Computing Fundamentals',
                duration: '1.5 weeks',
                topics: [
                    { topicNo: 1, name: 'Mobile Computing Overview', hours: 2, subtopics: ['History of mobile computing', 'Mobile devices', 'Mobile OS landscape'] },
                    { topicNo: 2, name: 'Mobile Architectures', hours: 2, subtopics: ['Client-server', 'P2P', 'Cloud-based architectures'] },
                    { topicNo: 3, name: 'Mobile Networks', hours: 2, subtopics: ['Cellular networks', 'WiFi', 'Bluetooth', '5G basics'] },
                    { topicNo: 4, name: 'Mobile Development Platforms', hours: 2, subtopics: ['Android', 'iOS', 'Flutter', 'React Native'] },
                ],
                objectives: ['Understand mobile computing', 'Learn mobile architectures', 'Understand mobile networks', 'Know development platforms'],
                outcomes: ['Identify suitable mobile architecture', 'Understand network constraints', 'Choose development platform']
            },
            {
                moduleNo: 2,
                name: 'Android Development Basics',
                duration: '1.5 weeks',
                topics: [
                    { topicNo: 1, name: 'Android Architecture & Components', hours: 2, subtopics: ['Android architecture', 'Activities', 'Services', 'Broadcast receivers', 'Content providers'] },
                    { topicNo: 2, name: 'Android Application Lifecycle', hours: 2, subtopics: ['Activity lifecycle', 'Fragment lifecycle', 'Service lifecycle'] },
                    { topicNo: 3, name: 'UI Development in Android', hours: 2, subtopics: ['Layouts', 'Views and ViewGroups', 'Widgets', 'Custom views'] },
                    { topicNo: 4, name: 'Android Resources & Manifest', hours: 2, subtopics: ['Resource types', 'AndroidManifest.xml', 'Permissions', 'Intent filters'] },
                ],
                objectives: ['Learn Android architecture', 'Understand component lifecycle', 'Learn UI development', 'Understand manifest'],
                outcomes: ['Create Android app structure', 'Implement lifecycle handlers', 'Design Android UIs', 'Configure app permissions']
            },
            {
                moduleNo: 3,
                name: 'Data Storage & User Interaction',
                duration: '1.5 weeks',
                topics: [
                    { topicNo: 1, name: 'Data Storage in Android', hours: 2, subtopics: ['Shared Preferences', 'SQLite database', 'File storage', 'Content providers'] },
                    { topicNo: 2, name: 'User Input & Interaction', hours: 2, subtopics: ['Touch events', 'Gestures', 'Dialogs', 'Notifications'] },
                    { topicNo: 3, name: 'Background Operations', hours: 2, subtopics: ['AsyncTask', 'IntentService', 'WorkManager', 'Threading'] },
                    { topicNo: 4, name: 'Networking in Android', hours: 2, subtopics: ['HTTP requests', 'REST APIs', 'JSON parsing', 'Retrofit library'] },
                ],
                objectives: ['Learn data storage options', 'Understand user interaction', 'Learn background operations', 'Understand networking'],
                outcomes: ['Store data in mobile apps', 'Handle user interactions', 'Perform background tasks', 'Consume REST APIs']
            },
            {
                moduleNo: 4,
                name: 'iOS Development Basics',
                duration: '1.5 weeks',
                topics: [
                    { topicNo: 1, name: 'iOS Architecture & Swift Basics', hours: 2, subtopics: ['iOS architecture', 'Swift fundamentals', 'OOP in Swift'] },
                    { topicNo: 2, name: 'iOS UI Development', hours: 2, subtopics: ['UIKit basics', 'Storyboards', 'Auto Layout', 'View hierarchy'] },
                ],
                objectives: ['Learn iOS development', 'Understand Swift language'],
                outcomes: ['Create iOS apps', 'Design iOS interfaces']
            },
            {
                moduleNo: 5,
                name: 'Cross-Platform Development',
                duration: '1.5 weeks',
                topics: [
                    { topicNo: 1, name: 'Flutter Framework', hours: 2, subtopics: ['Flutter basics', 'Dart language', 'Widgets', 'Hot reload'] },
                    { topicNo: 2, name: 'React Native Framework', hours: 2, subtopics: ['React Native basics', 'JSX', 'Native modules', 'Bridge'] },
                ],
                objectives: ['Learn cross-platform development', 'Compare frameworks'],
                outcomes: ['Choose appropriate framework', 'Develop cross-platform apps']
            },
            {
                moduleNo: 6,
                name: 'Mobile App Performance & Security',
                duration: '1.5 weeks',
                topics: [
                    { topicNo: 1, name: 'Performance Optimization', hours: 1, subtopics: ['Memory management', 'Battery optimization', 'Network optimization'] },
                    { topicNo: 2, name: 'Mobile Security', hours: 1, subtopics: ['Data encryption', 'Secure communication', 'Authentication'] },
                    { topicNo: 3, name: 'Testing & Deployment', hours: 1, subtopics: ['Unit testing', 'UI testing', 'App distribution'] },
                ],
                objectives: ['Optimize mobile apps', 'Secure mobile apps', 'Test and deploy'],
                outcomes: ['Build efficient apps', 'Secure mobile data', 'Deploy to app stores']
            }
        ],
        ut1Coverage: {
            modules: [1, 2, 3],
            coverage: '50%',
            topics: 14,
            hours: 15
        },
        books: [
            'Android Programming: The Big Nerd Ranch Guide - Bill Phillips',
            'Professional Android - Reto Meier',
            'iOS Programming: The Big Nerd Ranch Guide - Joe Conway'
        ]
    }
};

// ============= LECTURE TOPICS MAPPING ============= 
const lectureTopicsMapping = {
    'SPCC': {
        'Monday 10:00-11:00': {
            module: 1,
            topics: ['Compilers Overview', 'Definition and role', 'Compilation phases']
        },
        'Monday 11:00-12:00': {
            module: 1,
            topics: ['Lexical Analysis', 'Tokens and lexemes', 'Token patterns']
        },
        'Tuesday 12:00-1:30': {
            module: 2,
            topics: ['Grammar Basics', 'Context-free grammar', 'Parse trees']
        },
        'Wednesday 11:00-12:00': {
            module: 2,
            topics: ['Syntax Analysis & Parsing', 'Top-Down Parsing', 'Recursive descent']
        },
        'Wednesday 3:00-4:00': {
            module: 3,
            topics: ['Semantic Analysis', 'Type System & Checking', 'Symbol Tables']
        },
        'Thursday 3:00-4:00': {
            module: 3,
            topics: ['Intermediate Code Generation', 'Three-address code', 'Quadruples']
        }
    },
    'CSS': {
        'Monday 11:00-12:00': {
            module: 1,
            topics: ['Introduction to Cryptography', 'CIA triad', 'Cryptographic goals']
        },
        'Tuesday 12:00-1:30': {
            module: 1,
            topics: ['Classical Encryption Techniques', 'Caesar cipher', 'Substitution cipher']
        },
        'Wednesday 11:00-12:00': {
            module: 2,
            topics: ['Block Ciphers Basics', 'Confusion and diffusion', 'Feistel networks']
        },
        'Thursday 3:00-4:00': {
            module: 2,
            topics: ['DES Algorithm', 'DES key schedule', 'Rounds and boxes']
        }
    },
    'MC': {
        'Monday 11:00-12:00': {
            module: 1,
            topics: ['Mobile Computing Overview', 'History of mobile computing', 'Mobile devices']
        },
        'Wednesday 10:00-11:00': {
            module: 2,
            topics: ['Android Architecture & Components', 'Activities', 'Services']
        },
        'Wednesday 3:00-4:00': {
            module: 3,
            topics: ['Data Storage in Android', 'Shared Preferences', 'SQLite database']
        }
    }
};

// ============= ROOM & LAB LOCATIONS ============= 
const locations = {
    'A-109': { name: 'AI Lab', building: 'Engineering Block A', capacity: 40, type: 'Lab' },
    'A-110': { name: 'OS Lab', building: 'Engineering Block A', capacity: 40, type: 'Lab' },
    'A-111': { name: 'Classroom A-111', building: 'Engineering Block A', capacity: 60, type: 'Classroom' },
    'A-112': { name: 'Database Management Lab', building: 'Engineering Block A', capacity: 40, type: 'Lab' },
    'A-118': { name: 'Multimedia Lab', building: 'Engineering Block B', capacity: 35, type: 'Lab' },
    'A-119': { name: 'Internet Lab', building: 'Engineering Block B', capacity: 40, type: 'Lab' },
    'Auditorium': { name: 'Main Auditorium', building: 'Main Campus', capacity: 500, type: 'Auditorium' },
};

// ============= YOUR TE TIMETABLE (SEMESTER 6) ============= 
const yourTimetable = {
    semester: 6,
    academicYear: '2025-26',
    class: 'TE',
    division: 'A1',
    room: 'A-111',
    location: 'A-111',
    effectiveFrom: '07 January 2026',
    
    Monday: [
        { time: '10:00-11:00', subject: 'SPCC', subjectName: 'System Programming & Compiler Construction', professor: 'SVR', professorName: 'Prof. Shinde Vishal Rajaram', room: 'A-111', building: 'Engineering Block A', type: 'Lecture', division: 'A' },
        { time: '11:00-12:00', subject: 'MC', subjectName: 'Mobile Computing', professor: 'MAN', professorName: 'Prof. Mankar Ashwini N.', room: 'A-111', building: 'Engineering Block A', type: 'Lecture', division: 'A' },
        { time: '12:00-1:30', subject: 'SPCC', subjectName: 'System Programming & Compiler Construction (UKP)', professor: 'UKP', professorName: 'Prof. Umeywane Kanchan P.', room: 'A-111', building: 'Engineering Block A', type: 'Lecture', division: 'B' },
        { time: '1:30-2:00', subject: 'Break', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
        { time: '2:00-3:00', subject: 'AI', subjectName: 'Artificial Intelligence (DDM)', professor: 'DDM', professorName: 'Prof. Dhane Priya M.', room: 'A-111', building: 'Engineering Block A', type: 'Lecture', division: 'B' },
        { time: '3:00-4:00', subject: 'SPCC', subjectName: 'System Programming & Compiler Construction (UKP)', professor: 'UKP', professorName: 'Prof. Umeywane Kanchan P.', room: 'A-111', building: 'Engineering Block A', type: 'Lecture', division: 'A' },
        { time: '4:00-5:00', subject: 'Break', subjectName: '', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
    ],
    
    Tuesday: [
        { time: '10:00-11:00', subject: 'DLOC', subjectName: 'DLOC-2 IOT (DDM)', professor: 'DDM', professorName: 'Prof. Dhane Priya M.', room: 'A-111', building: 'Engineering Block A', type: 'Lecture', division: 'A' },
        { time: '11:00-12:00', subject: 'DLOC', subjectName: 'DLOC-2 IOT (DDM)', professor: 'DDM', professorName: 'Prof. Dhane Priya M.', room: 'A-111', building: 'Engineering Block A', type: 'Lecture', division: 'A' },
        { time: '12:00-1:30', subject: 'CSS', subjectName: 'Cryptography & System Security (GSB)', professor: 'GSB', professorName: 'Prof. Gite Swati B.', room: 'A-111', building: 'Engineering Block A', type: 'Lecture', division: 'B' },
        { time: '1:30-2:00', subject: 'Break', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
        { time: '2:00-3:00', subject: 'SPCC', subjectName: 'SPCC-PR (UKP)', professor: 'UKP', professorName: 'Prof. Umeywane Kanchan P.', room: 'A-111', building: 'Engineering Block A', type: 'Practical', division: 'B' },
        { time: '3:00-4:00', subject: 'Break', subjectName: '', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
        { time: '4:00-5:00', subject: 'Break', subjectName: '', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
    ],
    
    Wednesday: [
        { time: '10:00-11:00', subject: 'MC', subjectName: 'Mobile Computing (MAN)', professor: 'MAN', professorName: 'Prof. Mankar Ashwini N.', room: 'A-111', building: 'Engineering Block A', type: 'Lecture', division: 'A' },
        { time: '11:00-12:00', subject: 'SPCC', subjectName: 'System Programming & Compiler Construction (UKP)', professor: 'UKP', professorName: 'Prof. Umeywane Kanchan P.', room: 'A-111', building: 'Engineering Block A', type: 'Lecture', division: 'A' },
        { time: '12:00-1:30', subject: 'AI', subjectName: 'AI (PR) (DDM)', professor: 'DDM', professorName: 'Prof. Dhane Priya M.', room: 'A-111', building: 'Engineering Block A', type: 'Practical', division: 'B' },
        { time: '1:30-2:00', subject: 'Break', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
        { time: '2:00-3:00', subject: 'MCL', subjectName: 'MCL (PR) (MAN)', professor: 'MAN', professorName: 'Prof. Mankar Ashwini N.', room: 'A-118', building: 'Engineering Block B', type: 'Lab', division: 'B' },
        { time: '3:00-4:00', subject: 'AI', subjectName: 'AI (DDM)', professor: 'DDM', professorName: 'Prof. Dhane Priya M.', room: 'A-111', building: 'Engineering Block A', type: 'Lecture', division: 'A' },
        { time: '4:00-5:00', subject: 'Break', subjectName: '', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
    ],
    
    Thursday: [
        { time: '10:00-11:00', subject: 'DLOC', subjectName: 'DLOC-2 IOT (DDM)', professor: 'DDM', professorName: 'Prof. Dhane Priya M.', room: 'A-111', building: 'Engineering Block A', type: 'Lecture', division: 'A' },
        { time: '11:00-12:00', subject: 'DLOC', subjectName: 'DLOC-2 IOT (DDM)', professor: 'DDM', professorName: 'Prof. Dhane Priya M.', room: 'A-111', building: 'Engineering Block A', type: 'Lecture', division: 'A' },
        { time: '12:00-1:30', subject: 'CSS', subjectName: 'CSSL (PR) (GSB)', professor: 'GSB', professorName: 'Prof. Gite Swati B.', room: 'A-111', building: 'Engineering Block A', type: 'Practical', division: 'B' },
        { time: '1:30-2:00', subject: 'Break', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
        { time: '2:00-3:00', subject: 'SBLC', subjectName: 'SBLC:CCL(PR) (AAS)', professor: 'AAS', professorName: 'Prof. Varma Arun A.', room: 'A-119', building: 'Engineering Block B', type: 'Lab', division: 'B' },
        { time: '3:00-4:00', subject: 'CSS', subjectName: 'CSS (GSB)', professor: 'GSB', professorName: 'Prof. Gite Swati B.', room: 'A-111', building: 'Engineering Block A', type: 'Lecture', division: 'A' },
        { time: '4:00-5:00', subject: 'Break', subjectName: '', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
    ],
    
    Friday: [
        { time: '10:00-11:00', subject: 'Project', subjectName: 'PROJECT DAY', professor: 'All Faculty', professorName: 'All Faculty', room: 'Various', building: 'Engineering Block', type: 'Project', division: 'A' },
        { time: '11:00-12:00', subject: 'Project', subjectName: 'PROJECT DAY', professor: 'All Faculty', professorName: 'All Faculty', room: 'Various', building: 'Engineering Block', type: 'Project', division: 'A' },
        { time: '12:00-1:30', subject: 'Project', subjectName: 'PROJECT DAY', professor: 'All Faculty', professorName: 'All Faculty', room: 'Various', building: 'Engineering Block', type: 'Project', division: 'A' },
        { time: '1:30-2:00', subject: 'Break', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
        { time: '2:00-3:00', subject: 'Project', subjectName: 'PROJECT DAY', professor: 'All Faculty', professorName: 'All Faculty', room: 'Various', building: 'Engineering Block', type: 'Project', division: 'A' },
        { time: '3:00-4:00', subject: 'Project', subjectName: 'PROJECT DAY', professor: 'All Faculty', professorName: 'All Faculty', room: 'Various', building: 'Engineering Block', type: 'Project', division: 'A' },
        { time: '4:00-5:00', subject: 'Break', subjectName: '', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
    ]
};

// ============= SE (SECOND YEAR) - SEMESTER 4 ============= 
const seTimetables = {
    'SE-A1': {
        semester: 4,
        academicYear: '2025-26',
        class: 'SE',
        section: 'A',
        division: 'A1',
        room: 'A-201',
        location: 'A-201',
        classAdvisor: 'Prof. SVR',
        totalStudents: 22,
        rollNumbers: '01 to 22',
        effectiveFrom: '07 January 2026',
        Monday: [
            { time: '9:00-10:00', subject: 'SPCC', subjectName: 'System Programming & Compiler Construction', professor: 'SVR', professorName: 'Prof. Shinde Vishal Rajaram', room: 'A-201', building: 'Engineering Block A', type: 'Lecture', division: 'A1' },
            { time: '10:00-11:00', subject: 'MC', subjectName: 'Mobile Computing', professor: 'MAN', professorName: 'Prof. Mankar Ashwini N.', room: 'A-201', building: 'Engineering Block A', type: 'Lecture', division: 'A1' },
            { time: '11:00-12:00', subject: 'Break', subjectName: 'Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '12:00-1:30', subject: 'CSS', subjectName: 'Cryptography & System Security', professor: 'MSJ', professorName: 'Prof. Manje satish J.', room: 'A-201', building: 'Engineering Block A', type: 'Lecture', division: 'A1' },
            { time: '1:30-2:00', subject: 'Lunch', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '2:00-3:00', subject: 'AI', subjectName: 'Artificial Intelligence', professor: 'UKP', professorName: 'Prof. Umeywane Kanchan P.', room: 'A-201', building: 'Engineering Block A', type: 'Lecture', division: 'A1' },
        ],
        Tuesday: [
            { time: '9:00-10:00', subject: 'MC', subjectName: 'Mobile Computing Lab', professor: 'MAN', professorName: 'Prof. Mankar Ashwini N.', room: 'A-118', building: 'Engineering Block B', type: 'Lab', division: 'A1' },
            { time: '10:00-11:00', subject: 'CSS', subjectName: 'Cryptography & System Security', professor: 'MSJ', professorName: 'Prof. Manje satish J.', room: 'A-201', building: 'Engineering Block A', type: 'Lecture', division: 'A1' },
            { time: '11:00-12:00', subject: 'Break', subjectName: 'Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '12:00-1:30', subject: 'SPCC', subjectName: 'System Programming & Compiler Construction', professor: 'SVR', professorName: 'Prof. Shinde Vishal Rajaram', room: 'A-201', building: 'Engineering Block A', type: 'Lecture', division: 'A1' },
            { time: '1:30-2:00', subject: 'Lunch', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '2:00-3:00', subject: 'AI', subjectName: 'Artificial Intelligence', professor: 'UKP', professorName: 'Prof. Umeywane Kanchan P.', room: 'A-201', building: 'Engineering Block A', type: 'Lecture', division: 'A1' },
        ],
        Wednesday: [
            { time: '9:00-10:00', subject: 'AI', subjectName: 'Artificial Intelligence Lab', professor: 'UKP', professorName: 'Prof. Umeywane Kanchan P.', room: 'A-109', building: 'Engineering Block A', type: 'Lab', division: 'A1' },
            { time: '10:00-11:00', subject: 'CSS', subjectName: 'Cryptography & System Security Lab', professor: 'MSJ', professorName: 'Prof. Manje satish J.', room: 'A-119', building: 'Engineering Block B', type: 'Lab', division: 'A1' },
            { time: '11:00-12:00', subject: 'Break', subjectName: 'Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '12:00-1:30', subject: 'SPCC', subjectName: 'System Programming & Compiler Construction Lab', professor: 'SVR', professorName: 'Prof. Shinde Vishal Rajaram', room: 'A-112', building: 'Engineering Block A', type: 'Lab', division: 'A1' },
            { time: '1:30-2:00', subject: 'Lunch', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '2:00-3:00', subject: 'MC', subjectName: 'Mobile Computing', professor: 'MAN', professorName: 'Prof. Mankar Ashwini N.', room: 'A-201', building: 'Engineering Block A', type: 'Lecture', division: 'A1' },
        ],
        Thursday: [
            { time: '9:00-10:00', subject: 'SPCC', subjectName: 'System Programming & Compiler Construction', professor: 'SVR', professorName: 'Prof. Shinde Vishal Rajaram', room: 'A-201', building: 'Engineering Block A', type: 'Lecture', division: 'A1' },
            { time: '10:00-11:00', subject: 'CSS', subjectName: 'Cryptography & System Security', professor: 'MSJ', professorName: 'Prof. Manje satish J.', room: 'A-201', building: 'Engineering Block A', type: 'Lecture', division: 'A1' },
            { time: '11:00-12:00', subject: 'Break', subjectName: 'Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '12:00-1:30', subject: 'MC', subjectName: 'Mobile Computing', professor: 'MAN', professorName: 'Prof. Mankar Ashwini N.', room: 'A-201', building: 'Engineering Block A', type: 'Lecture', division: 'A1' },
            { time: '1:30-2:00', subject: 'Lunch', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '2:00-3:00', subject: 'AI', subjectName: 'Artificial Intelligence', professor: 'UKP', professorName: 'Prof. Umeywane Kanchan P.', room: 'A-201', building: 'Engineering Block A', type: 'Lecture', division: 'A1' },
        ],
        Friday: [
            { time: '9:00-10:00', subject: 'Project', subjectName: 'PROJECT DAY', professor: 'All Faculty', professorName: 'All Faculty', room: 'Various', building: 'Engineering Block', type: 'Project', division: 'A1' },
            { time: '10:00-11:00', subject: 'Project', subjectName: 'PROJECT DAY', professor: 'All Faculty', professorName: 'All Faculty', room: 'Various', building: 'Engineering Block', type: 'Project', division: 'A1' },
            { time: '11:00-12:00', subject: 'Break', subjectName: 'Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '12:00-1:30', subject: 'Seminar', subjectName: 'Seminar / Industry Talk', professor: 'Various', professorName: 'Various', room: 'Auditorium', building: 'Main Campus', type: 'Seminar', division: 'A1' },
            { time: '1:30-2:00', subject: 'Lunch', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '2:00-3:00', subject: 'Project', subjectName: 'PROJECT DAY', professor: 'All Faculty', professorName: 'All Faculty', room: 'Various', building: 'Engineering Block', type: 'Project', division: 'A1' },
        ]
    },
    'SE-A2': {
        semester: 4,
        academicYear: '2025-26',
        class: 'SE',
        section: 'A',
        division: 'A2',
        room: 'A-202',
        location: 'A-202',
        classAdvisor: 'Prof. MSJ',
        totalStudents: 23,
        rollNumbers: '21 to 40',
        effectiveFrom: '07 January 2026',
        Monday: [
            { time: '9:00-10:00', subject: 'SPCC', subjectName: 'System Programming & Compiler Construction', professor: 'SVR', professorName: 'Prof. Shinde Vishal Rajaram', room: 'A-202', building: 'Engineering Block A', type: 'Lecture', division: 'A2' },
            { time: '10:00-11:00', subject: 'MC', subjectName: 'Mobile Computing', professor: 'MAN', professorName: 'Prof. Mankar Ashwini N.', room: 'A-202', building: 'Engineering Block A', type: 'Lecture', division: 'A2' },
            { time: '11:00-12:00', subject: 'Break', subjectName: 'Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '12:00-1:30', subject: 'CSS', subjectName: 'Cryptography & System Security', professor: 'MSJ', professorName: 'Prof. Manje satish J.', room: 'A-202', building: 'Engineering Block A', type: 'Lecture', division: 'A2' },
            { time: '1:30-2:00', subject: 'Lunch', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '2:00-3:00', subject: 'AI', subjectName: 'Artificial Intelligence', professor: 'UKP', professorName: 'Prof. Umeywane Kanchan P.', room: 'A-202', building: 'Engineering Block A', type: 'Lecture', division: 'A2' },
        ],
        Tuesday: [
            { time: '9:00-10:00', subject: 'MC', subjectName: 'Mobile Computing Lab', professor: 'MAN', professorName: 'Prof. Mankar Ashwini N.', room: 'A-118', building: 'Engineering Block B', type: 'Lab', division: 'A2' },
            { time: '10:00-11:00', subject: 'CSS', subjectName: 'Cryptography & System Security', professor: 'MSJ', professorName: 'Prof. Manje satish J.', room: 'A-202', building: 'Engineering Block A', type: 'Lecture', division: 'A2' },
            { time: '11:00-12:00', subject: 'Break', subjectName: 'Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '12:00-1:30', subject: 'SPCC', subjectName: 'System Programming & Compiler Construction', professor: 'SVR', professorName: 'Prof. Shinde Vishal Rajaram', room: 'A-202', building: 'Engineering Block A', type: 'Lecture', division: 'A2' },
            { time: '1:30-2:00', subject: 'Lunch', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '2:00-3:00', subject: 'AI', subjectName: 'Artificial Intelligence', professor: 'UKP', professorName: 'Prof. Umeywane Kanchan P.', room: 'A-202', building: 'Engineering Block A', type: 'Lecture', division: 'A2' },
        ],
        Wednesday: [
            { time: '9:00-10:00', subject: 'AI', subjectName: 'Artificial Intelligence Lab', professor: 'UKP', professorName: 'Prof. Umeywane Kanchan P.', room: 'A-109', building: 'Engineering Block A', type: 'Lab', division: 'A2' },
            { time: '10:00-11:00', subject: 'CSS', subjectName: 'Cryptography & System Security Lab', professor: 'MSJ', professorName: 'Prof. Manje satish J.', room: 'A-119', building: 'Engineering Block B', type: 'Lab', division: 'A2' },
            { time: '11:00-12:00', subject: 'Break', subjectName: 'Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '12:00-1:30', subject: 'SPCC', subjectName: 'System Programming & Compiler Construction Lab', professor: 'SVR', professorName: 'Prof. Shinde Vishal Rajaram', room: 'A-112', building: 'Engineering Block A', type: 'Lab', division: 'A2' },
            { time: '1:30-2:00', subject: 'Lunch', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '2:00-3:00', subject: 'MC', subjectName: 'Mobile Computing', professor: 'MAN', professorName: 'Prof. Mankar Ashwini N.', room: 'A-202', building: 'Engineering Block A', type: 'Lecture', division: 'A2' },
        ],
        Thursday: [
            { time: '9:00-10:00', subject: 'SPCC', subjectName: 'System Programming & Compiler Construction', professor: 'SVR', professorName: 'Prof. Shinde Vishal Rajaram', room: 'A-202', building: 'Engineering Block A', type: 'Lecture', division: 'A2' },
            { time: '10:00-11:00', subject: 'CSS', subjectName: 'Cryptography & System Security', professor: 'MSJ', professorName: 'Prof. Manje satish J.', room: 'A-202', building: 'Engineering Block A', type: 'Lecture', division: 'A2' },
            { time: '11:00-12:00', subject: 'Break', subjectName: 'Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '12:00-1:30', subject: 'MC', subjectName: 'Mobile Computing', professor: 'MAN', professorName: 'Prof. Mankar Ashwini N.', room: 'A-202', building: 'Engineering Block A', type: 'Lecture', division: 'A2' },
            { time: '1:30-2:00', subject: 'Lunch', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '2:00-3:00', subject: 'AI', subjectName: 'Artificial Intelligence', professor: 'UKP', professorName: 'Prof. Umeywane Kanchan P.', room: 'A-202', building: 'Engineering Block A', type: 'Lecture', division: 'A2' },
        ],
        Friday: [
            { time: '9:00-10:00', subject: 'Project', subjectName: 'PROJECT DAY', professor: 'All Faculty', professorName: 'All Faculty', room: 'Various', building: 'Engineering Block', type: 'Project', division: 'A2' },
            { time: '10:00-11:00', subject: 'Project', subjectName: 'PROJECT DAY', professor: 'All Faculty', professorName: 'All Faculty', room: 'Various', building: 'Engineering Block', type: 'Project', division: 'A2' },
            { time: '11:00-12:00', subject: 'Break', subjectName: 'Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '12:00-1:30', subject: 'Seminar', subjectName: 'Seminar / Industry Talk', professor: 'Various', professorName: 'Various', room: 'Auditorium', building: 'Main Campus', type: 'Seminar', division: 'A2' },
            { time: '1:30-2:00', subject: 'Lunch', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '2:00-3:00', subject: 'Project', subjectName: 'PROJECT DAY', professor: 'All Faculty', professorName: 'All Faculty', room: 'Various', building: 'Engineering Block', type: 'Project', division: 'A2' },
        ]
    },
    'SE-B': {
        semester: 4,
        academicYear: '2025-26',
        class: 'SE',
        section: 'B',
        division: 'B',
        room: 'A-203',
        location: 'A-203',
        classAdvisor: 'Prof. MAN',
        totalStudents: 45,
        rollNumbers: '41 onwards',
        effectiveFrom: '07 January 2026',
        Monday: [
            { time: '9:00-10:00', subject: 'AI', subjectName: 'Artificial Intelligence', professor: 'UKP', professorName: 'Prof. Umeywane Kanchan P.', room: 'A-203', building: 'Engineering Block A', type: 'Lecture', division: 'B' },
            { time: '10:00-11:00', subject: 'SPCC', subjectName: 'System Programming & Compiler Construction', professor: 'SVR', professorName: 'Prof. Shinde Vishal Rajaram', room: 'A-203', building: 'Engineering Block A', type: 'Lecture', division: 'B' },
            { time: '11:00-12:00', subject: 'Break', subjectName: 'Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '12:00-1:30', subject: 'MC', subjectName: 'Mobile Computing', professor: 'MAN', professorName: 'Prof. Mankar Ashwini N.', room: 'A-203', building: 'Engineering Block A', type: 'Lecture', division: 'B' },
            { time: '1:30-2:00', subject: 'Lunch', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '2:00-3:00', subject: 'CSS', subjectName: 'Cryptography & System Security', professor: 'MSJ', professorName: 'Prof. Manje satish J.', room: 'A-203', building: 'Engineering Block A', type: 'Lecture', division: 'B' },
        ],
        Tuesday: [
            { time: '9:00-10:00', subject: 'CSS', subjectName: 'Cryptography & System Security Lab', professor: 'MSJ', professorName: 'Prof. Manje satish J.', room: 'A-119', building: 'Engineering Block B', type: 'Lab', division: 'B' },
            { time: '10:00-11:00', subject: 'SPCC', subjectName: 'System Programming & Compiler Construction Lab', professor: 'SVR', professorName: 'Prof. Shinde Vishal Rajaram', room: 'A-112', building: 'Engineering Block A', type: 'Lab', division: 'B' },
            { time: '11:00-12:00', subject: 'Break', subjectName: 'Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '12:00-1:30', subject: 'MC', subjectName: 'Mobile Computing Lab', professor: 'MAN', professorName: 'Prof. Mankar Ashwini N.', room: 'A-118', building: 'Engineering Block B', type: 'Lab', division: 'B' },
            { time: '1:30-2:00', subject: 'Lunch', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '2:00-3:00', subject: 'AI', subjectName: 'Artificial Intelligence Lab', professor: 'UKP', professorName: 'Prof. Umeywane Kanchan P.', room: 'A-109', building: 'Engineering Block A', type: 'Lab', division: 'B' },
        ],
        Wednesday: [
            { time: '9:00-10:00', subject: 'MC', subjectName: 'Mobile Computing', professor: 'MAN', professorName: 'Prof. Mankar Ashwini N.', room: 'A-203', building: 'Engineering Block A', type: 'Lecture', division: 'B' },
            { time: '10:00-11:00', subject: 'CSS', subjectName: 'Cryptography & System Security', professor: 'MSJ', professorName: 'Prof. Manje satish J.', room: 'A-203', building: 'Engineering Block A', type: 'Lecture', division: 'B' },
            { time: '11:00-12:00', subject: 'Break', subjectName: 'Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '12:00-1:30', subject: 'AI', subjectName: 'Artificial Intelligence', professor: 'UKP', professorName: 'Prof. Umeywane Kanchan P.', room: 'A-203', building: 'Engineering Block A', type: 'Lecture', division: 'B' },
            { time: '1:30-2:00', subject: 'Lunch', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '2:00-3:00', subject: 'SPCC', subjectName: 'System Programming & Compiler Construction', professor: 'SVR', professorName: 'Prof. Shinde Vishal Rajaram', room: 'A-203', building: 'Engineering Block A', type: 'Lecture', division: 'B' },
        ],
        Thursday: [
            { time: '9:00-10:00', subject: 'SPCC', subjectName: 'System Programming & Compiler Construction', professor: 'SVR', professorName: 'Prof. Shinde Vishal Rajaram', room: 'A-203', building: 'Engineering Block A', type: 'Lecture', division: 'B' },
            { time: '10:00-11:00', subject: 'AI', subjectName: 'Artificial Intelligence', professor: 'UKP', professorName: 'Prof. Umeywane Kanchan P.', room: 'A-203', building: 'Engineering Block A', type: 'Lecture', division: 'B' },
            { time: '11:00-12:00', subject: 'Break', subjectName: 'Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '12:00-1:30', subject: 'CSS', subjectName: 'Cryptography & System Security', professor: 'MSJ', professorName: 'Prof. Manje satish J.', room: 'A-203', building: 'Engineering Block A', type: 'Lecture', division: 'B' },
            { time: '1:30-2:00', subject: 'Lunch', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '2:00-3:00', subject: 'MC', subjectName: 'Mobile Computing', professor: 'MAN', professorName: 'Prof. Mankar Ashwini N.', room: 'A-203', building: 'Engineering Block A', type: 'Lecture', division: 'B' },
        ],
        Friday: [
            { time: '9:00-10:00', subject: 'Project', subjectName: 'PROJECT DAY', professor: 'All Faculty', professorName: 'All Faculty', room: 'Various', building: 'Engineering Block', type: 'Project', division: 'B' },
            { time: '10:00-11:00', subject: 'Project', subjectName: 'PROJECT DAY', professor: 'All Faculty', professorName: 'All Faculty', room: 'Various', building: 'Engineering Block', type: 'Project', division: 'B' },
            { time: '11:00-12:00', subject: 'Break', subjectName: 'Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '12:00-1:30', subject: 'Seminar', subjectName: 'Seminar / Industry Talk', professor: 'Various', professorName: 'Various', room: 'Auditorium', building: 'Main Campus', type: 'Seminar', division: 'B' },
            { time: '1:30-2:00', subject: 'Lunch', subjectName: 'Lunch Break', professor: '', professorName: '', room: '', building: '', type: 'Break', division: '' },
            { time: '2:00-3:00', subject: 'Project', subjectName: 'PROJECT DAY', professor: 'All Faculty', professorName: 'All Faculty', room: 'Various', building: 'Engineering Block', type: 'Project', division: 'B' },
        ]
    }
};

// ============= TE (THIRD YEAR) - SEMESTER 6 ============= 
const teTimetables = {
    'TE-A': {
        semester: 6,
        academicYear: '2025-26',
        class: 'TE',
        section: 'A',
        room: 'A-111',
        location: 'A-111',
        classAdvisor: 'Prof. SVR',
        totalStudents: 45,
        effectiveFrom: '07 January 2026',
        ...yourTimetable
    },
    'TE-B': {
        semester: 6,
        academicYear: '2025-26',
        class: 'TE',
        section: 'B',
        room: 'A-112',
        location: 'A-112',
        classAdvisor: 'Prof. MSJ',
        totalStudents: 44,
        effectiveFrom: '07 January 2026',
        Monday: yourTimetable.Monday,
        Tuesday: yourTimetable.Tuesday,
        Wednesday: yourTimetable.Wednesday,
        Thursday: yourTimetable.Thursday,
        Friday: yourTimetable.Friday,
    }
};

// ============= STUDY MATERIALS ============= 
const studyMaterialsData = [
    {
        subject: 'SPCC',
        subjectName: 'System Programming & Compiler Construction',
        semester: 'Semester 6',
        materials: [
            { title: 'Compiler Design Basics', type: 'PDF', size: '2.5 MB', uploadedBy: 'SVR', date: '2026-01-07', professor: 'Prof. Shinde Vishal Rajaram' },
            { title: 'Lexical Analysis Deep Dive', type: 'Video', size: '45 MIN', uploadedBy: 'SVR', date: '2026-01-07', professor: 'Prof. Shinde Vishal Rajaram' },
            { title: 'Symbol Table Implementation', type: 'PDF', size: '1.8 MB', uploadedBy: 'SVR', date: '2026-01-06', professor: 'Prof. Shinde Vishal Rajaram' },
        ]
    },
    {
        subject: 'CSS',
        subjectName: 'Cryptography & System Security',
        semester: 'Semester 6',
        materials: [
            { title: 'Encryption Algorithms', type: 'PDF', size: '3.2 MB', uploadedBy: 'MSJ', date: '2026-01-07', professor: 'Prof. Manje satish J.' },
            { title: 'Cryptography Fundamentals', type: 'Video', size: '55 MIN', uploadedBy: 'MSJ', date: '2026-01-07', professor: 'Prof. Manje satish J.' },
            { title: 'Network Security Protocols', type: 'PDF', size: '2.1 MB', uploadedBy: 'MSJ', date: '2026-01-05', professor: 'Prof. Manje satish J.' },
        ]
    },
    {
        subject: 'MC',
        subjectName: 'Mobile Computing',
        semester: 'Semester 6',
        materials: [
            { title: 'Android Development Guide', type: 'PDF', size: '2.8 MB', uploadedBy: 'MAN', date: '2026-01-07', professor: 'Prof. Mankar Ashwini N.' },
            { title: 'iOS App Development', type: 'Video', size: '65 MIN', uploadedBy: 'MAN', date: '2026-01-06', professor: 'Prof. Mankar Ashwini N.' },
        ]
    },
];

// ============= NOTICES & ANNOUNCEMENTS ============= 
const noticesData = [
    { title: 'Semester 6 Started! 🎉', description: 'Welcome to Semester 6! First day of classes - Make sure to attend all lectures and get your textbooks ready.', type: 'Exam', date: '2026-01-07', icon: '📝', priority: 'High' },
    { title: 'Class Timetable Released', description: 'Your Semester 6 timetable has been officially released. Check the Class Timetables section for all sections.', type: 'Exam', date: '2026-01-07', icon: '📊', priority: 'High' },
    { title: 'Lab Assignments Available', description: 'First set of lab assignments for all subjects are now available in Study Materials section. Deadline: 15 January.', type: 'Holiday', date: '2026-01-07', icon: '🎉', priority: 'Medium' },
    { title: 'First Internal Assessment', description: 'First IA (Internal Assessment) scheduled for 20-25 January. Start preparing from today!', type: 'Placement', date: '2026-01-06', icon: '💼', priority: 'High' },
];

// ============= ALERTS & DEADLINES ============= 
const alertsData = [
    { title: 'First Day of Semester 6', description: 'Welcome! Attend all your classes today and meet your professors.', urgent: false, date: '2026-01-07', subject: 'General', professor: 'All Faculty' },
    { title: 'Download Course Materials', description: 'Download all study materials for SPCC, CSS, and MC from Study Materials section.', urgent: true, date: '2026-01-07', subject: 'Academic', professor: 'All Faculty' },
    { title: 'Lab Assignment 1 Released', description: 'First lab assignments released for all subjects. Deadline: 15 January', urgent: true, date: '2026-01-07', subject: 'Lab', professor: 'Lab Coordinators' },
    { title: 'First IA Starts Soon', description: 'First Internal Assessment starting 20 January. Create a study schedule now!', urgent: false, date: '2026-01-15', subject: 'Exams', professor: 'All Faculty' },
];

// ============= ASSIGNMENTS ============= 
const assignmentsData = [
    { title: 'SPCC - Welcome Assignment', subject: 'SPCC', subjectCode: 'CS601', dueDate: '2026-01-15', status: 'pending', description: 'Introduction to Compiler Design - Read Chapter 1-2 and submit a summary.', professor: 'SVR' },
    { title: 'CSS - Encryption Basics', subject: 'CSS', subjectCode: 'CS602', dueDate: '2026-01-14', status: 'pending', description: 'Understand DES and RSA encryption algorithms.', professor: 'MSJ' },
    { title: 'MC - Mobile Setup', subject: 'MC', subjectCode: 'CS603', dueDate: '2026-01-18', status: 'pending', description: 'Setup Android/iOS development environment and submit screenshots.', professor: 'MAN' },
    { title: 'AI - First Assignment', subject: 'AI', subjectCode: 'CS604', dueDate: '2026-01-20', status: 'pending', description: 'Introduction to AI - Research and write about 5 AI applications.', professor: 'UKP' },
];

// ============= ATTENDANCE DATA ============= 
const attendanceData = {
    present: 1,
    absent: 0,
    leave: 0,
    total: 1,
    percentage: function() {
        return ((this.present / this.total) * 100).toFixed(1);
    }
};

// ============= PERFORMANCE DATA ============= 
const performanceData = {
    semester5: [
        { subject: 'SPCC', marks: 92, maxMarks: 100 },
        { subject: 'CSS', marks: 88, maxMarks: 100 },
        { subject: 'MC', marks: 90, maxMarks: 100 },
        { subject: 'AI', marks: 85, maxMarks: 100 },
        { subject: 'DLOC', marks: 89, maxMarks: 100 },
    ],
    semester6: [
        { subject: 'SPCC', marks: 0, maxMarks: 100, status: 'ongoing' },
        { subject: 'CSS', marks: 0, maxMarks: 100, status: 'ongoing' },
        { subject: 'MC', marks: 0, maxMarks: 100, status: 'ongoing' },
    ],
    gpaHistory: [
        { semester: 'S5', gpa: 8.5 },
        { semester: 'S6', gpa: 0.0 },
    ]
};

// ============= PROFESSORS OF THE DAY ============= 
const professorHighlights = {
    today: {
        name: 'Prof. Shinde Vishal Rajaram',
        abbreviation: 'SVR',
        subject: 'System Programming & Compiler Construction',
        email: 'svr@sjjcet.edu.in',
        specialization: 'Compiler Design',
        experience: '15 years',
        achievements: ['Published 5 research papers', 'Winner of Best Teacher Award 2024', 'Guided 10+ capstone projects'],
        office: 'CS-301',
        officeHours: '2:00 PM - 4:00 PM (Mon, Wed, Fri)',
        quote: 'Welcome to Semester 6! Let\'s build strong foundations in compiler design. Great to see you on day one!',
        image: '👨‍🏫'
    }
};

// ============= STUDY STREAK DATA ============= 
const studyStreakData = {
    currentStreak: 1,
    bestStreak: 1,
    totalDaysStudied: 1,
    level: 'Beginner',
    lastActivityDate: '2026-01-07',
    dailyLog: [
        { date: '2026-01-07', duration: 1.5, topics: ['SPCC', 'CSS', 'MC'] },
    ]
};

// ============= QUICK TO-DO TASKS ============= 
const quickTodos = [
    { id: 1, task: 'Attend all 6 classes today', subject: 'General', priority: 'high', dueDate: '2026-01-07', completed: false },
    { id: 2, task: 'Download course materials from Study Materials', subject: 'Academic', priority: 'high', dueDate: '2026-01-07', completed: false },
    { id: 3, task: 'Meet professors and understand course expectations', subject: 'General', priority: 'medium', dueDate: '2026-01-07', completed: false },
    { id: 4, task: 'Create a study schedule for the semester', subject: 'Planning', priority: 'medium', dueDate: '2026-01-08', completed: false },
];

// ============= CHAT DATA ============= 
const students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Mike Johnson' },
];

// ============= HELPER FUNCTIONS ============= 
function getTodaySchedule() {
    const dayIndex = APP_DATE.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[dayIndex];
    
    return yourTimetable[dayName] || [];
}

function getNextClass() {
    const now = APP_DATE;
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinutes;

    const todaySchedule = getTodaySchedule();
    const upcomingClasses = todaySchedule.filter(item => {
        if (item.subject === 'Break' || item.subject === 'Lunch' || item.subject === 'Project') return false;
        const [startHour, startMin] = item.time.split('-')[0].split(':').map(Number);
        const startTime = startHour * 60 + startMin;
        return startTime >= currentTime;
    });

    return upcomingClasses.length > 0 ? upcomingClasses[0] : null;
}

function getMiniCalendar() {
    const events = [
        { date: 15, event: 'Lab Assignment Due', type: 'deadline' },
        { date: 20, event: 'First IA', type: 'exam' },
        { date: 25, event: 'IA Ends', type: 'deadline' },
    ];
    return events;
}

function getFacultyByAbbr(abbr) {
    return facultyDirectory.find(f => f.abbreviation === abbr);
}

function getSubjectDetails(code) {
    return subjectDatabase[code];
}

// ============= HELPER FUNCTION FOR LECTURE TOPICS ============= 
function getLectureTopics(subject, day, time) {
    if (!lectureTopicsMapping[subject]) return null;
    
    const key = `${day} ${time}`;
    return lectureTopicsMapping[subject][key];
}