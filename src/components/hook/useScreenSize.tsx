"use client"

import { useState, useEffect } from 'react';

const useScreenSize = () => {
const isClient = typeof window !== 'undefined';
const [screenSize, setScreenSize] = useState({
	width: isClient ? window.innerWidth : 0,
	height: isClient ? window.innerHeight : 0,
});

useEffect(() => {
	if (!isClient) return;
	const handleResize = () => {
	setScreenSize({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	};

	window.addEventListener('resize', handleResize);
	return () => window.removeEventListener('resize', handleResize);
}, [isClient]);

return screenSize;
};

export default useScreenSize;
