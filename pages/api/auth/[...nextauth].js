import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
      ],

    theme: {
        colorScheme: "auto", // "auto" | "dark" | "light"
        brandColor: "b33f4c", // Hex color code
        logo: "/images/Logo_picante.png", // Absolute URL to image
        buttonText: "b33f4c" // Hex color code
    },

    callbacks: {
        async signIn ({user}) {
          const { name, email, image } = user            
            try {
              //const res = await fetch('https://picante-serigrafia.com.ar/api/user', {
              const res = await fetch('http://localhost:3000/api/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, image })
              })
              if (res.ok) {
                return user 
              } else {
                return user
              }
                         
            } catch (error) {
              console.log(error)
            }
        }
    }
    
})