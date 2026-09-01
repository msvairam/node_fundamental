import { iPaymentStrategy } from './payment-strategy.interface';
import { Amount, PayDetails, PayResponse } from './types';

export class StripePayment implements iPaymentStrategy {
    pay(amount: Amount, details: PayDetails): Promise<PayResponse> {
        return Promise.resolve({ status: 'success', gateway: 'stripe' });
    }
}

export class PaypalPayment implements iPaymentStrategy {
    pay(amount: Amount, details: PayDetails): Promise<PayResponse> {
        return Promise.resolve({ status: 'success', gateway: 'paypal' });
    }
}

export class RazorpayPayment implements iPaymentStrategy {
    pay(amount: Amount, details: PayDetails): Promise<PayResponse> {
        return Promise.resolve({ status: 'success', gateway: 'razorpay' });
    }
}

export class PaymentProcess {
    _strategy !: iPaymentStrategy;
    constructor(strategy: iPaymentStrategy) {
        this._strategy = strategy;
    }

    setStrategy(strategy: iPaymentStrategy) {
        this._strategy = strategy;
    }

    execute(amount: Amount, details: PayDetails): Promise<PayResponse> {
        return this._strategy.pay(amount, details);
    }
}