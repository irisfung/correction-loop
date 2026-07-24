const DOCS = [
  /*
  {
    id: "freight-invoice",
    label: "freight-invoice",
    elId: "doc-freight-invoice",
    pageLabel: "Page 1 / 2",
    defaultPrompt: "This is a freight invoice that has shipment information.",
    mockData: {
      invoice_number:  "ANF-INV-2026-004918",
      invoice_date:    "January 12, 2026",
      due_date:        "February 11, 2026",
      payment_terms:   "Net 30",
      pro_number:      "778345921",
      bill_of_lading:  "FCC-2026-001234",
      pickup_date:     "January 8, 2026",
      delivery_date:   "January 10, 2026",
      service_level:   "LTL \u2013 Standard",
      equipment_type:  "53' Dry Van",
      customer_account:"ACME-44721",
      origin:          "Acme Manufacturing, Inc., 1234 Industrial Parkway, Columbus, OH 43215",
      destination:     "Beta Distribution LLC, 8900 Logistics Way, Dallas, TX 75241",
      total_weight:    "5,200 lbs"
    },
    aliases: {
      invoice_number:  ["invoice_number","invoice_num","invoice_no","invnumber"],
      invoice_date:    ["invoice_date"],
      due_date:        ["due_date","payment_due_date","duedate"],
      payment_terms:   ["payment_terms","terms","paymentterms"],
      pro_number:      ["pro_number","freight_bill_number","pro_freight_bill","pro_freight_bill_number","pro"],
      bill_of_lading:  ["bill_of_lading","bol","bill_of_lading_number","billoflading"],
      pickup_date:     ["pickup_date"],
      delivery_date:   ["delivery_date"],
      service_level:   ["service_level","servicelevel"],
      equipment_type:  ["equipment_type","equipment"],
      customer_account:["customer_account","account_number","customer_account_number"],
      origin:          ["origin","origin_address"],
      destination:     ["destination","destination_address"],
      total_weight:    ["total_weight","weight"]
    }
  },
  */
  {
    id: "sample-msa",
    label: "MSA_001",
    elId: "doc-sample-msa",
    pageLabel: "Page 1 / 27",
    defaultPrompt: "This is an MSA for a contractor.",
    mockData: {
      company_name:    "SandRidge Energy, Inc.",
      contractor_name: "Great White Pressure Pumping LLC",
      effective_date:  "[not specified in template]",
      governing_law:   "State of Oklahoma",
      venue:           "Oklahoma City, Oklahoma",
      termination_notice:     "30 days written notice",
      audit_retention_period: "2 years",
      links:           "Exhibit C"
    },
    aliases: {
      company_name:    ["company_name","company","client_name","operator_name","party","first_party"],
      contractor_name: ["contractor_name","contractor","vendor_name","counterparty","second_party"],
      effective_date:  ["effective_date"],
      governing_law:   ["governing_law","applicable_law"],
      venue:           ["venue","jurisdiction"],
      termination_notice:    ["termination_notice","termination_notice_period","notice_period"],
      audit_retention_period:["audit_retention_period","record_retention_period","audit_period"],
      links:           ["links","referenced_exhibits","exhibit_references"]
    },
    clauses: [
      { clauseId:"scope", clauseType:"Scope", heading:"SCOPE OF AGREEMENT",
        text:"1.1 The Work. It is contemplated that from time to time Contractor will be requested by SandRidge or its present or future affiliated entities to perform certain work and services.",
        jurisdiction:null, links:["Exhibit C"], subclauses:[
          {heading:"1.1 The Work", text:"It is contemplated that from time to time Contractor will be requested by SandRidge or its affiliates to perform certain work and services."},
          {heading:"1.2 Work Orders", text:"A request for Work may be either oral or submitted to Contractor on a purchase order or similar document."},
          {heading:"1.3 Modifications", text:"Should the parties enter into a Work Order especially prepared for a particular job, the terms of this MSA shall prevail over any conflicting term."}
        ]},
      { clauseId:"payment", clauseType:"Payment", heading:"PAYMENT",
        text:"2.1 Compensation. Contractor shall receive the compensation specified in the Work Order which is agreed to by Company and Contractor at the time the Work Order is accepted.",
        jurisdiction:null, links:[], subclauses:[
          {heading:"2.1 Compensation", text:"Contractor shall receive the compensation specified in the Work Order agreed to by Company and Contractor."},
          {heading:"2.2 Invoicing", text:"Invoices shall be submitted in such form and accompanied by such certification and documentation as Company may reasonably request."},
          {heading:"2.3 Contractor Reports", text:"Contractor will furnish regular reports covering any Work, materials, products and equipment furnished for which Company is obligated to pay."}
        ]},
      { clauseId:"audit", clauseType:"Audit", heading:"AUDIT",
        text:"Contractor shall maintain, and shall cause any of Contractor's subcontractors to maintain, a true and correct set of records pertaining to all Work performed under each Work Order for two (2) years following completion of the Work.",
        jurisdiction:null, links:[], subclauses:[] },
      { clauseId:"inspections", clauseType:"Inspections", heading:"INSPECTIONS",
        text:"All Work performed by Contractor must meet the approval of Company and shall be subject to Company's general right of inspection.",
        jurisdiction:null, links:[], subclauses:[] },
      { clauseId:"independent_contractor", clauseType:"Independent Contractor", heading:"INDEPENDENT CONTRACTOR",
        text:"Company and Contractor expressly agree that Contractor is an independent contractor as to all Work performed under this Agreement.",
        jurisdiction:null, links:[], subclauses:[] },
      { clauseId:"taxes", clauseType:"Taxes, Permits, and Licenses", heading:"TAXES, PERMITS, AND LICENSES",
        text:"6.1 Unless otherwise agreed in writing by the parties, Contractor shall secure all licenses and permits, make all cash and other deposits, provide all bonds, and give all notices required in connection with any Work performed under the Agreement.",
        jurisdiction:null, links:[], subclauses:[
          {heading:"6.1", text:"Contractor shall secure all licenses and permits, make all cash and other deposits, provide all bonds, and give all notices required by law, regulation, ordinance, or permit."}
        ]},
      { clauseId:"termination", clauseType:"Termination", heading:"TERM AND TERMINATION OF MSA",
        text:"This MSA shall become effective upon execution and shall continue in force until thirty (30) days following delivery by either party of written notice of termination.",
        jurisdiction:null, links:[], subclauses:[] },
      { clauseId:"governing_law", clauseType:"Governing Law", heading:"APPLICABLE LAW/JURISDICTION AND VENUE",
        text:"This Agreement shall be governed by, construed, and enforced in accordance with the laws of the State of Oklahoma. Any suit shall be brought exclusively in state or federal courts located in Oklahoma City, Oklahoma.",
        jurisdiction:"Oklahoma", links:[], subclauses:[] }
    ],
    buildDefaultSchema: buildMsaDefaultSchema
  },
  {
    id: "msa-004",
    label: "MSA_004",
    elId: "doc-msa-004",
    pageLabel: "Page 1 / 27",
    defaultPrompt: "This is an MSA for a contractor.",
    mockData: {
      company_name:    "SandRidge Energy, Inc.",
      contractor_name: "Great White Pressure Pumping LLC",
      effective_date:  "[not specified in template]",
      governing_law:   "State of Oklahoma",
      venue:           "Oklahoma City, Oklahoma",
      termination_notice:     "30 days written notice",
      audit_retention_period: "2 years",
      links:           "Exhibit C"
    },
    aliases: {
      company_name:    ["company_name","company","client_name","operator_name","party","first_party"],
      contractor_name: ["contractor_name","contractor","vendor_name","counterparty","second_party"],
      effective_date:  ["effective_date"],
      governing_law:   ["governing_law","applicable_law"],
      venue:           ["venue","jurisdiction"],
      termination_notice:    ["termination_notice","termination_notice_period","notice_period"],
      audit_retention_period:["audit_retention_period","record_retention_period","audit_period"],
      links:           ["links","referenced_exhibits","exhibit_references"]
    },
    clauses: [
      { clauseId:"scope", clauseType:"Scope", heading:"SCOPE OF AGREEMENT",
        text:"1.1 The Work. It is contemplated that from time to time Contractor will be requested by SandRidge or its present or future affiliated entities to perform certain work and services.",
        jurisdiction:null, links:["Exhibit C"], subclauses:[
          {heading:"1.1 The Work", text:"It is contemplated that from time to time Contractor will be requested by SandRidge or its affiliates to perform certain work and services."},
          {heading:"1.2 Work Orders", text:"A request for Work may be either oral or submitted to Contractor on a purchase order or similar document."},
          {heading:"1.3 Modifications", text:"Should the parties enter into a Work Order especially prepared for a particular job, the terms of this MSA shall prevail over any conflicting term."}
        ]},
      { clauseId:"payment", clauseType:"Payment", heading:"PAYMENT",
        text:"2.1 Compensation. Contractor shall receive the compensation specified in the Work Order which is agreed to by Company and Contractor at the time the Work Order is accepted.",
        jurisdiction:null, links:[], subclauses:[
          {heading:"2.1 Compensation", text:"Contractor shall receive the compensation specified in the Work Order agreed to by Company and Contractor."},
          {heading:"2.2 Invoicing", text:"Invoices shall be submitted in such form and accompanied by such certification and documentation as Company may reasonably request."},
          {heading:"2.3 Contractor Reports", text:"Contractor will furnish regular reports covering any Work, materials, products and equipment furnished for which Company is obligated to pay."}
        ]},
      { clauseId:"audit", clauseType:"Audit", heading:"AUDIT",
        text:"Contractor shall maintain, and shall cause any of Contractor's subcontractors to maintain, a true and correct set of records pertaining to all Work performed under each Work Order for two (2) years following completion of the Work.",
        jurisdiction:null, links:[], subclauses:[] },
      { clauseId:"inspections", clauseType:"Inspections", heading:"INSPECTIONS",
        text:"All Work performed by Contractor must meet the approval of Company and shall be subject to Company's general right of inspection.",
        jurisdiction:null, links:[], subclauses:[] },
      { clauseId:"independent_contractor", clauseType:"Independent Contractor", heading:"INDEPENDENT CONTRACTOR",
        text:"Company and Contractor expressly agree that Contractor is an independent contractor as to all Work performed under this Agreement.",
        jurisdiction:null, links:[], subclauses:[] },
      { clauseId:"taxes", clauseType:"Taxes, Permits, and Licenses", heading:"TAXES, PERMITS, AND LICENSES",
        text:"6.1 Unless otherwise agreed in writing by the parties, Contractor shall secure all licenses and permits, make all cash and other deposits, provide all bonds, and give all notices required in connection with any Work performed under the Agreement.",
        jurisdiction:null, links:[], subclauses:[
          {heading:"6.1", text:"Contractor shall secure all licenses and permits, make all cash and other deposits, provide all bonds, and give all notices required by law, regulation, ordinance, or permit."}
        ]},
      { clauseId:"data_governance", clauseType:"Data Governance", heading:"DATA GOVERNANCE",
        text:"The parties agree to implement reasonable data management practices governing the collection, use, storage, and disposal of data shared under this Agreement, including classification of data, restriction of access, and retention periods in accordance with applicable law.",
        jurisdiction:null, links:[], subclauses:[] },
      { clauseId:"termination", clauseType:"Termination", heading:"TERM AND TERMINATION OF MSA",
        text:"This MSA shall become effective upon execution and shall continue in force until thirty (30) days following delivery by either party of written notice of termination.",
        jurisdiction:null, links:[], subclauses:[] },
      { clauseId:"governing_law", clauseType:"Governing Law", heading:"APPLICABLE LAW/JURISDICTION AND VENUE",
        text:"This Agreement shall be governed by, construed, and enforced in accordance with the laws of the State of Oklahoma. Any suit shall be brought exclusively in state or federal courts located in Oklahoma City, Oklahoma.",
        jurisdiction:"Oklahoma", links:[], subclauses:[] }
    ],
    buildDefaultSchema: buildMsaDefaultSchema
  },
  {
    id: "msa-014",
    label: "MSA_014",
    elId: "doc-msa-014",
    pageLabel: "Page 1 / 18",
    defaultPrompt: "This is an MSA for a contractor.",
    mockData: {
      company_name:    "Iris Fung Co.",
      contractor_name: "Great White Shark",
      effective_date:  "[not specified in template]",
      governing_law:   "State of Oklahoma",
      venue:           "Oklahoma City, Oklahoma",
      termination_notice:     "30 days written notice",
      audit_retention_period: "2 years",
      links:           "Exhibit C"
    },
    aliases: {
      company_name:    ["company_name","company","client_name","operator_name","party","first_party"],
      contractor_name: ["contractor_name","contractor","vendor_name","counterparty","second_party"],
      effective_date:  ["effective_date"],
      governing_law:   ["governing_law","applicable_law"],
      venue:           ["venue","jurisdiction"],
      termination_notice:    ["termination_notice","termination_notice_period","notice_period"],
      audit_retention_period:["audit_retention_period","record_retention_period","audit_period"],
      links:           ["links","referenced_exhibits","exhibit_references"]
    },
    clauses: [
      { clauseId:"scope", clauseType:"Scope", heading:"SCOPE OF AGREEMENT",
        text:"1.1 The Work. It is contemplated that from time to time Contractor will be requested by SandRidge or its present or future affiliated entities to perform certain work and services.",
        jurisdiction:null, links:["Exhibit C"], subclauses:[
          {heading:"1.1 The Work", text:"It is contemplated that from time to time Contractor will be requested by SandRidge or its affiliates to perform certain work and services."},
          {heading:"1.2 Work Orders", text:"A request for Work may be either oral or submitted to Contractor on a purchase order or similar document."},
          {heading:"1.3 Modifications", text:"Should the parties enter into a Work Order especially prepared for a particular job, the terms of this MSA shall prevail over any conflicting term."}
        ]},
      { clauseId:"payment", clauseType:"Payment", heading:"PAYMENT",
        text:"2.1 Compensation. Contractor shall receive the compensation specified in the Work Order which is agreed to by Company and Contractor at the time the Work Order is accepted.",
        jurisdiction:null, links:[], subclauses:[
          {heading:"2.1 Compensation", text:"Contractor shall receive the compensation specified in the Work Order agreed to by Company and Contractor."},
          {heading:"2.2 Invoicing", text:"Invoices shall be submitted in such form and accompanied by such certification and documentation as Company may reasonably request."},
          {heading:"2.3 Contractor Reports", text:"Contractor will furnish regular reports covering any Work, materials, products and equipment furnished for which Company is obligated to pay."}
        ]},
      { clauseId:"audit", clauseType:"Audit", heading:"AUDIT",
        text:"Contractor shall maintain, and shall cause any of Contractor's subcontractors to maintain, a true and correct set of records pertaining to all Work performed under each Work Order for two (2) years following completion of the Work.",
        jurisdiction:null, links:[], subclauses:[] },
      { clauseId:"inspections", clauseType:"Inspections", heading:"INSPECTIONS",
        text:"All Work performed by Contractor must meet the approval of Company and shall be subject to Company's general right of inspection.",
        jurisdiction:null, links:[], subclauses:[] },
      { clauseId:"independent_contractor", clauseType:"Independent Contractor", heading:"INDEPENDENT CONTRACTOR",
        text:"Company and Contractor expressly agree that Contractor is an independent contractor as to all Work performed under this Agreement.",
        jurisdiction:null, links:[], subclauses:[] },
      { clauseId:"taxes", clauseType:"Taxes, Permits, and Licenses", heading:"TAXES, PERMITS, AND LICENSES",
        text:"6.1 Unless otherwise agreed in writing by the parties, Contractor shall secure all licenses and permits, make all cash and other deposits, provide all bonds, and give all notices required in connection with any Work performed under the Agreement.",
        jurisdiction:null, links:[], subclauses:[
          {heading:"6.1", text:"Contractor shall secure all licenses and permits, make all cash and other deposits, provide all bonds, and give all notices required by law, regulation, ordinance, or permit."}
        ]},
      { clauseId:"ai_usage", clauseType:"AI Usage", heading:"AI USAGE",
        text:"Unless otherwise agreed upon in writing by the parties, Contractor agrees to not utilize Artificial Intelligence through proprietary or third party models unless Contractor discloses to IrisFung 30 days in advance in writing, including specifications of AI usage as outlined by Exhibit A.",
        jurisdiction:null, links:[], subclauses:[] },
      { clauseId:"termination", clauseType:"Termination", heading:"TERM AND TERMINATION OF MSA",
        text:"This MSA shall become effective upon execution and shall continue in force until thirty (30) days following delivery by either party of written notice of termination.",
        jurisdiction:null, links:[], subclauses:[] },
      { clauseId:"governing_law", clauseType:"Governing Law", heading:"APPLICABLE LAW/JURISDICTION AND VENUE",
        text:"This Agreement shall be governed by, construed, and enforced in accordance with the laws of the State of Oklahoma. Any suit shall be brought exclusively in state or federal courts located in Oklahoma City, Oklahoma.",
        jurisdiction:"Oklahoma", links:[], subclauses:[] }
    ],
    buildDefaultSchema: buildMsaDefaultSchema
  }
];

