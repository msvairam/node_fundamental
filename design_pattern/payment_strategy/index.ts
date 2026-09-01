import { PaymentStrategyFactory } from './factory';
import { PaymentProcess } from './payment-strategy';

const strategy = PaymentStrategyFactory.create('paypal');

if(strategy) {

    const paymentProcess = new PaymentProcess(strategy);

    const result = paymentProcess.execute(100, { email: 'mut@gmail.com' });
    result.then((re) => {
        console.log(re);
    });
}


