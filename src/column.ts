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

  async run(summitApiKey, loan, rate, homePrice, homeAppreciation, additionalMonthlyPayment, years, propertyTaxRate, propTaxIncreaseRate, taxDiscountRate) {

    // Bail if this isn't defined and echo input parameters.
    // if (summitApiKey.value) {
    //   return JSON.stringify({
    //     "args": {
    //       "summitApiKey": summitApiKey.value,
    //       "loan": loan.value,
    //       "rate": rate.value,
    //       "homePrice": homePrice.value,
    //       "homeAppreciation": homeAppreciation.value,
    //       "additionalMonthlyPayment": additionalMonthlyPayment.value,
    //       "years": years.value,
    //       "propertyTaxRate": propertyTaxRate.value,
    //       "propTaxIncreaseRate": propTaxIncreaseRate.value,
    //       "taxDiscountRate": taxDiscountRate.value
    //     }
    //   });
    // }

    try {

      const apiUrl = `https://api.usesummit.com/v1/free-calculators/b79052/the-home-mortgage-calculator/?api_key=${summitApiKey.value}`;

      const modelData = await cache.fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': summitApiKey.value
        },
        body: JSON.stringify({
          "options": {
            "start": "2024-04-01",
            "end": "2054-05-01",
            "resolution": "year"
          },
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

    } catch (error) {
      return JSON.stringify({'error': error})
    }

    // Filter results that have a 'values' property, then extract 'total_accrued_interest'
    const filteredResults = modelData.results.filter(r => r.values !== undefined);
    const lastResult = filteredResults[filteredResults.length - 1];
    let totalAccruedInterest: number;

    if (lastResult && lastResult.values) {
        totalAccruedInterest = Math.round(lastResult.values.total_accrued_interest);
    } else {
        totalAccruedInterest = 0; // or handle this case as you see fit
    }

    return JSON.stringify(modelData);

  },

});
