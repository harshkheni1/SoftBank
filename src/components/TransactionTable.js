import React, { useState } from "react";
import PropTypes from 'prop-types';

import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from "@material-ui/core";

import { renderAmount } from '../utils/helpers';
import { OutlineButton } from './index';

import arrowUp from '../assets/images/Group 474.svg';
import arrowDown from '../assets/images/Group 475.svg';

function TransactionTable({ transactions = [] }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <TableContainer className="bg-white rounded-[25px] p-5">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="text-left text-base font-medium text-darkblue">Description</TableCell>
                            <TableCell className="hidden md:table-cell text-left text-base font-medium text-darkblue">Transaction ID</TableCell>
                            <TableCell className="hidden md:table-cell text-left text-base font-medium text-darkblue">Type</TableCell>
                            <TableCell className="hidden md:table-cell text-left text-base font-medium text-darkblue">Card</TableCell>
                            <TableCell className="hidden md:table-cell text-left text-base font-medium text-darkblue">Date</TableCell>
                            <TableCell className="text-left text-base font-medium text-darkblue">Amount</TableCell>
                            <TableCell className="hidden md:table-cell text-left text-base font-medium text-darkblue">Receipt</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions && transactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((transaction, index) => (
                            <TableRow key={index}>
                                <TableCell className="whitespace-nowrap text-base text-lightblack"><img className="mr-2 inline" src={transaction.type === 'debit' ? arrowUp : (transaction.type === 'credit' ? arrowDown : null)} alt={transaction.type} /><span className="align-middle">{transaction.description}</span></TableCell>
                                <TableCell className="hidden md:table-cell text-base text-lightblack">{transaction.transactionID}</TableCell>
                                <TableCell className="hidden md:table-cell text-base text-lightblack">{transaction.category}</TableCell>
                                <TableCell className="hidden md:table-cell text-base text-lightblack">{transaction.cardNumber}</TableCell>
                                <TableCell className="hidden md:table-cell text-base text-lightblack">{transaction.date}</TableCell>
                                <TableCell className="text-base text-lightblack">{renderAmount(transaction.type, transaction.amount)}</TableCell>
                                <TableCell className="hidden md:table-cell"><OutlineButton label="Download" /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={transactions.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                className="table-pagination mt-4"
            />
        </>
    );
}

TransactionTable.propTypes = {
    transactions: PropTypes.array,
}

export default TransactionTable;