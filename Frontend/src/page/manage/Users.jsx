import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Button, Box } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Tên', sortable: false, width: 130 },
    { field: 'phone', headerName: 'Số điện thoại', type: 'number', sortable: false, width: 130 },
    { field: 'address', headerName: 'Địa chỉ', type: 'text', sortable: false, width: 150 }
];

const initialRows = [
    { id: 1, name: 'Jon', phone: '123456789', address: 'Winterfell' },
    { id: 2, name: 'Cersei', phone: '987654321', address: 'King\'s Landing' },
    { id: 3, name: 'Jaime', phone: '123123123', address: 'King\'s Landing' },
    { id: 4, name: 'Arya', phone: '321321321', address: 'Winterfell' },
    { id: 5, name: 'Daenerys', phone: '456456456', address: 'Dragonstone' },
    { id: 6, name: 'Tyrion', phone: '654654654', address: 'King\'s Landing' },
    { id: 7, name: 'Sansa', phone: '789789789', address: 'Winterfell' },
    { id: 8, name: 'Bran', phone: '987987987', address: 'Winterfell' },
    { id: 9, name: 'Robb', phone: '159159159', address: 'Winterfell' }
];

export default function DataTable() {
    const [rows, setRows] = useState(initialRows);
    const [newUser, setNewUser] = useState({ id: '', name: '', phone: '', address: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleAddUser = () => {
        setRows([...rows, { ...newUser, id: rows.length + 1 }]);
        setNewUser({ id: '', name: '', phone: '', address: '' });
    };

    return (
        <div style={{ height: 500, width: '100%' }}>
            <Box display="flex" alignItems="center" mb={2}>
                <Button variant="contained" color="primary" onClick={handleAddUser}>
                    Add User
                </Button>
            </Box>
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
