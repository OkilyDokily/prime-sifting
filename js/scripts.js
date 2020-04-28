function primeSift(number){
  var array = [...Array(number + 1).keys()].splice(1);
  console.log(array)
  var prime = 2;
  while (prime <= number){
    for(var i = prime - 1; i<array.length; i += prime){
      if (i == prime - 1){
        continue;
      }
      array[i] = 0;
    }
    prime++;
  }
  console.log(array);
  var results = array.filter(x => !(x===0));
  return results;
}

$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var number = parseInt($("input").val());
    var results = primeSift(number);
    results.forEach(function(item){
      $("ul").append("<li>"+ item +"</li>")
    });
  });
})