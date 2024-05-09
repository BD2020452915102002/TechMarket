import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Tên', sortable: false, width: 130 },
    { field: 'phone', headerName: 'Số điện thoại', type: 'number', sortable: false, width: 130 },
    { filed: 'address', headerName: 'Địa chỉ', type: 'text', sortable: false, width: 150 }
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (value, row) => `${row.name} `,
    // },
];

const rows = [
    { id: 1, name: 'Jon', age: 35 },
    { id: 2, name: 'Cersei', age: 42 },
    { id: 3, name: 'Jaime', age: 45 },
    { id: 4, name: 'Arya', age: 16 },
    { id: 5, name: 'Daenerys', age: null },
    { id: 6, name: null, age: 150 },
    { id: 7, name: 'Ferrara', age: 44 },
    { id: 8, name: 'Rossini', age: 36 },
    { id: 9, name: 'Harvey', age: 65 },
];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}
