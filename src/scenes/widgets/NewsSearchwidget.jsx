import React, { useEffect, useState } from 'react';
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useParams } from 'react-router-dom';

const NewsSearchWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const { searchTerm } = useParams();
    const [searchNews, setSearchNews] = useState([]);
    const [searchNewsError, setSearchNewsError] = useState(null);
    const API_KEY = '8cee84c3b71c4850bc1ee18eea3ce3c0'; // replace with your NewsAPI key

    useEffect(() => {
        // Fetch search news
        fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                if (data.articles.length === 0) {
                    throw new Error('No news found');
                }
                setSearchNews(data.articles);
            })
            .catch(() => setSearchNewsError('No news found'));
    }, [searchTerm]);

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Search Results
                </Typography>
                <Typography color={medium}>Search Term: {searchTerm}</Typography>
            </FlexBetween>

            <Typography color={dark} variant="h6" fontWeight="500">
                Search News
            </Typography>
            {searchNewsError ? (
                <Typography color={medium}>{searchNewsError}</Typography>
            ) : (
                <ul>
                    {searchNews.slice(0, 10).map((news, index) => (
                        <li key={index}>
                            <a href={news.url} target="_blank" rel="noopener noreferrer">
                                <Typography color={medium}>
                                    {news.title}
                                </Typography>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </WidgetWrapper>
    );
};

export default NewsSearchWidget;