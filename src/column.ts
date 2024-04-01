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

  async run(loan, rate, homePrice, homeAppreciation, additionalMonthlyPayment, years, propertyTaxRate, propTaxIncrease_rate, taxDiscountRate, summitApiKey) {

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
          "home_price": homePrice.value,
          "home_appreciation": homeAppreciation.value,
          "additional_monthly_payment": additionalMonthlyPayment.value,
          "years": years.value,
          "property_tax_rate": propertyTaxRate.value,
          "prop_tax_increase_rate": propTaxIncreaseRate.value,
          "tax_discount_rate": taxDiscountRate.value
        }
      })
    });

    // const profile = await cache.fetch(
    //   `https://api.github.com/users/${username.value}`
    // );
    return JSON.stringify(modelData);
  },
});
