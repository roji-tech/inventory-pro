// import styled from "styled-components";
// import { Logo } from "@components/Logo";
// import Link from "next/link";

// export function AuthLayout({ children, text = "", extraText = "" }) {
//   return (
//     <Container className="_my_auto_scroll_v _flex_jcc _p10">
//       <div id="auth_main" className="_flex_col _p20">
//         <section className="_flex_center _p5">
//           <Logo align={"center"} />
//         </section>
//         <section className="content _bg_white">
//           <header className="_flex_col">
//             <h2 style={{ fontSize: "30px", paddingTop: "25px" }}>{text}</h2>
//             <small>{extraText}</small>
//           </header>

//           <div className="" style={{ padding: "10px 30px" }}>
//             {children}
//           </div>
//           <center className="_p30">
//             <Link href={"/auth/activate"}>
//               <p className="_p5" style={{ border: "1px solid #00000030" }}>
//                 Reactivate my account
//               </p>
//             </Link>
//           </center>
//         </section>
//       </div>
//     </Container>
//   );
// }

// const Container = styled.header`
//   &&& {
//     background: #ffffff;

//     #auth_main {
//       width: min(450px, 100%);

//       > * {
//         width: 100%;
//       }

//       > .content {
//         box-shadow: 0 0 1px 0 #00000040;

//         > header {
//           padding: 10px 30px;
//         }

//         > div {
//         }
//       }
//     }
//   }
// `;
