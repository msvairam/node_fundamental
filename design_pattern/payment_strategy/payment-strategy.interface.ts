import { PayDetails, Amount, PayResponse } from './types';

export interface iPaymentStrategy {
    pay(amount: Amount, details: PayDetails): Promise<PayResponse>;
}