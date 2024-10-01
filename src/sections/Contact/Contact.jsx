import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className='sectionTitle'>✿ contact me ✿</h1>
        <form action="">
            <div className='formGroup'>
                <label htmlFor="name" hidden>name</label>
                <input type="text" name="text" id="name" placeholder="name" required/>
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden>email</label>
                <input type="text" name="email" id="email" placeholder="email" required/>
            </div>
            <div className='formGroup'>
                <label htmlFor="message" hidden>message</label>
                <textarea name="message" id="message" placeholder="message" required></textarea>
            </div>
            <input className='hover btn' type="submit" value="submit"/>
        </form>
    </section>
  )
}

export default Contact