function leerTasaAfrica() {
    villagesTR = document.getElementsByTagName('table')[0].getElementsByTagName('tr')
    objAfrica="[['Pais','Tasa'],";
    for (i=1;i<villagesTR.length;i++) {
if (villagesTR[i].children[5].textContent == "Both sexes" && 2015<Number(villagesTR[i].children[2].textContent) && villagesTR[i].children[3].textContent == "Africa") {
      
      country  = villagesTR[i].children[4].textContent.replace(',','.').replace("'"," ");
      value = villagesTR[i].children[6].textContent.replace(',','.');
      objAfrica += "['" + country + "'," + value + "],"
      objAfrica += "\n"
     
    }}
    objAfrica+="[,,]]"



    return objAfrica;
}