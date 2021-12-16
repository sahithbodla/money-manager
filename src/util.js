const incomeCategory = ["Salary","Freelance","Dividend"];
const expenseCategory = ["Food","Household","Fuel"];
const accountGroup = ["Cash","Bank","Credit Card", "Investment"];
const account = [
        {name:"ICICI",type:accountGroup[1], amount: 10000, description:"Salary Bank Account"},
        {name:"Cash",type:accountGroup[0], amount: 5000, description: "Cash in my wallet"},
        {name:"Zerodha",type:accountGroup[3], amount: 25000, description:"Investment in stocks"},
        {name:"SBI Credit Card",type:accountGroup[2], amount: 0, description:"SBI Credit Card"},
        {name:"LIC",type:accountGroup[3], amount: 12000, description:"LIC investment fot long term returns"}
]

const store = {
    incomeCategory,
    expenseCategory,
    accountGroup,
    account,
}

export default store;