function buildMsaDefaultSchema(){
  return [
    {id:nextId(), name:"preamble", type:"array", expanded:true,
      description:"The agreement's parties, extracted from the recital paragraph",
      nested:[
        {id:nextId(), name:"party", type:"text", description:"The first-named party to the agreement"},
        {id:nextId(), name:"counterparty", type:"text", description:"The other party to the agreement"}
      ]},
    {id:nextId(), name:"clauses", type:"array", expanded:true,
      description:"Each top-level clause/article in the agreement, mirroring the document's structure",
      nested:[
        {id:nextId(), name:"clauseType", type:"text", description:"Category of clause, e.g. Scope, Payment, Audit"},
        {id:nextId(), name:"heading", type:"text", description:"Clause heading as it appears in the document"},
        {id:nextId(), name:"text", type:"text", description:"Full text of the clause"},
        {id:nextId(), name:"jurisdiction", type:"text", description:"Governing jurisdiction referenced, if any"},
        {id:nextId(), name:"links", type:"text", description:"Referenced exhibits or other documents"},
        {id:nextId(), name:"subclauses", type:"text", description:"Numbered subclauses within this clause"}
      ]}
  ];
}

let activeFileIndex = 0;

function normalize(name){
  return (name || "").trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");
}
function matchKey(name){
  const n = normalize(name);
  const aliases = DOCS[activeFileIndex].aliases;
  for(const key in aliases){
    if(aliases[key].includes(n)) return key;
  }
  return null;
}

function showActiveDoc(){
  DOCS.forEach((d, i) => {
    document.getElementById(d.elId).style.display = i === activeFileIndex ? "block" : "none";
  });
  const doc = DOCS[activeFileIndex];
  document.getElementById("fileLabel").textContent = doc.label;
  document.getElementById("fileCount").textContent = (activeFileIndex + 1) + " / " + DOCS.length;
  document.getElementById("pageLabel").textContent = doc.pageLabel;
  document.getElementById("docTitle").textContent = doc.label;
  updateAuditCallout();
}
function prevFile(){
  activeFileIndex = (activeFileIndex - 1 + DOCS.length) % DOCS.length;
  showActiveDoc();
  loadSchemaForActiveDoc();
  computeResults();
}
function nextFile(){
  activeFileIndex = (activeFileIndex + 1) % DOCS.length;
  showActiveDoc();
  loadSchemaForActiveDoc();
  computeResults();
}

let idCounter = 1;
function nextId(){ return "f" + (idCounter++); }

const docSchemas = {};
let schema = [];

function loadSchemaForActiveDoc(){
  const doc = DOCS[activeFileIndex];
  if(!docSchemas[doc.id]){
    docSchemas[doc.id] = doc.buildDefaultSchema ? doc.buildDefaultSchema() : [];
  }
  schema = docSchemas[doc.id];
  renderSchema();
}

function addField(){
  schema.push({id:nextId(), name:"", type:"text", description:""});
  renderSchema();
}
function removeField(id){
  schema = schema.filter(f => f.id !== id);
  docSchemas[DOCS[activeFileIndex].id] = schema;
  renderSchema();
}
function updateField(id, prop, val){
  const f = schema.find(f => f.id === id);
  if(f) f[prop] = val;
  if(prop === "type"){
    if((val === "array" || val === "object") && !f.nested){ f.nested = []; f.expanded = true; }
    renderSchema();
  }
}
function toggleExpand(id){
  const f = schema.find(f => f.id === id);
  if(f){ f.expanded = !f.expanded; renderSchema(); }
}
function addNested(parentId){
  const f = schema.find(f => f.id === parentId);
  if(f){ f.nested.push({id:nextId(), name:"", type:"text", description:""}); renderSchema(); }
}
function removeNested(parentId, id){
  const f = schema.find(f => f.id === parentId);
  if(f){ f.nested = f.nested.filter(n => n.id !== id); renderSchema(); }
}
function updateNested(parentId, id, prop, val){
  const f = schema.find(f => f.id === parentId);
  if(!f) return;
  const n = f.nested.find(n => n.id === id);
  if(n) n[prop] = val;
}

function typeOptions(current){
  const types = ["text","number","date","array"];
  return types.map(t => `<option value="${t}" ${t===current?"selected":""}>${t}</option>`).join("");
}

function renderSchema(){
  const list = document.getElementById("fieldList");
  list.innerHTML = schema.map(f => {
    const isNestable = f.type === "array" || f.type === "object";
    let nestedHtml = "";
    if(isNestable){
      const rows = (f.nested || []).map(n => `
        <div class="nested-row">
          <span></span>
          <input type="text" value="${escapeAttr(n.name)}" placeholder="field name"
            oninput="updateNested('${f.id}','${n.id}','name',this.value)">
          <select class="type-select" onchange="updateNested('${f.id}','${n.id}','type',this.value)">${typeOptions(n.type)}</select>
          <input type="text" value="${escapeAttr(n.description)}" placeholder="description"
            oninput="updateNested('${f.id}','${n.id}','description',this.value)">
          <button class="del-btn" onclick="removeNested('${f.id}','${n.id}')">&#10005;</button>
        </div>`).join("");
      nestedHtml = `
        <div class="nested-wrap" style="${f.expanded ? "" : "display:none;"}">
          <div class="nested-label">&#8618; Nested fields
            <span class="nested-count">${(f.nested||[]).length} field${(f.nested||[]).length===1?"":"s"}</span>
          </div>
          ${rows}
          <button class="add-nested-btn" onclick="addNested('${f.id}')">+ Add nested field</button>
        </div>`;
    }
    return `
      <div class="field-block">
        <div class="field-main-grid">
          <span class="drag-handle">&#8942;&#8942;</span>
          <input type="text" value="${escapeAttr(f.name)}" placeholder="field name"
            oninput="updateField('${f.id}','name',this.value)">
          <select class="type-select" onchange="updateField('${f.id}','type',this.value)">${typeOptions(f.type)}</select>
          <input type="text" value="${escapeAttr(f.description)}" placeholder="description"
            oninput="updateField('${f.id}','description',this.value)">
          <button class="del-btn" onclick="removeField('${f.id}')">&#10005;</button>
        </div>
        ${isNestable ? `<div style="margin-left:30px;margin-top:2px;">
            <button class="add-nested-btn" onclick="toggleExpand('${f.id}')">${f.expanded ? "&#9662; hide nested fields" : "&#9656; " + (f.nested||[]).length + " nested field" + ((f.nested||[]).length===1?"":"s")}</button>
          </div>` : ""}
        ${nestedHtml}
      </div>`;
  }).join("");
}

