/**
 * Created by pdamerval on 5/9/2017.
 */

$(document).ready(function () {

  refreshButton.on('click', function () {
    waitListGridSource.data = {};
    waitListGrid.jqxGrid('updateBoundData');
  });

});