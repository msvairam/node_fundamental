import { PayDetails, Amount, PayResponse } from './types';

export abstract class PaymentStrategy {
    abstract pay(amount: Amount, details: PayDetails): Promise<PayResponse>;
}