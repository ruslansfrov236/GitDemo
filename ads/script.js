	// Get elements from the DOM
   const menuIcon= document.querySelector('.menu-icon')
   const balanceElement = document.getElementById('balance');
   const startButton = document.getElementById('startButton');
   const speedTestMessage = document.getElementById('speedTestMessage');
   const adContainer = document.querySelector('.ad-container');
   const adCoins = document.querySelector('.speed-test-message');
   const adButton = document.getElementById('adButton');
   const showAdButton = document.getElementById('btn-ads');
   const hamburger = document.querySelector(".hamburger")
   const list = document.querySelector('.list')
  
   // Initialize balance
   let balance = 0;
   balanceElement.textContent= balance;
 
   // Function to update balance
   const updateBalance = (amount) => {
     balance += amount;
     balanceElement.textContent = balance;
   };
   menuIcon.addEventListener("click" , ()=>{
      alert("Hız testi yapılıyor...")
   })
   // Speed test
   startButton.addEventListener('click', () => {

     speedTestMessage.textContent = 'Hız testi yapılıyor...';
     speedTestMessage.style.display = 'block';
 
     setTimeout(() => {
       const speed = Math.floor(Math.random() * 100) + 1;
       updateBalance(speed);
       speedTestMessage.textContent = `${speed} coin kazandınız!`;
       speedTestMessage.classList.add('good');
       speedTestMessage.style.display = 'block';
 
       setTimeout(() => {
         speedTestMessage.style.display = 'none';
         speedTestMessage.classList.remove('good', 'bad');
         startButton.disabled = false;
       }, 3000);
     }, 3000);
   });
 
   // Ad
   adButton.addEventListener('click', () => {
     const chance = Math.floor(Math.random() * 2);
     if (chance === 0) {
       adCoins.textContent = '5 coin kazandınız!';
       adCoins.classList.add('good');
       updateBalance(5);
       
     } else {
       adCoins.textContent = 'Maalesef kazanamadınız.';
       adCoins.classList.add('bad');
       
     }
     adCoins.style.display = 'block';
 
     setTimeout(() => {
       adCoins.style.display = 'none';
       adCoins.classList.remove('good', 'bad');
     }, 3000);
   });
 
   // Show ad

  

   hamburger.addEventListener('click', () => {
    if (list.style.display === 'none') {
      list.style.display = 'block';
  } else {
      list.style.display = 'none';
  }
  });



    