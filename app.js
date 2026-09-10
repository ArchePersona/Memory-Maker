/**
 * Robin's Memory Companion - High-Accessibility Visual Directory Logic
 * Designed for cognitive reassurance, effortless navigation, speech synthesis, and secure caregiver editing.
 */

(function () {
  'use strict';

  // Default sample contacts tailored with rich, comforting memory cues for Robin
  const DEFAULT_CONTACTS = [
    {
      id: 'c1',
      fullName: 'Sarah Mitchell',
      nickname: 'Calls you "Dad" (Your Oldest Daughter)',
      relationship: 'Daughter',
      category: 'immediate',
      phone: '(555) 234-5678',
      isKeyHelper: true,
      photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80',
      contextNotes: 'Sarah lives nearby in Portland and visits every Sunday morning with fresh blueberry muffins. She has curly brown hair, kind green eyes, and works as an architect.',
      memories: [
        'Walking Sarah down the aisle at Lake Tahoe in 2018',
        'Teaching her how to plant beefsteak tomatoes in the backyard garden',
        'Her joyful laugh whenever you tell the story about the camping raccoon'
      ]
    },
    {
      id: 'c2',
      fullName: 'David Mitchell',
      nickname: 'Calls you "Grandpa" (Sarah\'s Son)',
      relationship: 'Grandson',
      category: 'immediate',
      phone: '(555) 345-6789',
      isKeyHelper: false,
      photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80',
      contextNotes: 'David is 19 and studying biology at university. He is tall with a warm smile and loves playing acoustic guitar for you.',
      memories: [
        'Building a wooden birdhouse together in the garage workshop',
        'Cheering from the bleachers at his high school soccer championship',
        'Sharing strawberry ice cream after Sunday walks'
      ]
    },
    {
      id: 'c3',
      fullName: 'Elena Rostova',
      nickname: 'Your Gentle Daytime Nurse & Friend',
      relationship: 'Lead Caregiver',
      category: 'caregivers',
      phone: '(555) 987-6543',
      isKeyHelper: true,
      photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
      contextNotes: 'Elena is here Monday through Friday from 8 AM to 2 PM. She helps with breakfast, your morning medications, and loves singing classic 60s jazz tunes with you.',
      memories: [
        'Elena\'s delicious herbal chamomile tea recipe',
        'Solving the daily bird-watching crossword puzzle together on the porch'
      ]
    },
    {
      id: 'c4',
      fullName: 'Arthur Pendelton',
      nickname: 'Your Best Friend from Woodworking Club',
      relationship: 'Lifelong Friend',
      category: 'friends',
      phone: '(555) 456-7890',
      isKeyHelper: false,
      photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
      contextNotes: 'You and Arthur have been friends for over 40 years since the community workshop. He loves talking about antique cars and fishing on Clear Lake.',
      memories: [
        'Fishing trips on Clear Lake catching rainbow trout in 1995',
        'Restoring the 1968 Mustang engine together',
        'Meeting every Wednesday for cherry pie at the diner'
      ]
    },
    {
      id: 'c5',
      fullName: 'Margaret "Peggy" Hayes',
      nickname: 'Your Younger Sister',
      relationship: 'Sister',
      category: 'immediate',
      phone: '(555) 678-1234',
      isKeyHelper: true,
      photoUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&auto=format&fit=crop&q=80',
      contextNotes: 'Peggy lives in San Diego and calls you on FaceTime every Tuesday evening. She always asks about your garden and sends postcard photos from her travels.',
      memories: [
        'Growing up together in the big brick house on Elm Street',
        'Baking holiday apple pies with your mother\'s secret cinnamon crust'
      ]
    },
    {
      id: 'c6',
      fullName: 'Dr. Robert Chen',
      nickname: 'Your Friendly Family Doctor',
      relationship: 'Primary Physician',
      category: 'caregivers',
      phone: '(555) 111-2233',
      isKeyHelper: true,
      photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80',
      contextNotes: 'Dr. Chen is gentle, patient, and checks your vitals. His clinic is 5 minutes away on Maple Avenue.',
      memories: [
        'Always checking on your heart health with a cheerful smile'
      ]
    },
    {
      id: 'c7',
      fullName: 'Barnaby',
      nickname: 'Sarah\'s Golden Retriever Dog',
      relationship: 'Loving Pet & Companion',
      category: 'neighbors',
      phone: '',
      isKeyHelper: false,
      photoUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&auto=format&fit=crop&q=80',
      contextNotes: 'Barnaby is a soft, gentle golden retriever who loves resting his chin on your knee while you sit in your favorite armchair.',
      memories: [
        'Gently giving him crunchy peanut butter dog treats',
        'Afternoon naps by the fireplace with Barnaby at your feet'
      ]
    },
    {
      id: 'c8',
      fullName: 'Clara Jenkins',
      nickname: 'Next-Door Neighbor (Blue Cottage)',
      relationship: 'Helpful Neighbor',
      category: 'neighbors',
      phone: '(555) 888-9900',
      isKeyHelper: false,
      photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80',
      contextNotes: 'Clara lives right next door in the light blue house. She brings over freshly cut lavender and helps bring in the mail.',
      memories: [
        'Trading garden zucchini and fresh sunflowers across the white fence'
      ]
    }
  ];

  const PRESET_AVATARS = [
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&auto=format&fit=crop&q=80'
  ];

  // Application State
  let contacts = [];
  let currentFilter = 'all';
  let searchQuery = '';
  let enteredPin = '';
  let currentSelectedContact = null;
  let settings = {
    pin: '1234',
    gridSize: 'grid-size-large',
    textScale: 'text-scale-normal',
    theme: 'theme-warm',
    voiceSpeed: 0.95
  };

  // DOM Elements
  const faceGrid = document.getElementById('faceGrid');
  const gridSummary = document.getElementById('gridSummary');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const categoryPills = document.getElementById('categoryPills');
  const emptyState = document.getElementById('emptyState');
  const resetSearchBtn = document.getElementById('resetSearchBtn');
  const todayBanner = document.getElementById('todayBanner');
  const voiceSearchBtn = document.getElementById('voiceSearchBtn');
  
  // Modals
  const profileModal = document.getElementById('profileModal');
  const closeProfileBtn = document.getElementById('closeProfileBtn');
  const profilePhoto = document.getElementById('profilePhoto');
  const profileName = document.getElementById('profileName');
  const profileNickname = document.getElementById('profileNickname');
  const profileRelationship = document.getElementById('profileRelationship');
  const profileCategoryBadge = document.getElementById('profileCategoryBadge');
  const profileContextNotes = document.getElementById('profileContextNotes');
  const profileMemoriesList = document.getElementById('profileMemoriesList');
  const profileCallLink = document.getElementById('profileCallLink');
  const profileCallName = document.getElementById('profileCallName');
  const listenNameBtn = document.getElementById('listenNameBtn');
  const profileReadStoryBtn = document.getElementById('profileReadStoryBtn');
  
  // PIN Modal
  const pinModal = document.getElementById('pinModal');
  const caregiverLockBtn = document.getElementById('caregiverLockBtn');
  const closePinBtn = document.getElementById('closePinBtn');
  const pinDots = document.getElementById('pinDots');
  
  // Caregiver Manager Modal
  const caregiverModal = document.getElementById('caregiverModal');
  const closeCaregiverBtn = document.getElementById('closeCaregiverBtn');
  const caregiverTableBody = document.getElementById('caregiverTableBody');
  const profileCountNum = document.getElementById('profileCountNum');
  const contactForm = document.getElementById('contactForm');
  const formContactId = document.getElementById('formContactId');
  const formHeadingTitle = document.getElementById('formHeadingTitle');
  const formFullName = document.getElementById('formFullName');
  const formNickname = document.getElementById('formNickname');
  const formRelationship = document.getElementById('formRelationship');
  const formCategory = document.getElementById('formCategory');
  const formPhone = document.getElementById('formPhone');
  const formPriority = document.getElementById('formPriority');
  const formContextNotes = document.getElementById('formContextNotes');
  const formMemories = document.getElementById('formMemories');
  const formPhotoUrl = document.getElementById('formPhotoUrl');
  const formPhotoPreview = document.getElementById('formPhotoPreview');
  const photoFileInput = document.getElementById('photoFileInput');
  const cancelFormBtn = document.getElementById('cancelFormBtn');
  const addNewFromListBtn = document.getElementById('addNewFromListBtn');
  const presetAvatarChips = document.getElementById('presetAvatarChips');
  
  // Settings Elements
  const settingGridSize = document.getElementById('settingGridSize');
  const settingTextScale = document.getElementById('settingTextScale');
  const settingTheme = document.getElementById('settingTheme');
  const settingVoiceSpeed = document.getElementById('settingVoiceSpeed');
  const newCaregiverPin = document.getElementById('newCaregiverPin');
  const saveNewPinBtn = document.getElementById('saveNewPinBtn');
  const exportDataBtn = document.getElementById('exportDataBtn');
  const importDataFileInput = document.getElementById('importDataFileInput');
  const resetDefaultsBtn = document.getElementById('resetDefaultsBtn');
  
  // Bottom Navigation Buttons
  const homeBottomBtn = document.getElementById('homeBottomBtn');
  const readDailyWisdomBtn = document.getElementById('readDailyWisdomBtn');
  const emergencyInfoBtn = document.getElementById('emergencyInfoBtn');
  const emergencyModal = document.getElementById('emergencyModal');
  const closeEmergencyBtn = document.getElementById('closeEmergencyBtn');
  const keyHelpersList = document.getElementById('keyHelpersList');
  const toastNotification = document.getElementById('toastNotification');

  // -------------------------------------------------------------------------
  // Initialization & LocalStorage Management
  // -------------------------------------------------------------------------
  function init() {
    loadSettings();
    loadContacts();
    applySettings();
    renderDateBanner();
    renderPresetAvatars();
    renderFaceGrid();
    setupEventListeners();
  }

  function loadSettings() {
    try {
      const saved = localStorage.getItem('robins_companion_settings');
      if (saved) {
        settings = Object.assign(settings, JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not load settings from localStorage', e);
    }
  }

  function saveSettings() {
    try {
      localStorage.setItem('robins_companion_settings', JSON.stringify(settings));
    } catch (e) {
      console.warn('Could not save settings', e);
    }
  }

  function loadContacts() {
    try {
      const saved = localStorage.getItem('robins_companion_contacts');
      if (saved) {
        contacts = JSON.parse(saved);
      } else {
        contacts = [...DEFAULT_CONTACTS];
        saveContacts();
      }
    } catch (e) {
      console.warn('Could not parse contacts from localStorage', e);
      contacts = [...DEFAULT_CONTACTS];
    }
  }

  function saveContacts() {
    try {
      localStorage.setItem('robins_companion_contacts', JSON.stringify(contacts));
    } catch (e) {
      console.warn('Could not save contacts', e);
    }
  }

  function applySettings() {
    // Theme
    document.body.className = `${settings.theme} ${settings.textScale} ${settings.gridSize}`;
    // Inputs reflection in settings tab
    settingGridSize.value = settings.gridSize;
    settingTextScale.value = settings.textScale;
    settingTheme.value = settings.theme;
    settingVoiceSpeed.value = settings.voiceSpeed.toString();
  }

  function renderDateBanner() {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const dateStr = new Date().toLocaleDateString(undefined, options);
    todayBanner.textContent = `Today is ${dateStr}. You are home, safe, and loved.`;
  }

  function renderPresetAvatars() {
    presetAvatarChips.innerHTML = '';
    PRESET_AVATARS.forEach((url) => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = 'Preset avatar choice';
      img.className = 'preset-chip-img';
      img.addEventListener('click', () => {
        formPhotoUrl.value = url;
        formPhotoPreview.src = url;
      });
      presetAvatarChips.appendChild(img);
    });
  }

  // -------------------------------------------------------------------------
  // Face Grid Rendering & Filtering
  // -------------------------------------------------------------------------
  function getFilteredContacts() {
    return contacts.filter(contact => {
      const matchCategory = currentFilter === 'all' || contact.category === currentFilter;
      if (!matchCategory) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inName = contact.fullName.toLowerCase().includes(q);
      const inNick = (contact.nickname || '').toLowerCase().includes(q);
      const inRel = contact.relationship.toLowerCase().includes(q);
      const inNotes = (contact.contextNotes || '').toLowerCase().includes(q);
      return inName || inNick || inRel || inNotes;
    });
  }

  function renderFaceGrid() {
    const filtered = getFilteredContacts();
    faceGrid.innerHTML = '';

    if (filtered.length === 0) {
      faceGrid.style.display = 'none';
      emptyState.style.display = 'block';
      gridSummary.textContent = 'No matching loved ones found';
      return;
    }

    faceGrid.style.display = 'grid';
    emptyState.style.display = 'none';

    const categoryLabels = {
      all: 'all loved ones',
      immediate: 'immediate family members',
      extended: 'extended family',
      friends: 'cherished friends',
      caregivers: 'caregivers and doctors',
      neighbors: 'neighbors and companion pets'
    };

    gridSummary.textContent = `Showing ${filtered.length} ${categoryLabels[currentFilter] || 'loved ones'}`;

    filtered.forEach(person => {
      const card = document.createElement('article');
      card.className = 'face-card';
      card.setAttribute('role', 'listitem');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `${person.fullName}, ${person.relationship}. Tap to view details and memories.`);

      const photoWrapper = document.createElement('div');
      photoWrapper.className = 'card-photo-wrapper';

      const img = document.createElement('img');
      img.src = person.photoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300';
      img.alt = `Photo of ${person.fullName}`;
      img.className = 'card-photo';
      img.loading = 'lazy';

      const categoryBadge = document.createElement('span');
      categoryBadge.className = 'card-category-badge';
      categoryBadge.textContent = getCategoryDisplay(person.category);

      photoWrapper.appendChild(img);
      photoWrapper.appendChild(categoryBadge);

      const infoDiv = document.createElement('div');
      infoDiv.className = 'card-info';

      const nameH2 = document.createElement('h2');
      nameH2.className = 'card-name';
      nameH2.textContent = person.fullName;

      const relSpan = document.createElement('span');
      relSpan.className = 'card-relationship';
      relSpan.textContent = person.relationship;

      infoDiv.appendChild(nameH2);
      infoDiv.appendChild(relSpan);

      if (person.nickname) {
        const nickP = document.createElement('p');
        nickP.className = 'card-nickname';
        nickP.textContent = person.nickname;
        infoDiv.appendChild(nickP);
      }

      if (person.contextNotes) {
        const cueP = document.createElement('p');
        cueP.className = 'card-cue-snippet';
        cueP.textContent = person.contextNotes;
        infoDiv.appendChild(cueP);
      }

      const tapCue = document.createElement('div');
      tapCue.className = 'card-tap-cue';
      tapCue.innerHTML = '<span>Tap to view memories</span> ➔';

      card.appendChild(photoWrapper);
      card.appendChild(infoDiv);
      card.appendChild(tapCue);

      // Interaction handlers
      card.addEventListener('click', () => openProfile(person));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProfile(person);
        }
      });

      faceGrid.appendChild(card);
    });
  }

  function getCategoryDisplay(catKey) {
    switch (catKey) {
      case 'immediate': return '🏡 Immediate';
      case 'extended': return '🌳 Extended';
      case 'friends': return '🤝 Friend';
      case 'caregivers': return '🩺 Caregiver';
      case 'neighbors': return '🌻 Neighbor';
      default: return 'Loved One';
    }
  }

  // -------------------------------------------------------------------------
  // Profile Detail Fullscreen Modal
  // -------------------------------------------------------------------------
  function openProfile(person) {
    currentSelectedContact = person;
    profilePhoto.src = person.photoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600';
    profilePhoto.alt = `Photo of ${person.fullName}`;
    profileName.textContent = person.fullName;
    profileNickname.textContent = person.nickname ? `"${person.nickname}"` : '';
    profileNickname.style.display = person.nickname ? 'block' : 'none';
    profileRelationship.textContent = person.relationship;
    profileCategoryBadge.textContent = getCategoryDisplay(person.category);

    // Context cues
    profileContextNotes.textContent = person.contextNotes || 'This is someone very special who loves you dearly.';

    // Shared Memories
    profileMemoriesList.innerHTML = '';
    if (person.memories && person.memories.length > 0) {
      person.memories.forEach(mem => {
        const li = document.createElement('li');
        li.textContent = mem;
        profileMemoriesList.appendChild(li);
      });
      document.querySelector('.memories-list-section').style.display = 'block';
    } else {
      document.querySelector('.memories-list-section').style.display = 'none';
    }

    // Phone Action
    if (person.phone && person.phone.trim()) {
      profileCallLink.style.display = 'flex';
      profileCallLink.href = `tel:${person.phone.replace(/[^0-9+]/g, '')}`;
      profileCallName.textContent = person.fullName.split(' ')[0];
    } else {
      profileCallLink.style.display = 'none';
    }

    profileModal.classList.add('open');
    profileModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeProfileBtn.focus();

    // Gentle auto audio prompt option
    speakText(`This is ${person.fullName}, your ${person.relationship}.`);
  }

  function closeProfile() {
    profileModal.classList.remove('open');
    profileModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    stopSpeech();
  }

  // -------------------------------------------------------------------------
  // Text-To-Speech (Web Speech API)
  // -------------------------------------------------------------------------
  function speakText(text) {
    if (!('speechSynthesis' in window)) {
      showToast('Speech synthesis not supported on this browser');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = parseFloat(settings.voiceSpeed) || 0.95;
    utterance.pitch = 1.0;
    
    // Try to pick a gentle natural voice if available
    const voices = window.speechSynthesis.getVoices();
    const gentleVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Daniel')));
    if (gentleVoice) {
      utterance.voice = gentleVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  function stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  // -------------------------------------------------------------------------
  // Voice Recognition Search (Web Speech API)
  // -------------------------------------------------------------------------
  function startVoiceSearch() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      showToast('Voice search is not supported in this browser. You can type in the search box.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    showToast('🎙️ Listening... Say a name like "Sarah" or "Doctor"');
    voiceSearchBtn.style.transform = 'scale(1.15)';
    voiceSearchBtn.style.borderColor = 'var(--primary)';

    recognition.start();

    recognition.onresult = function (event) {
      const transcript = event.results[0][0].transcript;
      searchInput.value = transcript;
      handleSearchChange(transcript);
      showToast(`Searching for: "${transcript}"`);
    };

    recognition.onerror = function () {
      showToast('Could not hear clearly. Please try again or type.');
    };

    recognition.onend = function () {
      voiceSearchBtn.style.transform = '';
      voiceSearchBtn.style.borderColor = '';
    };
  }

  // -------------------------------------------------------------------------
  // PIN Protection & Caregiver Mode
  // -------------------------------------------------------------------------
  function openPinModal() {
    enteredPin = '';
    updatePinDots();
    pinModal.classList.add('open');
    pinModal.setAttribute('aria-hidden', 'false');
  }

  function closePinModal() {
    pinModal.classList.remove('open');
    pinModal.setAttribute('aria-hidden', 'true');
    enteredPin = '';
  }

  function handlePinInput(val) {
    if (val === 'clear') {
      enteredPin = '';
    } else if (val === 'back') {
      enteredPin = enteredPin.slice(0, -1);
    } else if (enteredPin.length < 4) {
      enteredPin += val;
    }
    updatePinDots();

    if (enteredPin.length === 4) {
      setTimeout(() => {
        if (enteredPin === settings.pin) {
          closePinModal();
          openCaregiverModal();
          showToast('🔓 Caregiver Mode Unlocked');
        } else {
          showToast('❌ Incorrect PIN. Please try again.');
          enteredPin = '';
          updatePinDots();
        }
      }, 200);
    }
  }

  function updatePinDots() {
    const dots = pinDots.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      if (index < enteredPin.length) {
        dot.classList.add('filled');
      } else {
        dot.classList.remove('filled');
      }
    });
  }

  function openCaregiverModal() {
    renderCaregiverTable();
    caregiverModal.classList.add('open');
    caregiverModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    switchCaregiverTab('contactsTab');
  }

  function closeCaregiverModal() {
    caregiverModal.classList.remove('open');
    caregiverModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    renderFaceGrid();
  }

  function switchCaregiverTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    document.querySelectorAll('.caregiver-tab-content').forEach(content => {
      content.classList.toggle('active', content.id === tabId);
    });
  }

  function renderCaregiverTable() {
    profileCountNum.textContent = contacts.length.toString();
    caregiverTableBody.innerHTML = '';

    contacts.forEach(contact => {
      const tr = document.createElement('tr');

      const tdPhoto = document.createElement('td');
      const img = document.createElement('img');
      img.src = contact.photoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100';
      img.alt = contact.fullName;
      img.className = 'table-avatar';
      tdPhoto.appendChild(img);

      const tdName = document.createElement('td');
      tdName.innerHTML = `<strong>${escapeHtml(contact.fullName)}</strong><br><small style="color:var(--text-muted);">${escapeHtml(contact.nickname || '')}</small>`;

      const tdRel = document.createElement('td');
      tdRel.textContent = contact.relationship;

      const tdCat = document.createElement('td');
      tdCat.textContent = getCategoryDisplay(contact.category);

      const tdPhone = document.createElement('td');
      tdPhone.textContent = contact.phone || '—';

      const tdActions = document.createElement('td');
      tdActions.className = 'table-actions';

      const editBtn = document.createElement('button');
      editBtn.className = 'btn-sm edit';
      editBtn.textContent = '✏️ Edit';
      editBtn.addEventListener('click', () => populateFormForEdit(contact));

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn-sm delete';
      deleteBtn.textContent = '🗑️ Delete';
      deleteBtn.addEventListener('click', () => confirmDeleteContact(contact.id));

      tdActions.appendChild(editBtn);
      tdActions.appendChild(deleteBtn);

      tr.appendChild(tdPhoto);
      tr.appendChild(tdName);
      tr.appendChild(tdRel);
      tr.appendChild(tdCat);
      tr.appendChild(tdPhone);
      tr.appendChild(tdActions);

      caregiverTableBody.appendChild(tr);
    });
  }

  function populateFormForEdit(contact) {
    formContactId.value = contact.id;
    formHeadingTitle.textContent = `Edit Profile: ${contact.fullName}`;
    formFullName.value = contact.fullName;
    formNickname.value = contact.nickname || '';
    formRelationship.value = contact.relationship;
    formCategory.value = contact.category;
    formPhone.value = contact.phone || '';
    formPriority.value = contact.isKeyHelper ? 'true' : 'false';
    formContextNotes.value = contact.contextNotes || '';
    formMemories.value = (contact.memories || []).join('\n');
    formPhotoUrl.value = contact.photoUrl || '';
    formPhotoPreview.src = contact.photoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300';
    
    switchCaregiverTab('addContactTab');
  }

  function resetContactForm() {
    formContactId.value = '';
    formHeadingTitle.textContent = 'Add New Loved One';
    contactForm.reset();
    formPhotoPreview.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300';
  }

  function confirmDeleteContact(id) {
    const target = contacts.find(c => c.id === id);
    if (!target) return;
    if (window.confirm(`Are you sure you want to remove ${target.fullName} from Robin's memory directory?`)) {
      contacts = contacts.filter(c => c.id !== id);
      saveContacts();
      renderCaregiverTable();
      renderFaceGrid();
      showToast(`Removed ${target.fullName}`);
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const id = formContactId.value || 'c_' + Date.now();
    const isNew = !formContactId.value;
    
    const memoriesArr = formMemories.value
      .split('\n')
      .map(m => m.trim())
      .filter(m => m.length > 0);

    const photo = formPhotoUrl.value.trim() || formPhotoPreview.src;

    const contactData = {
      id: id,
      fullName: formFullName.value.trim(),
      nickname: formNickname.value.trim(),
      relationship: formRelationship.value.trim(),
      category: formCategory.value,
      phone: formPhone.value.trim(),
      isKeyHelper: formPriority.value === 'true',
      photoUrl: photo,
      contextNotes: formContextNotes.value.trim(),
      memories: memoriesArr
    };

    if (isNew) {
      contacts.unshift(contactData);
      showToast(`Added ${contactData.fullName} to loved ones!`);
    } else {
      const idx = contacts.findIndex(c => c.id === id);
      if (idx !== -1) {
        contacts[idx] = contactData;
      }
      showToast(`Updated ${contactData.fullName}`);
    }

    saveContacts();
    renderCaregiverTable();
    resetContactForm();
    switchCaregiverTab('contactsTab');
    renderFaceGrid();
  }

  // -------------------------------------------------------------------------
  // Key Helpers / Emergency Modal
  // -------------------------------------------------------------------------
  function openEmergencyModal() {
    const helpers = contacts.filter(c => c.isKeyHelper || c.category === 'caregivers');
    keyHelpersList.innerHTML = '';

    if (helpers.length === 0) {
      keyHelpersList.innerHTML = '<p>No key helpers marked yet. Add them in caregiver mode.</p>';
    } else {
      helpers.forEach(helper => {
        const card = document.createElement('div');
        card.className = 'key-helper-card';

        const img = document.createElement('img');
        img.src = helper.photoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100';
        img.alt = helper.fullName;
        img.className = 'helper-avatar';

        const info = document.createElement('div');
        info.className = 'helper-info';
        info.innerHTML = `<div class="helper-name">${escapeHtml(helper.fullName)}</div><div class="helper-rel">${escapeHtml(helper.relationship)}</div><small>${escapeHtml(helper.phone || 'Ready to assist')}</small>`;

        card.appendChild(img);
        card.appendChild(info);

        if (helper.phone) {
          const callA = document.createElement('a');
          callA.href = `tel:${helper.phone.replace(/[^0-9+]/g, '')}`;
          callA.className = 'helper-phone-btn';
          callA.innerHTML = '📞 Call';
          card.appendChild(callA);
        }

        keyHelpersList.appendChild(card);
      });
    }

    emergencyModal.classList.add('open');
    emergencyModal.setAttribute('aria-hidden', 'false');
  }

  function closeEmergencyModal() {
    emergencyModal.classList.remove('open');
    emergencyModal.setAttribute('aria-hidden', 'true');
  }

  // -------------------------------------------------------------------------
  // Event Listeners Setup
  // -------------------------------------------------------------------------
  function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
      handleSearchChange(e.target.value);
    });

    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      handleSearchChange('');
      searchInput.focus();
    });

    resetSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentFilter = 'all';
      updateActiveCategoryPill();
      handleSearchChange('');
    });

    // Category Pills
    categoryPills.addEventListener('click', (e) => {
      const pill = e.target.closest('.category-pill');
      if (pill) {
        currentFilter = pill.dataset.category;
        updateActiveCategoryPill();
        renderFaceGrid();
      }
    });

    // Voice Search Button
    voiceSearchBtn.addEventListener('click', startVoiceSearch);

    // Profile Modal Events
    closeProfileBtn.addEventListener('click', closeProfile);
    profileModal.addEventListener('click', (e) => {
      if (e.target === profileModal) closeProfile();
    });

    listenNameBtn.addEventListener('click', () => {
      if (currentSelectedContact) {
        speakText(`${currentSelectedContact.fullName}. ${currentSelectedContact.relationship}. ${currentSelectedContact.nickname || ''}`);
      }
    });

    profileReadStoryBtn.addEventListener('click', () => {
      if (currentSelectedContact) {
        const mems = (currentSelectedContact.memories || []).join('. ');
        const story = `${currentSelectedContact.fullName} is your ${currentSelectedContact.relationship}. ${currentSelectedContact.contextNotes || ''} Here are some wonderful memories: ${mems}`;
        speakText(story);
      }
    });

    // Caregiver Lock & PIN
    caregiverLockBtn.addEventListener('click', openPinModal);
    closePinBtn.addEventListener('click', closePinModal);
    pinModal.addEventListener('click', (e) => {
      if (e.target === pinModal) closePinModal();
    });

    document.querySelectorAll('.pin-key').forEach(key => {
      key.addEventListener('click', () => {
        handlePinInput(key.dataset.val);
      });
    });

    // Caregiver Modal Events
    closeCaregiverBtn.addEventListener('click', closeCaregiverModal);
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        switchCaregiverTab(btn.dataset.tab);
      });
    });
    addNewFromListBtn.addEventListener('click', () => {
      resetContactForm();
      switchCaregiverTab('addContactTab');
    });
    cancelFormBtn.addEventListener('click', () => {
      resetContactForm();
      switchCaregiverTab('contactsTab');
    });
    contactForm.addEventListener('submit', handleFormSubmit);

    // Photo uploader file
    photoFileInput.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          formPhotoPreview.src = e.target.result;
          formPhotoUrl.value = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });

    formPhotoUrl.addEventListener('input', function () {
      if (this.value.trim()) {
        formPhotoPreview.src = this.value.trim();
      }
    });

    // Settings Changes
    settingGridSize.addEventListener('change', function () {
      settings.gridSize = this.value;
      applySettings();
      saveSettings();
    });

    settingTextScale.addEventListener('change', function () {
      settings.textScale = this.value;
      applySettings();
      saveSettings();
    });

    settingTheme.addEventListener('change', function () {
      settings.theme = this.value;
      applySettings();
      saveSettings();
    });

    settingVoiceSpeed.addEventListener('change', function () {
      settings.voiceSpeed = parseFloat(this.value);
      saveSettings();
      speakText('Voice speed updated.');
    });

    saveNewPinBtn.addEventListener('click', function () {
      const p = newCaregiverPin.value.trim();
      if (/^\d{4}$/.test(p)) {
        settings.pin = p;
        saveSettings();
        newCaregiverPin.value = '';
        showToast('✅ Caregiver PIN successfully changed');
      } else {
        showToast('PIN must be exactly 4 digits');
      }
    });

    // Backup / Restore / Reset
    exportDataBtn.addEventListener('click', exportDataJson);
    importDataFileInput.addEventListener('change', importDataJson);
    resetDefaultsBtn.addEventListener('click', () => {
      if (window.confirm('Reset all profiles back to original default samples? Custom additions will be overwritten.')) {
        contacts = [...DEFAULT_CONTACTS];
        saveContacts();
        renderCaregiverTable();
        renderFaceGrid();
        showToast('Restored sample loved ones');
      }
    });

    // Bottom navigation buttons
    homeBottomBtn.addEventListener('click', () => {
      currentFilter = 'all';
      searchQuery = '';
      searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      updateActiveCategoryPill();
      renderFaceGrid();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    readDailyWisdomBtn.addEventListener('click', () => {
      const comfortMessages = [
        'You are safe at home Robin. Everything is taken care of, and your family loves you dearly.',
        'Take a gentle breath. You are surrounded by people who cherish and support you every single day.',
        'Today is a peaceful day. Look at the friendly faces in your companion to remind you of good memories.'
      ];
      const randomMsg = comfortMessages[Math.floor(Math.random() * comfortMessages.length)];
      showToast('💖 Comfort Reminder');
      speakText(randomMsg);
    });

    emergencyInfoBtn.addEventListener('click', openEmergencyModal);
    closeEmergencyBtn.addEventListener('click', closeEmergencyModal);
    emergencyModal.addEventListener('click', (e) => {
      if (e.target === emergencyModal) closeEmergencyModal();
    });

    // Keyboard ESC listener for all modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (profileModal.classList.contains('open')) closeProfile();
        if (pinModal.classList.contains('open')) closePinModal();
        if (caregiverModal.classList.contains('open')) closeCaregiverModal();
        if (emergencyModal.classList.contains('open')) closeEmergencyModal();
      }
    });
  }

  function handleSearchChange(query) {
    searchQuery = query;
    clearSearchBtn.style.display = query.length > 0 ? 'inline-block' : 'none';
    renderFaceGrid();
  }

  function updateActiveCategoryPill() {
    document.querySelectorAll('.category-pill').forEach(pill => {
      pill.classList.toggle('active', pill.dataset.category === currentFilter);
    });
  }

  // -------------------------------------------------------------------------
  // Backup & Restore
  // -------------------------------------------------------------------------
  function exportDataJson() {
    const payload = {
      version: '1.0',
      timestamp: new Date().toISOString(),
      settings: settings,
      contacts: contacts
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `robins_memory_companion_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('📥 Backup file downloaded');
  }

  function importDataJson(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (evt) {
      try {
        const data = JSON.parse(evt.target.result);
        if (Array.isArray(data.contacts)) {
          contacts = data.contacts;
          saveContacts();
          if (data.settings) {
            settings = Object.assign(settings, data.settings);
            saveSettings();
            applySettings();
          }
          renderCaregiverTable();
          renderFaceGrid();
          showToast('✅ Successfully restored data from backup!');
        } else {
          showToast('Invalid backup file format');
        }
      } catch (err) {
        showToast('Error reading backup JSON file');
      }
    };
    reader.readAsText(file);
  }

  // -------------------------------------------------------------------------
  // Helpers & Toast Feedback
  // -------------------------------------------------------------------------
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  let toastTimeout;
  function showToast(msg) {
    toastNotification.textContent = msg;
    toastNotification.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 3200);
  }

  // Run startup
  document.addEventListener('DOMContentLoaded', init);
})();