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

  async run(loan, rate, homePrice, homeAppreciation, additionalMonthlyPayment, years, propertyTaxRate, propTaxIncreaseRate, taxDiscountRate, summitApiKey) {

    // Bail if this isn't defined.  Expand to others.
    if (loan.value === undefined) {
      return undefined;
    }

    const apiUrl = `https://api.usesummit.com/v1/free-calculators/b79052/the-home-mortgage-calculator/`;

    const modelData = await cache.fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': summitApiKey
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

    // Filter results that have a 'values' property, then extract 'total_accrued_interest'
    const filteredResults = modelData.results.filter(r => r.values !== undefined);
    const lastResult = filteredResults[filteredResults.length - 1];
    let totalAccruedInterest: number;

    if (lastResult && lastResult.values) {
        totalAccruedInterest = Math.round(lastResult.values.total_accrued_interest);
    } else {
        totalAccruedInterest = 0; // or handle this case as you see fit
    }

    return JSON.stringify(totalAccruedInterest);

  },
});
