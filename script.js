(() => {
  const jobsByCategory = {
    "VLSI": [
      "RTL Design Engineer",
      "Design Verification Engineer",
      "Physical Design Engineer",
      "DFT Engineer"
    ],
    "Embedded": [
      "Embedded Firmware Engineer",
      "RTOS Engineer",
      "Embedded Linux Engineer"
    ],
    "Telecom/RF": [
      "RF Engineer",
      "Wireless Engineer",
      "Network Planning Engineer"
    ],
    "IoT": [
      "IoT Developer",
      "Edge Computing Engineer"
    ],
    "DSP": [
      "DSP Engineer",
      "Signal Processing Engineer"
    ]
  };

  const companiesDB = [
    {
      name: "Qualcomm",
      jobs: ["Design Verification Engineer", "Embedded Firmware Engineer", "Wireless Engineer", "DSP Engineer"],
      requirements: {
        "Design Verification Engineer": ["SystemVerilog", "UVM", "Digital Design", "Scripting", "Assertion Based Verification"],
        "Embedded Firmware Engineer": ["C", "Embedded C", "ARM Cortex", "UART/SPI/I2C", "RTOS", "Debugging"],
        "Wireless Engineer": ["LTE/5G Basics", "OFDM", "MIMO Basics", "MATLAB", "Python"],
        "DSP Engineer": ["DSP Fundamentals", "MATLAB", "Python", "C", "FFT"]
      }
    },
    {
      name: "Texas Instruments",
      jobs: ["RTL Design Engineer", "Embedded Firmware Engineer", "IoT Developer", "Signal Processing Engineer"],
      requirements: {
        "RTL Design Engineer": ["Verilog", "SystemVerilog", "Digital Design", "Timing Analysis", "Scripting"],
        "Embedded Firmware Engineer": ["C", "Embedded C", "Microcontrollers", "UART/SPI/I2C", "RTOS"],
        "IoT Developer": ["C", "Embedded Linux", "MQTT", "Sensors", "Cloud Integration"],
        "Signal Processing Engineer": ["Signals and Systems", "MATLAB", "C", "Python", "Filter Design"]
      }
    },
    {
      name: "Intel",
      jobs: ["RTL Design Engineer", "Physical Design Engineer", "DFT Engineer", "Embedded Linux Engineer"],
      requirements: {
        "RTL Design Engineer": ["Verilog", "SystemVerilog", "Digital Design", "Computer Architecture", "Linting"],
        "Physical Design Engineer": ["STA", "Timing Closure", "Place and Route", "PDN Basics", "TCL"],
        "DFT Engineer": ["Scan", "ATPG", "JTAG", "DFT Architecture", "Fault Models"],
        "Embedded Linux Engineer": ["C", "Embedded Linux", "Device Drivers", "Kernel Basics", "Yocto" ]
      }
    },
    {
      name: "NVIDIA",
      jobs: ["Design Verification Engineer", "RTL Design Engineer", "DSP Engineer", "Embedded Firmware Engineer"],
      requirements: {
        "Design Verification Engineer": ["SystemVerilog", "UVM", "Assertions", "Coverage", "Python"],
        "RTL Design Engineer": ["Verilog", "SystemVerilog", "Digital Design", "Low Power Design", "Git"],
        "DSP Engineer": ["DSP Fundamentals", "C++", "CUDA Basics", "MATLAB", "Signal Processing"],
        "Embedded Firmware Engineer": ["C", "C++", "RTOS", "Hardware Debugging", "I2C/SPI" ]
      }
    },
    {
      name: "AMD",
      jobs: ["RTL Design Engineer", "Design Verification Engineer", "Physical Design Engineer"],
      requirements: {
        "RTL Design Engineer": ["Verilog", "SystemVerilog", "Digital Design", "Microarchitecture", "Scripting"],
        "Design Verification Engineer": ["SystemVerilog", "UVM", "Functional Verification", "Assertions", "Debugging"],
        "Physical Design Engineer": ["STA", "Timing Closure", "Place and Route", "Floorplanning", "TCL" ]
      }
    },
    {
      name: "Bosch",
      jobs: ["Embedded Firmware Engineer", "RTOS Engineer", "IoT Developer", "Edge Computing Engineer"],
      requirements: {
        "Embedded Firmware Engineer": ["C", "Embedded C", "AUTOSAR Basics", "CAN", "UART/SPI/I2C"],
        "RTOS Engineer": ["RTOS", "Task Scheduling", "C", "Interrupts", "Memory Management"],
        "IoT Developer": ["C", "MQTT", "Sensors", "Edge AI Basics", "Cloud Integration"],
        "Edge Computing Engineer": ["Embedded Linux", "Python", "Docker Basics", "Networking", "Security Basics" ]
      }
    },
    {
      name: "Siemens",
      jobs: ["Embedded Linux Engineer", "IoT Developer", "Network Planning Engineer", "Signal Processing Engineer"],
      requirements: {
        "Embedded Linux Engineer": ["C", "Embedded Linux", "Device Drivers", "Yocto", "Git"],
        "IoT Developer": ["MQTT", "Node-RED", "Sensors", "Python", "Cloud Integration"],
        "Network Planning Engineer": ["LTE/5G Basics", "RF Basics", "Link Budget", "Planning Tools", "Data Analysis"],
        "Signal Processing Engineer": ["Signals and Systems", "MATLAB", "Python", "FFT", "Filter Design" ]
      }
    },
    {
      name: "Ericsson",
      jobs: ["Wireless Engineer", "RF Engineer", "Network Planning Engineer"],
      requirements: {
        "Wireless Engineer": ["LTE/5G Basics", "OFDM", "MIMO Basics", "Protocol Stack", "Wireshark"],
        "RF Engineer": ["RF Basics", "S-Parameters", "Antenna Basics", "VNA Basics", "Link Budget"],
        "Network Planning Engineer": ["LTE/5G Basics", "RF Planning", "Coverage Optimization", "Drive Test Basics", "Excel" ]
      }
    },
    {
      name: "Nokia",
      jobs: ["Wireless Engineer", "RF Engineer", "Network Planning Engineer", "DSP Engineer"],
      requirements: {
        "Wireless Engineer": ["LTE/5G Basics", "OFDM", "MIMO Basics", "Call Flow", "Protocol Testing"],
        "RF Engineer": ["RF Basics", "S-Parameters", "Antenna Basics", "Spectrum Analysis", "Link Budget"],
        "Network Planning Engineer": ["RF Planning", "Coverage Optimization", "Propagation Models", "GIS Basics", "Data Analysis"],
        "DSP Engineer": ["DSP Fundamentals", "MATLAB", "Python", "Signal Processing", "Filter Design" ]
      }
    },
    {
      name: "Samsung Semiconductor",
      jobs: ["RTL Design Engineer", "Design Verification Engineer", "Physical Design Engineer", "Embedded Firmware Engineer"],
      requirements: {
        "RTL Design Engineer": ["Verilog", "SystemVerilog", "Digital Design", "Computer Architecture", "Low Power Design"],
        "Design Verification Engineer": ["SystemVerilog", "UVM", "Assertions", "Coverage", "Scripting"],
        "Physical Design Engineer": ["STA", "Timing Closure", "Place and Route", "Floorplanning", "TCL"],
        "Embedded Firmware Engineer": ["C", "Embedded C", "RTOS", "UART/SPI/I2C", "Hardware Debugging" ]
      }
    },
    {
      name: "MediaTek",
      jobs: ["Design Verification Engineer", "Wireless Engineer", "DSP Engineer", "Embedded Firmware Engineer"],
      requirements: {
        "Design Verification Engineer": ["SystemVerilog", "UVM", "Digital Design", "Coverage", "Debugging"],
        "Wireless Engineer": ["LTE/5G Basics", "OFDM", "MIMO Basics", "Protocol Stack", "Python"],
        "DSP Engineer": ["DSP Fundamentals", "MATLAB", "C", "Signal Processing", "FFT"],
        "Embedded Firmware Engineer": ["C", "Embedded C", "RTOS", "UART/SPI/I2C", "Bootloader Basics" ]
      }
    },
    {
      name: "STMicroelectronics",
      jobs: ["Embedded Firmware Engineer", "RTOS Engineer", "IoT Developer"],
      requirements: {
        "Embedded Firmware Engineer": ["C", "Embedded C", "Microcontrollers", "UART/SPI/I2C", "Debugging"],
        "RTOS Engineer": ["RTOS", "Task Scheduling", "Interrupts", "C", "Memory Management"],
        "IoT Developer": ["C", "Embedded Linux", "MQTT", "Sensors", "Cloud Integration" ]
      }
    }
  ];

  const state = {
    currentStep: 1,
    userSkills: [],
    noSkillsSelected: false,
    selectedRole: "",
    selectedCompany: ""
  };

  const stepTitles = {
    1: "Enter Name",
    2: "Select Dream Job",
    3: "Select Dream Company",
    4: "Add Existing Skills",
    5: "Generate Roadmap"
  };

  const el = {
    stepPanels: document.querySelectorAll(".step-panel"),
    stepLabel: document.getElementById("stepLabel"),
    stepTitle: document.getElementById("stepTitle"),
    progressFill: document.getElementById("progressFill"),
    progressBar: document.querySelector(".progress-bar"),
    formMessage: document.getElementById("formMessage"),
    nameInput: document.getElementById("nameInput"),
    jobSelect: document.getElementById("jobSelect"),
    companySelect: document.getElementById("companySelect"),
    companyHint: document.getElementById("companyHint"),
    skillOptionSelect: document.getElementById("skillOptionSelect"),
    addSkillOptionBtn: document.getElementById("addSkillOptionBtn"),
    noSkillsBtn: document.getElementById("noSkillsBtn"),
    skillsChips: document.getElementById("skillsChips"),
    generateBtn: document.getElementById("generateBtn"),
    backBtn: document.getElementById("backBtn"),
    nextBtn: document.getElementById("nextBtn"),
    resetBtn: document.getElementById("resetBtn"),
    summaryName: document.getElementById("summaryName"),
    summaryRole: document.getElementById("summaryRole"),
    summaryCompany: document.getElementById("summaryCompany"),
    results: document.getElementById("results")
  };

  function normalizeSkill(skill) {
    return skill.trim().toLowerCase().replace(/\s+/g, " ");
  }

  function formatSkill(skill) {
    return skill.trim().replace(/\s+/g, " ");
  }

  function populateJobs() {
    el.jobSelect.innerHTML = '<option value="">Select a role</option>';

    Object.entries(jobsByCategory).forEach(([category, roles]) => {
      const group = document.createElement("optgroup");
      group.label = category;
      roles.forEach((role) => {
        const option = document.createElement("option");
        option.value = role;
        option.textContent = role;
        group.appendChild(option);
      });
      el.jobSelect.appendChild(group);
    });
  }

  function getCompaniesForRole(role) {
    if (!role) return [];
    return companiesDB.filter((company) => company.jobs.includes(role));
  }

  function populateCompanies() {
    const role = el.jobSelect.value;
    state.selectedRole = role;

    el.companySelect.innerHTML = '<option value="">Select a company</option>';

    if (!role) {
      el.companySelect.disabled = true;
      el.companyHint.textContent = "Select a job role first.";
      return;
    }

    const matches = getCompaniesForRole(role);
    if (matches.length === 0) {
      el.companySelect.disabled = true;
      el.companyHint.textContent = "No companies available for this role";
      return;
    }

    matches.forEach((company) => {
      const option = document.createElement("option");
      option.value = company.name;
      option.textContent = company.name;
      el.companySelect.appendChild(option);
    });

    el.companySelect.disabled = false;
    el.companyHint.textContent = `${matches.length} company${matches.length > 1 ? "ies" : ""} available for this role.`;
  }

  function getSelectedCompanyObject() {
    return companiesDB.find((company) => company.name === el.companySelect.value);
  }

  function getRoleSkillOptions(role) {
    if (!role) return [];
    const optionsSet = new Set();
    getCompaniesForRole(role).forEach((company) => {
      const requirements = company.requirements[role] || [];
      requirements.forEach((skill) => optionsSet.add(skill));
    });
    return Array.from(optionsSet).sort((a, b) => a.localeCompare(b));
  }

  function populateSkillOptions() {
    const role = el.jobSelect.value;
    const skillOptions = getRoleSkillOptions(role);

    el.skillOptionSelect.innerHTML = '<option value="">Select a suggested skill</option>';
    skillOptions.forEach((skill) => {
      const option = document.createElement("option");
      option.value = skill;
      option.textContent = skill;
      el.skillOptionSelect.appendChild(option);
    });
  }

  function setSkillInputsEnabled(enabled) {
    el.skillOptionSelect.disabled = !enabled;
    el.addSkillOptionBtn.disabled = !enabled;
    el.noSkillsBtn.disabled = !enabled;
  }

  function resetSkillsAndResults() {
    state.userSkills = [];
    state.noSkillsSelected = false;
    renderSkillChips();
    el.skillOptionSelect.value = "";
    updateGenerateButtonState();
    clearResults();
  }

  function addSkillChip(rawSkill) {
    const display = formatSkill(rawSkill);
    const normalized = normalizeSkill(display);

    if (!normalized) return;

    const alreadyExists = state.userSkills.some((item) => normalizeSkill(item) === normalized);
    if (alreadyExists) {
      el.formMessage.textContent = `Skill "${display}" is already added.`;
      return;
    }

    state.noSkillsSelected = false;
    state.userSkills.push(display);
    el.formMessage.textContent = "";
    renderSkillChips();
    updateGenerateButtonState();
  }

  function removeSkillChip(index) {
    state.userSkills.splice(index, 1);
    if (state.userSkills.length === 0) {
      state.noSkillsSelected = false;
    }
    renderSkillChips();
    updateGenerateButtonState();
    clearResults();
  }

  function renderSkillChips() {
    el.skillsChips.innerHTML = "";

    if (state.noSkillsSelected) {
      const noneChip = document.createElement("span");
      noneChip.className = "chip chip-none";
      noneChip.textContent = "None (Starting from scratch)";
      el.skillsChips.appendChild(noneChip);
      return;
    }

    state.userSkills.forEach((skill, index) => {
      const chip = document.createElement("span");
      chip.className = "chip";

      const text = document.createElement("span");
      text.textContent = skill;

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.setAttribute("aria-label", `Remove ${skill}`);
      removeBtn.textContent = "x";
      removeBtn.addEventListener("click", () => removeSkillChip(index));

      chip.append(text, removeBtn);
      el.skillsChips.appendChild(chip);
    });
  }

  function validateStep(step) {
    const nameValue = el.nameInput.value.trim();
    const role = el.jobSelect.value;
    const company = el.companySelect.value;

    if (step === 1 && !nameValue) {
      el.formMessage.textContent = "Please enter your name.";
      return false;
    }

    if (step === 2 && !role) {
      el.formMessage.textContent = "Please select your dream ECE role.";
      return false;
    }

    if (step === 3) {
      if (!role) {
        el.formMessage.textContent = "Please select a role first.";
        return false;
      }
      if (!company) {
        el.formMessage.textContent = "Please select a company.";
        return false;
      }
    }

    el.formMessage.textContent = "";
    return true;
  }

  function updateStepUI() {
    el.stepPanels.forEach((panel) => {
      const panelStep = Number(panel.dataset.step);
      panel.classList.toggle("is-active", panelStep === state.currentStep);
    });

    el.stepLabel.textContent = `Step ${state.currentStep}/5`;
    el.stepTitle.textContent = stepTitles[state.currentStep];
    el.progressFill.style.width = `${(state.currentStep / 5) * 100}%`;
    el.progressBar.setAttribute("aria-valuenow", String(state.currentStep));

    el.backBtn.disabled = state.currentStep === 1;
    el.nextBtn.style.display = state.currentStep === 5 ? "none" : "inline-flex";

    if (state.currentStep === 5) {
      updateSummary();
    }
  }

  function updateSummary() {
    el.summaryName.textContent = el.nameInput.value.trim() || "-";
    el.summaryRole.textContent = el.jobSelect.value || "-";
    el.summaryCompany.textContent = el.companySelect.value || "-";
  }

  function updateGenerateButtonState() {
    const ready = Boolean(el.companySelect.value && el.jobSelect.value);
    el.generateBtn.disabled = !ready;
  }

  function splitMissingSkills(missingSkills) {
    const foundationKeywords = ["digital", "basic", "fundamental", "signals", "rf", "architecture", "c", "verilog", "systemverilog"];
    const toolsKeywords = ["uvm", "matlab", "python", "tcl", "yocto", "wireshark", "docker", "git", "planning tools", "vna", "coverage"];

    const foundation = [];
    const tools = [];
    const leftovers = [];

    missingSkills.forEach((skill) => {
      const normalized = normalizeSkill(skill);
      if (foundationKeywords.some((word) => normalized.includes(word))) {
        foundation.push(skill);
      } else if (toolsKeywords.some((word) => normalized.includes(word))) {
        tools.push(skill);
      } else {
        leftovers.push(skill);
      }
    });

    leftovers.forEach((skill, idx) => {
      if (idx % 2 === 0) foundation.push(skill);
      else tools.push(skill);
    });

    return { foundation, tools };
  }

  function createTimeline(missingSkills, role, companyName) {
    const { foundation, tools } = splitMissingSkills(missingSkills);

    const projects = missingSkills.length
      ? [
          `Build 1 mini project targeting ${role} that applies: ${missingSkills.slice(0, Math.min(3, missingSkills.length)).join(", ")}.`,
          `Build 1 advanced project and document architecture, trade-offs, and test results.`,
          `Push code, notes, and validation results to a portfolio repo.`
        ]
      : [
          `Build one capstone project aligned with ${role}.`,
          `Highlight measurable outcomes and hardware/software decisions.`,
          `Prepare a concise project demo for interviews.`
        ];

    const interview = [
      `Tailor your resume for ${companyName}: map each skill to evidence (project, coursework, internship).`,
      `Practice role-specific interview questions and problem-solving under time constraints.`,
      `Revise fundamentals, communicate trade-offs clearly, and prepare STAR stories.`
    ];

    return [
      {
        phase: "Phase 1: Foundation",
        items: foundation.length ? foundation.map((skill) => `Learn and revise ${skill}.`) : ["Revise core fundamentals for the selected role."]
      },
      {
        phase: "Phase 2: Tools & Hands-on",
        items: tools.length ? tools.map((skill) => `Practice ${skill} with guided labs or exercises.`) : ["Strengthen tool usage with practical assignments."]
      },
      {
        phase: "Phase 3: Projects",
        items: projects
      },
      {
        phase: "Phase 4: Interview & Resume",
        items: interview
      }
    ];
  }

  function listToItems(list) {
    if (!list.length) return "<li>None</li>";
    return list.map((item) => `<li>${item}</li>`).join("");
  }

  function generateRoadmap() {
    const company = getSelectedCompanyObject();
    const role = el.jobSelect.value;
    const companyName = el.companySelect.value;
    const userName = el.nameInput.value.trim();

    if (!company || !role || !companyName) {
      el.formMessage.textContent = "Please complete all previous steps first.";
      return;
    }

    const requiredSkills = company.requirements[role] || [];
    const userSkills = state.userSkills.slice();
    const displayedUserSkills = state.noSkillsSelected ? ["None (Starting from scratch)"] : userSkills;

    const userSet = new Set(userSkills.map((skill) => normalizeSkill(skill)));

    const matchedSkills = requiredSkills.filter((skill) => userSet.has(normalizeSkill(skill)));
    const missingSkills = requiredSkills.filter((skill) => !userSet.has(normalizeSkill(skill)));

    const eligible = missingSkills.length === 0;
    const eligibilityText = eligible
      ? `You are eligible for ${role} at ${companyName} (based on skills listed).`
      : "Not eligible yet - focus on the missing skills below.";

    const timeline = createTimeline(missingSkills, role, companyName);
    const timelineHtml = timeline
      .map(
        (phase) => `
          <article class="timeline-phase">
            <h4>${phase.phase}</h4>
            <ul>${listToItems(phase.items)}</ul>
          </article>
        `
      )
      .join("");

    el.results.innerHTML = `
      <header class="result-header">
        <h2>${userName}'s Skill-Gap Report</h2>
        <p><strong>Role:</strong> ${role} | <strong>Company:</strong> ${companyName}</p>
        <div class="eligibility ${eligible ? "ok" : "nope"}">${eligibilityText}</div>
      </header>

      <section class="grid-cards">
        <article class="info-card">
          <h3>Requirements</h3>
          <ul>${listToItems(requiredSkills)}</ul>
        </article>

        <article class="info-card">
          <h3>Your Skills</h3>
          <ul>${listToItems(displayedUserSkills)}</ul>
        </article>

        <article class="info-card">
          <h3>Matched &#9989;</h3>
          <ul>${listToItems(matchedSkills)}</ul>
        </article>

        <article class="info-card">
          <h3>Missing &#10060;</h3>
          <ul>${listToItems(missingSkills)}</ul>
        </article>
      </section>

      <section class="timeline">
        ${timelineHtml}
      </section>
    `;

    el.results.classList.add("show");
    el.results.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function clearResults() {
    el.results.classList.remove("show");
    el.results.innerHTML = "";
  }

  function resetWizard() {
    state.currentStep = 1;
    state.userSkills = [];
    state.noSkillsSelected = false;
    state.selectedRole = "";
    state.selectedCompany = "";

    el.nameInput.value = "";
    el.jobSelect.value = "";
    el.companySelect.innerHTML = '<option value="">Select a company</option>';
    el.companySelect.disabled = true;
    el.companyHint.textContent = "Select a job role first.";

    el.skillOptionSelect.innerHTML = '<option value="">Select a suggested skill</option>';
    setSkillInputsEnabled(false);
    el.formMessage.textContent = "";

    renderSkillChips();
    updateGenerateButtonState();
    clearResults();
    updateStepUI();
  }

  function initEvents() {
    el.nextBtn.addEventListener("click", () => {
      if (!validateStep(state.currentStep)) return;
      if (state.currentStep < 5) {
        state.currentStep += 1;
      }
      updateStepUI();
    });

    el.backBtn.addEventListener("click", () => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
      el.formMessage.textContent = "";
      updateStepUI();
    });

    el.resetBtn.addEventListener("click", resetWizard);

    el.jobSelect.addEventListener("change", () => {
      populateCompanies();
      populateSkillOptions();

      // Changing job resets company, skills, and results.
      el.companySelect.value = "";
      setSkillInputsEnabled(false);
      resetSkillsAndResults();
      updateGenerateButtonState();
    });

    el.companySelect.addEventListener("change", () => {
      state.selectedCompany = el.companySelect.value;

      // Changing company resets skills and output.
      resetSkillsAndResults();
      setSkillInputsEnabled(Boolean(state.selectedCompany));
      populateSkillOptions();
      updateGenerateButtonState();
    });

    el.addSkillOptionBtn.addEventListener("click", () => {
      if (el.skillOptionSelect.disabled) return;
      addSkillChip(el.skillOptionSelect.value);
      el.skillOptionSelect.value = "";
      clearResults();
    });

    el.noSkillsBtn.addEventListener("click", () => {
      state.userSkills = [];
      state.noSkillsSelected = true;
      el.skillOptionSelect.value = "";
      el.formMessage.textContent = "";
      renderSkillChips();
      updateGenerateButtonState();
      clearResults();
    });

    el.generateBtn.addEventListener("click", generateRoadmap);
  }

  function init() {
    populateJobs();
    populateSkillOptions();
    setSkillInputsEnabled(false);
    el.companyHint.textContent = "Select a job role first.";
    initEvents();
    updateGenerateButtonState();
    updateStepUI();
  }

  init();
})();

