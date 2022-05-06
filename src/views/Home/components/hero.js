import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [isReadyForInstall, setIsReadyForInstall] = useState(false)

  useEffect(() => {
    window.addEventListener('appinstalled', (event) => {
      console.log('👍', 'appinstalled', event)
      // Clear the deferredPrompt so it can be garbage collected
      window.deferredPrompt = null
    })

    window.addEventListener('beforeinstallprompt', (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault() // Prevents prompt display
      console.log('👍', 'beforeinstallprompt', event)
      // Stash the event so it can be triggered later.

      window.deferredPrompt = event
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true)
    })
  }, [])

  async function downloadApp () {
    console.log('👍', 'butInstall-clicked')
    const promptEvent = window.deferredPrompt
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log('oops, no prompt event guardado en window', 'The deferred prompt isnt available.')
      return
    }
    // Show the install prompt.
    promptEvent.prompt()
    // Log the result
    const result = await promptEvent.userChoice
    console.log('👍', 'userChoice', result)
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null
    // Hide the install button.
    setIsReadyForInstall(false)
  }

  return (
    <section id='hero'>
      <div className='hero-container'>
        <div className='wow fadeIn'>
          <div className='hero-logo'>
            <img src='Home/img/avataaars.svg' alt='ProOnliPc' width={200} />
          </div>
          <h1>Welcome to AppSoft</h1>
          <h2>
            We create
            <span className='rotating'>beautiful graphics, functional websites, working mobile apps</span>
          </h2>
          <div className='actions'>
            <a href='/login' className='btn-get-started'>
              Login
            </a>
            <a href='#services' className='btn-services'>
              SignUp
            </a>

            {isReadyForInstall && (
              <a href='#services' className='btn-services'>
                <button onClick={downloadApp}> Install </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
