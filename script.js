/* =========================================
   1. DONNÉES (DATA)
   ========================================= */
const offersData = [
    {
        id: 1,
        ref: "LAF-26-101",
        date: "19/01/2026",
        name: "Château Lafite Rothschild",
        vintage: "2001",
        region: "Pauillac, 1er Grand Cru Classé",
        category: "VIN",
        price: 980.00,
        qty: 12,
        unit: "Bouteille (75cl)",
        regieDisplay: "CRD",
        packaging: "CB6",
        guaranteeBand: "NC",
        location: "Bordeaux",
        conditionGeneral: "Parfait",
        level: "Bon",
        conditionCork: "Parfait",
        conditionLabel: "Parfait",
        sellerType: "Courtier Certifié",
        status: "DISPONIBLE",
        brokerNote: "Caisse bois d'origine jamais ouverte. Provenance directe château via négoce historique.",
        contacted: false,
        contactedDate: null,
        waitlisted: false,
        photos: ["LR1.jpg"]
    },
    {
        id: 2,
        ref: "KRU-26-055",
        date: "18/01/2026",
        name: "Krug Clos d'Ambonnay",
        vintage: "2000",
        region: "Champagne Grand Cru",
        category: "CHAMPAGNE",
        price: 2450.00,
        qty: 3,
        unit: "Bouteille (75cl)",
        regieDisplay: "CRD",
        packaging: "CB1",
        guaranteeBand: "Intacte",
        location: "Reims",
        conditionGeneral: "Excellent",
        level: "Parfait",
        conditionCork: "Parfait",
        conditionLabel: "Parfait",
        sellerType: "Négociant Partenaire",
        status: "A L'ETUDE",
        brokerNote: "Rarissime Blanc de Noirs mil. 2000. Coffret individuel en parfait état.",
        contacted: false,
        contactedDate: null,
        waitlisted: true,
        photos: ["K1.jpeg"]
    },
    {
        id: 3,
        ref: "MAC-26-089",
        date: "15/01/2026",
        name: "The Macallan Sherry Oak 25 Years Old",
        vintage: "NV",
        region: "Speyside, Écosse",
        category: "SPIRITUEUX",
        price: 1850.00,
        qty: 2,
        unit: "Bouteille (70cl)",
        regieDisplay: "NON CRD",
        packaging: "Coffret Bois",
        guaranteeBand: "NC",
        location: "Londres",
        conditionGeneral: "Parfait",
        level: "Parfait",
        conditionCork: "Parfait",
        conditionLabel: "Coin droit légèrement abimé",
        sellerType: "Courtier Certifié",
        status: "DISPONIBLE",
        brokerNote: "Édition 2024. Stocké sous douane à Londres. Inspection vidéo disponible sur demande.",
        contacted: true,
        contactedDate: "16/01",
        waitlisted: false,
        photos: ["M1.webp"]
    },
    {
        id: 4,
        ref: "LEF-26-012",
        date: "12/01/2026",
        name: "Domaine Leflaive, Chevalier-Montrachet",
        vintage: "2020",
        region: "Bourgogne - Côte de Beaune",
        category: "VIN",
        price: 1100.00,
        qty: 6,
        unit: "Bouteille (75cl)",
        regieDisplay: "CRD",
        packaging: "CB6 origine",
        guaranteeBand: "Intacte",
        location: "Beaune",
        conditionGeneral: "Très Bon",
        level: "Parfait",
        conditionCork: "Parfait",
        conditionLabel: "Légèrement tachée (2/6)",
        sellerType: "Négociant Partenaire",
        status: "VENDU",
        brokerNote: "Lot présentant quelques étiquettes tachées par l'humidité. Niveaux parfaits.",
        contacted: false,
        contactedDate: null,
        waitlisted: false,
        photos: ["DL1.jpg", "DL2.jpg"]
    },
    {
        id: 5,
        ref: "HEN-26-204",
        date: "10/01/2026",
        name: "Rémy Martin : Louis XIII",
        vintage: "NV",
        region: "Cognac",
        category: "SPIRITUEUX",
        price: 3150.00,
        qty: 1,
        unit: "Carafe Cristal (70cl)",
        regieDisplay: "CRD",
        packaging: "Coffret Complet",
        guaranteeBand: "Intacte",
        location: "Paris",
        conditionGeneral: "Parfait",
        level: "Parfait",
        conditionCork: "Parfait",
        conditionLabel: "Parfait",
        sellerType: "Courtier Certifié",
        status: "DISPONIBLE",
        brokerNote: "Pièce de collection. Bouteille N°03/200. Bouteille vendue avec tous les certificats. Plus de photos disponibles sur demande.",
        contacted: false,
        contactedDate: null,
        waitlisted: false,
        photos: ["C1.webp", "C2.webp"]
    }
];

