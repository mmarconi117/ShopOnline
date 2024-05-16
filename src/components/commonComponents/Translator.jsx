import React, { useEffect, useRef, useState, useCallback } from 'react';

const TranslateButton = () => {
    const translateContainerRef = useRef(null);
    const [apiLoaded, setApiLoaded] = useState(false);

    const initializeTranslateElement = useCallback(() => {
        if (!apiLoaded) { // Ensure it's not already loaded
            new window.google.translate.TranslateElement(
                { pageLanguage: 'en' },
                'google_translate_element'
            );
            setApiLoaded(true); // Set apiLoaded to true only once
        }
    }, [apiLoaded]); // Depend on apiLoaded

    useEffect(() => {
        //document.getElementByT\\\\
        const loadGoogleTranslateAPI = () => {
            if (!window.google || !window.google.translate || !window.google.translate.TranslateElement) {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
                script.async = true;
                script.onload = initializeTranslateElement; // Call the memoized function
                document.head.appendChild(script);
            } else {
                initializeTranslateElement();
            }
        };

        window.googleTranslateElementInit = initializeTranslateElement;

        loadGoogleTranslateAPI();

        return () => {
            delete window.googleTranslateElementInit;
        };
    }, [initializeTranslateElement]); // Depend on initializeTranslateElement

    return (
        <div id="google_translate_element" style={{width:"15rem",marginLeft:"5rem"}} ref={translateContainerRef}></div>
    );
};

export default TranslateButton;
