const fruits = ['π­','π','π']
const fruits2 = ['π·','π','π']

const fruits3 = ['π',...fruits2]

fruits3.forEach((fruit,index)=>{
    console.log(`${index}-${fruit}`);
})


//ν©μ§ν© 
const fruits4 = [...fruits,...fruits2]

fruits4.forEach(function(fruit,index){
    console.log(`${index}-${fruit}`);
})


const dept1 = {
    no:30,
    name: 'κ°λ°λΆ',
    loc : 'μ μ£Ό'
} //κ°μ²΄μμ± 

const emp = {
    empno : 7566, 
    ename : 'wing',
    sal: 2500
}

const emp2 = {...emp,empno:7499,ename: 'Tiger',sal:3000}
console.log(emp);
console.log(emp2);

let items = [ 
{id:1,name:"λ°λ",count:10},
{id:2,name:"λ³΅μ±",count:12},
{id:3,name:"ν΄λΌμ΄λ°",count:15}

];

let items2=[...items]
console.log(items2);

item2 = [...items,{id:4,name: "μΆκ΅¬",count:9}]
console.log(items2);

item2 = [...items,{id:5,name: "μΆκ΅¬",count:23}]
console.log(items2);// 