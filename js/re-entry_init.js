/**
 * Created by pdamerval on 5/9/2017.
 */

$(document).ready( function () {

  addToWorkloadButton = $("#addToWorkload").jqxButton({ width: 180, height: 28, theme: 'acoms' });
  viewOffenderPacketButton = $("#viewOffenderPacket").jqxButton({ width: 180, height: 28, theme: 'acoms' });
  viewMyWorkloadButton = $("#viewMyWorkload").jqxButton({ width: 180, height: 28, theme: 'acoms' });
  viewHistoryButton = $("#viewHistory").jqxButton({ width: 180, height: 28, theme: 'acoms' });
  refreshButton = $("#refresh").jqxButton({ width: 180, height: 28, theme: 'acoms' });

  waitListGrid = $("#waitListGrid");
  waitListGridAdapter = new $.jqx.dataAdapter(waitListGridSource);

  waitListGrid.jqxGrid({
    source: waitListGridAdapter, columns: waitListGridColumns, theme: 'acoms',
    width: 1050, pageable: true, pagerMode: 'simple', height: 586, rowsHeight: 26, altRows: true, sortable: true
  });

});