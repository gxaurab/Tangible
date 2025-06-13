import React from "react";

type ListRendererProps<T> = {
  items: T[]; 
  renderItem: (item: T) => React.ReactNode; 
};

export function ListRenderer<T>({ items, renderItem }: ListRendererProps<T>) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