const demandsData = [
    {
        id: 101, name: "Château Cheval Blanc", vintage: "1988", format: "Jéroboam",
        budget: "NC", context: "Pour commande client ferme.", user: "Cave Prestige Lyon",
        contacted: false, contactedDate: null
    },
    {
        id: 102, name: "Petrus", vintage: "2000", format: "Bouteille (75cl)",
        budget: "Max 4500€ / col", context: "Recherche stock.", user: "Négociant Bordeaux",
        contacted: false, contactedDate: null
    }
];

/* =========================================
   2. STATE & NAV
   ========================================= */
let currentTab = 'OFFRES';
let currentItem = null;
let statusFilter = 'ALL'; 

function switchTab(tabName) {
    currentTab = tabName;
    currentItem = null;
    const btnOffers = document.getElementById('tabOffers');
    const btnDemands = document.getElementById('tabDemands');
    const statusFiltersDiv = document.getElementById('statusFilters');
    
    if(tabName === 'OFFRES') {
        btnOffers.className = "flex-1 py-1.5 text-xs font-semibold rounded-md shadow-sm bg-white text-gray-900 transition-all text-center border border-gray-200";
        btnDemands.className = "flex-1 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 transition-all text-center";
        statusFiltersDiv.classList.remove('hidden');
    } else {
        btnDemands.className = "flex-1 py-1.5 text-xs font-semibold rounded-md shadow-sm bg-white text-indigo-900 transition-all text-center border border-indigo-100";
        btnOffers.className = "flex-1 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 transition-all text-center";
        statusFiltersDiv.classList.add('hidden');
    }
    document.getElementById('detailContent').innerHTML = `<div class="h-full flex flex-col items-center justify-center text-gray-400"><p class="text-sm">Sélectionnez une ligne</p></div>`;
    document.getElementById('detailHeaderTools').classList.add('hidden');
    document.getElementById('detailActions').classList.add('hidden');
    renderList();
}

function filterStatus(status) {
    statusFilter = status;
    const pills = document.querySelectorAll('.status-pill');
    pills.forEach(pill => {
        pill.className = "status-pill px-3 py-1 rounded-full text-[10px] font-bold uppercase border border-gray-200 text-gray-500 hover:border-gray-300 transition-colors";
        if(pill.innerText === getStatusLabel(status).toUpperCase() || (status==='ALL' && pill.innerText==='TOUT')) {
            pill.className = "status-pill active px-3 py-1 rounded-full text-[10px] font-bold uppercase border border-slate-800 bg-slate-800 text-white transition-colors";
        }
    });
    renderList();
}
function getStatusLabel(code) {
    if(code === 'ALL') return 'Tout';
    if(code === 'DISPONIBLE') return 'Disponible';
    if(code === 'ETUDE') return 'À l\'étude';
    if(code === 'VENDU') return 'Vendu';
    return code;
}

/* =========================================
   3. RENDU LISTE (AVEC OVERLAY TOOLTIP)
   ========================================= */
