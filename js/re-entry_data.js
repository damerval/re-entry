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

var workloadWindow;
var workloadDischargeButton;
var workloadCancelButton;
var workloadSaveButton;
var workloadReturnButton;

var workLoadGrid;

var workloadGridSource = {
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
    { name: "comments", map: 'rem', type: 'string' }
  ],
  id: 're-entryId',
  url: "data.json",
  data: {},
  pageSize: 5
};

var workloadGridAdapter;

var workloadGridColumns = [
  { text: 'Off. #', dataField: 'offenderNumber', width: 50, cellsAlign: 'center', editable: false },
  { text: 'Name', dataField: 'offenderName', width: 175, editable: false },
  { text: 'APSIN #', dataField: 'apsinNumber', width: 52, cellsAlign: 'center', editable: false },
  { text: 'DOB', dataField: 'dob', width: 73, cellsFormat: 'MM/dd/yyyy', editable: false },
  { text: 'Location', dataField: 'location', width: 120, editable: false },
  { text: 'Office', dataField: 're-entryOffice', width: 120, editable: false },
  { text: 'Release Date', dataField: 'releaseDate', width: 82, cellsFormat: 'MM/dd/yyyy', editable: false },
  { text: 'Vet?', dataField: 'veteranStatus', width: 40, cellsAlign: 'center', editable: false },
  { text: 'Comments', dataField: 'comments', width: 188, columntype: 'textbox', editable: true }
];

var historyGrid;
var historyWindow;
var historyCloseButton;

var historyGridSource = {
  dataType: 'json',
  dataFields: [
    {name: "re-entryId", map: 'rid', type: 'int'},
    {name: "offenderNumber", map: 'ofn', type: 'int'},
    {name: "offenderName", map: 'fna', type: 'string'},
    {name: "apsinNumber", map: 'apsin', type: 'string'},
    {name: "dob", type: 'date'},
    {name: "location", map: 'loc', type: 'string'},
    {name: "re-entryOffice", map: 'ofc', type: 'string'},
    {name: "releaseDate", map: 'rel', type: 'date'},
    {name: "veteranStatus", map: 'vet', type: 'string'},
    {name: "cycles", map: 'cyc', type: 'int'},
    {name: "comments", map: 'rem', type: 'string'},
    {name: "status", map: 'sta', type: 'string'}
  ],
  id: 're-entryId',
  url: "history.json",
  data: {},
  pageSize: 20

};

var historyGridAdapter;

var historyGridColumns = [
  { text: 'Off. #', dataField: 'offenderNumber', width: 50, cellsAlign: 'center', editable: false },
  { text: 'Name', dataField: 'offenderName', width: 200, editable: false },
  { text: 'APSIN #', dataField: 'apsinNumber', width: 52, cellsAlign: 'center', editable: false },
  { text: 'DOB', dataField: 'dob', width: 73, cellsFormat: 'MM/dd/yyyy', editable: false },
  { text: 'Office', dataField: 're-entryOffice', width: 120, editable: false },
  { text: 'Release Date', dataField: 'releaseDate', width: 82, cellsFormat: 'MM/dd/yyyy', editable: false },
  { text: 'Vet?', dataField: 'veteranStatus', width: 35, cellsAlign: 'center', editable: false },
  { text: 'Discharge date & Status', dataField: 'status', width: 250, cellsAlign: 'center', editable: false }
];

var addToWorkloadDialog;
var addToWorkLoadOKButton;
var addToWorkloadCancelButton;

var dischargeDialog;
var dischargeDropDown;
var dischargeOKButton;
var dischargeCancelButton;

var dischargeOptionsSource = {
  dataType: 'json',
  dataFields: [
    { name: 'dischargeCode', map: 'dsc', type: 'string' },
    { name: 'dischargeValue', map: 'dsv', type: 'string' }
  ],
  id: 'dischargeCode',
  url: 'discharge.json',
  data: {}
};

var dischargeOptionsAdapter;