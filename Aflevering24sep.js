// Del 1
let hemmeligBesked = ["hej" , "klaus" , "vil" , "du" , "med" , "til" , "fodbold" , "i" , "klubben" , "i" , "aften" , "?" , "Kurt"]; 

// 1 jeg bruger pop til at slette det sidste element
hemmeligBesked.pop() ;

// 2 jeg bruger array metoden push til at indsætte nye elementer i enden af beskeden
hemmeligBesked.push("adressen" , "er" , "piratvej" , " 100") ;

// 3 jeg ændrer ordet Klaus til Bro
hemmeligBesked[1] = "Bro" ;

// 4 jeg fjerner de første element af arrayet
hemmeligBesked.shift() ;

// 5 jeg tilføjer yo i starten af stringen med unshift 
hemmeligBesked.unshift("yo") ;

// 6 jeg fjerner de 3 strings med splice og tilføjer piratfest
hemmeligBesked.splice(6,3, "piratfest") ;

// 7 jeg bruger join til at joine det hele til en lang besked med mellemrum.
var faktiskeBesked=hemmeligBesked.join(" ");
// 8 jeg viser beskeden
console.log(faktiskeBesked) ;

// Del 2
// 1 og 2 jeg laver en funktion og så bruger jeg splice og join til at få det navn ind jeg godt vil have.
// jeg tilføjer også på reffen med slice. Herefter console.log() jeg med navnet Sigurd

function gørBeskedenPersonlig(navn){
    hemmeligBesked.splice(1,1,navn+"!") ;
    hemmeligBesked.splice(7,0,"på reffen")
    console.log(hemmeligBesked.join(" "))
} ;
gørBeskedenPersonlig("Sigurd")

// del 3 jeg laver et katalog med navnene og sangene

const katalog = [{
        navn: "Sigurd" ,
        sang: "Hit me baby one more time" ,
    } , 
    {
        navn: "Tessa" ,
        sang: "Ben" ,
    } ,
    {
        navn: "Mia" ,
        sang: "Love will keep us alive" ,
    }]
// jeg fortæller herunder at loppet kun skal køre loopets længde og så stoppe.
    for (let i = 0; i < katalog.length; i++) ;
//herunder bruger jeg map til at kunne få fat i vores sange inde i kataloget
    const playliste = katalog.map(element => element.sang );
// herefter laver jeg en ny variabel til hver af de 3 personer hvor jeg tilføjer playlisten
// herefter console.log() jeg så vi kan se hvad vi har lavet
    var beskedMedPlaylisteSigurd = (gørBeskedenPersonlig("Sigurd"), playliste) ; 
    console.log(beskedMedPlaylisteSigurd)
    var beskedMedPlaylisteTessa = (gørBeskedenPersonlig("Tessa") , playliste) ;
    console.log(beskedMedPlaylisteTessa)
    var beskedMedPlaylisteMia = (gørBeskedenPersonlig("Mia") , playliste) ;
    console.log(beskedMedPlaylisteMia)
    

  

console.log("hej")
console.log("hihi")
console.log("whatsup")