function renderList() {
    const container = document.getElementById('listContainer');
    const searchVal = document.getElementById('searchInput').value.toLowerCase();
    container.innerHTML = '';
    const data = currentTab === 'OFFRES' ? offersData : demandsData;

    data.forEach(item => {
        const searchStr = (item.name + " " + (item.vintage || '')).toLowerCase();
        if (searchVal && !searchStr.includes(searchVal)) return;

        if (currentTab === 'OFFRES' && statusFilter !== 'ALL') {
            if (statusFilter === 'ETUDE' && item.status !== "A L'ETUDE") return;
            if (statusFilter === 'DISPONIBLE' && item.status !== "DISPONIBLE") return;
            if (statusFilter === 'VENDU' && item.status !== "VENDU") return;
        }

        const card = document.createElement('div');
        
        let activeClass = (currentItem && currentItem.id === item.id) 
            ? (currentTab === 'OFFRES' ? "bg-white border-l-4 border-l-slate-800 shadow-sm z-10 my-1 rounded-r-md" : "bg-white border-l-4 border-l-indigo-600 shadow-sm z-10 my-1 rounded-r-md")
            : "border-l-4 border-l-transparent hover:bg-white hover:shadow-sm my-1 rounded-r-md";

        card.className = `p-4 cursor-pointer transition-all ${activeClass}`;
        
        // --- LE CLIC QUI ÉTAIT PEUT-ÊTRE CASSÉ ---
        card.onclick = () => selectItem(item); 
        // -----------------------------------------

        if (currentTab === 'OFFRES') {
            let badgeClass = "";
            if (item.status === "DISPONIBLE") badgeClass = "bg-green-100 text-green-800";
            else if (item.status === "A L'ETUDE") badgeClass = "bg-[#FFF3DC] text-[#9A6B16]";
            else if (item.status === "VENDU") badgeClass = "bg-gray-100 text-gray-500";

            // Tooltips avec Overlay
            let indicators = '';
            if (item.contacted) {
                indicators = `
                <span onmouseenter="showTooltip(event, 'Intérêt signalé')" onmouseleave="hideTooltip()" class="ml-2 flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 text-blue-600 cursor-pointer hover:bg-blue-100 transition-colors">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </span>`;
            } else if (item.waitlisted) {
                indicators = `
                <span onmouseenter="showTooltip(event, 'Sur liste d\\'attente')" onmouseleave="hideTooltip()" class="ml-2 flex items-center justify-center w-5 h-5 rounded-full bg-amber-50 text-amber-600 border border-amber-100 cursor-pointer hover:bg-amber-100 transition-colors">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </span>`;
            }

            let certifiedIcon = '';
            if(item.sellerType === "Courtier Certifié") {
                certifiedIcon = `<span onmouseenter="showTooltip(event, 'Courtier Certifié')" onmouseleave="hideTooltip()"><svg class="w-4 h-4 text-amber-500 ml-1.5 inline-block" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></span>`;
            }

            const totalPrice = item.price * item.qty;

            card.innerHTML = `
                <div class="flex justify-between items-start mb-2"><div class="flex items-center"><span class="inline-flex items-center px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide ${badgeClass}">${item.status}</span>${indicators}</div><span class="text-xs text-gray-400 font-inter">${item.ref}</span></div>
                <h3 class="text-sm font-bold text-gray-900 leading-tight mb-1 flex items-center">${item.name} ${certifiedIcon}</h3>
                <div class="text-xs text-gray-500 mb-3">${item.vintage} • ${item.region}</div>
                <div class="flex justify-between items-end"><div class="flex gap-1"><span class="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-gray-100 text-gray-600 border border-gray-200">${item.regieDisplay}</span><span class="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-white text-gray-500 border border-gray-200">${item.category}</span></div><div class="text-base font-bold text-gray-900">${totalPrice.toLocaleString('fr-FR')} €</div></div>`;
        } else {
            // DEMANDES
            let indicators = '';
            if (item.contacted) {
                indicators = `
                <span onmouseenter="showTooltip(event, 'Réponse envoyée')" onmouseleave="hideTooltip()" class="ml-2 flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 text-blue-600 cursor-pointer hover:bg-blue-100 transition-colors">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </span>`;
            }
            card.innerHTML = `
                <div class="flex justify-between items-start mb-2"><div class="flex items-center"><span class="inline-flex items-center px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide bg-indigo-100 text-indigo-800">RECHERCHE</span>${indicators}</div></div>
                <h3 class="text-sm font-bold text-gray-900 leading-tight mb-1">${item.name}</h3>
                <div class="text-xs text-gray-500 mb-2">${item.vintage} • ${item.format}</div>
                <div class="text-xs font-medium text-gray-600">Budget: <span class="text-gray-900">${item.budget}</span></div>`;
        }
        container.appendChild(card);
    });
}
function filterList() { renderList(); }

