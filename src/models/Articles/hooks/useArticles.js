import React, { useState, useEffect } from 'react';
import { useModelIndex, useModel } from '../../../hooks';

const useArticles = () => {
  const [articles, setArticles] = useState([]);

  const { data, pagination, success, status, refetch: refetchIndex } = useModelIndex({
    modelName: 'articles',
    params: {},
  });

  const { status: createStatus, refetch: refetchModel, createModelInstance, model } = useModel({
    modelName: 'articles',
  });

  const fetchArticlesIndex = () => {
    refetchIndex();
  };

  const createArticle = async ({ inputs, ...props }) => {
    await createModelInstance({ inputs });
  };

  useEffect(() => {
    fetchArticlesIndex();
  }, []);

  return {
    articles: data,
    pagination,
    fetchArticlesIndex,
    refetchIndex: page => refetchIndex(page),
    createArticle,
    createStatus,
  };
};

export default useArticles;
