const form = document.querySelector(".care-finder");
const result = document.querySelector(".finder-result");

if (form && result) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const plant = data.get("plant");
    const light = data.get("light");
    const soil = data.get("soil");
    const humidity = data.get("humidity");
    const leaf = data.get("leaf");
    const plantAdvice = {
      flowering: "Track buds and spent blooms this week so feeding and pruning match the bloom cycle.",
      foliage: "Watch new leaf size and color to confirm the light level is supporting steady growth.",
      succulent: "Keep the mix gritty and let the pot dry more fully before the next watering."
    };
    const humidityAdvice = {
      average: "Average humidity is fine for many plants, but keep the plant away from strong drafts.",
      dry: "Dry air can crisp leaf edges, so group plants together or use a pebble tray for gentle humidity support.",
      humid: "Humid rooms slow soil drying, so improve airflow and be slower with watering."
    };
    const leafAdvice = {
      steady: "Leaves look steady, so keep changes small and avoid overcorrecting.",
      drooping: "Drooping can mean thirst, root stress, or heat stress. Check soil before adding water.",
      yellowing: "Yellowing often points to watering imbalance, weak drainage, aging leaves, or low light.",
      browning: "Browning tips can come from dry air, inconsistent watering, salt buildup, or harsh direct sun."
    };
    const extra = plantAdvice[plant] || "Keep logging changes so the care plan improves with observation.";
    const humidityTip = humidityAdvice[humidity] || "Watch humidity alongside soil drying speed.";
    const leafTip = leafAdvice[leaf] || "Use leaf changes as a signal, then confirm with soil and light checks.";
    let wateringStep = "";
    let lightStep = "";

    if (soil === "wet") {
      wateringStep = "Pause watering. Check drainage holes, empty saucers, improve airflow, and wait for the pot to feel lighter.";
    } else if (soil === "damp") {
      wateringStep = "Wait another few days. Keep observing leaf posture and soil moisture before watering again.";
    } else if (plant === "succulent") {
      wateringStep = "Water only if the mix is dry deeper down. Succulents need a dry rest between watering.";
    } else {
      wateringStep = "Water thoroughly if the pot feels light, then let excess water drain fully.";
    }

    if (light === "bright") {
      lightStep = "Bright indirect light is useful for strong growth and blooms. Rotate the pot so growth stays balanced.";
    } else if (light === "medium") {
      lightStep = "Medium light supports steady growth, but flowering plants may need a brighter position to bloom well.";
    } else {
      lightStep = "Low light slows drying and growth. Reduce watering frequency and avoid heavy feeding.";
    }

    result.innerHTML = `
      <strong>AI-assisted care plan</strong>
      <span><b>Watering:</b> ${wateringStep}</span>
      <span><b>Light:</b> ${lightStep}</span>
      <span><b>Humidity:</b> ${humidityTip}</span>
      <span><b>Leaf signal:</b> ${leafTip}</span>
      <span><b>Plant focus:</b> ${extra}</span>
    `;
  });
}
