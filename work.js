const projects = {
  web: [
    {
      id: "kisaasi-college",
      title: "Kisaasi College School Website",
      client: "Kisaasi College School",
      year: 2026,
      url: "https://kisaasicollegeschool.com",
      urlLabel: "Visit kisaasicollegeschool.com",
      image: "props/kisaasi.png",
      description:
        "A fully responsive school website for Kisaasi College, featuring an admissions portal, academic events calendar, gallery feed, and staff directory. Built with modern web standards to ensure fast load times and accessibility across all devices.",
      tags: ["School", "Admission"],
    },
    {
      id: "hope",
      title: "Hope Worldwide Uganda website",
      client: "Hope Worldwide Uganda",
      year: 2024,
      url: "https://hopeworldwideuganda.org",
      urlLabel: "Visit hopeworldwideuganda.org",
      image: "props/hope.png",
      description:"A comprehensive platform for Hope Worldwide Uganda featuring application forms, event management, and a donation system, alongside a leaadership board, donation checkout, and an integrated management dashboard.",
           tags: ['NGO', 'Organisation', 'Charity'],
    },
    {
      id: "aleph",
      title: "Aleph Junior School Website",
      client: "Aleph Junior school",
      year: 2023,
      url: "https://alephjuniorschool.com",
      urlLabel: "Visit alephjuniorschool.com",
      image: "props/aleph.png",
      description:
        "An interactive educational platform for Aleph Junior School, featuring a streamlined online admission portal for easy enrollment and a vibrant gallery section to showcase student activities and school events.",
          tags: ["Nursery", "School", "Admission"],
    },
    {
      id: "alephc",
      title: "Aleph Charity Foundation Website",
      client: "Aleph Charity Foundation",
      year: 2023,
      url: "https://alephcharityfoundation.org",
      urlLabel: "Visit alephcharityfoundation.org",
      image: "props/alephc.png",
      description: `A dynamic digital hub for Aleph Charity Foundation featuring comprehensive program listings, a "Get Involved" volunteer portal, and a donation section to support local community development and youth empowerment.`,
      tags: ["NGO", "Foundation", "Charity"],
    },
    {
      id: "tsi",
      title: "Talent Search Initiative Website",
      client: "talent search intiative",
      year: 2023,
      url: "https://talentsearchinitiative.click",
      urlLabel: "Visit talentsearchinitiative.click",
      image: "props/tsi.png",
      description: "A robust digital home for Talent Search Initiative, featuring comprehensive program listings, integrated event management, and a streamlined membership sign-up portal to identify and empower the next generation of leaders."
      ,tags: ["Entertainment", "Talent"],
    },
    
  ],

  graphics: [
    {
      id: "logos",
      title: "Logo Design",
      items: ['logo.jpeg','logo1.jpeg','logo2.jpeg','logo3.jpeg']
    },
    {
      id: "branding",
      title: "Branding",
      items: ['banner.jpeg','branding.jpeg']
    },
    {
      id: "group1",
      title: "Posters #1",
      items: ['poster11.jpeg','poster12.jpeg','poster13.jpeg']
    },
    {
      id: "group2",
      title: "Posters #2",
      items: ['poster21.jpeg','poster22.jpeg','poster23.jpeg']
    },
    {
      id: "group3",
      title: "Posters #3",
      items: ['poster31.jpeg','poster32.jpeg','poster33.jpeg']
    },
    {
      id: "group4",
      title: "Posters #4",
      items: ['poster41.jpeg','poster42.jpeg','poster43.jpeg']
    },
    {
      id: "group5",
      title: "Posters #5",
      items: ['poster51.jpeg','poster52.jpeg','poster53.jpeg']
    },

  ],

  software: [
   {
      id: "inovi",
      title: "Inovi Ecommerce Platform",
      client: "Amanda technologies",
      year: 2023,
      url: "https://inovi.store",
      urlLabel: "Visit www.inovi.store",
      image: "props/inovi.png",
      description: 'A powerful e-commerce SaaS platform featuring automated store creation, professional product listings, and advanced analytics, empowering small businesses to launch and manage high-conversion online stores with seamless inventory control.'
      ,tags: ["Ecommerce", "Saas"]
    },
    {
      id: "tta",
      title: "Travel Time Africa, Digital Workspace",
      client: "TTA",
      year: 2024,
      url: "",
      urlLabel: "",
      image: "props/tta.png",
      description: "A secure management system for employees and operations which enables role based access, financial snapshots, resources sharing, trip and tour logging and location based attendance based logging.",
      tags: ["Management system", "Tours and Travel","Internal Tools"],
    },
    {
      id: "managify",
      title: "Managify",
      client: "Several SMEs",
      year: 2023,
      url: "",
      urlLabel: "",
      image: "props/mangify.png",
      description:
        "A cloud HR platform handling payroll (including NSSF/PAYE calculations), leave management, performance appraisals, and digital contracts for Ugandan SMEs.",
      tags: ["System", "EMS", "Managify"],
    },
    {
      id: "ttai",
      title: "TTA AI trip planner",
      client: "TTA",
      year: 2023,
      url: "",
      urlLabel: "",
      image: "props/ttai.png",
      description: "An AI style trip planner and booking form",
      tags: ["AI", "Tour and Travel", "Firebase", "Africa's Talking"],
    },
  ],
};

