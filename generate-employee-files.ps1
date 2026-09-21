$employees = @(
  @{ name = 'Komal'; code = 'EMP012'; work = 'Drawing'; city = 'Ahmedabad' },
  @{ name = 'Mansi'; code = 'EMP015'; work = 'Drawing'; city = 'Ahmedabad' },
  @{ name = 'Nikita'; code = 'EMP016'; work = 'Drawing'; city = 'Surat' },
  @{ name = 'Nistha'; code = 'EMP017'; work = 'Drawing'; city = 'Vadodara' },
  @{ name = 'Pooja Jariwala'; code = 'EMP018'; work = 'Designing & Drawing'; city = 'Surat' },
  @{ name = 'Pooja Shah'; code = 'EMP019'; work = 'Drawing'; city = 'Rajkot' },
  @{ name = 'Divy'; code = 'EMP020'; work = 'Designing & Drawing'; city = 'Ahmedabad' },
  @{ name = 'Preet'; code = 'EMP021'; work = 'Drawing'; city = 'Bhavnagar' },
  @{ name = 'Dhruvit'; code = 'EMP022'; work = 'Drawing'; city = 'Jamnagar' },
  @{ name = 'Savan'; code = 'EMP023'; work = 'Designing & Drawing'; city = 'Junagadh' },
  @{ name = 'Hitesh'; code = 'EMP024'; work = 'Drawing'; city = 'Gandhinagar' },
  @{ name = 'Harsh'; code = 'EMP025'; work = 'Architect Project, Drawing & Execution'; city = 'Ahmedabad' },
  @{ name = 'Jenish Soni'; code = 'EMP026'; work = 'Execution'; city = 'Surat' },
  @{ name = 'Subham'; code = 'EMP027'; work = 'Execution'; city = 'Vadodara' },
  @{ name = 'Yogesh'; code = 'EMP028'; work = 'Super Wiser (Site)'; city = 'Ahmedabad' },
  @{ name = 'Jitendra Bhai'; code = 'EMP029'; work = 'Driving'; city = 'Rajkot' },
  @{ name = 'Bharat Bhai'; code = 'EMP030'; work = 'Driving & Follow Up'; city = 'Ahmedabad' }
)

