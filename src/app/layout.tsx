import './../../public/styles.css'; 
export default function RootLayout({children}: {children: React.ReactNode}){
return(
     <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nidhish Yarlagadda</title>
        <meta name="description" content="Web site created by Nidhish Yarlagadda" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
)
}