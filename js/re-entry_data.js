/**
 * Created by pdamerval on 5/9/2017.
 */

var addToWorkloadButton;
var viewOffenderPacketButton;
var viewMyWorkloadButton;
var viewHistoryButton;
var refreshButton;

var waitListGrid;

var waitListGridSource = {
  dataType: 'json',
  dataFields: [
    { name: "re-entryId", map: 'rid', type: 'int' },
    { name: "offenderNumber", map: 'ofn', type: 'int' },
    { name: "offenderName", map: 'fna', type: 'string' },
    { name: "apsinNumber", map: 'apsin', type: 'string' },
    { name: "dob", type: 'date' },
    { name: "location", map: 'loc', type: 'string' },
    { name: "re-entryOffice", map: 'ofc', type: 'string' },
    { name: "releaseDate", map: 'rel', type: 'date' },
    { name: "veteranStatus", map: 'vet', type: 'string' },
    { name: "cycles", map: 'cyc', type: 'int' },
    { name: "remarks", map: 'rem', type: 'string' }
  ],
  id: 're-entryId',
  url: "data.json",
  data: {},
  pageSize: 20
};

var waitListGridAdapter;

var waitListGridColumns = [
  {  text: 'Off. #', dataField: 'offenderNumber', width: 80, cellsAlign: 'center' },
  {  text: 'Name', dataField: 'offenderName', width: 260 },
  {  text: 'APSIN #', dataField: 'apsinNumber', width: 82, cellsAlign: 'center' },
  {  text: 'DOB', dataField: 'dob', width: 80, cellsFormat: 'MM/dd/yyyy' },
  {  text: 'Location', dataField: 'location', width: 210 },
  {  text: 'Office', dataField: 're-entryOffice', width: 160 },
  {  text: 'Release Date', dataField: 'releaseDate', width: 82, cellsFormat: 'MM/dd/yyyy' },
  {  text: 'Vet?', dataField: 'veteranStatus', width: 60, cellsAlign: 'center' },
  {  text: 'Cyc.', dataField: 'cycles', width: 36, cellsAlign: 'center' }
];