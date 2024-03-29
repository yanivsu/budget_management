import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
// import {getAllTransactions} from '../actions/TransactionAction'


// component that shows all transaction
export const TableComponent = ({transactions}) => {
// export const TableComponent = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    //
    // const [ts, setTs] = useState({})
    //
    // // get all the transactions and set them in the transaction state
    // // run only once at mount
    // useEffect(() => {
    //     const fetchTransactions = async () => {
    //         const allTransactions = await getAllTransactions();
    //         if (allTransactions) {
    //             setTs(allTransactions);
    //             console.log(allTransactions);
    //         } else {
    //             console.log('No transactions returned');
    //         }
    //     };
    //
    //     fetchTransactions();
    // }, []);


    /******* functions *******/
        // handleSelectedRow hold only the id's of the selected rows
    const handleSelectedRow = (id) => {
            setSelectedRows(prevState => {
                if (prevState.includes(id)) {
                    return prevState.filter(itemId => itemId !== id);
                } else {
                    return [...prevState, id]
                }
            })
        }
    /******* functions *******/
    return (
        <>
            {/****buttons****/}
            <Button size="sm">Add Transaction</Button>
            <Button size="sm"
                    onClick={() => setSelectedRows([])}
            >Clear Selection</Button>
            <Button size="sm"
                    onClick={() => {
                        // console.log(ts)
                    }}
            >Remove Selected</Button>
            {/****buttons****/}

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Income/Expense</th>
                </tr>
                </thead>
                <tbody>
                {/*maps over data comes from the backend*/}
                {/*{Object.values(ts).map((transaction, index) => (*/}
                {/*    <tr key={index}>*/}
                {/*        <td>*/}
                {/*            <Form.Check*/}
                {/*                type="checkbox"*/}
                {/*                checked={selectedRows.includes(transaction.transaction_id)}*/}
                {/*                onChange={() => handleSelectedRow(transaction.transaction_id)}*/}
                {/*            />*/}
                {/*        </td>*/}
                {/*        <td>{transaction.transaction_id}</td>*/}
                {/*        <td>{new Date(transaction.date).toISOString().slice(0, 10)}</td>*/}
                {/*        <td>{transaction.transaction_name}</td>*/}
                {/*        <td>{transaction.amount}</td>*/}
                {/*        <td>{transaction.type}</td>*/}
                {/*    </tr>*/}
                {/*))}*/}
                {/*</tbody>*/}

                {/*maps over hardcoded data*/}
                {transactions.transactions.map(transaction => (
                    <tr key={transaction.transaction_id}>
                        <td>
                            <Form.Check
                                type="checkbox"
                                checked={selectedRows.includes(transaction.transaction_id)}
                                onChange={() => handleSelectedRow(transaction.transaction_id)}
                            />
                        </td>
                        <td>{transaction.transaction_id}</td>
                        <td>{new Date(transaction.date).toLocaleDateString()}</td>
                        <td>{transaction.transaction_name}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.type}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    )
}




