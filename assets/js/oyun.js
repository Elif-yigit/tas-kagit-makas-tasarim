const options = ["Taş" , "Kağıt", "Makas"];
let score=0;


tas.addEventListener('click',function(){
  tas.innerText = "Oyuncunun Seçtiği: Taş"
  sonuc.innerText = getResult("Taş");
 skor.innerText="Oyuncu :" + score
 secim.innerText +=  score
 tas.delete(sifir);

})

kagit.addEventListener('click',function(){
  kagit.innerText = "Oyuncunun Seçtiği: Kağıt"
  sonuc.innerText = getResult("Kağıt");
  skor.innerText= "Oyuncu :" +  score
  secim.innerText="Bilgisayar:" + score
  kagit.delete(sifir) ;
  
})

makas.addEventListener('click',function(){
  makas.innerText = "Oyuncunun Seçtiği: Makas"
  sonuc.innerText = getResult("Makas");
  skor.innerText= "Oyuncu :" +  score
  secim.innerText= "Bilgisayar: " + score
  makas.delete(sifir);
  
})

function getResult(metin) {
  const computerOption = getRandomOption();

  if(metin == computerOption) {
    return "Berabere"
  } else if (metin === "Taş" & computerOption === "Kağıt") {
    return "Kaybettiniz"
  } else if (metin === "Kağıt" & computerOption === "Taş") {
    score++;
    secim++;
    return "Kazandınız"
  } else if (metin === "Kağıt" & computerOption === "Makas") {
    return "Kaybettiniz"
  } else if (metin === "Taş" & computerOption === "Makas") {
    secim++;
    score++;
    return "Kazandınız"
  } else if (metin === "Makas" & computerOption === "Kağıt") {
    secim++;
    score++;
    return "Kazandınız"
  } else if (metin === "Makas" & computerOption === "Taş") {
    return "Kaybettiniz"
  } 
}

function getRandomOption () {
  const computerChoice = options[Math.floor(Math.random()*3)];
  bilgisayar.innerText = "Bilgisayarın Seçtiği : " + computerChoice;
  
  return computerChoice
}