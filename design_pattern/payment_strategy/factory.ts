import { StripePayment, PaypalPayment, RazorpayPayment  } from './payment-strategy';

export class PaymentStrategyFactory {
    static create(type: string) {
        if(type === 'stripe') return new StripePayment();
        if(type === 'paypal') return new PaypalPayment();
        if(type === 'razorpay') return new RazorpayPayment();

        return null;
    }
}