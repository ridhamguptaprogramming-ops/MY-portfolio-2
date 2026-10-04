import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './contact.css'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll('.contact__animate')

    gsap.fromTo(
      elements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container contact__inner">

        {/* Contact Text */}
        <div className="contact__text contact__animate">
          <p className="eyebrow">Grow Business? Got Wish.</p>

          <h2>Think you can Dominate the World?</h2>

          <p className="contact__sub">
            Tell us what you do — whatever it is — and our team will reach out
            about any help we can give.
          </p>
        </div>

        {/* Application Form */}
        <form
          className="contact__form contact__animate"
          action="https://formsubmit.co/ridhamgupta020@gmail.com"
          method="POST"
        >
          {/* Email Subject */}
          <input
            type="hidden"
            name="_subject"
            value="New Application Submission - India's Got Latent"
          />

          {/* Thank You Auto Response */}
          <input
            type="hidden"
            name="_autoresponse"
            value="Thanks for applying! We have received your application and will review your submission soon."
          />

          {/* Disable Captcha */}
          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          {/* Prevent FormSubmit Template */}
          <input
            type="hidden"
            name="_template"
            value="table"
          />

          {/* Name + Email */}
          <div className="contact__row">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
            />
          </div>

          {/* Talent */}
          <input
            type="text"
            name="talent"
            placeholder="What's your talent?"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us why you belong on that stage"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit Application →
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__inner">

          <span>
            © {new Date().getFullYear()} India's Got Latent. All roasts reserved.
          </span>

          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#episodes">Episodes</a>
            <a href="#about">About</a>
          </div>

        </div>
      </footer>
    </section>
  )
}