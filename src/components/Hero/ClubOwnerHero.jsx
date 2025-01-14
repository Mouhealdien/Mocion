import Box from "@mui/material/Box";
// import poster from "../../assets/banner/2.png";
// import net from "../../assets/banner/1.png";
// import text from "../../assets/banner/3.png";

import banner from "../../assets/65.gif";

export default function ClubOwnerHero() {
  return (
    <Box
      id="home"
      component="img"
      loading="lazy"
      src={banner}
      sx={{
        width: "100%",
        height: { md: "80vh", sm: "60vh" },
        marginTop: { sm: "8rem", xs: "14rem" },
      }}
    />
  );
}

// export default function ClubOwnerHero() {
//   return (
//     <Box
//       id="home"
//       sx={{
//         position: "relative",
//         marginBottom: {
//           xl: "37.5rem",
//           lg: "37.5rem",
//           md: "35rem",
//           sm: "210px",
//           xs: "160px",
//         },
//       }}
//     >
//       <Box
//         sx={{
//           height: {
//             "2xl": "20rem",
//             xl: "20rem",
//             lg: "20rem",
//             md: "20rem",
//             sm: "20rem",
//             xs: "20rem",
//           },
//         }}
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             height: {
//               "2xl": "45rem",
//               xl: "45rem",
//               lg: "45rem",
//               md: "20rem",
//               sm: "330px",
//               xs: "95px",
//             },
//             zIndex: 2,
//             top: {
//               "2xl": "12rem",
//               xl: "17rem",
//               lg: "120px",
//               md: "32rem",
//               sm: "0px",
//               xs: "160px",
//             },
//             width: "100%",
//             animation: `${slideInTop} 1.5s ease-out`,
//           }}
//           component="img"
//           src={net}
//           alt="net"
//         />
//       </Box>

//       <Box
//         sx={{
//           position: "absolute",
//           top: {
//             "2xl": 150,
//             xl: 150,
//             lg: 100,
//             md: 100,
//             sm: "80px",
//             xs: "70px",
//           },
//           right: {
//             "2xl": "10%",
//             xl: "10%",
//             lg: "10%",
//             md: "10%",
//             sm: "5%",
//             xs: "1%",
//           },
//           width: {
//             "2xl": 558,
//             xl: "70%",
//             lg: "70%",
//             md: "55%",
//             sm: "550px",
//             xs: "350px",
//           },
//           zIndex: 3,
//           animation: `${slideInRight} 1.5s ease-out`,
//         }}
//         component="img"
//         src={text}
//         alt="text"
//       />

//       <Box
//         sx={{
//           position: "absolute",
//           top: { "2xl": 120, xl: 120, lg: 80, sm: 50, xs: "80px" },
//           left: { "2xl": "2.5%", sm: "2%", xs: "1%" },
//           zIndex: 2,
//           width: {
//             "2xl": "66rem",
//             xl: "70rem",
//             lg: "100rem",
//             md: "76rem",
//             sm: "665px",
//             xs: "365px",
//           },
//           height: { xl: "580px", lg: "500px", md: "330px", sm: "280px" },
//           animation: `${slideInLeft} 1.5s ease-out`,
//         }}
//         component="img"
//         src={poster}
//         alt="poster"
//       />
//     </Box>
//   );
// }
