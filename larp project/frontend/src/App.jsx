import './App.css';
import { useState } from 'react';

export default function App() {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  
  async function shortenUrl(url) {
    const response = await fetch(`http://localhost:8000/shorten?url=${url}`, {
        method: "POST"
    });
    const data = await response.json();
    setShortenedUrl(data.short_url);
    return data;
}
  return (
    <>
      <div>url shortener</div>
      <input 
        placeholder="Enter URL to shorten" 
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={() => shortenUrl(url)}>enter</button>
      <div>url: {shortenedUrl}</div>
    </>
  )
}
