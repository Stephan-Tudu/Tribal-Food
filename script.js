/* ========== DATA ========== 
   20 states with 4–5 dishes each.
   Image filenames are placeholders — replace with your images in /Images.
*/
const DATA = [
  { state:'Jharkhand', dishes:[
    {name:'Dhuska', price:99, img:'Images/Dhuska.png', desc:'Deep-fried savory rice-lentil pancake.'},
    {name:'Rugra Curry', price:189, img:'Images/Rugra-curry.png', desc:'Wild mushroom curry from forests.'},
    {name:'Red Ant Chutney', price:79, img:'Images/red-ant-chutney.png', desc:'Tangy chutney made with ants — traditional.'},
    {name:'Handia', price:149, img:'Images/handia.png', desc:'Fermented rice beverage — ceremonial drink.'},
    {name:'Bamboo Shoot Pickle', price:129, img:'Images/bamboo.png', desc:'Preserved bamboo shoots with spices.'},
  ]},
  { state:'Odisha', dishes:[
    {name:'Pakhala', price:119, img:'Images/pakhala.png', desc:'Fermented rice served with sides.'},
    {name:'Arisa Pitha', price:139, img:'Images/arisa-pitha.png', desc:'Sweet rice pancake — harvest special.'},
    {name:'Dalma', price:159, img:'Images/dalma.png', desc:'Lentil-vegetable curry with seasonal vegetables.'},
    {name:'Manda Pitha', price:149, img:'Images/manda-pitha.png', desc:'Steamed rice-flour dumplings.'},
    {name:'Mudhi Mansa', price:179, img:'Images/mudhi-mansa.png ', desc:'Meat with popped rice garnish.'},
  ]},
  { state:'Assam', dishes:[
    {name:'Bora Saul Pitha', price:129, img:'Images/bora-soul.png', desc:'Sticky rice cakes — breakfast treat.'},
    {name:'Apong', price:149, img:'Images/apong.png', desc:'Traditional rice beer.'},
    {name:'Khar Curry', price:169, img:'Images/khar-curry.png', desc:'Alkaline herb-based curry.'},
     
  ]},
  { state:'Nagaland', dishes:[
    {name:'Smoked Bamboo Chicken', price:299, img:'Images/bamboo.png', desc:'Chicken cooked inside bamboo, smoked.'},
    {name:'Axone (Fermented Soy)', price:99, img:'Images/axone-soy.png', desc:'Strongly flavored fermented soybean.'},
    {name:'Sticky Rice', price:129, img:'Images/sticky-rice.png', desc:'Local sticky rice, sometimes smoked.'},
    {name:'Naga Pork', price:249, img:'Images/naga-pork.png', desc:'Spicy pork with native chilies.'},
    {name:'Herbal Salad', price:89, img:'Images/herbal-salad.png', desc:'Foraged herbs and greens salad.'},
  ]},
  { state:'Meghalaya', dishes:[
    {name:'Jadoh', price:249, img:'Images/jodoh.png', desc:'Spiced rice with pork — Khasi speciality.'},
    {name:'Doh Khleh', price:189, img:'Images/dohkhel.png', desc:'Pork with herbs and aromatics.'},
    {name:'Tungrymbai', price:139, img:'Images/turngrymbai.png', desc:'Fermented soy dish with pork.'},
    {name:'Pukhlein', price:99, img:'Images/pukhlein.png', desc:'Local sweet fried bread.'},
    {name:'Nakham Bitchi', price:159, img:'Images/nakkam-bitchi.png', desc:'Fermented fish chutney.'},
  ]},
  { state:'Kerala', dishes:[
    {name:'Kola Bhaat', price:179, img:'Images/kola-bhaat.png', desc:'Red rice with coconut and spices.'},
    {name:'Kappa Biryani', price:189, img:'Images/kappa-biryani.png', desc:'Tapioca-based biryani.'},
    {name:'Puttu Kadala', price:149, img:'Images/pattu-kadala.png', desc:'Steamed rice cylinders with chickpeas.'},
    {name:'Ragi Idiyappam', price:169, img:'Images/ragi-idyapam.jpg', desc:'Finger millet string hoppers.'},
  ]},
  { state:'Rajasthan', dishes:[
    {name:'Kutki Khichdi', price:149, img:'Images/kutki-khicdi.jpg', desc:'Millet-based wholesome khichdi.'},
    {name:'Bajra Roti', price:89, img:'Images/bajra-roti.jpg', desc:'Pearl-millet flatbread.'},
    {name:'Ker Sangri', price:139, img:'Images/ker-sangri.jpg', desc:'Dried berry and bean curry.'},
    {name:'Gatte Curry', price:159, img:'Images/gatte-curry.jpg', desc:'Gram flour dumplings in spicy gravy.'},
  ]},
  { state:'Tamil Nadu', dishes:[
    {name:'Millet Pongal', price:149, img:'Images/millet-pongal.jpg', desc:'Savory millet porridge.'},
    {name:'Varagu Upma', price:129, img:'Images/varagu-upma.jpg', desc:'Kodo millet upma.'},
    {name:'Ragi Dosa', price:99, img:'Images/ragib-dosa.jpg', desc:'Finger millet crepe.'},
    {name:'Kambu Idli', price:109, img:'Images/kambu-idlli.jpg', desc:'Pearl millet idli.'},
  ]},
  { state:'Andhra Pradesh', dishes:[
    {name:'Pulihora', price:139, img:'Images/pulihora.jpg', desc:'Tamarind rice with spices.'},
    {name:'Kodi Pulao', price:179, img:'Images/kodi-pulao.jpg', desc:'Chicken pulao with local masala.'},
    {name:'Bamboo Mutton', price:199, img:'Images/bamboo-mutton.jpg', desc:'Mutton cooked with bamboo shoots.'},
    {name:'Chapala Pulusu', price:189, img:'Images/chapala-pulusu.jpg', desc:'Sour fish curry base.'},
  ]},
  { state:'Telangana', dishes:[
    {name:'Smoked Fish with Herbs', price:229, img:'Images/smoked-fish.jpg', desc:'River fish smoked and spiced.'},
    {name:'Sajja Rotte', price:119, img:'Images/sajja-rotte.jpg', desc:'Millet flatbread.'},
    {name:'Raagi Sangati', price:129, img:'Images/rangi-sangati.jpg', desc:'Millet with spicy curry.'},
    {name:'Pachi Pulusu', price:99, img:'Images/pachi-pulusu.jpg', desc:'Raw tamarind rasam.'},
  ]},
  { state:'Arunachal Pradesh', dishes:[
    {name:'Bamboo Shoot Curry', price:199, img:'Images/bamboo-shoot-curry.jpg', desc:'Bamboo shoots cooked with meat/veggies.'},
    {name:'Smoked Pork', price:249, img:'Images/smoked-porked.jpg', desc:'Smoked meats with herbs.'},
    {name:'Thup', price:119, img:'Images/thup.jpg', desc:'Millet porridge.'},
    {name:'Galho', price:139, img:'Images/galho.jpg', desc:'Rice & vegetable bowl.'},
  ]},
  { state:'Manipur', dishes:[
    {name:'Eromba', price:199, img:'Images/eromba.jpg', desc:'Mashed vegetables with fermented fish.'},
    {name:'Ngari', price:159, img:'Images/ngari.jpg', desc:'Fermented fish condiment.'},
    {name:'Chak-hao Pitha', price:129, img:'Images/chak-hao-pitha.jpg', desc:'Black rice sweet pancake.'},
    {name:'Iromba Chicken', price:219, img:'Images/eromba.jpg', desc:'Spiced chicken variant.'},
  ]},
  { state:'Tripura', dishes:[
    {name:'Mui Borok', price:139, img:'Images/mui-borok.jpg', desc:'Local meat preparations.'},
    {name:'Bamboo Fish', price:179, img:'Images/bamboo-fish.jpg', desc:'Fish with bamboo flavor.'},
    {name:'Chakhwi', price:99, img:'Images/chawki.jpg', desc:'Fermented vegetable side.'},
    {name:'Wahan', price:129, img:'Images/wahan.jpg', desc:'Rice & meat plate.'},
  ]},
  { state:'West Bengal', dishes:[
    {name:'Kasu Pitha', price:139, img:'Images/kasu-pitha.jpg', desc:'Harvest rice sweets.'},
    {name:'Panta Bhat', price:109, img:'Images/panta-bhaat.jpg', desc:'Fermented rice breakfast.'},
    {name:'Hilsa Smoke', price:229, img:'Images/hilsa-smoke.jpg', desc:'Smoked hilsa with herbs.'},
    {name:'Ghugni', price:99, img:'Images/ghugni.png', desc:'Spiced chickpea snack.'},
  ]},
  { state:'Maharashtra', dishes:[
    {name:'Roasted Maize & Herbs', price:99, img:'Images/roasted-maize.png', desc:'Street roasted corn with herbs.'},
    {name:'Varan Bhaat (Millet)', price:119, img:'Images/varan-bhaat.png', desc:'Millet with lentil.'},
    {name:'Kanda Poha Tribal', price:109, img:'Images/kanda-poha-tribal.png', desc:'Flattened rice with local twist.'},
    {name:'Mahua Ladoo', price:129, img:'Images/mahua-ladoo.png', desc:'Sweet with mahua.'},
  ]},
  { state:'Himachal Pradesh', dishes:[
    {name:'Siddu', price:159, img:'Images/siddu.png', desc:'Steamed wheat dumpling.'},
    {name:'Trout Smoke', price:229, img:'Images/trout-smoke.png', desc:'Smoked trout with herbs.'},
    {name:'Tudkiya Bhat', price:139, img:'Images/tudkiya-bhaat.png', desc:'Spiced rice with lentils.'},
    {name:'Chakkar Pitha', price:99, img:'Images/chakkar-pitha.png', desc:'Local pancake/dish.'},
  ]},
  { state:'Uttarakhand', dishes:[
    {name:'Gahat Soup', price:119, img:'Images/gahat-soup.png', desc:'Horse gram soup — hearty & smoky.'},
    {name:'Baadi', price:129, img:'Images/baadi.png', desc:'Buckwheat-based dish.'},
    {name:'Aarep', price:99, img:'Images/aarep.png', desc:'Local snack.'},
    {name:'Mandua Roti', price:89, img:'Images/mauda-roti.png', desc:'Ragi/buckwheat flatbread.'},
  ]}
]; // end DATA