/* =========================================
   4. RENDU DETAIL
   ========================================= */
function selectItem(item) {
    currentItem = item;
    renderList(); 
    if (window.innerWidth < 768) { document.getElementById('offersPanel').classList.add('hidden'); document.getElementById('detailPanel').classList.remove('hidden'); }

    const content = document.getElementById('detailContent');
    const headerTools = document.getElementById('detailHeaderTools');
    const footer = document.getElementById('detailActions');
    content.innerHTML = ''; footer.innerHTML = '';
    
    if (currentTab === 'OFFRES') {
        headerTools.classList.remove('hidden'); footer.classList.remove('hidden');
        renderOfferDetail(item, content); renderOfferFooter(item, footer);
        document.getElementById('detailRef').innerText = `Réf: ${item.ref} • Ajouté le ${item.date}`;
    } else {
        headerTools.classList.add('hidden'); footer.classList.remove('hidden');
        renderDemandDetail(item, content); renderDemandFooter(item, footer);
    }
}

function renderOfferDetail(offer, container) {
    const totalPrice = offer.price * offer.qty;

    // --- LOGIQUE GALERIE PHOTOS ---
    let photosHTML = '';
    if (offer.photos && offer.photos.length > 0) {
        let mainImage = `
        <div class="w-full h-80 bg-white border-b border-gray-100 flex items-center justify-center p-4 relative group cursor-zoom-in" onclick="openLightbox(0)">
            <img src="${offer.photos[0]}" alt="${offer.name}" class="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105">
            <div class="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Agrandir 🔍</div>
        </div>`;
        let thumbnails = '';
        if (offer.photos.length > 1) {
            thumbnails = `<div class="flex gap-2 px-6 py-3 bg-gray-50 border-b border-gray-100 overflow-x-auto">`;
            offer.photos.forEach((photoSrc, i) => {
                thumbnails += `<div class="w-12 h-12 border border-gray-200 rounded-md overflow-hidden cursor-pointer hover:border-indigo-500 hover:ring-2 ring-indigo-100 transition-all bg-white shrink-0" onclick="openLightbox(${i})"><img src="${photoSrc}" class="w-full h-full object-cover"></div>`;
            });
            thumbnails += `</div>`;
        }
        photosHTML = mainImage + thumbnails;
    } else {
        photosHTML = `<div class="w-full h-64 bg-gray-50 border-b border-gray-200 flex items-center justify-center text-gray-400 italic text-sm">Aucun visuel disponible pour cette offre</div>`;
    }
    
    // --- BADGE VENDEUR (Uniquement pour le tableau technique en bas) ---
    // J'ai SUPPRIMÉ la partie headerBadge qui ajoutait "Certifié" dans le titre
    let sellerHTML = offer.sellerType || '-';

    if(offer.sellerType === "Courtier Certifié") {
        sellerHTML = `
        <div class="flex items-center justify-end gap-1.5 text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-md inline-block">
            <svg class="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            <span class="font-bold text-[11px] uppercase tracking-wide">Courtier Certifié</span>
        </div>`;
    }

    container.innerHTML = `
        ${photosHTML}
        <div class="max-w-5xl mx-auto px-6 py-6">
            <div class="flex flex-col md:flex-row justify-between items-start mb-6 gap-6 border-b border-gray-100 pb-6">
                <div class="flex-1">
                    <h1 class="text-3xl font-bold text-gray-900 mb-2 tracking-tight leading-tight">
                        ${offer.name}
                    </h1>
                    <div class="text-xl font-light text-gray-500 mb-4">${offer.vintage} • ${offer.region}</div>
                    <div class="flex gap-2"><span class="inline-flex items-center px-2.5 py-1 bg-gray-100 text-gray-600 text-[11px] font-bold uppercase tracking-wide rounded border border-gray-200">${offer.category}</span><span class="inline-flex items-center px-2.5 py-1 bg-gray-100 text-gray-600 text-[11px] font-bold uppercase tracking-wide rounded border border-gray-200">${offer.regieDisplay}</span></div>
                </div>
                <div class="bg-white border border-slate-200 rounded-xl p-5 text-right shadow-sm min-w-[250px]">
                    <div class="text-4xl font-bold text-slate-900 tracking-tight leading-none mb-2">${totalPrice.toLocaleString('fr-FR')} € <span class="text-xl text-gray-400 font-normal">HT</span></div>
                    <div class="text-sm font-medium text-gray-500">${offer.price.toLocaleString('fr-FR')} € HT / col</div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mb-8">
                <div><h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Logistique</h3><dl class="grid grid-cols-2 gap-3 text-sm"><dt class="text-gray-500">Format</dt><dd class="font-medium text-gray-900 text-right">${offer.unit}</dd><dt class="text-gray-500">Quantité</dt><dd class="font-medium text-gray-900 text-right">${offer.qty}</dd><dt class="text-gray-500">Caissage</dt><dd class="font-medium text-gray-900 text-right">${offer.packaging}</dd><dt class="text-gray-500">Bande de garantie</dt><dd class="font-medium text-gray-900 text-right">${offer.guaranteeBand || '-'}</dd><dt class="text-gray-500">Localisation</dt><dd class="font-medium text-gray-900 text-right">${offer.location}</dd></dl></div>
                <div><h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">État & Garantie</h3><dl class="grid grid-cols-2 gap-3 text-sm"><dt class="text-gray-500">État général</dt><dd class="font-medium text-gray-900 text-right">${offer.conditionGeneral || '-'}</dd><dt class="text-gray-500">Niveau</dt><dd class="font-medium text-gray-900 text-right">${offer.level || '-'}</dd><dt class="text-gray-500">Capsule</dt><dd class="font-medium text-gray-900 text-right">${offer.conditionCork || '-'}</dd><dt class="text-gray-500">Étiquette</dt><dd class="font-medium text-gray-900 text-right">${offer.conditionLabel || '-'}</dd>
                <dt class="text-gray-500 self-center">Vendeur</dt><dd class="text-right">${sellerHTML}</dd>
                </dl></div>
            </div>
            <div class="bg-slate-50 p-6 rounded-lg border border-slate-100"><h3 class="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-2">Note du courtier</h3><p class="text-slate-700 text-sm leading-relaxed italic">"${offer.brokerNote}"</p></div>
        </div>`;
}

