import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'Ранг', width: 150 },
  {
    field: 'name',
    headerName: 'Название',
    width: 150,
    editable: true,
  },
  {
    field: 'count',
    headerName: 'Частота',
    width: 150,
    editable: true,
  },
];

export default function DataTable(props) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.data}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
      />
    </div>
  );
}