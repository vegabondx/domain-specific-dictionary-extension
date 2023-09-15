function Hello() {
    alert("Hello, World");
 }
 document.addEventListener('helloworld', function() {
    var link = document.getElementById('hello');
    // onClick's logic below:
    link.addEventListener('click', function() {
        Hello();
    });
});
