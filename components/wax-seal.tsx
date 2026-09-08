export function WaxSeal({ small = false }: { small?: boolean }) {
  return (
    <span className={`wax-seal${small ? ' wax-seal--small' : ''}`} aria-hidden="true">
      <span className="wax-seal__ring" />
      <span className="wax-seal__letter">Q</span>
      <span className="wax-seal__shine" />
    </span>
  );
}
