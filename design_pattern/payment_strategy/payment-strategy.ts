import { PaymentStrategy } from './payment-strategy.abstract';
import { Amount, PayDetails, PayResponse } from './types';

export class StripePayment extends PaymentStrategy {
    pay(amount: Amount, details: PayDetails): Promise<PayResponse> {
        return Promise.resolve({ status: 'success', gateway: 'stripe' });
    }
}

export class PaypalPayment extends PaymentStrategy {
    pay(amount: Amount, details: PayDetails): Promise<PayResponse> {
        return Promise.resolve({ status: 'success', gateway: 'paypal' });
    }
}

export class RazorpayPayment extends PaymentStrategy {
    pay(amount: Amount, details: PayDetails): Promise<PayResponse> {
        return Promise.resolve({ status: 'success', gateway: 'razorpay' });
    }
}

export class PaymentProcess {
    _strategy !: PaymentStrategy;
    constructor(strategy: PaymentStrategy) {
        this._strategy = strategy;
    }

    setStrategy(strategy: PaymentStrategy) {
        this._strategy = strategy;
    }

    execute(amount: Amount, details: PayDetails): Promise<PayResponse> {
        return this._strategy.pay(amount, details);
    }
}