// mockData.ts
export const Posts: MockDataType[] = [
  { id: '1', title: 'Hello World', content: 'This is the first post.' },
  { id: '2', title: 'React Router Rocks', content: 'All about routing.' },
  { id: '3', title: 'Zustand or Context?', content: 'State management talk.' },
  {id: '4', title:"learning the TanStack Query", content:" I wanna explore and see if i can use this for every task i do."}
];

export type MockDataType = {
    id: string
    title: string
    content: string
}
