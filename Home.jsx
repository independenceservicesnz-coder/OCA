const BASE = '/api';

function getToken() {
  return localStorage.getItem('vip_token');
}

async function request(path, { method = 'GET', body, auth = true } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const token = auth ? getToken() : null;
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || 'Something went wrong. Please try again.');
  }
  return data;
}

export const api = {
  register: (payload) => request('/auth/register', { method: 'POST', body: payload, auth: false }),
  login: (payload) => request('/auth/login', { method: 'POST', body: payload, auth: false }),
  me: () => request('/auth/me'),

  getCategories: () => request('/categories'),
  getCategory: (slug) => request(`/categories/${slug}`),

  getVideos: (categorySlug) => request(`/videos${categorySlug ? `?category=${categorySlug}` : ''}`),
  getVideo: (id) => request(`/videos/${id}`),

  markWatched: (videoId) => request(`/progress/${videoId}/watched`, { method: 'POST' }),
  markComplete: (videoId, completed = true) =>
    request(`/progress/${videoId}/complete`, { method: 'POST', body: { completed } }),
  getSummary: () => request('/progress/summary')
};

export { getToken };
