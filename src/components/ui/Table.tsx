interface TableProps {
  data: any[];
  columns: string[];
  isLoading?: boolean;
  renderCell?: (row: any, column: string) => React.ReactNode;
}

export default function Table({ data, columns, isLoading, renderCell }: TableProps) {
  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-12 bg-gray-200 rounded mb-2"></div>
        ))}
      </div>
    );
  }
  if (data.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No data available
      </div>
    );
  }


  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 border-t ">
          {data.map((row, rowIndex) => (
            <tr key={row.id || rowIndex} className="hover:bg-gray-50">
              {columns.map((column) => (
                <td key={column} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-9">
                  {renderCell ? (
                    renderCell(row, column)
                  ) : (
                    // Safe fallback: try common key patterns
                    row[column] ??
                    row[column.toLowerCase()] ??
                    row[column.toLowerCase().replace(/\s+/g, '_')] ??
                    row[column.replace(/\s+/g, '')] ??
                    '-'
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}