function escapeAttr(s){
  return (s || "").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");
}

function setTab(tab){
  document.getElementById("tabConfig").classList.toggle("active", tab === "config");
  document.getElementById("tabResults").classList.toggle("active", tab === "results");
  document.getElementById("configBody").style.display = tab === "config" ? "block" : "none";
  document.getElementById("resultsBody").style.display = tab === "results" ? "block" : "none";
  document.getElementById("appRoot").classList.toggle("results-view", tab === "results");
  clearResultHover();
}

const CLAUSE_LIST_ALIASES = ["clauses","sections","articles","provisions","clause_list","clauseslist"];
const PREAMBLE_ALIASES = ["preamble","preambles","parties","recital","recitals","partiesrecital"];
const CLAUSE_KEY_ALIASES = {
  clauseType:  ["clausetype","clause_type","category","typeofclause"],
  heading:     ["heading","title"],
  text:        ["text","body","content","clausetext"],
  jurisdiction:["jurisdiction","governinglaw"],
  links:       ["links","references","exhibits","link"],
  subclauses:  ["subclauses","subclause","children"]
};

function isClauseListField(name){
  return !!DOCS[activeFileIndex].clauses && CLAUSE_LIST_ALIASES.includes(normalize(name));
}
function isPreambleField(name){
  return PREAMBLE_ALIASES.includes(normalize(name));
}
function matchedClauseKeys(nestedFields){
  const present = new Set();
  nestedFields.forEach(nf => {
    const n = normalize(nf.name);
    for(const key in CLAUSE_KEY_ALIASES){
      if(CLAUSE_KEY_ALIASES[key].includes(n)) present.add(key);
    }
  });
  return present;
}
function truncateText(str, len){
  return (str && str.length > len) ? str.slice(0, len).trim() + "\u2026" : (str || "");
}
function jsonEsc(s){
  return (s || "").replace(/\\/g,"\\\\").replace(/"/g,'\\"');
}
function renderClauseValue(key, clause){
  if(key === "clauseType") return `<span class="jv-str">"${jsonEsc(clause.clauseType)}"</span>`;
  if(key === "heading") return `<span class="jv-str">"${jsonEsc(clause.heading)}"</span>`;
  if(key === "text") return `<span class="jv-str">"${jsonEsc(truncateText(clause.text, 110))}"</span>`;
  if(key === "jurisdiction") return clause.jurisdiction
    ? `<span class="jv-str">"${jsonEsc(clause.jurisdiction)}"</span>` : `<span class="jv-null">null</span>`;
  if(key === "links") return (clause.links && clause.links.length)
    ? `[${clause.links.map(l => `<span class="jv-str">"${jsonEsc(l)}"</span>`).join(", ")}]`
    : `<span class="jv-punc">[]</span>`;
  if(key === "subclauses"){
    if(!clause.subclauses || !clause.subclauses.length) return `<span class="jv-punc">[]</span>`;
    return `[<div class="json-sub">` + clause.subclauses.map(sc =>
      `{ <span class="jk">"heading"</span>: <span class="jv-str">"${jsonEsc(sc.heading)}"</span>, `
      + `<span class="jk">"text"</span>: <span class="jv-str">"${jsonEsc(truncateText(sc.text, 70))}"</span> }`
    ).join(",<br>") + `</div>]`;
  }
  return "";
}
let resultsViewMode = "visual";
function setResultsMode(mode){
  resultsViewMode = mode;
  computeResults();
}

function handleResultHover(el){
  const keys = (el.dataset.highlightKeys || "").split(",").filter(Boolean);
  const clauseId = el.dataset.highlightClause || null;
  const activeEl = document.getElementById(DOCS[activeFileIndex].elId);
  activeEl.querySelectorAll(".hl").forEach(node => {
    node.classList.toggle("dim", !keys.includes(node.dataset.key));
  });
  activeEl.querySelectorAll(".clause-para.clause-hl").forEach(node => {
    node.classList.toggle("dim", node.dataset.clauseParent !== clauseId);
  });
  activeEl.querySelectorAll(".clause-head.heading-hl").forEach(node => {
    node.classList.toggle("dim", node.dataset.clauseId !== clauseId);
  });
  activeEl.querySelectorAll(".recital-block.recital-hl").forEach(node => {
    node.classList.toggle("dim", !(clauseId === "preamble" && node.dataset.clauseId === "preamble"));
  });
}
function clearResultHover(){
  const activeEl = document.getElementById(DOCS[activeFileIndex].elId);
  activeEl.querySelectorAll(".dim").forEach(node => node.classList.remove("dim"));
}

function editControlHtml(kind, id, key, allowRedraw){
  if(allowRedraw === undefined) allowRedraw = true;
  return `<div class="edit-control">
    <button class="edit-icon-btn" onclick="event.stopPropagation();toggleEditMenu(this)"
      data-edit-kind="${kind}" data-edit-id="${escapeAttr(id)}" data-edit-key="${escapeAttr(key || "")}"
      aria-label="Edit this section">&#9998;</button>
    <div class="edit-menu">
      <button onclick="event.stopPropagation();menuTypeEdit(this)"><span class="edit-menu-icon">&#9998;</span>Edit extracted text</button>
      ${allowRedraw ? `<button onclick="event.stopPropagation();menuRedraw(this)"><span class="edit-menu-icon">&#9635;</span>Redraw bounding box</button>` : ""}
    </div>
  </div>`;
}

function clauseVisualCard(clause, present){
  if(typeEditTarget && typeEditTarget.kind === "clause" && typeEditTarget.id === clause.clauseId){
    return `<div class="clause-card editing" data-highlight-clause="${clause.clauseId}">
        <div class="edit-field-group">
          <label class="edit-field-label" for="editClauseType">Section type</label>
          <input type="text" class="edit-input" id="editClauseType" list="clauseTypeOptions"
            value="${escapeAttr(clause.clauseType)}" placeholder="Search or add a section type">
          <datalist id="clauseTypeOptions">
            ${getSectionTypeOptions().map(o => `<option value="${escapeAttr(o.name)} (${o.count})">`).join("")}
          </datalist>
        </div>
        <div class="edit-field-group">
          <label class="edit-field-label" for="editHeading">Heading</label>
          <input type="text" class="edit-input" id="editHeading" value="${escapeAttr(clause.heading)}">
        </div>
        <div class="edit-field-group">
          <label class="edit-field-label" for="editTextarea">Extracted text</label>
          <textarea class="edit-textarea" id="editTextarea">${escapeAttr(clause.text)}</textarea>
        </div>
        <div class="edit-actions">
          <button class="btn-text" onclick="cancelTypeEdit()">Cancel</button>
          <button class="btn btn-dark" onclick="saveClauseEdit('doc')">Apply</button>
        </div>
      </div>`;
  }

  let head = `<div class="clause-card-head">`;
  if(present.has("clauseType")) head += `<span class="clause-badge">${escapeAttr(clause.clauseType)}</span>`;
  if(present.has("heading")) head += `<span class="clause-card-title">${escapeAttr(clause.heading)}</span>`;
  head += `</div>`;

  let text = "";
  if(present.has("text")) text = `<p class="clause-card-text">${escapeAttr(truncateText(clause.text, 220))}</p>`;

  let meta = "";
  if(present.has("jurisdiction")){
    meta += `<div class="clause-meta-row"><b>Jurisdiction:</b> ${clause.jurisdiction ? escapeAttr(clause.jurisdiction) : "&#8212;"}</div>`;
  }
  let links = "";
  if(present.has("links") && clause.links && clause.links.length){
    const isAuditFix = clause.clauseId === "ai_usage" && !!auditResolved;
    links = `<div class="clause-links">` + clause.links.map(l =>
      `<span class="link-chip${isAuditFix && l === "Exhibit A" ? " link-chip-added" : ""}">${escapeAttr(l)}</span>`
    ).join("") + `</div>`;
  }
  let subs = "";
  if(present.has("subclauses") && clause.subclauses && clause.subclauses.length){
    subs = `<div class="subclause-list">` + clause.subclauses.map(sc =>
      `<div class="subclause-item"><b>${escapeAttr(sc.heading)}</b><span>${escapeAttr(truncateText(sc.text, 130))}</span></div>`
    ).join("") + `</div>`;
  }

  return `<div class="clause-card" data-highlight-clause="${clause.clauseId}"
      onmouseenter="handleResultHover(this)" onmouseleave="clearResultHover()">
      ${editControlHtml("clause", clause.clauseId)}
      ${head}${text}${meta}${links}${subs}
    </div>`;
}

function buildClauseResultsHtml(nestedFields){
  const present = matchedClauseKeys(nestedFields);
  return DOCS[activeFileIndex].clauses.map(clause => {
    highlightClause(clause.clauseId);
    if(resultsViewMode === "code"){
      const order = ["type","clauseType","heading","text","embedding","jurisdiction","links","subclauses"];
      const lines = order.filter(k => k === "type" || k === "embedding" || present.has(k)).map(k => {
        if(k === "type") return `<span class="jk">"type"</span>: <span class="jv-str">"Clause"</span>`;
        if(k === "embedding") return `<span class="jk">"embedding"</span>: <span class="jv-punc">[...]</span>`;
        return `<span class="jk">"${k}"</span>: ${renderClauseValue(k, clause)}`;
      });
      return `<div class="json-block" data-highlight-clause="${clause.clauseId}"
          onmouseenter="handleResultHover(this)" onmouseleave="clearResultHover()">{<br>&nbsp;&nbsp;`
          + lines.join(`,<br>&nbsp;&nbsp;`) + `<br>}</div>`;
    }
    return clauseVisualCard(clause, present);
  }).join("");
}
function highlightClause(clauseId){
  const activeEl = document.getElementById(DOCS[activeFileIndex].elId);
  if(clauseId === "preamble"){
    activeEl.querySelectorAll('.recital-block[data-clause-id="preamble"]').forEach(el => el.classList.add("recital-hl"));
    return;
  }
  activeEl.querySelectorAll('.clause-head[data-clause-id="' + clauseId + '"]').forEach(el => el.classList.add("heading-hl"));
  activeEl.querySelectorAll('.clause-para[data-clause-parent="' + clauseId + '"]').forEach(el => el.classList.add("clause-hl"));
}

function computeResults(){
  document.querySelectorAll(".hl, .clause-hl, .heading-hl, .recital-hl, .dim").forEach(el => {
    el.classList.remove("hl","clause-hl","heading-hl","recital-hl","dim");
  });

  let html = "";
  const namedFields = schema.filter(f => f.name);
  if(namedFields.length === 0){
    html = `<div class="empty-state"><i>&#128196;</i>Add fields in Configurations, then run extraction.</div>`;
  }
  const mockData = DOCS[activeFileIndex].mockData;
  const hasClauseField = namedFields.some(f => (f.type === "array" || f.type === "object") && isClauseListField(f.name));
  if(hasClauseField){
    html += `<div class="results-toggle">
        <button class="toggle-btn ${resultsViewMode === "visual" ? "active" : ""}" onclick="setResultsMode('visual')">&#128065; Visual</button>
        <button class="toggle-btn ${resultsViewMode === "code" ? "active" : ""}" onclick="setResultsMode('code')">&lt;/&gt; Code</button>
      </div>`;
  }
  namedFields.forEach(f => {
    if(f.type === "array" || f.type === "object"){
      const nested = (f.nested || []).filter(n => n.name);
      if(isClauseListField(f.name)){
        html += `<div class="result-field"><div class="result-label">${escapeAttr(f.name)}</div>${buildClauseResultsHtml(nested)}</div>`;
        return;
      }
      const rowKeys = nested.map(n => matchKey(n.name));
      const isPreamble = isPreambleField(f.name);
      if(isPreamble){ highlightClause("preamble"); }

      if(typeEditTarget && typeEditTarget.kind === "row" && typeEditTarget.id === f.name){
        html += `<div class="result-field">
          <div class="result-label">${escapeAttr(f.name)}</div>
          <div class="edit-row-form">
            ${nested.map((n, i) => {
              const key = rowKeys[i];
              const val = key ? (mockData[key] || "") : "";
              return `<label class="edit-row-label">${escapeAttr(n.name)}
                <input type="text" class="edit-row-input" data-row-name="${escapeAttr(n.name)}" data-row-key="${escapeAttr(key || "")}" value="${escapeAttr(val)}">
              </label>`;
            }).join("")}
            <div class="edit-actions">
              <button class="btn" onclick="cancelTypeEdit()">Cancel</button>
              <button class="btn btn-dark" onclick="saveRowEdit(this)">Save</button>
            </div>
          </div></div>`;
        return;
      }

      html += `<div class="result-field" data-highlight-keys="${rowKeys.filter(Boolean).join(",")}" ${isPreamble ? 'data-highlight-clause="preamble"' : ""}
          onmouseenter="handleResultHover(this)" onmouseleave="clearResultHover()">
        ${editControlHtml("row", f.name, "", false)}
        <div class="result-label">${escapeAttr(f.name)}</div>
        <table class="result-table"><thead><tr>${nested.map(n => `<th>${escapeAttr(n.name)}</th>`).join("")}</tr></thead>
        <tbody><tr>${nested.map((n, i) => {
          const key = rowKeys[i];
          const val = key ? mockData[key] : null;
          if(key){ highlightDoc(key); }
          return `<td>${val ? val : '<span class="empty">not found</span>'}</td>`;
        }).join("")}</tr></tbody></table></div>`;
    } else {
      const key = matchKey(f.name);

      if(typeEditTarget && typeEditTarget.kind === "field" && typeEditTarget.id === f.name){
        const currentVal = key ? (mockData[key] || "") : "";
        html += `<div class="result-field">
          <div class="result-label">${escapeAttr(f.name)}</div>
          <textarea class="edit-textarea" id="editTextarea">${escapeAttr(currentVal)}</textarea>
          <div class="edit-actions">
            <button class="btn" onclick="cancelTypeEdit()">Cancel</button>
            <button class="btn btn-dark" onclick="saveTypeEdit()">Save</button>
          </div></div>`;
        return;
      }

      const val = key ? mockData[key] : null;
      if(key){ highlightDoc(key); }
      html += `<div class="result-field" data-highlight-keys="${key || ""}"
          onmouseenter="handleResultHover(this)" onmouseleave="clearResultHover()">
        ${editControlHtml("field", f.name, key)}
        <div class="result-label">${escapeAttr(f.name)}</div>
        <div class="result-value ${val ? "" : "empty"}">${val ? val : "not found in document"}</div></div>`;
    }
  });

  const auditTarget = document.getElementById("auditHighlightTarget");
  if(auditTarget){
    const aiClause = (DOCS[activeFileIndex].clauses || []).find(c => c.clauseId === "ai_usage");
    if(aiClause && aiClause.links && aiClause.links.includes("Exhibit A")){
      auditTarget.classList.add("hl");
    }
  }

  document.getElementById("resultsBody").innerHTML = html;
}

