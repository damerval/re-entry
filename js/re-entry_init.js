/**
 * Created by pdamerval on 5/9/2017.
 */

$(document).ready( function () {

  //  MAIN WAIT LIST WINDOW BUTTONS
  addToWorkloadButton = $("#addToWorkload").jqxButton({ width: 180, height: 28, theme: 'acoms' });
  viewOffenderPacketButton = $("#viewOffenderPacket").jqxButton({ width: 180, height: 28, theme: 'acoms' });
  viewMyWorkloadButton = $("#viewMyWorkload").jqxButton({ width: 180, height: 28, theme: 'acoms' });
  viewHistoryButton = $("#viewHistory").jqxButton({ width: 180, height: 28, theme: 'acoms' });
  refreshButton = $("#refresh").jqxButton({ width: 180, height: 28, theme: 'acoms' });

  // WAIT LIST GRID
  waitListGrid = $("#waitListGrid");
  waitListGridAdapter = new $.jqx.dataAdapter(waitListGridSource);

  waitListGrid.jqxGrid({
    source: waitListGridAdapter, columns: waitListGridColumns, theme: 'acoms',
    width: 1050, pageable: true, pagerMode: 'simple', height: 586, rowsHeight: 26, altRows: true, sortable: true
  });

  // WORKLOAD WINDOW & CHILDREN
  workloadWindow = $("#workloadWindow").jqxWindow({ theme: 'acoms', autoOpen: false, resizable: true,
    maxHeight: 950, maxWidth: 1200, width: 940, height: 654, isModal: true
  });

  workloadDischargeButton = $("#dischargeFromWorkload").jqxButton({ width: 150, height: 28, theme: 'acoms' });
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

});