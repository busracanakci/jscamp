//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
console.log("! Asal mı kontrolü !")
function findPrime(...numbers) {
    if ( numbers < 1) { // Negatif Sayılar için şart 
        console.log("Assallığı Hesaplanamaz")
    }
    else {
        for (let i = 2; i < numbers; i++) {  
            if (numbers % i == 0){
            return false
            
        }

    }
    return true
    }
}
    function findPrime2(...numbers) {
        for (let i = 0; i < numbers.length; i++) {
            if(findPrime(numbers[i])){
                console.log( numbers[i] + " Sayı Asaldır")
            }
            else{
                console.log( numbers[i] + " Sayı Asal Değildir")
            }
            
        }
        
    }
    
    


findPrime2(2,5,8,21, 13) 
findPrime2(3,5)


//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. 
//İki sayının kendisi hariç pozitif bölenlerinin toplamı diğer sayıya eşit ise bu sayılara arkadaş sayılar denir.
console.log("! Arkadaş Sayılar !")
function arkadas(sayi1,sayi2) {
    let total1 = 0
    let total2 = 0
    
    for (let i = 0; i < sayi1; i++) {  //Girilen ilk sayı için kendisi hariç bölenlerinin hesaplanması
        if( sayi1 % i == 0) {
            total1 += i
        }
        
    }
    for (let j = 0; j < sayi2; j++) { //Girilen ikinci sayı için kendisi hariç bölenlerinin hesaplanması
        if( sayi2 % j == 0) {
            total2 += j
        }
        
    }
    if ( total1 == sayi2 && total2 == sayi1 ) {  //Pozitif bölenlerinin toplamı diğer sayıya eşit mi kontrolü yapılması
        console.log( sayi1 + " ve " + sayi2 + " Arkadaş Sayılardır")
        
    }
    else{
        console.log(sayi1 + " ve " + sayi2 + " Arkadaş Sayılar Değildir")
    }

}
arkadas(225,284)
arkadas(220,284)





//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
//Bölenleri kendisine eşit olan sayılar mükemmel sayılardır. Örn: 3,2,1 rakamları 6'nın bölenleridir ve toplamları yine 6'ya eşittir.
console.log("! 1000' e kadar olan Mükemmel Sayılar !")
function mukemmel(){
    for (let i = 1; i <= 1000; i++) {
        let total = 0

    for(let sayi=1; sayi<i; sayi++){ //Bölenlerin hesaplanması
    if(i % sayi == 0) {
        total += sayi
        
    }
    
}
if(total == i) {
    console.log( i + " Mükemmel Sayıdır")
}
    }
}
mukemmel()

//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
console.log("! 1000' e kadar olan Asal Sayılar !")
function asal() {
    for(let i = 2; i<=1000; i++){
        let total = 0
    for (let sayi = 2; sayi < i; sayi++){
        if (i % sayi == 0) {
            total += sayi
            
        }

    }
    if(total < 1){
        console.log(i + " Asal Sayıdır")
    }
        }
    }
asal()


