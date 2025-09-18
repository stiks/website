import { createFileRoute, useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/projects/$project')({
  component: RouteComponent,
});

function RouteComponent() {
  const { project } = useParams({ from: '/projects/$project' }); // adjust path key if needed
  return <div>{`Hello /projects/${project}!`}</div>;
}
