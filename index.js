function KeysAndValues (object) {
    var Keys=[]
    var value=[]
object.Keys(object).sort
    .forEach(function(item, i) {
        Keys.push(item);
        value.push(object[item]);
    });


    var result=[keys,value]
    return result;

    }

    console.log(KeysAndValues({d:4, f:1, a:1, p:3, b:2, c:3}))
    console.log(KeysAndValues({a: "apple", b: "Microsoft", c: "Google"}))
    console.log(KeysAndValues({key1: true, key2: false, key3: undefined}))     

        