// ─── 2. STATE ───────────────────────────────────────────────

let activeCategory = "web";   // current tab
let activeProject  = 0;       // index within the current category list

// ─── 3. HELPERS ─────────────────────────────────────────────

function currentList() {
  return projects[activeCategory];
}

// ─── 4. RENDER PROJECT LIST ─────────────────────────────────

function renderList() {
  const list = currentList();
  const tbody = document.querySelector(".project-list-body");
  if (!tbody) return;

  tbody.innerHTML = "";

  list.forEach((project, i) => {
    
    const tr = document.createElement("tr");
    tr.className =
      "border *:p-2 flex justify-between items-center cursor-pointer transition-colors";
    if (i === activeProject) {
      tr.classList.add("bg-white", "text-sky-600", "font-semibold");
    }

    tr.innerHTML = `
      <td>${project.title.toUpperCase()}</td>
      <td class="aspect-square bg-white flex items-center justify-center h-12 w-12 text-sky-500">
        <i class="text-sky-500 text-2xl px-2 ri-arrow-right-s-fill"></i>
      </td>`;

    tr.addEventListener("click", () => {
      activeProject = i;
      renderList();
      renderDetail();
    });

    tbody.appendChild(tr);
  });
}

// ─── 5. RENDER PROJECT DETAIL ───────────────────────────────
// ─── 11. LIGHTBOX LOGIC ──────────────────────────────────────────

function initLightbox() {
  // Only create the lightbox if it doesn't already exist
  if (document.getElementById('global-lightbox')) return;

  const lb = document.createElement('div');
  lb.id = 'global-lightbox';
  lb.className = 'fixed inset-0 bg-black/95 z-[9999] hidden flex items-center justify-center p-4 md:p-12 opacity-0 transition-opacity duration-300 backdrop-blur-sm';
  lb.innerHTML = `
    <i class="ri-close-line absolute top-4 right-4 md:top-8 md:right-8 text-white text-5xl cursor-pointer hover:text-sky-400 transition-colors z-50" onclick="closeLightbox()"></i>
    <i class="ri-loader-4-line text-5xl text-sky-500 animate-spin absolute z-0" id="lightbox-spinner"></i>
    <img id="lightbox-img" class="max-w-full max-h-full object-contain relative z-10 opacity-0 transition-all duration-300 scale-95 shadow-2xl" src="" 
         onload="this.classList.remove('opacity-0', 'scale-95'); this.classList.add('opacity-100', 'scale-100'); document.getElementById('lightbox-spinner').style.display='none';" />
  `;

  // Close lightbox if the user clicks the dark background outside the image
  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLightbox();
  });

  document.body.appendChild(lb);
}

