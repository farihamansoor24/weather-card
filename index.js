let season = prompt('Select any one Season \n Summer ☀️ \n Winter ❄️ \n Rainy ⛈️ \n Spring 🌸 \n Autumn 🍁๋࣭').toLowerCase();
if(season === 'summer'){
  document.writeln(`
    <div class="summer season d-flex justify-content-center align-items-center">
    <div class="card season-card">
      <img src="./summer-card.gif" class="card-img-top img-fluid" alt="summer card">
      <div class="card-body">
        <h5 class="card-title fs-4 mb-2 text-white">Summer Season Card ☀️</h5>
        <p class="card-text">Summer is a hot season with bright sunshine and warm days.</p>
  
      </div>
    </div>
  </div>`);
}
else if(season === 'winter'){
 document.writeln(`
     <div class="winter season d-flex justify-content-center align-items-center">
    <div class="card season-card">
      <img src="./winter-season-card.gif" class="card-img-top img-fluid" alt="summer card">
      <div class="card-body">
        <h5 class="card-title fs-4 mb-2 text-white">Winter Season Card ❄️</h5>
        <p class="card-text">Winter is a cold season with chilly weather and cool winds.</p>
  
      </div>
    </div>
  </div>`);
}
else if(season === 'rainy'){
 document.writeln(`
   <div class="rainy season d-flex justify-content-center align-items-center">
    <div class="card season-card">
      <img src="./rainy-card.gif" class="card-img-top img-fluid" alt="summer card">
      <div class="card-body">
        <h5 class="card-title fs-4 mb-2 text-white">Rainy Season Card ⛈️</h5>
        <p class="card-text">Rainy season brings frequent rainfall, cool breeze, and cloudy skies. It refreshes nature and fills rivers and fields with water.</p>
  
      </div>
    </div>
  </div>`);
}
else if(season === 'spring'){
 document.writeln(`
    <div class="spring season d-flex justify-content-center align-items-center">
    <div class="card season-card">
      <img src="./spring-card.gif" class="card-img-top img-fluid" alt="summer card">
      <div class="card-body">
        <h5 class="card-title fs-4 mb-2 text-white">Spring Season Card 🌸</h5>
        <p class="card-text">Spring is a pleasant season when flowers bloom and the weather becomes mild.</p>
  
      </div>
    </div>
  </div>
    `);
}
else if(season === 'autumn'){
 document.writeln(`
    <div class="autumn season d-flex justify-content-center align-items-center">
    <div class="card season-card">
      <img src="./autumn-card.gif" class="card-img-top img-fluid" alt="summer card">
      <div class="card-body">
        <h5 class="card-title fs-4 mb-2 text-white">Autumn Season Card 🍁๋࣭</h5>
        <p class="card-text">Autumn is marked by falling leaves, cooler temperatures, and a calm atmosphere.</p>
  
      </div>
    </div>
  </div>
    `);
}else{
   alert('Invalid Season Entered!');
}