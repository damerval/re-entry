/**
 * Created by pdamerval on 5/9/2017.
 */

var addToWorkloadButton;
var viewOffenderPacketButton;
var viewMyWorkloadButton;
var viewHistoryButton;

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
  {  text: 'Off. #', dataField: 'offenderNumber', width: 75 },
  {  text: 'Name', dataField: 'offenderName', width: 75 },
  {  text: 'APSIN #', dataField: 'apsinNumber', width: 75 },
  {  text: 'DOB', dataField: 'dob', width: 75 },
  {  text: 'Location', dataField: 'location', width: 75 },
  {  text: 'Office', dataField: 're-entryOffice', width: 75 },
  {  text: 'Release Date', dataField: 'releaseDate', width: 75 },
  {  text: 'Veteran?', dataField: 'veteranStatus', width: 75 },
  {  text: 'Cyc.', dataField: 'cycles', width: 75 },
  {  text: 'Notes', dataField: 'remarks', width: 75 }
];