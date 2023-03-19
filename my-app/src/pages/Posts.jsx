import React, { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import PostList from '../components/posts/PostList/PostList';
import Loader from '../components/UI/Loader/Loader';
import Pagination from '../components/UI/pagination/Pagination';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
  
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    });
  
    useEffect(() => {
        fetchPosts();
    }, [page]);
  
  
    const changePage = (page) => {
      setPage(page);
    };
  
    return (
      <div className="posts" style={{'width': '50%'}}>
       
        <hr style={{ margin: "15px 0" }} />
        
        {postError && <h1>Error happened {postError}</h1>}
        {isPostsLoading ? (
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
          >
            <Loader />
          </div>
        ) : (
          <PostList
            posts={posts}
            title="List of Posts:"
          />
        )}
        <Pagination changePage={changePage} totalPages={totalPages} />
      </div>
    );
};

export default Posts;