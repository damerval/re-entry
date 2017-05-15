/**
 * Created by pdamerval on 5/9/2017.
 */

$(document).ready( function () {

  //  MAIN WAIT LIST WINDOW BUTTONS
  addToWorkloadButton = $("#addToWorkload").jqxButton({ width: 180, height: 28, theme: 'acoms', disabled: true });
  viewOffenderPacketButton = $("#viewOffenderPacket").jqxButton({ width: 180, height: 28, theme: 'acoms', disabled: true });
  viewMyWorkloadButton = $("#viewMyWorkload").jqxButton({ width: 180, height: 28, theme: 'acoms' });
  viewHistoryButton = $("#viewHistory").jqxButton({ width: 180, height: 28, theme: 'acoms' });
  refreshButton = $("#refresh").jqxButton({ width: 180, height: 28, theme: 'acoms' });

  // WAIT LIST GRID
  waitListGrid = $("#waitListGrid");
  waitListGridAdapter = new $.jqx.dataAdapter(waitListGridSource);
  waitListGrid.jqxGrid({
    source: waitListGridAdapter, columns: waitListGridColumns, theme: 'acoms',
    width: 1050, pageable: true, pagerMode: 'simple', height: 566, rowsHeight: 25, altRows: true, sortable: true
  });

  // WORKLOAD WINDOW & CHILDREN
  workloadWindow = $("#workloadWindow").jqxWindow({ theme: 'acoms', autoOpen: false, resizable: true,
    maxHeight: 950, maxWidth: 1200, width: 940, height: 654, isModal: true
  });
  workloadDischargeButton = $("#dischargeFromWorkload").jqxButton({ width: 150, height: 28, theme: 'acoms', disabled: true });
  workloadCancelButton = $("#cancelWorkload").jqxButton({ width: 150, height: 28, theme: 'acoms' });
  workloadSaveButton = $("#saveWorkload").jqxButton({ width: 150, height: 28, theme: 'acoms' });
  workloadReturnButton = $("#returnToWaitList").jqxButton({ width: 180, height: 28, theme: 'acoms' });

  // WORKLOAD GRID
  workLoadGrid = $("#workloadGrid");
  workloadGridAdapter = new $.jqx.dataAdapter(workloadGridSource);
  workLoadGrid.jqxGrid({
    source: workloadGridAdapter, columns: workloadGridColumns, editable: true, width: 900, height: 551, theme: 'acoms',
    pageable: true, pagerMode: 'simple', rowsHeight: 97, altRows: true, sortable: true
  });

  //HISTORY WINDOW AND CHILDREN
  historyWindow = $("#historyWindow").jqxWindow({ theme: 'acoms', autoOpen: false, resizable: true,
    maxHeight: 950, maxWidth: 1200, width: 903, height: 668, isModal: true
  });

  historyCloseButton = $("#closeHistory").jqxButton({ width: 100, height: 28, theme: 'acoms' });

  //HISTORY GRID
  historyGrid = $("#historyGrid");
  historyGridAdapter = new $.jqx.dataAdapter(historyGridSource);
  historyGrid.jqxGrid({
    source: historyGridAdapter, columns: historyGridColumns, editable: false, width: 862, height: 566, theme: 'acoms',
    pageable: true, pagerMode: 'simple', rowsHeight: 25, altRows: true, sortable: true
  });

  //ADD TO WORKLOAD DIALOG
  addToWorkLoadOKButton = $("#addToWorkLoadOK").jqxButton({ theme: 'acoms', width: 100, height: 28 });
  addToWorkloadCancelButton = $("#addToWorkLoadCancel").jqxButton({ theme: 'acoms', width: 100, height: 28 });
  addToWorkloadDialog = $("#addToWorkloadDialog").jqxWindow({ theme: 'acoms', autoOpen: false, maxHeight: 400, maxWidth: 400, isModal: true,
    okButton: addToWorkLoadOKButton, cancelButton: addToWorkloadCancelButton, width: 280, height: 160, showCloseButton: false
  });

  //DISCHARGE DIALOG
  dischargeOptionsAdapter = new $.jqx.dataAdapter(dischargeOptionsSource);
  dischargeDropDown = $("#dischargeStatus").jqxDropDownList({ source: dischargeOptionsAdapter, placeHolder: '...', valueMember: 'dischargeCode',
      displayMember: 'dischargeValue', theme: 'acoms', width: 175, height: 21, dropDownHeight: 120 });
  dischargeOKButton = $("#dischargeOK").jqxButton({ width: 100, height: 28, theme: 'acoms' });
  dischargeCancelButton = $("#dischargeCancel").jqxButton({ width: 100, height: 28, theme: 'acoms' });
  dischargeDialog = $("#dischargeDialog").jqxWindow({ maxWidth: 400, maxHeight: 400, theme: 'acoms', isModal: true, autoOpen: false,
      okButton: dischargeOKButton, cancelButton: dischargeCancelButton, width: 280, height: 260, showCloseButton: false });

});