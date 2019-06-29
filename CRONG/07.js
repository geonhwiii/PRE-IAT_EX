let set = new Set();
set.add('crong');
set.add('monk');
set.add('crew');
set.add('crew');
set.forEach(item => console.log(item));
console.log(set.has('crong')); // true
