export default function ResponsiveTableStyle() {
  return (
    <style jsx global>{`
      @media (max-width: 767px) {
        article main table {
          display: block;
          width: 100%;
          overflow-x: auto;
        }

        article main table th,
        article main table td {
          min-width: 7rem;
        }

        article main table th:last-child,
        article main table td:last-child {
          min-width: 15rem;
        }
      }
    `}</style>
  )
}
