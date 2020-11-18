$(document).ready(function(){

    var ig1 = document.querySelector('img[alt="PAGCOR"]');
    var ig2 = document.querySelector('img[alt="BMM Certified"]');
    var ig3 = document.querySelector('img[alt="Cash Tournament"]');
    var lk1 = document.querySelector('a[href="http://pagcor.ph"]');
    var lk2 = document.querySelector('a[href="http://idnplay.com/certificate/BMM_EN.html"]');
    var lk4 = document.querySelector('a[href="https://wlpromo.info/#1billionSeason4"]');
    
    var kol1 = document.querySelectorAll('a[href="https://wlpromo.info/#CashTournament"]');
    kol1.forEach(function(href1){
    var lk3 = document.querySelector('a[href="https://wlpromo.info/#CashTournament"]');
    if (lk3) {
      lk3.setAttribute('href', '#');
      }
    });
    
    if (lk1) {
      lk1.setAttribute('href', '#');
      }
    if (lk2) {
      lk2.setAttribute('href', '#');
      }
    if (lk4) {
      lk4.setAttribute('href', '#');
      }
    if (ig1) {
      ig1.setAttribute('alt', 'poker online');
      }
    if (ig2) {
      ig2.setAttribute('alt', 'poker online Indonesia');
      }
    if (ig3) {
      ig3.setAttribute('alt', 'situs poker online');
      }
      
      });
    
      $(document).ready(function(){
    });
    var hot = window.location.hostname;
    if (hot == '213.190.4.65'){
        if(document.URL.indexOf('register.php')>0){
            $(document).ready(function(){
                document.title = 'Daftar Idn Poker Bersama KartuDewa';
                $("meta[name='description']").attr('content', 'Daftar IDN POKER bersama dengan situs KartuDewa terbesar di Indonesia.');
                $("link[rel='canonical']").attr('href', '/register.php');
                $('head').append($('<link rel="alternate" media="only screen and (max-width: 640px)" />').attr('href', '/m/daftar.php'));
            });
        }
        else if(document.URL.indexOf('game_news.php?menu=game')>0){
            $(document).ready(function(){
                document.title = 'Main Game Kartu Online Gratis Mudah dan Terpercaya';
                $("meta[name='description']").attr('content', 'Main game kartu online gratis, mudah dan terpercaya. Dengan berbagai bonus chip yang bisa didapatkan.');
                $("link[rel='canonical']").attr('href', '/game_news.php?menu=game');
            });
        }
        else if(document.URL.indexOf('game_news.php?menu=news')>0){
            $(document).ready(function(){
                document.title = 'Turnamen Poker Total Hadiah Sebesar 1 Miliar Terbesar di Indonesia';
                $("meta[name='description']").attr('content', 'Main turnamen poker dengan total hadiah sampai dengan 1 miliar rupiah di kartudewa.');
                $("link[rel='canonical']").attr('href', '/game_news.php?menu=news');
            });
        }
        else if(document.URL.indexOf('promotion.php')>0){
            $(document).ready(function(){
                document.title = 'Promo | Bonus | FreeChip | Freebet';
                $("meta[name='description']").attr('content', 'Bonus, promo, freebet dan freechip yang bisa kalian dapatkan dengan mendaftar dan main di kartudewa.');
                $("link[rel='canonical']").attr('href', '/promotion.php');
            });
        }
        else if(document.URL.indexOf('referral.php')>0){
            $(document).ready(function(){
                document.title = 'Kode Referral Berlaku Seumur Hidup';
                $("meta[name='description']").attr('content', 'Bagikan kode referral anda di sosial media untuk mendapatkan bonus sebesar 10% yang berlaku seumur hidup.');
                $("link[rel='canonical']").attr('href', '/referral.php');
            });
        }
        else if(document.URL.indexOf('jackpot.php')>0){
            $(document).ready(function(){
                document.title = 'Pemenang Jackpot Poker, Domino, Ceme, Blackjack dan Superbull';
                $("meta[name='description']").attr('content', 'Panduan mengikuti jackpot dan juga para pemenang jackpot dari poker, domino, ceme, blackjack dan superbull.');
                $("link[rel='canonical']").attr('href', '/jackpot.php');
            });
        }
        else if(document.URL.indexOf('m')==21 ){
            $(document).ready(function(){
                document.title = 'Daftar IdnPoker Online: Poker, Capsa Susun, Domino 99 Indo Play - Kartu Dewa';
                $("meta[name='description']").attr('content', 'Kartu Dewa: Situs judi dengan permainan poker online dari server idnpoker. Bertaruh uang asli untuk memenangkan hadiah nyata di capsa susun, domnio 99, bandar ceme, superten, omaha dan bandarqq - Indo Play.');
                $("link[rel='canonical']").attr('href', 'http://213.190.4.65');
            });
        }
        else {
            $(document).ready(function(){
                document.title = 'Kartudewa Agen Kartu Dewa Poker Online Terpercaya';
                $("meta[name='description']").attr('content', 'Kartudewa sebagai salah satu situs kartu dewa poker online Indonesia yang sudah berjalan lebih dari 5 tahun dibidangnya dan mendapatkan penilaian pelayanan memuaskan.');
                $("link[rel='canonical']").attr('href', 'http://213.190.4.65');
                $('head').append($('<link rel="alternate" media="only screen and (max-width: 640px)" />').attr('href', 'http://213.190.4.65/m'));
            });
        }
    }