function runExtraction(){
  computeResults();
  setTab("results");
}

function highlightDoc(key){
  const activeEl = document.getElementById(DOCS[activeFileIndex].elId);
  activeEl.querySelectorAll('[data-key="' + key + '"]').forEach(el => el.classList.add("hl"));
}

function handleRunClick(){
  const allFiles = document.getElementById("allFiles").checked;
  if(allFiles){
    runBatchExtraction();
  } else {
    runExtraction();
  }
}

let batchData = null;
const BATCH_CLAUSE_DEFS = [
  {id:"preamble",               name:"Preamble",                     missRate:0},
  {id:"scope",                  name:"Scope of Agreement",           missRate:0.01},
  {id:"payment",                name:"Payment",                      missRate:0},
  {id:"audit",                  name:"Audit",                        missRate:0.03},
  {id:"inspections",            name:"Inspections",                  missRate:0},
  {id:"independent_contractor", name:"Independent Contractor",       missRate:0.05},
  {id:"taxes",                  name:"Taxes, Permits, and Licenses", missRate:0},
  {id:"termination",            name:"Term and Termination",         missRate:0.38},
  {id:"governing_law",          name:"Governing Law",                missRate:0},
  {id:"exhibit_a",              name:"Exhibit A (Insurance Requirements)", missRate:0}
];
const RARE_CLAUSE_POOL = [
  {name:"Force Majeure", count:2},
  {name:"Non-Solicitation", count:1},
  {name:"Data Privacy Addendum", count:2},
  {name:"Export Control Compliance", count:1},
  {name:"Change of Control", count:1},
  {name:"Site-Specific Safety Plan", count:1}
];

const OVERLAP_TEMPLATES = [
  "Each party shall maintain appropriate data governance policies and procedures for the collection, use, storage, and disposal of data exchanged under this Agreement, including data classification, access controls, and retention schedules consistent with applicable law.",
  "The parties agree to implement reasonable data management practices governing the collection, use, storage, and disposal of data shared under this Agreement, including classification of data, restriction of access, and retention periods in accordance with applicable law.",
  "Each party shall establish and maintain data governance and management procedures addressing the collection, use, storage, and disposal of shared data, including data classification, access restrictions, and retention timelines as required by applicable law."
];

const KNOWN_CLAUSE_TYPES = [
  "Preamble", "Scope", "Payment", "Audit", "Inspections", "Independent Contractor",
  "Taxes, Permits, and Licenses", "AI Usage", "Termination", "Governing Law",
  "Data Governance", "Data Management", "Force Majeure", "Non-Solicitation",
  "Data Privacy Addendum", "Export Control Compliance", "Change of Control", "Site-Specific Safety Plan"
];

const CLAUSE_TYPE_TREE_ALIAS = {
  "Preamble": "Preamble",
  "Scope": "Scope of Agreement",
  "Payment": "Payment",
  "Audit": "Audit",
  "Inspections": "Inspections",
  "Independent Contractor": "Independent Contractor",
  "Taxes, Permits, and Licenses": "Taxes, Permits, and Licenses",
  "Termination": "Term and Termination",
  "Governing Law": "Governing Law"
};

function getSectionTypeOptions(){
  const data = generateBatchData();
  const treeByName = {};
  data.tree.forEach(t => { treeByName[t.name] = t.count; });
  const namingByName = {};
  data.namingIssues.forEach(n => { namingByName[n.name] = n.count; });
  const rareByName = {};
  RARE_CLAUSE_POOL.forEach(r => { rareByName[r.name] = r.count; });

  return KNOWN_CLAUSE_TYPES.map(name => {
    let count = 0;
    const treeName = CLAUSE_TYPE_TREE_ALIAS[name];
    if(treeName && treeByName[treeName] !== undefined){ count = treeByName[treeName]; }
    else if(namingByName[name] !== undefined){ count = namingByName[name]; }
    else if(rareByName[name] !== undefined){ count = rareByName[name]; }
    else if(name === "AI Usage"){ count = 1; }
    return { name, count };
  });
}

function stripCountSuffix(v){
  return (v || "").replace(/\s*\(\d+\)\s*$/, "").trim();
}

function pseudoRandom(i, seed){
  const h = Math.abs(Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453);
  return h - Math.floor(h);
}
function formatUploadDate(daysAgo){
  const d = new Date(2026, 6, 16);
  d.setDate(d.getDate() - daysAgo);
  return d.toLocaleDateString("en-US", {month:"short", day:"numeric", year:"numeric"});
}

function generateBatchData(){
  if(batchData) return batchData;
  const total = 100;
  const docs = [];
  for(let i = 1; i <= total; i++){
    const present = {};
    BATCH_CLAUSE_DEFS.forEach((c, idx) => {
      present[c.id] = pseudoRandom(i, idx + 1) >= c.missRate;
    });
    const daysAgo = Math.floor(pseudoRandom(i, 97) * 24);
    docs.push({
      index: i,
      name: "MSA_" + String(i).padStart(3, "0") + ".pdf",
      present,
      uploaded: formatUploadDate(daysAgo)
    });
  }
  const flaggedDoc = docs.find(d => d.index === 14);
  flaggedDoc.flagged = true;
  flaggedDoc.flagReason = "AI Usage clause references \u201CExhibit A\u201D but no exhibit was linked during extraction \u2014 verify manually.";

  const tree = BATCH_CLAUSE_DEFS.map(c => {
    const count = docs.filter(d => d.present[c.id]).length;
    return { id: c.id, name: c.name, count, total, pct: count / total };
  });

  const govRanked = docs.map(d => ({ d, score: pseudoRandom(d.index, 50) })).sort((a, b) => a.score - b.score);
  const govSet = new Set(govRanked.slice(0, 32).map(r => r.d.index));
  if(!govSet.has(4)){
    const govArr = Array.from(govSet);
    govSet.delete(govArr[govArr.length - 1]);
    govSet.add(4);
  }
  const mgmtRanked = docs.filter(d => !govSet.has(d.index))
    .map(d => ({ d, score: pseudoRandom(d.index, 51) })).sort((a, b) => a.score - b.score);
  const mgmtSet = new Set(mgmtRanked.slice(0, 34).map(r => r.d.index));

  const overlapText = i => OVERLAP_TEMPLATES[i % OVERLAP_TEMPLATES.length];

  const namingIssues = [
    { key: "data_governance", name: "Data Governance", count: 32,
      withDocs: docs.filter(d => govSet.has(d.index)).map(d => ({ ...d, previewText: overlapText(d.index) })),
      withoutDocs: docs.filter(d => !govSet.has(d.index)) },
    { key: "data_management", name: "Data Management", count: 34,
      withDocs: docs.filter(d => mgmtSet.has(d.index)).map(d => ({ ...d, previewText: overlapText(d.index + 1) })),
      withoutDocs: docs.filter(d => !mgmtSet.has(d.index)) }
  ];

  const rareTotalTypes = 24;
  batchData = { docs, tree, flaggedDoc, total, rareTotalTypes, namingIssues };
  return batchData;
}

const MSA_THUMB_DATA_URI = "data:image/jpeg;base64,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";
function docThumbHtml(isReal){
  if(isReal){
    return `<div class="doc-thumb real"><img src="${MSA_THUMB_DATA_URI}" alt="MSA_001.pdf preview"></div>`;
  }
  return `<div class="doc-thumb placeholder">
    <div class="thumb-header"></div>
    <div class="thumb-line" style="width:80%"></div>
    <div class="thumb-line" style="width:65%"></div>
    <div class="thumb-line" style="width:75%"></div>
  </div>`;
}

