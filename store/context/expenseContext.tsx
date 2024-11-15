import  {
    useContext,
    useState,
    createContext,
    ReactNode
} from "react";
import {
    IExpense
} from "../../shared/interfaces/IExpense";

interface ExpenseProviderProps {
    children: ReactNode;
}

interface ExpenseContextData {
    expenses: IExpense[];
    addExpense: (payload: IExpense) => void;
    removeExpense: (id: number) => void;
    updateExpense: (payload: IExpense) => void;
    getLastExpense: () => IExpense;
}

const ExpenseContext = createContext<ExpenseContextData>({} as ExpenseContextData);

export const ExpenseProvider = ({ children }:ExpenseProviderProps) : ReactNode => {
    const initialExpenses: IExpense[] = [
        {
            id: 1,
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
        {
            id: 2,
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
        {
            id: 3,
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
        {
            id: 4,
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
        {
            id: 5,
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
        {
            id: 6,
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
        {
            id: 7,
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
        {
            id: 8,
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
        {
            id: 9,
            description: "This is a random expense",
            amount: 15,
            date: new Date(),
        },
    ]

    const [expenses, setExpenses] = useState<IExpense[]>(initialExpenses);

    const addExpense = (payload: IExpense) => {
        setExpenses(prevState => [...prevState, payload]);
    }

    const removeExpense = (id:number) => {
        setExpenses(prevState => prevState.filter(x => x.id !== id));
    }

    const updateExpense = (payload: IExpense) => {
        setExpenses(prevState => prevState.map(expense => {
            if (expense.id === payload.id) {
                return {
                    ...expense,
                    description: payload.description,
                    date: payload.date,
                    amount: payload.amount,
                };
            }
            return expense;
        }));
    }

    const getLastExpense = () :IExpense => {
        return expenses[expenses.length - 1];
    }

    return (
        <ExpenseContext.Provider value={{ addExpense, removeExpense, updateExpense,  expenses, getLastExpense }}>
            {children}
        </ExpenseContext.Provider>
    )
}

export const useExpense = (): ExpenseContextData => {
    return useContext(ExpenseContext);
}