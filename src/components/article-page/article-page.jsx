import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Result } from 'antd';
import { Article } from '../article';
import { loadArticle } from '../../redux/actions/articlesActions';
import Spinner from '../spinner';
import { selectArticleBySlug, selectArticles } from '../../redux/selectors';

const ArticlePage = () => {
  const { slug } = useParams();
  const { loaded, loadingError } = useSelector(selectArticles);
  const article = useSelector(selectArticleBySlug(slug));
  const dispatch = useDispatch();
  useEffect(() => {
    if (!article) {
      dispatch(loadArticle(slug));
    }
  }, [slug, dispatch, article]);

  if (loadingError) {
    return <Result status="error" title="Oops, something went wrong" />;
  }
  return loaded ? <Article article={article} /> : <Spinner />;
};

export default ArticlePage;