/* ========== APP STATE ========== */
let cart = []; // array of {name, price, img, state, qty}
let currentPreview = null;

/* ========== DOM refs ========== */
const tabsEl = document.getElementById('tabs');
const cardsEl = document.getElementById('cards');
const previewOverlay = document.getElementById('previewOverlay');
const cartPanel = document.getElementById('cartPanel');
const cartCountEl = document.getElementById('cartCount');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const checkoutOverlay = document.getElementById('checkoutOverlay');
const loginOverlay = document.getElementById('loginOverlay');

/* ========== UI build ========== */
function buildTabs(){
  tabsEl.innerHTML = '';
  // 'All' tab
  const allTab = document.createElement('div');
  allTab.className = 'tab active';
  allTab.textContent = 'All';
  allTab.onclick = () => { document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active')); allTab.classList.add('active'); showAll(); };
  tabsEl.appendChild(allTab);

  DATA.forEach(s=>{
    const t = document.createElement('div');
    t.className = 'tab';
    t.textContent = s.state;
    t.onclick = () => { document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active')); t.classList.add('active'); renderState(s.state); };
    tabsEl.appendChild(t);
  });
}

function cardFor(item, state){
  const wrapper = document.createElement('div');
  wrapper.className = 'card';
  wrapper.innerHTML = `
    <div class="thumb"><img src="${item.img}" alt="${item.name}"></div>
    <div class="title">${item.name}</div>
    <div class="meta">${state}</div>
    <div class="price">₹${item.price}</div>
    <div class="actions">
      <button class="preview-btn">Preview</button>
      <button class="add-btn">Add</button>
    </div>
  `;
  // events
  wrapper.querySelector('.preview-btn').addEventListener('click', ()=>openPreview(item, state));
  wrapper.querySelector('.add-btn').addEventListener('click', ()=>addToCart(item, state));
  return wrapper;
}

function renderState(state){
  cardsEl.innerHTML = '';
  const stateData = DATA.find(d=>d.state===state);
  if(!stateData) return;
  stateData.dishes.forEach(it => cardsEl.appendChild(cardFor(it, state)));
  window.scrollTo({top:document.getElementById('menuSection').offsetTop-60, behavior:'smooth'});
}

function showAll(){
  cardsEl.innerHTML = '';
  DATA.forEach(s => s.dishes.forEach(d => cardsEl.appendChild(cardFor(d, s.state))));
  window.scrollTo({top:document.getElementById('menuSection').offsetTop-60, behavior:'smooth'});
}

/* ========== Preview ========== */
function openPreview(item, state){
  currentPreview = {item, state};
  document.getElementById('previewImg').src = item.img;
  document.getElementById('previewName').textContent = item.name;
  document.getElementById('previewState').textContent = state;
  document.getElementById('previewPrice').textContent = '₹' + item.price;
  document.getElementById('previewDesc').textContent = item.desc || 'Traditional tribal recipe.';
  document.getElementById('previewAddBtn').onclick = ()=>{ addToCart(item, state); closePreview(); openCart(); };
  previewOverlay.classList.add('show');
}
function closePreview(){ previewOverlay.classList.remove('show'); }

/* ========== Cart ========== */
function addToCart(item, state){
  // try to find existing
  const existing = cart.find(c => c.name===item.name && c.state===state);
  if(existing){ existing.qty += 1; }
  else { cart.push({name:item.name, price:item.price, img:item.img, state, qty:1}); }
  updateCartUI();
}

function updateCartUI(){
  cartItemsEl.innerHTML = '';
  let total = 0;
  cart.forEach((c, idx) => {
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img src="${c.img}" alt="${c.name}">
      <div style="flex:1">
        <div style="font-weight:700">${c.name}</div>
        <div style="color:#666;font-size:13px">${c.state}</div>
        <div style="margin-top:6px;font-weight:800">₹${c.price} x ${c.qty}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px">
        <button style="padding:6px;border-radius:8px;border:1px solid #eee;background:#fff;cursor:pointer" onclick="changeQty(${idx},1)">＋</button>
        <button style="padding:6px;border-radius:8px;border:1px solid #eee;background:#fff;cursor:pointer" onclick="changeQty(${idx},-1)">－</button>
        <button style="padding:6px;border-radius:8px;border:1px solid #f2dede;background:#fff;color:#d9534f;cursor:pointer;margin-top:6px" onclick="removeItem(${idx})">Remove</button>
      </div>
    `;
    cartItemsEl.appendChild(row);
    total += c.price * c.qty;
  });
  cartCountEl.textContent = cart.reduce((s,a)=>s+a.qty,0);
  cartTotalEl.textContent = total;
}

function changeQty(idx, delta){
  cart[idx].qty += delta;
  if(cart[idx].qty <= 0) cart.splice(idx,1);
  updateCartUI();
}

function removeItem(idx){
  cart.splice(idx,1);
  updateCartUI();
}

function clearCart(){
  if(confirm('Clear all items from cart?')){ cart = []; updateCartUI(); }
}

function openCart(){ cartPanel.classList.add('show'); }
function closeCart(){ cartPanel.classList.remove('show'); }

document.getElementById('cartBtn').addEventListener('click', ()=> {
  openCart();
});
document.getElementById('cartClose').addEventListener('click', ()=> {
  closeCart();
});

/* ========== Checkout ========== */
document.getElementById('checkoutBtn').addEventListener('click', ()=>{
  if(cart.length === 0){ alert('Cart is empty. Add items before checkout.'); return; }
  checkoutOverlay.classList.add('show');
});
function closeCheckout(){ checkoutOverlay.classList.remove('show'); }

function placeOrder(){
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const addr = document.getElementById('custAddr').value.trim();
  if(!name || !phone || !addr){ alert('Please fill name, phone and address.'); return; }
  // fake order placement:
  const total = cart.reduce((s,c)=>s+c.price*c.qty,0);
  alert(`Thanks ${name}!\nOrder placed — ₹${total}.\nWe will contact ${phone}.\n( Demo )`);
  // clear
  cart = []; updateCartUI(); closeCheckout(); closeCart();
  // reset form fields
  document.getElementById('custName').value=''; document.getElementById('custPhone').value=''; document.getElementById('custAddr').value='';
}

/* ========== Login ========== */
document.getElementById('loginBtn').addEventListener('click', ()=> loginOverlay.classList.add('show'));
function closeLogin(){ loginOverlay.classList.remove('show'); }
function doLogin(){
  const em = document.getElementById('loginEmail').value.trim();
  const pw = document.getElementById('loginPass').value.trim();
  if(!em || !pw){ alert('Enter email and password.'); return; }
  alert('Demo login successful — ' + em);
  closeLogin();
}

/* ========== Navigation / Explore ========== */
document.getElementById('menuBtn').addEventListener('click', ()=> window.scrollTo({top: document.getElementById('menuSection').offsetTop - 60, behavior: 'smooth'}));
document.getElementById('aboutBtn').addEventListener('click', ()=> window.scrollTo({top: document.getElementById('aboutSection').offsetTop - 20, behavior: 'smooth'}));
document.getElementById('exploreBtn').addEventListener('click', ()=> { showAll(); openCart(); setTimeout(()=>closeCart(),500); }); // scrolls & briefly opens cart

/* ========== init ========== */
buildTabs();
showAll();
updateCartUI();

/* close preview when clicking outside modal */
previewOverlay.addEventListener('click', (e)=>{
  if(e.target === previewOverlay) closePreview();
});
checkoutOverlay.addEventListener('click',(e)=>{ if(e.target === checkoutOverlay) closeCheckout(); });
loginOverlay.addEventListener('click',(e)=>{ if(e.target === loginOverlay) closeLogin(); });
