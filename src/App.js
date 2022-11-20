import { useState } from 'react';
import './App.css';
import InputShortener from './InputShortner';
import LinkResult from './Links'


function App() {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="App">
            <div className="bg-white dark:bg-gray-900">
                <div className="flex justify-center h-screen">
                    <div className="hidden bg-cover lg:block lg:w-2/3" id='cover'>
                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div>
                                <h2 className="text-4xl font-bold text-white">Why to Shorten Your URL?</h2>

                                <p className="max-w-xl mt-3 text-gray-300">
                                    An URL shortener ensures that you get the right messages out to your audience without taking up too much space in your social posts.

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                        <div className="flex-1">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Url Shortner</h2>

                                <a href='https://linktr.ee/reservedsnow' className="mt-3 text-gray-500 dark:text-gray-300">Powered by SnowStudios</a>
                            </div>

                            <div className="mt-8">

                                <InputShortener setInputValue={setInputValue} />
                                <LinkResult inputValue={inputValue} />



                                <p className="mt-6 text-sm text-center text-gray-400">Want something done? <a href="https://linktr.ee/reservedsnow" className="text-indigo-500 focus:outline-none focus:underline hover:underline">Contact Us</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
