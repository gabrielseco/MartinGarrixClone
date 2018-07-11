// @flow
import React from 'react';
import styles from './ContactLinks.scss';

const ContactLinks = () => (
  <ul className={styles.container}>
    <li>
      <h2>Management</h2>
      <a href="mailto:management@martingarrix.com">
        <i className="fa fa-envelope" />
        &nbsp; management@martingarrix.com
      </a>
    </li>
    <li>
      <h2>Ace Agency</h2>
      <p>
        Katarina Kostic | Booking (Rest Of World)
        <br />
        <a href="mailto:katarina@aceagency.com">
          <i className="fa fa-envelope" />
          &nbsp; katarina@aceagency.com
        </a>
      </p>
    </li>
    <li>
      <h2>Press</h2>
      <a href="mailto:press@martingarrix.com">
        <i className="fa fa-envelope" />
        &nbsp; press@martingarrix.com
      </a>
    </li>
    <li>
      <h2>William Morris</h2>
      <p>
        Joel Zimmerman | Bookings (North America)
        <br />
        <a href="mailto:jz@wmeentertainment.com">
          <i className="fa fa-envelope" />
          &nbsp; jz@wmeentertainment.com
        </a>
      </p>
    </li>
    <li>
      <h2>Fan Mail</h2>
      <a href="mailto:hello@martingarrix.com">
        <i className="fa fa-envelope" />
        &nbsp; hello@martingarrix.com
      </a>
    </li>
  </ul>
);

export default ContactLinks;
