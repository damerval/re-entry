/**
 * Created by pdamerval on 5/9/2017.
 */

$(document).ready(function () {

  refreshButton.on('click', function () {
    waitListGridSource.data = {};
    waitListGrid.jqxGrid('updateBoundData');
  });

  viewMyWorkloadButton.on('click', function () {
    workloadWindow.jqxWindow('open');
  });

  workloadCancelButton.on('click', function () {
    workloadWindow.jqxWindow('close');
  });

  workloadSaveButton.on('click', function () {
    workloadWindow.jqxWindow('close');
  });

  viewHistoryButton.on('click', function () {
    historyWindow.jqxWindow('open');
  });

  historyCloseButton.on('click', function () {
    historyWindow.jqxWindow('close');
  });

  waitListGrid.on('rowselect', function () {
    addToWorkloadButton.jqxButton({ disabled: false });
    viewOffenderPacketButton.jqxButton({ disabled: false });
  });

  addToWorkloadButton.on('click', function () {
    addToWorkloadDialog.jqxWindow('open');
  });

});