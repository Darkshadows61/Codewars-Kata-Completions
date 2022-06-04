//8kyu Removing Elements
function removeEveryOther(arr){
    result = arr.filter(function(element, index) {
        return index % 2 === 0;
    });
    console.log(result)
}
//test removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])
