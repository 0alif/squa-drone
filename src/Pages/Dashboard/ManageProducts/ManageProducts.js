import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    // load products
    useEffect(() => {
        fetch('https://quiet-brushlands-60225.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // delete product
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://quiet-brushlands-60225.herokuapp.com/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                })
        }
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.price}</TableCell>

                                <TableCell align="right"><Button onClick={() => handleDelete(row._id)} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProducts;