import fetch from "node-fetch";

(async () => {
  const url = "https://api.studio.thegraph.com/query/46780/mech/v0.0.1";
  const query = `
    {
      createMeches(first: 10) {
        id
        mech
        agentId
        price
      }
    }
  `;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } else {
    console.error("Error fetching data:", response.statusText);
  }
})();
