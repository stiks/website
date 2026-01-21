import { ROLES, type RoleData, type RoleType } from '@/lib/data/roles';

interface RoleSectionProps {
  className?: string;
  roleData: RoleData;
  currentRole: RoleType;
  onRoleChange: (role: RoleType) => void;
}

export const RoleSection = ({
  className,
  currentRole,
  onRoleChange,
}: RoleSectionProps) => {
  return (
    <section className={`mx-auto px-4 py-4 relative ${className || ''}`}>
      <div className="flex flex-wrap gap-2 my-4">
        {(Object.keys(ROLES) as Array<RoleType>).map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => onRoleChange(r)}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
              currentRole === r
                ? 'bg-orange-500 text-white'
                : 'bg-orange-100 text-orange-600 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:hover:bg-orange-900/50'
            }`}
          >
            {ROLES[r].title}
          </button>
        ))}
      </div>
    </section>
  );
};
