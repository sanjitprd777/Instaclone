jQuery ->
    $(window).scroll ->
        if $(window).scrollTop() > $(document).height() - $(window).height() 
            alert "near bottom"
var loadFile = function(event) {
  var output = document.getElementById('image-preview');
  output.src = URL.createObjectURL(event.target.files[0]);
};