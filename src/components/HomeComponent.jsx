import React from 'react'

const HomeComponent = ({store}) => {
    return <>
    <table>
        <thead>
            <tr>
                <th>Account</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {store.account.map(account => (
                <tr key={account.amount}>
                <td>{account.name}</td>
                <td>{account.amount}</td>
                </tr>
            ))}
        </tbody>
    </table>  
    </>
}

export default HomeComponent
