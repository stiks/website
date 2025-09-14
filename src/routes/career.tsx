import { createFileRoute } from '@tanstack/react-router';

import Career from '@/lib/pages/career';

export const Route = createFileRoute('/career')({
  component: Career,
});
