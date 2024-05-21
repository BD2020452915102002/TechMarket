import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Button, Box, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Tên', sortable: false, width: 130 },
    { field: 'phone', headerName: 'Số điện thoại', type: 'number', sortable: false, width: 130 },
    { field: 'address', headerName: 'Địa chỉ', type: 'text', sortable: false, width: 150 },
    { field: 'role', headerName: 'Role', width: 120 }
];

const initialRows = [
    { id: 1, name: 'Jon', phone: '123456789', address: 'Winterfell', role: 'Employee' },
    { id: 2, name: 'Cersei', phone: '987654321', address: 'King\'s Landing', role: 'User' },
    { id: 3, name: 'Jaime', phone: '123123123', address: 'King\'s Landing', role: 'User' },
    { id: 4, name: 'Arya', phone: '321321321', address: 'Winterfell', role: 'Employee' },
    { id: 5, name: 'Daenerys', phone: '456456456', address: 'Dragonstone', role: 'User' },
    { id: 6, name: 'Tyrion', phone: '654654654', address: 'King\'s Landing', role: 'Employee' },
    { id: 7, name: 'Sansa', phone: '789789789', address: 'Winterfell', role: 'User' },
    { id: 8, name: 'Bran', phone: '987987987', address: 'Winterfell', role: 'Employee' },
    { id: 9, name: 'Robb', phone: '159159159', address: 'Winterfell', role: 'User' }
];

export default function DataTable() {
    const [rows, setRows] = useState(initialRows);
    const [newUser, setNewUser] = useState({ id: '', name: '', phone: '', address: '', role: '' });
    const [open, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleRoleChange = (e) => {
        setNewUser({ ...newUser, role: e.target.value });
    };

    const handleAddUser = () => {
        if (newUser.name && newUser.phone && newUser.address && newUser.role) {
            setRows([...rows, { ...newUser, id: rows.length + 1 }]);
            setNewUser({ id: '', name: '', phone: '', address: '', role: '' });
            setOpen(false);
        } else {
            alert("Please fill in all fields");
        }
    };

    const handleEditUser = () => {
        if (newUser.name && newUser.phone && newUser.address && newUser.role) {
            setRows(rows.map(row => (row.id === newUser.id ? newUser : row)));
            setNewUser({ id: '', name: '', phone: '', address: '', role: '' });
            setOpen(false);
            setEditMode(false);
        } else {
            alert("Please fill in all fields");
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEditMode(false);
        setNewUser({ id: '', name: '', phone: '', address: '', role: '' });
    };

    const handleSelectionModelChange = (newSelection) => {
        setSelectedRows(newSelection);
    };

    const handleEditButtonClick = () => {
        if (selectedRows.length === 1) {
            const userToEdit = rows.find(row => row.id === selectedRows[0]);
            setNewUser(userToEdit);
            setEditMode(true);
            setOpen(true);
        } else {
            alert("Please select exactly one row to edit");
        }
    };

    const handleDeleteButtonClick = () => {
        if (selectedRows.length > 0) {
            setRows(rows.filter(row => !selectedRows.includes(row.id)));
            setSelectedRows([]);
        } else {
            alert("Please select rows to delete");
        }
    };

    return (
        <div style={{ height: 500, width: '100%' }}>
            <Box display="flex" justifyContent="flex-start" mb={2}>
                <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ marginRight: 8 }}>
                    Thêm
                </Button>
                {/* <Button variant="contained" color="secondary" onClick={handleEditButtonClick} style={{ marginRight: 8 }}>
                    Actions
                </Button> */}

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
                onRowSelectionModelChange={(newSelection) => handleSelectionModelChange(newSelection)}
                rowSelectionModel={selectedRows}
            />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{editMode ? "Edit User" : "Add New User"}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        value={newUser.name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        label="Phone"
                        type="text"
                        fullWidth
                        value={newUser.phone}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        name="address"
                        label="Address"
                        type="text"
                        fullWidth
                        value={newUser.address}
                        onChange={handleInputChange}
                    />
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Role</InputLabel>
                        <Select
                            name="role"
                            value={newUser.role}
                            onChange={handleRoleChange}
                        >
                            <MenuItem value="Employee">Employee</MenuItem>
                            <MenuItem value="User">User</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={editMode ? handleEditUser : handleAddUser} color="primary">
                        {editMode ? "Save Changes" : "Add User"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
