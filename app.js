window.APP_CONFIG = Object.assign(
  {
    API_BASE: "https://quiet-field-a529.xc2375.workers.dev",
    COURSE: "humanities2",
    LESSON: "3-4"
  },
  window.APP_CONFIG || {}
);

window.postJson = async function postJson(url, payload) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const contentType = res.headers.get("content-type") || "";
  let data = null;
  if (contentType.includes("application/json")) {
    data = await res.json();
  } else {
    const text = await res.text();
    data = { result: text };
  }

  if (!res.ok) {
    throw new Error(data?.error || `Request failed with ${res.status}`);
  }

  return data;
};

window.logLessonEvent = async function logLessonEvent(payload) {
  try {
    await window.postJson(`${window.APP_CONFIG.API_BASE}/log`, payload);
  } catch (err) {
    console.warn("logLessonEvent failed", err);
  }
};
