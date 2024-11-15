import {
    useContext,
    useState,
    createContext
} from "react";

const ExpenseContext = createContext({
    expenses: [],
    addExpense: () => {},
    removeExpense: (id) => {},
    updateExpense: (id, { description, amount, date }) => {},
});

export const ExpenseProvider = ({ children }) => {
    const initialExpenses = [
        {
            id: "1",
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
        {
            id: "2",
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
        {
            id: "3",
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
        {
            id: "4",
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
        {
            id: "5",
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
        {
            id: "6",
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
        {
            id: "7",
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
        {
            id: "8",
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
        {
            id: "9",
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
    ]

    const [expenses, setExpenses] = useState(initialExpenses);

    const addExpense = () => {
        setExpenses(prevState => [...prevState, expenses]);
    }

    const removeExpense = (id) => {
        setExpenses(prevState => prevState.filter(x => x.id !== id));
    }

    const updateExpense = (id, expenseEdit) => {
        setExpenses(prevState => prevState.map(expense => {
            if (expense.id === id) {
                return {
                    ...expense,
                    description: expenseEdit.description,
                    date: expenseEdit.date,
                    amount: expenseEdit.amount,
                };
            }
            return expense;
        }));
    }

    return <ExpenseContext.Provider value={{ addExpense, removeExpense, updateExpense,  expenses }}>
            {children}
        </ExpenseContext.Provider>
}

export const useExpense = () => {
    return useContext(ExpenseContext);
}