
/*         function Rezult(){
            let rez = document.getElementById('screen').textContent;
            return rez;
        }

        for(let i=0;i<10;i++){
                document.getElementById("btn"+i).onclick = function(){
                    document.getElementById('screen').innerHTML=Rezult()+i;
                }
        }
     */
        var numbers = document.querySelectorAll('.num');
        oper = document.querySelectorAll('.op');
        tochka = document.getElementById('tochka');
        ravno = document.getElementById('ravno');
/*      mempl = document.getElementById('mempl');
        memus = document.getElementById('menus'); */
        ceDel = document.querySelectorAll('.ce_del');
        mem = document.querySelectorAll('.memus_meplus');
        screen = document.getElementById('okno');
        memoryNumber = 0,
        
        memoryNew = false,
        memoryAll = ''; //последняя сохраненная операция сумма
       

/*      del = document.getElementById('del');
        backspase = document.getElementById('backspase'); */

       /*  console.log(ravno); */

  /*      for (var i=0; i<10; i++){
       var num = numbers[i];
       num.addEventListener('click', numberClick)
        };*/

        for (var i=0; i<10; i++){
            var num = numbers[i];
            num.addEventListener('click', function (e) {
                /* console.log(e.target.firstChild.textContent); */
                numberClick(e.target.firstChild.textContent);
            
             });
            }

             for (var i=0; i<4; i++){/* операции */
             var op = oper[i];
             op.addEventListener('click',  function (e) {
/*                 console.log(e);*/
                   operClick(e.target.lastChild.textContent);
             });
            }

        for (var i=0; i<2; i++)/* делиты */ {
        var ce_del = ceDel[i];
        ce_del.addEventListener('click', function (e) {
            deliter(e.srcElement.id);
             });
             };

        for (var i=0; i<2; i++)/* памяти */ {
        var memus_meplus = mem[i];
        memus_meplus.addEventListener('click', function (e) {
            menus(e.srcElement.id);
             });
             };       

     
/* del.addEventListener('click', function (e) {
    console.log(e.srcElement.id);
    console.log('Клац по делит');
});  */ 
/* backspase.addEventListener('click', function (e) {
    console.log('Клац по стрелке');
});  */ 
tochka.addEventListener('click', zapitaja); 

ravno.addEventListener('click', raven);

/* mempl.addEventListener('click', function (e) {
    console.log('Клац по M+');
}); 
memus.addEventListener('click', function (e) {
    console.log('Клац по M+');
}); 
 */


function numberClick(number){
    screen. = number;
    
}

function operClick(symbol){
    console.log('Клац по операции ' + symbol);
}

function deliter(id){
    console.log('Клац по ' + id + 'id');
}

function zapitaja (){
    console.log('Клац по точке');
}

function raven (){
    console.log('Клац по =');
}

function menus(id){
    console.log('Клац по ' + id + 'id');
}

