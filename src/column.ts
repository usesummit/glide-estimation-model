import * as glide from "./glide";
import { Cache } from "./cache";

const cache = new Cache();

export default glide.column({
  name: "Mortgage Calculator",
  description: "Calculates total costs of refinancing based on market assumptions.",
  author: "Matt Wensing <matt@usesummit.com>",
  params: {
    summitApiKey: {
      displayName: "Summit API Key",
      type: "string"
    },
    purchasePrice: {
      displayName: "Purchase Price",
      type: "number"
    },
    loan: {
      displayName: "Loan Amount",
      type: "number"
    },
    rate: {
      displayName: "Interest Rate (%)",
      type: "number"
    },
    homePrice: {
      displayName: "Home Price",
      type: "number"
    },
    homeAppreciation: {
      displayName: "Home Appreciation Rate (%)",
      type: "number"
    },
    additionalMonthlyPayment: {
      displayName: "Additional Monthly Payment",
      type: "number"
    },
    years: {
      displayName: "Loan Term (Years)",
      type: "number"
    },
    propertyTaxRate: {
      displayName: "Property Tax Rate (%)",
      type: "number"
    },
    propTaxIncreaseRate: {
      displayName: "Property Tax Increase Rate (%)",
      type: "number"
    },
    taxDiscountRate: {
      displayName: "Tax Discount Rate (%)",
      type: "number"
    }
  },
  result: { type: "string" },

  async run(loan, rate, home_price, home_appreciation, additional_monthly_payment, years, property_tax_rate, prop_tax_increase_rate, tax_discount_rate, summit_api_key) {

    // if (username.value === undefined) {
    //   return undefined;
    // }

    const apiUrl = `https://api.usesummit.com/v1/free-calculators/b79052/the-home-mortgage-calculator/data/?api_key=${summit_api_key}`;

    const modelData = await cache.fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "parameters": {
          "loan": loan.value,
          "rate": rate.value,
          "home_price": home_price.value,
          "home_appreciation": home_appreciation.value,
          "additional_monthly_payment": additional_monthly_payment.value,
          "years": years.value,
          "property_tax_rate": property_tax_rate.value,
          "prop_tax_increase_rate": prop_tax_increase_rate.value,
          "tax_discount_rate": tax_discount_rate.value
        }
      })
    });

    // const profile = await cache.fetch(
    //   `https://api.github.com/users/${username.value}`
    // );
    return JSON.stringify(modelData);
  },
});
