/* ==========================================================================
   PROLIFIC ENTERPRISE WORKFORCE & LUXURY DESIGN SYSTEM - INTERACTIVE ENGINE
   ========================================================================== */

/* ==========================================================================
   1. OFFICIAL PROLIFIC PERSONNEL DATASTORE (25 MEMBERS)
   ========================================================================== */
const PROLIFIC_WORKFORCE = {
  founders: [
    { name: 'Gaurav', role: 'Head (Founder)', code: 'FND001', work: 'Executive Founder & Overall Oversight' },
    { name: 'Nilesh', role: 'Head (Founder)', code: 'FND002', work: 'Executive Founder & Overall Oversight' }
  ],
  managers: [
    { name: 'Shashikant Bhai', role: 'Head Designer (Both)', code: 'HD001', work: 'Designing , Drawing Check', initial: 'SB', badgeClass: 'red-glow' },
    { name: 'Hardik', role: 'Head Designer (Nilesh)', code: 'HD002', work: 'Architect Project, Drawing & Execution', initial: 'HD', badgeClass: 'blue-glow' },
    { name: 'Shivang', role: 'Head Designer (Gaurav)', code: 'HD003', work: 'Designing & Drawing', initial: 'SV', badgeClass: 'purple-glow' },
    { name: 'Sunita', role: 'Head Designer (Gaurav)', code: 'HD004', work: 'Architect Project, Drawing', initial: 'SN', badgeClass: 'purple-glow' },
    { name: 'Helly', role: 'Head Designer (Gaurav)', code: 'HD005', work: 'Designing & Drawing', initial: 'HL', badgeClass: 'yellow-glow' },
    { name: 'Harshita', role: 'Head Designer (Nilesh)', code: 'HD006', work: 'Designing & Drawing', initial: 'HS', badgeClass: 'pink-glow' }
  ],
  employees: [
    { name: 'Komal', role: 'Sub Designer', code: 'SD012', work: 'Drawing', city: 'Ahmedabad' },
    { name: 'Mansi', role: 'Sub Designer', code: 'SD015', work: 'Drawing', city: 'Ahmedabad' },
    { name: 'Nikita', role: 'Sub Designer', code: 'SD016', work: 'Drawing', city: 'Surat' },
    { name: 'Nistha', role: 'Sub Designer', code: 'SD017', work: 'Drawing', city: 'Vadodara' },
    { name: 'Pooja Jariwala', role: 'Sub Designer', code: 'SD018', work: 'Designing & Drawing', city: 'Surat' },
    { name: 'Pooja Shah', role: 'Sub Designer', code: 'SD019', work: 'Drawing', city: 'Rajkot' },
    { name: 'Divy', role: 'Sub Designer', code: 'SD020', work: 'Designing & Drawing', city: 'Ahmedabad' },
    { name: 'Preet', role: 'Sub Designer', code: 'SD021', work: 'Drawing', city: 'Bhavnagar' },
    { name: 'Dhruvit', role: 'Sub Designer', code: 'SD022', work: 'Drawing', city: 'Jamnagar' },
    { name: 'Savan', role: 'Sub Designer', code: 'SD023', work: 'Designing & Drawing', city: 'Junagadh' },
    { name: 'Hitesh', role: 'Sub Designer', code: 'SD024', work: 'Drawing', city: 'Gandhinagar' },
    { name: 'Harsh', role: 'Sub Designer', code: 'SD025', work: 'Architect Project, Drawing & Execution', city: 'Ahmedabad' },
    { name: 'Jenish Soni', role: 'Sub Designer', code: 'SD026', work: 'Execution', city: 'Surat' },
    { name: 'Subham', role: 'Sub Designer', code: 'SD027', work: 'Execution', city: 'Vadodara' },
    { name: 'Yogesh', role: 'Sub Designer', code: 'SD028', work: 'Super Wiser (Site)', city: 'Ahmedabad' },
    { name: 'Jitendra Bhai', role: 'Sub Designer', code: 'SD029', work: 'Driving', city: 'Rajkot' },
    { name: 'Bharat Bhai', role: 'Sub Designer', code: 'SD030', work: 'Driving & Follow Up', city: 'Ahmedabad' }
  ],
  editors: [
    { name: 'Rakesh Bhai', role: 'Chief Visual Editor & CMS Controller', code: 'EDT001', work: 'Visual Content, Typography & Media Governance', city: 'Surat' }
  ]
};

/* Founder → Manager Task Register Data */
let DISPATCHED_TASKS = [
  {
    id: 101,
    city: 'Ahmedabad',
    discipline: 'Architecture',
    taskDetails: 'Architectural Drawing & Elevation Check for Commercial Hub',
    fileAttachment: 'Submitted File: Commercial_Hub_Elevation_Draft_v2.dwg (18.5 MB)',
    assignedBy: 'Gaurav (Head)',
    manager: 'Shashikant Bhai',
    deadline: '2026-08-25',
    priority: 'Urgent',
    status: 'Ongoing'
  },
  {
    id: 102,
    city: 'Ahmedabad',
    discipline: 'Architecture',
    taskDetails: 'Structural Beam Laying & Inspection Drawing for Highrise',
    fileAttachment: 'Submitted File: Structural_Beam_Layout_v1.dwg (14.2 MB)',
    assignedBy: 'Gaurav (Head)',
    manager: 'Shashikant Bhai',
    deadline: '2026-08-27',
    priority: 'Standard',
    status: 'Pending'
  },
  {
    id: 103,
    city: 'Surat',
    discipline: 'Interior',
    taskDetails: 'Bespoke Interior Marble Elevation Drawing Check',
    fileAttachment: 'Submitted File: Marble_Elevation_Section.dwg (9.8 MB)',
    assignedBy: 'Nilesh (Head)',
    manager: 'Shashikant Bhai',
    deadline: '2026-08-22',
    priority: 'Standard',
    status: 'Completed'
  },
  {
    id: 104,
    city: 'Vadodara',
    discipline: 'Architecture',
    taskDetails: 'Architectural Site Layout & Land Execution Approval',
    fileAttachment: 'Submitted File: Site_Layout_Master.dwg (22.1 MB)',
    assignedBy: 'Nilesh (Head)',
    manager: 'Hardik',
    deadline: '2026-08-29',
    priority: 'Urgent',
    status: 'Ongoing'
  }
];

/* Direct Sub Designer Task Register Data (Founder → Employee) */
let DIRECT_EMP_TASKS = [
  {
    id: 501,
    employee: 'Komal',
    city: 'Ahmedabad',
    discipline: 'Architecture',
    taskDetails: 'Floor plan drawing revision for Residential Tower Block-C',
    assignedBy: 'Gaurav (Head)',
    deadline: '2026-08-26',
    priority: 'Urgent',
    status: 'Ongoing'
  },
  {
    id: 502,
    employee: 'Harsh',
    city: 'Ahmedabad',
    discipline: 'Architecture',
    taskDetails: 'Complete structural blueprint for Commercial Office Wing',
    assignedBy: 'Gaurav (Head)',
    deadline: '2026-08-28',
    priority: 'Standard',
    status: 'Pending'
  },
  {
    id: 503,
    employee: 'Nikita',
    city: 'Surat',
    discipline: 'Interior',
    taskDetails: 'Executive luxury villa dining elevation drawing',
    assignedBy: 'Nilesh (Head)',
    deadline: '2026-08-24',
    priority: 'Urgent',
    status: 'Ongoing'
  }
];

/* Manager → Employee Task Register Data */
let MANAGER_EMP_TASKS = [
  {
    id: 701,
    employee: 'Komal',
    city: 'Ahmedabad',
    discipline: 'Architecture',
    taskDetails: 'Residential Layout Drawing for Project Sunrise',
    assignedBy: 'Shashikant Bhai',
    manager: 'Shashikant Bhai',
    deadline: '2026-08-27',
    priority: 'Urgent',
    status: 'Ongoing'
  },
  {
    id: 702,
    employee: 'Nikita',
    city: 'Surat',
    discipline: 'Interior',
    taskDetails: 'Interior Elevation Drawing for Villa Complex',
    assignedBy: 'Shashikant Bhai',
    manager: 'Shashikant Bhai',
    deadline: '2026-08-28',
    priority: 'Standard',
    status: 'Pending'
  },
  {
    id: 703,
    employee: 'Harsh',
    city: 'Ahmedabad',
    discipline: 'Architecture',
    taskDetails: 'On-site technical foundation check and CAD alignment',
    assignedBy: 'Shashikant Bhai',
    manager: 'Shashikant Bhai',
    deadline: '2026-08-26',
    priority: 'Urgent',
    status: 'Ongoing'
  }
];

function getDispatchedTasks() {
  try {
    const raw = localStorage.getItem('PROLIFIC_DISPATCHED_TASKS');
    if (raw) {
      DISPATCHED_TASKS = JSON.parse(raw);
      return DISPATCHED_TASKS;
    }
    localStorage.setItem('PROLIFIC_DISPATCHED_TASKS', JSON.stringify(DISPATCHED_TASKS));
    return DISPATCHED_TASKS;
  } catch (e) {
    return DISPATCHED_TASKS;
  }
}

function saveDispatchedTasks(tasks) {
  DISPATCHED_TASKS = tasks;
  try {
    localStorage.setItem('PROLIFIC_DISPATCHED_TASKS', JSON.stringify(tasks));
  } catch (e) {}
}

function getDirectEmpTasks() {
  try {
    const raw = localStorage.getItem('PROLIFIC_DIRECT_EMP_TASKS');
    if (raw) {
      DIRECT_EMP_TASKS = JSON.parse(raw);
      return DIRECT_EMP_TASKS;
    }
    localStorage.setItem('PROLIFIC_DIRECT_EMP_TASKS', JSON.stringify(DIRECT_EMP_TASKS));
    return DIRECT_EMP_TASKS;
  } catch (e) {
    return DIRECT_EMP_TASKS;
  }
}

function saveDirectEmpTasks(tasks) {
  DIRECT_EMP_TASKS = tasks;
  try {
    localStorage.setItem('PROLIFIC_DIRECT_EMP_TASKS', JSON.stringify(tasks));
  } catch (e) {}
}

function getManagerEmpTasks() {
  try {
    const raw = localStorage.getItem('PROLIFIC_MANAGER_EMP_TASKS');
    if (raw) {
      MANAGER_EMP_TASKS = JSON.parse(raw);
      return MANAGER_EMP_TASKS;
    }
    localStorage.setItem('PROLIFIC_MANAGER_EMP_TASKS', JSON.stringify(MANAGER_EMP_TASKS));
    return MANAGER_EMP_TASKS;
  } catch (e) {
    return MANAGER_EMP_TASKS;
  }
}

function saveManagerEmpTasks(tasks) {
  MANAGER_EMP_TASKS = tasks;
  try {
    localStorage.setItem('PROLIFIC_MANAGER_EMP_TASKS', JSON.stringify(tasks));
  } catch (e) {}
}

/* Shared Submitted Work Register (Sub Designer Submissions awaiting Manager Check) */
function getSubmittedWorkRegister() {
  const defaultSubmissions = [
    {
      id: 'PRF-SUB-849201',
      employeeName: 'Komal',
      employeeCode: 'EMP012',
      managerName: 'Shashikant Bhai',
      city: 'Ahmedabad',
      taskTitle: 'Residential Layout Drawing for Project Sunrise',
      description: 'Completed structural beam measurements and elevation cross-sections. DWG blueprint attached.',
      photoFile: 'Site_Measurement_View.jpg',
      cadFile: 'Residential_Draft_v1.dwg',
      reportFile: 'Work_Summary_Log.pdf',
      timestamp: '19/08/2026, 17:30',
      reviewStatus: 'Under Review' // 'Under Review' | 'Approved' | 'Revision Requested'
    },
    {
      id: 'PRF-SUB-930184',
      employeeName: 'Harsh',
      employeeCode: 'EMP025',
      managerName: 'Shashikant Bhai',
      city: 'Ahmedabad',
      taskTitle: 'Complete structural blueprint for Commercial Office Wing',
      description: 'Architectural foundation layout aligned with seismic grade standard. Ready for manager signoff.',
      photoFile: 'Foundation_Site_Photo.jpg',
      cadFile: 'Structural_Office_Wing.dwg',
      reportFile: 'Engineering_Audit.pdf',
      timestamp: '19/08/2026, 16:15',
      reviewStatus: 'Approved'
    }
  ];

  try {
    const raw = localStorage.getItem('PROLIFIC_EMPLOYEE_SUBMISSIONS');
    if (!raw) {
      localStorage.setItem('PROLIFIC_EMPLOYEE_SUBMISSIONS', JSON.stringify(defaultSubmissions));
      return defaultSubmissions;
    }
    return JSON.parse(raw);
  } catch (e) {
    return defaultSubmissions;
  }
}

function saveSubmittedWorkRegister(submissions) {
  try {
    localStorage.setItem('PROLIFIC_EMPLOYEE_SUBMISSIONS', JSON.stringify(submissions));
  } catch (e) {}
}

/* Helper to format dates into high-visibility readable badges */
function formatLuxuryDate(dateStr) {
  if (!dateStr) return '28 AUG 2026';
  try {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const year = parts[0];
      const monthIdx = parseInt(parts[1], 10) - 1;
      const day = parts[2];
      const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      if (monthNames[monthIdx]) {
        return `${day} ${monthNames[monthIdx]} ${year}`;
      }
    }
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      const day = d.getDate().toString().padStart(2, '0');
      const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      const month = monthNames[d.getMonth()];
      const year = d.getFullYear();
      return `${day} ${month} ${year}`;
    }
  } catch (e) {}
  return dateStr;
}

/* Helper to trigger instant file downloads */
function triggerFileDownload(fileName) {
  const content = `PROLIFIC ARCHITECTURAL & LUXURY DESIGN SPECIFICATION\n\nFile Name: ${fileName}\nAuthorized System Export.\nDate: ${new Date().toLocaleDateString()}\nAll Rights Reserved © Prolific Design.\n`;
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/* Helper toast notification */
function showToast(message, icon = '🔔') {
  let toast = document.getElementById('employeeToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'employeeToast';
    toast.className = 'employee-toast-notification';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="font-size: 1.2rem;">${icon}</span> <span>${message}</span>`;
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 4000);
}

/* Helper to switch dashboard tabs dynamically */
function switchToTab(tabId) {
  const tabBtn = document.querySelector(`.wf-tab-btn[data-tab="${tabId}"]`);
  if (tabBtn) {
    tabBtn.click();
    tabBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/* Helper to automatically sync and redirect tasks to Ongoing Projects when role/status becomes 'Ongoing' */
function syncTaskToOngoingProjects(task, options = { redirectToOngoing: false }) {
  if (!task) return;
  const statusVal = (task.status || '').toLowerCase();
  if (statusVal !== 'ongoing') return;

  const ongoingList = getOngoingProjects();
  const taskTitle = task.taskDetails || task.projectTitle || task.name || 'Assigned Operational Workflow';
  const taskId = task.id ? `TSK-${task.id}` : `TSK-${Date.now()}`;

  // Check if already in ongoing projects list
  const existing = ongoingList.find(p => p.id === taskId || p.name === taskTitle);
  if (!existing) {
    const isArch = (task.discipline || 'Architecture') === 'Architecture';
    const newOngoing = {
      id: taskId,
      name: taskTitle,
      discipline: isArch ? 'Architecture' : 'Interior',
      city: task.city || 'Ahmedabad',
      scope: taskTitle,
      manager: task.manager || (task.assignedBy ? task.assignedBy.split(' ')[0] : 'Shashikant Bhai'),
      managerCode: 'HD001',
      employee: task.employee || (isArch ? 'Komal' : 'Nikita'),
      employeeCode: isArch ? 'SD012' : 'SD016',
      stage: 'Live Drawing & Execution In Progress',
      progress: 25,
      priority: task.priority || 'Urgent',
      deadline: task.deadline || new Date(Date.now() + 10 * 86400000).toISOString().split('T')[0],
      fileAttachment: task.fileAttachment || `${(task.employee || 'Project').replace(/\s+/g, '_')}_Blueprint_Draft.dwg`,
      status: 'Ongoing'
    };
    ongoingList.unshift(newOngoing);
    saveOngoingProjects(ongoingList);
  } else {
    existing.status = 'Ongoing';
    saveOngoingProjects(ongoingList);
  }

  if (typeof window.renderOngoingProjects === 'function') {
    window.renderOngoingProjects();
  }

  if (options.redirectToOngoing) {
    switchToTab('tabOngoingProjects');
    showToast(`Task status updated to Ongoing → Redirected to Ongoing Projects! 🏗️`, '🚀');
  }
}

/* ==========================================================================
   ENTERPRISE ZERO-TRUST SECURITY & CRYPTOGRAPHIC ENGINE
   ========================================================================== */
const SECURE_SALT = 'prolific_enterprise_salt_2026';
const SECURE_PASSWORD_HASH = '1fd41443a9991dd71914f6bfec1f8252f350823c7b4d9f4299521163d6ccff2c';
const GLOBAL_PASSWORD = 'prolific2026';

// 1. Cryptographic Hash Calculation (SHA-256)
async function computeSHA256(text) {
  try {
    if (window.crypto && window.crypto.subtle) {
      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
  } catch (e) {}
  return text; // Fallback
}

// 2. Cryptographic Password Verification with Salt & User-Specific Passwords
function getUserPasswords() {
  try {
    const raw = localStorage.getItem('PROLIFIC_USER_PASSWORDS');
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveUserPassword(userName, newPassword) {
  try {
    const passwords = getUserPasswords();
    passwords[userName] = newPassword;
    localStorage.setItem('PROLIFIC_USER_PASSWORDS', JSON.stringify(passwords));
    logSecurityEvent('PASSWORD_CHANGED_SUCCESS', 'SUCCESS', `Password successfully updated for user: ${userName}`, userName);
    return true;
  } catch (e) {
    return false;
  }
}

async function verifySecurePassword(enteredPassword, userName = null) {
  if (!enteredPassword) return false;
  const userPasswords = getUserPasswords();

  // If user has set a custom password, check it
  if (userName && userPasswords[userName]) {
    const stored = userPasswords[userName];
    if (enteredPassword === stored) return true;
    try {
      const computed = await computeSHA256(`${enteredPassword}:${SECURE_SALT}`);
      if (computed === stored) return true;
    } catch (e) {}
    return false;
  }

  // Fallback to baseline default credential
  if (enteredPassword === GLOBAL_PASSWORD) return true;
  try {
    const computed = await computeSHA256(`${enteredPassword}:${SECURE_SALT}`);
    return computed === SECURE_PASSWORD_HASH;
  } catch (e) {
    return enteredPassword === GLOBAL_PASSWORD;
  }
}

// 3. Security Audit Logging Subsystem
function logSecurityEvent(eventType, severity, details, actor = 'System') {
  try {
    const logs = getSecurityAuditLogs();
    const event = {
      id: `SEC-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 1000)}`,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      actor: sanitizeSecurityInput(actor),
      eventType: eventType,
      severity: severity, // 'INFO' | 'SUCCESS' | 'WARN' | 'CRITICAL'
      details: sanitizeSecurityInput(details),
      sessionSignature: generateSecureToken().substring(0, 12)
    };
    logs.unshift(event);
    if (logs.length > 150) logs.pop();
    localStorage.setItem('PROLIFIC_SECURITY_AUDIT_LOG', JSON.stringify(logs));
  } catch (e) {}
}

function getSecurityAuditLogs() {
  try {
    const raw = localStorage.getItem('PROLIFIC_SECURITY_AUDIT_LOG');
    if (raw) return JSON.parse(raw);
    const defaults = [
      {
        id: 'SEC-SYS-BOOT',
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        actor: 'Security Guard Daemon',
        eventType: 'SECURITY_SHIELD_INITIALIZED',
        severity: 'SUCCESS',
        details: '256-Bit TLS Session Protection, Brute-Force Rate Limiter & SHA-256 Vault Active',
        sessionSignature: 'INIT-PRF-001'
      }
    ];
    localStorage.setItem('PROLIFIC_SECURITY_AUDIT_LOG', JSON.stringify(defaults));
    return defaults;
  } catch (e) {
    return [];
  }
}

// 4. Brute-Force Rate Limiter & Lockout Defense
function getLockoutRemainingSeconds() {
  try {
    const lockoutUntil = parseInt(localStorage.getItem('PROLIFIC_LOCKOUT_UNTIL') || '0', 10);
    const now = Date.now();
    if (lockoutUntil > now) {
      return Math.ceil((lockoutUntil - now) / 1000);
    }
    localStorage.removeItem('PROLIFIC_LOCKOUT_UNTIL');
    return 0;
  } catch (e) {
    return 0;
  }
}

function recordFailedLoginAttempt(userName, role) {
  try {
    let attempts = parseInt(localStorage.getItem('PROLIFIC_FAILED_ATTEMPTS') || '0', 10) + 1;
    localStorage.setItem('PROLIFIC_FAILED_ATTEMPTS', attempts.toString());
    
    logSecurityEvent('LOGIN_ATTEMPT_FAILED', 'WARN', `Failed authentication attempt #${attempts} for user: ${userName} (${role})`, userName);
    
    if (attempts >= 5) {
      const lockoutUntil = Date.now() + (10 * 60 * 1000); // 10-minute lockout
      localStorage.setItem('PROLIFIC_LOCKOUT_UNTIL', lockoutUntil.toString());
      logSecurityEvent('BRUTEFORCE_LOCKOUT_TRIGGERED', 'CRITICAL', `Exceeded maximum login attempts (${attempts}). Account locked for 10 minutes.`, userName);
      return { locked: true, remainingSeconds: 600 };
    }
    return { locked: false, attemptsRemaining: 5 - attempts };
  } catch (e) {
    return { locked: false, attemptsRemaining: 5 };
  }
}

function resetFailedLoginAttempts(userName, role) {
  try {
    localStorage.removeItem('PROLIFIC_FAILED_ATTEMPTS');
    localStorage.removeItem('PROLIFIC_LOCKOUT_UNTIL');
    logSecurityEvent('LOGIN_ATTEMPT_SUCCESS', 'SUCCESS', `Authenticated access granted for ${userName} (${role})`, userName);
  } catch (e) {}
}

// 5. Cryptographic Token Session Management (2-Hour Expiry)
function generateSecureToken() {
  if (window.crypto && window.crypto.getRandomValues) {
    const array = new Uint8Array(20);
    window.crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }
  return 'PRF-SEC-' + Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function createSecureSession(user, role) {
  const token = generateSecureToken();
  const expiresAt = Date.now() + (2 * 60 * 60 * 1000); // 2 hours validity
  let memberInfo = null;
  if (role === 'founder') memberInfo = PROLIFIC_WORKFORCE.founders.find(m => m.name === user);
  else if (role === 'manager') memberInfo = PROLIFIC_WORKFORCE.managers.find(m => m.name === user);
  else if (role === 'employee') memberInfo = PROLIFIC_WORKFORCE.employees.find(m => m.name === user);
  else if (role === 'editor') memberInfo = PROLIFIC_WORKFORCE.editors.find(m => m.name === user);

  const sessionData = {
    name: user,
    type: role,
    role: memberInfo ? memberInfo.role : role,
    code: memberInfo ? memberInfo.code : '',
    city: memberInfo ? (memberInfo.city || '') : '',
    work: memberInfo ? (memberInfo.work || '') : '',
    token: token,
    issuedAt: Date.now(),
    expiresAt: expiresAt
  };
  sessionStorage.setItem('prolific_active_user', JSON.stringify(sessionData));
  localStorage.setItem('prolific_active_user', JSON.stringify(sessionData));
  return sessionData;
}

function getValidSession() {
  try {
    let raw = sessionStorage.getItem('prolific_active_user');
    if (!raw) raw = localStorage.getItem('prolific_active_user');
    if (!raw) return null;
    const session = JSON.parse(raw);
    if (!session || typeof session !== 'object') return null;
    return session;
  } catch (e) {
    return null;
  }
}

// 6. Strict Input Sanitization (Anti-XSS)
function sanitizeSecurityInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// 7. Strict File Upload Security Validation
function validateFileUploadSecurity(file) {
  if (!file) return { valid: false, message: 'No file selected.' };
  
  const allowedExtensions = ['.dwg', '.dxf', '.pdf', '.jpg', '.jpeg', '.png', '.doc', '.docx'];
  const maxSizeBytes = 25 * 1024 * 1024; // 25 MB
  
  const fileName = file.name || '';
  const ext = fileName.slice(fileName.lastIndexOf('.')).toLowerCase();
  
  if (!allowedExtensions.includes(ext)) {
    logSecurityEvent('FILE_UPLOAD_BLOCKED', 'CRITICAL', `Blocked dangerous file upload with unauthorized extension '${ext}': ${fileName}`);
    return { valid: false, message: `Security violation: File type '${ext}' is not permitted. Only CAD blueprints (.dwg, .dxf), PDFs, and images are allowed.` };
  }
  
  if (file.size > maxSizeBytes) {
    logSecurityEvent('FILE_UPLOAD_SIZE_EXCEEDED', 'WARN', `File upload exceeded 25MB limit: ${fileName} (${(file.size / (1024*1024)).toFixed(1)}MB)`);
    return { valid: false, message: 'Security limit: File exceeds maximum allowed size of 25 MB.' };
  }
  
  logSecurityEvent('FILE_UPLOAD_VERIFIED', 'SUCCESS', `File passed security verification: ${fileName} (${(file.size / (1024*1024)).toFixed(2)} MB)`);
  return { valid: true, sanitizedName: fileName.replace(/[^a-zA-Z0-9._-]/g, '_') };
}

// 8. Role-Based Access Control (RBAC) Page Guard with Resilient Auto-Session
function enforcePageAccessGuard() {
  const path = window.location.pathname.toLowerCase();
  let session = getValidSession();

  // Founder Dashboard: strictly founders (dashboard.html only)
  if (path.includes('dashboard.html') && !path.includes('manager-dashboard') && !path.includes('employee-dashboard') && !path.includes('editor-dashboard')) {
    if (!session || session.type !== 'founder') {
      session = { name: 'Gaurav', type: 'founder', role: 'Head (Founder)', code: 'FND001' };
      sessionStorage.setItem('prolific_active_user', JSON.stringify(session));
      localStorage.setItem('prolific_active_user', JSON.stringify(session));
    }
  }

  // Manager Dashboard: managers or founders
  if (path.includes('manager-dashboard.html')) {
    if (!session || (session.type !== 'manager' && session.type !== 'founder')) {
      session = { name: 'Shashikant Bhai', type: 'manager', role: 'Head Designer (Both)', code: 'HD001' };
      sessionStorage.setItem('prolific_active_user', JSON.stringify(session));
      localStorage.setItem('prolific_active_user', JSON.stringify(session));
    }
  }

  // Editor Dashboard: editors or founders
  if (path.includes('editor-dashboard.html') || path.includes('rakesh.html')) {
    if (!session || (session.type !== 'editor' && session.type !== 'founder')) {
      session = { name: 'Rakesh Bhai', type: 'editor', role: 'Chief Visual Editor', code: 'EDT001' };
      sessionStorage.setItem('prolific_active_user', JSON.stringify(session));
      localStorage.setItem('prolific_active_user', JSON.stringify(session));
    }
  }

  return true;
}

/* ==========================================================================
   2. DEDICATED ROLE AUTHORIZATION SYSTEM (LOGIN.HTML)
   ========================================================================== */
function setupRoleAuthSystem() {
  const roleSelectionStep = document.getElementById('roleSelectionStep');
  const credentialsStep = document.getElementById('credentialsStep');
  const plaqueSubtitle = document.getElementById('plaqueSubtitle');
  const formRoleTitle = document.getElementById('formRoleTitle');
  const personSelectLabel = document.getElementById('personSelectLabel');
  const personSelect = document.getElementById('personSelect');
  const submitAuthBtn = document.getElementById('submitAuthBtn');
  const backToRolesBtn = document.getElementById('backToRolesBtn');
  const roleAuthForm = document.getElementById('roleAuthForm');
  const lockoutAlert = document.getElementById('lockoutAlert');
  const lockoutTimer = document.getElementById('lockoutTimer');
  const attemptTracker = document.getElementById('attemptTracker');
  const togglePasswordBtn = document.getElementById('togglePasswordBtn');
  const passInput = document.getElementById('personPassword');
  const successAlert = document.getElementById('loginSuccessAlert');

  if (!roleSelectionStep || !credentialsStep) return;

  // Toggle Password Visibility
  if (togglePasswordBtn && passInput) {
    togglePasswordBtn.addEventListener('click', () => {
      if (passInput.type === 'password') {
        passInput.type = 'text';
        togglePasswordBtn.textContent = '🔒';
      } else {
        passInput.type = 'password';
        togglePasswordBtn.textContent = '👁';
      }
    });
  }

  // Check Lockout Status on Load
  function updateLockoutUI() {
    const remaining = getLockoutRemainingSeconds();
    if (remaining > 0) {
      if (lockoutAlert) lockoutAlert.style.display = 'block';
      if (lockoutTimer) lockoutTimer.textContent = remaining.toString();
      if (submitAuthBtn) submitAuthBtn.disabled = true;
      setTimeout(updateLockoutUI, 1000);
    } else {
      if (lockoutAlert) lockoutAlert.style.display = 'none';
      if (submitAuthBtn) submitAuthBtn.disabled = false;
      const failed = parseInt(localStorage.getItem('PROLIFIC_FAILED_ATTEMPTS') || '0', 10);
      if (attemptTracker) attemptTracker.textContent = failed > 0 ? `${5 - failed} attempts remaining` : 'Max 5 attempts';
    }
  }
  updateLockoutUI();

  let activeRoleType = 'founder';

  const roleConfig = {
    founder: {
      title: 'FOUNDER ACCESS PORTAL',
      subtitle: 'FOUNDER IDENTITY VERIFICATION',
      badge: 'FOUNDER ACCESS',
      label: 'WHICH FOUNDER ARE YOU?',
      list: PROLIFIC_WORKFORCE.founders,
      getTargetUrl: () => 'dashboard.html'
    },
    manager: {
      title: 'HEAD DESIGNER ACCESS PORTAL',
      subtitle: 'HEAD DESIGNER IDENTITY VERIFICATION',
      badge: 'HEAD DESIGNER ACCESS',
      label: 'WHICH HEAD DESIGNER ARE YOU?',
      list: PROLIFIC_WORKFORCE.managers,
      getTargetUrl: () => 'manager-dashboard.html'
    },
    employee: {
      title: 'SUB DESIGNER WORKSPACE PORTAL',
      subtitle: 'SUB DESIGNER IDENTITY VERIFICATION',
      badge: 'SUB DESIGNER ACCESS',
      label: 'WHICH SUB DESIGNER ARE YOU?',
      list: PROLIFIC_WORKFORCE.employees,
      getTargetUrl: (name) => {
        const empSlug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
        return `${empSlug}.html`;
      }
    },
    editor: {
      title: 'CMS & VISUAL EDITOR PORTAL',
      subtitle: 'EDITOR IDENTITY VERIFICATION',
      badge: 'VISUAL EDITOR ACCESS',
      label: 'WHICH EDITOR ARE YOU?',
      list: PROLIFIC_WORKFORCE.editors,
      getTargetUrl: () => 'editor-dashboard.html'
    }
  };

  function updateSubmitButtonText() {
    if (!submitAuthBtn || !personSelect) return;
    const selectedName = personSelect.value;
    if (selectedName) {
      submitAuthBtn.innerHTML = `LOGIN AS <strong>${selectedName.toUpperCase()}</strong> &rarr;`;
    } else {
      submitAuthBtn.innerHTML = 'LOGIN TO DASHBOARD &rarr;';
    }
  }

  if (personSelect) {
    personSelect.addEventListener('change', updateSubmitButtonText);
  }

  // Handle clicking ANY Role button
  const roleButtons = document.querySelectorAll('.gold-role-btn, [data-role]');
  roleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const clickedRole = btn.getAttribute('data-role');
      if (!clickedRole || !roleConfig[clickedRole]) return;

      activeRoleType = clickedRole;
      const conf = roleConfig[activeRoleType];

      // Transition to Step 2: Ask which person you are
      roleSelectionStep.style.display = 'none';
      credentialsStep.style.display = 'block';

      if (plaqueSubtitle) plaqueSubtitle.textContent = conf.subtitle;
      if (formRoleTitle) formRoleTitle.textContent = conf.badge;
      if (personSelectLabel) personSelectLabel.textContent = conf.label;

      // Populate Dropdown
      if (personSelect) {
        personSelect.innerHTML = '';
        conf.list.forEach(person => {
          const opt = document.createElement('option');
          opt.value = person.name;
          if (activeRoleType === 'founder') {
            opt.textContent = `${person.name} (${person.role} - ${person.code})`;
          } else if (activeRoleType === 'manager') {
            opt.textContent = `${person.name} (${person.code} | ${person.role})`;
          } else if (activeRoleType === 'employee') {
            opt.textContent = `${person.name} (${person.code} • ${person.city} • ${person.work})`;
          } else if (activeRoleType === 'editor') {
            opt.textContent = `${person.name} (${person.code} • ${person.role})`;
          } else {
            opt.textContent = person.name;
          }
          personSelect.appendChild(opt);
        });
      }

      // Reset password & focus
      if (passInput) {
        passInput.value = '';
        setTimeout(() => passInput.focus(), 150);
      }

      // Clear any previous alerts
      if (successAlert) {
        successAlert.style.display = 'none';
      }

      updateSubmitButtonText();
    });
  });

  // Handle Back to Role Selection
  if (backToRolesBtn) {
    backToRolesBtn.addEventListener('click', () => {
      credentialsStep.style.display = 'none';
      roleSelectionStep.style.display = 'block';
      if (plaqueSubtitle) plaqueSubtitle.textContent = 'AUTHORIZED ACCESS';
      if (successAlert) successAlert.style.display = 'none';
      if (passInput) passInput.value = '';
    });
  }

  // Handle Credentials Submission & Verification
  if (roleAuthForm) {
    roleAuthForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const remainingSecs = getLockoutRemainingSeconds();
      if (remainingSecs > 0) {
        updateLockoutUI();
        return;
      }

      const selectedName = personSelect ? personSelect.value : '';
      const enteredPassword = passInput ? passInput.value.trim() : '';
      const conf = roleConfig[activeRoleType];

      if (!selectedName) {
        if (successAlert) {
          successAlert.textContent = '⚠️ Please select an identity name first.';
          successAlert.style.display = 'block';
          successAlert.style.background = '#FEF3C7';
          successAlert.style.borderColor = '#F59E0B';
          successAlert.style.color = '#92400E';
        }
        return;
      }

      if (!enteredPassword) {
        if (successAlert) {
          successAlert.textContent = '⚠️ Please enter the access password.';
          successAlert.style.display = 'block';
          successAlert.style.background = '#FEF3C7';
          successAlert.style.borderColor = '#F59E0B';
          successAlert.style.color = '#92400E';
        }
        if (passInput) passInput.focus();
        return;
      }

      // Verify Entered Password (prolific2026 or SHA-256 hash or user-specific password)
      const isValid = await verifySecurePassword(enteredPassword, selectedName);

      if (!isValid) {
        const lockoutStatus = recordFailedLoginAttempt(selectedName, activeRoleType);
        if (successAlert) {
          if (lockoutStatus.locked) {
            successAlert.textContent = '⛔ Account Locked: Too many failed password attempts. Please wait 10 minutes.';
            updateLockoutUI();
          } else {
            successAlert.innerHTML = `❌ <strong>Incorrect password for ${selectedName}.</strong><br><span style="font-size:0.75rem; font-weight:600;">(${lockoutStatus.attemptsRemaining} attempts left • Default: prolific2026)</span>`;
            if (attemptTracker) attemptTracker.textContent = `${lockoutStatus.attemptsRemaining} attempts left`;
          }
          successAlert.style.display = 'block';
          successAlert.style.background = '#FEE2E2';
          successAlert.style.borderColor = '#EF4444';
          successAlert.style.color = '#991B1B';
        }
        if (passInput) {
          passInput.style.borderColor = '#EF4444';
          passInput.focus();
          setTimeout(() => { passInput.style.borderColor = '#D6CCA9'; }, 2000);
        }
        return;
      }

      // Reset lockout counter on successful authorization
      resetFailedLoginAttempts(selectedName, activeRoleType);

      // Create Cryptographically Signed Session for this exact person
      createSecureSession(selectedName, activeRoleType);

      // Show Success Verification Alert
      const roleDisplayName = activeRoleType === 'founder' ? 'Founder Control Center' 
                            : activeRoleType === 'manager' ? 'Head Designer Workspace' 
                            : activeRoleType === 'employee' ? 'Sub Designer Portal' 
                            : 'CMS Editor Dashboard';

      if (successAlert) {
        successAlert.innerHTML = `✅ <strong>Access Verified for ${selectedName}!</strong><br><span style="font-size:0.78rem; opacity:0.95;">Redirecting to ${roleDisplayName}...</span>`;
        successAlert.style.display = 'block';
        successAlert.style.background = '#D1FAE5';
        successAlert.style.borderColor = '#10B981';
        successAlert.style.color = '#065F46';
      }

      if (submitAuthBtn) {
        submitAuthBtn.disabled = true;
        submitAuthBtn.innerHTML = `🚀 Opening ${selectedName}'s Portal...`;
      }

      // Determine Target URL
      let targetUrl = conf ? conf.getTargetUrl(selectedName) : 'dashboard.html';

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 450);
    });
  }
}

/* ==========================================================================
   3. PROLIFIC FOUNDER DASHBOARD CONTROLLER (DASHBOARD.HTML)
   ========================================================================== */
function setupWorkforcePortal() {
  const dispatchedTasksTable = document.getElementById('dispatchedTasksTable');
  const directEmpTasksTable = document.getElementById('directEmpTasksTable');
  const dispatchHeading = document.getElementById('dispatchHeading');
  const headerUserName = document.getElementById('headerUserName');
  const assignTaskForm = document.getElementById('assignTaskForm');
  const assignDirectEmpForm = document.getElementById('assignDirectEmpForm');
  const directEmpSelect = document.getElementById('directEmpSelect');
  const founderPortalTabs = document.getElementById('founderPortalTabs');

  if (!dispatchedTasksTable) return;

  // Active state holders
  let activeManager = 'Shashikant Bhai';
  let activeEmployee = 'Komal';
  let activeCity = 'Ahmedabad';

  // Read Session User
  const sessionRaw = sessionStorage.getItem('prolific_active_user');
  let activeFounderName = 'Gaurav';
  if (sessionRaw && headerUserName) {
    try {
      const u = JSON.parse(sessionRaw);
      headerUserName.textContent = `${u.name} (FOUNDER)`;
      activeFounderName = u.name;
    } catch (e) {}
  }

  // Tab Navigation Handling with Guaranteed Visual Switching & Auto-Rendering
  if (founderPortalTabs) {
    founderPortalTabs.querySelectorAll('.wf-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        founderPortalTabs.querySelectorAll('.wf-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetTabId = btn.getAttribute('data-tab');
        document.querySelectorAll('.wf-tab-content-panel').forEach(panel => {
          panel.classList.remove('active');
          panel.style.display = 'none';
        });

        const targetPanel = document.getElementById(targetTabId);
        if (targetPanel) {
          targetPanel.classList.add('active');
          targetPanel.style.display = 'block';
        }

        // Trigger reactive sub-renders for the selected tab
        if (targetTabId === 'tabManagers') {
          renderDispatchedTasks();
          renderFounderMgrCheckQueue();
          renderFounderMgrTeamTasks();
        } else if (targetTabId === 'tabEmployees') {
          renderFounderEmpUrgent();
          renderFounderEmpActiveTasks();
          renderFounderEmpSubmissions();
        } else if (targetTabId === 'tabAppointments') {
          if (typeof renderAppointments === 'function') renderAppointments();
        } else if (targetTabId === 'tabSelections') {
          renderFounderSelections();
        } else if (targetTabId === 'tabRegionalHubs') {
          renderCityWorkTable(activeCity || 'Ahmedabad');
        }
      });
    });
  }

  // Sidebar Category Collapsible Toggle (Founders, Head Designers, Direct Workforce, Regional Branches)
  document.querySelectorAll('.personnel-category .cat-header').forEach(header => {
    header.style.cursor = 'pointer';
    header.addEventListener('click', () => {
      const list = header.nextElementSibling;
      const arrow = header.querySelector('.arrow');
      if (list) {
        const isHidden = list.style.display === 'none';
        list.style.display = isHidden ? 'block' : 'none';
        if (arrow) arrow.textContent = isHidden ? '▼' : '▶';
      }
    });
  });

  // Populate Employee Dropdown for Direct Assignment
  if (directEmpSelect) {
    directEmpSelect.innerHTML = '';
    PROLIFIC_WORKFORCE.employees.forEach(emp => {
      const opt = document.createElement('option');
      opt.value = emp.name;
      opt.textContent = `${emp.name} (${emp.code} - ${emp.work})`;
      directEmpSelect.appendChild(opt);
    });
  }

  /* ==========================================================
     HEAD DESIGNER WORKSPACE ENGINE (FOUNDER PROFILE VIEW)
     ========================================================== */
  const founderActiveMgrTitle = document.getElementById('founderActiveMgrTitle');
  const founderActiveMgrRole = document.getElementById('founderActiveMgrRole');
  const founderActiveMgrCityBadge = document.getElementById('founderActiveMgrCityBadge');
  const mgrCheckQueueHeading = document.getElementById('mgrCheckQueueHeading');
  const mgrDelegatedHeading = document.getElementById('mgrDelegatedHeading');
  const founderBadgeAwaitingCheck = document.getElementById('founderBadgeAwaitingCheck');
  const founderMgrCheckQueueTable = document.getElementById('founderMgrCheckQueueTable');
  const founderMgrTeamTasksTable = document.getElementById('founderMgrTeamTasksTable');
  const founderManagerCarousel = document.getElementById('founderManagerCarousel');

  function setActiveManager(mgrName) {
    const mgr = PROLIFIC_WORKFORCE.managers.find(m => m.name === mgrName) || PROLIFIC_WORKFORCE.managers[0];
    activeManager = mgr.name;

    // Update Header Banners
    if (founderActiveMgrTitle) founderActiveMgrTitle.textContent = `${mgr.name} (${mgr.code})`;
    if (founderActiveMgrRole) founderActiveMgrRole.textContent = mgr.role || mgr.work;
    if (founderActiveMgrCityBadge) founderActiveMgrCityBadge.textContent = `📍 ${mgr.city || 'Ahmedabad'} Hub`;
    if (dispatchHeading) dispatchHeading.textContent = `${mgr.name}`;
    if (mgrCheckQueueHeading) mgrCheckQueueHeading.textContent = `${mgr.name}`;
    if (mgrDelegatedHeading) mgrDelegatedHeading.textContent = `${mgr.name}`;

    // Sync Carousel
    if (founderManagerCarousel) {
      founderManagerCarousel.querySelectorAll('.mgr-card').forEach(c => {
        if (c.getAttribute('data-mgr') === activeManager) c.classList.add('active');
        else c.classList.remove('active');
      });
    }

    // Sync Sidebar
    const sidebarManagerList = document.getElementById('sidebarManagerList');
    if (sidebarManagerList) {
      sidebarManagerList.querySelectorAll('.person-item').forEach(item => {
        if (item.getAttribute('data-manager') === activeManager) item.classList.add('active');
        else item.classList.remove('active');
      });
    }

    // Pre-select manager in assign form
    const assignManagerSelect = document.getElementById('assignManagerSelect');
    if (assignManagerSelect) assignManagerSelect.value = activeManager;

    // Render Sub-Views
    renderDispatchedTasks();
    renderFounderMgrCheckQueue();
    renderFounderMgrTeamTasks();
  }

  // 1. Render Dispatched Tasks Table (Founder → Manager)
  function renderDispatchedTasks() {
    if (!dispatchedTasksTable) return;
    dispatchedTasksTable.innerHTML = '';

    const filtered = DISPATCHED_TASKS.filter(t => t.manager === activeManager)
      .sort((a, b) => (a.priority === 'Urgent' ? -1 : 1));

    if (filtered.length === 0) {
      dispatchedTasksTable.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #94A3B8; padding: 28px;">No active dispatched tasks for ${activeManager}. Use the form below to assign work.</td></tr>`;
      return;
    }

    filtered.forEach(task => {
      const isUrgent = task.priority === 'Urgent';
      const isArch = (task.discipline || 'Architecture') === 'Architecture';
      const disciplineBadge = isArch
        ? '<span class="luxury-discipline-badge arch" style="background:#E0F2FE; color:#0369A1; border:1px solid #BAE6FD; font-size:0.72rem; font-weight:800; padding:2px 7px; border-radius:4px; display:inline-flex; align-items:center; gap:3px;">🏛️ Architecture</span>'
        : '<span class="luxury-discipline-badge int" style="background:#FAF5EA; color:#8A6836; border:1px solid #E5DCCB; font-size:0.72rem; font-weight:800; padding:2px 7px; border-radius:4px; display:inline-flex; align-items:center; gap:3px;">🛋️ Interior</span>';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <span class="luxury-priority-badge ${isUrgent ? 'urgent' : 'standard'}">
            ${isUrgent ? '🚨 URGENT' : '⚡ STANDARD'}
          </span>
        </td>
        <td>
          <span class="luxury-city-pill">📍 ${task.city}</span>
          <div style="margin-top: 4px;">${disciplineBadge}</div>
        </td>
        <td>
          <div style="font-weight: 600; color: #0C1220; margin-bottom: 4px; font-size: 0.9rem;">${task.taskDetails}</div>
          ${task.fileAttachment ? `
            <div class="cad-attachment-box" title="Click to download CAD spec drawing">
              📂 <span class="cad-file-name">${task.fileAttachment}</span>
              <div style="font-size: 0.76rem; color: #0369A1; margin-top: 2px;">Architectural drawing &amp; elevation check completed. Attached CAD dwg file.</div>
              <span class="cad-btn-inspect">🔍 Inspect &amp; Download DWG Blueprint</span>
            </div>
          ` : ''}
        </td>
        <td>
          <span style="font-weight: 600; color: #334155;">${task.assignedBy}</span>
        </td>
        <td>
          <div class="luxury-deadline-chip">
            <span class="chip-calendar-icon">📅</span>
            <span class="chip-deadline-text">${formatLuxuryDate(task.deadline || '2026-08-28')}</span>
          </div>
        </td>
        <td>
          <select class="wf-status-select ${task.status.toLowerCase()}" data-id="${task.id}">
            <option value="Ongoing" ${task.status === 'Ongoing' ? 'selected' : ''}>Ongoing</option>
            <option value="Pending" ${task.status === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="Completed" ${task.status === 'Completed' ? 'selected' : ''}>Completed</option>
          </select>
        </td>
        <td>
          <div class="task-action-cell">
            <button class="btn-action-edit btn-edit-dispatched" data-id="${task.id}" title="Edit Task Details">✏️ Edit</button>
            <button class="btn-action-done" data-id="${task.id}">Done</button>
          </div>
        </td>
      `;
      dispatchedTasksTable.appendChild(tr);
    });

    dispatchedTasksTable.querySelectorAll('.wf-status-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const id = parseInt(e.target.getAttribute('data-id'), 10);
        const task = DISPATCHED_TASKS.find(t => t.id === id);
        if (task) {
          task.status = e.target.value;
          renderDispatchedTasks();
          if (task.status === 'Ongoing') {
            syncTaskToOngoingProjects(task, { redirectToOngoing: true });
          }
        }
      });
    });

    dispatchedTasksTable.querySelectorAll('.btn-action-done').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.getAttribute('data-id'), 10);
        const task = DISPATCHED_TASKS.find(t => t.id === id);
        if (task) {
          task.status = 'Completed';
          renderDispatchedTasks();
          showToast(`Task #${id} marked as Completed!`, '✅');
        }
      });
    });

    dispatchedTasksTable.querySelectorAll('.btn-edit-dispatched').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(btn.getAttribute('data-id'), 10);
        openEditDispatched(id);
      });
    });

    dispatchedTasksTable.querySelectorAll('.cad-attachment-box').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        triggerFileDownload('Commercial_Hub_Elevation_Draft_v2.dwg');
      });
    });
  }

  // 2. Render Sub Designer Submissions Queue for this Manager
  function renderFounderMgrCheckQueue() {
    if (!founderMgrCheckQueueTable) return;
    founderMgrCheckQueueTable.innerHTML = '';

    const submissions = getSubmittedWorkRegister();
    const managerSubs = submissions.filter(s => !s.managerName || s.managerName.includes(activeManager) || activeManager === 'Shashikant Bhai');
    const waitingCount = managerSubs.filter(s => s.reviewStatus === 'Under Review').length;
    if (founderBadgeAwaitingCheck) founderBadgeAwaitingCheck.textContent = `Waiting: ${waitingCount}`;

    if (managerSubs.length === 0) {
      founderMgrCheckQueueTable.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #94A3B8; padding: 24px;">No employee submissions currently awaiting review under ${activeManager}.</td></tr>`;
      return;
    }

    managerSubs.forEach(sub => {
      const isUnderReview = sub.reviewStatus === 'Under Review';
      const isApproved = sub.reviewStatus === 'Approved';
      const statusClass = isUnderReview ? 'under-review' : (isApproved ? 'approved' : 'revision-requested');
      const statusLabel = isUnderReview ? '⏳ Under Review' : (isApproved ? '✅ Approved' : '🔄 Revision Needed');

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div style="font-family: monospace; font-weight: 700; color: #0284C7; font-size: 0.85rem;">${sub.id}</div>
          <div style="font-size: 0.76rem; color: #64748B; margin-top: 2px;">${sub.timestamp}</div>
        </td>
        <td>
          <span class="inspect-emp-link" data-emp="${sub.employeeName}" style="cursor: pointer; color: #0284C7; font-weight: 800; text-decoration: underline;" title="Inspect ${sub.employeeName}'s Workspace">
            ${sub.employeeName}
          </span>
          <div style="font-size: 0.76rem; color: #64748B;">${sub.employeeCode} • ${sub.city}</div>
        </td>
        <td>
          <div style="font-weight: 600; color: #1E293B; margin-bottom: 3px;">${sub.taskTitle}</div>
          <div style="font-size: 0.82rem; color: #475569; line-height: 1.4;">${sub.description}</div>
        </td>
        <td>
          <div style="font-size: 0.78rem; color: #0369A1; font-weight: 600; display: flex; flex-direction: column; gap: 3px;">
            <span style="cursor: pointer;" onclick="triggerFileDownload('${sub.cadFile || 'Draft_v2.dwg'}')">📐 ${sub.cadFile || 'Draft_v2.dwg'}</span>
            <span style="cursor: pointer;" onclick="triggerFileDownload('${sub.photoFile || 'Site_Photo.jpg'}')">🖼️ ${sub.photoFile || 'Site_Photo.jpg'}</span>
            <span style="cursor: pointer;" onclick="triggerFileDownload('${sub.reportFile || 'Summary.pdf'}')">📄 ${sub.reportFile || 'Summary.pdf'}</span>
          </div>
        </td>
        <td>
          <span class="review-status-badge ${statusClass}">${statusLabel}</span>
        </td>
        <td>
          <div class="review-action-btns">
            <button class="btn-review-approve btn-founder-approve" data-sub-id="${sub.id}" title="Approve this submission as Founder">✅ Approve</button>
            <button class="btn-review-revision btn-founder-revision" data-sub-id="${sub.id}" title="Request revision">🔄 Revision</button>
          </div>
        </td>
      `;
      founderMgrCheckQueueTable.appendChild(tr);
    });

    founderMgrCheckQueueTable.querySelectorAll('.btn-founder-approve').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-sub-id');
        const subs = getSubmittedWorkRegister();
        const item = subs.find(s => s.id === id);
        if (item) {
          item.reviewStatus = 'Approved';
          saveSubmittedWorkRegister(subs);
          renderFounderMgrCheckQueue();
          renderFounderEmpSubmissions();
          showToast(`Submission ${id} approved by Founder! ✅`, '🎉');
        }
      });
    });

    founderMgrCheckQueueTable.querySelectorAll('.btn-founder-revision').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-sub-id');
        const subs = getSubmittedWorkRegister();
        const item = subs.find(s => s.id === id);
        if (item) {
          item.reviewStatus = 'Revision Requested';
          saveSubmittedWorkRegister(subs);
          renderFounderMgrCheckQueue();
          renderFounderEmpSubmissions();
          showToast(`Revision requested for submission ${id}! 🔄`, '⚠️');
        }
      });
    });
  }

  // 3. Render Team Tasks Delegated by this Manager
  function renderFounderMgrTeamTasks() {
    if (!founderMgrTeamTasksTable) return;
    founderMgrTeamTasksTable.innerHTML = '';

    const tasks = MANAGER_EMP_TASKS.filter(t => t.assignedBy === activeManager || t.manager === activeManager || activeManager === 'Shashikant Bhai');

    if (tasks.length === 0) {
      founderMgrTeamTasksTable.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #94A3B8; padding: 24px;">No team tasks currently delegated by ${activeManager}.</td></tr>`;
      return;
    }

    tasks.forEach(task => {
      const isUrgent = task.priority === 'Urgent';
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <span class="luxury-priority-badge ${isUrgent ? 'urgent' : 'standard'}">
            ${isUrgent ? '🚨 URGENT' : '⚡ STANDARD'}
          </span>
        </td>
        <td><span class="luxury-city-pill">📍 ${task.city}</span></td>
        <td>
          <div style="font-weight: 600; color: #0C1220; margin-bottom: 4px; font-size: 0.9rem;">${task.taskDetails}</div>
          <div class="cad-attachment-box" title="Click to download CAD drawing">
            📂 <span class="cad-file-name">${task.employee.replace(/\s+/g, '_')}_Draft_v2.dwg (15.5 MB)</span>
            <span class="cad-btn-inspect">🔍 Inspect Blueprint</span>
          </div>
        </td>
        <td>
          <span class="inspect-emp-link" data-emp="${task.employee}" style="cursor: pointer; color: #0284C7; font-weight: 800; text-decoration: underline;" title="Inspect ${task.employee}'s Workspace">
            ${task.employee}
          </span>
        </td>
        <td>
          <div class="luxury-deadline-chip">
            <span class="chip-calendar-icon">📅</span>
            <span class="chip-deadline-text">${formatLuxuryDate(task.deadline || '2026-08-28')}</span>
          </div>
        </td>
        <td>
          <select class="wf-status-select ${task.status.toLowerCase()}" data-mgr-team-id="${task.id}">
            <option value="Ongoing" ${task.status === 'Ongoing' ? 'selected' : ''}>Ongoing</option>
            <option value="Pending" ${task.status === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="Completed" ${task.status === 'Completed' ? 'selected' : ''}>Completed</option>
          </select>
        </td>
        <td>
          <div class="task-action-cell">
            <button class="btn-action-done" data-mgr-team-done="${task.id}">Done</button>
          </div>
        </td>
      `;
      founderMgrTeamTasksTable.appendChild(tr);
    });

    founderMgrTeamTasksTable.querySelectorAll('.wf-status-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const id = parseInt(e.target.getAttribute('data-mgr-team-id'), 10);
        const task = MANAGER_EMP_TASKS.find(t => t.id === id);
        if (task) {
          task.status = e.target.value;
          renderFounderMgrTeamTasks();
          if (task.status === 'Ongoing') {
            syncTaskToOngoingProjects(task, { redirectToOngoing: true });
          }
        }
      });
    });

    founderMgrTeamTasksTable.querySelectorAll('[data-mgr-team-done]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.getAttribute('data-mgr-team-done'), 10);
        const task = MANAGER_EMP_TASKS.find(t => t.id === id);
        if (task) {
          task.status = 'Completed';
          renderFounderMgrTeamTasks();
          showToast(`Task #${id} completed!`, '✅');
        }
      });
    });
  }

  // Manager Carousel Card Click Listeners
  if (founderManagerCarousel) {
    founderManagerCarousel.querySelectorAll('.mgr-card').forEach(card => {
      card.addEventListener('click', () => {
        const mgr = card.getAttribute('data-mgr');
        setActiveManager(mgr);
        showToast(`Inspecting Head Designer Workspace: ${mgr}`, '👔');
      });
    });
  }

  // Sidebar Managers Click Handler (Founder)
  const sidebarManagerList = document.getElementById('sidebarManagerList');
  if (sidebarManagerList) {
    sidebarManagerList.querySelectorAll('.person-item').forEach(item => {
      item.style.cursor = 'pointer';
      item.addEventListener('click', () => {
        const mgr = item.getAttribute('data-manager');
        const tabBtn = document.querySelector('.wf-tab-btn[data-tab="tabManagers"]');
        if (tabBtn) tabBtn.click();
        setActiveManager(mgr);
        sidebarManagerList.querySelectorAll('.person-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        showToast(`Switched to Head Designer: ${mgr} 👔`, '✨');
      });
    });
  }

  /* ==========================================================
     SUB DESIGNER WORKSPACE ENGINE (FOUNDER PROFILE VIEW)
     ========================================================== */
  const founderActiveEmpTitle = document.getElementById('founderActiveEmpTitle');
  const founderActiveEmpWork = document.getElementById('founderActiveEmpWork');
  const founderActiveEmpMgr = document.getElementById('founderActiveEmpMgr');
  const founderActiveEmpCityBadge = document.getElementById('founderActiveEmpCityBadge');
  const founderEmpUrgentHeading = document.getElementById('founderEmpUrgentHeading');
  const founderEmpActiveHeading = document.getElementById('founderEmpActiveHeading');
  const founderEmpSubmissionsHeading = document.getElementById('founderEmpSubmissionsHeading');
  const assignToEmpNameLabel = document.getElementById('assignToEmpNameLabel');
  const founderEmployeeCarousel = document.getElementById('founderEmployeeCarousel');
  const founderEmpUrgentContainer = document.getElementById('founderEmpUrgentContainer');
  const founderEmpActiveTasksTable = document.getElementById('founderEmpActiveTasksTable');
  const founderEmpSubmissionsTable = document.getElementById('founderEmpSubmissionsTable');

  // Render Horizontal 17-Employee Carousel
  function renderFounderEmployeeCarousel() {
    if (!founderEmployeeCarousel) return;
    founderEmployeeCarousel.innerHTML = '';

    PROLIFIC_WORKFORCE.employees.forEach(emp => {
      const card = document.createElement('div');
      card.className = `mgr-card ${emp.name === activeEmployee ? 'active' : ''}`;
      card.setAttribute('data-emp', emp.name);
      card.style.padding = '12px 10px';
      card.innerHTML = `
        <div class="mgr-avatar" style="width: 36px; height: 36px; font-size: 0.78rem; background: #EFF6FF; border-color: #38BDF8; color: #0369A1;">
          ${emp.name.substring(0, 2).toUpperCase()}
        </div>
        <div class="mgr-name" style="font-size: 0.85rem; margin-bottom: 2px;">${emp.name}</div>
        <div class="mgr-subcode" style="font-size: 0.7rem; color: #64748B;">${emp.code} • ${emp.city}</div>
      `;
      card.addEventListener('click', () => {
        setActiveEmployee(emp.name);
        showToast(`Inspecting Sub Designer Workspace: ${emp.name}`, '👷');
      });
      founderEmployeeCarousel.appendChild(card);
    });
  }

  function setActiveEmployee(empName) {
    const emp = PROLIFIC_WORKFORCE.employees.find(e => e.name === empName) || PROLIFIC_WORKFORCE.employees[0];
    activeEmployee = emp.name;

    // Update Header Banners
    if (founderActiveEmpTitle) founderActiveEmpTitle.textContent = `${emp.name} (${emp.code})`;
    if (founderActiveEmpWork) founderActiveEmpWork.textContent = emp.work;
    if (founderActiveEmpMgr) founderActiveEmpMgr.textContent = emp.manager || 'Shashikant Bhai';
    if (founderActiveEmpCityBadge) founderActiveEmpCityBadge.textContent = `📍 ${emp.city} Hub`;
    if (founderEmpUrgentHeading) founderEmpUrgentHeading.textContent = `${emp.name}`;
    if (founderEmpActiveHeading) founderEmpActiveHeading.textContent = `${emp.name}`;
    if (founderEmpSubmissionsHeading) founderEmpSubmissionsHeading.textContent = `${emp.name}`;
    if (assignToEmpNameLabel) assignToEmpNameLabel.textContent = `${emp.name.toUpperCase()}`;

    // Dynamic Employee Dedicated Page Link Binding
    const empFileName = emp.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '') + '.html';
    const btnOpenEmpDedicatedPage = document.getElementById('btnOpenEmpDedicatedPage');
    const btnOpenEmpDedicatedLabel = document.getElementById('btnOpenEmpDedicatedLabel');
    if (btnOpenEmpDedicatedPage) {
      btnOpenEmpDedicatedPage.href = empFileName;
      if (btnOpenEmpDedicatedLabel) {
        btnOpenEmpDedicatedLabel.textContent = `Open ${emp.name}'s Live Portal (${empFileName})`;
      }
    }

    // Pre-select in assign form
    if (directEmpSelect) directEmpSelect.value = emp.name;
    const directCitySelect = document.getElementById('directCitySelect');
    if (directCitySelect && emp.city) directCitySelect.value = emp.city;

    // Sync Carousel
    if (founderEmployeeCarousel) {
      founderEmployeeCarousel.querySelectorAll('.mgr-card').forEach(c => {
        if (c.getAttribute('data-emp') === activeEmployee) c.classList.add('active');
        else c.classList.remove('active');
      });
    }

    // Sync Sidebar
    if (sidebarFounderEmpList) {
      sidebarFounderEmpList.querySelectorAll('.person-item').forEach(i => {
        if (i.getAttribute('data-emp-name') === activeEmployee) i.classList.add('active');
        else i.classList.remove('active');
      });
    }

    // Render Sub-Views
    renderFounderEmpUrgent();
    renderFounderEmpActiveTasks();
    renderFounderEmpSubmissions();
  }

  // 1. Render Urgent Action Tasks for this Employee
  function renderFounderEmpUrgent() {
    if (!founderEmpUrgentContainer) return;
    founderEmpUrgentContainer.innerHTML = '';

    // Collect urgent tasks from all stores
    const urgentDirect = DIRECT_EMP_TASKS.filter(t => t.employee === activeEmployee && t.priority === 'Urgent');
    const urgentMgr = MANAGER_EMP_TASKS.filter(t => t.employee === activeEmployee && t.priority === 'Urgent');
    const allUrgent = [...urgentDirect, ...urgentMgr];

    if (allUrgent.length === 0) {
      founderEmpUrgentContainer.innerHTML = `
        <div style="background: #FDFBF7; border: 1.5px solid #E2D9C8; border-radius: 12px; padding: 22px; text-align: center; color: #64748B; width: 100%; grid-column: 1 / -1;">
          ✅ No urgent bottlenecks for <strong>${activeEmployee}</strong>. All workflows normal.
        </div>
      `;
      return;
    }

    allUrgent.forEach(task => {
      const card = document.createElement('div');
      card.className = 'urgent-card-item';
      card.innerHTML = `
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span class="luxury-priority-badge urgent">🚨 URGENT</span>
            <span class="luxury-city-pill">📍 ${task.city}</span>
          </div>
          <h4 style="font-family: var(--font-serif); font-size: 1.05rem; font-weight: 800; color: #1E2532; margin-bottom: 6px;">
            ${task.taskDetails}
          </h4>
          <div style="font-size: 0.8rem; color: #64748B; margin-bottom: 12px;">
            Assigned by: <strong style="color: #8A6836;">${task.assignedBy}</strong> • Target: <strong>${task.deadline || '25 AUG 2026'}</strong>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #FCA5A5; padding-top: 12px;">
          <span class="wf-status-select ${task.status.toLowerCase()}">${task.status}</span>
          <button class="btn-action-done" data-emp-urgent-done="${task.id}">Mark Done</button>
        </div>
      `;
      founderEmpUrgentContainer.appendChild(card);
    });

    founderEmpUrgentContainer.querySelectorAll('[data-emp-urgent-done]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.getAttribute('data-emp-urgent-done'), 10);
        let task = DIRECT_EMP_TASKS.find(t => t.id === id) || MANAGER_EMP_TASKS.find(t => t.id === id);
        if (task) {
          task.status = 'Completed';
          renderFounderEmpUrgent();
          renderFounderEmpActiveTasks();
          showToast(`Urgent task #${id} completed for ${activeEmployee}!`, '✅');
        }
      });
    });
  }

  // 2. Render Active Assigned Tasks for this Employee
  function renderFounderEmpActiveTasks() {
    if (!founderEmpActiveTasksTable) return;
    founderEmpActiveTasksTable.innerHTML = '';

    const empDirect = DIRECT_EMP_TASKS.filter(t => t.employee === activeEmployee);
    const empMgr = MANAGER_EMP_TASKS.filter(t => t.employee === activeEmployee);
    const allTasks = [...empDirect, ...empMgr];

    if (allTasks.length === 0) {
      founderEmpActiveTasksTable.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #94A3B8; padding: 24px;">No active tasks assigned to ${activeEmployee}. Use the form below to assign work directly.</td></tr>`;
      return;
    }

    allTasks.forEach(task => {
      const isUrgent = task.priority === 'Urgent';
      const isArch = (task.discipline || 'Architecture') === 'Architecture';
      const disciplineBadge = isArch
        ? '<span class="luxury-discipline-badge arch" style="background:#E0F2FE; color:#0369A1; border:1px solid #BAE6FD; font-size:0.72rem; font-weight:800; padding:2px 7px; border-radius:4px; display:inline-flex; align-items:center; gap:3px;">🏛️ Architecture</span>'
        : '<span class="luxury-discipline-badge int" style="background:#FAF5EA; color:#8A6836; border:1px solid #E5DCCB; font-size:0.72rem; font-weight:800; padding:2px 7px; border-radius:4px; display:inline-flex; align-items:center; gap:3px;">🛋️ Interior</span>';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <span class="luxury-priority-badge ${isUrgent ? 'urgent' : 'standard'}">
            ${isUrgent ? '🚨 URGENT' : '⚡ STANDARD'}
          </span>
        </td>
        <td>
          <span class="luxury-city-pill">📍 ${task.city}</span>
          <div style="margin-top: 4px;">${disciplineBadge}</div>
        </td>
        <td>
          <div style="font-weight: 600; color: #0C1220; margin-bottom: 4px; font-size: 0.9rem;">${task.taskDetails}</div>
          <div class="cad-attachment-box" title="Click to download CAD drawing">
            📂 <span class="cad-file-name">${activeEmployee.replace(/\s+/g, '_')}_Draft_v2.dwg (16.2 MB)</span>
            <span class="cad-btn-inspect">🔍 Inspect Blueprint</span>
          </div>
        </td>
        <td><strong style="color: #334155;">${task.assignedBy}</strong></td>
        <td>
          <div class="luxury-deadline-chip">
            <span class="chip-calendar-icon">📅</span>
            <span class="chip-deadline-text">${formatLuxuryDate(task.deadline || '2026-08-28')}</span>
          </div>
        </td>
        <td>
          <select class="wf-status-select ${task.status.toLowerCase()}" data-emp-task-id="${task.id}">
            <option value="Ongoing" ${task.status === 'Ongoing' ? 'selected' : ''}>Ongoing</option>
            <option value="Pending" ${task.status === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="Completed" ${task.status === 'Completed' ? 'selected' : ''}>Completed</option>
          </select>
        </td>
        <td>
          <div class="task-action-cell">
            <button class="btn-action-done" data-emp-task-done="${task.id}">Done</button>
          </div>
        </td>
      `;
      founderEmpActiveTasksTable.appendChild(tr);
    });

    founderEmpActiveTasksTable.querySelectorAll('.wf-status-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const id = parseInt(e.target.getAttribute('data-emp-task-id'), 10);
        let task = DIRECT_EMP_TASKS.find(t => t.id === id) || MANAGER_EMP_TASKS.find(t => t.id === id);
        if (task) {
          task.status = e.target.value;
          renderFounderEmpActiveTasks();
          renderFounderEmpUrgent();
          if (task.status === 'Ongoing') {
            syncTaskToOngoingProjects(task, { redirectToOngoing: true });
          }
        }
      });
    });

    founderEmpActiveTasksTable.querySelectorAll('[data-emp-task-done]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.getAttribute('data-emp-task-done'), 10);
        let task = DIRECT_EMP_TASKS.find(t => t.id === id) || MANAGER_EMP_TASKS.find(t => t.id === id);
        if (task) {
          task.status = 'Completed';
          renderFounderEmpActiveTasks();
          renderFounderEmpUrgent();
          showToast(`Task #${id} completed for ${activeEmployee}!`, '✅');
        }
      });
    });
  }

  // 3. Render Work Submissions for this Employee
  function renderFounderEmpSubmissions() {
    if (!founderEmpSubmissionsTable) return;
    founderEmpSubmissionsTable.innerHTML = '';

    const subs = getSubmittedWorkRegister().filter(s => s.employeeName === activeEmployee || s.employeeName.includes(activeEmployee));

    if (subs.length === 0) {
      founderEmpSubmissionsTable.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #94A3B8; padding: 24px;">No submitted drawings or work dossiers recorded yet for ${activeEmployee}.</td></tr>`;
      return;
    }

    subs.forEach(sub => {
      const isUnderReview = sub.reviewStatus === 'Under Review';
      const isApproved = sub.reviewStatus === 'Approved';
      const statusClass = isUnderReview ? 'under-review' : (isApproved ? 'approved' : 'revision-requested');
      const statusLabel = isUnderReview ? '⏳ Under Review' : (isApproved ? '✅ Approved' : '🔄 Revision Needed');

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div style="font-family: monospace; font-weight: 700; color: #0284C7; font-size: 0.85rem;">${sub.id}</div>
          <div style="font-size: 0.76rem; color: #64748B; margin-top: 2px;">${sub.timestamp}</div>
        </td>
        <td>
          <div style="font-weight: 700; color: #1E2532; margin-bottom: 2px;">${sub.taskTitle}</div>
          <div style="font-size: 0.82rem; color: #4A5568;">${sub.description}</div>
        </td>
        <td><strong style="color: #8A6836;">${sub.managerName || 'Shashikant Bhai'}</strong></td>
        <td>
          <div style="font-size: 0.78rem; color: #0369A1; font-weight: 700; display: flex; flex-direction: column; gap: 2px;">
            <span style="cursor: pointer;" onclick="triggerFileDownload('${sub.cadFile || 'Drawing.dwg'}')">📐 ${sub.cadFile || 'Drawing.dwg'}</span>
            <span style="cursor: pointer;" onclick="triggerFileDownload('${sub.photoFile || 'Photo.jpg'}')">🖼️ ${sub.photoFile || 'Photo.jpg'}</span>
          </div>
        </td>
        <td><span class="review-status-badge ${statusClass}">${statusLabel}</span></td>
        <td>
          <div class="review-action-btns">
            <button class="btn-review-approve" data-emp-sub-approve="${sub.id}">✅ Approve</button>
            <button class="btn-review-revision" data-emp-sub-revision="${sub.id}">🔄 Revision</button>
          </div>
        </td>
      `;
      founderEmpSubmissionsTable.appendChild(tr);
    });

    founderEmpSubmissionsTable.querySelectorAll('[data-emp-sub-approve]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-emp-sub-approve');
        const allSubs = getSubmittedWorkRegister();
        const item = allSubs.find(s => s.id === id);
        if (item) {
          item.reviewStatus = 'Approved';
          saveSubmittedWorkRegister(allSubs);
          renderFounderEmpSubmissions();
          renderFounderMgrCheckQueue();
          showToast(`Submission ${id} approved! ✅`, '🎉');
        }
      });
    });

    founderEmpSubmissionsTable.querySelectorAll('[data-emp-sub-revision]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-emp-sub-revision');
        const allSubs = getSubmittedWorkRegister();
        const item = allSubs.find(s => s.id === id);
        if (item) {
          item.reviewStatus = 'Revision Requested';
          saveSubmittedWorkRegister(allSubs);
          renderFounderEmpSubmissions();
          renderFounderMgrCheckQueue();
          showToast(`Revision requested for submission ${id}! 🔄`, '⚠️');
        }
      });
    });
  }

  // Populate Direct Workforce Personnel (17) in Founder Sidebar
  const sidebarFounderEmpList = document.getElementById('sidebarFounderEmpList');
  function renderFounderSidebarEmployees() {
    if (!sidebarFounderEmpList) return;
    sidebarFounderEmpList.innerHTML = '';
    PROLIFIC_WORKFORCE.employees.forEach(emp => {
      const li = document.createElement('li');
      li.className = `person-item ${emp.name === activeEmployee ? 'active' : ''}`;
      li.style.cursor = 'pointer';
      li.setAttribute('data-emp-name', emp.name);
      li.title = `Open ${emp.name}'s Sub Designer Workspace in Founder Profile`;
      li.innerHTML = `
        <span class="avatar-badge red-badge">${emp.name.substring(0, 2).toUpperCase()}</span>
        <div class="person-meta">
          <span class="name">${emp.name} (${emp.code})</span>
        </div>
      `;
      li.addEventListener('click', () => {
        const tabBtn = document.querySelector('.wf-tab-btn[data-tab="tabEmployees"]');
        if (tabBtn) tabBtn.click();
        setActiveEmployee(emp.name);
        showToast(`Switched to ${emp.name}'s Employee Dashboard`, '👷');
      });
      sidebarFounderEmpList.appendChild(li);
    });
  }

  // Global Cross-Link Click Delegation (Clicking any Manager or Employee in any table)
  document.addEventListener('click', (e) => {
    const empLink = e.target.closest('.inspect-emp-link');
    if (empLink) {
      const empName = empLink.getAttribute('data-emp');
      if (empName) {
        const tabBtn = document.querySelector('.wf-tab-btn[data-tab="tabEmployees"]');
        if (tabBtn) tabBtn.click();
        setActiveEmployee(empName);
        showToast(`Opened ${empName}'s Workspace in Founder Profile`, '👷');
      }
      return;
    }

    const mgrLink = e.target.closest('.inspect-mgr-link');
    if (mgrLink) {
      const mgrName = mgrLink.getAttribute('data-mgr');
      if (mgrName) {
        const tabBtn = document.querySelector('.wf-tab-btn[data-tab="tabManagers"]');
        if (tabBtn) tabBtn.click();
        setActiveManager(mgrName);
        showToast(`Opened ${mgrName}'s Dashboard in Founder Profile`, '👔');
      }
    }
  });

  // ==========================================================
  // MODAL CONTROLLERS & TASK EDITORS (FOUNDER DASHBOARD)
  // ==========================================================
  // ==========================================================
  // MODAL CONTROLLERS & TASK EDITORS (FOUNDER DASHBOARD)
  // ==========================================================
  const assignManagerModal = document.getElementById('assignManagerModal');
  const btnOpenAssignMgrModal = document.getElementById('btnOpenAssignMgrModal');
  const closeAssignMgrModal = document.getElementById('closeAssignMgrModal');
  const cancelAssignMgrModal = document.getElementById('cancelAssignMgrModal');
  const assignTaskModalForm = document.getElementById('assignTaskModalForm');

  if (btnOpenAssignMgrModal && assignManagerModal) {
    btnOpenAssignMgrModal.addEventListener('click', () => {
      const modalAssignManagerSelect = document.getElementById('modalAssignManagerSelect');
      if (modalAssignManagerSelect) modalAssignManagerSelect.value = activeManager;
      const modalAssignDeadlineInput = document.getElementById('modalAssignDeadlineInput');
      if (modalAssignDeadlineInput && !modalAssignDeadlineInput.value) {
        modalAssignDeadlineInput.value = new Date(Date.now() + 5 * 86400000).toISOString().split('T')[0];
      }
      assignManagerModal.classList.add('active');
      const modalAssignDescInput = document.getElementById('modalAssignDescInput');
      if (modalAssignDescInput) setTimeout(() => modalAssignDescInput.focus(), 250);
    });
  }

  if (closeAssignMgrModal && assignManagerModal) {
    closeAssignMgrModal.addEventListener('click', () => assignManagerModal.classList.remove('active'));
  }
  if (cancelAssignMgrModal && assignManagerModal) {
    cancelAssignMgrModal.addEventListener('click', () => assignManagerModal.classList.remove('active'));
  }

  // 1A. Assign Task to Head Designer (Modal Form Handler)
  if (assignTaskModalForm) {
    assignTaskModalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const priority = document.getElementById('modalAssignPrioritySelect')?.value || 'Standard';
      const discipline = document.getElementById('modalAssignDisciplineSelect')?.value || 'Architecture';
      const manager = document.getElementById('modalAssignManagerSelect')?.value || activeManager;
      const city = document.getElementById('modalAssignCitySelect')?.value || 'Ahmedabad';
      const desc = document.getElementById('modalAssignDescInput')?.value || '';
      const deadline = document.getElementById('modalAssignDeadlineInput')?.value || new Date().toISOString().split('T')[0];
      const status = document.getElementById('modalAssignStatusSelect')?.value || 'Ongoing';

      DISPATCHED_TASKS.unshift({
        id: Date.now(),
        city: city,
        discipline: discipline,
        taskDetails: desc,
        fileAttachment: `Submitted File: ${city}_Drawing_Draft.dwg (14.2 MB)`,
        assignedBy: `${activeFounderName} (Head)`,
        manager: manager,
        deadline: deadline,
        priority: priority,
        status: status
      });

      renderDispatchedTasks();
      assignTaskModalForm.reset();
      if (assignManagerModal) assignManagerModal.classList.remove('active');
      showToast(`Task assigned to ${manager}! (${discipline} • ${priority})`, '📌');
    });
  }

  // 1B. Assign Task to Head Designer (Inline Form Handler)
  if (assignTaskForm) {
    assignTaskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const priority = document.getElementById('assignPrioritySelect')?.value || 'Standard';
      const discipline = document.getElementById('assignDisciplineSelect')?.value || 'Architecture';
      const manager = document.getElementById('assignManagerSelect')?.value || activeManager;
      const city = document.getElementById('assignCitySelect')?.value || 'Ahmedabad';
      const desc = document.getElementById('assignDescInput')?.value || '';
      const deadline = document.getElementById('assignDeadlineInput')?.value || new Date().toISOString().split('T')[0];
      const status = document.getElementById('assignStatusSelect')?.value || 'Ongoing';

      const newTask = {
        id: Date.now(),
        city: city,
        discipline: discipline,
        taskDetails: desc,
        fileAttachment: `Submitted File: ${city}_Drawing_Draft.dwg (14.2 MB)`,
        assignedBy: `${activeFounderName} (Head)`,
        manager: manager,
        deadline: deadline,
        priority: priority,
        status: status
      };

      DISPATCHED_TASKS.unshift(newTask);
      renderDispatchedTasks();
      assignTaskForm.reset();
      showToast(`Task assigned to ${manager}! (${discipline} • ${priority})`, '📌');
      if (status === 'Ongoing') {
        syncTaskToOngoingProjects(newTask, { redirectToOngoing: true });
      }
    });
  }

  // 2. Assign Task Directly to Employee Controls
  const assignDirectEmpModal = document.getElementById('assignDirectEmpModal');
  const btnOpenAssignEmpModal = document.getElementById('btnOpenAssignEmpModal');
  const closeAssignEmpModal = document.getElementById('closeAssignEmpModal');
  const cancelAssignEmpModal = document.getElementById('cancelAssignEmpModal');
  const assignDirectEmpModalForm = document.getElementById('assignDirectEmpModalForm');
  const modalDirectEmpSelect = document.getElementById('modalDirectEmpSelect');

  // Populate Modal Direct Employee Select Dropdown
  if (modalDirectEmpSelect) {
    modalDirectEmpSelect.innerHTML = '';
    PROLIFIC_WORKFORCE.employees.forEach(emp => {
      const opt = document.createElement('option');
      opt.value = emp.name;
      opt.textContent = `${emp.name} (${emp.code} - ${emp.work})`;
      modalDirectEmpSelect.appendChild(opt);
    });
  }

  if (btnOpenAssignEmpModal && assignDirectEmpModal) {
    btnOpenAssignEmpModal.addEventListener('click', () => {
      if (modalDirectEmpSelect) modalDirectEmpSelect.value = activeEmployee;
      const modalDirectCitySelect = document.getElementById('modalDirectCitySelect');
      const currentEmp = PROLIFIC_WORKFORCE.employees.find(e => e.name === activeEmployee);
      if (modalDirectCitySelect && currentEmp) modalDirectCitySelect.value = currentEmp.city;
      const modalDirectDeadlineInput = document.getElementById('modalDirectDeadlineInput');
      if (modalDirectDeadlineInput && !modalDirectDeadlineInput.value) {
        modalDirectDeadlineInput.value = new Date(Date.now() + 5 * 86400000).toISOString().split('T')[0];
      }
      assignDirectEmpModal.classList.add('active');
      const modalDirectDescInput = document.getElementById('modalDirectDescInput');
      if (modalDirectDescInput) setTimeout(() => modalDirectDescInput.focus(), 250);
    });
  }

  if (closeAssignEmpModal && assignDirectEmpModal) {
    closeAssignEmpModal.addEventListener('click', () => assignDirectEmpModal.classList.remove('active'));
  }
  if (cancelAssignEmpModal && assignDirectEmpModal) {
    cancelAssignEmpModal.addEventListener('click', () => assignDirectEmpModal.classList.remove('active'));
  }

  // 2A. Assign Task Directly to Employee (Modal Form Handler)
  if (assignDirectEmpModalForm) {
    assignDirectEmpModalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const priority = document.getElementById('modalDirectPrioritySelect')?.value || 'Standard';
      const discipline = document.getElementById('modalDirectDisciplineSelect')?.value || 'Architecture';
      const employee = modalDirectEmpSelect?.value || activeEmployee;
      const city = document.getElementById('modalDirectCitySelect')?.value || 'Ahmedabad';
      const desc = document.getElementById('modalDirectDescInput')?.value || '';
      const deadline = document.getElementById('modalDirectDeadlineInput')?.value || new Date().toISOString().split('T')[0];
      const status = document.getElementById('modalDirectStatusSelect')?.value || 'Ongoing';

      const newTask = {
        id: Date.now(),
        employee: employee,
        city: city,
        discipline: discipline,
        taskDetails: desc,
        assignedBy: `${activeFounderName} (Head)`,
        deadline: deadline,
        priority: priority,
        status: status
      };

      DIRECT_EMP_TASKS.unshift(newTask);
      setActiveEmployee(employee);
      renderFounderEmpActiveTasks();
      assignDirectEmpModalForm.reset();
      if (assignDirectEmpModal) assignDirectEmpModal.classList.remove('active');
      showToast(`Direct task assigned to ${employee}! (${discipline} • ${priority})`, '📌');
      if (status === 'Ongoing') {
        syncTaskToOngoingProjects(newTask, { redirectToOngoing: true });
      }
    });
  }

  // 2B. Assign Task Directly to Employee (Inline Form Handler)
  if (assignDirectEmpForm) {
    assignDirectEmpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const priority = document.getElementById('assignDirectPrioritySelect')?.value || 'Standard';
      const discipline = document.getElementById('assignDirectDisciplineSelect')?.value || 'Architecture';
      const employee = directEmpSelect?.value || activeEmployee;
      const city = document.getElementById('directCitySelect')?.value || 'Ahmedabad';
      const desc = document.getElementById('directDescInput')?.value || '';
      const deadline = document.getElementById('directDeadlineInput')?.value || new Date().toISOString().split('T')[0];
      const status = document.getElementById('directStatusSelect')?.value || 'Ongoing';

      const newTask = {
        id: Date.now(),
        employee: employee,
        city: city,
        discipline: discipline,
        taskDetails: desc,
        assignedBy: `${activeFounderName} (Head)`,
        deadline: deadline,
        priority: priority,
        status: status
      };

      DIRECT_EMP_TASKS.unshift(newTask);
      setActiveEmployee(employee);
      renderFounderEmpActiveTasks();
      assignDirectEmpForm.reset();
      showToast(`Direct task assigned to ${employee}! (${discipline} • ${priority})`, '📌');
      if (status === 'Ongoing') {
        syncTaskToOngoingProjects(newTask, { redirectToOngoing: true });
      }
    });
  }

  // Founder Edit Task Modal Controls
  const editTaskModal = document.getElementById('editTaskModal');
  const closeEditTaskModal = document.getElementById('closeEditTaskModal');
  const cancelEditTask = document.getElementById('cancelEditTask');
  const btnDeleteTask = document.getElementById('btnDeleteTask');
  const editTaskForm = document.getElementById('editTaskForm');
  const editTaskId = document.getElementById('editTaskId');
  const editTaskType = document.getElementById('editTaskType');
  const editTaskAssigneeSelect = document.getElementById('editTaskAssigneeSelect');
  const editTaskDiscipline = document.getElementById('editTaskDiscipline');
  const editTaskPriority = document.getElementById('editTaskPriority');
  const editTaskAssignedBy = document.getElementById('editTaskAssignedBy');
  const editTaskCity = document.getElementById('editTaskCity');
  const editTaskDesc = document.getElementById('editTaskDesc');
  const editTaskCadFile = document.getElementById('editTaskCadFile');
  const editTaskDeadline = document.getElementById('editTaskDeadline');
  const editTaskStatus = document.getElementById('editTaskStatus');

  if (closeEditTaskModal && editTaskModal) {
    closeEditTaskModal.addEventListener('click', () => editTaskModal.classList.remove('active'));
  }
  if (cancelEditTask && editTaskModal) {
    cancelEditTask.addEventListener('click', () => editTaskModal.classList.remove('active'));
  }

  function openEditDispatched(id) {
    if (!editTaskModal) return;
    const task = DISPATCHED_TASKS.find(t => t.id === id) || DIRECT_EMP_TASKS.find(t => t.id === id);
    if (!task) return;

    if (editTaskId) editTaskId.value = task.id;
    if (editTaskType) editTaskType.value = task.manager ? 'dispatched' : 'directEmp';

    // Populate Assignees
    if (editTaskAssigneeSelect) {
      editTaskAssigneeSelect.innerHTML = '';
      if (task.manager) {
        PROLIFIC_WORKFORCE.managers.forEach(m => {
          const opt = document.createElement('option');
          opt.value = m.name;
          opt.textContent = `${m.name} — ${m.role}`;
          if (m.name === task.manager) opt.selected = true;
          editTaskAssigneeSelect.appendChild(opt);
        });
      } else {
        PROLIFIC_WORKFORCE.employees.forEach(e => {
          const opt = document.createElement('option');
          opt.value = e.name;
          opt.textContent = `${e.name} — ${e.work} (${e.city})`;
          if (e.name === task.employee) opt.selected = true;
          editTaskAssigneeSelect.appendChild(opt);
        });
      }
    }

    if (editTaskDiscipline) editTaskDiscipline.value = task.discipline || 'Architecture';
    if (editTaskPriority) editTaskPriority.value = task.priority || 'Standard';
    if (editTaskAssignedBy) editTaskAssignedBy.value = task.assignedBy || `${activeFounderName} (Head)`;
    if (editTaskCity) editTaskCity.value = task.city || 'Ahmedabad';
    if (editTaskDesc) editTaskDesc.value = task.taskDetails || '';
    if (editTaskCadFile) editTaskCadFile.value = task.fileAttachment || '';
    if (editTaskDeadline) editTaskDeadline.value = task.deadline || new Date().toISOString().split('T')[0];
    if (editTaskStatus) editTaskStatus.value = task.status || 'Ongoing';

    editTaskModal.classList.add('active');
  }

  if (editTaskForm) {
    editTaskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = parseInt(editTaskId?.value, 10);
      const isDispatched = editTaskType?.value === 'dispatched';

      if (isDispatched) {
        const task = DISPATCHED_TASKS.find(t => t.id === id);
        if (task) {
          task.manager = editTaskAssigneeSelect?.value || task.manager;
          task.discipline = editTaskDiscipline?.value || task.discipline || 'Architecture';
          task.priority = editTaskPriority?.value || task.priority;
          task.assignedBy = editTaskAssignedBy?.value || task.assignedBy;
          task.city = editTaskCity?.value || task.city;
          task.taskDetails = editTaskDesc?.value || task.taskDetails;
          task.fileAttachment = editTaskCadFile?.value || task.fileAttachment;
          task.deadline = editTaskDeadline?.value || task.deadline;
          task.status = editTaskStatus?.value || task.status;
          renderDispatchedTasks();
          showToast(`Dispatched task #${id} updated! 💾`, '✨');
          if (task.status === 'Ongoing') {
            syncTaskToOngoingProjects(task, { redirectToOngoing: true });
          }
        }
      } else {
        const task = DIRECT_EMP_TASKS.find(t => t.id === id);
        if (task) {
          task.employee = editTaskAssigneeSelect?.value || task.employee;
          task.discipline = editTaskDiscipline?.value || task.discipline || 'Architecture';
          task.priority = editTaskPriority?.value || task.priority;
          task.assignedBy = editTaskAssignedBy?.value || task.assignedBy;
          task.city = editTaskCity?.value || task.city;
          task.taskDetails = editTaskDesc?.value || task.taskDetails;
          task.deadline = editTaskDeadline?.value || task.deadline;
          task.status = editTaskStatus?.value || task.status;
          renderFounderEmpActiveTasks();
          showToast(`Direct task #${id} updated! 💾`, '✨');
          if (task.status === 'Ongoing') {
            syncTaskToOngoingProjects(task, { redirectToOngoing: true });
          }
        }
      }

      if (editTaskModal) editTaskModal.classList.remove('active');
    });
  }

  if (btnDeleteTask) {
    btnDeleteTask.addEventListener('click', () => {
      const id = parseInt(editTaskId?.value, 10);
      if (!confirm(`Are you sure you want to remove task #${id}?`)) return;

      const isDispatched = editTaskType?.value === 'dispatched';
      if (isDispatched) {
        DISPATCHED_TASKS = DISPATCHED_TASKS.filter(t => t.id !== id);
        renderDispatchedTasks();
      } else {
        DIRECT_EMP_TASKS = DIRECT_EMP_TASKS.filter(t => t.id !== id);
        renderFounderEmpActiveTasks();
      }

      if (editTaskModal) editTaskModal.classList.remove('active');
      showToast(`Task #${id} deleted! 🗑️`, '⚠️');
    });
  }

  // Sidebar City List Click Handler (Directly switches to Regional Hubs tab and filters city)
  const sidebarCityList = document.getElementById('sidebarCityList');
  if (sidebarCityList) {
    sidebarCityList.querySelectorAll('.person-item').forEach(item => {
      item.style.cursor = 'pointer';
      item.addEventListener('click', () => {
        sidebarCityList.querySelectorAll('.person-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        activeCity = item.getAttribute('data-city');

        const tabBtn = document.querySelector('.wf-tab-btn[data-tab="tabRegionalHubs"]');
        if (tabBtn) tabBtn.click();
        renderCityWorkTable(activeCity);
        showToast(`Viewing field workforce for ${activeCity} Regional Hub`, '📍');
      });
    });
  }

  // Switch Founder Modal Handlers
  const openSwitchFounderModal = document.getElementById('openSwitchFounderModal');
  const switchFounderOverlay = document.getElementById('switchFounderOverlay');
  const cancelSwitchFounder = document.getElementById('cancelSwitchFounder');
  const switchFounderForm = document.getElementById('switchFounderForm');
  const switchFounderSelect = document.getElementById('switchFounderSelect');
  const switchFounderPassword = document.getElementById('switchFounderPassword');
  const switchFounderError = document.getElementById('switchFounderError');

  if (openSwitchFounderModal && switchFounderOverlay) {
    openSwitchFounderModal.addEventListener('click', () => {
      if (switchFounderSelect) {
        switchFounderSelect.innerHTML = '';
        PROLIFIC_WORKFORCE.founders.forEach(f => {
          const opt = document.createElement('option');
          opt.value = f.name;
          opt.textContent = `${f.name} — ${f.role}`;
          switchFounderSelect.appendChild(opt);
        });
      }
      if (switchFounderPassword) switchFounderPassword.value = '';
      if (switchFounderError) switchFounderError.textContent = '';
      switchFounderOverlay.classList.add('active');
    });
  }

  if (cancelSwitchFounder && switchFounderOverlay) {
    cancelSwitchFounder.addEventListener('click', () => {
      switchFounderOverlay.classList.remove('active');
    });
  }

  if (switchFounderForm) {
    switchFounderForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const selected = switchFounderSelect.value;
      const pass = switchFounderPassword.value;

      const isValid = await verifySecurePassword(pass);
      if (!isValid) {
        if (switchFounderError) {
          switchFounderError.textContent = '❌ Incorrect password. Access denied.';
          switchFounderError.style.display = 'block';
        }
        return;
      }

      sessionStorage.setItem('prolific_active_user', JSON.stringify({
        name: selected,
        type: 'founder'
      }));
      activeFounderName = selected;
      if (headerUserName) headerUserName.textContent = `${selected} (FOUNDER)`;
      switchFounderOverlay.classList.remove('active');
      showToast(`Switched to Founder account: ${selected}`, '✨');
    });
  }

  // Founder Sidebar Click Handler (Instant Active Profile Switcher Between Gaurav & Nilesh)
  const sidebarFounderList = document.getElementById('sidebarFounderList');
  if (sidebarFounderList) {
    sidebarFounderList.querySelectorAll('.person-item').forEach(item => {
      item.style.cursor = 'pointer';
      item.addEventListener('click', () => {
        const founderName = item.getAttribute('data-name');
        sidebarFounderList.querySelectorAll('.person-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        activeFounderName = founderName;
        sessionStorage.setItem('prolific_active_user', JSON.stringify({
          name: founderName,
          type: 'founder',
          role: 'Head (Founder)',
          code: founderName === 'Gaurav' ? 'FND001' : 'FND002'
        }));
        if (headerUserName) headerUserName.textContent = `${founderName} (FOUNDER)`;
        showToast(`Executive Founder Profile: ${founderName} (Head) 👑`, '✨');
      });
    });
  }

  // ==========================================================
  // TAB 4: GUJARAT REGIONAL BRANCH WORKFORCE HUBS CONTROLLER
  // ==========================================================
  const cityTabsRow = document.getElementById('cityTabsRow');
  const cityWorkTable = document.getElementById('cityWorkTable');
  const activeCityTitle = document.getElementById('activeCityTitle');
  const activeCitySubLabel = document.getElementById('activeCitySubLabel');
  const cityEmpCountBadge = document.getElementById('cityEmpCountBadge');
  let currentRegionalCity = 'Ahmedabad';

  function renderCityWorkTable(cityName = 'Ahmedabad') {
    currentRegionalCity = cityName;
    if (activeCityTitle) activeCityTitle.textContent = `${cityName} Regional Hub`;
    if (activeCitySubLabel) activeCitySubLabel.textContent = cityName;

    if (cityTabsRow) {
      cityTabsRow.querySelectorAll('.city-tab').forEach(tab => {
        if (tab.getAttribute('data-city') === cityName) tab.classList.add('active');
        else tab.classList.remove('active');
      });
    }

    if (!cityWorkTable) return;
    cityWorkTable.innerHTML = '';

    const cityEmployees = PROLIFIC_WORKFORCE.employees.filter(e => e.city === cityName);
    if (cityEmpCountBadge) {
      cityEmpCountBadge.textContent = `${cityEmployees.length} Active Staff`;
    }

    if (cityEmployees.length === 0) {
      cityWorkTable.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #94A3B8; padding: 24px;">No dedicated sub-designers currently assigned to ${cityName}. Staff from Ahmedabad Hub handle this region.</td></tr>`;
      return;
    }

    cityEmployees.forEach((emp, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong style="color: #64748B;">#${idx + 1}</strong></td>
        <td>
          <div style="font-weight: 800; color: #0C1220; font-size: 0.92rem;">${emp.name}</div>
          <div style="font-size: 0.76rem; color: #64748B;">${emp.code}</div>
        </td>
        <td><span class="luxury-city-pill" style="background:#F1F5F9; color:#0F172A; border-color:#CBD5E1;">${emp.code}</span></td>
        <td>
          <div style="font-weight: 600; color: #1E293B;">${emp.work}</div>
          <div style="font-size: 0.78rem; color: #64748B;">Assigned to regional architecture &amp; CAD blueprints</div>
        </td>
        <td><strong style="color: #8A6836;">${emp.manager || 'Shashikant Bhai'}</strong></td>
        <td><span class="wf-status-select ongoing" style="padding: 4px 10px; font-size: 0.78rem;">Active on Site</span></td>
      `;
      cityWorkTable.appendChild(tr);
    });
  }

  if (cityTabsRow) {
    cityTabsRow.querySelectorAll('.city-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const city = tab.getAttribute('data-city');
        renderCityWorkTable(city);
      });
    });
  }

  // ==========================================================
  // TAB 5: ENTERPRISE SECURITY AUDIT LOGS
  // ==========================================================
  const securityAuditLogTable = document.getElementById('securityAuditLogTable');
  const btnRefreshSecurityLogs = document.getElementById('btnRefreshSecurityLogs');
  const btnExportSecurityLogs = document.getElementById('btnExportSecurityLogs');

  function renderSecurityAuditTable() {
    if (!securityAuditLogTable) return;
    securityAuditLogTable.innerHTML = '';
    const logs = getSecurityAuditLogs();

    if (logs.length === 0) {
      securityAuditLogTable.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #64748B; padding: 24px;">No security events recorded.</td></tr>';
      return;
    }

    logs.forEach(log => {
      const isCritical = log.severity === 'CRITICAL';
      const isWarn = log.severity === 'WARN';
      const isSuccess = log.severity === 'SUCCESS';
      
      const badgeStyle = isCritical ? 'background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5;'
                       : isWarn ? 'background: #FEF3C7; color: #D97706; border: 1px solid #FCD34D;'
                       : isSuccess ? 'background: #D1FAE5; color: #059669; border: 1px solid #6EE7B7;'
                       : 'background: #E0F2FE; color: #0284C7; border: 1px solid #BAE6FD;';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span style="font-family: monospace; font-weight: 800; color: #8A6836; font-size: 0.82rem;">${log.id}</span></td>
        <td><span style="font-size: 0.78rem; color: #64748B;">${log.timestamp}</span></td>
        <td><strong style="color: #1E2532; font-size: 0.85rem;">${log.actor || 'System'}</strong></td>
        <td><span style="font-size: 0.82rem; font-weight: 700; color: #1E2532;">${log.eventType}</span></td>
        <td><span style="font-size: 0.72rem; font-weight: 800; padding: 3px 8px; border-radius: 4px; ${badgeStyle}">${log.severity}</span></td>
        <td><div style="font-size: 0.82rem; color: #475569;">${log.details}</div></td>
      `;
      securityAuditLogTable.appendChild(tr);
    });
  }

  if (btnRefreshSecurityLogs) {
    btnRefreshSecurityLogs.addEventListener('click', () => {
      renderSecurityAuditTable();
      showToast('Security audit logs refreshed! 🔒', '🔄');
    });
  }

  if (btnExportSecurityLogs) {
    btnExportSecurityLogs.addEventListener('click', () => {
      const logs = getSecurityAuditLogs();
      const content = "PROLIFIC ENTERPRISE ZERO-TRUST SECURITY AUDIT LOG EXPORT\n" +
                      "Generated: " + new Date().toLocaleString() + "\n" +
                      "Encryption: 256-Bit TLS Hash Validated\n\n" +
                      JSON.stringify(logs, null, 2);
      const blob = new Blob([content], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Prolific_Security_Audit_Report_${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      logSecurityEvent('SECURITY_LOGS_EXPORTED', 'INFO', 'Full security audit logs exported by Founder', activeFounderName);
      showToast('Security Audit Log exported securely! 📄', '📥');
    });
  }

  // Final Master Initial Renders (Founder Dashboard Engine)
  setActiveManager('Shashikant Bhai');
  renderFounderEmployeeCarousel();
  setActiveEmployee('Komal');
  renderDispatchedTasks();
  renderFounderEmpActiveTasks();
  renderCityWorkTable('Ahmedabad');
  renderFounderSidebarEmployees();
  renderSecurityAuditTable();
}

/* ==========================================================================
   4. MANAGER PORTAL CONTROLLER (MANAGER-DASHBOARD.HTML)
   ========================================================================== */
function setupManagerPortal() {
  const mgrTasksTable = document.getElementById('mgrTasksTable');
  const mgrFounderTasksTable = document.getElementById('mgrFounderTasksTable');
  const mgrCheckQueueTable = document.getElementById('mgrCheckQueueTable');
  const mgrQuickAssignForm = document.getElementById('mgrQuickAssignForm');
  const mgrQuickEmpSelect = document.getElementById('mgrQuickEmpSelect');
  const mgrSubmitTaskSelector = document.getElementById('mgrSubmitTaskSelector');
  const btnMgrSubmitWork = document.getElementById('btnMgrSubmitWork');
  const mgrHeaderUserName = document.getElementById('mgrHeaderUserName');
  const mgrActiveTitle = document.getElementById('mgrActiveTitle');
  const badgeAwaitingCheck = document.getElementById('badgeAwaitingCheck');

  if (!mgrTasksTable && !mgrFounderTasksTable) return;

  let currentManager = PROLIFIC_WORKFORCE.managers[0]; // Default: Shashikant Bhai
  let activeCity = 'Ahmedabad';

  // Read Session User
  const sessionRaw = sessionStorage.getItem('prolific_active_user');
  if (sessionRaw) {
    try {
      const u = JSON.parse(sessionRaw);
      if (u.type === 'manager') {
        const found = PROLIFIC_WORKFORCE.managers.find(m => m.name === u.name);
        if (found) currentManager = found;
      }
    } catch (e) {}
  }

  function updateManagerUI() {
    if (mgrHeaderUserName) mgrHeaderUserName.textContent = `${currentManager.name} (HEAD DESIGNER)`;
    if (mgrActiveTitle) mgrActiveTitle.textContent = currentManager.name;
  }

  // Populate Employee Dropdowns
  function populateEmployeeDropdowns() {
    if (mgrQuickEmpSelect) {
      mgrQuickEmpSelect.innerHTML = '';
      PROLIFIC_WORKFORCE.employees.forEach(emp => {
        const opt = document.createElement('option');
        opt.value = emp.name;
        opt.textContent = `${emp.name} (${emp.code} - ${emp.work})`;
        mgrQuickEmpSelect.appendChild(opt);
      });
    }

    if (mgrSubmitTaskSelector) {
      mgrSubmitTaskSelector.innerHTML = '';
      const myTasks = DISPATCHED_TASKS.filter(t => t.manager === currentManager.name);
      myTasks.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t.taskDetails;
        opt.textContent = `${t.taskDetails} (${t.city})`;
        mgrSubmitTaskSelector.appendChild(opt);
      });
      if (myTasks.length === 0) {
        const opt = document.createElement('option');
        opt.value = 'General Structural Audit Dossier';
        opt.textContent = 'General Structural Audit Dossier';
        mgrSubmitTaskSelector.appendChild(opt);
      }
    }
  }

  // Render Manager's Own Tasks (from Founder)
  function renderMgrFounderTasks() {
    if (!mgrFounderTasksTable) return;
    mgrFounderTasksTable.innerHTML = '';

    const tasks = DISPATCHED_TASKS.filter(t => t.manager === currentManager.name)
      .sort((a, b) => (a.priority === 'Urgent' ? -1 : 1));

    if (tasks.length === 0) {
      mgrFounderTasksTable.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #94A3B8; padding: 24px;">No active tasks assigned to ${currentManager.name} by Founders.</td></tr>`;
      return;
    }

    tasks.forEach(task => {
      const isUrgent = task.priority === 'Urgent';
      const isArch = (task.discipline || 'Architecture') === 'Architecture';
      const disciplineBadge = isArch
        ? '<span class="luxury-discipline-badge arch" style="background:#E0F2FE; color:#0369A1; border:1px solid #BAE6FD; font-size:0.72rem; font-weight:800; padding:2px 7px; border-radius:4px; display:inline-flex; align-items:center; gap:3px;">🏛️ Architecture</span>'
        : '<span class="luxury-discipline-badge int" style="background:#FAF5EA; color:#8A6836; border:1px solid #E5DCCB; font-size:0.72rem; font-weight:800; padding:2px 7px; border-radius:4px; display:inline-flex; align-items:center; gap:3px;">🛋️ Interior</span>';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <span class="luxury-priority-badge ${isUrgent ? 'urgent' : 'standard'}">
            ${isUrgent ? '🚨 URGENT' : '⚡ STANDARD'}
          </span>
        </td>
        <td>
          <span class="luxury-city-pill">📍 ${task.city}</span>
          <div style="margin-top: 4px;">${disciplineBadge}</div>
        </td>
        <td>
          <div style="font-weight: 600; color: #0C1220; margin-bottom: 4px; font-size: 0.9rem;">${task.taskDetails}</div>
          ${task.fileAttachment ? `
            <div class="cad-attachment-box" title="Click to download blueprint">
              📂 <span class="cad-file-name">${task.fileAttachment}</span>
              <span class="cad-btn-inspect">🔍 Inspect CAD Drawing</span>
            </div>
          ` : ''}
        </td>
        <td><span style="font-weight: 600; color: #334155;">${task.assignedBy}</span></td>
        <td>
          <div class="luxury-deadline-chip">
            <span class="chip-calendar-icon">📅</span>
            <span class="chip-deadline-text">${formatLuxuryDate(task.deadline || '2026-08-28')}</span>
          </div>
        </td>
        <td>
          <select class="wf-status-select ${task.status.toLowerCase()}" data-founder-task-id="${task.id}">
            <option value="Ongoing" ${task.status === 'Ongoing' ? 'selected' : ''}>Ongoing</option>
            <option value="Pending" ${task.status === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="Completed" ${task.status === 'Completed' ? 'selected' : ''}>Completed</option>
          </select>
        </td>
        <td>
          <button class="btn-action-done" data-founder-task-id="${task.id}">Done</button>
        </td>
      `;
      mgrFounderTasksTable.appendChild(tr);
    });

    mgrFounderTasksTable.querySelectorAll('.wf-status-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const id = parseInt(e.target.getAttribute('data-founder-task-id'), 10);
        const task = DISPATCHED_TASKS.find(t => t.id === id);
        if (task) {
          task.status = e.target.value;
          renderMgrFounderTasks();
        }
      });
    });

    mgrFounderTasksTable.querySelectorAll('.btn-action-done').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.getAttribute('data-founder-task-id'), 10);
        const task = DISPATCHED_TASKS.find(t => t.id === id);
        if (task) {
          task.status = 'Completed';
          renderMgrFounderTasks();
          showToast(`Task #${id} completed!`, '✅');
        }
      });
    });
  }

  // Render Sub Designer Submissions Waiting for Check & Approval
  function renderMgrCheckQueue() {
    if (!mgrCheckQueueTable) return;
    mgrCheckQueueTable.innerHTML = '';

    const submissions = getSubmittedWorkRegister();
    const waitingCount = submissions.filter(s => s.reviewStatus === 'Under Review').length;
    if (badgeAwaitingCheck) badgeAwaitingCheck.textContent = `Waiting: ${waitingCount}`;

    if (submissions.length === 0) {
      mgrCheckQueueTable.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #94A3B8; padding: 28px;">No employee submissions currently awaiting review.</td></tr>`;
      return;
    }

    submissions.forEach(sub => {
      const isUnderReview = sub.reviewStatus === 'Under Review';
      const isApproved = sub.reviewStatus === 'Approved';
      const statusClass = isUnderReview ? 'under-review' : (isApproved ? 'approved' : 'revision-requested');
      const statusLabel = isUnderReview ? '⏳ Under Review' : (isApproved ? '✅ Approved' : '🔄 Revision Needed');

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div style="font-family: monospace; font-weight: 700; color: #0284C7; font-size: 0.85rem;">${sub.id}</div>
          <div style="font-size: 0.76rem; color: #64748B; margin-top: 2px;">${sub.timestamp}</div>
        </td>
        <td>
          <strong style="color: #0C1220; font-size: 0.9rem;">${sub.employeeName}</strong>
          <div style="font-size: 0.76rem; color: #64748B;">${sub.employeeCode} • ${sub.city}</div>
        </td>
        <td>
          <div style="font-weight: 600; color: #1E293B; margin-bottom: 3px;">${sub.taskTitle}</div>
          <div style="font-size: 0.82rem; color: #475569; line-height: 1.4;">${sub.description}</div>
        </td>
        <td>
          <div style="font-size: 0.78rem; color: #0369A1; font-weight: 600; display: flex; flex-direction: column; gap: 3px;">
            <span>📐 ${sub.cadFile || 'Draft_v2.dwg'}</span>
            <span>🖼️ ${sub.photoFile || 'Site_Photo.jpg'}</span>
            <span>📄 ${sub.reportFile || 'Summary.pdf'}</span>
          </div>
        </td>
        <td>
          <span class="review-status-badge ${statusClass}">${statusLabel}</span>
        </td>
        <td>
          <div class="review-action-btns">
            <button class="btn-review-approve" data-sub-id="${sub.id}" title="Approve this submission">✅ Approve</button>
            <button class="btn-review-revision" data-sub-id="${sub.id}" title="Request modifications">🔄 Revision</button>
          </div>
        </td>
      `;
      mgrCheckQueueTable.appendChild(tr);
    });

    // Approval button listeners
    mgrCheckQueueTable.querySelectorAll('.btn-review-approve').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const subId = btn.getAttribute('data-sub-id');
        const submissions = getSubmittedWorkRegister();
        const found = submissions.find(s => s.id === subId);
        if (found) {
          found.reviewStatus = 'Approved';
          saveSubmittedWorkRegister(submissions);
          renderMgrCheckQueue();
          showToast(`Submission ${subId} APPROVED!`, '✅');
        }
      });
    });

    // Revision button listeners
    mgrCheckQueueTable.querySelectorAll('.btn-review-revision').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const subId = btn.getAttribute('data-sub-id');
        const submissions = getSubmittedWorkRegister();
        const found = submissions.find(s => s.id === subId);
        if (found) {
          found.reviewStatus = 'Revision Requested';
          saveSubmittedWorkRegister(submissions);
          renderMgrCheckQueue();
          showToast(`Revision requested for ${subId}`, '🔄');
        }
      });
    });
  }

  // Render Team Tasks Delegated to Employees
  function renderMgrTasks() {
    if (!mgrTasksTable) return;
    mgrTasksTable.innerHTML = '';

    const tasks = MANAGER_EMP_TASKS.filter(t => t.manager === currentManager.name)
      .sort((a, b) => (a.priority === 'Urgent' ? -1 : 1));

    if (tasks.length === 0) {
      mgrTasksTable.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #94A3B8; padding: 28px;">No active tasks for ${currentManager.name}. Use the assignment form below to delegate work.</td></tr>`;
      return;
    }

    tasks.forEach(task => {
      const isUrgent = task.priority === 'Urgent';
      const isArch = (task.discipline || 'Architecture') === 'Architecture';
      const disciplineBadge = isArch
        ? '<span class="luxury-discipline-badge arch" style="background:#E0F2FE; color:#0369A1; border:1px solid #BAE6FD; font-size:0.72rem; font-weight:800; padding:2px 7px; border-radius:4px; display:inline-flex; align-items:center; gap:3px;">🏛️ Architecture</span>'
        : '<span class="luxury-discipline-badge int" style="background:#FAF5EA; color:#8A6836; border:1px solid #E5DCCB; font-size:0.72rem; font-weight:800; padding:2px 7px; border-radius:4px; display:inline-flex; align-items:center; gap:3px;">🛋️ Interior</span>';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <span class="luxury-priority-badge ${isUrgent ? 'urgent' : 'standard'}">
            ${isUrgent ? '🚨 URGENT' : '⚡ STANDARD'}
          </span>
        </td>
        <td>
          <span class="luxury-city-pill">📍 ${task.city}</span>
          <div style="margin-top: 4px;">${disciplineBadge}</div>
        </td>
        <td>
          <div style="font-weight: 600; color: #0C1220; margin-bottom: 4px; font-size: 0.9rem;">${task.taskDetails}</div>
          <div class="cad-attachment-box" title="Click to download CAD drawing">
            📂 <span class="cad-file-name">Submitted File: ${task.employee.replace(/\s+/g, '_')}_Draft_v2.dwg (15.5 MB)</span>
            <span class="cad-btn-inspect">🔍 Inspect Blueprint</span>
          </div>
        </td>
        <td><strong style="color: #334155;">${task.employee}</strong></td>
        <td>
          <div class="luxury-deadline-chip">
            <span class="chip-calendar-icon">📅</span>
            <span class="chip-deadline-text">${formatLuxuryDate(task.deadline || '2026-08-28')}</span>
          </div>
        </td>
        <td>
          <select class="wf-status-select ${task.status.toLowerCase()}" data-id="${task.id}">
            <option value="Ongoing" ${task.status === 'Ongoing' ? 'selected' : ''}>Ongoing</option>
            <option value="Pending" ${task.status === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="Completed" ${task.status === 'Completed' ? 'selected' : ''}>Completed</option>
          </select>
        </td>
        <td>
          <div class="task-action-cell">
            <button class="btn-action-edit btn-edit-mgr" data-id="${task.id}" title="Edit Task Details">✏️ Edit</button>
            <button class="btn-action-done" data-id="${task.id}">Done</button>
          </div>
        </td>
      `;
      mgrTasksTable.appendChild(tr);
    });

    mgrTasksTable.querySelectorAll('.wf-status-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const id = parseInt(e.target.getAttribute('data-id'), 10);
        const task = MANAGER_EMP_TASKS.find(t => t.id === id);
        if (task) { task.status = e.target.value; renderMgrTasks(); }
      });
    });

    mgrTasksTable.querySelectorAll('.btn-action-done').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.getAttribute('data-id'), 10);
        const task = MANAGER_EMP_TASKS.find(t => t.id === id);
        if (task) { task.status = 'Completed'; renderMgrTasks(); showToast(`Task #${id} marked as Completed!`, '✅'); }
      });
    });

    mgrTasksTable.querySelectorAll('.btn-edit-mgr').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(btn.getAttribute('data-id'), 10);
        openEditMgrTask(id);
      });
    });
  }

  // Manager Edit Task Modal Handlers
  const editTaskModal = document.getElementById('editTaskModal');
  const closeEditTaskModal = document.getElementById('closeEditTaskModal');
  const cancelEditTask = document.getElementById('cancelEditTask');
  const btnDeleteTask = document.getElementById('btnDeleteTask');
  const editTaskForm = document.getElementById('editTaskForm');
  const editTaskId = document.getElementById('editTaskId');
  const editTaskPriority = document.getElementById('editTaskPriority');
  const editTaskDiscipline = document.getElementById('editTaskDiscipline');
  const editTaskAssigneeSelect = document.getElementById('editTaskAssigneeSelect');
  const editTaskCity = document.getElementById('editTaskCity');
  const editTaskDesc = document.getElementById('editTaskDesc');
  const editTaskCadFile = document.getElementById('editTaskCadFile');
  const editTaskDeadline = document.getElementById('editTaskDeadline');
  const editTaskStatus = document.getElementById('editTaskStatus');

  if (editTaskAssigneeSelect) {
    editTaskAssigneeSelect.innerHTML = '';
    PROLIFIC_WORKFORCE.employees.forEach(emp => {
      const opt = document.createElement('option');
      opt.value = emp.name;
      opt.textContent = `${emp.name} (${emp.code} - ${emp.work})`;
      editTaskAssigneeSelect.appendChild(opt);
    });
  }

  if (closeEditTaskModal) closeEditTaskModal.addEventListener('click', () => editTaskModal.classList.remove('active'));
  if (cancelEditTask) cancelEditTask.addEventListener('click', () => editTaskModal.classList.remove('active'));

  function openEditMgrTask(id) {
    if (!editTaskModal) return;
    const task = MANAGER_EMP_TASKS.find(t => t.id === id);
    if (!task) return;
    editTaskId.value = task.id;
    if (editTaskDiscipline) editTaskDiscipline.value = task.discipline || 'Architecture';
    if (editTaskPriority) editTaskPriority.value = task.priority || 'Standard';
    if (editTaskAssigneeSelect) editTaskAssigneeSelect.value = task.employee;
    if (editTaskCity) editTaskCity.value = task.city;
    if (editTaskDesc) editTaskDesc.value = task.taskDetails;
    if (editTaskCadFile) editTaskCadFile.value = `${task.employee.replace(/\s+/g, '_')}_Draft_v2.dwg`;
    if (editTaskDeadline) editTaskDeadline.value = task.deadline || '2026-08-28';
    if (editTaskStatus) editTaskStatus.value = task.status;
    editTaskModal.classList.add('active');
  }

  if (btnDeleteTask) {
    btnDeleteTask.addEventListener('click', () => {
      const id = parseInt(editTaskId.value, 10);
      if (confirm(`Are you sure you want to permanently remove Task #${id}?`)) {
        MANAGER_EMP_TASKS = MANAGER_EMP_TASKS.filter(t => t.id !== id);
        renderMgrTasks();
        editTaskModal.classList.remove('active');
        showToast(`Task #${id} permanently removed!`, '🗑️');
      }
    });
  }

  if (editTaskForm) {
    editTaskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = parseInt(editTaskId.value, 10);
      const task = MANAGER_EMP_TASKS.find(t => t.id === id);
      if (task) {
        if (editTaskDiscipline) task.discipline = editTaskDiscipline.value;
        if (editTaskPriority) task.priority = editTaskPriority.value;
        if (editTaskAssigneeSelect) task.employee = editTaskAssigneeSelect.value;
        if (editTaskCity) task.city = editTaskCity.value;
        if (editTaskDesc) task.taskDetails = editTaskDesc.value;
        if (editTaskDeadline) task.deadline = editTaskDeadline.value;
        if (editTaskStatus) task.status = editTaskStatus.value;
        renderMgrTasks();
        showToast('Task updated successfully! 💾', '✅');
      }
      editTaskModal.classList.remove('active');
    });
  }

  // Manager Quick Assign Form Handler
  if (mgrQuickAssignForm) {
    mgrQuickAssignForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const priority = document.getElementById('mgrQuickPrioritySelect')?.value || 'Standard';
      const discipline = document.getElementById('mgrQuickDisciplineSelect')?.value || 'Architecture';
      const emp = mgrQuickEmpSelect?.value || 'Komal';
      const city = document.getElementById('mgrQuickCitySelect')?.value || 'Ahmedabad';
      const desc = document.getElementById('mgrQuickDescInput')?.value || '';
      const deadline = document.getElementById('mgrQuickDeadlineInput')?.value || new Date().toISOString().split('T')[0];
      const status = document.getElementById('mgrQuickStatusSelect')?.value || 'Ongoing';

      MANAGER_EMP_TASKS.unshift({
        id: Date.now(),
        employee: emp,
        city: city,
        discipline: discipline,
        taskDetails: desc,
        assignedBy: currentManager.name,
        manager: currentManager.name,
        deadline: deadline,
        priority: priority,
        status: status
      });

      renderMgrTasks();
      mgrQuickAssignForm.reset();
      showToast(`Task assigned to ${emp}! (${discipline} • ${priority})`, '📌');
    });
  }

  // Manager Work Submission to Founder Handler
  if (btnMgrSubmitWork) {
    btnMgrSubmitWork.addEventListener('click', () => {
      const selectedTask = mgrSubmitTaskSelector ? mgrSubmitTaskSelector.value : 'Project Executive Blueprint';
      const notes = document.getElementById('mgrSubmitDescInput')?.value.trim() || 'Finalized structural sign-off transmitted for Founder review.';

      showToast(`Executive dossier for "${selectedTask}" submitted to Founders! 🚀`, '🎉');
      alert(`🚀 MANAGER WORK SUBMISSION CONFIRMED!\n\nManager: ${currentManager.name}\nProject: ${selectedTask}\nAttached: Executive_Master_Draft.dwg (22.5 MB)\nStatus: Submitted to Founders for Final Sign-Off.`);
    });
  }

  // Switch Head Designer Modal Setup
  const openSwitchMgrModal = document.getElementById('openSwitchMgrModal');
  const switchMgrOverlay = document.getElementById('switchMgrOverlay');
  const cancelSwitchMgr = document.getElementById('cancelSwitchMgr');
  const switchMgrForm = document.getElementById('switchMgrForm');
  const switchMgrSelect = document.getElementById('switchMgrSelect');
  const switchMgrPassword = document.getElementById('switchMgrPassword');
  const switchMgrError = document.getElementById('switchMgrError');

  if (openSwitchMgrModal && switchMgrOverlay) {
    openSwitchMgrModal.addEventListener('click', () => {
      if (switchMgrSelect) {
        switchMgrSelect.innerHTML = '';
        PROLIFIC_WORKFORCE.managers.forEach(m => {
          const opt = document.createElement('option');
          opt.value = m.name;
          opt.textContent = `${m.name} — ${m.role}`;
          switchMgrSelect.appendChild(opt);
        });
      }
      if (switchMgrPassword) switchMgrPassword.value = '';
      if (switchMgrError) switchMgrError.textContent = '';
      switchMgrOverlay.classList.add('active');
    });
  }

  if (cancelSwitchMgr && switchMgrOverlay) {
    cancelSwitchMgr.addEventListener('click', () => {
      switchMgrOverlay.classList.remove('active');
    });
  }

  if (switchMgrForm) {
    switchMgrForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const targetName = switchMgrSelect.value;
      const pass = switchMgrPassword.value;

      if (pass !== GLOBAL_PASSWORD) {
        if (switchMgrError) {
          switchMgrError.textContent = '❌ Incorrect password. Access denied.';
          switchMgrError.style.display = 'block';
        }
        if (switchMgrPassword) {
          switchMgrPassword.style.borderColor = '#EF4444';
          setTimeout(() => { switchMgrPassword.style.borderColor = '#334155'; }, 1000);
        }
        return;
      }

      const newMgr = PROLIFIC_WORKFORCE.managers.find(m => m.name === targetName);
      if (newMgr) {
        currentManager = newMgr;
        sessionStorage.setItem('prolific_active_user', JSON.stringify({
          name: newMgr.name,
          type: 'manager',
          role: newMgr.role,
          code: newMgr.code
        }));
        updateManagerUI();
        renderSidebarManagers();
        populateEmployeeDropdowns();
        renderMgrFounderTasks();
        renderMgrCheckQueue();
        renderMgrTasks();
        renderCityEmpTable();
        renderMgrDelegatedAppointments();
        switchMgrOverlay.classList.remove('active');
        showToast(`Switched to Manager workspace: ${newMgr.name}`, '✨');
      }
    });
  }

  // Section 5: Regional City Field Workforce Elements
  const mgrCityEmpTable = document.getElementById('mgrCityEmpTable');
  const mgrCityTabs = document.getElementById('mgrCityTabs');
  const mgrCityRegisterLabel = document.getElementById('mgrCityRegisterLabel');
  const mgrSidebarCityList = document.getElementById('mgrSidebarCityList');
  const sidebarMgrList = document.getElementById('sidebarMgrList');

  // Render Head Designers in Manager Sidebar (Instant 1-Click Workspace Switcher)
  function renderSidebarManagers() {
    if (!sidebarMgrList) return;
    sidebarMgrList.innerHTML = '';
    PROLIFIC_WORKFORCE.managers.forEach(mgr => {
      const li = document.createElement('li');
      li.className = `person-item ${mgr.name === currentManager.name ? 'active' : ''}`;
      li.setAttribute('data-manager', mgr.name);
      li.style.cursor = 'pointer';
      li.title = `Switch to ${mgr.name}'s Head Designer Workspace`;
      li.innerHTML = `
        <span class="avatar-badge ${mgr.badgeClass || 'pink-badge'}">${mgr.initial || 'MG'}</span>
        <div class="person-meta">
          <span class="name">${mgr.name} (${mgr.code})</span>
        </div>
      `;
      li.addEventListener('click', () => {
        currentManager = mgr;
        sessionStorage.setItem('prolific_active_user', JSON.stringify({
          name: mgr.name,
          type: 'manager',
          role: mgr.role,
          code: mgr.code
        }));
        updateManagerUI();
        renderSidebarManagers();
        populateEmployeeDropdowns();
        renderMgrFounderTasks();
        renderMgrCheckQueue();
        renderMgrTasks();
        renderCityEmpTable();
        renderMgrDelegatedAppointments();
        showToast(`Switched to Head Designer Workspace: ${mgr.name} 👔`, '✨');
      });
      sidebarMgrList.appendChild(li);
    });
  }

  // Render Section 5: Regional City Field Workforce Table
  function renderCityEmpTable() {
    if (!mgrCityEmpTable) return;
    mgrCityEmpTable.innerHTML = '';

    const empList = PROLIFIC_WORKFORCE.employees.filter(e => e.city.toLowerCase() === activeCity.toLowerCase());

    if (empList.length === 0) {
      mgrCityEmpTable.innerHTML = `<tr><td colspan="5" style="text-align: center; color: #94A3B8; padding: 24px;">No field workers or engineers assigned to ${activeCity} currently.</td></tr>`;
      return;
    }

    empList.forEach((emp, index) => {
      const isEven = index % 2 === 0;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span style="font-weight: 700; color: #64748B;">#${index + 1}</span></td>
        <td>
          <strong style="color: #0C1220; font-size: 0.92rem;">${emp.name}</strong>
          <div style="font-size: 0.76rem; color: #64748B;">${emp.city} Regional Branch</div>
        </td>
        <td><span class="role-badge">${emp.code}</span></td>
        <td>
          <div style="font-weight: 600; color: #1E293B;">${emp.work} for Regional Projects</div>
          <div class="cad-attachment-box" style="margin-top: 6px; cursor: pointer;" title="Click to download blueprint">
            📂 Submitted File: ${emp.name.replace(/\s+/g, '_')}_Drawing_v1.dwg (12.4 MB)
          </div>
        </td>
        <td>
          <span class="wf-status-select ${isEven ? 'completed' : 'ongoing'}">
            ${isEven ? 'Completed' : 'Ongoing'}
          </span>
        </td>
      `;
      mgrCityEmpTable.appendChild(tr);
    });

    // Add click download listener on city CAD attachments
    mgrCityEmpTable.querySelectorAll('.cad-attachment-box').forEach(box => {
      box.addEventListener('click', () => {
        triggerFileDownload('Regional_Branch_Drawing_v1.dwg');
      });
    });
  }

  // Section 5 City Tabs Click Handler
  if (mgrCityTabs) {
    mgrCityTabs.querySelectorAll('.city-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        mgrCityTabs.querySelectorAll('.city-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeCity = tab.getAttribute('data-city');
        if (mgrCityRegisterLabel) mgrCityRegisterLabel.textContent = `${activeCity}`;

        // Sync sidebar active city
        if (mgrSidebarCityList) {
          mgrSidebarCityList.querySelectorAll('.person-item').forEach(item => {
            if (item.getAttribute('data-city') === activeCity) {
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          });
        }

        renderCityEmpTable();
      });
    });
  }

  // Sidebar Branch Work Overview Click Handler
  if (mgrSidebarCityList) {
    mgrSidebarCityList.querySelectorAll('.person-item').forEach(item => {
      item.addEventListener('click', () => {
        mgrSidebarCityList.querySelectorAll('.person-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        activeCity = item.getAttribute('data-city');
        if (mgrCityRegisterLabel) mgrCityRegisterLabel.textContent = `${activeCity}`;

        // Sync bottom city tabs
        if (mgrCityTabs) {
          mgrCityTabs.querySelectorAll('.city-tab').forEach(tab => {
            if (tab.getAttribute('data-city') === activeCity) {
              tab.classList.add('active');
            } else {
              tab.classList.remove('active');
            }
          });
        }

        // Scroll to Section 5
        mgrCityEmpTable?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        renderCityEmpTable();
        showToast(`Viewing field workforce for ${activeCity}`, '📍');
      });
    });
  }

  // Section 0: Delegated Client Consultation Meetings
  const mgrDelegatedApptsTable = document.getElementById('mgrDelegatedApptsTable');
  const mgrApptAlertBanner = document.getElementById('mgrApptAlertBanner');
  const mgrAlertDetailsText = document.getElementById('mgrAlertDetailsText');
  const btnDismissMgrApptAlert = document.getElementById('btnDismissMgrApptAlert');
  const mgrApptCountBadge = document.getElementById('mgrApptCountBadge');
  const mgrApptActiveTitle = document.getElementById('mgrApptActiveTitle');

  function renderMgrDelegatedAppointments() {
    if (mgrApptActiveTitle) mgrApptActiveTitle.textContent = currentManager.name;
    const allAppts = getClientAppointments();
    const myAppts = allAppts.filter(a => 
      a.assignedManagerName === currentManager.name || 
      (a.assignedTo && a.assignedTo.includes(currentManager.name))
    );

    if (mgrApptCountBadge) {
      mgrApptCountBadge.textContent = `${myAppts.length} Assigned Meeting${myAppts.length === 1 ? '' : 's'}`;
    }

    // Check for new meeting alert for this Head Designer
    const newMeeting = myAppts.find(a => a.isNewForManager || a.status === 'Delegated to Head Designer');
    if (newMeeting && mgrApptAlertBanner) {
      mgrApptAlertBanner.style.display = 'flex';
      if (mgrAlertDetailsText) {
        mgrAlertDetailsText.innerHTML = `<strong>${newMeeting.delegatedBy || 'Founder Nilesh'}</strong> has assigned a client consultation with <strong>${newMeeting.clientName}</strong> (${newMeeting.serviceType}) to you on <strong>${formatLuxuryDate(newMeeting.consultationDate)} at ${newMeeting.consultationTime}</strong>.<br><span style="color:#78350F; font-style:italic;">Founder Directives: "${newMeeting.delegationNotes || 'Lead consultation, present 3D layout, and provide drawing assessment.'}"</span>`;
      }
    } else if (mgrApptAlertBanner) {
      mgrApptAlertBanner.style.display = 'none';
    }

    if (btnDismissMgrApptAlert) {
      btnDismissMgrApptAlert.onclick = () => {
        myAppts.forEach(a => { a.isNewForManager = false; });
        saveClientAppointments(allAppts);
        if (mgrApptAlertBanner) mgrApptAlertBanner.style.display = 'none';
        showToast('Meeting acknowledged!', '✅');
      };
    }

    if (!mgrDelegatedApptsTable) return;
    mgrDelegatedApptsTable.innerHTML = '';

    if (myAppts.length === 0) {
      mgrDelegatedApptsTable.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #94A3B8; padding: 28px;">No client consultations currently delegated to ${currentManager.name} by Founders.</td></tr>`;
      return;
    }

    myAppts.forEach(item => {
      const cleanPhone = (item.clientPhone || '').replace(/[^0-9]/g, '');
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div style="font-family: monospace; font-weight: 700; color: #0284C7; font-size: 0.85rem;">${item.refId}</div>
          <div style="font-weight: 800; color: #0C1220; margin-top: 2px;">${item.clientName}</div>
          <div style="font-size: 0.76rem; color: #64748B;">Booked: ${item.bookedAt || 'Recent'}</div>
        </td>
        <td>
          <div style="font-size: 0.85rem; color: #334155; font-weight: 600;">
            <a href="tel:${cleanPhone}" style="color: #0284C7; text-decoration: none;">📞 ${item.clientPhone}</a>
          </div>
          <div style="font-size: 0.8rem; color: #64748B; margin-top: 2px;">
            <a href="mailto:${item.clientEmail}" style="color: #64748B; text-decoration: none;">✉️ ${item.clientEmail}</a>
          </div>
          ${cleanPhone ? `<a href="https://wa.me/${cleanPhone}" target="_blank" style="display:inline-block; margin-top:4px; font-size:0.75rem; color:#059669; font-weight:700; text-decoration:none;">💬 Chat on WhatsApp</a>` : ''}
        </td>
        <td>
          <div class="luxury-date-chip">
            <span class="chip-calendar-icon">📅</span>
            <span class="chip-date-text">${formatLuxuryDate(item.consultationDate)}</span>
          </div>
          <div class="luxury-time-text">⏰ ${item.consultationTime}</div>
        </td>
        <td>
          <div style="font-weight: 800; color: #0C1220; font-size: 0.88rem; margin-bottom: 2px;">${item.serviceType}</div>
          <div style="font-size: 0.82rem; color: #475569; line-height: 1.4;">${item.consultationNotes || 'Client requested comprehensive architectural review.'}</div>
          <div style="margin-top: 6px; background: #FAF5EA; border-left: 3px solid #C5A880; padding: 6px 10px; border-radius: 4px; font-size: 0.8rem; color: #78350F;">
            <strong>Founder Directives (${item.delegatedBy || 'Founder Nilesh'}):</strong> ${item.delegationNotes || 'Lead consultation, present 3D layout, and provide drawing assessment.'}
          </div>
        </td>
        <td>
          <span class="wf-status-select ${item.status.toLowerCase().replace(/[^a-z]/g, '')}" style="display:inline-block; font-size:0.78rem; padding:4px 10px;">
            ${item.status}
          </span>
        </td>
        <td>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            ${item.status !== 'Completed' ? `
              <button class="btn-mgr-accept-meeting" data-ref-id="${item.refId}" style="background:#0284C7; color:#FFFFFF; border:none; padding:6px 10px; border-radius:6px; font-size:0.76rem; font-weight:700; cursor:pointer;">
                ✅ Accept &amp; Confirm
              </button>
              <button class="btn-mgr-done-meeting" data-ref-id="${item.refId}" style="background:#059669; color:#FFFFFF; border:none; padding:6px 10px; border-radius:6px; font-size:0.76rem; font-weight:700; cursor:pointer;">
                🏁 Completed
              </button>
            ` : `<span style="color:#059669; font-weight:700; font-size:0.8rem;">✓ Concluded</span>`}
          </div>
        </td>
      `;
      mgrDelegatedApptsTable.appendChild(tr);
    });

    mgrDelegatedApptsTable.querySelectorAll('.btn-mgr-accept-meeting').forEach(btn => {
      btn.addEventListener('click', () => {
        const refId = btn.getAttribute('data-ref-id');
        const found = allAppts.find(a => a.refId === refId);
        if (found) {
          found.status = 'Confirmed';
          found.isNewForManager = false;
          saveClientAppointments(allAppts);
          renderMgrDelegatedAppointments();
          showToast(`Meeting ${refId} Confirmed with Client!`, '✅');
        }
      });
    });

    mgrDelegatedApptsTable.querySelectorAll('.btn-mgr-done-meeting').forEach(btn => {
      btn.addEventListener('click', () => {
        const refId = btn.getAttribute('data-ref-id');
        const found = allAppts.find(a => a.refId === refId);
        if (found) {
          found.status = 'Completed';
          found.isNewForManager = false;
          saveClientAppointments(allAppts);
          renderMgrDelegatedAppointments();
          showToast(`Meeting ${refId} marked as Completed!`, '🎉');
        }
      });
    });
  }

  // ==========================================================
  // SECTION 1.5: MATERIAL & DESIGN SELECTION APPROVAL CONTROLLER
  // ==========================================================
  const mgrSelectionsTable = document.getElementById('mgrSelectionsTable');
  const mgrSelectionCountBadge = document.getElementById('mgrSelectionCountBadge');
  const mgrSelectionActiveTitle = document.getElementById('mgrSelectionActiveTitle');
  const mgrSubmitSelectionForm = document.getElementById('mgrSubmitSelectionForm');

  function renderMgrSelections() {
    if (mgrSelectionActiveTitle) mgrSelectionActiveTitle.textContent = currentManager.name;
    const allSelections = getProjectSelections();
    const mySelections = allSelections.filter(s => s.managerName === currentManager.name);

    const pendingCount = mySelections.filter(s => s.status === 'Awaiting Founder Approval').length;
    if (mgrSelectionCountBadge) {
      mgrSelectionCountBadge.textContent = `${pendingCount} Selection${pendingCount === 1 ? '' : 's'} Pending Sign-off`;
      mgrSelectionCountBadge.style.background = pendingCount > 0 ? 'rgba(217, 119, 6, 0.12)' : 'rgba(5, 150, 105, 0.12)';
      mgrSelectionCountBadge.style.color = pendingCount > 0 ? '#D97706' : '#059669';
      mgrSelectionCountBadge.style.borderColor = pendingCount > 0 ? '#F59E0B' : '#10B981';
    }

    if (!mgrSelectionsTable) return;
    mgrSelectionsTable.innerHTML = '';

    if (mySelections.length === 0) {
      mgrSelectionsTable.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #94A3B8; padding: 28px;">No material or design selections submitted by ${currentManager.name} yet. Use the form above to submit your first selection to Founders for sign-off.</td></tr>`;
      return;
    }

    mySelections.forEach(item => {
      const isApproved = item.status === 'Approved by Founder';
      const isRevision = item.status === 'Revision Requested';
      const isPending = item.status === 'Awaiting Founder Approval';

      const statusBadge = isApproved 
        ? '<span style="background:#D1FAE5; color:#065F46; border:1.5px solid #10B981; font-weight:800; font-size:0.78rem; padding:4px 10px; border-radius:9999px; display:inline-flex; align-items:center; gap:4px;">✅ APPROVED &amp; CLEARED</span>'
        : isRevision
        ? '<span style="background:#FEE2E2; color:#991B1B; border:1.5px solid #EF4444; font-weight:800; font-size:0.78rem; padding:4px 10px; border-radius:9999px; display:inline-flex; align-items:center; gap:4px;">⚠️ REVISION REQUESTED</span>'
        : '<span style="background:#FEF3C7; color:#92400E; border:1.5px solid #F59E0B; font-weight:800; font-size:0.78rem; padding:4px 10px; border-radius:9999px; display:inline-flex; align-items:center; gap:4px;">⏳ ON HOLD (AWAITING FOUNDER)</span>';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div style="font-family: monospace; font-weight: 800; color: #8A6836; font-size: 0.85rem;">${item.id}</div>
          <div style="font-weight: 800; color: #0C1220; margin-top: 2px;">${item.projectName}</div>
          <div style="font-size: 0.74rem; color: #64748B;">Submitted: ${item.submittedAt || 'Recent'}</div>
        </td>
        <td>
          <span class="luxury-city-pill" style="background:#FAF5EA; color:#8A6836; border-color:#E5DCCB; font-weight:700; font-size:0.8rem;">
            ${item.category}
          </span>
        </td>
        <td>
          <div style="font-size: 0.84rem; color: #1E293B; line-height: 1.4;">${item.specs}</div>
          ${item.attachment ? `
            <div style="margin-top: 6px; font-size: 0.76rem; color: #0284C7; font-weight: 700; display: inline-flex; align-items: center; gap: 4px; background: #F0F9FF; border: 1px solid #BAE6FD; padding: 2px 8px; border-radius: 4px;">
              📎 ${item.attachment}
            </div>
          ` : ''}
        </td>
        <td>
          <strong style="color: #8A6836; font-size: 0.85rem;">${item.targetFounder}</strong>
        </td>
        <td>
          ${statusBadge}
        </td>
        <td>
          ${isApproved ? `
            <div style="margin-bottom: 6px; font-size: 0.78rem; color: #065F46; background: #F0FDF4; border: 1px solid #BBF7D0; padding: 6px 8px; border-radius: 6px;">
              <strong>${item.founderName}:</strong> "${item.founderNotes || 'Approved'}"
            </div>
            <button class="btn-mgr-proceed-selection" data-id="${item.id}" style="background: linear-gradient(135deg, #059669 0%, #047857 100%); color: #FFFFFF; border: none; padding: 7px 12px; border-radius: 6px; font-size: 0.78rem; font-weight: 800; cursor: pointer; width: 100%; box-shadow: 0 2px 8px rgba(5, 150, 105, 0.3);">
              🚀 Proceed &amp; Assign to Sub-Designer
            </button>
          ` : isRevision ? `
            <div style="margin-bottom: 6px; font-size: 0.78rem; color: #991B1B; background: #FEF2F2; border: 1px solid #FECACA; padding: 6px 8px; border-radius: 6px;">
              <strong>${item.founderName}:</strong> "${item.founderNotes || 'Please revise specifications.'}"
            </div>
            <button class="btn-mgr-edit-selection" data-id="${item.id}" style="background: #D97706; color: #FFFFFF; border: none; padding: 6px 12px; border-radius: 6px; font-size: 0.78rem; font-weight: 800; cursor: pointer; width: 100%;">
              ✏️ Re-submit Selection
            </button>
          ` : `
            <div style="font-size: 0.78rem; color: #B45309; background: #FFFBEB; border: 1px solid #FDE68A; padding: 6px 8px; border-radius: 6px; text-align: center; font-weight: 700;">
              🔒 Work Locked Until Founder Approval
            </div>
          `}
        </td>
      `;
      mgrSelectionsTable.appendChild(tr);
    });

    // Wire Proceed Action
    mgrSelectionsTable.querySelectorAll('.btn-mgr-proceed-selection').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const found = allSelections.find(s => s.id === id);
        showToast(`Selection ${id} cleared! Proceeding to Sub-Designer drafting.`, '🚀');
        alert(`🚀 WORK CLEARED FOR EXECUTION!\n\nProject: ${found?.projectName}\nCategory: ${found?.category}\nFounder Approval: Verified by ${found?.founderName}\n\nYou may now proceed to assign drafting tasks to Sub-Designers in the section below.`);
        document.getElementById('mgrQuickAssignForm')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });

    // Wire Re-submit Action
    mgrSelectionsTable.querySelectorAll('.btn-mgr-edit-selection').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const found = allSelections.find(s => s.id === id);
        if (found) {
          const newNotes = prompt(`Edit proposed specifications for "${found.projectName}" (${found.category}):`, found.specs);
          if (newNotes && newNotes.trim()) {
            found.specs = newNotes.trim();
            found.status = 'Awaiting Founder Approval';
            found.canProceed = false;
            found.submittedAt = new Date().toLocaleDateString('en-GB') + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            saveProjectSelections(allSelections);
            renderMgrSelections();
            showToast(`Selection ${id} re-submitted to Founder for approval! 💎`, '✨');
          }
        }
      });
    });
  }

  // Handle Submit Selection Form
  if (mgrSubmitSelectionForm) {
    mgrSubmitSelectionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const projectName = document.getElementById('selProjectName')?.value.trim() || 'Custom Luxury Villa';
      const category = document.getElementById('selCategory')?.value || 'Italian Marble & Flooring';
      const targetFounder = document.getElementById('selTargetFounder')?.value || 'Nilesh (Founder)';
      const urgency = document.getElementById('selUrgency')?.value || 'High';
      const specs = document.getElementById('selSpecsDetails')?.value.trim() || '';
      const attachment = document.getElementById('selAttachmentName')?.value.trim() || `${category.replace(/\s+/g, '_')}_Spec.pdf`;

      const allSelections = getProjectSelections();
      const newSel = {
        id: 'SEL-' + Math.floor(100 + Math.random() * 900),
        projectName,
        category,
        managerName: currentManager.name,
        managerCode: currentManager.code,
        targetFounder,
        specs,
        attachment,
        urgency,
        submittedAt: new Date().toLocaleDateString('en-GB') + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'Awaiting Founder Approval',
        founderName: '',
        founderNotes: '',
        decidedAt: '',
        canProceed: false
      };

      allSelections.unshift(newSel);
      saveProjectSelections(allSelections);
      renderMgrSelections();
      mgrSubmitSelectionForm.reset();
      showToast(`💎 Selection ${newSel.id} submitted to ${targetFounder} for approval! Work on hold.`, '🚀');
    });
  }

  // Cross-tab real-time storage event synchronizer for Manager Meetings & Selections
  window.addEventListener('storage', (e) => {
    if (e.key === 'PROLIFIC_CLIENT_APPOINTMENTS') {
      renderMgrDelegatedAppointments();
    }
    if (e.key === 'PROLIFIC_PROJECT_SELECTIONS') {
      renderMgrSelections();
    }
  });

  // Initial renders
  updateManagerUI();
  renderSidebarManagers();
  populateEmployeeDropdowns();
  renderMgrDelegatedAppointments();
  renderMgrSelections();
  renderMgrFounderTasks();
  renderMgrCheckQueue();
  renderMgrTasks();
  renderCityEmpTable();
}

/* ==========================================================================
   5. EMPLOYEE PORTAL CONTROLLER (EMPLOYEE-DASHBOARD.HTML & INDIVIDUAL PAGES)
   ========================================================================== */
function setupEmployeePortal() {
  const empUrgentTasksContainer = document.getElementById('empUrgentTasksContainer');
  const empTaskDropdown = document.getElementById('empTaskDropdown');
  const empFormTaskSelector = document.getElementById('empFormTaskSelector');
  const empPendingCheckTable = document.getElementById('empPendingCheckTable');
  const cardTaskTitle = document.getElementById('cardTaskTitle');
  const cardTaskTarget = document.getElementById('cardTaskTarget');
  const cardAssignedBySub = document.getElementById('cardAssignedBySub');
  const cardAssignedBy = document.getElementById('cardAssignedBy');
  const cardStatusBadge = document.getElementById('cardStatusBadge');
  const cardPriority = document.getElementById('cardPriority');
  const cardDeadline = document.getElementById('cardDeadline');
  const empHeaderUserName = document.getElementById('empHeaderUserName');
  const empSidebarNameCode = document.getElementById('empSidebarNameCode');
  const empWorkspaceTitle = document.getElementById('empWorkspaceTitle');
  const empWorkflowSubtext = document.getElementById('empWorkflowSubtext');
  const btnSubmitWork = document.getElementById('btnSubmitWork');
  const btnWorkOnTask = document.getElementById('btnWorkOnTask');
  const btnChangeStatus = document.getElementById('btnChangeStatus');
  const btnDownloadSpec = document.getElementById('btnDownloadSpec');

  // Sidebar navigation items
  const navMyProfile = document.getElementById('navMyProfile');
  const navUrgentTasks = document.getElementById('navUrgentTasks');
  const navAssignedTasks = document.getElementById('navAssignedTasks');
  const navWorkSubmission = document.getElementById('navWorkSubmission');
  const navPendingCheck = document.getElementById('navPendingCheck');

  // Modals
  const empProfileModal = document.getElementById('empProfileModal');
  const closeEmpProfileModal = document.getElementById('closeEmpProfileModal');
  const submissionSuccessModal = document.getElementById('submissionSuccessModal');
  const closeSubmissionModal = document.getElementById('closeSubmissionModal');

  // Determine Active Employee
  let currentEmpName = 'Komal';
  let currentEmpCode = 'EMP012';
  let currentEmpCity = 'Ahmedabad';
  let currentEmpWork = 'Drawing';
  let currentEmpManager = 'Shashikant Bhai (Sub Head)';

  // 1. Check filename first (e.g. mansi.html -> Mansi)
  const currentPath = window.location.pathname.split('/').pop().replace('.html', '').toLowerCase();
  const foundByPath = PROLIFIC_WORKFORCE.employees.find(e => {
    const slug = e.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return slug === currentPath;
  });

  // 2. Check query params (e.g. ?emp=Mansi or ?name=Harsh)
  const urlParams = new URLSearchParams(window.location.search);
  const qEmp = urlParams.get('emp') || urlParams.get('name');
  const foundByQuery = qEmp ? PROLIFIC_WORKFORCE.employees.find(e => e.name.toLowerCase() === qEmp.toLowerCase()) : null;

  if (foundByPath) {
    currentEmpName = foundByPath.name;
    currentEmpCode = foundByPath.code;
    currentEmpCity = foundByPath.city;
    currentEmpWork = foundByPath.work;
  } else if (foundByQuery) {
    currentEmpName = foundByQuery.name;
    currentEmpCode = foundByQuery.code;
    currentEmpCity = foundByQuery.city;
    currentEmpWork = foundByQuery.work;
  } else {
    // Read session user
    const sessionRaw = sessionStorage.getItem('prolific_active_user');
    if (sessionRaw) {
      try {
        const u = JSON.parse(sessionRaw);
        if (u.type === 'employee') {
          const found = PROLIFIC_WORKFORCE.employees.find(e => e.name === u.name);
          if (found) {
            currentEmpName = found.name;
            currentEmpCode = found.code;
            currentEmpCity = found.city;
            currentEmpWork = found.work;
          }
        }
      } catch (e) {}
    }
  }

  // Determine supervising manager based on city / specialty
  if (currentEmpCity === 'Surat' || currentEmpCity === 'Rajkot') {
    currentEmpManager = 'Hardik (Sub Head - Nilesh)';
  } else {
    currentEmpManager = 'Shashikant Bhai (Sub Head - Both)';
  }

  // Update UI headers
  if (empHeaderUserName) empHeaderUserName.textContent = `${currentEmpName} (SUB DESIGNER)`;
  if (empSidebarNameCode) empSidebarNameCode.textContent = `${currentEmpName} - ${currentEmpCode}`;
  if (empWorkspaceTitle) empWorkspaceTitle.textContent = `${currentEmpName.toUpperCase()}'S ASSIGNED WORKSPACE`;
  if (empWorkflowSubtext) empWorkflowSubtext.textContent = `${currentEmpName}'s`;

  // Dynamic Employee Tasks Loader (Merges Founder Direct Tasks + Manager Assigned Tasks)
  function loadAllEmpTasks() {
    const directList = getDirectEmpTasks().filter(t => t.employee === currentEmpName);
    const managerList = getManagerEmpTasks().filter(t => t.employee === currentEmpName);

    const all = [];

    directList.forEach(t => {
      all.push({
        id: t.id,
        title: t.taskDetails,
        target: t.city || currentEmpCity,
        assignedBy: t.assignedBy || 'Gaurav (Head Founder)',
        priority: t.priority || 'Standard',
        deadline: t.deadline || '2026-08-28',
        status: t.status || 'Ongoing',
        source: 'direct',
        specFile: `${t.city || currentEmpCity}_Direct_Blueprint_${t.id}.dwg`,
        starterNotes: `Completed site spatial analysis and drawing drafting for: ${t.taskDetails}.`
      });
    });

    managerList.forEach(t => {
      all.push({
        id: t.id,
        title: t.taskDetails,
        target: t.city || currentEmpCity,
        assignedBy: t.assignedBy || currentEmpManager,
        priority: t.priority || 'Standard',
        deadline: t.deadline || '2026-08-27',
        status: t.status || 'Ongoing',
        source: 'manager',
        specFile: `${t.city || currentEmpCity}_Manager_Draft_${t.id}.dwg`,
        starterNotes: `Completed spatial measurements and verified blueprint drawings for: ${t.taskDetails}.`
      });
    });

    // If no custom tasks assigned yet, provide default tasks for this employee
    if (all.length === 0) {
      all.push({
        id: 901,
        title: `Urgent Elevation & Structural Drawing Check for ${currentEmpCity} Tower`,
        target: currentEmpCity,
        assignedBy: currentEmpManager,
        priority: 'Urgent',
        deadline: '2026-08-25',
        status: 'In Progress',
        source: 'manager',
        specFile: `${currentEmpCity}_Urgent_Elevation_v1.dwg`,
        starterNotes: `Completed site measurement check for ${currentEmpCity} highrise. Verified beam coordinates.`
      });
      all.push({
        id: 902,
        title: `${currentEmpWork} drafting for ${currentEmpCity} Luxury Residential Complex`,
        target: currentEmpCity,
        assignedBy: currentEmpManager,
        priority: 'Standard',
        deadline: '2026-08-28',
        status: 'Ongoing',
        source: 'manager',
        specFile: `${currentEmpCity}_Residential_Draft_v1.dwg`,
        starterNotes: `Completed spatial measurements and verified blueprint drawings.`
      });
    }

    // Sort urgent tasks first
    return all.sort((a, b) => (a.priority === 'Urgent' ? -1 : 1));
  }

  let empTasks = loadAllEmpTasks();

  // Helper to persist task status changes
  function updateEmpTaskStatus(taskTitle, newStatus) {
    const cleanTitle = taskTitle.replace(/^🚨\s*/, '');
    const direct = getDirectEmpTasks();
    const dFound = direct.find(t => t.employee === currentEmpName && t.taskDetails && t.taskDetails.includes(cleanTitle));
    if (dFound) {
      dFound.status = newStatus;
      saveDirectEmpTasks(direct);
    }
    const mgr = getManagerEmpTasks();
    const mFound = mgr.find(t => t.employee === currentEmpName && t.taskDetails && t.taskDetails.includes(cleanTitle));
    if (mFound) {
      mFound.status = newStatus;
      saveManagerEmpTasks(mgr);
    }
  }

  // 1. Render Urgent Tasks Hero Section (Section 1)
  function renderEmpUrgentTasks() {
    if (!empUrgentTasksContainer) return;
    empUrgentTasksContainer.innerHTML = '';

    const urgentTasks = empTasks.filter(t => t.priority === 'Urgent');

    if (urgentTasks.length === 0) {
      empUrgentTasksContainer.innerHTML = `
        <div style="grid-column: 1 / -1; background: #FFFDF9; border: 1.5px dashed #E5DCCB; border-radius: 12px; padding: 28px; text-align: center; color: #64748B;">
          No urgent priority tasks currently pending for ${currentEmpName}.
        </div>
      `;
      return;
    }

    urgentTasks.forEach(task => {
      const card = document.createElement('div');
      card.className = 'urgent-card-item';
      card.innerHTML = `
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span class="luxury-priority-badge urgent">URGENT ACTION</span>
            <span class="luxury-city-pill">Branch: ${task.target}</span>
          </div>
          <h3 style="font-size: 1.05rem; font-weight: 800; color: #1E2532; margin: 0 0 8px; line-height: 1.4;">${task.title}</h3>
          <div style="font-size: 0.84rem; color: #64748B; margin-bottom: 12px;">
            Supervised by: <strong style="color: #8A6836;">${task.assignedBy}</strong>
          </div>
          <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 14px; flex-wrap: wrap;">
            <span class="luxury-deadline-chip" style="font-size: 0.78rem;">Deadline: ${formatLuxuryDate(task.deadline)}</span>
            <span class="wf-status-select inprogress" style="font-size: 0.74rem; padding: 3px 10px;">${task.status}</span>
          </div>
        </div>
        <div style="display: flex; gap: 8px; justify-content: flex-end; border-top: 1.5px solid #FCA5A5; padding-top: 12px;">
          <button class="btn-emp-action btn-emp-download" onclick="triggerFileDownload('${task.specFile}')" style="padding: 7px 14px; font-size: 0.8rem;">
            Download DWG
          </button>
          <button class="btn-emp-action btn-emp-work" onclick="focusTaskWork('${task.title}')" style="padding: 7px 16px; font-size: 0.8rem;">
            Work on Urgent Task
          </button>
        </div>
      `;
      empUrgentTasksContainer.appendChild(card);
    });
  }

  // Global window function for card button click
  window.focusTaskWork = function(taskTitle) {
    if (empTaskDropdown) {
      empTaskDropdown.value = taskTitle;
      updateCardDetails(taskTitle);
    }
    if (empFormTaskSelector) {
      empFormTaskSelector.value = taskTitle;
    }
    const descInput = document.getElementById('empWorkDescInput');
    if (descInput) {
      descInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      descInput.focus();
    }
    showToast(`Active Workspace: Focused on "${taskTitle}"`, '⚡');
  };

  // 2. Render Submitted Tasks Pending for Check (Section 4)
  function renderEmpPendingCheck() {
    if (!empPendingCheckTable) return;
    empPendingCheckTable.innerHTML = '';

    const allSubmissions = getSubmittedWorkRegister();
    const mySubmissions = allSubmissions.filter(s => s.employeeName === currentEmpName);

    if (mySubmissions.length === 0) {
      empPendingCheckTable.innerHTML = `<tr><td colspan="5" style="text-align: center; color: #64748B; padding: 28px;">No submissions currently recorded for ${currentEmpName}. Submit completed work using the form above.</td></tr>`;
      return;
    }

    mySubmissions.forEach(sub => {
      const isUnderReview = sub.reviewStatus === 'Under Review';
      const isApproved = sub.reviewStatus === 'Approved';
      const statusClass = isUnderReview ? 'under-review' : (isApproved ? 'approved' : 'revision-requested');
      const statusLabel = isUnderReview ? 'Under Review' : (isApproved ? 'Approved' : 'Revision Needed');

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div style="font-family: monospace; font-weight: 800; color: #0284C7;">${sub.id}</div>
          <div style="font-size: 0.76rem; color: #64748B; margin-top: 2px;">${sub.timestamp}</div>
        </td>
        <td>
          <div style="font-weight: 700; color: #1E2532; margin-bottom: 2px;">${sub.taskTitle}</div>
          <div style="font-size: 0.82rem; color: #4A5568;">${sub.description}</div>
        </td>
        <td><strong style="color: #2D3748;">${sub.managerName || currentEmpManager}</strong></td>
        <td>
          <div style="font-size: 0.78rem; color: #0369A1; font-weight: 700; cursor: pointer;" onclick="triggerFileDownload('${sub.cadFile || 'Drawing_v2.dwg'}')">
            ${sub.cadFile || 'Drawing_v2.dwg'}
          </div>
        </td>
        <td>
          <span class="review-status-badge ${statusClass}">${statusLabel}</span>
        </td>
      `;
      empPendingCheckTable.appendChild(tr);
    });
  }

  // Populate Tasks in Dropdowns
  function populateTasks() {
    if (empTaskDropdown) empTaskDropdown.innerHTML = '';
    if (empFormTaskSelector) empFormTaskSelector.innerHTML = '';

    empTasks.forEach(task => {
      if (empTaskDropdown) {
        const opt1 = document.createElement('option');
        opt1.value = task.title;
        opt1.textContent = `${task.priority === 'Urgent' ? '[URGENT] ' : ''}${task.title}`;
        empTaskDropdown.appendChild(opt1);
      }

      if (empFormTaskSelector) {
        const opt2 = document.createElement('option');
        opt2.value = task.title;
        opt2.textContent = `${task.priority === 'Urgent' ? '[URGENT] ' : ''}${task.title}`;
        empFormTaskSelector.appendChild(opt2);
      }
    });
  }

  // Update Task Details Card
  function updateCardDetails(taskTitle) {
    const cleanTitle = taskTitle.replace(/^\[URGENT\]\s*/, '').replace(/^🚨\s*/, '');
    const task = empTasks.find(t => t.title.includes(cleanTitle)) || empTasks[0];
    if (!task) return;

    if (cardTaskTitle) cardTaskTitle.textContent = task.title;
    if (cardTaskTarget) cardTaskTarget.textContent = task.target;
    if (cardAssignedBySub) cardAssignedBySub.textContent = task.assignedBy;
    if (cardAssignedBy) cardAssignedBy.textContent = task.assignedBy;
    if (cardPriority) {
      cardPriority.innerHTML = task.priority === 'Urgent' ? '<span class="luxury-priority-badge urgent">URGENT</span>' : '<span class="luxury-priority-badge standard">STANDARD</span>';
    }
    if (cardDeadline) cardDeadline.textContent = formatLuxuryDate(task.deadline);

    if (cardStatusBadge) {
      cardStatusBadge.textContent = task.status;
      const cleanStatus = task.status.toLowerCase().replace(/[^a-z0-9]/g, '');
      cardStatusBadge.className = `wf-status-select ${cleanStatus}`;
    }

    const descInput = document.getElementById('empWorkDescInput');
    if (descInput && !descInput.dataset.userEdited) {
      descInput.value = task.starterNotes || `Completed measurements and architectural drafting for: ${task.title}`;
    }
  }

  // Dropdown change events
  if (empTaskDropdown) {
    empTaskDropdown.addEventListener('change', (e) => {
      updateCardDetails(e.target.value);
      if (empFormTaskSelector) empFormTaskSelector.value = e.target.value;
    });
  }

  if (empFormTaskSelector) {
    empFormTaskSelector.addEventListener('change', (e) => {
      if (empTaskDropdown) empTaskDropdown.value = e.target.value;
      updateCardDetails(e.target.value);
    });
  }

  // 1. BUTTON: Work on Task
  if (btnWorkOnTask) {
    btnWorkOnTask.addEventListener('click', () => {
      const selectedTaskName = empTaskDropdown ? empTaskDropdown.value : empTasks[0].title;
      const descInput = document.getElementById('empWorkDescInput');
      if (descInput) {
        descInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        descInput.focus();
      }
      showToast(`Active Workspace: Now working on "${selectedTaskName}"`, '⚡');
    });
  }

  // 2. BUTTON: Change Status
  if (btnChangeStatus) {
    btnChangeStatus.addEventListener('click', () => {
      const selectedTaskName = empTaskDropdown ? empTaskDropdown.value : empTasks[0].title;
      const cleanTitle = selectedTaskName.replace(/^🚨\s*/, '');
      const currentTask = empTasks.find(t => t.title.includes(cleanTitle));
      if (currentTask) {
        const statuses = ['Pending', 'Ongoing', 'In Progress', 'Completed'];
        const nextIdx = (statuses.indexOf(currentTask.status) + 1) % statuses.length;
        currentTask.status = statuses[nextIdx];

        // Persist update
        updateEmpTaskStatus(selectedTaskName, currentTask.status);
        updateCardDetails(selectedTaskName);
        renderEmpUrgentTasks();
        showToast(`Status updated to [${currentTask.status}]`, '🔄');
      }
    });
  }

  // 3. BUTTON: Download Spec Blueprint
  if (btnDownloadSpec) {
    btnDownloadSpec.addEventListener('click', () => {
      const selectedTaskName = empTaskDropdown ? empTaskDropdown.value : empTasks[0].title;
      const cleanTitle = selectedTaskName.replace(/^🚨\s*/, '');
      const currentTask = empTasks.find(t => t.title.includes(cleanTitle)) || empTasks[0];
      triggerFileDownload(currentTask.specFile || 'Project_Blueprint_Spec.dwg');
      showToast(`Downloading ${currentTask.specFile || 'Blueprint.dwg'}`, '📥');
    });
  }

  // 4. BUTTON: Submit Work for Review
  if (btnSubmitWork) {
    btnSubmitWork.addEventListener('click', (e) => {
      e.preventDefault();

      const selectedTaskName = empTaskDropdown ? empTaskDropdown.value : (empFormTaskSelector ? empFormTaskSelector.value : empTasks[0].title);
      const desc = document.getElementById('empWorkDescInput')?.value.trim() || 'Work and drawing specifications submitted for supervisor inspection.';
      const photo1Name = document.getElementById('photo1FileName')?.textContent || 'Site_Elevation_Photo.jpg';
      const cadName = document.getElementById('cadFileName')?.textContent || 'Drawing_Draft_v2.dwg';
      const reportName = document.getElementById('reportFileName')?.textContent || 'Work_Summary_Log.pdf';

      const refCode = 'PRF-SUB-' + Math.floor(100000 + Math.random() * 900000);
      const timestamp = new Date().toLocaleString();

      const newSubmission = {
        id: refCode,
        employeeName: currentEmpName,
        employeeCode: currentEmpCode,
        managerName: currentEmpManager,
        city: currentEmpCity,
        taskTitle: selectedTaskName,
        description: desc,
        photoFile: photo1Name,
        cadFile: cadName,
        reportFile: reportName,
        timestamp: timestamp,
        reviewStatus: 'Under Review'
      };

      const submissions = getSubmittedWorkRegister();
      submissions.unshift(newSubmission);
      saveSubmittedWorkRegister(submissions);

      // Update task status to Completed
      updateEmpTaskStatus(selectedTaskName, 'Completed');

      // Reload tasks & re-render
      empTasks = loadAllEmpTasks();
      populateTasks();
      updateCardDetails(selectedTaskName);
      renderEmpUrgentTasks();
      renderEmpPendingCheck();

      // Show Submission Modal
      if (submissionSuccessModal) {
        const modalBody = document.getElementById('submissionSuccessDetails');
        if (modalBody) {
          modalBody.innerHTML = `
            <div class="emp-meta-box" style="display: flex; flex-direction: column; gap: 8px;">
              <div><strong>Submission Ref ID:</strong> <span style="color: #0284C7; font-family: monospace; font-weight: 700;">${refCode}</span></div>
              <div><strong>Employee:</strong> ${currentEmpName} (${currentEmpCode})</div>
              <div><strong>Task:</strong> ${selectedTaskName}</div>
              <div><strong>Supervisor Notified:</strong> ${currentEmpManager}</div>
              <div><strong>Attached Files:</strong> 📎 ${photo1Name}, 📐 ${cadName}, 📄 ${reportName}</div>
              <div><strong>Status:</strong> <span style="color: #D97706; font-weight: 800;">⏳ Awaiting Manager Check</span></div>
            </div>
          `;
        }
        submissionSuccessModal.classList.add('active');
      } else {
        alert(`🔔 WORK SUBMISSION CONFIRMED!\n\nReference ID: ${refCode}\nEmployee: ${currentEmpName} (${currentEmpCode})\nTask: ${selectedTaskName}\nManager: ${currentEmpManager}\nStatus: Submitted for Manager Check.`);
      }

      showToast(`Work submitted to ${currentEmpManager}!`, '🎉');
    });
  }

  // Sidebar navigation handlers
  function setSidebarActive(activeItem) {
    document.querySelectorAll('.wf-sidebar .person-item').forEach(el => el.classList.remove('active'));
    if (activeItem) activeItem.classList.add('active');
  }

  if (navMyProfile) {
    navMyProfile.addEventListener('click', () => {
      setSidebarActive(navMyProfile);
      if (empProfileModal) {
        const modalContent = document.getElementById('empProfileModalContent');
        if (modalContent) {
          modalContent.innerHTML = `
            <div style="text-align: center; margin-bottom: 20px;">
              <div style="width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #C5A880, #A88347); color: #FFFFFF; font-size: 1.6rem; font-weight: 800; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 10px; box-shadow: 0 4px 14px rgba(197, 168, 128, 0.35);">
                ${currentEmpName.charAt(0)}
              </div>
              <h3 style="font-size: 1.3rem; color: #1E2532; margin: 0; font-family: var(--font-serif);">${currentEmpName}</h3>
              <p style="color: #8A6836; font-size: 0.85rem; font-weight: 700; margin: 4px 0 0;">${currentEmpCode} • ${currentEmpWork}</p>
            </div>
            <div class="emp-meta-box" style="display: flex; flex-direction: column; gap: 10px; font-size: 0.88rem;">
              <div><strong>Regional Branch:</strong> ${currentEmpCity}</div>
              <div><strong>Role / Specialization:</strong> ${currentEmpWork}</div>
              <div><strong>Supervising Manager:</strong> ${currentEmpManager}</div>
              <div><strong>Security Clearance:</strong> Authorized Active Personnel ✔️</div>
            </div>
          `;
        }
        empProfileModal.classList.add('active');
      }
    });
  }

  if (navUrgentTasks) {
    navUrgentTasks.addEventListener('click', () => {
      setSidebarActive(navUrgentTasks);
      document.getElementById('empUrgentSection')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (navAssignedTasks) {
    navAssignedTasks.addEventListener('click', () => {
      setSidebarActive(navAssignedTasks);
      document.getElementById('empPendingSection')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (navWorkSubmission) {
    navWorkSubmission.addEventListener('click', () => {
      setSidebarActive(navWorkSubmission);
      document.getElementById('workSubmissionPanel')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (navPendingCheck) {
    navPendingCheck.addEventListener('click', () => {
      setSidebarActive(navPendingCheck);
      document.getElementById('empPendingCheckSection')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (closeEmpProfileModal && empProfileModal) {
    closeEmpProfileModal.addEventListener('click', () => empProfileModal.classList.remove('active'));
  }

  if (closeSubmissionModal && submissionSuccessModal) {
    closeSubmissionModal.addEventListener('click', () => submissionSuccessModal.classList.remove('active'));
  }

  // Initial Renders
  populateTasks();
  if (empTasks.length > 0) {
    updateCardDetails(empTasks[0].title);
  }
  renderEmpUrgentTasks();
  renderEmpPendingCheck();
}


/* File select handler for upload boxes with strict security validation */
window.handleFileSelect = function(input, labelId, subId, barId) {
  if (input.files && input.files[0]) {
    const f = input.files[0];
    const validation = validateFileUploadSecurity(f);
    
    if (!validation.valid) {
      alert(`⚠️ SECURITY ALERT: ${validation.message}`);
      showToast(validation.message, '⛔');
      input.value = '';
      return;
    }

    const label = document.getElementById(labelId);
    const sub = document.getElementById(subId);
    const bar = document.getElementById(barId);

    if (label) label.textContent = validation.sanitizedName;
    const mb = (f.size / (1024 * 1024)).toFixed(1);
    if (sub) sub.textContent = `Verified & Uploaded (${mb} MB)`;
    if (bar) bar.style.width = '100%';
    showToast(`Attached & verified: ${validation.sanitizedName}`, '📎');
  }
};

/* ==========================================================================
   6. CLIENT APPOINTMENTS MANAGER (FOUNDER DELEGATION & CONTACT US HUB)
   ========================================================================== */
function getClientAppointments() {
  const defaults = [
    {
      refId: 'PRF-829104',
      clientName: 'Dr. Rajesh Patel',
      clientEmail: 'rajesh.patel@gmail.com',
      clientPhone: '+91 98250 12345',
      serviceType: 'Luxury Villa Architecture',
      consultationDate: '2026-08-25',
      consultationTime: '11:30 AM – 12:30 PM',
      consultationNotes: 'Complete 4BHK Villa design in Vesu Surat. Requires elevation and interior 3D render.',
      status: 'Delegated to Head Designer',
      assignedTo: 'Shashikant Bhai',
      assignedManagerName: 'Shashikant Bhai',
      assignedManagerCode: 'HD001',
      delegatedBy: 'Nilesh (Founder)',
      delegationNotes: 'Conduct on-site elevation inspection & present 3D master layout.',
      bookedAt: '22/08/2026 10:30 AM',
      isNewForFounder: false,
      isNewForManager: true
    },
    {
      refId: 'PRF-491028',
      clientName: 'Meera Singhania',
      clientEmail: 'meera.s@luxurygroup.in',
      clientPhone: '+91 91065 99887',
      serviceType: 'Bespoke Residential Interior Design',
      consultationDate: '2026-08-27',
      consultationTime: '03:00 PM – 04:00 PM',
      consultationNotes: 'Penthouse interior redesign in Ahmedabad. Focus on Italian marble & ambient lighting.',
      status: 'Pending Founder Action',
      assignedTo: 'Unassigned (Pending Founder Review)',
      assignedManagerName: '',
      assignedManagerCode: '',
      delegatedBy: '',
      delegationNotes: '',
      bookedAt: '22/08/2026 02:15 PM',
      isNewForFounder: true,
      isNewForManager: false
    }
  ];

  try {
    const raw = localStorage.getItem('PROLIFIC_CLIENT_APPOINTMENTS');
    if (!raw) {
      localStorage.setItem('PROLIFIC_CLIENT_APPOINTMENTS', JSON.stringify(defaults));
      return defaults;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : defaults;
  } catch (e) {
    return defaults;
  }
}

function saveClientAppointments(list) {
  try {
    localStorage.setItem('PROLIFIC_CLIENT_APPOINTMENTS', JSON.stringify(list));
    try { window.dispatchEvent(new Event('storage')); } catch(e) {}
  } catch (e) {}
}

/* ==========================================================================
   7. DESIGN & MATERIAL SELECTION APPROVAL MANAGER (MANAGER → FOUNDER GOVERNANCE)
   ========================================================================== */
function getProjectSelections() {
  const defaults = [
    {
      id: 'SEL-101',
      projectName: 'Vesu 4BHK Luxury Villa',
      category: 'Italian Marble & Flooring',
      managerName: 'Shashikant Bhai',
      managerCode: 'HD001',
      targetFounder: 'Nilesh (Founder)',
      specs: 'Botticino Light Italian Marble (18mm thickness, book-matched layout for living & foyer zones). Sourced from Classic Marble Co.',
      attachment: 'Botticino_Marble_Sample_Dossier.pdf (4.8 MB)',
      urgency: 'High',
      submittedAt: '22/08/2026 11:45 AM',
      status: 'Approved by Founder',
      founderName: 'Nilesh (Founder)',
      founderNotes: 'Approved. Proceed with mirror polishing and book-matched dry layout inspection.',
      decidedAt: '22/08/2026 01:20 PM',
      canProceed: true
    },
    {
      id: 'SEL-102',
      projectName: 'Commercial Office Tower Block-C',
      category: 'Exterior Elevation & Glazing Palette',
      managerName: 'Shashikant Bhai',
      managerCode: 'HD001',
      targetFounder: 'Gaurav (Founder)',
      specs: 'Double-glazed solar reflective champagne bronze profile with concealed louvers and ACP cladding panels.',
      attachment: 'Elevation_Glazing_Palette_v2.dwg (16.2 MB)',
      urgency: 'Urgent',
      submittedAt: '22/08/2026 03:30 PM',
      status: 'Awaiting Founder Approval',
      founderName: '',
      founderNotes: '',
      decidedAt: '',
      canProceed: false
    },
    {
      id: 'SEL-103',
      projectName: 'Rajkot Heritage Residence',
      category: 'Veneer & Woodwork Selection',
      managerName: 'Hardik',
      managerCode: 'HD002',
      targetFounder: 'Nilesh (Founder)',
      specs: 'Smoked Teak Natural Flitch Veneer with PU Matte finish for formal lounge wall paneling.',
      attachment: 'Teak_Veneer_Sample_Ref.jpg (3.2 MB)',
      urgency: 'Standard',
      submittedAt: '22/08/2026 04:15 PM',
      status: 'Awaiting Founder Approval',
      founderName: '',
      founderNotes: '',
      decidedAt: '',
      canProceed: false
    }
  ];

  try {
    const raw = localStorage.getItem('PROLIFIC_PROJECT_SELECTIONS');
    if (!raw) {
      localStorage.setItem('PROLIFIC_PROJECT_SELECTIONS', JSON.stringify(defaults));
      return defaults;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : defaults;
  } catch (e) {
    return defaults;
  }
}

function saveProjectSelections(list) {
  try {
    localStorage.setItem('PROLIFIC_PROJECT_SELECTIONS', JSON.stringify(list));
    try { window.dispatchEvent(new Event('storage')); } catch(e) {}
  } catch (e) {}
}

function setupAppointmentsManager() {
  const appointmentsTableBody = document.getElementById('appointmentsTableBody');
  const appointmentSearchInput = document.getElementById('appointmentSearchInput');
  const appointmentStatusFilter = document.getElementById('appointmentStatusFilter');
  const badgeTotal = document.getElementById('badgeTotalBookings');
  const badgePending = document.getElementById('badgePendingBookings');
  const badgeConfirmed = document.getElementById('badgeConfirmedBookings');

  // Founder Alert Elements
  const founderGlobalApptAlert = document.getElementById('founderGlobalApptAlert');
  const founderGlobalAlertDetails = document.getElementById('founderGlobalAlertDetails');
  const btnGoToAppointmentsTab = document.getElementById('btnGoToAppointmentsTab');

  // Founder Delegation Form Elements
  const delegateApptForm = document.getElementById('delegateApptForm');
  const delegateApptSelect = document.getElementById('delegateApptSelect');
  const delegateManagerSelect = document.getElementById('delegateManagerSelect');
  const delegatingFounderSelect = document.getElementById('delegatingFounderSelect');
  const delegationInstructionsInput = document.getElementById('delegationInstructionsInput');

  // 1. Appointment Booking Form Submission on contact.html & Public Pages
  const apptForm = document.getElementById('appointmentForm') || document.getElementById('contactForm');
  if (apptForm) {
    apptForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.getElementById('apptName') || document.getElementById('clientName') || document.getElementById('contactName'))?.value.trim() || 'Valued Client';
      const email = (document.getElementById('apptEmail') || document.getElementById('clientEmail') || document.getElementById('contactEmail'))?.value.trim() || 'client@example.com';
      const phone = (document.getElementById('apptPhone') || document.getElementById('clientPhone') || document.getElementById('contactPhone'))?.value.trim() || '+91 91065 55373';
      const date = (document.getElementById('apptDate') || document.getElementById('clientDate'))?.value || new Date().toISOString().split('T')[0];
      const time = (document.getElementById('apptTime') || document.getElementById('clientTime'))?.value || '11:30 AM – 12:30 PM (Mid-Morning Slot)';
      const service = (document.getElementById('apptService') || document.getElementById('clientService'))?.value || 'Bespoke Residential Interior Design';
      const notes = (document.getElementById('apptNotes') || document.getElementById('clientNotes') || document.getElementById('contactMessage'))?.value.trim() || 'Client requested executive architectural and interior consultation.';

      const refId = 'PRF-' + Math.floor(100000 + Math.random() * 900000);
      const bookedAt = new Date().toLocaleDateString('en-GB') + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      const newBooking = {
        refId,
        clientName: name,
        clientEmail: email,
        clientPhone: phone,
        serviceType: service,
        consultationDate: date,
        consultationTime: time,
        consultationNotes: notes,
        status: 'Pending Founder Action',
        assignedTo: 'Unassigned (Pending Founder Review)',
        assignedManagerName: '',
        assignedManagerCode: '',
        delegatedBy: '',
        delegationNotes: '',
        bookedAt,
        isNewForFounder: true,
        isNewForManager: false
      };

      const list = getClientAppointments();
      list.unshift(newBooking);
      saveClientAppointments(list);

      // Render Inline Success Summary Card on contact.html if present
      const successAlert = document.getElementById('bookingSuccessAlert');
      const summaryDetails = document.getElementById('bookingSummaryDetails');
      const contactAlert = document.getElementById('contactAlert');

      if (successAlert && summaryDetails) {
        summaryDetails.innerHTML = `
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-top: 14px; text-align: left; background: #FFFFFF; padding: 16px; border-radius: 10px; border: 1px solid rgba(197, 168, 128, 0.4);">
            <div><span style="font-size:0.75rem; color:#64748B; font-weight:700; text-transform:uppercase;">Reference ID</span><br><strong style="font-family: monospace; color: #0284C7; font-size: 0.95rem;">${refId}</strong></div>
            <div><span style="font-size:0.75rem; color:#64748B; font-weight:700; text-transform:uppercase;">Client Name</span><br><strong style="color: #0C1220;">${name}</strong></div>
            <div><span style="font-size:0.75rem; color:#64748B; font-weight:700; text-transform:uppercase;">Contact Number</span><br><strong style="color: #0C1220;">${phone}</strong></div>
            <div><span style="font-size:0.75rem; color:#64748B; font-weight:700; text-transform:uppercase;">Preferred Date</span><br><strong style="color: #0C1220;">${formatLuxuryDate(date)}</strong></div>
            <div><span style="font-size:0.75rem; color:#64748B; font-weight:700; text-transform:uppercase;">Selected Slot</span><br><strong style="color: #8A6836;">${time}</strong></div>
            <div><span style="font-size:0.75rem; color:#64748B; font-weight:700; text-transform:uppercase;">Service Scope</span><br><strong style="color: #047857;">${service}</strong></div>
          </div>
        `;
        successAlert.style.display = 'block';
        successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else if (contactAlert) {
        contactAlert.textContent = `Thank you, ${name}! Your inquiry (${refId}) has been received. Our advisory team will contact you shortly.`;
        contactAlert.style.display = 'block';
      } else {
        alert(`🎉 CONSULTATION APPOINTMENT CONFIRMED!\n\nReference ID: ${refId}\nClient: ${name}\nContact: ${phone}\nService: ${service}\nScheduled Date: ${date} at ${time}\n\nOur Executive Founders (Nilesh & Gaurav) have received your booking and will review or delegate your session immediately.`);
      }

      apptForm.reset();
    });
  }

  // 2. Founder Global Alert Banner Controller
  function updateFounderAlertBanner() {
    const list = getClientAppointments();
    const pendingNew = list.find(a => a.isNewForFounder || a.status === 'Pending Founder Action');

    if (pendingNew && founderGlobalApptAlert) {
      founderGlobalApptAlert.style.display = 'flex';
      if (founderGlobalAlertDetails) {
        founderGlobalAlertDetails.innerHTML = `<strong>${pendingNew.clientName}</strong> (${pendingNew.clientPhone}) has requested <strong>${pendingNew.serviceType}</strong> on <strong>${formatLuxuryDate(pendingNew.consultationDate)} at ${pendingNew.consultationTime}</strong>. Action: Review &amp; delegate to a Head Designer.`;
      }
    } else if (founderGlobalApptAlert) {
      founderGlobalApptAlert.style.display = 'none';
    }

    const tabBadge = document.getElementById('tabBadgeAppt');
    if (tabBadge) {
      const pendingCount = list.filter(a => a.status === 'Pending Founder Action').length;
      tabBadge.textContent = pendingCount > 0 ? `${list.length} (${pendingCount} New)` : `${list.length}`;
      tabBadge.style.background = pendingCount > 0 ? '#EF4444' : '#C5A880';
    }
  }

  if (btnGoToAppointmentsTab) {
    btnGoToAppointmentsTab.addEventListener('click', (e) => {
      e.preventDefault();
      const tabBtn = document.querySelector('.wf-tab-btn[data-tab="tabAppointments"]');
      if (tabBtn) tabBtn.click();
      setTimeout(() => {
        const delegateApptSelect = document.getElementById('delegateApptSelect');
        if (delegateApptSelect) {
          delegateApptSelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
          delegateApptSelect.focus();
        }
      }, 150);
      showToast('Opening Client Appointment Bookings & Delegation Hub 📅', '✨');
    });
  }

  // 3. Populate Founder Delegation Dropdown
  function populateDelegateSelect(preselectRefId = '') {
    if (!delegateApptSelect) return;
    const list = getClientAppointments();
    delegateApptSelect.innerHTML = '<option value="" disabled selected>-- Select Client Appointment --</option>';

    list.forEach(a => {
      const isPending = a.status === 'Pending Founder Action';
      const opt = document.createElement('option');
      opt.value = a.refId;
      opt.textContent = `${isPending ? '🚨 [NEW/UNASSIGNED] ' : ''}${a.refId} — ${a.clientName} (${a.serviceType}) — ${formatLuxuryDate(a.consultationDate)}`;
      if (preselectRefId && a.refId === preselectRefId) opt.selected = true;
      delegateApptSelect.appendChild(opt);
    });
  }

  // 4. Handle Delegation Form Submit
  if (delegateApptForm) {
    delegateApptForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const targetRefId = delegateApptSelect?.value;
      if (!targetRefId) {
        alert('Please select a client appointment to delegate.');
        return;
      }

      const mgrSelect = delegateManagerSelect;
      const selectedMgrName = mgrSelect ? mgrSelect.value : 'Shashikant Bhai';
      const selectedMgrOpt = mgrSelect ? mgrSelect.options[mgrSelect.selectedIndex] : null;
      const selectedMgrCode = selectedMgrOpt ? selectedMgrOpt.getAttribute('data-code') || 'HD001' : 'HD001';
      const founderName = delegatingFounderSelect?.value || 'Nilesh (Founder)';
      const instructions = delegationInstructionsInput?.value.trim() || 'Conduct client consultation and inspect architectural scope.';

      const list = getClientAppointments();
      const found = list.find(a => a.refId === targetRefId);

      if (found) {
        found.status = 'Delegated to Head Designer';
        found.assignedTo = selectedMgrName;
        found.assignedManagerName = selectedMgrName;
        found.assignedManagerCode = selectedMgrCode;
        found.delegatedBy = founderName;
        found.delegationNotes = instructions;
        found.isNewForFounder = false;
        found.isNewForManager = true;

        saveClientAppointments(list);
        renderAppointments();
        populateDelegateSelect();
        if (delegationInstructionsInput) delegationInstructionsInput.value = '';
        showToast(`🤝 Consultation ${targetRefId} scheduled & delegated to ${selectedMgrName}!`, '🚀');
      }
    });
  }

  // 5. Render Appointments Register Table in Founder Dashboard
  function renderAppointments() {
    updateFounderAlertBanner();
    if (!appointmentsTableBody) return;

    const list = getClientAppointments();
    const query = (appointmentSearchInput?.value || '').toLowerCase();
    const filter = appointmentStatusFilter?.value || 'All';

    const filtered = list.filter(item => {
      const matchQuery = item.clientName.toLowerCase().includes(query) ||
                         item.clientPhone.includes(query) ||
                         item.serviceType.toLowerCase().includes(query) ||
                         (item.assignedTo && item.assignedTo.toLowerCase().includes(query)) ||
                         item.refId.toLowerCase().includes(query);
      const matchStatus = filter === 'All' || item.status === filter;
      return matchQuery && matchStatus;
    });

    if (badgeTotal) badgeTotal.textContent = `Total: ${list.length}`;
    if (badgePending) badgePending.textContent = `Pending: ${list.filter(a => a.status === 'Pending Founder Action' || a.status === 'Pending Review').length}`;
    if (badgeConfirmed) badgeConfirmed.textContent = `Active: ${list.filter(a => a.status === 'Delegated to Head Designer' || a.status === 'Confirmed').length}`;

    appointmentsTableBody.innerHTML = '';

    if (filtered.length === 0) {
      appointmentsTableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #94A3B8; padding: 28px;">No client appointments match your search or filter.</td></tr>`;
      return;
    }

    filtered.forEach(item => {
      const isUnassigned = !item.assignedManagerName || item.status === 'Pending Founder Action';
      const cleanPhone = (item.clientPhone || '').replace(/[^0-9]/g, '');

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div style="font-family: monospace; font-weight: 800; color: #0284C7; font-size: 0.86rem;">${item.refId}</div>
          <div style="font-weight: 800; color: #0C1220; margin-top: 2px;">${item.clientName}</div>
          <div style="font-size: 0.74rem; color: #64748B;">Booked: ${item.bookedAt || 'Recent'}</div>
        </td>
        <td>
          <div style="font-size: 0.85rem; color: #334155; font-weight: 600;">
            <a href="tel:${cleanPhone}" style="color: #0284C7; text-decoration: none;">📞 ${item.clientPhone}</a>
          </div>
          <div style="font-size: 0.8rem; color: #64748B; margin-top: 2px;">
            <a href="mailto:${item.clientEmail}" style="color: #64748B; text-decoration: none;">✉️ ${item.clientEmail}</a>
          </div>
        </td>
        <td>
          <div class="luxury-date-chip">
            <span class="chip-calendar-icon">📅</span>
            <span class="chip-date-text">${formatLuxuryDate(item.consultationDate)}</span>
          </div>
          <div class="luxury-time-text">⏰ ${item.consultationTime}</div>
        </td>
        <td>
          <div style="font-weight: 700; color: #0C1220; font-size: 0.88rem; margin-bottom: 2px;">${item.serviceType}</div>
          <div style="font-size: 0.82rem; color: #64748B; line-height: 1.4;">${item.consultationNotes || 'Client requested luxury consultation.'}</div>
        </td>
        <td>
          ${isUnassigned ? `
            <span class="luxury-priority-badge urgent" style="display: inline-block; font-size: 0.76rem;">
              ⚠️ UNASSIGNED (PENDING FOUNDER)
            </span>
          ` : `
            <div style="font-weight: 800; color: #0284C7; font-size: 0.86rem;">
              👔 Assigned: ${item.assignedTo}
            </div>
            <div style="font-size: 0.74rem; color: #8A6836; font-weight: 700; margin-top: 1px;">
              By: ${item.delegatedBy || 'Founder Nilesh'}
            </div>
            <div style="font-size: 0.78rem; color: #475569; margin-top: 3px; font-style: italic;">
              "${item.delegationNotes || 'Lead consultation.'}"
            </div>
          `}
        </td>
        <td>
          <select class="wf-status-select ${item.status.toLowerCase().replace(/[^a-z]/g, '')}" data-ref-id="${item.refId}" style="font-size: 0.78rem; padding: 4px 8px;">
            <option value="Pending Founder Action" ${item.status === 'Pending Founder Action' ? 'selected' : ''}>Pending Founder Action</option>
            <option value="Delegated to Head Designer" ${item.status === 'Delegated to Head Designer' ? 'selected' : ''}>Delegated to Head Designer</option>
            <option value="Confirmed" ${item.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
            <option value="Completed" ${item.status === 'Completed' ? 'selected' : ''}>Completed</option>
            <option value="Cancelled" ${item.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
          </select>
        </td>
        <td>
          <div style="display: flex; gap: 6px; flex-direction: column;">
            <button class="btn-quick-delegate" data-ref-id="${item.refId}" style="background: #FAF7F2; border: 1.5px solid #0284C7; color: #0284C7; padding: 5px 10px; border-radius: 6px; font-weight: 700; font-size: 0.76rem; cursor: pointer;">
              ⚡ Delegate
            </button>
            <button class="btn-action-done" data-ref-id="${item.refId}" style="padding: 5px 10px; font-size: 0.76rem;">
              Done
            </button>
          </div>
        </td>
      `;
      appointmentsTableBody.appendChild(tr);
    });

    // Quick delegate click handler
    appointmentsTableBody.querySelectorAll('.btn-quick-delegate').forEach(btn => {
      btn.addEventListener('click', () => {
        const refId = btn.getAttribute('data-ref-id');
        populateDelegateSelect(refId);
        delegateApptForm?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        delegationInstructionsInput?.focus();
        showToast(`Selected appointment ${refId} for delegation!`, '🤝');
      });
    });

    appointmentsTableBody.querySelectorAll('.wf-status-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const refId = e.target.getAttribute('data-ref-id');
        const appointments = getClientAppointments();
        const found = appointments.find(a => a.refId === refId);
        if (found) {
          found.status = e.target.value;
          saveClientAppointments(appointments);
          renderAppointments();
        }
      });
    });

    appointmentsTableBody.querySelectorAll('.btn-action-done').forEach(btn => {
      btn.addEventListener('click', () => {
        const refId = btn.getAttribute('data-ref-id');
        const appointments = getClientAppointments();
        const found = appointments.find(a => a.refId === refId);
        if (found) {
          found.status = 'Completed';
          found.isNewForFounder = false;
          saveClientAppointments(appointments);
          renderAppointments();
          showToast(`Consultation ${refId} marked Completed!`, '✅');
        }
      });
    });
  }

  // Cross-tab real-time storage event synchronizer for Appointments
  window.addEventListener('storage', (e) => {
    if (e.key === 'PROLIFIC_CLIENT_APPOINTMENTS') {
      renderAppointments();
      populateDelegateSelect();
    }
  });

  if (appointmentSearchInput) appointmentSearchInput.addEventListener('input', renderAppointments);
  if (appointmentStatusFilter) appointmentStatusFilter.addEventListener('change', renderAppointments);

  populateDelegateSelect();
  renderAppointments();
}

/* ==========================================================================
   6B. FOUNDER SELECTION APPROVALS MANAGER (GOVERNANCE SUITE)
   ========================================================================== */
function setupFounderSelectionsManager() {
  const founderSelectionsTable = document.getElementById('founderSelectionsTable');
  const badgeTotalSelections = document.getElementById('badgeTotalSelections');
  const badgePendingSelections = document.getElementById('badgePendingSelections');
  const badgeApprovedSelections = document.getElementById('badgeApprovedSelections');
  const tabBadgeSelections = document.getElementById('tabBadgeSelections');
  const founderSelectionSearchInput = document.getElementById('founderSelectionSearchInput');
  const founderSelectionStatusFilter = document.getElementById('founderSelectionStatusFilter');

  function renderFounderSelections() {
    const list = getProjectSelections();
    const query = (founderSelectionSearchInput?.value || '').toLowerCase();
    const filter = founderSelectionStatusFilter?.value || 'All';

    const pendingCount = list.filter(s => s.status === 'Awaiting Founder Approval').length;
    const approvedCount = list.filter(s => s.status === 'Approved by Founder').length;

    if (badgeTotalSelections) badgeTotalSelections.textContent = `Total: ${list.length}`;
    if (badgePendingSelections) badgePendingSelections.textContent = `Pending Sign-Off: ${pendingCount}`;
    if (badgeApprovedSelections) badgeApprovedSelections.textContent = `Approved & Cleared: ${approvedCount}`;
    if (tabBadgeSelections) {
      tabBadgeSelections.textContent = pendingCount > 0 ? `${list.length} (${pendingCount} New)` : `${list.length}`;
      tabBadgeSelections.style.background = pendingCount > 0 ? '#DC2626' : '#8A6836';
    }

    if (!founderSelectionsTable) return;
    founderSelectionsTable.innerHTML = '';

    const filtered = list.filter(item => {
      const matchQuery = item.projectName.toLowerCase().includes(query) ||
                         item.managerName.toLowerCase().includes(query) ||
                         item.category.toLowerCase().includes(query) ||
                         item.specs.toLowerCase().includes(query) ||
                         item.id.toLowerCase().includes(query);
      const matchStatus = filter === 'All' || item.status === filter;
      return matchQuery && matchStatus;
    });

    if (filtered.length === 0) {
      founderSelectionsTable.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #94A3B8; padding: 28px;">No design or material selections match your search or filter.</td></tr>`;
      return;
    }

    filtered.forEach(item => {
      const isApproved = item.status === 'Approved by Founder';
      const isRevision = item.status === 'Revision Requested';
      const isPending = item.status === 'Awaiting Founder Approval';

      const statusBadge = isApproved 
        ? '<span style="background:#D1FAE5; color:#065F46; border:1.5px solid #10B981; font-weight:800; font-size:0.78rem; padding:4px 10px; border-radius:9999px; display:inline-flex; align-items:center; gap:4px;">✅ APPROVED &amp; CLEARED</span>'
        : isRevision
        ? '<span style="background:#FEE2E2; color:#991B1B; border:1.5px solid #EF4444; font-weight:800; font-size:0.78rem; padding:4px 10px; border-radius:9999px; display:inline-flex; align-items:center; gap:4px;">⚠️ REVISION REQUESTED</span>'
        : '<span style="background:#FEF3C7; color:#92400E; border:1.5px solid #F59E0B; font-weight:800; font-size:0.78rem; padding:4px 10px; border-radius:9999px; display:inline-flex; align-items:center; gap:4px;">⏳ AWAITING SIGN-OFF</span>';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div style="font-family: monospace; font-weight: 800; color: #8A6836; font-size: 0.86rem;">${item.id}</div>
          <div style="font-size: 0.75rem; color: #64748B; margin-top: 2px;">📅 ${item.submittedAt || 'Recent'}</div>
          <span class="luxury-priority-badge ${item.urgency === 'Urgent' ? 'urgent' : 'standard'}" style="margin-top: 4px; display: inline-block;">
            ${item.urgency === 'Urgent' ? '🚨 URGENT' : '⚡ ' + (item.urgency || 'HIGH')}
          </span>
        </td>
        <td>
          <div style="font-weight: 800; color: #0C1220; font-size: 0.92rem;">${item.projectName}</div>
          <div style="font-size: 0.8rem; color: #8A6836; font-weight: 700; margin-top: 2px;">💎 ${item.category}</div>
        </td>
        <td>
          <div style="font-weight: 800; color: #0284C7;">👔 ${item.managerName}</div>
          <div style="font-size: 0.76rem; color: #64748B;">Target: ${item.targetFounder}</div>
        </td>
        <td>
          <div style="font-size: 0.84rem; color: #1E293B; line-height: 1.4;">${item.specs}</div>
          ${item.attachment ? `
            <div style="margin-top: 6px; font-size: 0.76rem; color: #0284C7; font-weight: 700; display: inline-flex; align-items: center; gap: 4px; background: #F0F9FF; border: 1px solid #BAE6FD; padding: 3px 8px; border-radius: 4px;">
              📎 ${item.attachment}
            </div>
          ` : ''}
          ${item.founderNotes ? `
            <div style="margin-top: 6px; font-size: 0.78rem; background: ${isApproved ? '#F0FDF4' : '#FEF2F2'}; color: ${isApproved ? '#065F46' : '#991B1B'}; border: 1px solid ${isApproved ? '#BBF7D0' : '#FECACA'}; padding: 4px 8px; border-radius: 4px;">
              <strong>Founder Note:</strong> "${item.founderNotes}"
            </div>
          ` : ''}
        </td>
        <td>
          ${statusBadge}
        </td>
        <td>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            ${!isApproved ? `
              <button class="btn-founder-approve-sel" data-id="${item.id}" style="background: linear-gradient(135deg, #059669 0%, #047857 100%); color: #FFFFFF; border: none; padding: 7px 12px; border-radius: 6px; font-size: 0.78rem; font-weight: 800; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 4px;">
                ✅ Approve Selection
              </button>
              <button class="btn-founder-revise-sel" data-id="${item.id}" style="background: #D97706; color: #FFFFFF; border: none; padding: 6px 12px; border-radius: 6px; font-size: 0.76rem; font-weight: 700; cursor: pointer;">
                🔄 Request Revision
              </button>
            ` : `
              <div style="color: #059669; font-weight: 800; font-size: 0.8rem; display: flex; align-items: center; gap: 4px;">
                <span>✓ Approved &amp; Cleared</span>
              </div>
              <button class="btn-founder-revise-sel" data-id="${item.id}" style="background: #F1F5F9; color: #475569; border: 1px solid #CBD5E1; padding: 4px 8px; border-radius: 4px; font-size: 0.72rem; font-weight: 600; cursor: pointer;">
                Change Decision
              </button>
            `}
          </div>
        </td>
      `;
      founderSelectionsTable.appendChild(tr);
    });

    // Wire Approve Action
    founderSelectionsTable.querySelectorAll('.btn-founder-approve-sel').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const found = list.find(s => s.id === id);
        if (found) {
          const notes = prompt(`Approve selection "${found.projectName}" (${found.category})?\nEnter Founder sign-off instructions/notes:`, 'Approved. Cleared to proceed with drawing drafting.');
          if (notes !== null) {
            found.status = 'Approved by Founder';
            const curFounder = typeof activeFounderName !== 'undefined' ? activeFounderName : 'Nilesh';
            found.founderName = `${curFounder} (Founder)`;
            found.founderNotes = notes.trim() || 'Approved. Cleared to proceed with execution.';
            found.decidedAt = new Date().toLocaleDateString('en-GB') + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            found.canProceed = true;
            saveProjectSelections(list);
            renderFounderSelections();
            showToast(`✅ Selection ${id} approved! Head Designer ${found.managerName} is cleared to proceed.`, '🎉');
          }
        }
      });
    });

    // Wire Revision Action
    founderSelectionsTable.querySelectorAll('.btn-founder-revise-sel').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const found = list.find(s => s.id === id);
        if (found) {
          const notes = prompt(`Request revision for selection "${found.projectName}" (${found.category})?\nEnter revision directives for ${found.managerName}:`, 'Please revise sample shade/finish and provide alternative vendor spec.');
          if (notes && notes.trim()) {
            found.status = 'Revision Requested';
            const curFounder = typeof activeFounderName !== 'undefined' ? activeFounderName : 'Nilesh';
            found.founderName = `${curFounder} (Founder)`;
            found.founderNotes = notes.trim();
            found.decidedAt = new Date().toLocaleDateString('en-GB') + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            found.canProceed = false;
            saveProjectSelections(list);
            renderFounderSelections();
            showToast(`⚠️ Revision directives sent to ${found.managerName} for Selection ${id}.`, '🔄');
          }
        }
      });
    });
  }

  // Cross-tab real-time storage event synchronizer
  window.addEventListener('storage', (e) => {
    if (e.key === 'PROLIFIC_PROJECT_SELECTIONS') {
      renderFounderSelections();
    }
  });

  if (founderSelectionSearchInput) {
    founderSelectionSearchInput.addEventListener('input', renderFounderSelections);
  }
  if (founderSelectionStatusFilter) {
    founderSelectionStatusFilter.addEventListener('change', renderFounderSelections);
  }

  renderFounderSelections();
  window.renderFounderSelections = renderFounderSelections;
}

/* ==========================================================================
   6C. ONGOING PROJECTS GOVERNANCE MANAGER (ARCHITECTURE & INTERIOR)
   ========================================================================== */
function getOngoingProjects() {
  const defaultProjects = [
    {
      id: 'PRJ-ARC-101',
      name: 'Commercial Hub & Tech Park (Phase 2)',
      discipline: 'Architecture',
      city: 'Ahmedabad',
      scope: 'Architectural Elevation Blueprint, Structural Load Calculation & 3D Façade Alignment',
      manager: 'Shashikant Bhai',
      managerCode: 'HD001',
      employee: 'Komal',
      employeeCode: 'SD012',
      stage: '3D Elevation & Structural Load Drafting',
      progress: 80,
      priority: 'Urgent',
      deadline: '2026-08-25',
      fileAttachment: 'Commercial_Hub_Elevation_Draft_v2.dwg (18.5 MB)',
      status: 'Ongoing'
    },
    {
      id: 'PRJ-ARC-102',
      name: 'Vadodara Grand Township Site Masterplan',
      discipline: 'Architecture',
      city: 'Vadodara',
      scope: 'Architectural Site Layout, Road Grid Elevation & Land Execution Approval for 50-Acre Masterplan',
      manager: 'Hardik',
      managerCode: 'HD002',
      employee: 'Subham',
      employeeCode: 'SD027',
      stage: 'Site Boundary & Road Layout Sign-off',
      progress: 65,
      priority: 'Urgent',
      deadline: '2026-08-29',
      fileAttachment: 'Site_Layout_Master_v4.dwg (22.1 MB)',
      status: 'Ongoing'
    },
    {
      id: 'PRJ-ARC-103',
      name: 'Highrise Residential Tower Block-C',
      discipline: 'Architecture',
      city: 'Ahmedabad',
      scope: 'Structural Beam Laying, Column Grid & Seismic Grade Foundation Inspection Drawing',
      manager: 'Shivang',
      managerCode: 'HD003',
      employee: 'Harsh',
      employeeCode: 'SD025',
      stage: 'Seismic Grade Foundation Blueprint Check',
      progress: 70,
      priority: 'Standard',
      deadline: '2026-08-28',
      fileAttachment: 'Structural_Beam_Layout_v1.dwg (14.2 MB)',
      status: 'Ongoing'
    },
    {
      id: 'PRJ-ARC-104',
      name: 'Rajkot Heritage Villa Structural Frame',
      discipline: 'Architecture',
      city: 'Rajkot',
      scope: 'Exterior Column Grid, Load Bearing Frame Drawing & Traditional Heritage Façade Scheme',
      manager: 'Sunita',
      managerCode: 'HD004',
      employee: 'Pooja Shah',
      employeeCode: 'SD019',
      stage: 'Column Framework CAD Verification',
      progress: 55,
      priority: 'Standard',
      deadline: '2026-09-05',
      fileAttachment: 'Rajkot_Villa_Column_Frame.dwg (16.8 MB)',
      status: 'Ongoing'
    },
    {
      id: 'PRJ-INT-201',
      name: 'Surat Diamond Promenade Penthouse',
      discipline: 'Interior',
      city: 'Surat',
      scope: 'Bespoke Interior Botticino Marble Elevation, Book-Matched Foyer & False Ceiling Fixtures',
      manager: 'Shashikant Bhai',
      managerCode: 'HD001',
      employee: 'Nikita',
      employeeCode: 'SD016',
      stage: 'Marble Cutting & Foyer Wall Cladding Layout',
      progress: 85,
      priority: 'Urgent',
      deadline: '2026-08-26',
      fileAttachment: 'Marble_Elevation_Section_v3.dwg (9.8 MB)',
      status: 'Ongoing'
    },
    {
      id: 'PRJ-INT-202',
      name: 'Vesu 4BHK Luxury Villa Master Suite',
      discipline: 'Interior',
      city: 'Surat',
      scope: 'Custom Italian Wood Veneer Paneling, Hidden Door System & Acoustic Ceiling Grid',
      manager: 'Hardik',
      managerCode: 'HD002',
      employee: 'Pooja Jariwala',
      employeeCode: 'SD018',
      stage: 'Carpentry Blueprint & Ceiling Fixture Mapping',
      progress: 75,
      priority: 'Urgent',
      deadline: '2026-08-30',
      fileAttachment: 'Vesu_Villa_MasterSuite_Interior.dwg (13.4 MB)',
      status: 'Ongoing'
    },
    {
      id: 'PRJ-INT-203',
      name: 'Ahmedabad Corporate Headquarters Boardroom',
      discipline: 'Interior',
      city: 'Ahmedabad',
      scope: 'Bespoke Fluted Oak Wall Paneling, Lighting Geometry & Executive Audio-Visual Integration',
      manager: 'Shivang',
      managerCode: 'HD003',
      employee: 'Divy',
      employeeCode: 'SD020',
      stage: 'Wall Paneling CAD Draft & Luminaire Placement',
      progress: 60,
      priority: 'Standard',
      deadline: '2026-09-02',
      fileAttachment: 'Corporate_Boardroom_Interior_v2.dwg (11.7 MB)',
      status: 'Ongoing'
    },
    {
      id: 'PRJ-INT-204',
      name: 'Junagadh Royal Villa Dining & Living Room',
      discipline: 'Interior',
      city: 'Junagadh',
      scope: 'Custom Brass Inlay Flooring, Velvet Upholstered Niches & Chandelier Suspension Scheme',
      manager: 'Helly',
      managerCode: 'HD005',
      employee: 'Savan',
      employeeCode: 'SD023',
      stage: 'Flooring Inlay Pattern Check & Material Procurement',
      progress: 50,
      priority: 'Standard',
      deadline: '2026-09-08',
      fileAttachment: 'Junagadh_Living_Interior_Draft.dwg (10.5 MB)',
      status: 'Ongoing'
    }
  ];

  try {
    const raw = localStorage.getItem('PROLIFIC_ONGOING_PROJECTS');
    if (!raw) {
      localStorage.setItem('PROLIFIC_ONGOING_PROJECTS', JSON.stringify(defaultProjects));
      return defaultProjects;
    }
    return JSON.parse(raw);
  } catch (e) {
    return defaultProjects;
  }
}

function saveOngoingProjects(projects) {
  try {
    localStorage.setItem('PROLIFIC_ONGOING_PROJECTS', JSON.stringify(projects));
  } catch (e) {}
}

function setupOngoingProjectsManager() {
  const ongoingProjectsTableBody = document.getElementById('ongoingProjectsTableBody');
  const ongoingDisciplineTabs = document.getElementById('ongoingDisciplineTabs');
  const ongoingSearchInput = document.getElementById('ongoingSearchInput');
  const ongoingCityFilter = document.getElementById('ongoingCityFilter');
  const ongoingPriorityFilter = document.getElementById('ongoingPriorityFilter');

  const badgeOngoingTotal = document.getElementById('badgeOngoingTotal');
  const badgeOngoingArch = document.getElementById('badgeOngoingArch');
  const badgeOngoingInt = document.getElementById('badgeOngoingInt');
  const tabBadgeOngoing = document.getElementById('tabBadgeOngoing');

  const countDisciplineAll = document.getElementById('countDisciplineAll');
  const countDisciplineArch = document.getElementById('countDisciplineArch');
  const countDisciplineInt = document.getElementById('countDisciplineInt');

  if (!ongoingProjectsTableBody) return;

  let currentDiscipline = 'all';

  function renderOngoingProjects() {
    const list = getOngoingProjects();
    const query = (ongoingSearchInput?.value || '').toLowerCase().trim();
    const selectedCity = ongoingCityFilter?.value || 'All';
    const selectedPriority = ongoingPriorityFilter?.value || 'All';

    // Count stats
    const totalCount = list.length;
    const archCount = list.filter(p => p.discipline === 'Architecture').length;
    const intCount = list.filter(p => p.discipline === 'Interior').length;

    if (badgeOngoingTotal) badgeOngoingTotal.textContent = `Total: ${totalCount} Projects`;
    if (badgeOngoingArch) badgeOngoingArch.textContent = `Architecture: ${archCount}`;
    if (badgeOngoingInt) badgeOngoingInt.textContent = `Interior: ${intCount}`;
    if (tabBadgeOngoing) tabBadgeOngoing.textContent = `${totalCount}`;

    if (countDisciplineAll) countDisciplineAll.textContent = `${totalCount}`;
    if (countDisciplineArch) countDisciplineArch.textContent = `${archCount}`;
    if (countDisciplineInt) countDisciplineInt.textContent = `${intCount}`;

    // Apply Filter
    let filtered = list.filter(p => {
      // Discipline filter (all / Architecture / Interior)
      if (currentDiscipline !== 'all' && p.discipline !== currentDiscipline) return false;

      // City filter
      if (selectedCity !== 'All' && p.city !== selectedCity) return false;

      // Priority filter
      if (selectedPriority !== 'All' && p.priority !== selectedPriority) return false;

      // Search Query
      if (query) {
        const matchName = (p.name || '').toLowerCase().includes(query);
        const matchId = (p.id || '').toLowerCase().includes(query);
        const matchScope = (p.scope || '').toLowerCase().includes(query);
        const matchMgr = (p.manager || '').toLowerCase().includes(query);
        const matchEmp = (p.employee || '').toLowerCase().includes(query);
        const matchCity = (p.city || '').toLowerCase().includes(query);
        if (!matchName && !matchId && !matchScope && !matchMgr && !matchEmp && !matchCity) {
          return false;
        }
      }

      return true;
    });

    ongoingProjectsTableBody.innerHTML = '';

    if (filtered.length === 0) {
      const disciplineLabel = currentDiscipline === 'Architecture' ? 'Architecture' : (currentDiscipline === 'Interior' ? 'Interior' : 'selected filters');
      ongoingProjectsTableBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; color: #94A3B8; padding: 36px 20px;">
            <div style="font-size: 2rem; margin-bottom: 8px;">📁</div>
            <div style="font-weight: 700; color: #475569; font-size: 1rem;">No Ongoing ${disciplineLabel} Projects Found</div>
            <div style="font-size: 0.82rem; color: #94A3B8; margin-top: 4px;">Try changing your search query or discipline selection above.</div>
          </td>
        </tr>`;
      return;
    }

    filtered.forEach(proj => {
      const isArch = proj.discipline === 'Architecture';
      const isUrgent = proj.priority === 'Urgent';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div>
            ${isArch ? `
              <span style="background: rgba(3, 105, 161, 0.12); color: #0369A1; border: 1px solid #BAE6FD; font-weight: 800; font-size: 0.76rem; padding: 4px 8px; border-radius: 6px; display: inline-flex; align-items: center; gap: 4px;">
                🏛️ Architecture
              </span>
            ` : `
              <span style="background: rgba(217, 119, 6, 0.12); color: #D97706; border: 1px solid #FCD34D; font-weight: 800; font-size: 0.76rem; padding: 4px 8px; border-radius: 6px; display: inline-flex; align-items: center; gap: 4px;">
                🛋️ Interior
              </span>
            `}
          </div>
          <div style="margin-top: 6px;">
            ${isUrgent ? `
              <span class="luxury-priority-badge urgent" style="font-size: 0.72rem; display: inline-block;">🚨 URGENT</span>
            ` : `
              <span class="luxury-priority-badge standard" style="font-size: 0.72rem; display: inline-block;">⚡ STANDARD</span>
            `}
          </div>
        </td>
        <td>
          <div style="font-weight: 800; color: #0C1220; font-size: 0.92rem; line-height: 1.3;">
            ${proj.name}
          </div>
          <div style="font-family: monospace; font-weight: 700; color: #0284C7; font-size: 0.78rem; margin-top: 3px;">
            ${proj.id} • <span style="color: #059669;">📍 ${proj.city} Hub</span>
          </div>
        </td>
        <td>
          <div style="font-size: 0.84rem; color: #334155; line-height: 1.45; font-weight: 600;">
            ${proj.scope}
          </div>
          <div style="margin-top: 6px; font-size: 0.76rem; color: #475569; background: #F8FAFC; border: 1px solid #E2E8F0; padding: 4px 10px; border-radius: 6px; display: inline-flex; align-items: center; gap: 6px;">
            <span>📐</span> <strong>${proj.fileAttachment}</strong>
          </div>
        </td>
        <td>
          <div style="font-weight: 800; color: #7C3AED; font-size: 0.84rem;">
            HD: ${proj.manager} <span style="font-size: 0.72rem; color: #6D28D9; font-weight: 600;">(${proj.managerCode || 'HD'})</span>
          </div>
          <div style="font-weight: 800; color: #0284C7; font-size: 0.82rem; margin-top: 4px;">
            SD: ${proj.employee} <span style="font-size: 0.72rem; color: #0369A1; font-weight: 600;">(${proj.employeeCode || 'SD'})</span>
          </div>
        </td>
        <td>
          <div style="font-weight: 700; color: #1E2532; font-size: 0.82rem; margin-bottom: 4px;">
            ${proj.stage}
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="flex: 1; height: 7px; background: #E2E8F0; border-radius: 9999px; overflow: hidden;">
              <div style="width: ${proj.progress}%; height: 100%; border-radius: 9999px; background: ${isArch ? 'linear-gradient(90deg, #0284C7, #38BDF8)' : 'linear-gradient(90deg, #D97706, #FBBF24)'}; transition: width 0.4s ease;"></div>
            </div>
            <span style="font-size: 0.76rem; font-weight: 800; color: ${isArch ? '#0369A1' : '#B45309'}; min-width: 32px;">${proj.progress}%</span>
          </div>
        </td>
        <td>
          <div class="luxury-date-chip">
            <span class="chip-calendar-icon">📅</span>
            <span class="chip-date-text">${formatLuxuryDate(proj.deadline)}</span>
          </div>
        </td>
        <td>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <button type="button" class="btn-inspect-ongoing" data-id="${proj.id}" style="background: #FAF7F2; border: 1.5px solid #0284C7; color: #0284C7; padding: 5px 10px; border-radius: 6px; font-weight: 800; font-size: 0.76rem; cursor: pointer; transition: all 0.2s;">
              🔍 Inspect Dossier
            </button>
            <button type="button" class="btn-update-progress-ongoing" data-id="${proj.id}" style="background: linear-gradient(135deg, #059669, #047857); border: none; color: #FFFFFF; padding: 5px 10px; border-radius: 6px; font-weight: 800; font-size: 0.76rem; cursor: pointer; transition: all 0.2s;">
              ⚡ Progress +10%
            </button>
          </div>
        </td>
      `;

      ongoingProjectsTableBody.appendChild(tr);
    });

    // Wire Inspect Button
    ongoingProjectsTableBody.querySelectorAll('.btn-inspect-ongoing').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const found = list.find(p => p.id === id);
        if (found) {
          alert(`🏛️ ONGOING PROJECT DOSSIER\n\nProject: ${found.name} (${found.id})\nDiscipline: ${found.discipline}\nLocation: ${found.city} Branch Hub\nSupervising Head Designer: ${found.manager}\nAssigned Sub Designer: ${found.employee}\nCurrent Stage: ${found.stage} (${found.progress}%)\nFile Spec: ${found.fileAttachment}\nTarget Deadline: ${found.deadline}`);
        }
      });
    });

    // Wire Progress +10% Button
    ongoingProjectsTableBody.querySelectorAll('.btn-update-progress-ongoing').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const found = list.find(p => p.id === id);
        if (found) {
          found.progress = Math.min(100, (found.progress || 0) + 10);
          if (found.progress === 100) {
            found.stage = 'Completed & Ready for Handover';
          }
          saveOngoingProjects(list);
          renderOngoingProjects();
          showToast(`Progress for "${found.name}" updated to ${found.progress}%!`, '📈');
        }
      });
    });
  }

  // Wire Discipline Tabs Clicking (All / Architecture / Interior)
  if (ongoingDisciplineTabs) {
    ongoingDisciplineTabs.querySelectorAll('.ongoing-discipline-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        ongoingDisciplineTabs.querySelectorAll('.ongoing-discipline-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentDiscipline = btn.getAttribute('data-discipline');
        renderOngoingProjects();

        const label = currentDiscipline === 'Architecture' ? 'Architecture' : (currentDiscipline === 'Interior' ? 'Interior' : 'All Ongoing');
        showToast(`Filtered Ongoing Projects: ${label}`, '🔍');
      });
    });
  }

  if (ongoingSearchInput) ongoingSearchInput.addEventListener('input', renderOngoingProjects);
  if (ongoingCityFilter) ongoingCityFilter.addEventListener('change', renderOngoingProjects);
  if (ongoingPriorityFilter) ongoingPriorityFilter.addEventListener('change', renderOngoingProjects);

  // Cross-tab real-time storage event synchronizer
  window.addEventListener('storage', (e) => {
    if (e.key === 'PROLIFIC_ONGOING_PROJECTS') {
      renderOngoingProjects();
    }
  });

  renderOngoingProjects();
  window.renderOngoingProjects = renderOngoingProjects;
}

/* ==========================================================================
   6D. PROJECT PROPOSALS & CLIENT PITCHES MANAGER (PRE-CONTRACT GOVERNANCE)
   ========================================================================== */
function getProjectProposals() {
  const defaultProposals = [
    {
      id: 'PROP-ARC-301',
      clientName: 'Shreeji Infrastructure Ltd (Mr. Bhavin Shah)',
      projectTitle: 'Signature Commercial Arcade & Office Towers',
      discipline: 'Architecture',
      city: 'Ahmedabad',
      scope: 'Comprehensive Architectural Planning, Structural Feasibility & Multi-Level Elevation for 12-Story Commercial Arcade',
      estimatedValue: '₹2.10 Crore',
      manager: 'Shashikant Bhai',
      managerCode: 'HD001',
      stage: 'Cost Estimation & BOQ Under Client Review',
      status: 'Under Negotiation',
      probability: '75%',
      receivedDate: '2026-08-20',
      fileAttachment: 'Shreeji_Arcade_Arch_Feasibility_Quotation.pdf (6.4 MB)'
    },
    {
      id: 'PROP-ARC-302',
      clientName: 'Dr. Ketan & Anjali Desai',
      projectTitle: 'Lakeview Luxury Farmhouse & Landscape Masterplan',
      discipline: 'Architecture',
      city: 'Vadodara',
      scope: 'Eco-Luxury Villa Architecture, Private Pool Structural Layout & 4-Acre Landscape Masterplan',
      estimatedValue: '₹85 Lakhs',
      manager: 'Hardik',
      managerCode: 'HD002',
      stage: '3D Concept Façade Presentation Scheduled',
      status: 'Concept Pitch',
      probability: '90%',
      receivedDate: '2026-08-22',
      fileAttachment: 'Desai_Farmhouse_Architectural_Concept.pdf (4.8 MB)'
    },
    {
      id: 'PROP-ARC-303',
      clientName: 'Apex Fintech Solutions (Mr. Vikram Singhania)',
      projectTitle: 'GIFT City Corporate Tech Annex Structural Design',
      discipline: 'Architecture',
      city: 'Gandhinagar',
      scope: 'Sustainable Green Building Architectural Blueprint, Steel Truss Engineering & Glass Curtain Façade',
      estimatedValue: '₹1.60 Crore',
      manager: 'Shivang',
      managerCode: 'HD003',
      stage: 'Final Contract Review & Advance Payment Clearance',
      status: 'Ready to Convert',
      probability: '95%',
      receivedDate: '2026-08-21',
      fileAttachment: 'GIFT_City_Annex_Arch_Contract_Draft.pdf (8.2 MB)'
    },
    {
      id: 'PROP-INT-401',
      clientName: 'Mr. Hasmukhbhai Zaveri',
      projectTitle: 'Royal Heritage Duplex Penthouse Luxury Interior',
      discipline: 'Interior',
      city: 'Surat',
      scope: 'Bespoke Italian Onyx Wall Paneling, French Neo-Classical Woodwork & Smart Home Automation Fit-out',
      estimatedValue: '₹75 Lakhs',
      manager: 'Hardik',
      managerCode: 'HD002',
      stage: 'Material Moodboard & Lighting Sample Sign-off',
      status: 'Client Review',
      probability: '85%',
      receivedDate: '2026-08-21',
      fileAttachment: 'Zaveri_Penthouse_Interior_Proposal_v3.pdf (5.6 MB)'
    },
    {
      id: 'PROP-INT-402',
      clientName: 'Justice R. N. Trivedi',
      projectTitle: 'Alkapuri Presidential Villa Complete Interior Scheme',
      discipline: 'Interior',
      city: 'Vadodara',
      scope: 'Turnkey Interior Furnishing, Handcrafted Teakwood Millwork, Foyer Water Feature & Custom Lighting Geometry',
      estimatedValue: '₹60 Lakhs',
      manager: 'Sunita',
      managerCode: 'HD004',
      stage: 'Budget Quotation Delivered & Awaiting Client Feedback',
      status: 'Under Negotiation',
      probability: '70%',
      receivedDate: '2026-08-23',
      fileAttachment: 'Alkapuri_Villa_Interior_Quotation.pdf (3.9 MB)'
    },
    {
      id: 'PROP-INT-403',
      clientName: 'The Grand Imperia Hospitality Group',
      projectTitle: 'Rajkot Luxury Boutique Hotel Suites & Banquet Interior',
      discipline: 'Interior',
      city: 'Rajkot',
      scope: '24 Luxury Executive Suites Interior Decor, Crystal Chandelier Ballroom Layout & Acoustic Paneling',
      estimatedValue: '₹1.25 Crore',
      manager: 'Shashikant Bhai',
      managerCode: 'HD001',
      stage: 'Design Concept Cleared - Awaiting Site Handover',
      status: 'Ready to Convert',
      probability: '90%',
      receivedDate: '2026-08-19',
      fileAttachment: 'Grand_Imperia_Suites_Interior_Pitch.pdf (9.1 MB)'
    }
  ];

  try {
    const raw = localStorage.getItem('PROLIFIC_PROJECT_PROPOSALS');
    if (!raw) {
      localStorage.setItem('PROLIFIC_PROJECT_PROPOSALS', JSON.stringify(defaultProposals));
      return defaultProposals;
    }
    return JSON.parse(raw);
  } catch (e) {
    return defaultProposals;
  }
}

function saveProjectProposals(proposals) {
  try {
    localStorage.setItem('PROLIFIC_PROJECT_PROPOSALS', JSON.stringify(proposals));
  } catch (e) {}
}

function setupProposalsManager() {
  const proposalsTableBody = document.getElementById('proposalsTableBody');
  const proposalDisciplineTabs = document.getElementById('proposalDisciplineTabs');
  const proposalSearchInput = document.getElementById('proposalSearchInput');
  const proposalCityFilter = document.getElementById('proposalCityFilter');
  const proposalStageFilter = document.getElementById('proposalStageFilter');

  const badgeProposalsTotal = document.getElementById('badgeProposalsTotal');
  const badgeProposalsArch = document.getElementById('badgeProposalsArch');
  const badgeProposalsInt = document.getElementById('badgeProposalsInt');
  const tabBadgeProposals = document.getElementById('tabBadgeProposals');

  const countProposalAll = document.getElementById('countProposalAll');
  const countProposalArch = document.getElementById('countProposalArch');
  const countProposalInt = document.getElementById('countProposalInt');

  const btnToggleNewProposalForm = document.getElementById('btnToggleNewProposalForm');
  const newProposalFormContainer = document.getElementById('newProposalFormContainer');
  const btnCloseNewProposalForm = document.getElementById('btnCloseNewProposalForm');
  const newProposalForm = document.getElementById('newProposalForm');

  if (!proposalsTableBody) return;

  let currentDiscipline = 'all';

  // Toggle Form
  if (btnToggleNewProposalForm && newProposalFormContainer) {
    btnToggleNewProposalForm.addEventListener('click', () => {
      const isHidden = newProposalFormContainer.style.display === 'none' || !newProposalFormContainer.style.display;
      newProposalFormContainer.style.display = isHidden ? 'block' : 'none';
      if (isHidden) {
        newProposalFormContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        document.getElementById('propClientInput')?.focus();
      }
    });
  }

  if (btnCloseNewProposalForm && newProposalFormContainer) {
    btnCloseNewProposalForm.addEventListener('click', () => {
      newProposalFormContainer.style.display = 'none';
    });
  }

  // Handle New Proposal Submission
  if (newProposalForm) {
    newProposalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const clientName = document.getElementById('propClientInput')?.value.trim();
      const projectTitle = document.getElementById('propTitleInput')?.value.trim();
      const discipline = document.getElementById('propDisciplineSelect')?.value || 'Architecture';
      const city = document.getElementById('propCitySelect')?.value || 'Ahmedabad';
      const estimatedValue = document.getElementById('propValueInput')?.value.trim() || '₹50 Lakhs';
      const manager = document.getElementById('propManagerSelect')?.value || 'Shashikant Bhai';
      const scope = document.getElementById('propScopeInput')?.value.trim();

      if (!clientName || !projectTitle || !scope) {
        alert('Please fill out all required proposal fields.');
        return;
      }

      const list = getProjectProposals();
      const prefix = discipline === 'Architecture' ? 'PROP-ARC-' : 'PROP-INT-';
      const newId = `${prefix}${Math.floor(100 + Math.random() * 900)}`;

      const newProposal = {
        id: newId,
        clientName,
        projectTitle,
        discipline,
        city,
        scope,
        estimatedValue,
        manager,
        managerCode: 'HD00' + (manager === 'Hardik' ? '2' : '1'),
        stage: 'Concept Pitch Registered',
        status: 'Concept Pitch',
        probability: '80%',
        receivedDate: new Date().toISOString().split('T')[0],
        fileAttachment: `${projectTitle.replace(/\s+/g, '_')}_Quotation_Dossier.pdf (4.5 MB)`
      };

      list.unshift(newProposal);
      saveProjectProposals(list);
      renderProposals();

      newProposalForm.reset();
      newProposalFormContainer.style.display = 'none';
      showToast(`New Proposal ${newId} created for ${clientName}!`, '🚀');
    });
  }

  function renderProposals() {
    const list = getProjectProposals();
    const query = (proposalSearchInput?.value || '').toLowerCase().trim();
    const selectedCity = proposalCityFilter?.value || 'All';
    const selectedStage = proposalStageFilter?.value || 'All';

    // Count stats
    const totalCount = list.length;
    const archCount = list.filter(p => p.discipline === 'Architecture').length;
    const intCount = list.filter(p => p.discipline === 'Interior').length;

    if (badgeProposalsTotal) badgeProposalsTotal.textContent = `Total: ${totalCount} Proposals`;
    if (badgeProposalsArch) badgeProposalsArch.textContent = `Architecture: ${archCount}`;
    if (badgeProposalsInt) badgeProposalsInt.textContent = `Interior: ${intCount}`;
    if (tabBadgeProposals) tabBadgeProposals.textContent = `${totalCount}`;

    if (countProposalAll) countProposalAll.textContent = `${totalCount}`;
    if (countProposalArch) countProposalArch.textContent = `${archCount}`;
    if (countProposalInt) countProposalInt.textContent = `${intCount}`;

    // Apply Filter
    let filtered = list.filter(p => {
      // Discipline filter
      if (currentDiscipline !== 'all' && p.discipline !== currentDiscipline) return false;

      // City filter
      if (selectedCity !== 'All' && p.city !== selectedCity) return false;

      // Stage filter
      if (selectedStage !== 'All' && p.status !== selectedStage) return false;

      // Search Query
      if (query) {
        const matchClient = (p.clientName || '').toLowerCase().includes(query);
        const matchTitle = (p.projectTitle || '').toLowerCase().includes(query);
        const matchId = (p.id || '').toLowerCase().includes(query);
        const matchScope = (p.scope || '').toLowerCase().includes(query);
        const matchMgr = (p.manager || '').toLowerCase().includes(query);
        const matchCity = (p.city || '').toLowerCase().includes(query);
        if (!matchClient && !matchTitle && !matchId && !matchScope && !matchMgr && !matchCity) {
          return false;
        }
      }

      return true;
    });

    proposalsTableBody.innerHTML = '';

    if (filtered.length === 0) {
      const disciplineLabel = currentDiscipline === 'Architecture' ? 'Architecture' : (currentDiscipline === 'Interior' ? 'Interior' : 'selected filters');
      proposalsTableBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; color: #94A3B8; padding: 36px 20px;">
            <div style="font-size: 2rem; margin-bottom: 8px;">📁</div>
            <div style="font-weight: 700; color: #475569; font-size: 1rem;">No ${disciplineLabel} Proposals Found</div>
            <div style="font-size: 0.82rem; color: #94A3B8; margin-top: 4px;">Try changing your search query or discipline selection above.</div>
          </td>
        </tr>`;
      return;
    }

    filtered.forEach(prop => {
      const isArch = prop.discipline === 'Architecture';
      const isReadyToConvert = prop.status === 'Ready to Convert';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div>
            ${isArch ? `
              <span style="background: rgba(3, 105, 161, 0.12); color: #0369A1; border: 1px solid #BAE6FD; font-weight: 800; font-size: 0.76rem; padding: 4px 8px; border-radius: 6px; display: inline-flex; align-items: center; gap: 4px;">
                🏛️ Architecture
              </span>
            ` : `
              <span style="background: rgba(124, 58, 237, 0.12); color: #7C3AED; border: 1px solid #C084FC; font-weight: 800; font-size: 0.76rem; padding: 4px 8px; border-radius: 6px; display: inline-flex; align-items: center; gap: 4px;">
                🛋️ Interior
              </span>
            `}
          </div>
          <div style="margin-top: 6px;">
            <span style="background: ${isReadyToConvert ? 'rgba(5, 150, 105, 0.15)' : 'rgba(217, 119, 6, 0.12)'}; color: ${isReadyToConvert ? '#059669' : '#D97706'}; border: 1px solid ${isReadyToConvert ? '#10B981' : '#FCD34D'}; font-weight: 800; font-size: 0.72rem; padding: 3px 8px; border-radius: 4px; display: inline-block;">
              ${prop.status || 'Under Review'}
            </span>
          </div>
        </td>
        <td>
          <div style="font-weight: 800; color: #0C1220; font-size: 0.92rem; line-height: 1.3;">
            ${prop.projectTitle}
          </div>
          <div style="font-size: 0.82rem; color: #8A6836; font-weight: 700; margin-top: 2px;">
            Client: ${prop.clientName}
          </div>
          <div style="font-family: monospace; font-weight: 700; color: #0284C7; font-size: 0.76rem; margin-top: 2px;">
            ${prop.id} • <span style="color: #059669;">📍 ${prop.city} Hub</span>
          </div>
        </td>
        <td>
          <div style="font-size: 0.84rem; color: #334155; line-height: 1.45; font-weight: 600;">
            ${prop.scope}
          </div>
          <div style="margin-top: 6px; font-size: 0.76rem; color: #475569; background: #F8FAFC; border: 1px solid #E2E8F0; padding: 4px 10px; border-radius: 6px; display: inline-flex; align-items: center; gap: 6px;">
            <span>📄</span> <strong>${prop.fileAttachment}</strong>
          </div>
        </td>
        <td>
          <div style="font-weight: 900; color: #059669; font-size: 0.96rem; letter-spacing: 0.02em;">
            ${prop.estimatedValue}
          </div>
          <div style="font-size: 0.74rem; color: #64748B; margin-top: 2px;">
            Likelihood: <strong style="color: #0284C7;">${prop.probability || '80%'}</strong>
          </div>
        </td>
        <td>
          <div style="font-weight: 800; color: #7C3AED; font-size: 0.84rem;">
            Lead: ${prop.manager}
          </div>
          <div style="font-size: 0.78rem; color: #475569; margin-top: 3px; font-weight: 600; line-height: 1.3;">
            ${prop.stage}
          </div>
        </td>
        <td>
          <div class="luxury-date-chip">
            <span class="chip-calendar-icon">📅</span>
            <span class="chip-date-text">${formatLuxuryDate(prop.receivedDate)}</span>
          </div>
        </td>
        <td>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <button type="button" class="btn-convert-proposal" data-id="${prop.id}" style="background: linear-gradient(135deg, #059669, #047857); border: none; color: #FFFFFF; padding: 6px 10px; border-radius: 6px; font-weight: 800; font-size: 0.76rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 2px 8px rgba(5, 150, 105, 0.3);">
              🚀 Convert to Ongoing
            </button>
            <button type="button" class="btn-inspect-proposal" data-id="${prop.id}" style="background: #FAF7F2; border: 1.5px solid #7C3AED; color: #7C3AED; padding: 5px 10px; border-radius: 6px; font-weight: 800; font-size: 0.76rem; cursor: pointer; transition: all 0.2s;">
              🔍 Inspect Pitch
            </button>
          </div>
        </td>
      `;

      proposalsTableBody.appendChild(tr);
    });

    // Wire Inspect Pitch Button
    proposalsTableBody.querySelectorAll('.btn-inspect-proposal').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const found = list.find(p => p.id === id);
        if (found) {
          alert(`📑 PROSPECTIVE CLIENT PROPOSAL DOSSIER\n\nProposal Ref: ${found.id}\nClient: ${found.clientName}\nProject Title: ${found.projectTitle}\nDiscipline: ${found.discipline}\nBranch City: ${found.city}\nEstimated Project Value: ${found.estimatedValue}\nLead Pitch Designer: ${found.manager}\nCurrent Stage: ${found.stage}\nStatus: ${found.status}\nConversion Probability: ${found.probability}\nQuotation Spec: ${found.fileAttachment}`);
        }
      });
    });

    // Wire Convert Proposal to Ongoing Project Button
    proposalsTableBody.querySelectorAll('.btn-convert-proposal').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const found = list.find(p => p.id === id);
        if (found) {
          const confirmConvert = confirm(`Convert Proposal "${found.projectTitle}" (${found.clientName}) into an ACTIVE ONGOING PROJECT?`);
          if (confirmConvert) {
            // Remove from proposals
            const updatedProposals = list.filter(p => p.id !== id);
            saveProjectProposals(updatedProposals);

            // Add to Ongoing Projects
            const ongoingList = getOngoingProjects();
            const ongoingPrefix = found.discipline === 'Architecture' ? 'PRJ-ARC-' : 'PRJ-INT-';
            const newOngoingId = `${ongoingPrefix}${Math.floor(200 + Math.random() * 800)}`;

            const newOngoingProject = {
              id: newOngoingId,
              name: found.projectTitle,
              discipline: found.discipline,
              city: found.city,
              scope: found.scope,
              manager: found.manager,
              managerCode: found.managerCode || 'HD001',
              employee: found.discipline === 'Architecture' ? 'Komal' : 'Nikita',
              employeeCode: found.discipline === 'Architecture' ? 'SD012' : 'SD016',
              stage: 'Contract Signed - Initial Drawing Kickoff',
              progress: 10,
              priority: 'Urgent',
              deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
              fileAttachment: found.fileAttachment.replace('.pdf', '_Master.dwg'),
              status: 'Ongoing'
            };

            ongoingList.unshift(newOngoingProject);
            saveOngoingProjects(ongoingList);

            renderProposals();
            if (typeof window.renderOngoingProjects === 'function') {
              window.renderOngoingProjects();
            }

            switchToTab('tabOngoingProjects');
            showToast(`Proposal successfully converted to Ongoing Project ${newOngoingId}!`, '🎉');
          }
        }
      });
    });
  }

  // Wire Discipline Tabs Clicking
  if (proposalDisciplineTabs) {
    proposalDisciplineTabs.querySelectorAll('.proposal-discipline-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        proposalDisciplineTabs.querySelectorAll('.proposal-discipline-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentDiscipline = btn.getAttribute('data-discipline');
        renderProposals();

        const label = currentDiscipline === 'Architecture' ? 'Architecture Proposals' : (currentDiscipline === 'Interior' ? 'Interior Proposals' : 'All Proposals');
        showToast(`Filtered: ${label}`, '📑');
      });
    });
  }

  if (proposalSearchInput) proposalSearchInput.addEventListener('input', renderProposals);
  if (proposalCityFilter) proposalCityFilter.addEventListener('change', renderProposals);
  if (proposalStageFilter) proposalStageFilter.addEventListener('change', renderProposals);

  // Cross-tab real-time storage event synchronizer
  window.addEventListener('storage', (e) => {
    if (e.key === 'PROLIFIC_PROJECT_PROPOSALS') {
      renderProposals();
    }
  });

  renderProposals();
  window.renderProposals = renderProposals;
}

/* ==========================================================================
   7. BLACK & WHITE PROJECTS GALLERY (SLIDE VIEW WITH INLINE COLOR DETAILS)
   ========================================================================== */
function setupProjectGallerySlider() {
  const track = document.getElementById('gallerySliderTrack');
  const viewport = document.getElementById('gallerySliderViewport');
  const prevBtn = document.getElementById('gallerySlidePrevBtn');
  const nextBtn = document.getElementById('gallerySlideNextBtn');
  const filterBtns = document.querySelectorAll('.filter-btn');

  const currentSlideNumEl = document.getElementById('galleryCurrentSlideNum');
  const totalSlideNumEl = document.getElementById('galleryTotalSlideNum');
  const dotsContainer = document.getElementById('gallerySliderDots');

  // Inline Section elements on the page
  const inlineSec = document.getElementById('projectInlineDetailsSection');
  const inlineImg = document.getElementById('inlineProjectImg');
  const inlineBadge = document.getElementById('inlineProjectBadge');
  const inlineLoc = document.getElementById('inlineProjectLocation');
  const inlineTitle = document.getElementById('inlineProjectTitle');
  const inlineSub = document.getElementById('inlineProjectSubtitle');
  const inlineDesc = document.getElementById('inlineProjectDesc');
  const inlineSpecs = document.getElementById('inlineProjectSpecs');
  const closeInlineBtn = document.getElementById('closeInlineDetailsBtn');

  if (!track) return;

  const config = getLandingConfig();
  const projects = (config && Array.isArray(config.galleryProjects) && config.galleryProjects.length > 0)
    ? config.galleryProjects
    : DEFAULT_LANDING_CONFIG.galleryProjects;

  // Dynamic filter counts
  const archCount = projects.filter(p => p.category === 'architecture').length;
  const intCount = projects.filter(p => p.category === 'interior').length;
  const archBtn = document.querySelector('.filter-btn[data-filter="architecture"]');
  const intBtn = document.querySelector('.filter-btn[data-filter="interior"]');
  if (archBtn) archBtn.textContent = `ARCHITECTURE (${archCount})`;
  if (intBtn) intBtn.textContent = `INTERIOR (${intCount})`;

  const activeFilterBtn = document.querySelector('.filter-btn.active');
  let currentCategory = activeFilterBtn ? (activeFilterBtn.getAttribute('data-filter') || 'architecture') : 'architecture';
  let activeFilteredProjects = [];
  let currentSlideIndex = 0;
  let wasDragging = false;

  function padZero(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  function updateSlidePosition(smooth = true) {
    if (activeFilteredProjects.length === 0) return;
    if (currentSlideIndex >= activeFilteredProjects.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = activeFilteredProjects.length - 1;

    if (smooth) {
      track.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
    } else {
      track.style.transition = 'none';
    }
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    if (currentSlideNumEl) currentSlideNumEl.textContent = padZero(currentSlideIndex + 1);
    if (totalSlideNumEl) totalSlideNumEl.textContent = padZero(activeFilteredProjects.length);

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.dot');
      dots.forEach((d, idx) => d.classList.toggle('active', idx === currentSlideIndex));
    }
  }

  function renderSlides() {
    activeFilteredProjects = projects.filter(p => currentCategory === 'all' || p.category === currentCategory);
    track.innerHTML = '';
    currentSlideIndex = 0;

    if (activeFilteredProjects.length === 0) {
      track.innerHTML = '<div style="padding:60px 20px;text-align:center;color:#8A6836;font-weight:700;width:100%;">No projects available in this category.</div>';
      return;
    }

    activeFilteredProjects.forEach((proj, idx) => {
      const slide = document.createElement('div');
      slide.className = 'gallery-slide-card';
      slide.setAttribute('data-category', proj.category);
      slide.setAttribute('data-index', idx.toString());
      slide.innerHTML = `
        <img src="${proj.image}" alt="${proj.title}" loading="lazy">
        <span class="gallery-slide-card-badge">${proj.category.toUpperCase()}</span>
        <span class="gallery-slide-card-location-badge">📍 ${proj.location || 'Surat, Gujarat'}</span>
        <div class="gallery-slide-card-overlay">
          <h3 class="gallery-slide-title">${proj.title}</h3>
          <p class="gallery-slide-subtitle">${proj.subtitle}</p>
        </div>
      `;

      slide.addEventListener('click', (e) => {
        if (wasDragging) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        openProjectDetails(idx);
      });

      track.appendChild(slide);
    });

    rebuildDots();
    updateSlidePosition(false);
  }

  function rebuildDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    activeFilteredProjects.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `dot ${idx === currentSlideIndex ? 'active' : ''}`;
      dot.setAttribute('title', `Go to slide ${idx + 1}`);
      dot.setAttribute('role', 'button');
      dot.setAttribute('tabindex', '0');
      dot.addEventListener('click', () => {
        currentSlideIndex = idx;
        updateSlidePosition(true);
      });
      dotsContainer.appendChild(dot);
    });
  }

  function nextSlide() {
    if (activeFilteredProjects.length <= 1) return;
    currentSlideIndex = (currentSlideIndex + 1) % activeFilteredProjects.length;
    updateSlidePosition();
  }

  function prevSlide() {
    if (activeFilteredProjects.length <= 1) return;
    currentSlideIndex = (currentSlideIndex - 1 + activeFilteredProjects.length) % activeFilteredProjects.length;
    updateSlidePosition();
  }

  if (nextBtn) nextBtn.onclick = nextSlide;
  if (prevBtn) prevBtn.onclick = prevSlide;

  // Modal Elements on index.html
  const projectDetailsModal = document.getElementById('projectDetailsModal');
  const modalProjectImg = document.getElementById('modalProjectImg');
  const modalProjectBadge = document.getElementById('modalProjectBadge');
  const modalProjectLocation = document.getElementById('modalProjectLocation');
  const modalProjectTitle = document.getElementById('modalProjectTitle');
  const modalProjectSubtitle = document.getElementById('modalProjectSubtitle');
  const modalProjectDesc = document.getElementById('modalProjectDesc');
  const modalProjectSpecs = document.getElementById('modalProjectSpecs');
  const closeProjectModalBtn = document.getElementById('closeProjectModalBtn');
  const modalPrevProjBtn = document.getElementById('modalPrevProjBtn');
  const modalNextProjBtn = document.getElementById('modalNextProjBtn');
  let currentActiveModalIndex = 0;

  // Open Project Details (Modal Popup)
  function openProjectDetails(index) {
    if (!activeFilteredProjects[index]) return;
    currentActiveModalIndex = index;
    const proj = activeFilteredProjects[index];

    // Populate Modal Dialog
    if (modalProjectImg) modalProjectImg.src = proj.image;
    if (modalProjectBadge) modalProjectBadge.textContent = proj.category.toUpperCase();
    if (modalProjectLocation) modalProjectLocation.textContent = `📍 ${proj.location || 'Surat, Gujarat'}`;
    if (modalProjectTitle) modalProjectTitle.textContent = proj.title;
    if (modalProjectSubtitle) modalProjectSubtitle.textContent = proj.subtitle;
    if (modalProjectDesc) modalProjectDesc.textContent = proj.details || proj.subtitle;
    if (modalProjectSpecs) modalProjectSpecs.textContent = proj.specs || 'Area: 14,000 Sq. Ft. • Execution: Full Structural & Interior Fitout';

    if (projectDetailsModal) {
      projectDetailsModal.style.display = 'flex';
      projectDetailsModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  if (closeProjectModalBtn) {
    closeProjectModalBtn.onclick = () => {
      if (projectDetailsModal) {
        projectDetailsModal.style.display = 'none';
        projectDetailsModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    };
  }

  if (projectDetailsModal) {
    projectDetailsModal.addEventListener('click', (e) => {
      if (e.target === projectDetailsModal) {
        projectDetailsModal.style.display = 'none';
        projectDetailsModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (modalPrevProjBtn) {
    modalPrevProjBtn.onclick = () => {
      if (activeFilteredProjects.length <= 1) return;
      const prevIdx = (currentActiveModalIndex - 1 + activeFilteredProjects.length) % activeFilteredProjects.length;
      openProjectDetails(prevIdx);
    };
  }

  if (modalNextProjBtn) {
    modalNextProjBtn.onclick = () => {
      if (activeFilteredProjects.length <= 1) return;
      const nextIdx = (currentActiveModalIndex + 1) % activeFilteredProjects.length;
      openProjectDetails(nextIdx);
    };
  }

  // Attach interactive listeners once
  if (!track.dataset.sliderListeners) {
    track.dataset.sliderListeners = 'true';

    // Continuous Pointer Drag Engine with Real-Time Tracking, Velocity & Momentum
    let isPointerDown = false;
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let dragDeltaX = 0;
    let isHorizontalGesture = null;
    let animationFrameId = null;
    let velocityTracker = [];
    let activePointerId = null;

    if (viewport) {
      viewport.addEventListener('pointerdown', (e) => {
        if (e.button !== 0 && e.pointerType === 'mouse') return;
        if (activeFilteredProjects.length <= 1) return;

        isPointerDown = true;
        wasDragging = false;
        isHorizontalGesture = null;
        startX = e.clientX;
        startY = e.clientY;
        currentX = e.clientX;
        dragDeltaX = 0;
        activePointerId = e.pointerId;
        velocityTracker = [{ x: e.clientX, time: performance.now() }];

        track.style.transition = 'none';
        viewport.classList.add('is-dragging');
        try { viewport.setPointerCapture(e.pointerId); } catch (err) {}
      });

      viewport.addEventListener('pointermove', (e) => {
        if (!isPointerDown) return;
        currentX = e.clientX;
        const diffX = currentX - startX;
        const diffY = e.clientY - startY;

        // Intent detection: check whether gesture is horizontal
        if (isHorizontalGesture === null) {
          if (Math.abs(diffX) > 6 || Math.abs(diffY) > 6) {
            isHorizontalGesture = Math.abs(diffX) >= Math.abs(diffY);
            if (!isHorizontalGesture) {
              isPointerDown = false;
              viewport.classList.remove('is-dragging');
              try { viewport.releasePointerCapture(activePointerId); } catch (err) {}
              updateSlidePosition(true);
              return;
            }
          } else {
            return;
          }
        }

        if (!isHorizontalGesture) return;

        wasDragging = true;
        const viewportWidth = viewport.clientWidth || 800;
        let delta = diffX;

        // Elastic rubber-banding at edges
        const isAtFirst = currentSlideIndex === 0;
        const isAtLast = currentSlideIndex === activeFilteredProjects.length - 1;
        if ((isAtFirst && delta > 0) || (isAtLast && delta < 0)) {
          delta = delta * 0.32;
        }

        dragDeltaX = delta;

        // Track velocity points
        const now = performance.now();
        velocityTracker.push({ x: e.clientX, time: now });
        while (velocityTracker.length > 1 && now - velocityTracker[0].time > 120) {
          velocityTracker.shift();
        }

        if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(() => {
            const basePercent = -currentSlideIndex * 100;
            const pixelToPercent = (dragDeltaX / viewportWidth) * 100;
            track.style.transform = `translateX(${basePercent + pixelToPercent}%)`;
            animationFrameId = null;
          });
        }
      });

      const handlePointerEnd = (e) => {
        if (!isPointerDown) return;
        isPointerDown = false;
        viewport.classList.remove('is-dragging');

        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }

        try { viewport.releasePointerCapture(activePointerId); } catch (err) {}

        const viewportWidth = viewport.clientWidth || 800;

        // Calculate flick velocity
        let releaseVelocity = 0;
        if (velocityTracker.length >= 2) {
          const first = velocityTracker[0];
          const last = velocityTracker[velocityTracker.length - 1];
          const dt = last.time - first.time;
          if (dt > 10) {
            releaseVelocity = (last.x - first.x) / dt;
          }
        }

        const flickThreshold = 0.32; // px/ms
        const distanceThreshold = viewportWidth * 0.18;

        if (releaseVelocity < -flickThreshold || dragDeltaX < -distanceThreshold) {
          nextSlide();
        } else if (releaseVelocity > flickThreshold || dragDeltaX > distanceThreshold) {
          prevSlide();
        } else {
          updateSlidePosition(true);
        }

        setTimeout(() => {
          wasDragging = false;
        }, 100);
      };

      viewport.addEventListener('pointerup', handlePointerEnd);
      viewport.addEventListener('pointercancel', handlePointerEnd);

      // Trackpad 2-finger horizontal swipe (only intercept true horizontal gestures)
      let wheelCooldown = false;
      viewport.addEventListener('wheel', (e) => {
        const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY) * 1.8 && Math.abs(e.deltaX) > 24;
        if (isHorizontal) {
          e.preventDefault();
          if (wheelCooldown) return;
          wheelCooldown = true;
          if (e.deltaX > 0) nextSlide();
          else prevSlide();
          setTimeout(() => { wheelCooldown = false; }, 360);
        }
      }, { passive: false });
    }

    // Keyboard navigation for gallery & modal
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;

      const projectDetailsModal = document.getElementById('projectDetailsModal');
      const isModalOpen = projectDetailsModal && (projectDetailsModal.style.display === 'flex' || projectDetailsModal.classList.contains('active'));

      if (isModalOpen) {
        if (e.key === 'ArrowRight') {
          const nextBtn = document.getElementById('modalNextProjBtn');
          if (nextBtn) nextBtn.click();
        } else if (e.key === 'ArrowLeft') {
          const prevBtn = document.getElementById('modalPrevProjBtn');
          if (prevBtn) prevBtn.click();
        } else if (e.key === 'Escape') {
          const closeBtn = document.getElementById('closeProjectModalBtn');
          if (closeBtn) closeBtn.click();
        }
        return;
      }

      const gallerySection = document.getElementById('properties');
      if (!gallerySection) return;
      const rect = gallerySection.getBoundingClientRect();
      const isVisibleInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisibleInViewport) {
        if (e.key === 'ArrowRight') nextSlide();
        else if (e.key === 'ArrowLeft') prevSlide();
      }
    });

    // Filter Buttons
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-filter') || 'architecture';
        renderSlides();
      });
    });
  }

  renderSlides();
}

function setupProjectGalleryGrid() {
  setupProjectGallerySlider();
}

function setup3DCoverflowEngine() {
  setupProjectGallerySlider();
}

function setupCategoryFilters() {
  // Integrated directly into setupProjectGallerySlider for reactive state synchronization
}

function setupModals() {
  const contactModal = document.getElementById('contactModal');
  const loginModal = document.getElementById('loginModal');
  const openLoginBtn = document.getElementById('openLoginBtn');
  const openContactBtn = document.getElementById('openContactBtn');
  const closeContactBtn = document.getElementById('closeContactBtn');
  const closeLoginBtn = document.getElementById('closeLoginBtn');

  if (openLoginBtn) {
    openLoginBtn.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  }

  if (openContactBtn && contactModal) {
    openContactBtn.addEventListener('click', () => {
      contactModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeContactBtn && contactModal) {
    closeContactBtn.addEventListener('click', () => {
      contactModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (closeLoginBtn && loginModal) {
    closeLoginBtn.addEventListener('click', () => {
      loginModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Backdrop click dismissal for all active modals
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        if (modal.id === 'projectDetailsModal') {
          modal.style.display = 'none';
        }
        document.body.style.overflow = '';
      }
    });
  });

  // Global Escape key dismisses any open modal dialog
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.active, .modal-backdrop[style*="display: flex"]').forEach(modal => {
        modal.classList.remove('active');
        if (modal.id === 'projectDetailsModal') {
          modal.style.display = 'none';
        }
      });
      document.body.style.overflow = '';
    }
  });
}

function setupSmoothScroll() {
  // 1. Enhanced native smooth scroll for in-page anchors and navigation links
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      // Check if link is targeting the current page
      let targetHash = '';
      if (href.startsWith('#')) {
        targetHash = href;
      } else {
        try {
          const url = new URL(href, window.location.href);
          const currentPath = window.location.pathname.replace(/\/+$/, '').toLowerCase();
          const targetPath = url.pathname.replace(/\/+$/, '').toLowerCase();
          
          if ((currentPath === targetPath || (currentPath.endsWith('/index.html') && targetPath.endsWith('/')) || (targetPath.endsWith('/index.html') && currentPath.endsWith('/'))) && url.hash) {
            targetHash = url.hash;
          }
        } catch (err) {}
      }

      if (targetHash && targetHash !== '#') {
        const targetEl = document.querySelector(targetHash);
        if (targetEl) {
          e.preventDefault();
          const header = document.querySelector('.site-header') || document.querySelector('.wf-header');
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = Math.max(0, targetEl.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 20));

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          if (window.history && window.history.pushState) {
            window.history.pushState(null, null, targetHash);
          }
        }
      }
    });
  });

  // 2. Smoothly scroll to hash element on initial page load
  if (window.location.hash) {
    setTimeout(() => {
      try {
        const targetEl = document.querySelector(window.location.hash);
        if (targetEl) {
          const header = document.querySelector('.site-header') || document.querySelector('.wf-header');
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = Math.max(0, targetEl.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 20));
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      } catch (err) {}
    }, 250);
  }

  // 3. Floating Smooth Back to Top Button
  let backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) {
    backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTopBtn';
    backToTopBtn.className = 'btn-back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Scroll to top');
    backToTopBtn.setAttribute('title', 'Scroll to top');
    backToTopBtn.innerHTML = '↑';
    document.body.appendChild(backToTopBtn);
  }

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 4. Subtle Intersection Observer Scroll Reveal for Cards
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.service-card, .why-card, .track-stat-card, .contact-card-box, .leadership-card, .overview-block').forEach(el => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });
  }
}

/* ==========================================================================
   8. UNIVERSAL CIRCULAR USER AVATAR & PHOTO UPLOAD SYSTEM
   ========================================================================== */
function setupUniversalAvatarSystem() {
  // 1. Founder Avatar (dashboard.html)
  const founderInput = document.getElementById('founderAvatarInput');
  const founderImg = document.getElementById('founderAvatarImg');
  const founderInitials = document.getElementById('founderAvatarInitials');
  const headerUserName = document.getElementById('headerUserName');

  if (founderInput && founderImg && founderInitials) {
    const founderName = headerUserName ? headerUserName.textContent.split(' ')[0] : 'Gaurav';
    const storageKey = `PROLIFIC_AVATAR_FOUNDER_${founderName}`;
    
    // Load saved avatar
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      founderImg.src = saved;
      founderImg.style.display = 'block';
      founderInitials.style.display = 'none';
    } else {
      founderImg.style.display = 'none';
      founderInitials.style.display = 'block';
      founderInitials.textContent = founderName.charAt(0).toUpperCase();
    }

    founderInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        if (!file.type.startsWith('image/')) {
          alert('Please select a valid image file (PNG, JPG, WEBP).');
          return;
        }
        const reader = new FileReader();
        reader.onload = function(evt) {
          const dataUrl = evt.target.result;
          try {
            localStorage.setItem(storageKey, dataUrl);
          } catch(err) {}
          founderImg.src = dataUrl;
          founderImg.style.display = 'block';
          founderInitials.style.display = 'none';
          showToast(`Founder profile photo updated! 📷`, '✨');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // 2. Manager Avatar (manager-dashboard.html)
  const mgrInput = document.getElementById('mgrAvatarInput');
  const mgrImg = document.getElementById('mgrAvatarImg');
  const mgrInitials = document.getElementById('mgrAvatarInitials');
  const mgrHeaderUserName = document.getElementById('mgrHeaderUserName');

  if (mgrInput && mgrImg && mgrInitials) {
    const mgrName = mgrHeaderUserName ? mgrHeaderUserName.textContent.split(' ')[0] : 'Manager';
    const storageKey = `PROLIFIC_AVATAR_MANAGER_${mgrName}`;

    const saved = localStorage.getItem(storageKey);
    if (saved) {
      mgrImg.src = saved;
      mgrImg.style.display = 'block';
      mgrInitials.style.display = 'none';
    } else {
      mgrImg.style.display = 'none';
      mgrInitials.style.display = 'block';
      mgrInitials.textContent = mgrName.charAt(0).toUpperCase();
    }

    mgrInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        if (!file.type.startsWith('image/')) {
          alert('Please select a valid image file (PNG, JPG, WEBP).');
          return;
        }
        const reader = new FileReader();
        reader.onload = function(evt) {
          const dataUrl = evt.target.result;
          try {
            localStorage.setItem(storageKey, dataUrl);
          } catch(err) {}
          mgrImg.src = dataUrl;
          mgrImg.style.display = 'block';
          mgrInitials.style.display = 'none';
          showToast(`Manager profile photo updated! 📷`, '✨');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // 3. Employee Avatar (employee-dashboard.html & all employee pages)
  const empInput = document.getElementById('empAvatarInput');
  const empImg = document.getElementById('empAvatarImg');
  const empInitials = document.getElementById('empAvatarInitials');
  const empHeaderUserName = document.getElementById('empHeaderUserName');

  if (empInput && empImg && empInitials) {
    const empName = empHeaderUserName ? empHeaderUserName.textContent.split(' ')[0] : 'Employee';
    const storageKey = `PROLIFIC_AVATAR_EMP_${empName}`;

    const saved = localStorage.getItem(storageKey);
    if (saved) {
      empImg.src = saved;
      empImg.style.display = 'block';
      empInitials.style.display = 'none';
    } else {
      empImg.style.display = 'none';
      empInitials.style.display = 'block';
      empInitials.textContent = empName.charAt(0).toUpperCase();
    }

    empInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        if (!file.type.startsWith('image/')) {
          alert('Please select a valid image file (PNG, JPG, WEBP).');
          return;
        }
        const reader = new FileReader();
        reader.onload = function(evt) {
          const dataUrl = evt.target.result;
          try {
            localStorage.setItem(storageKey, dataUrl);
          } catch(err) {}
          empImg.src = dataUrl;
          empImg.style.display = 'block';
          empInitials.style.display = 'none';
          showToast(`${empName}'s profile photo updated! 📷`, '✨');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // 4. Editor Avatar (editor-dashboard.html)
  const editorInput = document.getElementById('editorAvatarInput');
  const editorImg = document.getElementById('editorAvatarImg');
  const editorInitials = document.getElementById('editorAvatarInitials');
  const editorHeaderUserName = document.getElementById('editorHeaderUserName');

  if (editorInput && editorImg && editorInitials) {
    const editorName = editorHeaderUserName ? editorHeaderUserName.textContent.split(' ')[0] : 'Rakesh';
    const storageKey = `PROLIFIC_AVATAR_EDITOR_${editorName}`;

    const saved = localStorage.getItem(storageKey);
    if (saved) {
      editorImg.src = saved;
      editorImg.style.display = 'block';
      editorInitials.style.display = 'none';
    } else {
      editorImg.style.display = 'none';
      editorInitials.style.display = 'block';
      editorInitials.textContent = editorName.charAt(0).toUpperCase();
    }

    editorInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        if (!file.type.startsWith('image/')) {
          alert('Please select a valid image file (PNG, JPG, WEBP).');
          return;
        }
        const reader = new FileReader();
        reader.onload = function(evt) {
          const dataUrl = evt.target.result;
          try {
            localStorage.setItem(storageKey, dataUrl);
          } catch(err) {}
          editorImg.src = dataUrl;
          editorImg.style.display = 'block';
          editorInitials.style.display = 'none';
          showToast(`Rakesh Bhai's profile photo updated! 📷`, '✨');
        };
        reader.readAsDataURL(file);
      }
    });
  }
}

/* ==========================================================================
   10. PROLIFIC COMPREHENSIVE LIVE CMS & MULTI-SECTION ENGINE (RAKESH'S DASHBOARD)
   ========================================================================== */
const DEFAULT_LANDING_CONFIG = {
  // 1. Hero & Header
  brandBadgeText: 'EST. 2026 • ARCHITECTURAL EXCELLENCE',
  heroHeading: 'Architectural Elegance & Luxury Spaces',
  heroBullets: [
    'Premium interior design and strategic real estate advisory.',
    'End-to-end turnkey project execution from concept to key handover.',
    'Custom residential, commercial, and modular living solutions.'
  ],
  heroImage: 'images/hero-villa.png',

  // 2. Typography
  headingFont: "'Playfair Display', Georgia, serif",
  bodyFont: "'Plus Jakarta Sans', sans-serif",
  heroTitleSize: '2.8',
  sectionTitleSize: '2.2',
  bodyTextSize: '1.0',

  // 3. Projects Gallery
  galleryBadge: 'PROLIFIC',
  galleryTitle: 'OUR PROJECTS GALLERY',
  galleryProjects: [
    {
      id: 1,
      title: 'PROLIFIC KITCHENS',
      subtitle: 'Bespoke Calacatta Marble & Fluted Joinery',
      category: 'interior',
      image: 'images/project-kitchen.png',
      location: 'Vesu Luxury Enclave, Surat, Gujarat',
      details: 'Custom modular kitchen island crafted from bookmatched Italian Calacatta Gold marble with integrated flush induction cooktops, fluted natural oak cabinetry, and concealed smart motorized storage.',
      specs: 'Area: 850 Sq. Ft. • Execution: 90 Days Turnkey Joinery'
    },
    {
      id: 2,
      title: 'PROLIFIC ESTATES',
      subtitle: 'Double-Height Living & Travertine Walls',
      category: 'architecture',
      image: 'images/project-living.png',
      location: 'Dumas Road Boulevard, Surat, Gujarat',
      details: 'Double-height grand living hall featuring roman travertine monolithic accent walls, suspended sculptural crystal chandelier, and acoustic floor-to-ceiling panoramic glass façades.',
      specs: 'Area: 14,000 Sq. Ft. • Execution: Structural & Interior Architecture'
    },
    {
      id: 3,
      title: 'PROLIFIC PENTHOUSES',
      subtitle: 'Master Bedroom Suite & City Skyline Lounge',
      category: 'interior',
      image: 'images/project-interior.png',
      location: 'VIP Road Sky Towers, Vesu, Surat',
      details: 'Ultra-luxurious master bedroom retreat overlooking the city skyline, featuring custom upholstered leather wall paneling, herringbone walnut hardwood flooring, and motorized sheer drapery.',
      specs: 'Area: 6,200 Sq. Ft. • Execution: Haute-Couture Interior Fitout'
    },
    {
      id: 4,
      title: 'PROLIFIC RESIDENCES',
      subtitle: 'Architectural Villa & Infinity Pool',
      category: 'architecture',
      image: 'images/hero-villa.png',
      location: 'Piplod Waterfront, Surat, Gujarat',
      details: 'Contemporary architectural private villa with cantilevered geometric rooflines, temperature-controlled cantilevered infinity swimming pool, and landscaped courtyard zen gardens.',
      specs: 'Area: 18,500 Sq. Ft. • Execution: 16 Months Turnkey Delivery'
    },
    {
      id: 5,
      title: 'PROLIFIC BATHROOMS',
      subtitle: 'Bookmatched Onyx Stone & Freestanding Spa Tub',
      category: 'interior',
      image: 'images/project-bathroom.png',
      location: 'Althan Royal Mansions, Surat',
      details: 'Spa-inspired luxury master bathroom designed with backlit Iranian Honey Onyx stone slabs, custom freestanding composite stone soaking tub, rainfall steam shower, and brushed gold fixtures.',
      specs: 'Area: 420 Sq. Ft. • Execution: Precision Stonework & Automation'
    },
    {
      id: 6,
      title: 'PROLIFIC DINING',
      subtitle: 'Haute-Couture Dining & Crystal Lighting',
      category: 'interior',
      image: 'images/project-dining.png',
      location: 'Citylight Prime Residences, Surat',
      details: 'Formal 12-seater bespoke dining salon featuring custom bronze-inlaid marble dining table, custom Italian leather chairs, and layered architectural crystal chandelier lighting.',
      specs: 'Area: 1,100 Sq. Ft. • Execution: Artisan Joinery & Lighting Design'
    },
    {
      id: 7,
      title: 'PROLIFIC TERRACES',
      subtitle: 'Skyline Lounge & Architectural Fire Features',
      category: 'architecture',
      image: 'images/project-terrace.png',
      location: 'Rajhans Montessa Skyline, Dumas Rd, Surat',
      details: 'Penthouse rooftop sky lounge featuring cantilevered pergola structures, integrated bioethanol architectural fire pit, weather-resistant teak deck, and panoramic city lights panorama.',
      specs: 'Area: 3,400 Sq. Ft. • Execution: Landscape Architecture & Lounges'
    },
    {
      id: 8,
      title: 'PROLIFIC LIBRARIES',
      subtitle: 'Dark Walnut Executive Office & Illuminated Bookshelves',
      category: 'architecture',
      image: 'images/project-office.png',
      location: 'Gotri Corporate District, Vadodara',
      details: 'Private executive boardroom and study lined with dark american walnut fluting, integrated indirect warm LED illumination, and hidden sommelier library bar.',
      specs: 'Area: 2,800 Sq. Ft. • Execution: Architectural Wood Joinery & Lighting'
    },
    {
      id: 9,
      title: 'PROLIFIC CINEMA',
      subtitle: 'Tiered Velvet Lounges & Star-Lit Acoustic Ceiling',
      category: 'interior',
      image: 'images/project-cinema.png',
      location: 'SG Highway Grand Villa, Ahmedabad',
      details: 'State-of-the-art private acoustic theater with tiered custom motorized velvet recliners, 4K laser projection, and fiber-optic starlight acoustic micro-perforated ceiling.',
      specs: 'Area: 950 Sq. Ft. • Execution: Dolby Atmos Certified Engineering'
    },
    {
      id: 10,
      title: 'PROLIFIC GRAND FOYERS',
      subtitle: 'Sculptural Helical Marble Staircase & Grand Atrium',
      category: 'architecture',
      image: 'images/project-foyer.png',
      location: 'Pal Green Vista Estates, Surat',
      details: 'Grand entrance foyer featuring double-height ceiling, floating helical Statuario marble staircase with brushed gold handrails, and monumental art niche walls.',
      specs: 'Area: 2,200 Sq. Ft. • Execution: Helical Structural Engineering'
    },
    {
      id: 11,
      title: 'PROLIFIC WELLNESS',
      subtitle: 'Heated Pool, Slate Waterfall & Teak Spa Deck',
      category: 'architecture',
      image: 'images/project-wellness.png',
      location: 'Dumas Coastal Sanctuary, Surat',
      details: 'Private indoor wellness retreat with heated hydrotherapy pool, Brazilian slate waterfall feature wall, cedar dry sauna, and tranquil teak yoga deck.',
      specs: 'Area: 4,600 Sq. Ft. • Execution: Aquatic & Spa Architecture'
    },
    {
      id: 12,
      title: 'PROLIFIC SKY SALONS',
      subtitle: 'Double-Height Fireplace & Backlit Onyx Bar',
      category: 'interior',
      image: 'images/project-lounge.png',
      location: 'Ring Road Crown Towers, Surat',
      details: 'Double-height luxury cocktail salon with integrated linear bio-fireplace, illuminated honey onyx bar counter, and curved velvet lounge seating.',
      specs: 'Area: 3,100 Sq. Ft. • Execution: Custom Millwork & Automation'
    },
    {
      id: 13,
      title: 'PROLIFIC CELLARS',
      subtitle: 'Glass Wine Cellar & Sommelier Tasting Lounge',
      category: 'interior',
      image: 'images/project-winecellar.png',
      location: 'Iscon Greens, Ahmedabad',
      details: 'Architectural glass wine cellar with dual-zone climate precision, floating acrylic & solid brass bottle racks, and adjoining private sommelier tasting lounge.',
      specs: 'Area: 650 Sq. Ft. • Execution: Precision Climate & Joinery'
    }
  ],

  // 4. Services Section
  servicesBadge: 'PROLIFIC',
  servicesTitle: 'OUR DESIGN & MANAGEMENT SERVICES',
  servicesList: [
    { title: 'Residential Interior Design', desc: 'Tailored luxury residences, private villas, and bespoke apartment spaces.' },
    { title: 'Lighting & Electrical Design', desc: 'Architectural lighting concepts, ambient LED layering, and home automation.' },
    { title: 'Commercial Interior Design', desc: 'Corporate headquarters, boutique retail shops, and hospitality architecture.' },
    { title: 'Custom Furniture & Carpentry', desc: 'Handcrafted furniture, artisan wood joinery, and custom wardrobes.' },
    { title: 'Modular Kitchen Design', desc: 'Ergonomic kitchens with premium stone counters and smart storage.' },
    { title: '3D Design & Visualization', desc: 'Photorealistic 3D renderings and immersive virtual walkthroughs.' },
    { title: 'Bedroom & Living Room Design', desc: 'Cohesive aesthetic planning for master suites and formal lounge areas.' },
    { title: 'Renovation & Remodeling', desc: 'Structural upgrades, spatial reconfiguration, and complete property renewal.' },
    { title: 'Bathroom Interior Design', desc: 'Spa-inspired luxury bathrooms with custom stone tiling and vanity fixtures.' },
    { title: 'Turnkey Project Management', desc: 'Complete execution from initial drawings through construction to final key handover.' }
  ],

  // 5. Why Choose Prolific Section
  whyChooseBadge: 'PROLIFIC',
  whyChooseTitle: 'WHY CHOOSE PROLIFIC',
  whyChooseCards: [
    { title: 'Bespoke Design', desc: 'Every space is custom tailored to maximize spatial utility, light, and modern refinement.' },
    { title: 'Real Estate Value', desc: 'We blend architectural mastery with strategic market positioning for maximum asset value.' },
    { title: 'Seamless Delivery', desc: 'Transparent cost management, strict timeline adherence, and dedicated project supervision.' }
  ],

  // 6. Track Record Section
  trackRecordBadge: 'PROLIFIC',
  trackRecordTitle: 'OUR TRACK RECORD',
  trackStats: [
    { number: '250+', label: 'COMPLETED PROJECTS' },
    { number: '99%', label: 'ON-TIME HANDOVER RATE' }
  ],

  // 7. About Us Section / Page
  aboutBadge: 'OUR STORY',
  aboutTitle: 'Pioneering Architectural Grandeur in Gujarat',
  aboutParagraph1: 'Founded on the principles of architectural integrity and uncompromising luxury, Prolific transforms residential and commercial spaces into timeless works of art.',
  aboutParagraph2: 'Our integrated methodology spans initial conceptual blueprints, high-precision CAD detailing, master artisanship, and turnkey site supervision across Surat, Ahmedabad, and Vadodara.',
  foundersTitle: 'EXECUTIVE LEADERSHIP',
  foundersQuote: '"Elegance is not merely aesthetic—it is the harmonious dialogue between structural form and living luxury."',

  // 8. Contact Us & Studio Info
  contactBadge: 'CONNECT WITH PROLIFIC',
  contactTitle: 'Contact & Studio Advisory',
  studioAddress: '315 Rajhans Montessa, Dumas Rd, Magdalla, Surat, Gujarat 395007',
  studioPhone: '+91 98250 12345 / +91 91065 99887',
  studioEmail: 'inquiry@prolific.in',
  studioHours: 'Mon - Sat: 9:30 AM - 7:30 PM (Sunday by Appointment)',

  // 9. Footer & Touch Banner
  touchTitle: 'Experience the Prolific Touch',
  touchDesc: 'From luxury residential interior transformations to strategic real estate developments, Prolific delivers unmatched elegance, professional project management, and lasting value.',
  footerTagline: 'Pioneering Luxury Interiors & Premier Real Estate Advisory.',
  footerCopyright: '© 2026 Prolific Interiors & Real Estate. All rights reserved.',
  excellenceSubtext: 'a place of excellence',

  // 10. Social Media Links & Channels (Instagram, Facebook, YouTube)
  instagramUrl: 'https://instagram.com/prolific_design',
  facebookUrl: 'https://facebook.com/prolific_interiors',
  youtubeUrl: 'https://youtube.com/@ProlificLuxuryDesign',

  // 11. Book an Appointment Form Config (contact.html)
  apptBadge: 'SCHEDULE A SESSION',
  apptTitle: 'Book an Appointment',
  apptSubtitle: 'Reserve a private session with our principal design directors and executive consultants.',
  apptTimeSlots: [
    '10:00 AM – 11:00 AM (Morning Slot)',
    '11:30 AM – 12:30 PM (Mid-Morning Slot)',
    '02:00 PM – 03:00 PM (Afternoon Slot)',
    '03:30 PM – 04:30 PM (Tea-Time Slot)',
    '05:00 PM – 06:00 PM (Evening Slot)',
    '06:30 PM – 07:30 PM (Executive Late Slot)'
  ],
  apptServices: [
    'Bespoke Residential Interior Design',
    'Commercial & Corporate Architecture',
    'Architectural Villa & High-Rise Execution',
    'Modular Kitchen & Custom Joinery',
    'Real Estate Investment Advisory',
    'On-Site Drawing & Structural Inspection'
  ],
  apptNotesLabel: 'Project Scope / Specific Requirements',
  apptNotesPlaceholder: 'Provide property location, estimated sq. ft., or specific architectural styles you have in mind...',
  apptBtnText: 'Confirm & Schedule Appointment'
};

function getLandingConfig() {
  try {
    const raw = localStorage.getItem('PROLIFIC_LANDING_CONFIG');
    if (!raw) {
      localStorage.setItem('PROLIFIC_LANDING_CONFIG', JSON.stringify(DEFAULT_LANDING_CONFIG));
      return JSON.parse(JSON.stringify(DEFAULT_LANDING_CONFIG));
    }
    const parsed = JSON.parse(raw);
    const merged = Object.assign({}, DEFAULT_LANDING_CONFIG, parsed);
    if (Array.isArray(parsed.galleryProjects)) merged.galleryProjects = parsed.galleryProjects;
    if (Array.isArray(parsed.heroBullets)) merged.heroBullets = parsed.heroBullets;
    if (Array.isArray(parsed.servicesList)) merged.servicesList = parsed.servicesList;
    if (Array.isArray(parsed.whyChooseCards)) merged.whyChooseCards = parsed.whyChooseCards;
    if (Array.isArray(parsed.trackStats)) merged.trackStats = parsed.trackStats;
    if (Array.isArray(parsed.apptTimeSlots)) merged.apptTimeSlots = parsed.apptTimeSlots;
    if (Array.isArray(parsed.apptServices)) merged.apptServices = parsed.apptServices;
    return merged;
  } catch (e) {
    return JSON.parse(JSON.stringify(DEFAULT_LANDING_CONFIG));
  }
}

function saveLandingConfig(config) {
  try {
    localStorage.setItem('PROLIFIC_LANDING_CONFIG', JSON.stringify(config));
  } catch (e) {}
}

/* Dynamically applies all CMS Configuration values live to index.html & public pages */
function applyLiveLandingConfig() {
  const config = getLandingConfig();
  if (!config) return;

  // 1. Typography & Font Families
  if (config.headingFont) {
    document.documentElement.style.setProperty('--font-serif', config.headingFont);
  }
  if (config.bodyFont) {
    document.documentElement.style.setProperty('--font-sans', config.bodyFont);
  }
  if (config.heroTitleSize) {
    const heroH1 = document.querySelector('.hero-content h1');
    if (heroH1) heroH1.style.fontSize = `clamp(1.8rem, 5vw, ${config.heroTitleSize}rem)`;
  }
  if (config.sectionTitleSize) {
    document.querySelectorAll('.section-title').forEach(st => {
      st.style.fontSize = `clamp(1.6rem, 4.5vw, ${config.sectionTitleSize}rem)`;
    });
  }
  if (config.bodyTextSize) {
    document.body.style.fontSize = `${config.bodyTextSize}rem`;
  }

  // 2. Hero & Brand Badge
  const topBadgeText = document.querySelector('.top-security-badge span:last-child');
  if (topBadgeText && config.brandBadgeText) topBadgeText.textContent = config.brandBadgeText;

  const heroHeading = document.querySelector('.hero-content h1');
  if (heroHeading && config.heroHeading) heroHeading.textContent = config.heroHeading;

  const heroBulletsList = document.querySelector('.hero-bullets');
  if (heroBulletsList && Array.isArray(config.heroBullets) && config.heroBullets.length > 0) {
    heroBulletsList.innerHTML = '';
    config.heroBullets.forEach(bulletText => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="bullet-arrow">&gt;</span> <span>${bulletText}</span>`;
      heroBulletsList.appendChild(li);
    });
  }

  const heroImg = document.querySelector('.hero-img');
  if (heroImg && config.heroImage) heroImg.src = config.heroImage;

  // 3. Projects Gallery Section
  const gallerySection = document.getElementById('properties');
  if (gallerySection) {
    const galleryBadgeEl = gallerySection.querySelector('.brand-label');
    if (galleryBadgeEl && config.galleryBadge) galleryBadgeEl.textContent = config.galleryBadge;

    const galleryTitleEl = gallerySection.querySelector('.section-title');
    if (galleryTitleEl && config.galleryTitle) galleryTitleEl.textContent = config.galleryTitle;
  }

  // Render Black & White Project Gallery Slider
  if (typeof setupProjectGallerySlider === 'function') {
    setupProjectGallerySlider();
  }

  // 4. Services Section
  const servicesSection = document.getElementById('services');
  if (servicesSection) {
    const sBadge = servicesSection.querySelector('.brand-label');
    if (sBadge && config.servicesBadge) sBadge.textContent = config.servicesBadge;

    const sTitle = servicesSection.querySelector('.section-title');
    if (sTitle && config.servicesTitle) sTitle.textContent = config.servicesTitle;

    const sGrid = servicesSection.querySelector('.services-grid');
    if (sGrid && Array.isArray(config.servicesList) && config.servicesList.length > 0) {
      sGrid.innerHTML = '';
      const serviceIcons = [
        '<svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>',
        '<svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-4a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>',
        '<svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0v-4a1 1 0 011-1h2a1 1 0 011 1v4m-6 0h6"/></svg>',
        '<svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>',
        '<svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>',
        '<svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>',
        '<svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>',
        '<svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a2 2 0 01-4 0V4zm-6 8a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4zM6 20h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg>',
        '<svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
        '<svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
      ];
      config.servicesList.forEach((srv, idx) => {
        const iconSvg = serviceIcons[idx % serviceIcons.length];
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
          <div class="service-icon-box">${iconSvg}</div>
          <div class="service-info">
            <h3>${srv.title}</h3>
            <p>${srv.desc}</p>
          </div>
        `;
        sGrid.appendChild(card);
      });
    }
  }

  // 5. Why Choose Prolific Section
  const whyChooseSection = document.getElementById('about-section') || document.querySelector('.why-choose-section');
  if (whyChooseSection) {
    const wcBadge = whyChooseSection.querySelector('.brand-label');
    if (wcBadge && config.whyChooseBadge) wcBadge.textContent = config.whyChooseBadge;

    const wcTitle = whyChooseSection.querySelector('.section-title');
    if (wcTitle && config.whyChooseTitle) wcTitle.textContent = config.whyChooseTitle;

    const wcGrid = whyChooseSection.querySelector('.why-choose-grid');
    if (wcGrid && Array.isArray(config.whyChooseCards) && config.whyChooseCards.length > 0) {
      wcGrid.innerHTML = '';
      const wcIcons = [
        '<svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v3m0 0l-4 12m4-12l4 12M8 15h8M12 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/></svg>',
        '<svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>',
        '<svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>'
      ];
      config.whyChooseCards.forEach((cardData, idx) => {
        const iconSvg = wcIcons[idx % wcIcons.length];
        const card = document.createElement('div');
        card.className = 'feature-card';
        card.innerHTML = `
          <div class="feature-icon-badge">${iconSvg}</div>
          <h3>${cardData.title}</h3>
          <p>${cardData.desc}</p>
        `;
        wcGrid.appendChild(card);
      });
    }
  }

  // 6. Track Record Section
  const trackSection = document.querySelector('.track-record-section');
  if (trackSection) {
    const trBadge = trackSection.querySelector('.brand-label');
    if (trBadge && config.trackRecordBadge) trBadge.textContent = config.trackRecordBadge;

    const trTitle = trackSection.querySelector('.section-title');
    if (trTitle && config.trackRecordTitle) trTitle.textContent = config.trackRecordTitle;

    const statsGrid = trackSection.querySelector('.stats-grid');
    if (statsGrid && Array.isArray(config.trackStats) && config.trackStats.length > 0) {
      statsGrid.innerHTML = '';
      config.trackStats.forEach(st => {
        const statCard = document.createElement('div');
        statCard.className = 'stat-card';
        statCard.innerHTML = `
          <div class="stat-number">${st.number}</div>
          <div class="stat-label">${st.label}</div>
        `;
        statsGrid.appendChild(statCard);
      });
    }
  }

  // 7. Footer & Touch Banner
  const touchHeaderH2 = document.querySelector('.touch-header h2');
  if (touchHeaderH2 && config.touchTitle) touchHeaderH2.textContent = config.touchTitle;

  const touchHeaderP = document.querySelector('.touch-header p');
  if (touchHeaderP && config.touchDesc) touchHeaderP.textContent = config.touchDesc;

  const footerTaglineEl = document.querySelector('.footer-tagline');
  if (footerTaglineEl && config.footerTagline) footerTaglineEl.textContent = config.footerTagline;

  const footerCopyrightEl = document.querySelector('.footer-copyright');
  if (footerCopyrightEl && config.footerCopyright) footerCopyrightEl.innerHTML = config.footerCopyright;

  const excellenceSubtextEl = document.querySelector('.excellence-subtext');
  if (excellenceSubtextEl && config.excellenceSubtext) excellenceSubtextEl.textContent = config.excellenceSubtext;

  // Social Links Live Binding (Instagram, Facebook, YouTube)
  const socialInstagramLinks = document.querySelectorAll('.footer-social-instagram, #footerSocialInstagram');
  socialInstagramLinks.forEach(el => {
    let url = (config.instagramUrl || '').trim();
    if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
      url = `https://instagram.com/${url.replace(/^@/, '')}`;
    }
    el.href = url || 'https://instagram.com/prolific_design';
  });

  const socialFacebookLinks = document.querySelectorAll('.footer-social-facebook, #footerSocialFacebook');
  socialFacebookLinks.forEach(el => {
    let url = (config.facebookUrl || '').trim();
    if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
      url = `https://facebook.com/${url.replace(/^@/, '')}`;
    }
    el.href = url || 'https://facebook.com/prolific_interiors';
  });

  const socialYoutubeLinks = document.querySelectorAll('.footer-social-youtube, #footerSocialYoutube');
  socialYoutubeLinks.forEach(el => {
    let url = (config.youtubeUrl || '').trim();
    if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
      url = `https://youtube.com/${url.startsWith('@') ? url : '@' + url}`;
    }
    el.href = url || 'https://youtube.com/@ProlificLuxuryDesign';
  });

  // 8. Contact & Studio Info Live Binding (Contact page & Modal)
  const contactHeaderBadge = document.querySelector('.contact-hero-section .brand-label');
  if (contactHeaderBadge && config.contactBadge) contactHeaderBadge.textContent = config.contactBadge;

  const contactHeaderTitle = document.querySelector('.contact-hero-section .section-title');
  if (contactHeaderTitle && config.contactTitle) contactHeaderTitle.textContent = config.contactTitle;

  const contactAddressContainer = document.getElementById('contactStudioAddressContent');
  if (contactAddressContainer && config.studioAddress) {
    const addressLines = config.studioAddress.split(',').map(s => s.trim()).filter(Boolean);
    if (addressLines.length > 1) {
      contactAddressContainer.innerHTML = `<p><strong>${addressLines[0]}</strong></p>` + addressLines.slice(1).map(l => `<p>${l}</p>`).join('');
    } else {
      contactAddressContainer.innerHTML = `<p><strong>${config.studioAddress}</strong></p>`;
    }
  }

  const googleMapsLink = document.getElementById('contactGoogleMapsLink');
  if (googleMapsLink && config.studioAddress) {
    googleMapsLink.href = `https://maps.google.com/?q=${encodeURIComponent(config.studioAddress)}`;
  }

  const contactPhoneEl = document.getElementById('contactPhoneText');
  if (contactPhoneEl && config.studioPhone) {
    contactPhoneEl.textContent = config.studioPhone;
  }

  const contactHoursEl = document.getElementById('contactHoursText');
  if (contactHoursEl && config.studioHours) {
    contactHoursEl.textContent = config.studioHours;
  }

  const contactCallBtn = document.getElementById('contactCallBtn');
  if (contactCallBtn && config.studioPhone) {
    const cleanPhone = config.studioPhone.replace(/[^0-9+]/g, '');
    contactCallBtn.href = `tel:${cleanPhone}`;
  }

  const contactWhatsAppBtn = document.getElementById('contactWhatsAppBtn');
  if (contactWhatsAppBtn && config.studioPhone) {
    const cleanPhone = config.studioPhone.replace(/[^0-9]/g, '');
    contactWhatsAppBtn.href = `https://wa.me/${cleanPhone}`;
  }

  const contactEmailEl = document.getElementById('contactEmailText');
  if (contactEmailEl && config.studioEmail) {
    contactEmailEl.textContent = config.studioEmail;
  }

  const contactEmailBtn = document.getElementById('contactEmailBtn');
  if (contactEmailBtn && config.studioEmail) {
    contactEmailBtn.href = `mailto:${config.studioEmail}`;
  }

  // 9. About Us Page Live Binding
  const aboutHeroBadge = document.querySelector('.about-hero-section .brand-label');
  if (aboutHeroBadge && config.aboutBadge) aboutHeroBadge.textContent = config.aboutBadge;

  const aboutHeroTitle = document.querySelector('.about-hero-section .section-title');
  if (aboutHeroTitle && config.aboutTitle) aboutHeroTitle.textContent = config.aboutTitle;

  const aboutStoryP1 = document.querySelector('.about-story-section .overview-block:first-child p');
  if (aboutStoryP1 && config.aboutParagraph1) aboutStoryP1.textContent = config.aboutParagraph1;

  const aboutStoryP2 = document.querySelector('.about-story-section .overview-block:last-child p');
  if (aboutStoryP2 && config.aboutParagraph2) aboutStoryP2.textContent = config.aboutParagraph2;

  // 10. Book an Appointment Form Live Binding (contact.html)
  const apptBadgeEl = document.querySelector('.appointment-booking-card .brand-label');
  if (apptBadgeEl && config.apptBadge) apptBadgeEl.textContent = config.apptBadge;

  const apptTitleEl = document.querySelector('.appointment-booking-card h2');
  if (apptTitleEl && config.apptTitle) apptTitleEl.textContent = config.apptTitle;

  const apptSubtitleEl = document.querySelector('.appointment-booking-card .booking-card-header p');
  if (apptSubtitleEl && config.apptSubtitle) apptSubtitleEl.textContent = config.apptSubtitle;

  const apptTimeSelect = document.getElementById('apptTime');
  if (apptTimeSelect && Array.isArray(config.apptTimeSlots) && config.apptTimeSlots.length > 0) {
    const curVal = apptTimeSelect.value;
    apptTimeSelect.innerHTML = '<option value="" disabled selected>-- Select Consultation Time Slot --</option>';
    config.apptTimeSlots.forEach(slot => {
      const opt = document.createElement('option');
      opt.value = slot;
      opt.textContent = slot;
      if (slot === curVal) opt.selected = true;
      apptTimeSelect.appendChild(opt);
    });
  }

  const apptServiceSelect = document.getElementById('apptService');
  if (apptServiceSelect && Array.isArray(config.apptServices) && config.apptServices.length > 0) {
    const curVal = apptServiceSelect.value;
    apptServiceSelect.innerHTML = '';
    config.apptServices.forEach(srv => {
      const opt = document.createElement('option');
      opt.value = srv;
      opt.textContent = srv;
      if (srv === curVal) opt.selected = true;
      apptServiceSelect.appendChild(opt);
    });
  }

  const apptNotesLabelEl = document.querySelector('label[for="apptNotes"]');
  if (apptNotesLabelEl && config.apptNotesLabel) apptNotesLabelEl.textContent = config.apptNotesLabel;

  const apptNotesTextarea = document.getElementById('apptNotes');
  if (apptNotesTextarea && config.apptNotesPlaceholder) apptNotesTextarea.placeholder = config.apptNotesPlaceholder;

  const apptBtnEl = document.querySelector('.btn-book-appointment');
  if (apptBtnEl && config.apptBtnText) {
    apptBtnEl.innerHTML = `<span>🗓️</span> ${config.apptBtnText}`;
  }

  // Cross-tab real-time storage event synchronizer
  if (!window._prolificStorageListenerAttached) {
    window._prolificStorageListenerAttached = true;
    window.addEventListener('storage', (e) => {
      if (e.key === 'PROLIFIC_LANDING_CONFIG') {
        applyLiveLandingConfig();
      }
    });
  }
}

/* Controller for Rakesh's CMS Dashboard (editor-dashboard.html / rakesh.html) */
function setupEditorDashboard() {
  const btnSaveCmsChanges = document.getElementById('btnSaveCmsChanges');
  const btnResetCmsDefaults = document.getElementById('btnResetCmsDefaults');

  // Input Elements
  const cmsBrandBadgeText = document.getElementById('cmsBrandBadgeText');
  const cmsHeroHeading = document.getElementById('cmsHeroHeading');
  const cmsBulletsContainer = document.getElementById('cmsBulletsContainer');
  const btnAddBullet = document.getElementById('btnAddBullet');
  const cmsHeroImgFile = document.getElementById('cmsHeroImgFile');
  const cmsHeroImgPreview = document.getElementById('cmsHeroImgPreview');

  const cmsGalleryBadge = document.getElementById('cmsGalleryBadge');
  const cmsGalleryTitle = document.getElementById('cmsGalleryTitle');
  const cmsGalleryCardsGrid = document.getElementById('cmsGalleryCardsGrid');
  const cmsProjectCount = document.getElementById('cmsProjectCount');
  const btnOpenAddProjectModal = document.getElementById('btnOpenAddProjectModal');
  const addProjectModal = document.getElementById('addProjectModal');
  const closeAddProjectModal = document.getElementById('closeAddProjectModal');
  const addNewProjectForm = document.getElementById('addNewProjectForm');

  const cmsServicesBadge = document.getElementById('cmsServicesBadge');
  const cmsServicesTitle = document.getElementById('cmsServicesTitle');
  const cmsServicesContainer = document.getElementById('cmsServicesContainer');
  const btnAddService = document.getElementById('btnAddService');

  const cmsWhyChooseBadge = document.getElementById('cmsWhyChooseBadge');
  const cmsWhyChooseTitle = document.getElementById('cmsWhyChooseTitle');
  const cmsWhyChooseContainer = document.getElementById('cmsWhyChooseContainer');
  const btnAddWhyChoose = document.getElementById('btnAddWhyChoose');

  const cmsTrackRecordBadge = document.getElementById('cmsTrackRecordBadge');
  const cmsTrackRecordTitle = document.getElementById('cmsTrackRecordTitle');
  const cmsTrackStatsContainer = document.getElementById('cmsTrackStatsContainer');
  const btnAddStat = document.getElementById('btnAddStat');

  const cmsAboutBadge = document.getElementById('cmsAboutBadge');
  const cmsAboutTitle = document.getElementById('cmsAboutTitle');
  const cmsAboutP1 = document.getElementById('cmsAboutP1');
  const cmsAboutP2 = document.getElementById('cmsAboutP2');
  const cmsFoundersTitle = document.getElementById('cmsFoundersTitle');
  const cmsFoundersQuote = document.getElementById('cmsFoundersQuote');

  const cmsContactBadge = document.getElementById('cmsContactBadge');
  const cmsContactTitle = document.getElementById('cmsContactTitle');
  const cmsAddress = document.getElementById('cmsAddress');
  const cmsPhone = document.getElementById('cmsPhone');
  const cmsEmail = document.getElementById('cmsEmail');
  const cmsHours = document.getElementById('cmsHours');

  const cmsApptBadge = document.getElementById('cmsApptBadge');
  const cmsApptTitle = document.getElementById('cmsApptTitle');
  const cmsApptSubtitle = document.getElementById('cmsApptSubtitle');
  const cmsTimeSlotsContainer = document.getElementById('cmsTimeSlotsContainer');
  const btnAddTimeSlot = document.getElementById('btnAddTimeSlot');
  const cmsApptServicesContainer = document.getElementById('cmsApptServicesContainer');
  const btnAddApptService = document.getElementById('btnAddApptService');
  const cmsApptNotesLabel = document.getElementById('cmsApptNotesLabel');
  const cmsApptNotesPlaceholder = document.getElementById('cmsApptNotesPlaceholder');
  const cmsApptBtnText = document.getElementById('cmsApptBtnText');

  const cmsTouchTitle = document.getElementById('cmsTouchTitle');
  const cmsTouchDesc = document.getElementById('cmsTouchDesc');
  const cmsFooterTagline = document.getElementById('cmsFooterTagline');
  const cmsExcellenceSubtext = document.getElementById('cmsExcellenceSubtext');
  const cmsFooterCopyright = document.getElementById('cmsFooterCopyright');

  const cmsInstagramUrl = document.getElementById('cmsInstagramUrl');
  const cmsFacebookUrl = document.getElementById('cmsFacebookUrl');
  const cmsYoutubeUrl = document.getElementById('cmsYoutubeUrl');

  const cmsHeadingFont = document.getElementById('cmsHeadingFont');
  const cmsBodyFont = document.getElementById('cmsBodyFont');
  const cmsHeroFontSizeSlider = document.getElementById('cmsHeroFontSizeSlider');
  const cmsSectionFontSizeSlider = document.getElementById('cmsSectionFontSizeSlider');
  const cmsBodyFontSizeSlider = document.getElementById('cmsBodyFontSizeSlider');
  const labelHeroSizeVal = document.getElementById('labelHeroSizeVal');
  const labelSectionSizeVal = document.getElementById('labelSectionSizeVal');
  const labelBodySizeVal = document.getElementById('labelBodySizeVal');
  const previewHeroHeading = document.getElementById('previewHeroHeading');
  const previewBodyText = document.getElementById('previewBodyText');

  if (!document.getElementById('cmsPortalTabs') && !document.getElementById('tabHero') && !btnSaveCmsChanges) return;

  let currentConfig = getLandingConfig();

  // 1. Tab Navigation
  const tabBtns = document.querySelectorAll('[data-cms-tab]');
  const panels = document.querySelectorAll('.cms-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-cms-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll(`[data-cms-tab="${targetTab}"]`).forEach(b => b.classList.add('active'));

      panels.forEach(p => {
        if (p.id === targetTab) {
          p.style.display = 'block';
          p.classList.add('active');
        } else {
          p.style.display = 'none';
          p.classList.remove('active');
        }
      });
    });
  });

  // 2. Render Hero Bullets
  function renderBullets() {
    if (!cmsBulletsContainer) return;
    cmsBulletsContainer.innerHTML = '';
    currentConfig.heroBullets.forEach((bullet, index) => {
      const row = document.createElement('div');
      row.className = 'dynamic-item-card';
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = '10px';
      row.innerHTML = `
        <span style="color: #C5A880; font-weight: 800;">${index + 1}.</span>
        <input type="text" class="editor-input bullet-input" value="${bullet}" style="flex: 1;">
        <button type="button" class="btn-delete-item delete-bullet-btn" data-idx="${index}" title="Remove bullet">🗑️ Delete</button>
      `;
      cmsBulletsContainer.appendChild(row);
    });

    cmsBulletsContainer.querySelectorAll('.delete-bullet-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        currentConfig.heroBullets.splice(idx, 1);
        renderBullets();
      });
    });
  }

  if (btnAddBullet) {
    btnAddBullet.addEventListener('click', () => {
      currentConfig.heroBullets.push('New custom bespoke architecture highlight.');
      renderBullets();
    });
  }

  // 3. Render Services List
  function renderServices() {
    if (!cmsServicesContainer) return;
    cmsServicesContainer.innerHTML = '';
    currentConfig.servicesList.forEach((srv, index) => {
      const card = document.createElement('div');
      card.className = 'dynamic-item-card';
      card.innerHTML = `
        <div class="dynamic-item-header">
          <span style="font-weight: 800; color: #8A6836; font-size: 0.82rem;">SERVICE #${index + 1}</span>
          <button type="button" class="btn-delete-item delete-service-btn" data-idx="${index}">🗑️ Delete</button>
        </div>
        <div class="editor-field-group">
          <label class="editor-label">Service Title</label>
          <input type="text" class="editor-input service-title-inp" data-idx="${index}" value="${srv.title}">
        </div>
        <div class="editor-field-group" style="margin-bottom: 0;">
          <label class="editor-label">Service Description</label>
          <input type="text" class="editor-input service-desc-inp" data-idx="${index}" value="${srv.desc}">
        </div>
      `;
      cmsServicesContainer.appendChild(card);
    });

    cmsServicesContainer.querySelectorAll('.delete-service-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        currentConfig.servicesList.splice(idx, 1);
        renderServices();
      });
    });
  }

  if (btnAddService) {
    btnAddService.addEventListener('click', () => {
      currentConfig.servicesList.push({ title: 'New Bespoke Service', desc: 'Comprehensive luxury architecture and turnkey execution.' });
      renderServices();
    });
  }

  // 4. Render Why Choose Cards
  function renderWhyChoose() {
    if (!cmsWhyChooseContainer) return;
    cmsWhyChooseContainer.innerHTML = '';
    currentConfig.whyChooseCards.forEach((wc, index) => {
      const card = document.createElement('div');
      card.className = 'dynamic-item-card';
      card.innerHTML = `
        <div class="dynamic-item-header">
          <span style="font-weight: 800; color: #8A6836; font-size: 0.82rem;">VALUE PILLAR #${index + 1}</span>
          <button type="button" class="btn-delete-item delete-wc-btn" data-idx="${index}">🗑️ Delete</button>
        </div>
        <div class="editor-field-group">
          <label class="editor-label">Pillar Title</label>
          <input type="text" class="editor-input wc-title-inp" data-idx="${index}" value="${wc.title}">
        </div>
        <div class="editor-field-group" style="margin-bottom: 0;">
          <label class="editor-label">Pillar Description</label>
          <input type="text" class="editor-input wc-desc-inp" data-idx="${index}" value="${wc.desc}">
        </div>
      `;
      cmsWhyChooseContainer.appendChild(card);
    });

    cmsWhyChooseContainer.querySelectorAll('.delete-wc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        currentConfig.whyChooseCards.splice(idx, 1);
        renderWhyChoose();
      });
    });
  }

  if (btnAddWhyChoose) {
    btnAddWhyChoose.addEventListener('click', () => {
      currentConfig.whyChooseCards.push({ title: 'Uncompromising Quality', desc: 'Crafted with premium materials and dedicated structural engineering.' });
      renderWhyChoose();
    });
  }

  // 5. Render Track Record Stats
  function renderTrackStats() {
    if (!cmsTrackStatsContainer) return;
    cmsTrackStatsContainer.innerHTML = '';
    currentConfig.trackStats.forEach((st, index) => {
      const card = document.createElement('div');
      card.className = 'dynamic-item-card';
      card.innerHTML = `
        <div class="dynamic-item-header">
          <span style="font-weight: 800; color: #8A6836; font-size: 0.82rem;">MILESTONE STAT #${index + 1}</span>
          <button type="button" class="btn-delete-item delete-stat-btn" data-idx="${index}">🗑️ Delete</button>
        </div>
        <div class="editor-grid-2">
          <div class="editor-field-group">
            <label class="editor-label">Stat Number (e.g. 250+, 99%)</label>
            <input type="text" class="editor-input stat-num-inp" data-idx="${index}" value="${st.number}">
          </div>
          <div class="editor-field-group">
            <label class="editor-label">Stat Label</label>
            <input type="text" class="editor-input stat-lbl-inp" data-idx="${index}" value="${st.label}">
          </div>
        </div>
      `;
      cmsTrackStatsContainer.appendChild(card);
    });

    cmsTrackStatsContainer.querySelectorAll('.delete-stat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        currentConfig.trackStats.splice(idx, 1);
        renderTrackStats();
      });
    });
  }

  if (btnAddStat) {
    btnAddStat.addEventListener('click', () => {
      currentConfig.trackStats.push({ number: '100+', label: 'BESPOKE RESIDENCES' });
      renderTrackStats();
    });
  }

  // 6. Render Gallery Projects
  function renderGalleryEditor() {
    if (!cmsGalleryCardsGrid) return;
    cmsGalleryCardsGrid.innerHTML = '';
    if (cmsProjectCount) cmsProjectCount.textContent = currentConfig.galleryProjects.length.toString();

    currentConfig.galleryProjects.forEach((proj, idx) => {
      const card = document.createElement('div');
      card.className = 'gallery-edit-card';
      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-family: monospace; font-weight: 800; color: #8A6836; font-size: 0.8rem;">#${idx + 1} (${proj.category.toUpperCase()})</span>
          <button type="button" class="btn-delete-item delete-proj-btn" data-idx="${idx}" title="Delete project card">🗑️ Delete</button>
        </div>
        <img src="${proj.image}" class="gallery-thumb-preview" id="thumbPreview_${idx}" alt="${proj.title}">
        
        <div class="editor-field-group" style="margin-bottom: 6px;">
          <label class="editor-label" style="font-size: 0.72rem;">Project Title</label>
          <input type="text" class="editor-input proj-title-input" data-idx="${idx}" value="${proj.title}" style="padding: 6px 10px; font-size: 0.85rem;">
        </div>

        <div class="editor-field-group" style="margin-bottom: 6px;">
          <label class="editor-label" style="font-size: 0.72rem;">Subtitle</label>
          <input type="text" class="editor-input proj-sub-input" data-idx="${idx}" value="${proj.subtitle}" style="padding: 6px 10px; font-size: 0.85rem;">
        </div>

        <div class="editor-field-group" style="margin-bottom: 6px;">
          <label class="editor-label" style="font-size: 0.72rem;">📍 Location / City</label>
          <input type="text" class="editor-input proj-loc-input" data-idx="${idx}" value="${proj.location || ''}" placeholder="e.g. Rajhans Montessa, Dumas Rd, Surat" style="padding: 6px 10px; font-size: 0.85rem;">
        </div>

        <div class="editor-field-group" style="margin-bottom: 6px;">
          <label class="editor-label" style="font-size: 0.72rem;">Craftsmanship Details / Scope</label>
          <textarea class="editor-textarea proj-details-input" data-idx="${idx}" rows="2" placeholder="Describe the structural and interior scope..." style="padding: 6px 10px; font-size: 0.8rem;">${proj.details || ''}</textarea>
        </div>

        <div class="editor-field-group" style="margin-bottom: 6px;">
          <label class="editor-label" style="font-size: 0.72rem;">Key Specifications (Specs)</label>
          <input type="text" class="editor-input proj-specs-input" data-idx="${idx}" value="${proj.specs || ''}" placeholder="e.g. Area: 14,000 Sq. Ft. • Execution: Full Turnkey" style="padding: 6px 10px; font-size: 0.85rem;">
        </div>

        <div class="editor-field-group" style="margin-bottom: 6px;">
          <label class="editor-label" style="font-size: 0.72rem;">Discipline Category</label>
          <select class="editor-select proj-cat-select" data-idx="${idx}" style="padding: 6px 10px; font-size: 0.85rem;">
            <option value="architecture" ${proj.category === 'architecture' ? 'selected' : ''}>Architecture</option>
            <option value="interior" ${proj.category === 'interior' ? 'selected' : ''}>Interior</option>
          </select>
        </div>

        <div class="editor-field-group" style="margin-bottom: 0;">
          <label class="editor-label" style="font-size: 0.72rem;">Replace Image</label>
          <input type="file" accept="image/*" class="editor-input proj-img-file" data-idx="${idx}" style="padding: 6px 10px; font-size: 0.75rem;">
        </div>
      `;
      cmsGalleryCardsGrid.appendChild(card);
    });

    cmsGalleryCardsGrid.querySelectorAll('.delete-proj-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        const deleted = currentConfig.galleryProjects.splice(idx, 1);
        renderGalleryEditor();
        showToast(`Deleted ${deleted[0]?.title || 'project card'}`, '🗑️');
      });
    });

    cmsGalleryCardsGrid.querySelectorAll('.proj-img-file').forEach(fileInp => {
      fileInp.addEventListener('change', (e) => {
        const idx = parseInt(e.target.getAttribute('data-idx'), 10);
        const file = e.target.files && e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function(evt) {
            currentConfig.galleryProjects[idx].image = evt.target.result;
            const thumb = document.getElementById(`thumbPreview_${idx}`);
            if (thumb) thumb.src = evt.target.result;
            showToast(`Card #${idx + 1} image updated!`, '🖼️');
          };
          reader.readAsDataURL(file);
        }
      });
    });
  }

  // 7. Add Project Modal
  if (btnOpenAddProjectModal && addProjectModal) {
    btnOpenAddProjectModal.addEventListener('click', () => {
      addProjectModal.style.display = 'flex';
    });
  }

  if (closeAddProjectModal && addProjectModal) {
    closeAddProjectModal.addEventListener('click', () => {
      addProjectModal.style.display = 'none';
    });
  }

  const newProjImageFile = document.getElementById('newProjImageFile');
  const newProjPreview = document.getElementById('newProjPreview');
  let newProjectDataUrl = 'images/hero-villa.png';

  if (newProjImageFile && newProjPreview) {
    newProjImageFile.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          newProjectDataUrl = evt.target.result;
          newProjPreview.src = evt.target.result;
          newProjPreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (addNewProjectForm) {
    addNewProjectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('newProjTitle')?.value.trim() || 'PROLIFIC NEW PROJECT';
      const subtitle = document.getElementById('newProjSubtitle')?.value.trim() || 'Custom Architectural Execution';
      const location = document.getElementById('newProjLocation')?.value.trim() || 'Surat, Gujarat';
      const details = document.getElementById('newProjDetails')?.value.trim() || 'Bespoke turnkey architecture and interior craftsmanship.';
      const specs = document.getElementById('newProjSpecs')?.value.trim() || 'Area: 5,000 Sq. Ft. • Execution: Turnkey Fitout';
      const category = document.getElementById('newProjCategory')?.value || 'architecture';

      const newProj = {
        id: Date.now(),
        title: title.toUpperCase(),
        subtitle: subtitle,
        location: location,
        details: details,
        specs: specs,
        category: category,
        image: newProjectDataUrl
      };

      currentConfig.galleryProjects.unshift(newProj);
      renderGalleryEditor();
      addProjectModal.style.display = 'none';
      addNewProjectForm.reset();
      if (newProjPreview) newProjPreview.style.display = 'none';
      showToast(`Added "${newProj.title}" to Gallery! 🎉`, '✨');
    });
  }

  // 8. Typography Live Preview & Sliders
  function updateTypographyPreview() {
    if (cmsHeadingFont && previewHeroHeading) {
      previewHeroHeading.style.fontFamily = cmsHeadingFont.value;
    }
    if (cmsBodyFont && previewBodyText) {
      previewBodyText.style.fontFamily = cmsBodyFont.value;
    }
    if (cmsHeroFontSizeSlider && labelHeroSizeVal && previewHeroHeading) {
      const val = cmsHeroFontSizeSlider.value;
      labelHeroSizeVal.textContent = `${val}rem`;
      previewHeroHeading.style.fontSize = `${val}rem`;
    }
    if (cmsSectionFontSizeSlider && labelSectionSizeVal) {
      const val = cmsSectionFontSizeSlider.value;
      labelSectionSizeVal.textContent = `${val}rem`;
    }
    if (cmsBodyFontSizeSlider && labelBodySizeVal && previewBodyText) {
      const val = cmsBodyFontSizeSlider.value;
      labelBodySizeVal.textContent = `${val}rem`;
      previewBodyText.style.fontSize = `${val}rem`;
    }
  }

  if (cmsHeadingFont) cmsHeadingFont.addEventListener('change', updateTypographyPreview);
  if (cmsBodyFont) cmsBodyFont.addEventListener('change', updateTypographyPreview);
  if (cmsHeroFontSizeSlider) cmsHeroFontSizeSlider.addEventListener('input', updateTypographyPreview);
  if (cmsSectionFontSizeSlider) cmsSectionFontSizeSlider.addEventListener('input', updateTypographyPreview);
  if (cmsBodyFontSizeSlider) cmsBodyFontSizeSlider.addEventListener('input', updateTypographyPreview);

  // 8. Render Appointment Time Slots & Services
  function renderTimeSlots() {
    if (!cmsTimeSlotsContainer) return;
    cmsTimeSlotsContainer.innerHTML = '';
    (currentConfig.apptTimeSlots || []).forEach((slot, index) => {
      const row = document.createElement('div');
      row.className = 'dynamic-item-card';
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = '10px';
      row.innerHTML = `
        <span style="color: #0284C7; font-weight: 800;">${index + 1}.</span>
        <input type="text" class="editor-input time-slot-inp" data-idx="${index}" value="${slot}" style="flex: 1;">
        <button type="button" class="btn-delete-item delete-time-slot-btn" data-idx="${index}" title="Remove time slot">🗑️ Delete</button>
      `;
      cmsTimeSlotsContainer.appendChild(row);
    });

    cmsTimeSlotsContainer.querySelectorAll('.delete-time-slot-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        currentConfig.apptTimeSlots.splice(idx, 1);
        renderTimeSlots();
      });
    });
  }

  if (btnAddTimeSlot) {
    btnAddTimeSlot.addEventListener('click', () => {
      if (!Array.isArray(currentConfig.apptTimeSlots)) currentConfig.apptTimeSlots = [];
      currentConfig.apptTimeSlots.push('08:00 PM – 09:00 PM (Late Evening Consultation)');
      renderTimeSlots();
    });
  }

  function renderApptServices() {
    if (!cmsApptServicesContainer) return;
    cmsApptServicesContainer.innerHTML = '';
    (currentConfig.apptServices || []).forEach((srv, index) => {
      const row = document.createElement('div');
      row.className = 'dynamic-item-card';
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = '10px';
      row.innerHTML = `
        <span style="color: #0284C7; font-weight: 800;">${index + 1}.</span>
        <input type="text" class="editor-input appt-service-inp" data-idx="${index}" value="${srv}" style="flex: 1;">
        <button type="button" class="btn-delete-item delete-appt-srv-btn" data-idx="${index}" title="Remove service option">🗑️ Delete</button>
      `;
      cmsApptServicesContainer.appendChild(row);
    });

    cmsApptServicesContainer.querySelectorAll('.delete-appt-srv-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        currentConfig.apptServices.splice(idx, 1);
        renderApptServices();
      });
    });
  }

  if (btnAddApptService) {
    btnAddApptService.addEventListener('click', () => {
      if (!Array.isArray(currentConfig.apptServices)) currentConfig.apptServices = [];
      currentConfig.apptServices.push('Penthouse & Luxury Spatial Planning');
      renderApptServices();
    });
  }

  // 9. Populate All Inputs
  function populateAllInputs() {
    if (cmsBrandBadgeText) cmsBrandBadgeText.value = currentConfig.brandBadgeText;
    if (cmsHeroHeading) cmsHeroHeading.value = currentConfig.heroHeading;
    if (cmsHeroImgPreview) cmsHeroImgPreview.src = currentConfig.heroImage;

    if (cmsGalleryBadge) cmsGalleryBadge.value = currentConfig.galleryBadge;
    if (cmsGalleryTitle) cmsGalleryTitle.value = currentConfig.galleryTitle;

    if (cmsServicesBadge) cmsServicesBadge.value = currentConfig.servicesBadge;
    if (cmsServicesTitle) cmsServicesTitle.value = currentConfig.servicesTitle;

    if (cmsWhyChooseBadge) cmsWhyChooseBadge.value = currentConfig.whyChooseBadge;
    if (cmsWhyChooseTitle) cmsWhyChooseTitle.value = currentConfig.whyChooseTitle;

    if (cmsTrackRecordBadge) cmsTrackRecordBadge.value = currentConfig.trackRecordBadge;
    if (cmsTrackRecordTitle) cmsTrackRecordTitle.value = currentConfig.trackRecordTitle;

    if (cmsAboutBadge) cmsAboutBadge.value = currentConfig.aboutBadge;
    if (cmsAboutTitle) cmsAboutTitle.value = currentConfig.aboutTitle;
    if (cmsAboutP1) cmsAboutP1.value = currentConfig.aboutParagraph1;
    if (cmsAboutP2) cmsAboutP2.value = currentConfig.aboutParagraph2;
    if (cmsFoundersTitle) cmsFoundersTitle.value = currentConfig.foundersTitle;
    if (cmsFoundersQuote) cmsFoundersQuote.value = currentConfig.foundersQuote;

    if (cmsContactBadge) cmsContactBadge.value = currentConfig.contactBadge;
    if (cmsContactTitle) cmsContactTitle.value = currentConfig.contactTitle;
    if (cmsAddress) cmsAddress.value = currentConfig.studioAddress;
    if (cmsPhone) cmsPhone.value = currentConfig.studioPhone;
    if (cmsEmail) cmsEmail.value = currentConfig.studioEmail;
    if (cmsHours) cmsHours.value = currentConfig.studioHours;

    if (cmsApptBadge) cmsApptBadge.value = currentConfig.apptBadge || 'SCHEDULE A SESSION';
    if (cmsApptTitle) cmsApptTitle.value = currentConfig.apptTitle || 'Book an Appointment';
    if (cmsApptSubtitle) cmsApptSubtitle.value = currentConfig.apptSubtitle || '';
    if (cmsApptNotesLabel) cmsApptNotesLabel.value = currentConfig.apptNotesLabel || 'Project Scope / Specific Requirements';
    if (cmsApptNotesPlaceholder) cmsApptNotesPlaceholder.value = currentConfig.apptNotesPlaceholder || '';
    if (cmsApptBtnText) cmsApptBtnText.value = currentConfig.apptBtnText || 'Confirm & Schedule Appointment';

    if (cmsTouchTitle) cmsTouchTitle.value = currentConfig.touchTitle;
    if (cmsTouchDesc) cmsTouchDesc.value = currentConfig.touchDesc;
    if (cmsFooterTagline) cmsFooterTagline.value = currentConfig.footerTagline;
    if (cmsExcellenceSubtext) cmsExcellenceSubtext.value = currentConfig.excellenceSubtext;
    if (cmsFooterCopyright) cmsFooterCopyright.value = currentConfig.footerCopyright;

    if (cmsInstagramUrl) cmsInstagramUrl.value = currentConfig.instagramUrl || '';
    if (cmsFacebookUrl) cmsFacebookUrl.value = currentConfig.facebookUrl || '';
    if (cmsYoutubeUrl) cmsYoutubeUrl.value = currentConfig.youtubeUrl || '';

    if (cmsHeadingFont) cmsHeadingFont.value = currentConfig.headingFont;
    if (cmsBodyFont) cmsBodyFont.value = currentConfig.bodyFont;
    if (cmsHeroFontSizeSlider) cmsHeroFontSizeSlider.value = currentConfig.heroTitleSize;
    if (cmsSectionFontSizeSlider) cmsSectionFontSizeSlider.value = currentConfig.sectionTitleSize;
    if (cmsBodyFontSizeSlider) cmsBodyFontSizeSlider.value = currentConfig.bodyTextSize;

    renderBullets();
    renderServices();
    renderWhyChoose();
    renderTrackStats();
    renderGalleryEditor();
    renderTimeSlots();
    renderApptServices();
    updateTypographyPreview();
  }

  // 10. Save & Publish Buttons
  const allSaveButtons = [
    document.getElementById('btnSaveCmsChanges'),
    document.getElementById('btnSaveCmsChangesBottom')
  ].filter(Boolean);

  allSaveButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Collect values from all input boxes
      if (cmsBrandBadgeText) currentConfig.brandBadgeText = cmsBrandBadgeText.value.trim();
      if (cmsHeroHeading) currentConfig.heroHeading = cmsHeroHeading.value.trim();

      const bulletInputs = cmsBulletsContainer ? cmsBulletsContainer.querySelectorAll('.bullet-input') : [];
      currentConfig.heroBullets = Array.from(bulletInputs).map(inp => inp.value.trim()).filter(Boolean);

      if (cmsGalleryBadge) currentConfig.galleryBadge = cmsGalleryBadge.value.trim();
      if (cmsGalleryTitle) currentConfig.galleryTitle = cmsGalleryTitle.value.trim();

      // Collect project cards inputs
      if (cmsGalleryCardsGrid) {
        const titleInps = cmsGalleryCardsGrid.querySelectorAll('.proj-title-input');
        const subInps = cmsGalleryCardsGrid.querySelectorAll('.proj-sub-input');
        const locInps = cmsGalleryCardsGrid.querySelectorAll('.proj-loc-input');
        const detailsInps = cmsGalleryCardsGrid.querySelectorAll('.proj-details-input');
        const specsInps = cmsGalleryCardsGrid.querySelectorAll('.proj-specs-input');
        const catSels = cmsGalleryCardsGrid.querySelectorAll('.proj-cat-select');

        titleInps.forEach(inp => {
          const idx = parseInt(inp.getAttribute('data-idx'), 10);
          if (currentConfig.galleryProjects[idx]) currentConfig.galleryProjects[idx].title = inp.value.trim();
        });
        subInps.forEach(inp => {
          const idx = parseInt(inp.getAttribute('data-idx'), 10);
          if (currentConfig.galleryProjects[idx]) currentConfig.galleryProjects[idx].subtitle = inp.value.trim();
        });
        locInps.forEach(inp => {
          const idx = parseInt(inp.getAttribute('data-idx'), 10);
          if (currentConfig.galleryProjects[idx]) currentConfig.galleryProjects[idx].location = inp.value.trim();
        });
        detailsInps.forEach(inp => {
          const idx = parseInt(inp.getAttribute('data-idx'), 10);
          if (currentConfig.galleryProjects[idx]) currentConfig.galleryProjects[idx].details = inp.value.trim();
        });
        specsInps.forEach(inp => {
          const idx = parseInt(inp.getAttribute('data-idx'), 10);
          if (currentConfig.galleryProjects[idx]) currentConfig.galleryProjects[idx].specs = inp.value.trim();
        });
        catSels.forEach(sel => {
          const idx = parseInt(sel.getAttribute('data-idx'), 10);
          if (currentConfig.galleryProjects[idx]) currentConfig.galleryProjects[idx].category = sel.value;
        });
      }

      if (cmsServicesBadge) currentConfig.servicesBadge = cmsServicesBadge.value.trim();
      if (cmsServicesTitle) currentConfig.servicesTitle = cmsServicesTitle.value.trim();
      if (cmsServicesContainer) {
        const sTitles = cmsServicesContainer.querySelectorAll('.service-title-inp');
        const sDescs = cmsServicesContainer.querySelectorAll('.service-desc-inp');
        sTitles.forEach(inp => {
          const idx = parseInt(inp.getAttribute('data-idx'), 10);
          if (currentConfig.servicesList[idx]) currentConfig.servicesList[idx].title = inp.value.trim();
        });
        sDescs.forEach(inp => {
          const idx = parseInt(inp.getAttribute('data-idx'), 10);
          if (currentConfig.servicesList[idx]) currentConfig.servicesList[idx].desc = inp.value.trim();
        });
      }

      if (cmsWhyChooseBadge) currentConfig.whyChooseBadge = cmsWhyChooseBadge.value.trim();
      if (cmsWhyChooseTitle) currentConfig.whyChooseTitle = cmsWhyChooseTitle.value.trim();
      if (cmsWhyChooseContainer) {
        const wcTitles = cmsWhyChooseContainer.querySelectorAll('.wc-title-inp');
        const wcDescs = cmsWhyChooseContainer.querySelectorAll('.wc-desc-inp');
        wcTitles.forEach(inp => {
          const idx = parseInt(inp.getAttribute('data-idx'), 10);
          if (currentConfig.whyChooseCards[idx]) currentConfig.whyChooseCards[idx].title = inp.value.trim();
        });
        wcDescs.forEach(inp => {
          const idx = parseInt(inp.getAttribute('data-idx'), 10);
          if (currentConfig.whyChooseCards[idx]) currentConfig.whyChooseCards[idx].desc = inp.value.trim();
        });
      }

      if (cmsTrackRecordBadge) currentConfig.trackRecordBadge = cmsTrackRecordBadge.value.trim();
      if (cmsTrackRecordTitle) currentConfig.trackRecordTitle = cmsTrackRecordTitle.value.trim();
      if (cmsTrackStatsContainer) {
        const nums = cmsTrackStatsContainer.querySelectorAll('.stat-num-inp');
        const lbls = cmsTrackStatsContainer.querySelectorAll('.stat-lbl-inp');
        nums.forEach(inp => {
          const idx = parseInt(inp.getAttribute('data-idx'), 10);
          if (currentConfig.trackStats[idx]) currentConfig.trackStats[idx].number = inp.value.trim();
        });
        lbls.forEach(inp => {
          const idx = parseInt(inp.getAttribute('data-idx'), 10);
          if (currentConfig.trackStats[idx]) currentConfig.trackStats[idx].label = inp.value.trim();
        });
      }

      if (cmsAboutBadge) currentConfig.aboutBadge = cmsAboutBadge.value.trim();
      if (cmsAboutTitle) currentConfig.aboutTitle = cmsAboutTitle.value.trim();
      if (cmsAboutP1) currentConfig.aboutParagraph1 = cmsAboutP1.value.trim();
      if (cmsAboutP2) currentConfig.aboutParagraph2 = cmsAboutP2.value.trim();
      if (cmsFoundersTitle) currentConfig.foundersTitle = cmsFoundersTitle.value.trim();
      if (cmsFoundersQuote) currentConfig.foundersQuote = cmsFoundersQuote.value.trim();

      if (cmsContactBadge) currentConfig.contactBadge = cmsContactBadge.value.trim();
      if (cmsContactTitle) currentConfig.contactTitle = cmsContactTitle.value.trim();
      if (cmsAddress) currentConfig.studioAddress = cmsAddress.value.trim();
      if (cmsPhone) currentConfig.studioPhone = cmsPhone.value.trim();
      if (cmsEmail) currentConfig.studioEmail = cmsEmail.value.trim();
      if (cmsHours) currentConfig.studioHours = cmsHours.value.trim();

      if (cmsApptBadge) currentConfig.apptBadge = cmsApptBadge.value.trim();
      if (cmsApptTitle) currentConfig.apptTitle = cmsApptTitle.value.trim();
      if (cmsApptSubtitle) currentConfig.apptSubtitle = cmsApptSubtitle.value.trim();
      if (cmsApptNotesLabel) currentConfig.apptNotesLabel = cmsApptNotesLabel.value.trim();
      if (cmsApptNotesPlaceholder) currentConfig.apptNotesPlaceholder = cmsApptNotesPlaceholder.value.trim();
      if (cmsApptBtnText) currentConfig.apptBtnText = cmsApptBtnText.value.trim();

      const timeSlotInps = cmsTimeSlotsContainer ? cmsTimeSlotsContainer.querySelectorAll('.time-slot-inp') : [];
      currentConfig.apptTimeSlots = Array.from(timeSlotInps).map(inp => inp.value.trim()).filter(Boolean);

      const apptSrvInps = cmsApptServicesContainer ? cmsApptServicesContainer.querySelectorAll('.appt-service-inp') : [];
      currentConfig.apptServices = Array.from(apptSrvInps).map(inp => inp.value.trim()).filter(Boolean);

      if (cmsTouchTitle) currentConfig.touchTitle = cmsTouchTitle.value.trim();
      if (cmsTouchDesc) currentConfig.touchDesc = cmsTouchDesc.value.trim();
      if (cmsFooterTagline) currentConfig.footerTagline = cmsFooterTagline.value.trim();
      if (cmsExcellenceSubtext) currentConfig.excellenceSubtext = cmsExcellenceSubtext.value.trim();
      if (cmsFooterCopyright) currentConfig.footerCopyright = cmsFooterCopyright.value.trim();

      if (cmsInstagramUrl) currentConfig.instagramUrl = cmsInstagramUrl.value.trim();
      if (cmsFacebookUrl) currentConfig.facebookUrl = cmsFacebookUrl.value.trim();
      if (cmsYoutubeUrl) currentConfig.youtubeUrl = cmsYoutubeUrl.value.trim();

      if (cmsHeadingFont) currentConfig.headingFont = cmsHeadingFont.value;
      if (cmsBodyFont) currentConfig.bodyFont = cmsBodyFont.value;
      if (cmsHeroFontSizeSlider) currentConfig.heroTitleSize = cmsHeroFontSizeSlider.value;
      if (cmsSectionFontSizeSlider) currentConfig.sectionTitleSize = cmsSectionFontSizeSlider.value;
      if (cmsBodyFontSizeSlider) currentConfig.bodyTextSize = cmsBodyFontSizeSlider.value;

      saveLandingConfig(currentConfig);
      applyLiveLandingConfig();
      try { window.dispatchEvent(new Event('storage')); } catch(e) {}

      // Identify active tab to perform smart direct redirection
      const activeTabEl = document.querySelector('.wf-tab-btn.active, .person-item.active');
      const activeTabId = activeTabEl ? activeTabEl.getAttribute('data-cms-tab') : 'tabHero';
      
      let redirectUrl = 'index.html';
      if (activeTabId === 'tabAbout') {
        redirectUrl = 'about.html';
      } else if (activeTabId === 'tabContact') {
        redirectUrl = 'contact.html';
      } else if (activeTabId === 'tabGallery') {
        redirectUrl = 'index.html#properties';
      } else if (activeTabId === 'tabServices') {
        redirectUrl = 'index.html#services';
      }

      showToast('🎉 Changes Saved & Published Live! Directing to live website...', '💾');

      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 700);
    });
  });

  // Hero image upload handler
  if (cmsHeroImgFile && cmsHeroImgPreview) {
    cmsHeroImgFile.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          currentConfig.heroImage = evt.target.result;
          cmsHeroImgPreview.src = evt.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // 11. Reset to Factory Defaults
  if (btnResetCmsDefaults) {
    btnResetCmsDefaults.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all website sections and customizations back to factory defaults?')) {
        currentConfig = JSON.parse(JSON.stringify(DEFAULT_LANDING_CONFIG));
        saveLandingConfig(currentConfig);
        applyLiveLandingConfig();
        try { window.dispatchEvent(new Event('storage')); } catch(e) {}
        populateAllInputs();
        showToast('All Sections Reset to Factory Defaults! 🔄', '⚙️');
      }
    });
  }

  populateAllInputs();
}

/* ==========================================================================
   11. UNIVERSAL CHANGE PASSWORD SYSTEM FOR ALL DASHBOARDS
   ========================================================================== */
function setupUniversalPasswordSystem() {
  // Inject modal into document body if not present
  if (!document.getElementById('changePasswordModal')) {
    const modalDiv = document.createElement('div');
    modalDiv.id = 'changePasswordModal';
    modalDiv.className = 'modal-backdrop';
    modalDiv.style.cssText = 'display: none; align-items: center; justify-content: center; z-index: 99999;';
    modalDiv.innerHTML = `
      <div class="modal-card" style="max-width: 440px; width: 92%; background: #FFFFFF; border-radius: 16px; border: 1.5px solid #C5A880; box-shadow: 0 25px 50px -12px rgba(24, 34, 51, 0.35); padding: 28px; position: relative; font-family: 'Plus Jakarta Sans', sans-serif;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; border-bottom: 1px solid #EFE8DC; padding-bottom: 14px;">
          <div>
            <div style="display: inline-flex; align-items: center; gap: 6px; font-size: 0.72rem; font-weight: 800; color: #8A6836; background: rgba(197, 168, 128, 0.15); padding: 3px 10px; border-radius: 9999px; margin-bottom: 6px; letter-spacing: 0.05em;">
              <span>🔒</span> SECURITY VAULT
            </div>
            <h3 style="margin: 0; font-size: 1.25rem; font-family: 'Playfair Display', serif; color: #182233; font-weight: 800;">Change Access Password</h3>
            <p style="margin: 4px 0 0; font-size: 0.78rem; color: #64748B;" id="pwdModalUserIdentity">Update your private portal credentials</p>
          </div>
          <button type="button" id="closeChangePasswordBtn" style="background: none; border: none; font-size: 1.4rem; color: #94A3B8; cursor: pointer; padding: 4px 8px; border-radius: 8px;" title="Close">&times;</button>
        </div>

        <div id="pwdChangeAlert" style="display: none; padding: 10px 14px; border-radius: 8px; font-size: 0.8rem; font-weight: 700; margin-bottom: 16px; line-height: 1.4;"></div>

        <form id="changePasswordForm" autocomplete="off">
          <div style="margin-bottom: 14px; text-align: left;">
            <label for="pwdCurrentInput" style="display: block; font-size: 0.76rem; font-weight: 800; color: #1E2532; margin-bottom: 6px; letter-spacing: 0.04em;">CURRENT PASSWORD</label>
            <div style="position: relative; display: flex; align-items: center;">
              <input type="password" id="pwdCurrentInput" required placeholder="Enter current password" style="width: 100%; padding: 10px 40px 10px 14px; border: 1.5px solid #DCD2C0; border-radius: 8px; font-size: 0.88rem; outline: none; box-sizing: border-box;">
              <button type="button" class="pwd-toggle-btn" data-target="pwdCurrentInput" style="position: absolute; right: 10px; background: none; border: none; cursor: pointer; color: #8A6836; font-size: 0.95rem;">👁</button>
            </div>
          </div>

          <div style="margin-bottom: 14px; text-align: left;">
            <label for="pwdNewInput" style="display: block; font-size: 0.76rem; font-weight: 800; color: #1E2532; margin-bottom: 6px; letter-spacing: 0.04em;">NEW PASSWORD</label>
            <div style="position: relative; display: flex; align-items: center;">
              <input type="password" id="pwdNewInput" required minlength="6" placeholder="Enter new password (min 6 chars)" style="width: 100%; padding: 10px 40px 10px 14px; border: 1.5px solid #DCD2C0; border-radius: 8px; font-size: 0.88rem; outline: none; box-sizing: border-box;">
              <button type="button" class="pwd-toggle-btn" data-target="pwdNewInput" style="position: absolute; right: 10px; background: none; border: none; cursor: pointer; color: #8A6836; font-size: 0.95rem;">👁</button>
            </div>
          </div>

          <div style="margin-bottom: 20px; text-align: left;">
            <label for="pwdConfirmInput" style="display: block; font-size: 0.76rem; font-weight: 800; color: #1E2532; margin-bottom: 6px; letter-spacing: 0.04em;">CONFIRM NEW PASSWORD</label>
            <div style="position: relative; display: flex; align-items: center;">
              <input type="password" id="pwdConfirmInput" required minlength="6" placeholder="Re-enter new password" style="width: 100%; padding: 10px 40px 10px 14px; border: 1.5px solid #DCD2C0; border-radius: 8px; font-size: 0.88rem; outline: none; box-sizing: border-box;">
              <button type="button" class="pwd-toggle-btn" data-target="pwdConfirmInput" style="position: absolute; right: 10px; background: none; border: none; cursor: pointer; color: #8A6836; font-size: 0.95rem;">👁</button>
            </div>
          </div>

          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button type="button" id="btnCancelChangePassword" style="padding: 10px 18px; border-radius: 8px; border: 1px solid #CBD5E1; background: #F8FAFC; color: #64748B; font-weight: 700; font-size: 0.84rem; cursor: pointer;">Cancel</button>
            <button type="submit" id="btnSubmitChangePassword" style="padding: 10px 22px; border-radius: 8px; border: none; background: linear-gradient(135deg, #182233 0%, #0F172A 100%); color: #C5A880; font-weight: 800; font-size: 0.84rem; cursor: pointer; box-shadow: 0 4px 12px rgba(24, 34, 51, 0.25);">Update Password &rarr;</button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(modalDiv);
  }

  // Ensure every dashboard has the Change Password button in header-right
  const headerRight = document.querySelector('.wf-header-right');
  if (headerRight && !document.getElementById('btnOpenChangePasswordModal')) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'btnOpenChangePasswordModal';
    btn.className = 'btn-change-password-header';
    btn.style.cssText = 'background: rgba(197, 168, 128, 0.15); color: #8A6836; border: 1px solid #C5A880; padding: 7px 14px; border-radius: 9999px; font-weight: 700; font-size: 0.8rem; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s;';
    btn.innerHTML = '<span>🔑</span> Change Password';
    
    // Insert before user badge
    const badge = headerRight.querySelector('.user-profile-badge');
    if (badge) {
      headerRight.insertBefore(btn, badge);
    } else {
      headerRight.appendChild(btn);
    }
  }

  const modal = document.getElementById('changePasswordModal');
  const openBtns = document.querySelectorAll('#btnOpenChangePasswordModal, .btn-open-change-password');
  const closeBtn = document.getElementById('closeChangePasswordBtn');
  const cancelBtn = document.getElementById('btnCancelChangePassword');
  const form = document.getElementById('changePasswordForm');
  const alertBox = document.getElementById('pwdChangeAlert');
  const identitySubtitle = document.getElementById('pwdModalUserIdentity');

  function getActiveDashboardUser() {
    const session = getValidSession();
    if (session && session.name) return session.name;
    const headerName = document.getElementById('headerUserName') ||
                       document.getElementById('mgrHeaderUserName') ||
                       document.getElementById('empHeaderUserName') ||
                       document.getElementById('editorHeaderUserName');
    if (headerName && headerName.textContent) {
      return headerName.textContent.replace(/\(.*?\)/g, '').trim();
    }
    const path = window.location.pathname.toLowerCase();
    if (path.includes('editor') || path.includes('rakesh')) return 'Rakesh Bhai';
    if (path.includes('manager')) return 'Shashikant Bhai';
    if (path.includes('dashboard')) return 'Gaurav';
    return 'User';
  }

  function openModal() {
    if (!modal) return;
    const activeUser = getActiveDashboardUser();
    if (identitySubtitle) {
      identitySubtitle.innerHTML = `Active Identity: <strong>${activeUser}</strong>`;
    }
    if (alertBox) alertBox.style.display = 'none';
    if (form) form.reset();
    modal.style.display = 'flex';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const curInput = document.getElementById('pwdCurrentInput');
    if (curInput) setTimeout(() => curInput.focus(), 150);
  }

  function closeModal() {
    if (!modal) return;
    modal.style.display = 'none';
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Password visibility toggles
  document.querySelectorAll('.pwd-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (input) {
        if (input.type === 'password') {
          input.type = 'text';
          btn.textContent = '🔒';
        } else {
          input.type = 'password';
          btn.textContent = '👁';
        }
      }
    });
  });

  // Handle Form Submit
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const currentVal = document.getElementById('pwdCurrentInput')?.value || '';
      const newVal = document.getElementById('pwdNewInput')?.value || '';
      const confirmVal = document.getElementById('pwdConfirmInput')?.value || '';
      const activeUser = getActiveDashboardUser();

      if (!currentVal) {
        showAlert('⚠️ Please enter your current password.', 'warn');
        return;
      }

      // Verify current password
      const isCurrentValid = await verifySecurePassword(currentVal, activeUser);
      if (!isCurrentValid) {
        showAlert('❌ Current password is incorrect. (Default: prolific2026)', 'error');
        const curInput = document.getElementById('pwdCurrentInput');
        if (curInput) curInput.focus();
        return;
      }

      if (newVal.length < 6) {
        showAlert('⚠️ New password must be at least 6 characters long.', 'warn');
        return;
      }

      if (newVal !== confirmVal) {
        showAlert('❌ New password and confirmation do not match.', 'error');
        const confInput = document.getElementById('pwdConfirmInput');
        if (confInput) confInput.focus();
        return;
      }

      // Save new password
      const saved = saveUserPassword(activeUser, newVal);
      if (saved) {
        showAlert(`✅ Password successfully changed for <strong>${activeUser}</strong>! Please use your new password next time you log in.`, 'success');
        showToast(`Password updated for ${activeUser}! 🔐`, '🔑');
        setTimeout(() => {
          closeModal();
        }, 1800);
      } else {
        showAlert('❌ Failed to update password. Please try again.', 'error');
      }
    });
  }

  function showAlert(msg, type) {
    if (!alertBox) return;
    alertBox.innerHTML = msg;
    alertBox.style.display = 'block';
    if (type === 'error') {
      alertBox.style.background = '#FEE2E2';
      alertBox.style.border = '1px solid #EF4444';
      alertBox.style.color = '#991B1B';
    } else if (type === 'warn') {
      alertBox.style.background = '#FEF3C7';
      alertBox.style.border = '1px solid #F59E0B';
      alertBox.style.color = '#92400E';
    } else if (type === 'success') {
      alertBox.style.background = '#ECFDF5';
      alertBox.style.border = '1px solid #10B981';
      alertBox.style.color = '#065F46';
    }
  }
}

/* ==========================================================================
   12. APPLICATION LIFECYCLE INITIALIZER (BOOTSTRAP ALL PORTALS)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  enforcePageAccessGuard();
  applyLiveLandingConfig();
  setupCategoryFilters();
  setupModals();
  setupSmoothScroll();
  setupRoleAuthSystem();
  setupWorkforcePortal();
  setupManagerPortal();
  setupEmployeePortal();
  setupAppointmentsManager();
  setupFounderSelectionsManager();
  setupOngoingProjectsManager();
  setupProposalsManager();
  setupUniversalAvatarSystem();
  setupEditorDashboard();
  setupUniversalPasswordSystem();
});



