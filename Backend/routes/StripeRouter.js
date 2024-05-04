const express = require("express");
const Stripe = require("stripe");
require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY);
const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
    const customer = await stripe.customers.create({
        metadata: {
            userId: req.body.userId,
        },
    });

    console.log(customer);

    // const line_items = req.body.cartItems.map((item) => {
    //     return {
    //         price_data: {
    //             currency: "usd",
    //             product_data: {
    //                 name: item.name,
    //                 images: [item.image.url],
    //                 description: item.desc,
    //                 metadata: {
    //                     id: item.id,
    //                 },
    //             },
    //             unit_amount: item.price * 100,
    //         },
    //         quantity: item.cartQuantity,
    //     };
    // });

    const line_items = [
        {
            price_data: {
                currency: "usd",
                product_data: {
                    name: "item.name",
                    images: [],
                    description: "item.desc",
                    metadata: {
                        id: "item.id",
                    },
                },
                unit_amount: 100,
            },
            quantity: 1,
        },
    ]

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_address_collection: {
            allowed_countries: ["US", "CA", "VN"],
        },
        shipping_options: [
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 0,
                        currency: "usd",
                    },
                    display_name: "Free shipping",
                    // Delivers between 5-7 business days
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 5,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 7,
                        },
                    },
                },
            },
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 1500,
                        currency: "usd",
                    },
                    display_name: "Next day air",
                    // Delivers in exactly 1 business day
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 1,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 1,
                        },
                    },
                },
            },
        ],
        phone_number_collection: {
            enabled: true,
        },
        customer: customer.id,
        line_items,
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}/checkout-success`,
        cancel_url: `${process.env.CLIENT_URL}/order`,
    });
    res.send({ url: session.url });
});

// This is your Stripe CLI webhook secret for testing your endpoint locally.
let endpointSecret = "whsec_6e26d738ca35bc8c68b36166e1d52972955fd7ec45423e08cdd6331d1eabf4a4";

router.post(
    '/webhook',
    express.raw({ type: 'application/json' }),
    (request, response) => {
        const sig = request.headers['stripe-signature'];

        let data;
        let eventType;

        if (endpointSecret) {
            let event;

            try {
                event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
                console.log("Webhook verified.");
            } catch (err) {
                console.log(`Webhook Error: ${err.message}`);
                response.status(400).send(`Webhook Error: ${err.message}`);
                return;
            }
            data = event.data.object;
            eventType = event.type;
        }
        else {
            data = req.body.data.object;
            eventType = req.body.type;
        }
        // Handle the event
        if (eventType === "checkout.session.completed") {
            stripe.customer
                .retrieve(data.customer)
                .then((customer) => {
                    console.log(customer);
                    console.log("data:", data);
                })
                .catch((err) => console.log(err.message));
        }
        // Return a 200 response to acknowledge receipt of the event
        response.send().end();
    });


module.exports = router;