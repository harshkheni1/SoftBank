import React from "react";
// import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

import { OutlineButton } from './index';

function LoanTable({ loans=[] }) {
    // const [totalAmount, setTotalAmount] = useState();
    // const [totalLeft, setTotalLeft] = useState();
    // const [totalInstallment, setTotalInstallement] = useState();

    // useEffect(() => {
    //     let temp1 = loans.reduce((sum, obj) => sum + parseFloat(obj.amount || 0), null);
    //     setTotalAmount(temp1);
    //     let temp2 = loans.reduce((sum, obj) => sum + parseFloat(obj.left || 0), null);
    //     setTotalLeft(temp2);
    //     let temp3 = loans.reduce((sum, obj) => sum + parseFloat(obj.installment || 0), null);
    //     setTotalInstallement(temp3);
    // }, []);

    return (
        <TableContainer className="bg-white rounded-[25px] p-5">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className="text-left text-base font-medium text-darkblue">SL No</TableCell>
                        <TableCell className="text-left text-base font-medium text-darkblue">Loan Money</TableCell>
                        <TableCell className="text-left text-base font-medium text-darkblue">Left to repay</TableCell>
                        <TableCell className="text-left text-base font-medium text-darkblue">Duration</TableCell>
                        <TableCell className="text-left text-base font-medium text-darkblue">Interest rate</TableCell>
                        <TableCell className="text-left text-base font-medium text-darkblue">Installment</TableCell>
                        <TableCell className="text-left text-base font-medium text-darkblue">Repay</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loans && loans.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="text-base text-lightblack">{item.slNo}</TableCell>
                            <TableCell className="text-base text-lightblack">{item.amount}</TableCell>
                            <TableCell className="text-base text-lightblack">{item.left}</TableCell>
                            <TableCell className="text-base text-lightblack">{item.duration}</TableCell>
                            <TableCell className="text-base text-lightblack">{item.interest}</TableCell>
                            <TableCell className="text-base text-lightblack">{item.installment}</TableCell>
                            <TableCell><OutlineButton label="Repay" /></TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell className="text-base text-red">Total</TableCell>
                        <TableCell className="text-base text-red">$125,0000</TableCell>
                        <TableCell className="text-base text-red">$750,000</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell className="text-base text-red">$50,000 / month</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
                {/* <div className="flex justify-between text-red">
                    <h1>{totalAmount}</h1>
                    <h1>{totalLeft}</h1>
                    <h1>{totalInstallment}</h1>
                </div> */}
            </Table>
        </TableContainer>
    );
}

LoanTable.propTypes = {
    loans: PropTypes.array,
}

export default LoanTable;