import PostList from './partials/PostList';

export default function TheMain() {
  return (
    <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-3">
      <PostList />
    </div>
  );
}
