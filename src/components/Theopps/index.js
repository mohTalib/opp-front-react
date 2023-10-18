import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HtmlRenderer = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Fetch HTML content from Django API
    axios.get('/api/get_html_content/')
      .then(response => {
        setHtmlContent(response.data);
      })
      .catch(error => {
        console.error('Error fetching HTML content:', error);
      });
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default HtmlRenderer;
