// import React from "react";
// import { Container, Typography, makeStyles } from "@material-ui/core";
// import Typewriter from 'typewriter-effect';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: "transparent", 
//   },
//   text: {
//     zIndex: '20',
//     color: 'white',
//     fontFamily: 'PT Serif',
//   },
//   greeting: {
//     fontSize: '55px'
//   },
// }));

// const Top = () => {
//   const classes = useStyles();
//   return (
//     <div
//       // style={{
//       //   backgroundImage: "url(chi-new.png)",
//       //   backgroundRepeat: "no-repeat",
//       //   height: "85vh",
//       //   width: "100%",
//       //   zIndex: "-10",
//       //   filter: "brightness(0.5)",
//       //   backgroundSize: "100%",
//       // }}
//     >
//       <Container maxwidth="sm" className={classes.root}>
//         <div id="#top" className={classes.text}>
//           <div id="top-header" >
//             <Typography className={classes.greeting}>
//               Hi.
//             </Typography>
//           </div>
//           <div id="typewriter">
//           <Typewriter   onInit={(typewriter) => {
//         typewriter.typeString('My name is Aram.')
//         .pauseFor(2000)
//         .deleteAll()
//         .typeString('I am a lot of things.')
//         .pauseFor(2000)
//         .deleteChars(14)
//         .typeString('problem-solver.')
//         .pauseFor(2500)
//         .deleteChars(15)
//         .typeString('builder.')
//         .pauseFor(2500)
//         .deleteChars(8)
//         .typeString('teacher.')
//         .pauseFor(2500)
//         .deleteChars(8)
//         .typeString('student.')
//         .pauseFor(2500)
//         .deleteChars(8)
//         .typeString('fullstack software engineer.')
//         .pauseFor(3000)
//         .deleteAll()
//         .typeString('If you are in Chicago, lets meet for lunch!')
//         .start();
//       }}/>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Top;
