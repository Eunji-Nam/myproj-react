import PostDetail from 'compomemts/blog/PostDetail';
import { useNavigate } from 'react-router-dom';

function PagePostDetail() {
  const navigate = useNavigate();
  return (
    <div>
      <PostDetail />
      <button
        onClick={() => navigate('/blog/')}
        className="bg-blue-200 text-gray-800 text-sm font-bold rounded py-1 px-2"
      >
        목록으로
      </button>
    </div>
  );
}

export default PagePostDetail;
