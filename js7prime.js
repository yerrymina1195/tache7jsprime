let tab1=[5,3,87,1,-4,-99,0];


/*ceci est une fonction qui va me permettre de pouvoir trier
le tableau tab1   */
function tri(montableau) {
    
    for (let i = 1; i < montableau.length; i++) {
        let smallest = montableau[i];
        let j = i - 1;
        while (j >= 0 && montableau[j] > smallest) {
            montableau[j + 1] = montableau[j];
            j--;
      }
      montableau[j + 1] = smallest;
    }
    return montableau;
  }


tab1= tri(tab1);
console.log('tab1')
console.log(tab1);

const tabOne= document.getElementById('tabone');
tab1.forEach((element) => {
    tabOne.innerHTML += `
    <span class="bg-secondary p-2">${element}</span>
       `;
  });

/*ceci est une fonction qui va me permettre de pouvoir trouver 
le nombre le plus grand dans le tableau tab1   */
function maxNumber( arrray){
    var maximum=arrray[0];
    for(i=1; i< arrray.length;i++){
        console.log(maximum);
  
  if(arrray[i]> maximum){
      maximum=arrray[i]
  }
  
}
return maximum

}
var max=maxNumber(tab1)
console.log(max);
const tabTwo= document.getElementById('tabtwo');
    tabTwo.innerHTML += `
    <span class="bg-secondary p-2">${max}</span>
       `;

/*ceci est une fonction qui va me permettre de pouvoir trouver 
le nombre le plus petit dans le tableau tab1   */
       
function minNumber( arrray){
    var minimum=arrray[0];
    for(i=1; i< arrray.length;i++){
        console.log(minimum);
  
  if(arrray[i]< minimum){
      minimum=arrray[i]
  }
  
}
return minimum

}
var min=minNumber(tab1)
const tabThree= document.getElementById('tabthree');
    tabThree.innerHTML += `
    <span class="bg-secondary p-2">${min}</span>
       `;