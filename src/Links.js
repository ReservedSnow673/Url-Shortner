import axios from "axios";
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"

export default function LinkResult({ inputValue }) {
    const [shortenLink, setShortenLink] = useState("")
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
            setShortenLink(res.data.result.full_short_link)
            navigator.clipboard.writeText(res.data.result.full_short_link);
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (inputValue.length) {
            fetchData();
        }
    }, [inputValue]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [copied]);

    if(loading) {
        return <p className="mt-6 text-sm text-center text-gray-400">Loading...</p>
    }

    if(error) {
        return <p className="mt-6 text-sm text-center text-gray-400">Something went wrong...</p>
    }

    return (
        <>
            {shortenLink && (
                <div className="result">
                    <p className="mt-6 text-sm text-center text-gray-400">Shortened Link copied to clipboard</p>

                    
                </div>
            )}
        </>
    )
}