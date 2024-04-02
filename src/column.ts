import * as glide from "./glide";
import { Cache } from "./cache";

const cache = new Cache();

export default glide.column({
  name: "Estimated Completion",
  description: "Returns a completion date based on provided schedule and task duration.",
  author: "Matt Wensing <matt@usesummit.com>",
  params: {
    summitApiKey: {
      displayName: "Summit API Key",
      type: "string"
    },
    submittedAt: {
      displayName: "Submitted At",
      type: "string"
    },
    operationalStatus: {
      displayName: "Operational Status",
      type: "number"
    },
    averageTtc: {
      displayName: "Average Time to Complete",
      type: "number"
    },
    operationalSchedule: {
      displayName: "Operational Schedule",
      type: "string"
    },
    timezone: {
      displayName: "Timezone (Olson)",
      type: "string"
    }
  },
  result: { type: "string" },

  async run(summitApiKey, submittedAt, operationalStatus, averageTtc, operationalSchedule, timezone) {

    let modelData;

    try {

      const apiUrl = `https://api.usesummit.com/v1/zapier-partner-test-account/38b4dc/estimated-resolution-time/`;

      modelData = await cache.fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': summitApiKey.value
        },
        body: JSON.stringify({
          "options": {
              "start": "2024-02-01T00:00:00Z",
              "end": "2025-03-01T00:00:00Z",
              "timezone": timezone.value
          },
          "parameters": {
              "ticket_submitted_at": submittedAt.value,
              "is_open": operationalStatus.value,
              "average_ttc": averageTtc.value,
              "operational_schedule": operationalSchedule.value,
              "timezone": timezone.value
          }
        })
      });

    } catch (error) {
      return JSON.stringify({'error': error})
    }

    let completionAt;

    for (let i = modelData.results.length - 1; i >= 0; i--) {
      const result = modelData.results[i];
      // Check if 'completion_at' exists in the 'values' object
      if (result.values && 'completion_at' in result.values) {
        completionAt = result.values.completion_at;
      }
    }

    // // Filter results that have a 'values' property that has contents
    // const filteredResults = modelData.results.filter(r => r.values && Object.entries(r.values).length > 0);
    // const lastResult = filteredResults[filteredResults.length - 1];

    return JSON.stringify({'data': completionAt});

  },

});
