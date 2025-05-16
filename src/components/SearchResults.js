import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Api_key } from '../utils/constants';

const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery().get("q");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const res = await fetch(`${YOUTUBE_API}${encodeURIComponent(query)}&key=${Api_key}`);
      const json = await res.json();
      setVideos(json.items || []);
    }

    if (query) fetchVideos();
  }, [query]);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map(video => (
          <div key={video.id.videoId || video.etag} className="border p-2 rounded shadow">
            <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" className="w-full" />
            <p className="mt-2 font-medium">{video.snippet.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
