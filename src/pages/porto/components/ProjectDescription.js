import { Typography, List, ListItem, Divider, Box } from "@mui/material";
import MuiLink from "@mui/material/Link";

const ProjectDescription = () => {
    return (
    <List sx={{ width: '100%', maxWidth: 960 }}>
            <ListItem
                alignItems="flex-start"
                component={MuiLink} // Menjadikan ListItem sebagai tautan
                href="https://www.figma.com/design/2BacTGFuHC8Gparjya2RMN/Appets-Website?node-id=0-1&m=dev&t=xzAh4zfWVAYMI0fv-1" // Ganti dengan URL tujuan Anda
                target="_blank" // Membuka tautan di tab baru (opsional)
                sx={{
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    }, 
                    "&:hover .primary-text": {
                            color: "rgba(30, 228, 228, 0.86)", // Warna saat hover
                        },
                }}
            >
              {/* Gambar menggantikan teks tanggal */}
                <img
                    src="\image\figmaAppets.png" // Ganti dengan path gambar Anda
                    alt="Data Analytics"
                    style={{
                        marginRight: '16px',
                        width: '356px',
                        height: '96px',
                        borderRadius: '8px', // Opsional: Membuat gambar sedikit melengkung
                        objectFit: 'cover',
                }}
                />
                <Box>
                    {/* Judul */}
                    <Typography
                    color="white"
                    sx={{
                        fontWeight: 'bold', // Menambahkan efek tebal
                        fontSize: '1.2rem', // Ukuran teks
                    }}
                    >
                    Appets
                    </Typography>
                    {/* Deskripsi */}
                    <Typography
                    className="primary-text"
                    color="rgba(255, 255, 255, 0.8)" // Warna deskripsi
                        sx={{
                        fontSize: '0.9rem',
                        marginTop: '4px', // Menambahkan jarak antara teks pertama dan kedua
                    }}
                    >
                    I was responsible for the UI/UX and front-end development of this website. 
                    The project is complete and available on GitHub.
                    </Typography>
                </Box>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem
                    alignItems="flex-start"
                    component={MuiLink} // Menjadikan ListItem sebagai tautan
                    href="https://github.com/baiapa10/Animelist" // Ganti dengan URL tujuan Anda
                    target="_blank" // Membuka tautan di tab baru (opsional)
                    sx={{
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                        },
                        "&:hover .primary-text": {
                            color: "rgba(30, 228, 228, 0.86)", // Warna saat hover
                        },
                    }}
                >
                {/* Gambar menggantikan teks tanggal */}
                    <img
                        src="\image\animelisttt.png" // Ganti dengan path gambar Anda
                        alt="Web Developer"
                        style={{
                            marginRight: '16px',
                            width: '160px',
                            height: '96px',
                            borderRadius: '8px', // Opsional: Membuat gambar sedikit melengkung
                            objectFit: 'cover',
                        }}
                />
                <Box>
                    {/* Judul */}
                    <Typography
                    color="white"
                    sx={{
                        fontWeight: 'bold', // Menambahkan efek tebal
                        fontSize: '1.2rem', // Ukuran teks
                    }}
                    >
                    Animelist
                    </Typography>
                    {/* Deskripsi */}
                    <Typography
                    className="primary-text"
                    color="rgba(255, 255, 255, 0.8)" // Warna deskripsi
                    sx={{
                        fontSize: '0.9rem',
                        marginTop: '4px', // Menambahkan jarak antara teks pertama dan kedua
                    }}
                    >
                        I developed the UI/UX and front-end of this website, 
                        integrating an API to display anime data. The project is complete and available on GitHub.
                    </Typography>
                </Box>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem
                alignItems="flex-start"
                component={MuiLink} // Menjadikan ListItem sebagai tautan
                href="https://joyful-treacle-a9c991.netlify.app/vancerun_games.html" // Ganti dengan URL tujuan Anda
                target="_blank" // Membuka tautan di tab baru (opsional)
                sx={{
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    },
                    "&:hover .primary-text": {
                        color: "rgba(30, 228, 228, 0.86)", // Warna saat hover
                    },
                }}
                >
                {/* Gambar menggantikan teks tanggal */}
                <img
                    src="\image\coingames.png" // Ganti dengan path gambar Anda
                    alt="Web Developer"
                    style={{
                    marginRight: '16px',
                    width: '360px',
                    height: '96px',
                    borderRadius: '8px', // Opsional: Membuat gambar sedikit melengkung
                    objectFit: 'cover',
                    }}
                />
                <Box>
                    {/* Judul */}
                    <Typography
                    color="white"
                    sx={{
                        fontWeight: 'bold', // Menambahkan efek tebal
                        fontSize: '1.2rem', // Ukuran teks
                    }}
                    >
                    Vance game
                    </Typography>
                    {/* Deskripsi */}
                    <Typography
                    className="primary-text"
                    color="rgba(255, 255, 255, 0.8)" // Warna deskripsi
                    sx={{
                        fontSize: '0.9rem',
                        marginTop: '4px', // Menambahkan jarak antara teks pertama dan kedua
                    }}
                    >
                    The project is still in its early stages and is currently in progress.
                    However, you can try the demo by clicking the available link.
                    </Typography>
                </Box>
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
    );
};

export default ProjectDescription;
