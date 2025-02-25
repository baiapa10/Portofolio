import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import Header from "./porto/Header";
import Porto from "./porto/Porto";

// Buat tema kustom
const theme = createTheme({
  palette: {
    primary: {
      main: "#0E162A", // Warna biru
    },
    secondary: {
      main: "#A9A9A9", // Warna mint
    },
  },
});

function Welcome() {
  // State untuk posisi kursor
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Fungsi untuk menangani pergerakan mouse
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
  };

  return (
    <ThemeProvider theme={theme}>
      <Header position="sticky" />
      <div
        onMouseMove={handleMouseMove} // Tangkap pergerakan mouse
          style={{
          background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(167, 169, 169, 0.02), ${theme.palette.primary.main} 30%)`, // Efek senter dengan warna #A9A9A9 dan radius lebih kecil
          color: theme.palette.secondary.main, // Teks warna mint
          height: "100vh", // Tinggi layar penuh
          width: "100vw", // Lebar layar penuh
          display: "flex", // Menggunakan flexbox untuk tata letak
          flexDirection: "column",
          justifyContent: "center", // Vertikal di tengah
          alignItems: "center", // Horizontal di tengah
          position: "relative", // Agar bintang bisa ditempatkan di atas background
          overflow: "hidden", // Menyembunyikan bintang yang melampaui area
        }}
      >
        <Porto />
        {/* Elemen untuk bintang */}
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="star"
            style={{
              // position: "absolute",
              // top: `${Math.random() * 100}vh`,
              // left: `${Math.random() * 100}vw`,
              // width: `${Math.random() * 2 + 2}px`,
              // height: `${Math.random() * 2 + 2}px`,
              backgroundColor: "white",
              borderRadius: "50%",
              opacity: Math.random(),
              animation: `starAnimation ${Math.random() * 3 + 2}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Definisikan animasi CSS */}
      <style>
        {`
          @keyframes starAnimation {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(0.8);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </ThemeProvider>
  );
}

export default Welcome;
