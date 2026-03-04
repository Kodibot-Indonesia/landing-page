/**
 * LMS platform URL (different domain from landing page).
 * Override via PUBLIC_LMS_URL env var (e.g. in .env: PUBLIC_LMS_URL=https://app.kodibot.id)
 */
export const LMS_URL = import.meta.env.PUBLIC_LMS_URL || 'https://app.kodibot.id';
