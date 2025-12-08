export type Expense = {
    id: string
    expenseName: string
    amount: number
    category: string
    date: Value
}

export type DraftExpense = Omit<Expense, 'id'>

type ValuesPiece = Date | null;
export type Value = ValuesPiece | [ValuesPiece, ValuesPiece]

export type Category = {
    id: string
    name: string
    icon: string
}