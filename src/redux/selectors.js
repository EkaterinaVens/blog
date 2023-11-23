import { createSelector } from 'reselect';

export const selectUserSession = (state) => state.userSession;
export const selectArticles = (state) => state.articles;

export const selectArticleBySlug = (slug) =>
  createSelector(selectArticles, ({ articles }) => {
    return articles.find((item) => item.slug === slug);
  });

export const selectForms = (state) => state.forms;