function renderBatchView(){
  const data = generateBatchData();
  const flagActive = !auditResolved;

  document.getElementById("batchFileCount").textContent = data.total;

  document.getElementById("batchFlagCallout").innerHTML = flagActive ? `
    <div class="batch-flag-callout">
      <span>&#9873;</span>
      <div><b>1 document flagged for review</b> &#8212; ${escapeAttr(data.flaggedDoc.name)}: ${escapeAttr(data.flaggedDoc.flagReason)}</div>
    </div>` : "";

  document.getElementById("docGrid").innerHTML = data.docs.map(d => {
    const showFlag = d.flagged && flagActive;
    return `
    <div class="doc-card ${showFlag ? "flagged" : ""}" onclick="openDocFromBatch(${d.index})">
      ${docThumbHtml(d.index === 1)}
      <div class="doc-card-name">${escapeAttr(d.name)}</div>
      <div class="doc-card-date">Uploaded ${d.uploaded}</div>
      <div class="doc-card-status">
        <span class="status-pill ok">&#10003; Extracted</span>
        ${showFlag ? '<span class="status-pill flag">&#9873; Flagged</span>' : ""}
      </div>
    </div>`;
  }).join("");

  document.getElementById("batchStats").innerHTML = `
    <div class="stat-chip"><div class="num">${data.total}</div><div class="label">Files processed</div></div>
    <div class="stat-chip"><div class="num">${flagActive ? 1 : 0}</div><div class="label">Flagged for review</div></div>
    <div class="stat-chip"><div class="num">${BATCH_CLAUSE_DEFS.length + data.rareTotalTypes}</div><div class="label">Distinct section types found</div></div>`;

  function getPreviewText(sectionKey, doc, has){
    if(!has){
      return "No matching text found in this document for this section.";
    }
    if(doc.previewText){ return doc.previewText; }
    const def = BATCH_CLAUSE_DEFS.find(c => c.id === sectionKey);
    const label = def ? def.name : sectionKey;
    return `This document's ${label} section follows standard MSA template language for this clause.`;
  }

  function renderDocRow(d, sectionKey, has){
    const eyeHtml = has ? `<span class="tree-eye-icon" data-preview="${escapeAttr(getPreviewText(sectionKey, d, has))}"
        onmouseenter="showClauseTooltip(this)" onmouseleave="hideClauseTooltip()"
        onclick="event.stopPropagation();" aria-label="Preview section text">&#128065;</span>` : "";
    return `<div class="tree-doc-row">
      <span class="tree-doc-name" onclick="event.stopPropagation();openDocFromBatch(${d.index},'${sectionKey}')">${escapeAttr(d.name)}</span>
      ${eyeHtml}
    </div>`;
  }

  function renderTreeBranch(key, name, count, pct, withDocs, withoutDocs){
    // Store docs data for section details
    window.sectionDocsData = window.sectionDocsData || {};
    window.sectionDocsData[key] = withDocs;

    return `
    <div class="tree-branch tree-branch-special">
      <div class="tree-branch-row" onclick="toggleTreeBranch('${key}')">
        <span class="tree-count">${count}</span>
        <span class="tree-label">
          ${escapeAttr(name)}
          <span class="tree-caret" id="caret-${key}">&#9656;</span>
          <button class="tree-edit-btn" onclick="event.stopPropagation();openSectionDetailsByKey('${key}','${escapeAttr(name)}')" aria-label="Edit section details">&#9998;</button>
        </span>
        <span class="tree-spark"><span class="tree-spark-fill ${pct < 0.5 ? "warn" : "good"}" style="width:${Math.round(pct * 100)}%;"></span></span>
      </div>
      <div class="tree-naming-detail" id="detail-${key}" style="display:none;">
        <div class="tree-naming-cols">
          <div class="tree-naming-col">
            <div class="tree-naming-col-title">Has this section (${withDocs.length})</div>
            <div class="tree-doc-list">${withDocs.map(d => renderDocRow(d, key, true)).join("")}</div>
          </div>
          <div class="tree-naming-col">
            <div class="tree-naming-col-title">Missing this section (${withoutDocs.length})</div>
            <div class="tree-doc-list">${withoutDocs.map(d => renderDocRow(d, key, false)).join("")}</div>
          </div>
        </div>
      </div>
    </div>`;
  }

  const branchesHtml = data.tree.map(t => renderTreeBranch(
    t.id, t.name, t.count, t.pct,
    data.docs.filter(d => d.present[t.id]),
    data.docs.filter(d => !d.present[t.id])
  )).join("");

  const rareHtml = RARE_CLAUSE_POOL.map(r => `
    <div class="tree-rare-item"><span>${escapeAttr(r.name)}</span><b>${r.count} doc${r.count > 1 ? "s" : ""}</b></div>`).join("")
    + `<div class="tree-rare-more">+ ${data.rareTotalTypes - RARE_CLAUSE_POOL.length} more special-case sections, each in 1&#8211;2 documents</div>`;

  let effectiveNamingIssues = data.namingIssues;
  if(dataGovernanceMerged){
    const gov = data.namingIssues.find(n => n.key === "data_governance");
    const mgmt = data.namingIssues.find(n => n.key === "data_management");
    if(gov && mgmt){
      const mergedWith = mgmt.withDocs.concat(gov.withDocs.filter(d => !mgmt.withDocs.some(m => m.index === d.index)));
      const mergedWithout = data.docs.filter(d => !mergedWith.some(m => m.index === d.index));
      effectiveNamingIssues = data.namingIssues
        .filter(n => n.key !== "data_governance" && n.key !== "data_management")
        .concat([{ key: "data_management", name: "Data Management", count: mergedWith.length, withDocs: mergedWith, withoutDocs: mergedWithout }]);
    }
  } else if(msa004MovedToManagement){
    const gov = data.namingIssues.find(n => n.key === "data_governance");
    const mgmt = data.namingIssues.find(n => n.key === "data_management");
    if(gov && mgmt){
      const movedDoc = gov.withDocs.find(d => d.index === 4);
      if(movedDoc){
        const msa004Doc = DOCS.find(d => d.id === "msa-004");
        const govClause = msa004Doc && (msa004Doc.clauses || []).find(c => c.clauseId === "data_governance");
        const currentText = govClause ? govClause.text : movedDoc.previewText;
        const movedForMgmt = { ...movedDoc, previewText: currentText };

        const newGovWith = gov.withDocs.filter(d => d.index !== 4);
        const newGovWithout = gov.withoutDocs.concat([movedDoc]).sort((a, b) => a.index - b.index);
        const newMgmtWith = mgmt.withDocs.concat([movedForMgmt]).sort((a, b) => a.index - b.index);
        const newMgmtWithout = mgmt.withoutDocs.filter(d => d.index !== 4);

        effectiveNamingIssues = data.namingIssues.map(n => {
          if(n.key === "data_governance"){ return { ...n, count: newGovWith.length, withDocs: newGovWith, withoutDocs: newGovWithout }; }
          if(n.key === "data_management"){ return { ...n, count: newMgmtWith.length, withDocs: newMgmtWith, withoutDocs: newMgmtWithout }; }
          return n;
        });
      }
    }
  }

  const namingHtml = effectiveNamingIssues.map(n => renderTreeBranch(
    n.key, n.name, n.count, n.count / data.total, n.withDocs, n.withoutDocs
  )).join("");

  document.getElementById("treeWrap").innerHTML = `
    <div class="tree-root">${data.total} documents</div>
    <div class="tree-root-sub">Every branch below is a section found somewhere in the batch &#8212; a short branch just means it's less common, not necessarily wrong.</div>
    <div class="tree-branches">
      ${branchesHtml}
      ${namingHtml}
      <div class="tree-branch tree-branch-special" onclick="toggleRareClauses()">
        <div class="tree-branch-row">
          <span class="tree-count">+${data.rareTotalTypes}</span>
          <span class="tree-label">other special-case sections <span class="tree-caret" id="rareCaret">&#9656;</span></span>
        </div>
        <div class="tree-rare-list" id="rareList" style="display:none;">${rareHtml}</div>
      </div>
    </div>`;
}

function toggleTreeBranch(key){
  const detail = document.getElementById("detail-" + key);
  const caret = document.getElementById("caret-" + key);
  const isOpen = detail.style.display !== "none";
  detail.style.display = isOpen ? "none" : "block";
  caret.classList.toggle("open", !isOpen);
}

function showClauseTooltip(el){
  hideClauseTooltip();
  const tip = document.createElement("div");
  tip.id = "activeClauseTooltip";
  tip.className = "clause-tooltip";
  tip.textContent = el.dataset.preview || "";
  document.body.appendChild(tip);

  const rect = el.getBoundingClientRect();
  const tipRect = tip.getBoundingClientRect();
  let left = rect.right - tipRect.width;
  let top = rect.top - tipRect.height - 8;
  if(left < 8) left = 8;
  if(left + tipRect.width > window.innerWidth - 8) left = window.innerWidth - tipRect.width - 8;
  if(top < 8) top = rect.bottom + 8;
  tip.style.left = left + "px";
  tip.style.top = top + "px";
}

function hideClauseTooltip(){
  const tip = document.getElementById("activeClauseTooltip");
  if(tip){ tip.remove(); }
}

function toggleRareClauses(){
  const list = document.getElementById("rareList");
  const caret = document.getElementById("rareCaret");
  const isOpen = list.style.display !== "none";
  list.style.display = isOpen ? "none" : "block";
  caret.classList.toggle("open", !isOpen);
}

let currentSectionDetails = null;
let filteredSectionDocs = [];
let activeSectionDocIndex = -1;

const SECTION_DESCRIPTIONS = {
  scope: "Defines the scope of work and services to be performed under the agreement, including how work orders are issued and accepted.",
  payment: "Establishes compensation terms, invoicing requirements, and reporting obligations for work performed under the agreement.",
  audit: "Specifies record-keeping requirements and the company's right to audit contractor records for accuracy and compliance.",
  inspections: "Grants the company the right to inspect work performed by the contractor to ensure it meets required standards.",
  independent_contractor: "Clarifies that the contractor is an independent entity, not an employee or agent of the company.",
  taxes: "Assigns responsibility for obtaining necessary licenses, permits, bonds, and regulatory compliance to the contractor.",
  data_governance: "Outlines data management practices governing collection, use, storage, and disposal of shared data under the agreement.",
  data_management: "Establishes protocols for handling, securing, and managing data exchanged between parties during the contract term.",
  ai_usage: "Requires disclosure and approval before using artificial intelligence tools or models in performing contracted work.",
  termination: "Defines the duration of the agreement and procedures for terminating the contract by either party.",
  governing_law: "Specifies which state's laws govern the agreement and where legal disputes must be resolved."
};

const MOCK_DOC_METADATA = {
  0: { counterparty: "Great White Pressure Pumping", date: "2024-03-15", template: "v1.2" },
  4: { counterparty: "Great White Pressure Pumping", date: "2024-06-22", template: "v2.0" },
  14: { counterparty: "Great White Shark", date: "2024-09-10", template: "v2.1" }
};

function openSectionDetailsByKey(key, name){
  const docs = window.sectionDocsData && window.sectionDocsData[key] ? window.sectionDocsData[key] : [];
  openSectionDetails(key, name, docs);
}

function openSectionDetails(key, name, docs){
  currentSectionDetails = { key, name, docs };
  filteredSectionDocs = docs;
  activeSectionDocIndex = -1;

  document.getElementById("sectionDetailsTitle").value = name;
  const desc = SECTION_DESCRIPTIONS[key] || "This section contains important contractual provisions that apply to the agreement.";
  document.getElementById("sectionDetailsDescText").value = desc;

  // Reset evaluation state
  resetEvaluationUI();

  populateSectionFilters(docs);
  renderSectionThumbnails();
  document.getElementById("sectionDetailsPane").style.display = "flex";
}

function closeSectionDetails(){
  document.getElementById("sectionDetailsPane").style.display = "none";
  currentSectionDetails = null;
  filteredSectionDocs = [];
  activeSectionDocIndex = -1;
}

function populateSectionFilters(docs){
  const counterparties = new Set();
  const dates = new Set();
  const templates = new Set();

  docs.forEach(d => {
    const meta = MOCK_DOC_METADATA[d.index];
    if(meta){
      counterparties.add(meta.counterparty);
      dates.add(meta.date);
      templates.add(meta.template);
    }
  });

  const cpSelect = document.getElementById("filterCounterparty");
  cpSelect.innerHTML = '<option value="">All counterparties</option>' +
    Array.from(counterparties).map(c => `<option value="${escapeAttr(c)}">${escapeAttr(c)}</option>`).join("");

  const dateSelect = document.getElementById("filterDate");
  dateSelect.innerHTML = '<option value="">All dates</option>' +
    Array.from(dates).sort().reverse().map(d => `<option value="${escapeAttr(d)}">${escapeAttr(d)}</option>`).join("");

  const tmplSelect = document.getElementById("filterTemplate");
  tmplSelect.innerHTML = '<option value="">All template versions</option>' +
    Array.from(templates).sort().map(t => `<option value="${escapeAttr(t)}">${escapeAttr(t)}</option>`).join("");
}