window.openLightbox = function(src) {
  initLightbox();
  const lb = document.getElementById('global-lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const spinner = document.getElementById('lightbox-spinner');

  // Reset the lightbox state
  lbImg.classList.remove('opacity-100', 'scale-100');
  lbImg.classList.add('opacity-0', 'scale-95');
  spinner.style.display = 'block';

  // Reveal the lightbox container
  lb.classList.remove('hidden');
  
  // A tiny delay is needed to trigger the CSS opacity transition
  setTimeout(() => lb.classList.remove('opacity-0'), 10);
  
  // Set the source to trigger the download/onload event
  lbImg.src = src;
};

window.closeLightbox = function() {
  const lb = document.getElementById('global-lightbox');
  lb.classList.add('opacity-0');
  
  // Wait for the fade-out transition to finish before hiding the element
  setTimeout(() => {
    lb.classList.add('hidden');
    document.getElementById('lightbox-img').src = '';
  }, 300);
};

function renderDetail() {
  const project = currentList()[activeProject];
 // console.log(project)
  if (!project) return;

if (activeCategory.includes('graphics')) {
    let imgsHTML = '';

    for (let i = 0; i < project.items.length; i++) {
      const src = `props/graphix/${project.items[i]}`;
      // Wrap each image in a relative container with a loader icon behind it
      // Added an onclick event to trigger the Lightbox
      imgsHTML += `
        <div class="relative w-full bg-sky-100/50 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer transition-transform md:hover:scale-105" onclick="openLightbox('${src}')">
          <i class="ri-loader-4-line text-4xl text-sky-500 animate-spin absolute z-0"></i>
          <img class="relative z-10 w-full h-full object-cover opacity-0 transition-opacity duration-500" 
               src="${src}" 
               onload="this.classList.remove('opacity-0'); this.classList.add('opacity-100'); this.previousElementSibling.remove()">
        </div>
      `;
    }

    document.getElementById("hb").innerHTML = `
      <i onclick="pv()" id="x" class="ri-close-line md:hidden text-3xl left-full fixed right-3 top-0 z-50"></i>
      <div class="grid mt-12 grid-cols-2 gap-4 h-[80vh] overflow-y-auto pb-20 px-2 md:px-0">
        <p class="text-center text-gray-500 text-sm font-semibold uppercase tracking-widest w-full col-span-2 mb-2">Click an image to expand</p>
        ${imgsHTML}
      </div>
    `;

    if (window.innerWidth < 768 && typeof pv === "function") pv();
    return;
  }
  
// Inside renderDetail()
document.getElementById("hb").innerHTML = `
  <i onclick="pv()" id="x" class="ri-close-line md:hidden text-3xl left-full fixed right-3 top-0"></i>
  <div class="relative w-full md:w-5/6 mx-auto mt-8 md:mt-16 bg-sky-100/50 rounded-lg overflow-hidden flex items-center justify-center min-h-[150px] md:min-h-[250px]">
    <i class="ri-loader-4-line text-4xl text-sky-500 animate-spin absolute z-0"></i>
    <img class="project-detail-img relative z-10 w-full h-full object-cover transition-all duration-300 opacity-0 md:hover:scale-110" />
  </div>
  <h2 class="project-detail-title text-3xl font-bold my-3"></h2>
  <p class="project-detail-desc"></p>
  <a class="project-detail-link text-sky-600 underline mt-4 block" href=""></a>
  <div class="project-detail-tags flex flex-wrap gap-2 mt-4"></div>
`;


  const img = document.querySelector(".project-detail-img");
  const title = document.querySelector(".project-detail-title");
  const desc = document.querySelector(".project-detail-desc");
  const link = document.querySelector(".project-detail-link");
  const tags = document.querySelector(".project-detail-tags");

if (img) {
    // 1. Fade out the old image instantly to reveal the spinner underneath
    img.classList.remove("opacity-100");
    img.classList.add("opacity-0");
    img.parentElement.classList.add('min-h-[150px]');
    
    // 2. Wait for the new image to fully download
    img.onload = () => {
      // 3. Fade the new image back in
      img.parentElement.classList.add('min-h-0');
      img.classList.remove("opacity-0");
      img.classList.add("opacity-100");
    };

    // 4. Trigger the download by changing the source
    img.src = project.image;
  }


  if (title) title.textContent = project.title;
  if (desc)  desc.textContent  = project.description;

  if (link) {
    if (project.url) {
      link.href        = project.url;
      link.textContent = project.urlLabel;
      link.style.display = "block";
    } else {
      link.style.display = "none";
    }
  }

  if (tags) {
    tags.innerHTML = project.tags
      .map(
        (t) =>
          `<span class="bg-sky-100 text-sky-600 text-xs font-semibold px-3 py-1 rounded-full">${t}</span>`
      )
      .join("");
  }

  pv()
}

// ─── 6. RENDER CATEGORY TABS ────────────────────────────────

function renderTabs() {
  const tabMap = {
    WEBSITES: "web",
    GRAPHICS: "graphics",
    "CUSTOM SOFTWARE": "software",
  };

  const tabEls = document.querySelectorAll(".category-tab");

  tabEls.forEach((tab) => {
    const key = tabMap[tab.textContent.trim()];
    if (!key) return;

    // active styling
    if (key === activeCategory) {
      tab.classList.add("bg-white", "text-sky-500", "font-extrabold");
      tab.classList.remove("text-white");
    } else {
      tab.classList.remove("bg-white", "text-sky-500", "font-extrabold");
      tab.classList.add("text-white");
    }

    tab.onclick = () => {
      activeCategory = key;
      activeProject  = 0;
      renderTabs();
      renderList();
      window.innerWidth >= 768 ? renderDetail() : ()=>{};
    };
  });
}

// ─── 7. UP / DOWN ARROW NAVIGATION THROUGH PROJECTS ─────────
//  The existing HTML already wires upBtn / downBtn to showSection().
//  We EXTEND those buttons: when the work panel is the active panel
//  we intercept the click and move through the project list instead.

function isWorkPanelActive() {
  // The work panel is the first .panel (index 0 in the panels NodeList).
  // We detect it by checking the global `current` variable exposed by
  // the existing inline script. If it's not available yet we fall back.
  return typeof current !== "undefined" ? current === 0 : true;
}

function navigateProject(direction) {
  // direction: +1 = next, -1 = previous
  const list = currentList();
  const next = activeProject + direction;

  if (next < 0 || next >= list.length) return false; // boundary reached

  activeProject = next;
  renderList();
  renderDetail();
  return true; // consumed the event
}

// ─── 8. PATCH THE EXISTING UP/DOWN BUTTONS ──────────────────
//  We wait for the DOM then wrap the existing onclick handlers.

function patchArrowButtons() {
  const upBtn   = document.getElementById("upBtn");
  const downBtn = document.getElementById("downBtn");
  if (!upBtn || !downBtn) return;

  const origUp   = upBtn.onclick;
  const origDown = downBtn.onclick;

  upBtn.onclick = (e) => {
    if (isWorkPanelActive()) {
      const consumed = navigateProject(-1);
      if (consumed) return; // don't let showSection fire
    }
    if (origUp) origUp(e);
  };

  downBtn.onclick = (e) => {
    if (isWorkPanelActive()) {
      const consumed = navigateProject(+1);
      if (consumed) return;
    }
    if (origDown) origDown(e);
  };

  // Also patch keyboard arrows
  const origKeydown = window.onkeydown;
  window.addEventListener("keydown", (e) => {
    if (!isWorkPanelActive()) return;
    if (e.key === "ArrowDown") {
      const consumed = navigateProject(+1);
      if (consumed) e.stopImmediatePropagation();
    }
    if (e.key === "ArrowUp") {
      const consumed = navigateProject(-1);
      if (consumed) e.stopImmediatePropagation();
    }
  }, true); // capture phase so we run before the existing listener
}

// ─── 9. BOOTSTRAP ───────────────────────────────────────────

// The inline script in work.html uses DOMContentLoaded implicitly
// (the script is at the bottom of <body>), so by the time work.js
// is evaluated the DOM already exists. We guard with a ready-check.

function init() {
  // Add the class the JS will query so we don't touch the HTML
  patchCategoryTabs();
  patchProjectList();
  patchDetailPanel();

  renderTabs();
  renderList();
  window.innerWidth >= 768 ? renderDetail() : ()=>{};
  patchArrowButtons();
}

// ─── 10. NON-INVASIVE DOM PATCHING ──────────────────────────
//  Rather than editing the HTML we locate existing elements and
//  add the query-able classes / structure our rendering needs.

function patchCategoryTabs() {
  // The category <td> elements inside the first <table>
  const tds = document.querySelectorAll(
    "section.panel table:first-of-type td"
  );
  tds.forEach((td) => td.classList.add("category-tab"));
}

function patchProjectList() {
  // The scrollable table already exists. We'll replace its <tbody>
  // (or all its <tr>s) with a container we control.
  // The table is the second <table> inside the panel's left column.
  const tables = document.querySelectorAll("section.panel .overflow-y-scroll table");
  if (!tables.length) return;

  const table = tables[0];
  // Remove all existing static rows
  table.innerHTML = `<tbody class="project-list-body w-full"></tbody>`;
}

function patchDetailPanel() {
  // The right-hand detail column
  const rightCol = document.querySelector("section.panel > div:last-of-type");
  if (!rightCol) return;

  // Locate existing elements and add our query classes
  const img = rightCol.querySelector("img");
  if (img) img.classList.add("project-detail-img");

  const h2 = rightCol.querySelector("h2");
  if (h2) h2.classList.add("project-detail-title");

  const p = rightCol.querySelector("p");
  if (p) p.classList.add("project-detail-desc");

  const a = rightCol.querySelector("a");
  if (a) a.classList.add("project-detail-link");

  // Inject a tags row after the link if it doesn't exist yet
  if (!rightCol.querySelector(".project-detail-tags")) {
    const tagsDiv = document.createElement("div");
    tagsDiv.className = "project-detail-tags flex flex-wrap gap-2 mt-4";
    rightCol.appendChild(tagsDiv);
  }
}

// Run after the inline script has finished (inline script is above us)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}