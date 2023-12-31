import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Spin, Result } from 'antd';
import { loadArticles, setPage } from '../../redux/actions/articlesActions';

import { ArticlePreview } from '../article';
import { selectArticles } from '../../redux/selectors';

import cls from './home-page.module.scss';
import './pagination.scss';

const renderArticles = (articles) => {
  return articles.map((article) => (
    <li className={cls.item} key={article.slug}>
      <ArticlePreview article={article} />
    </li>
  ));
};

const renderSpinner = () => {
  return (
    <div className={cls.spinnerContainer}>
      <Spin size="large" />
    </div>
  );
};

export default function HomePage() {
  const { articles, articlesCount, loaded, loadingError, page } = useSelector(selectArticles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadArticles(Number(page)));
  }, [page, dispatch]);
  if (loadingError) {
    return <Result status="error" title="Oops, something went wrong" />;
  }
  return (
    <div className={cls.container}>
      <ul className={cls.list}>{loaded ? renderArticles(articles) : renderSpinner()}</ul>
      {loaded && (
        <Pagination
          current={Number(page)}
          total={Number(articlesCount)}
          showSizeChanger={false}
          onChange={(number) => dispatch(setPage(number))}
        />
      )}
    </div>
  );
}
