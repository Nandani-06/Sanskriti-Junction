const MeditationIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Sitting person */}
      <circle cx="12" cy="4" r="2" />
      <path d="M5 20c2-3 4-5 7-5s5 2 7 5" />
      <path d="M9 12l-2 4" />
      <path d="M15 12l2 4" />
      <path d="M12 6v4" />
    </svg>
  );
};

export default MeditationIcon;
