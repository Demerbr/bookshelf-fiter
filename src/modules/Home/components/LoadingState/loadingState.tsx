export function LoadingState() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-amazon border border-amazon-border p-4 animate-pulse">
          <div className="aspect-[2/3] bg-amazon-gray rounded mb-4"></div>
          <div className="h-4 bg-amazon-gray rounded mb-3"></div>
          <div className="h-3 bg-amazon-gray rounded mb-2"></div>
          <div className="h-3 bg-amazon-gray rounded w-2/3"></div>
        </div>
      ))}
    </div>
  );
}