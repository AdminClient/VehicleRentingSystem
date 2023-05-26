const stripe = require('stripe')('sk_test_51NBMS9SJm8S3dps7SHIOZvXpHxpoqs4f1HSNJdJsUNAYYr0dtjhmafCUALHJiuHF2cC62Yi43HK6CtD9DPt4e2bo00GFWvmI4H');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1NBMTHSJm8S3dps7yn0Hxx59',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(4242,function() {
  console.log('Running on port 4242');
});
