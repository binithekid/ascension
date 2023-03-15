import Head from "next/head";
import logo from "../../public/AscensionLogo.png";
import Image from "next/image";
import { useState } from "react";
import { headers } from "../../next.config";

export default function Home() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: email,
    };
    fetch("api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSuccessMessage(true);
      });
  };

  return (
    <>
      <Head>
        <title>Ascension London</title>
        <meta name='description' content='Ascension London' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='main'>
        <Image
          src={logo}
          alt='Logo'
          className='logo'
          width={700}
          height={700}
        />
        <h1 className='description'>
          To attend our upcoming events enter your email below:
        </h1>
        <form className='formContainer' onSubmit={handleSubmit}>
          <input
            type='email'
            className='input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className='submitButton' disabled={!email}>
            Submit
          </button>
        </form>
        {successMessage && (
          <p className='successMessage'>Email submitted succesfully</p>
        )}
      </main>
    </>
  );
}