function updateSectionDetailsFilters(){
  if(!currentSectionDetails) return;

  const cpFilter = document.getElementById("filterCounterparty").value;
  const dateFilter = document.getElementById("filterDate").value;
  const tmplFilter = document.getElementById("filterTemplate").value;

  filteredSectionDocs = currentSectionDetails.docs.filter(d => {
    const meta = MOCK_DOC_METADATA[d.index];
    if(!meta) return true;
    if(cpFilter && meta.counterparty !== cpFilter) return false;
    if(dateFilter && meta.date !== dateFilter) return false;
    if(tmplFilter && meta.template !== tmplFilter) return false;
    return true;
  });

  activeSectionDocIndex = -1;
  renderSectionThumbnails();
  document.getElementById("sectionViewer").innerHTML = '<div class="section-viewer-placeholder">Select a document from the thumbnails to preview</div>';
}

function renderSectionThumbnails(){
  const container = document.getElementById("sectionThumbnails");
  container.innerHTML = filteredSectionDocs.map((d, idx) => `
    <div class="section-thumbnail ${idx === activeSectionDocIndex ? 'active' : ''}" onclick="selectSectionDoc(${idx})">
      <div>Doc ${d.index + 1}</div>
      <div class="section-thumbnail-label">${escapeAttr(d.name)}</div>
    </div>
  `).join("");
}

function selectSectionDoc(idx){
  activeSectionDocIndex = idx;
  renderSectionThumbnails();

  const doc = filteredSectionDocs[idx];
  const docData = DOCS.find(d => d.label === doc.name);
  if(!docData) return;

  const clause = (docData.clauses || []).find(c => c.clauseId === currentSectionDetails.key);
  const content = clause ? `
    <div class="section-viewer-content">
      <div style="font-weight:600;font-size:13px;margin-bottom:8px;">${escapeAttr(clause.heading)}</div>
      <div style="color:var(--ink-soft);">${escapeAttr(clause.text)}</div>
    </div>
  ` : '<div class="section-viewer-placeholder">Section content not available</div>';

  document.getElementById("sectionViewer").innerHTML = content;
}

let sectionEvaluations = {};

function evaluateSection(type){
  if(!currentSectionDetails) return;

  const key = currentSectionDetails.key;

  if(type === 'correct'){
    sectionEvaluations[key] = { type: 'correct' };

    document.getElementById("evalCorrect").classList.add("selected");
    document.getElementById("evalNeedsAdjustment").classList.remove("selected");
    document.getElementById("evalSuccess").style.display = "block";
    document.getElementById("evalAdjustment").style.display = "none";
  } else if(type === 'needs_adjustment'){
    sectionEvaluations[key] = { type: 'needs_adjustment', text: '' };

    document.getElementById("evalNeedsAdjustment").classList.add("selected");
    document.getElementById("evalCorrect").classList.remove("selected");
    document.getElementById("evalSuccess").style.display = "none";
    document.getElementById("evalAdjustment").style.display = "block";
    document.getElementById("evalAdjustmentText").value = '';
    document.getElementById("evalAdjustmentText").focus();
  }
}

function resetEvaluationUI(){
  document.getElementById("evalCorrect").classList.remove("selected");
  document.getElementById("evalNeedsAdjustment").classList.remove("selected");
  document.getElementById("evalSuccess").style.display = "none";
  document.getElementById("evalAdjustment").style.display = "none";
  document.getElementById("evalAdjustmentText").value = "";
  document.getElementById("evalPlan").style.display = "none";

  // Restore previous evaluation if exists
  if(currentSectionDetails && sectionEvaluations[currentSectionDetails.key]){
    const eval = sectionEvaluations[currentSectionDetails.key];
    if(eval.type === 'correct'){
      document.getElementById("evalCorrect").classList.add("selected");
      document.getElementById("evalSuccess").style.display = "block";
    } else if(eval.type === 'needs_adjustment'){
      document.getElementById("evalNeedsAdjustment").classList.add("selected");
      document.getElementById("evalAdjustment").style.display = "block";
      document.getElementById("evalAdjustmentText").value = eval.text || '';
      if(eval.plan){
        document.getElementById("evalPlan").style.display = "block";
        renderAdjustmentPlan(eval.plan);
      }
    }
  }
}

function generateAdjustmentPlan(){
  const input = document.getElementById("evalAdjustmentText").value.trim().toLowerCase();

  // Check for merge/relabel pattern
  const isMergePattern = input.includes('merge') &&
    (input.includes('data management') || input.includes('data governance'));

  let plan;
  if(isMergePattern){
    plan = {
      type: 'merge',
      steps: [
        {
          text: 'Replace section label <span class="eval-plan-step-highlight">"Data Governance"</span> with <span class="eval-plan-step-highlight">"Data Management"</span> for 32 documents'
        },
        {
          text: 'Delete the <span class="eval-plan-step-highlight">"Data Governance"</span> section'
        },
        {
          text: 'Log improved section labeling adjustment as a correction to improve your extraction model'
        }
      ]
    };
  } else {
    plan = {
      type: 'manual_review',
      message: "I couldn't turn this into an action - flag for manual review instead?"
    };
  }

  // Store plan in evaluation
  if(currentSectionDetails){
    sectionEvaluations[currentSectionDetails.key] = {
      type: 'needs_adjustment',
      text: document.getElementById("evalAdjustmentText").value,
      plan: plan
    };
  }

  renderAdjustmentPlan(plan);
  document.getElementById("evalPlan").style.display = "block";
}

function renderAdjustmentPlan(plan){
  const contentEl = document.getElementById("evalPlanContent");
  const actionsEl = document.getElementById("evalPlanActions");

  if(plan.type === 'merge'){
    contentEl.innerHTML = plan.steps.map((step, i) => `
      <div class="eval-plan-step">
        <div class="eval-plan-step-num">${i + 1}</div>
        <div class="eval-plan-step-text">${step.text}</div>
      </div>
    `).join('');

    actionsEl.innerHTML = `
      <button class="eval-plan-btn-primary" onclick="runAdjustmentPlan()">Run plan</button>
      <button class="eval-plan-btn-secondary" onclick="refineAdjustmentPlan()">Refine</button>
      <button class="eval-plan-btn-tertiary" onclick="cancelAdjustmentPlan()">Cancel</button>
    `;
  } else {
    contentEl.innerHTML = `<div class="eval-plan-message">${plan.message}</div>`;
    actionsEl.innerHTML = `
      <button class="eval-plan-btn-primary" onclick="flagForReview()">Flag for review</button>
      <button class="eval-plan-btn-tertiary" onclick="cancelAdjustmentPlan()">Cancel</button>
    `;
  }
}

function runAdjustmentPlan(){
  // Set the flag to merge data governance with data management
  dataGovernanceMerged = true;

  // Increment correction count
  correctionCount++;
  pendingCorrections++;

  // Add rule to timeline
  addModelRule('Any section regarding practices governing <span class="timeline-rule-highlight">collection, use, storage, and disposal of shared data</span> should be labeled as <span class="timeline-rule-highlight">Data Management</span>');

  // Re-render the batch view to update the structure summary
  renderBatchView();

  // Close the section details pane
  closeSectionDetails();

  // Update the correction summary text in the folder view
  updateCorrectionSummaryText();
}

function refineAdjustmentPlan(){
  document.getElementById("evalPlan").style.display = "none";
  document.getElementById("evalAdjustmentText").focus();
}

function cancelAdjustmentPlan(){
  document.getElementById("evalPlan").style.display = "none";
  if(currentSectionDetails && sectionEvaluations[currentSectionDetails.key]){
    delete sectionEvaluations[currentSectionDetails.key].plan;
  }
}

function flagForReview(){
  // Placeholder for flagging
  console.log("Flagging for manual review...");
}

function setTopbarMode(mode){
  const isFolder = mode === "folder";
  document.getElementById("docBreadcrumb").style.display = isFolder ? "none" : "flex";
  document.getElementById("docActions").style.display = isFolder ? "none" : "flex";
  document.getElementById("folderActions").style.display = isFolder ? "flex" : "none";
  document.getElementById("docTitle").textContent = isFolder ? "MSAs" : DOCS[activeFileIndex].label;
  document.getElementById("folderSubbar").style.display = isFolder ? "block" : "none";
  if(isFolder){ updateCorrectionSummaryText(); }
}

function updateCorrectionSummaryText(){
  const el = document.getElementById("modelRulesSummary");
  if(el){ el.textContent = correctionCount + " new rule" + (correctionCount === 1 ? "" : "s") + ". Next model retrain: Friday"; }
}

let modelRulesExpanded = false;
const modelRulesTimeline = [];
let proposedRules = [];
let currentProposedRuleIndex = 0;

function toggleModelRules(){
  modelRulesExpanded = !modelRulesExpanded;
  const timeline = document.getElementById("modelRulesTimeline");
  const caret = document.getElementById("modelRulesCaret");

  timeline.style.display = modelRulesExpanded ? "block" : "none";
  caret.classList.toggle("open", modelRulesExpanded);

  if(modelRulesExpanded){
    if(proposedRules.length > 0){
      document.getElementById("modelRulesProposed").style.display = "block";
      renderProposedRuleCarousel();
    }
    if(modelRulesTimeline.length > 0){
      renderModelRulesTimeline();
    }
  }
}

function initializeProposedRules(){
  proposedRules = [
    {
      text: "Sections describing contractor independence and non-employment status should be labeled as Independent Contractor",
      documents: [
        { index: 0, name: "MSA_001" },
        { index: 4, name: "MSA_004" },
        { index: 14, name: "MSA_014" }
      ],
      count: 12
    },
    {
      text: "Clauses defining audit rights and record retention requirements should be labeled as Audit",
      documents: [
        { index: 0, name: "MSA_001" },
        { index: 4, name: "MSA_004" }
      ],
      count: 8
    },
    {
      text: "Provisions regarding payment terms, invoicing, and compensation should be labeled as Payment",
      documents: [
        { index: 0, name: "MSA_001" },
        { index: 14, name: "MSA_014" }
      ],
      count: 15
    }
  ];

  const flag = document.getElementById("modelRulesFlag");
  if(flag && proposedRules.length > 0){
    flag.textContent = `${proposedRules.length} rule${proposedRules.length === 1 ? '' : 's'} ready for review`;
    flag.style.display = "inline-block";
  }
}

function renderProposedRuleCarousel(){
  if(proposedRules.length === 0){
    document.getElementById("modelRulesProposed").style.display = "none";
    return;
  }

  const rule = proposedRules[currentProposedRuleIndex];
  const card = document.getElementById("proposedRuleCard");

  const docLinks = rule.documents.map(d =>
    `<a href="#" class="proposed-rule-doc-link" onclick="event.preventDefault();openDocFromBatch(${d.index})">${escapeAttr(d.name)}</a>`
  ).join(', ');

  card.innerHTML = `
    <div class="proposed-rule-header">Proposed rule:</div>
    <div class="proposed-rule-text">${rule.text}</div>
    <div class="proposed-rule-evidence">
      Similar correction made in ${rule.count} documents: ${docLinks}
    </div>
    <div class="proposed-rule-viewer">
      <div class="proposed-rule-thumbnails">
        ${rule.documents.map((d, idx) => `
          <div class="proposed-rule-thumb ${idx === 0 ? 'active' : ''}" onclick="selectProposedRuleDoc(${idx})">
            Doc ${d.index + 1}
          </div>
        `).join('')}
      </div>
      <div class="proposed-rule-viewer-content" id="proposedRuleViewerContent">
        Select a document to preview
      </div>
    </div>
    <div class="proposed-rule-actions">
      <button class="proposed-rule-btn-save" onclick="saveProposedRule(${currentProposedRuleIndex})">Save rule</button>
      <button class="proposed-rule-btn-refine" onclick="refineProposedRule(${currentProposedRuleIndex})">Refine</button>
      <button class="proposed-rule-btn-dismiss" onclick="dismissProposedRule(${currentProposedRuleIndex})">Dismiss</button>
    </div>
  `;

  // Update carousel navigation
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");

  if(proposedRules.length > 1){
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
    prevBtn.disabled = currentProposedRuleIndex === 0;
    nextBtn.disabled = currentProposedRuleIndex === proposedRules.length - 1;
  } else {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  }

  // Update indicators
  const indicators = document.getElementById("carouselIndicators");
  indicators.innerHTML = proposedRules.map((_, idx) =>
    `<div class="carousel-indicator ${idx === currentProposedRuleIndex ? 'active' : ''}" onclick="goToProposedRule(${idx})"></div>`
  ).join('');
}

