import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
  'title': 'Aanand Washing Center',
  'description': 'We provide services related to washing and cleaning of your carpets.'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body>
        <Provider>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout