import React, { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
    const updateCursor = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursor);
    return () => {
        document.removeEventListener("mousemove", updateCursor);
    };
    }, []);

    return (
    <div
        style={{
        position: "fixed",
        top: position.y - 242,
        left: position.x - 242,
        width: "522px",
        height: "522px",
        backgroundColor: "rgba(217, 222, 226, 0.02)", // Warna abu-abu dengan transparansi
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        }}
    />
    );
};

export default CustomCursor;