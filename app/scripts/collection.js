var buildAlbumThumbnail = function(){
  var template = 
      '<div class="collection-album-container col-md-2">'
    + '  <img src="/images/album-placeholder.png"/>'
    + '  <div class="caption album-collection-info">'
    + '    <p>'
    + '      <a class="album-name" href="/album.html"> Album Name </a>'
    + '      <br/>'
    + '      <a href="/album.html"> Artist name </a>'
    + '      <br/>'
    + '      X songs'
    + '      <br/>'
    + '      X:XX Total Length'
    + '    </p>'
    + '  </div>'
    + '</div>';

  return $(template);  
};

var updateCollectionView = function(){
   number_of_albums = 100 - Math.floor(Math.random(10) * 76)

  var $collection = $('.collection-container .row');
  $collection.empty();

  for(var i = 0; i < number_of_albums; i++){
    var thumbnail = buildAlbumThumbnail();
    $collection.append(thumbnail);  
  }
}

if(document.URL.match(/\/collection.html/)) {
  $(document).ready(function(){
    updateCollectionView();
  })
}