function prevProposedRule(){
  if(currentProposedRuleIndex > 0){
    currentProposedRuleIndex--;
    renderProposedRuleCarousel();
  }
}

function nextProposedRule(){
  if(currentProposedRuleIndex < proposedRules.length - 1){
    currentProposedRuleIndex++;
    renderProposedRuleCarousel();
  }
}

function goToProposedRule(index){
  currentProposedRuleIndex = index;
  renderProposedRuleCarousel();
}

function selectProposedRuleDoc(docIndex){
  // Update active thumbnail
  document.querySelectorAll('.proposed-rule-thumb').forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === docIndex);
  });

  // Show preview (mock content for now)
  const viewer = document.getElementById('proposedRuleViewerContent');
  viewer.textContent = 'Document preview would appear here';
}

function saveProposedRule(index){
  const rule = proposedRules[index];

  // Add to timeline
  addModelRule(rule.text);
  correctionCount++;
  updateCorrectionSummaryText();

  // Remove from proposed
  proposedRules.splice(index, 1);

  // Update flag
  const flag = document.getElementById("modelRulesFlag");
  if(proposedRules.length === 0){
    flag.style.display = "none";
    document.getElementById("modelRulesProposed").style.display = "none";
  } else {
    flag.textContent = `${proposedRules.length} rule${proposedRules.length === 1 ? '' : 's'} ready for review`;
    currentProposedRuleIndex = Math.min(currentProposedRuleIndex, proposedRules.length - 1);
    renderProposedRuleCarousel();
  }
}

function refineProposedRule(index){
  // Placeholder for refine functionality
  console.log("Refining proposed rule:", index);
}

function dismissProposedRule(index){
  proposedRules.splice(index, 1);

  const flag = document.getElementById("modelRulesFlag");
  if(proposedRules.length === 0){
    flag.style.display = "none";
    document.getElementById("modelRulesProposed").style.display = "none";
  } else {
    flag.textContent = `${proposedRules.length} rule${proposedRules.length === 1 ? '' : 's'} ready for review`;
    currentProposedRuleIndex = Math.min(currentProposedRuleIndex, proposedRules.length - 1);
    renderProposedRuleCarousel();
  }
}

function addModelRule(ruleText, metadata = {}){
  const rule = {
    text: ruleText,
    timestamp: new Date().toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }),
    ...metadata
  };
  modelRulesTimeline.unshift(rule); // Add to beginning

  if(modelRulesExpanded){
    renderModelRulesTimeline();
  }
}

function renderModelRulesTimeline(){
  const container = document.getElementById("modelRulesTimelineContent");

  if(modelRulesTimeline.length === 0){
    container.innerHTML = '<div style="color:var(--ink-soft);font-size:12.5px;text-align:center;padding:20px 0;">No rules added yet</div>';
    return;
  }

  container.innerHTML = modelRulesTimeline.map((rule, idx) => `
    <div class="timeline-item">
      <div class="timeline-dot">${modelRulesTimeline.length - idx}</div>
      <div class="timeline-content">
        <div class="timeline-rule-text">${rule.text}</div>
        <div class="timeline-meta">${rule.timestamp}</div>
      </div>
    </div>
  `).join('');
}

function goBack(){
  const batchVisible = document.getElementById("batchView").style.display !== "none";
  if(batchVisible) return;
  document.getElementById("singleView").style.display = "none";
  renderBatchView();
  document.getElementById("batchView").style.display = "flex";
  setTopbarMode("folder");
}

function openDocFromBatch(index, sectionKey){
  let targetId = "sample-msa";
  if(index === 14){ targetId = "msa-014"; }
  else if(index === 4){ targetId = "msa-004"; }
  const idx = DOCS.findIndex(d => d.id === targetId);
  if(idx !== -1){
    activeFileIndex = idx;
    showActiveDoc();
    loadSchemaForActiveDoc();
    computeResults();
  }
  exitBatchView();
  if(sectionKey){
    setTimeout(() => scrollToSection(sectionKey), 60);
  } else if(targetId === "msa-014"){
    setTimeout(scrollToAuditClause, 60);
  }
}

function scrollToSection(sectionKey){
  const scrollContainer = document.querySelector(".doc-scroll");
  if(!scrollContainer) return;

  // Try to find element with matching data-clause-id attribute
  let target = scrollContainer.querySelector(`[data-clause-id="${sectionKey}"]`);

  // If not found and it's data_governance, also try the auditClauseBar
  if(!target && sectionKey === "data_governance"){
    target = document.getElementById("auditClauseBar");
  }

  if(!target) return;

  const containerRect = scrollContainer.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const delta = targetRect.top - containerRect.top - 16;
  scrollContainer.scrollTo({ top: scrollContainer.scrollTop + delta, behavior: "smooth" });
}

function scrollToAuditClause(){
  scrollToSection("ai_usage");
}

let auditResolved = null;
let promptBeforeAIChange = null;
let dataGovernanceMerged = false;
let msa004MovedToManagement = false;
let correctionCount = 0;
let pendingCorrections = 0;
let typeEditTarget = null;
let redrawState = null;
let auditAutoHideTimer = null;

function updateAuditClauseMarker(){
  const bar = document.getElementById("auditClauseBar");
  if(!bar) return;
  bar.classList.remove("audit-flag-target", "linked");
  if(auditResolved === null){
    bar.classList.add("audit-flag-target");
  }
}

function updateAuditCallout(){
  const callout = document.getElementById("auditCallout");
  const doc = DOCS[activeFileIndex];
  updateAuditClauseMarker();
  clearTimeout(auditAutoHideTimer);

  if(doc.id !== "msa-014" || auditResolved === "dismissed"){
    callout.style.display = "none";
    return;
  }

  callout.style.display = "block";
  if(auditResolved){
    callout.classList.add("resolved");
    callout.innerHTML = auditResolved === "schema"
      ? `<div class="audit-resolved">&#10003; Schema updated &#8212; the "links" field will now capture Exhibit references for the AI Usage clause across all documents.</div>`
      : `<div class="audit-resolved">&#10003; Accepted for MSA_014.pdf only &#8212; "Exhibit A" has been linked to this document's AI Usage clause.</div>`;
    auditAutoHideTimer = setTimeout(() => { callout.style.display = "none"; }, 5000);
    return;
  }
  callout.classList.remove("resolved");
  callout.innerHTML = `
    <button class="audit-close" onclick="dismissAudit()" aria-label="Dismiss this flag">
      <span class="audit-close-icon">&#10005;</span>
      <span class="audit-close-text">Dismiss</span>
    </button>
    <div class="audit-callout-head">
      <span class="audit-icon">&#128279;</span>
      <div>
        <div class="audit-title">Possible link</div>
        <p class="audit-desc">This clause references <b>&#8220;Exhibit A&#8221;</b> but no exhibit was linked during extraction &#8212; the <code>links</code> field came back empty. Link it now?</p>
      </div>
    </div>
    <div class="audit-actions">
      <button class="btn btn-dark" onclick="resolveAudit('doc', this)">Accept</button>
    </div>`;
}

function dismissAudit(){
  auditResolved = "dismissed";
  const target = document.getElementById("auditHighlightTarget");
  if(target){ target.classList.remove("audit-highlight", "linked"); }
  updateAuditCallout();
}

function resolveAudit(scope, btn){
  if(scope === "doc" && btn){
    btn.classList.add("btn-success-flash");
    btn.disabled = true;
    setTimeout(() => finalizeAuditResolution(scope), 550);
  } else {
    finalizeAuditResolution(scope);
  }
}

function finalizeAuditResolution(scope){
  auditResolved = scope;

  const clause = (DOCS[activeFileIndex].clauses || []).find(c => c.clauseId === "ai_usage");
  if(clause){ clause.links = ["Exhibit A"]; }

  const target = document.getElementById("auditHighlightTarget");
  if(target){ target.classList.remove("audit-highlight", "linked"); }

  if(scope === "schema"){
    applyConfigRuleForEdit("Add any references to Exhibits or red lines as links to each clause.");
  }

  updateAuditCallout();
  computeResults();
}

function revertPromptChange(){
  if(promptBeforeAIChange === null) return;
  const ta = document.getElementById("systemPrompt");
  ta.value = promptBeforeAIChange;
  promptBeforeAIChange = null;
  document.getElementById("promptChangeNotice").style.display = "none";
}

function runBatchExtraction(){
  document.getElementById("singleView").style.display = "none";
  document.getElementById("batchView").style.display = "none";
  document.getElementById("batchLoading").style.display = "flex";
  setTimeout(() => {
    if(pendingCorrections > 0){
      correctionCount += pendingCorrections;
      pendingCorrections = 0;
    }
    renderBatchView();
    document.getElementById("batchLoading").style.display = "none";
    document.getElementById("batchView").style.display = "flex";
    setTopbarMode("folder");
  }, 1400);
}

function exitBatchView(){
  document.getElementById("batchView").style.display = "none";
  document.getElementById("singleView").style.display = "flex";
  setTopbarMode("document");
}

function dismissUploadModal(){
  document.getElementById("uploadModal").style.display = "none";
}

let resetArmed = false;
let resetArmTimer = null;

function handleResetClick(btn){
  if(!resetArmed){
    resetArmed = true;
    btn.classList.add("armed");
    document.getElementById("resetBtnLabel").textContent = "Click again to confirm";
    clearTimeout(resetArmTimer);
    resetArmTimer = setTimeout(() => {
      resetArmed = false;
      btn.classList.remove("armed");
      document.getElementById("resetBtnLabel").textContent = "Reset for prototype";
    }, 3000);
    return;
  }
  clearTimeout(resetArmTimer);
  resetArmed = false;
  btn.classList.remove("armed");
  resetPrototype();
}

