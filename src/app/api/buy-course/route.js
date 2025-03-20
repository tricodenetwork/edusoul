import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { headers } from "next/headers";

if (process.env.STRIPE_SECRET_KEY_TEST === undefined) {
  throw new Error("STRIPE_SECRETE_KEY_TEST is not defined");
}
if (process.env.STRIPE_SECRET_KEY === undefined) {
  throw new Error("STRIPE_SECRETE_KEY is not defined");
}
const stripe = new Stripe(
  process.env.NODE_ENV == "production"
    ? process.env.STRIPE_SECRET_KEY
    : process.env.STRIPE_SECRET_KEY_TEST
);

const buy = async (req) => {
  try {
    const origin = (await headers()).get("origin");
    const body = await req.json();
    console.log("Request Body:", body);

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: body.priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/course-details?id=${body.id}&success=true`,
      cancel_url: `${origin}/course-details?id=${body.id}&canceled=true`,
    });

    return Response.json(
      {
        message: "Redirecting to checkout",
        url: session.url,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error.message);
    return Response.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
};

export { buy as POST };