function renderDemandDetail(demand, container) {
    container.innerHTML = `
        <div class="max-w-3xl mx-auto px-6 py-12">
            <div class="bg-indigo-50 border border-indigo-100 rounded-xl p-8 text-center mb-8">
                <h1 class="text-2xl font-bold text-indigo-900 mb-2">RECHERCHE : ${demand.name}</h1>
                <div class="text-lg text-indigo-700 mb-6">${demand.vintage} • ${demand.format}</div>
                <div class="inline-block px-4 py-2 bg-white rounded-full shadow-sm text-indigo-900 font-bold border border-indigo-100">Budget : ${demand.budget}</div>
            </div>
            <div class="prose prose-indigo mx-auto">
                <h3 class="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Contexte</h3>
                <p class="text-gray-700 bg-white p-6 border border-gray-200 rounded-lg shadow-sm">${demand.context}</p>
            </div>
        </div>`;
}

/* =========================================
   5. ACTIONS
   ========================================= */
function renderOfferFooter(offer, container) {
    const leftText = document.createElement('span');
    leftText.className = "hidden md:block text-slate-500 font-medium text-sm";
    
    if (offer.contacted) leftText.innerText = "Vous avez signalé votre intérêt ✅";
    else if (offer.waitlisted) leftText.innerText = "Vous êtes sur liste d'attente 🕒";
    else leftText.innerText = "Cette offre vous intéresse ?";

    const btnContainer = document.createElement('div');
    btnContainer.className = "flex gap-3 w-full md:w-auto";

    const safeName = offer.name.replace(/'/g, "\\'"); 

    const btnQuestion = `<button onclick="openModalContact('${safeName}')" class="px-4 py-2.5 rounded-md border border-gray-300 bg-white text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors">Précisions</button>`;
    let btnAction = '';
    
    if (offer.status === "DISPONIBLE") {
        if (offer.contacted) btnAction = `<button disabled class="px-6 py-2.5 rounded-md bg-gray-100 text-gray-400 font-medium text-sm cursor-not-allowed border border-gray-200">Intérêt signalé le ${offer.contactedDate || 'XX/XX'}</button>`;
        else btnAction = `<button onclick="openModalLead('${safeName}')" class="px-6 py-2.5 rounded-md bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 shadow-sm">Se positionner</button>`;
    } 
    else if (offer.status === "A L'ETUDE") {
        if (offer.waitlisted) btnAction = `<button disabled class="px-6 py-2.5 rounded-md bg-gray-100 text-gray-400 font-medium text-sm cursor-not-allowed border border-gray-200">Sur liste d'attente 🕒</button>`;
        else btnAction = `<button onclick="openModalWaitlist()" class="px-6 py-2.5 rounded-md bg-orange-600 text-white font-medium text-sm hover:bg-orange-700 shadow-sm">Rejoindre liste d'attente</button>`;
    }
    container.appendChild(leftText);
    btnContainer.innerHTML = btnQuestion + btnAction;
    container.appendChild(btnContainer);
}

function renderDemandFooter(demand, container) {
    const btnContainer = document.createElement('div');
    btnContainer.className = "w-full flex justify-end";
    
    const safeName = demand.name.replace(/'/g, "\\'");

    let btnAction = '';
    if (demand.contacted) {
        btnAction = `<button disabled class="w-full md:w-auto px-8 py-3 rounded-md bg-gray-100 text-gray-400 font-medium text-sm cursor-not-allowed border border-gray-200 flex items-center justify-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Réponse envoyée le ${demand.contactedDate}</button>`;
    } else {
        btnAction = `<button onclick="openModalReply('${safeName}')" class="w-full md:w-auto px-8 py-3 rounded-md bg-indigo-900 text-white font-medium text-sm hover:bg-indigo-800 shadow-sm">Répondre</button>`;
    }

    btnContainer.innerHTML = btnAction;
    container.appendChild(btnContainer);
}

/* --- LOGIQUE MODALES & HELPERS --- */
function getTodayDate() { const d = new Date(); return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}`; }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }
function submitModal(id, msg) { closeModal(id); showToast(msg); }
function showToast(msg) { const toast = document.getElementById('toast'); document.getElementById('toastMessage').innerText = msg; toast.classList.remove('translate-y-20', 'opacity-0'); setTimeout(() => { toast.classList.add('translate-y-20', 'opacity-0'); }, 3000); }
function closeDetailMobile() { document.getElementById('detailPanel').classList.add('hidden'); document.getElementById('offersPanel').classList.remove('hidden'); }
function copyOfferData() { alert("Offre copiée dans le presse-papier"); }

// OFFRES
function openModalContact(title) { document.getElementById('modalContactContext').innerText = `Concerne : ${title}`; document.getElementById('modalContact').classList.remove('hidden'); }
function openModalLead(title) { document.getElementById('modalLeadText').innerHTML = `Confirmer intérêt pour <strong>${title}</strong> ?`; document.getElementById('modalLead').classList.remove('hidden'); }
function openModalWaitlist() { document.getElementById('modalWaitlist').classList.remove('hidden'); }

function confirmLead() { if(currentItem) { currentItem.contacted = true; currentItem.contactedDate = getTodayDate(); updateUI(); closeModal('modalLead'); showToast('Intérêt confirmé !'); } }
function confirmWaitlist() { if(currentItem) { currentItem.waitlisted = true; updateUI(); closeModal('modalWaitlist'); showToast('Vous êtes sur liste d\'attente.'); } }

// DEMANDES
function openModalReply(title) { document.getElementById('modalReplyText').innerHTML = `Voulez-vous proposer une offre pour <strong>${title}</strong> ?`; document.getElementById('modalReply').classList.remove('hidden'); }
function confirmReply() { if(currentItem) { currentItem.contacted = true; currentItem.contactedDate = getTodayDate(); updateUI(); closeModal('modalReply'); showToast('Réponse envoyée avec succès !'); } }

function updateUI() {
    renderList(); 
    const footer = document.getElementById('detailActions');
    footer.innerHTML = '';
    if(currentTab === 'OFFRES') renderOfferFooter(currentItem, footer);
    else renderDemandFooter(currentItem, footer);
}

/* --- LIGHTBOX FUNCTIONS (AVEC NAVIGATION) --- */
let currentPhotoIndex = 0;

function openLightbox(index) {
    if (!currentItem || !currentItem.photos || currentItem.photos.length === 0) return;

    currentPhotoIndex = index;
    updateLightboxImage();
    document.getElementById('modalLightbox').classList.remove('hidden');

    const btnPrev = document.getElementById('lightboxPrev');
    const btnNext = document.getElementById('lightboxNext');
    
    if (currentItem.photos.length > 1) {
        btnPrev.classList.remove('hidden');
        btnNext.classList.remove('hidden');
    } else {
        btnPrev.classList.add('hidden');
        btnNext.classList.add('hidden');
    }
}

function updateLightboxImage() {
    const img = document.getElementById('lightboxImage');
    img.src = currentItem.photos[currentPhotoIndex];
}

function nextImage(event) {
    if (event) event.stopPropagation();
    if (!currentItem || !currentItem.photos) return;
    currentPhotoIndex = (currentPhotoIndex + 1) % currentItem.photos.length;
    updateLightboxImage();
}

function prevImage(event) {
    if (event) event.stopPropagation();
    if (!currentItem || !currentItem.photos) return;
    currentPhotoIndex = (currentPhotoIndex - 1 + currentItem.photos.length) % currentItem.photos.length;
    updateLightboxImage();
}

function closeLightbox() {
    document.getElementById('modalLightbox').classList.add('hidden');
}

document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('modalLightbox');
    if (!modal.classList.contains('hidden')) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") closeLightbox();
    }
});

/* --- GLOBAL TOOLTIP SYSTEM (OVERLAY) --- */
function showTooltip(event, text) {
    const tooltip = document.getElementById('globalTooltip');
    const rect = event.currentTarget.getBoundingClientRect();
    
    tooltip.innerText = text;
    tooltip.classList.remove('hidden');
    
    const tooltipRect = tooltip.getBoundingClientRect();
    
    let top = rect.top - tooltipRect.height - 8; 
    let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
    
    if (top < 10) {
        top = rect.bottom + 8;
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
}

function hideTooltip() {
    document.getElementById('globalTooltip').classList.add('hidden');
}

// INIT
switchTab('OFFRES');
if(window.innerWidth >= 768) selectItem(offersData[0]);