function resetPrototype(){
  clearTimeout(auditAutoHideTimer);

  activeFileIndex = 0;
  Object.keys(docSchemas).forEach(k => delete docSchemas[k]);
  auditResolved = null;
  resultsViewMode = "visual";
  batchData = null;
  dataGovernanceMerged = false;
  msa004MovedToManagement = false;
  correctionCount = 0;
  pendingCorrections = 0;
  modelRulesTimeline.length = 0;
  modelRulesExpanded = false;
  currentProposedRuleIndex = 0;
  initializeProposedRules();

  const msa004 = DOCS.find(d => d.id === "msa-004");
  if(msa004){
    const govClause = (msa004.clauses || []).find(c => c.clauseId === "data_governance");
    if(govClause){
      govClause.clauseType = "Data Governance";
      govClause.heading = "DATA GOVERNANCE";
      govClause.text = "The parties agree to implement reasonable data management practices governing the collection, use, storage, and disposal of data shared under this Agreement, including classification of data, restriction of access, and retention periods in accordance with applicable law.";
    }
  }

  const msa014 = DOCS.find(d => d.id === "msa-014");
  if(msa014){
    const aiClause = (msa014.clauses || []).find(c => c.clauseId === "ai_usage");
    if(aiClause){ aiClause.links = []; }
    const icClause = (msa014.clauses || []).find(c => c.clauseId === "independent_contractor");
    if(icClause){
      icClause.text = "Company and Contractor expressly agree that Contractor is an independent contractor as to all Work performed under this Agreement.";
    }
  }

  const target = document.getElementById("auditHighlightTarget");
  if(target){ target.classList.add("audit-highlight"); target.classList.remove("linked"); }

  const orphanPara = document.getElementById("msa014OrphanPara");
  if(orphanPara){
    orphanPara.classList.remove("clause-para", "redraw-artifact-hidden");
    orphanPara.removeAttribute("data-clause-parent");
  }
  const pageNum = document.getElementById("msa014PageNum");
  if(pageNum){ pageNum.classList.remove("redraw-artifact-hidden"); }
  const pageRule = document.getElementById("msa014PageRule");
  if(pageRule){ pageRule.classList.remove("redraw-artifact-hidden"); }

  promptBeforeAIChange = null;
  const notice = document.getElementById("promptChangeNotice");
  notice.style.display = "none";
  notice.classList.remove("flash");

  const ta = document.getElementById("systemPrompt");
  ta.value = DOCS[0].defaultPrompt;
  ta.classList.remove("prompt-flash");

  document.getElementById("allFiles").checked = false;
  document.getElementById("batchLoading").style.display = "none";
  document.getElementById("batchView").style.display = "none";
  document.getElementById("singleView").style.display = "flex";
  setTopbarMode("document");
  setTab("config");

  typeEditTarget = null;
  exitRedrawMode();

  document.getElementById("uploadModal").style.display = "flex";
  loadSchemaForActiveDoc();
  showActiveDoc();
  computeResults();

  document.getElementById("resetBtnLabel").textContent = "Reset for prototype";
}

/* ---- Edit menu (type to edit / redraw bounding box) ---- */

function toggleEditMenu(btn){
  const menu = btn.nextElementSibling;
  const isOpen = menu.style.display === "block";
  closeAllEditMenus();
  if(!isOpen){
    menu.style.display = "block";
    btn.classList.add("menu-open");
  }
}
function closeAllEditMenus(){
  document.querySelectorAll(".edit-menu").forEach(m => m.style.display = "none");
  document.querySelectorAll(".edit-icon-btn").forEach(b => b.classList.remove("menu-open"));
}
document.addEventListener("click", closeAllEditMenus);

function menuTypeEdit(menuBtn){
  const iconBtn = menuBtn.closest(".edit-control").querySelector(".edit-icon-btn");
  const kind = iconBtn.dataset.editKind;
  const id = iconBtn.dataset.editId;
  const key = iconBtn.dataset.editKey;
  closeAllEditMenus();
  redrawState = null;
  typeEditTarget = { kind, id, key };
  computeResults();
}

function cancelTypeEdit(){
  typeEditTarget = null;
  computeResults();
}

function saveTypeEdit(){
  const ta = document.getElementById("editTextarea");
  if(ta && typeEditTarget && typeEditTarget.kind === "field"){
    setFieldValue(typeEditTarget.id, typeEditTarget.key, ta.value);
  }
  typeEditTarget = null;
  computeResults();
}

function applyConfigRuleForEdit(ruleText){
  const ta = document.getElementById("systemPrompt");
  if(!ta.value.includes(ruleText)){
    promptBeforeAIChange = ta.value;
    ta.value = ta.value.replace(/\s+$/, "") + "\n" + ruleText;
    pendingCorrections += 32;
  }
  setTab("config");
  ta.classList.remove("prompt-flash");
  void ta.offsetWidth;
  ta.classList.add("prompt-flash");
  ta.scrollTop = ta.scrollHeight;

  const notice = document.getElementById("promptChangeNotice");
  document.getElementById("promptChangeTime").textContent =
    new Date().toLocaleTimeString([], {hour:"numeric", minute:"2-digit"});
  notice.style.display = "flex";
  notice.classList.remove("flash");
  void notice.offsetWidth;
  notice.classList.add("flash");
}

function saveClauseEdit(scope){
  if(!typeEditTarget || typeEditTarget.kind !== "clause"){ cancelTypeEdit(); return; }
  const clause = (DOCS[activeFileIndex].clauses || []).find(c => c.clauseId === typeEditTarget.id);
  const typeInput = document.getElementById("editClauseType");
  const headingInput = document.getElementById("editHeading");
  const textArea = document.getElementById("editTextarea");

  const oldType = clause ? clause.clauseType : null;
  const newType = typeInput ? stripCountSuffix(typeInput.value) : oldType;
  const isGovToMgmt = DOCS[activeFileIndex].id === "msa-004" && oldType === "Data Governance" && newType === "Data Management";

  if(clause){
    if(typeInput){ clause.clauseType = newType; }
    if(headingInput){ clause.heading = headingInput.value; }
    if(textArea){ clause.text = textArea.value; }
  }

  if(isGovToMgmt){
    msa004MovedToManagement = true;
  }

  if(scope === "schema"){
    const ruleText = isGovToMgmt
      ? "Clauses that mention Data Governance, Data Management, and discuss the collection, use, storage, and disposal of data should be have clauseType = Data Management"
      : "Apply manual corrections to a clause's section type, heading, and text as authoritative for future extractions.";
    applyConfigRuleForEdit(ruleText);
    if(isGovToMgmt){
      dataGovernanceMerged = true;
    }
  }

  typeEditTarget = null;
  computeResults();
}

function saveRowEdit(btn){
  const form = btn.closest(".edit-row-form");
  if(form){
    form.querySelectorAll(".edit-row-input").forEach(input => {
      setFieldValue(input.dataset.rowName, input.dataset.rowKey, input.value);
    });
  }
  typeEditTarget = null;
  computeResults();
}

function setFieldValue(fieldName, existingKey, value){
  const doc = DOCS[activeFileIndex];
  let key = existingKey;
  if(!key){
    key = normalize(fieldName);
    if(!doc.aliases[key]){ doc.aliases[key] = [key]; }
  }
  doc.mockData[key] = value;
}

/* ---- Redraw bounding box (mocked canvas interaction) ---- */

function menuRedraw(menuBtn){
  const iconBtn = menuBtn.closest(".edit-control").querySelector(".edit-icon-btn");
  const kind = iconBtn.dataset.editKind;
  const id = iconBtn.dataset.editId;
  const key = iconBtn.dataset.editKey;
  closeAllEditMenus();
  typeEditTarget = null;
  computeResults();
  startRedraw(kind, id, key);
}

function collectRedrawExpansion(anchorEl){
  const elements = [anchorEl];
  const hidden = [];
  let node = anchorEl.nextElementSibling;
  while(node){
    if(node.classList.contains("clause-head") || node.classList.contains("recital-block")) break;
    if(node.classList.contains("legal-page-num") || node.classList.contains("legal-page-rule")){
      hidden.push(node);
      node = node.nextElementSibling;
      continue;
    }
    if(node.tagName === "P" && !node.classList.contains("legal-note")){
      elements.push(node);
      node = node.nextElementSibling;
      continue;
    }
    break;
  }
  return { elements, hidden };
}

function startRedraw(kind, id, key){
  const activeEl = document.getElementById(DOCS[activeFileIndex].elId);
  let anchorEl = null;
  if(kind === "clause"){
    anchorEl = activeEl.querySelector('.clause-para[data-clause-parent="' + id + '"]');
  } else if(kind === "field" && key){
    anchorEl = activeEl.querySelector('[data-key="' + key + '"]');
  }
  if(!anchorEl){
    anchorEl = activeEl.querySelector(".clause-para") || activeEl.querySelector("p");
  }
  if(!anchorEl) return;

  const expansion = collectRedrawExpansion(anchorEl);
  redrawState = { kind, id, key, anchorEl, expansion, expanded: false };

  const overlay = document.createElement("div");
  overlay.id = "redrawOverlayBox";
  overlay.className = "redraw-overlay-box";
  overlay.innerHTML = `<div class="redraw-handle tl"></div><div class="redraw-handle br"></div>`;
  overlay.onclick = toggleRedrawExpand;
  activeEl.appendChild(overlay);

  positionRedrawOverlay([anchorEl]);
  document.getElementById("redrawBanner").style.display = "block";
}

function positionRedrawOverlay(elements){
  const overlay = document.getElementById("redrawOverlayBox");
  const sheet = document.getElementById(DOCS[activeFileIndex].elId);
  if(!overlay || !sheet || elements.length === 0) return;
  const sheetRect = sheet.getBoundingClientRect();
  let top = Infinity, left = Infinity, right = -Infinity, bottom = -Infinity;
  elements.forEach(el => {
    const r = el.getBoundingClientRect();
    top = Math.min(top, r.top);
    left = Math.min(left, r.left);
    right = Math.max(right, r.right);
    bottom = Math.max(bottom, r.bottom);
  });
  overlay.style.top = Math.round(top - sheetRect.top - 6) + "px";
  overlay.style.left = Math.round(left - sheetRect.left - 8) + "px";
  overlay.style.width = Math.round((right - left) + 16) + "px";
  overlay.style.height = Math.round((bottom - top) + 12) + "px";

  overlay.querySelectorAll(".redraw-divider").forEach(d => d.remove());
  if(elements.length > 1){
    const firstBottom = elements[0].getBoundingClientRect().bottom;
    const divider = document.createElement("div");
    divider.className = "redraw-divider";
    divider.style.top = Math.round(firstBottom - top + 6) + "px";
    overlay.appendChild(divider);
  }
}

function toggleRedrawExpand(){
  if(!redrawState) return;
  redrawState.expanded = !redrawState.expanded;
  const overlay = document.getElementById("redrawOverlayBox");
  overlay.classList.toggle("solid", redrawState.expanded);
  redrawState.expansion.hidden.forEach(el => el.classList.toggle("redraw-artifact-hidden", redrawState.expanded));
  const elements = redrawState.expanded ? redrawState.expansion.elements : [redrawState.anchorEl];
  positionRedrawOverlay(elements);
}

function exitRedrawMode(){
  const overlay = document.getElementById("redrawOverlayBox");
  if(overlay){ overlay.remove(); }
  if(redrawState){
    redrawState.expansion.hidden.forEach(el => el.classList.remove("redraw-artifact-hidden"));
  }
  const banner = document.getElementById("redrawBanner");
  if(banner){ banner.style.display = "none"; }
  redrawState = null;
}

function applyRedrawResult(scope){
  if(!redrawState){ exitRedrawMode(); return; }
  const { kind, id, key, expanded, expansion } = redrawState;

  if(scope){
    if(expanded){
      const combinedText = expansion.elements.map(el => el.textContent.trim().replace(/\s+/g, " ")).join(" ");
      if(kind === "clause"){
        const clause = (DOCS[activeFileIndex].clauses || []).find(c => c.clauseId === id);
        if(clause){ clause.text = combinedText; }
        expansion.elements.forEach(el => {
          if(!el.classList.contains("clause-para")){
            el.classList.add("clause-para");
            el.setAttribute("data-clause-parent", id);
          }
        });
        expansion.hidden.forEach(el => el.classList.add("redraw-artifact-hidden"));
      } else if(kind === "field" || kind === "row"){
        setFieldValue(id, key, combinedText);
      }
    }

    if(scope === "schema"){
      applyConfigRuleForEdit("When a clause's text is cut off by a page break, include the continuation paragraph.");
    }
  }

  exitRedrawMode();
  computeResults();
}

renderSchema();
showActiveDoc();
loadSchemaForActiveDoc();
computeResults();
document.getElementById("allFilesLabel").textContent = "All files (" + generateBatchData().total + ")";
initializeProposedRules();
