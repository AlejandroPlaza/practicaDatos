function leerTasaEast() {
    villagesTR = document.getElementsByTagName('table')[0].getElementsByTagName('tr')
    objEast="[['Pais','Tasa'],";
    for (i=1;i<villagesTR.length;i++) {
if (villagesTR[i].children[5].textContent == "Both sexes" && 2015<Number(villagesTR[i].children[2].textContent) && villagesTR[i].children[3].textContent == "Eastern Mediterranean") {
      
      country  = villagesTR[i].children[4].textContent.replace(',','.').replace("'"," ");
      value = villagesTR[i].children[6].textContent.replace(',','.');
      objEast += "['" + country + "'," + value + "],"
      objEast += "\n"
     
    }}
    objEast+="[,,]]"



    return objEast;
}