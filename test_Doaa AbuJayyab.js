// function each(coll,func){
// 	 var acc = []
// 	if(Array.isArray(coll)){
// 		for(var i= 0; i<coll.length; i++){
//            acc[i] =func(coll[i],i)
// 		}

	
// }else{
//   acc =	{}
// }
// }

function each(coll,func){
	if(Array.isArray(coll)){
		for(var i= 0; i<coll.length; i++){
		func(coll[i],i)
	  }
		}else{
               for(var key in coll){
                  func(coll[key],key)
               }
		}
     
   
	}


function filter(array,pradicate){
var acc =[]
	each(array,function(element,i){
		if(pradicate(element,i)){
			acc.push(element)
		}
	})
	return acc

}

function evens(numbers) {
  return filter(numbers,function(element,i){
  	return element%2 === 0
  })
}

evens([5,4,10,14,11,3,22]);


//Q8
function evenIndexedEvenLengths(arr) { 
    // input Array of strings
    //output Array of strings with even index and even length
    return filter(arr, function (element, i) {
        return   i % 2 == 0 && element.length%2 === 0
    });
} 
evenIndexedEvenLengths(['lion', 'monkey', 'bird', 'cat', 'dog']);





//Q9

function filter(coll,pradicate){
var acc =[]
if(Array.isArray(coll)){
   each(coll,function(element,i){
		if(pradicate(element,i)){
			acc.push(element)
		}
	})
	return acc


}else{
	var acc ={}
	 each(coll,function(element,i){
		if(pradicate(element,i)){
			acc[i]=(element)
		}
	})
	return acc
}
	

}



filter ({a:1,b:'dog',c:true}, function(value)){
 
  return typeof value === 'number'; }); 


//Q11

var usersData = [
    { user: { email: 'fatema@rbk.org', password: '12345' } },
    { user: { email: 'maher@rbk.org', password: 'M@her2017' } }, { user: { email: 'sahar@rbk.org', password: 'saher2017' } }
]; 

function strongPasswords(arr) { 
   return filter(arr, function (item,i) {
       return (arr[i]['user']['password'].length >= 8 &&
       /[A - Z] /.test(arr[i]['user']['password'])
           && / [a - z] /.test(arr[i]['user']['password']) && / [0 - 9] /.test(arr[i]['user']['password']) && /[^\w\s]/.test(arr[i]['user']['password']) )
    });
}

//Q12
 function select(object, keys) { 
 	for(var i =0;i<keys.length;i++){
 		for(var key in object){
	if (key === keys[i]){
		  key:object[key] 
	}
}

 	}
 	

 	
 	
   
} 
select({a: 1, b: 2, c: 3}, ['a', 'b']); // => {a: 1, b: 2}




function each(coll,func){
	if(Array.isArray(coll)){
		for(var i= 0; i<coll.length; i++){
		func(coll[i],i)
	  }
		}else{
               for(var key in coll){
                  func(coll[key],key)
               }
		}
     
   
	}





function each (array,func){
	if(Array.isArray(array)){
		for (var i = 0;i<array.length;i++){
			func(array[i],i)
		}else{
			for(var key in array){
				func(key[i],key)
			}

		}

	}
}



function map(coll, f) {

var acc = [];

if (!Array.isArray(coll)) {

acc = {};

}

each(coll, function(element, key) {

acc[key] = f(element, key) ;

});

return acc;

}



function reduce(arr, f, acc  ) {
  if (acc === undefined) {
    acc = arr[0];
    arr = arr.slice(1);
  }
​
  each(arr, function(element, i){
    acc = f(acc, element, i);
  });
​
  return acc;
}

function reduce(array, f, start) {
  var acc = start;
  each(array, function(element) {
    acc = f(acc, element);
  });
  return acc;
}


function filter(array,pradicate){
var acc =[]
	each(array,function(element,i){
		if(pradicate(element,i)){
			acc.push(element)
		}
	})
	return acc

}