function Get-HtmlContent($emp) {
  $name = $emp.name
  $code = $emp.code
  $work = $emp.work
  $city = $emp.city

  return @"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PROLIFIC | $name — Employee Workspace Portal</title>
  <meta name="description" content="Prolific Enterprise Employee Workspace Portal for $name ($code) — Architectural drafting, task execution, and drawing submissions.">
  <link rel="icon" type="image/png" href="images/logo-dark.png">
  <link rel="stylesheet" href="styles.css">
</head>
<body class="wf-portal-body">

  <!-- EMPLOYEE PORTAL EXECUTIVE HEADER -->
  <header class="wf-header">
    <div class="wf-header-left">
      <a href="index.html" class="wf-logo-link" title="Prolific Home">
        <img src="images/logo-light.png" alt="PROLIFIC" class="wf-header-logo-img">
      </a>
      <div class="wf-brand-info">
        <span class="wf-portal-pill">EMPLOYEE WORKSPACE</span>
        <span class="wf-engine-subtext">Enterprise Workflow &amp; Drafting Engine</span>
      </div>
    </div>

    <div class="wf-header-right">
      <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(16, 185, 129, 0.12); border: 1px solid #10B981; color: #047857; font-size: 0.72rem; font-weight: 800; padding: 4px 10px; border-radius: 6px;">
        <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #10B981;"></span>
        SECURE ACTIVE SESSION
      </div>
      <a href="index.html" class="btn-global-exit">Global Exit Portal</a>
      <div class="user-profile-badge">
        <span id="empHeaderUserName">$name ($code)</span>
      </div>
    </div>
  </header>

  <div class="wf-workspace-layout">

    <!-- LEFT SIDEBAR: PROFILE & NAVIGATION ACCORDION -->
    <aside class="wf-sidebar">
      <div class="sidebar-title">
        <span>Workspace Navigation</span>
      </div>

      <!-- Personnel Category -->
      <div class="personnel-category">
        <div class="cat-header">
          <span>Active Profile (<span id="empSidebarNameCode">$name • $code</span>)</span>
        </div>
        <ul class="personnel-list" style="margin-top: 8px;">
          <li class="person-item" id="navMyProfile" style="cursor: pointer;" title="View Employee Profile Details">
            <span class="avatar-badge red-badge">ID</span>
            <span class="name">My Employee Profile</span>
          </li>
          <li class="person-item active" id="navUrgentTasks" style="cursor: pointer;" title="View Urgent Tasks">
            <span class="avatar-badge red-badge">⚡</span>
            <span class="name">Urgent Action Tasks</span>
          </li>
          <li class="person-item" id="navAssignedTasks" style="cursor: pointer;" title="View Assigned Tasks">
            <span class="avatar-badge blue-badge">📋</span>
            <span class="name">Active Assigned Tasks</span>
          </li>
          <li class="person-item" id="navWorkSubmission" style="cursor: pointer;" title="Submit Work & Upload Drawings">
            <span class="avatar-badge pink-badge">📤</span>
            <span class="name">Work Submission &amp; CAD</span>
          </li>
          <li class="person-item" id="navPendingCheck" style="cursor: pointer;" title="Tasks Awaiting Manager Check">
            <span class="avatar-badge yellow-badge">⏳</span>
            <span class="name">Pending Manager Check</span>
          </li>
        </ul>
      </div>

      <!-- Regional Information Box -->
      <div style="margin-top: 24px; padding: 14px; background: #FAF8F4; border: 1.5px solid #E2D9C8; border-radius: 10px; font-size: 0.78rem; color: #64748B;">
        <div style="font-weight: 800; color: #8A6836; text-transform: uppercase; margin-bottom: 4px;">Assigned Region</div>
        <div style="font-weight: 700; color: #1E2532; font-size: 0.88rem;">📍 $city Regional Hub</div>
        <div style="margin-top: 4px;">Role: <strong>$work</strong></div>
      </div>
    </aside>

    <!-- MAIN WORKSPACE CONTENT AREA -->
    <main class="wf-main-content">

      <!-- ============================================================
           SECTION 1: MY URGENT TASKS (TOP PRIORITY)
           ============================================================ -->
      <section class="wf-card-panel" id="empUrgentSection">
        <div class="wf-card-header" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="avatar-badge red-badge" style="font-size: 0.95rem; font-weight: 900;">⚡</span>
            <h2 style="color: #B91C1C; margin: 0;">MY URGENT TASKS (IMMEDIATE ACTION REQUIRED)</h2>
          </div>
          <span class="luxury-priority-badge urgent">URGENT ACTION</span>
        </div>

        <div id="empUrgentTasksContainer" class="urgent-grid-cards">
          <!-- Populated dynamically via JS with urgent task cards -->
        </div>
      </section>

      <!-- ============================================================
           SECTION 2: PENDING & ACTIVE ASSIGNED TASKS
           ============================================================ -->
      <section class="wf-card-panel" id="empPendingSection">
        <div class="wf-card-header" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="avatar-badge blue-badge" style="font-size: 0.95rem; font-weight: 900;">📋</span>
            <h2 id="empWorkspaceTitle" style="margin: 0;">ACTIVE ASSIGNED PROJECT TASKS</h2>
          </div>
          <span style="font-size: 0.85rem; color: #64748B; font-weight: 600;">
            <span id="empWorkflowSubtext">$name's</span> active workflow. Direct execution mode.
          </span>
        </div>

        <div class="emp-workspace-grid">
          
          <!-- Task Selection Column -->
          <div>
            <div class="task-register-header" style="margin-bottom: 12px;">
              <h3>SELECT ASSIGNED PROJECT TASK</h3>
            </div>

            <div class="bar-group" style="margin-bottom: 16px;">
              <label>ACTIVE TASK LIST</label>
              <select id="empTaskDropdown" class="bar-select" style="width: 100%; padding: 12px; font-size: 0.92rem;">
                <!-- Populated dynamically via JS -->
              </select>
            </div>

            <div class="emp-guidelines-box">
              <div style="color: #1E2532; font-weight: 800; margin-bottom: 6px;">Execution Guidelines:</div>
              <div>1. Select your target project task from the active dropdown.</div>
              <div>2. Click <strong>Work on Task</strong> to focus description editor.</div>
              <div>3. Attach CAD blueprints, site photos, or reports below.</div>
              <div>4. Click <strong>SUBMIT WORK FOR REVIEW</strong> to finalize.</div>
            </div>
          </div>

          <!-- Selected Task Details Card -->
          <div class="emp-sub-card">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
                <h3 id="cardTaskTitle" style="font-family: var(--font-serif); font-size: 1.15rem; font-weight: 800; color: #1E2532; margin: 0;">Drawing for $city</h3>
                <span class="luxury-city-pill">📍 <strong id="cardTaskTarget">$city</strong></span>
              </div>
              
              <div style="font-size: 0.88rem; color: #64748B; margin-bottom: 18px;">
                Supervised by: <strong id="cardAssignedBySub" style="color: #8A6836; font-weight: 800;">Shashikant Bhai (Sub Head)</strong>
              </div>

              <!-- Reorganized 4-Card Grid with High-Contrast Badges -->
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-bottom: 18px;">
                
                <div class="emp-meta-box">
                  <div class="emp-meta-title">Assigned By</div>
                  <div id="cardAssignedBy" class="emp-meta-value">Shashikant Bhai</div>
                </div>

                <div class="emp-meta-box">
                  <div class="emp-meta-title">Task Priority</div>
                  <div id="cardPriority" class="emp-meta-value">Standard</div>
                </div>

                <div class="emp-meta-box">
                  <div class="emp-meta-title">Current Status</div>
                  <div>
                    <span id="cardStatusBadge" class="wf-status-select inprogress" style="display: inline-block; padding: 4px 12px; font-size: 0.78rem;">In Progress</span>
                  </div>
                </div>

                <div class="emp-meta-box">
                  <div class="emp-meta-title">Submission Deadline</div>
                  <div>
                    <span id="cardDeadline" class="luxury-deadline-chip" style="font-size: 0.82rem; padding: 4px 10px;">📅 25 AUG 2026</span>
                  </div>
                </div>

              </div>
            </div>

            <!-- Operating Action Buttons -->
            <div class="emp-btn-group" style="display: flex; justify-content: flex-end; margin-top: 10px; gap: 10px; flex-wrap: wrap;">
              <button class="btn-emp-action btn-emp-download" id="btnDownloadSpec" title="Download CAD Drawing Blueprint Spec">
                <span>📥</span> Download Spec
              </button>
              <button class="btn-emp-action btn-emp-status" id="btnChangeStatus" title="Cycle / Update Task Status">
                <span>🔄</span> Change Status
              </button>
              <button class="btn-emp-action btn-emp-work" id="btnWorkOnTask" title="Open workspace & focus description editor">
                <span>⚡</span> Work on Task
              </button>
            </div>
          </div>

        </div>
      </section>

      <!-- ============================================================
           SECTION 3: DEDICATED WORK SUBMISSION MODULE
           ============================================================ -->
      <section class="wf-card-panel" id="workSubmissionPanel">
        <div class="wf-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="avatar-badge pink-badge">📤</span>
            <h2 style="color: #047857; margin: 0;">AUTHORIZED WORK SUBMISSION &amp; BLUEPRINT UPLOAD ENGINE</h2>
          </div>
        </div>

        <div class="emp-workspace-grid">
          
          <!-- Left Column: Work Description Form -->
          <div class="emp-sub-card">
            <div class="bar-group" style="margin-bottom: 16px;">
              <label>TARGET TASK TO SUBMIT</label>
              <select id="empFormTaskSelector" class="bar-select" style="width: 100%; padding: 11px; font-size: 0.88rem;">
                <!-- Populated via JS -->
              </select>
            </div>

            <div class="bar-group">
              <label>COMPLETED WORK DESCRIPTION &amp; SITE MEASUREMENTS</label>
              <textarea id="empWorkDescInput" rows="7" class="bar-input" style="width: 100%; font-size: 0.9rem; font-family: var(--font-sans); line-height: 1.5; padding: 14px;" placeholder="Enter completed measurements, elevation checks, or site notes..."></textarea>
            </div>
          </div>

          <!-- Right Column: File Upload Section -->
          <div class="emp-sub-card">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                <h3 style="font-family: var(--font-serif); font-size: 1rem; font-weight: 800; color: #1E2532; margin: 0;">File Upload Attachments</h3>
                <span style="font-size: 0.76rem; color: #0284C7; font-weight: 700;">Max 25MB • Whitelist Verified</span>
              </div>

              <!-- Attachments 3 Boxes -->
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px;">
                
                <!-- Attach Photo 1 -->
                <div class="emp-upload-box has-file" id="boxPhoto1" onclick="document.getElementById('inputPhoto1').click();">
                  <input type="file" id="inputPhoto1" style="display: none;" accept="image/*,.pdf,.doc,.docx" onchange="handleFileSelect(this, 'photo1FileName', 'photo1Sub', 'photo1Bar'); document.getElementById('boxPhoto1').classList.add('has-file');">
                  <div style="font-size: 0.76rem; color: #1E2532; margin-bottom: 8px; font-weight: 800;">📁 Attach Photo</div>
                  <div style="width: 100%; height: 6px; background-color: #E2D9C8; border-radius: 3px; margin-bottom: 12px; overflow: hidden;">
                    <div id="photo1Bar" style="width: 100%; height: 100%; background-color: #10B981; transition: width 0.3s;"></div>
                  </div>
                  <div style="font-size: 0.78rem; color: #0284C7; font-weight: 700; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;" id="photo1FileName">Site_Photo.jpg</div>
                  <div style="font-size: 0.7rem; color: #047857; font-weight: 700;" id="photo1Sub">Verified (2.4 MB)</div>
                </div>

                <!-- Attach CAD File -->
                <div class="emp-upload-box has-file" id="boxCAD" onclick="document.getElementById('inputCAD').click();">
                  <input type="file" id="inputCAD" style="display: none;" accept=".dwg,.dxf,.pdf,.zip,.rar" onchange="handleFileSelect(this, 'cadFileName', 'cadSub', 'cadBar'); document.getElementById('boxCAD').classList.add('has-file');">
                  <div style="font-size: 0.76rem; color: #1E2532; margin-bottom: 8px; font-weight: 800;">📐 Attach CAD (.dwg)</div>
                  <div style="width: 100%; height: 6px; background-color: #E2D9C8; border-radius: 3px; margin-bottom: 12px; overflow: hidden;">
                    <div id="cadBar" style="width: 100%; height: 100%; background-color: #3B82F6; transition: width 0.3s;"></div>
                  </div>
                  <div style="font-size: 0.78rem; color: #0284C7; font-weight: 700; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;" id="cadFileName">Drawing_Draft.dwg</div>
                  <div style="font-size: 0.7rem; color: #0284C7; font-weight: 700;" id="cadSub">Verified (18.5 MB)</div>
                </div>

                <!-- Attach Report -->
                <div class="emp-upload-box has-file" id="boxReport" onclick="document.getElementById('inputReport').click();">
                  <input type="file" id="inputReport" style="display: none;" accept=".pdf,.doc,.docx,.jpg,.png" onchange="handleFileSelect(this, 'reportFileName', 'reportSub', 'reportBar'); document.getElementById('boxReport').classList.add('has-file');">
                  <div style="font-size: 0.76rem; color: #1E2532; margin-bottom: 8px; font-weight: 800;">📄 Attach Report (.pdf)</div>
                  <div style="width: 100%; height: 6px; background-color: #E2D9C8; border-radius: 3px; margin-bottom: 12px; overflow: hidden;">
                    <div id="reportBar" style="width: 100%; height: 100%; background-color: #F59E0B; transition: width 0.3s;"></div>
                  </div>
                  <div style="font-size: 0.78rem; color: #0284C7; font-weight: 700; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;" id="reportFileName">Summary_Log.pdf</div>
                  <div style="font-size: 0.7rem; color: #B45309; font-weight: 700;" id="reportSub">Verified (1.2 MB)</div>
                </div>

              </div>
            </div>

            <!-- Submit Button -->
            <div style="display: flex; justify-content: flex-end;">
              <button id="btnSubmitWork" type="button" class="btn-emp-action btn-emp-submit">
                <span>🚀</span> SUBMIT WORK FOR REVIEW
              </button>
            </div>

          </div>

        </div>

      </section>

      <!-- ============================================================
           SECTION 4: TASKS PENDING FOR CHECK / UNDER MANAGER REVIEW
           ============================================================ -->
      <section class="wf-card-panel" id="empPendingCheckSection">
        <div class="wf-card-header" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="avatar-badge yellow-badge">⏳</span>
            <h2>MY SUBMITTED WORK PENDING FOR CHECK &amp; APPROVAL</h2>
          </div>
          <span style="font-size: 0.85rem; color: #64748B;">Live status of work submitted to Sub Head Manager</span>
        </div>

        <div class="table-responsive">
          <table class="wf-table">
            <thead>
              <tr>
                <th style="width: 170px;">SUBMISSION REF &amp; DATE</th>
                <th>PROJECT TASK DETAILS</th>
                <th style="width: 170px;">SUPERVISOR / MANAGER</th>
                <th style="width: 180px;">ATTACHED FILES</th>
                <th style="width: 150px;">CHECK STATUS</th>
              </tr>
            </thead>
            <tbody id="empPendingCheckTable">
              <!-- Dynamically populated via JS -->
            </tbody>
          </table>
        </div>
      </section>

    </main>

  </div>

  <!-- ========== EMPLOYEE PROFILE MODAL ========== -->
  <div class="modal-backdrop" id="empProfileModal">
    <div class="modal-card" style="max-width: 480px;">
      <div class="modal-header">
        <h3 style="color: #1E2532;">EMPLOYEE PROFILE DETAILS</h3>
        <button class="modal-close" id="closeEmpProfileModal">&times;</button>
      </div>
      <div class="modal-body" id="empProfileModalContent">
        <!-- Injected via JS -->
      </div>
    </div>
  </div>

  <!-- ========== SUBMISSION SUCCESS MODAL ========== -->
  <div class="modal-backdrop" id="submissionSuccessModal">
    <div class="modal-card" style="max-width: 540px;">
      <div class="modal-header">
        <h3 style="color: #047857; display: flex; align-items: center; gap: 8px;">
          <span>🎉</span> WORK SUBMISSION CONFIRMED
        </h3>
        <button class="modal-close" id="closeSubmissionModal">&times;</button>
      </div>
      <div class="modal-body">
        <p style="color: #4A5568; font-size: 0.9rem; margin-bottom: 16px;">Your work report and CAD blueprint files have been securely transmitted to the Sub Head Manager and registered in the Prolific Workflow Engine.</p>
        <div id="submissionSuccessDetails">
          <!-- Injected via JS -->
        </div>
        <div style="margin-top: 20px; display: flex; justify-content: flex-end;">
          <button class="btn-action-done" onclick="document.getElementById('submissionSuccessModal').classList.remove('active');" style="padding: 10px 24px; font-size: 0.9rem;">
            Done &amp; Continue
          </button>
        </div>
      </div>
    </div>
  </div>

  <script src="app.js"></script>
</body>
</html>
"@
}

# Generate each employee file
foreach ($emp in $employees) {
  $rawName = $emp.name.ToLower()
  $filename = ($rawName -replace '[^a-z0-9]+', '-') + '.html'
  $content = Get-HtmlContent $emp
  [System.IO.File]::WriteAllText((Join-Path $PSScriptRoot $filename), $content, [System.Text.Encoding]::UTF8)
  Write-Host "Generated: $filename"
}

# Also generate employee-dashboard.html (default to Komal)
$defaultContent = Get-HtmlContent @{ name = 'Komal'; code = 'EMP012'; work = 'Drawing'; city = 'Ahmedabad' }
[System.IO.File]::WriteAllText((Join-Path $PSScriptRoot 'employee-dashboard.html'), $defaultContent, [System.Text.Encoding]::UTF8)
Write-Host "Generated: employee-dashboard.html"
