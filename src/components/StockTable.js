import React from "react";
import PropTypes from 'prop-types';

import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";

import { renderReturnPercentage } from '../utils/helpers';

function StockTable({ stocks = [] }) {
    return (
        <TableContainer className="bg-white rounded-[25px] p-5">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className="text-left text-base font-medium text-darkblue">SL No</TableCell>
                        <TableCell className="text-left text-base font-medium text-darkblue">Name</TableCell>
                        <TableCell className="text-left text-base font-medium text-darkblue">Price</TableCell>
                        <TableCell className="text-left text-base font-medium text-darkblue">Return</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {stocks && stocks.map((stock, index) => (
                        <TableRow key={index}>
                            <TableCell className="text-base text-lightblack border-none">{stock.slNo}</TableCell>
                            <TableCell className="text-base text-lightblack border-none">{stock.name}</TableCell>
                            <TableCell className="text-base text-lightblack border-none">{stock.price}</TableCell>
                            <TableCell className="text-base text-lightblack border-none">{renderReturnPercentage(stock.position, stock.returnPercentage)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

StockTable.propTypes = {
    stocks: PropTypes.array,
}

export default StockTable;